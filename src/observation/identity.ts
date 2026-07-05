// Identity progression — visitor and session.
//
// Realizes the first two levels of the canonical identity model
// (growth-observation/docs/IDENTITY_MODEL.md): visitor → session → user →
// organization. This website observes anonymous acquisition→checkout, so it
// assigns the Visitor and Session anchors; userId/organizationId are populated
// downstream once identity is known (out of scope for GIP-1-B).
//
// Persistence is first-party only: localStorage for the long-lived visitor,
// sessionStorage for the bounded session. No cookies, no third-party storage,
// no fingerprinting. Identifiers are opaque, pseudonymous tokens — never PII.

/** Minimal storage surface, so the logic is testable without a browser. */
export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export const VISITOR_KEY = 'txp.observation.visitorId';
export const SESSION_KEY = 'txp.observation.sessionId';
export const SESSION_LAST_SEEN_KEY = 'txp.observation.sessionLastSeen';

/** A session ends after this much inactivity. */
export const SESSION_IDLE_MS = 30 * 60 * 1000;

function uuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // RFC 4122 v4 fallback for environments without crypto.randomUUID.
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** Get the persistent visitor id, creating and storing one on first touch. */
export function getOrCreateVisitorId(storage: StorageLike): string {
  const existing = storage.getItem(VISITOR_KEY);
  if (existing) return existing;
  const id = `v_${uuid()}`;
  storage.setItem(VISITOR_KEY, id);
  return id;
}

/**
 * Get the current session id, creating a new one on first touch or after the
 * idle window elapses. Refreshes the last-seen timestamp on every call.
 */
export function getOrCreateSessionId(storage: StorageLike, now: number): string {
  const existing = storage.getItem(SESSION_KEY);
  const lastSeenRaw = storage.getItem(SESSION_LAST_SEEN_KEY);
  const lastSeen = lastSeenRaw ? Number(lastSeenRaw) : 0;
  const expired = !existing || !lastSeen || now - lastSeen > SESSION_IDLE_MS;

  const id = expired ? `s_${uuid()}` : existing!;
  if (expired) storage.setItem(SESSION_KEY, id);
  storage.setItem(SESSION_LAST_SEEN_KEY, String(now));
  return id;
}
