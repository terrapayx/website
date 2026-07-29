import { describe, expect, it } from 'vitest';
import {
  SESSION_IDLE_MS,
  SESSION_KEY,
  SESSION_LAST_SEEN_KEY,
  VISITOR_KEY,
  getOrCreateSessionId,
  getOrCreateVisitorId,
  type StorageLike,
} from './identity';

/** In-memory StorageLike — the seam the module was written against. */
function fakeStorage(initial: Record<string, string> = {}): StorageLike & {
  data: Record<string, string>;
} {
  const data = { ...initial };
  return {
    data,
    getItem: (k) => (k in data ? data[k] : null),
    setItem: (k, v) => {
      data[k] = v;
    },
  };
}

const T0 = 1_785_300_000_000; // fixed instant; nothing here depends on the wall clock

describe('getOrCreateVisitorId', () => {
  it('mints a v_-prefixed id on first touch and persists it', () => {
    const s = fakeStorage();
    const id = getOrCreateVisitorId(s);
    expect(id).toMatch(/^v_[0-9a-f-]{36}$/i);
    expect(s.data[VISITOR_KEY]).toBe(id);
  });

  it('returns the same id on every later call', () => {
    const s = fakeStorage();
    expect(getOrCreateVisitorId(s)).toBe(getOrCreateVisitorId(s));
  });

  it('adopts an already-stored id rather than minting a new one', () => {
    const s = fakeStorage({ [VISITOR_KEY]: 'v_pre-existing' });
    expect(getOrCreateVisitorId(s)).toBe('v_pre-existing');
  });
});

describe('getOrCreateSessionId', () => {
  it('mints an s_-prefixed id on first touch and persists it', () => {
    const s = fakeStorage();
    const id = getOrCreateSessionId(s, T0);
    expect(id).toMatch(/^s_[0-9a-f-]{36}$/i);
    expect(s.data[SESSION_KEY]).toBe(id);
  });

  it('reuses the session id inside the idle window', () => {
    const s = fakeStorage();
    const first = getOrCreateSessionId(s, T0);
    expect(getOrCreateSessionId(s, T0 + SESSION_IDLE_MS - 1)).toBe(first);
  });

  it('rolls to a new session id once the idle window elapses', () => {
    const s = fakeStorage();
    const first = getOrCreateSessionId(s, T0);
    const second = getOrCreateSessionId(s, T0 + SESSION_IDLE_MS + 1);
    expect(second).not.toBe(first);
    expect(s.data[SESSION_KEY]).toBe(second);
  });

  /**
   * The idle window runs from LAST ACTIVITY, not from session start. Without the
   * last-seen refresh, a continuously active visitor would be cut into a new
   * session every 30 minutes — inflating the session count for exactly the
   * people who engaged most, which is the opposite of what the funnel needs.
   */
  it('measures idleness from last activity, so a continuously active visit stays one session', () => {
    const s = fakeStorage();
    const first = getOrCreateSessionId(s, T0);
    let t = T0;
    for (let i = 0; i < 10; i++) {
      t += SESSION_IDLE_MS - 60_000; // active every 29 minutes for ~5 hours
      expect(getOrCreateSessionId(s, t)).toBe(first);
    }
    expect(Number(s.data[SESSION_LAST_SEEN_KEY])).toBe(t);
  });

  it('treats a stored session with no last-seen timestamp as expired', () => {
    // Defensive: a half-written storage state must not resurrect a stale session.
    const s = fakeStorage({ [SESSION_KEY]: 's_orphaned' });
    expect(getOrCreateSessionId(s, T0)).not.toBe('s_orphaned');
  });

  it('gives a fresh visitor a fresh session — the incognito case', () => {
    // Both stores empty is what an incognito window or an in-app browser handing
    // off to the real browser looks like. It reads as a brand-new visitor, which
    // is why one person can appear as several in the funnel.
    const local = fakeStorage();
    const session = fakeStorage();
    const v = getOrCreateVisitorId(local);
    const sid = getOrCreateSessionId(session, T0);
    expect(v).toMatch(/^v_/);
    expect(sid).toMatch(/^s_/);
  });
});
