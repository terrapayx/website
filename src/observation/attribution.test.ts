import { describe, expect, it } from 'vitest';
import {
  ATTRIBUTION_KEY,
  deriveAttribution,
  getOrCaptureAttribution,
  type LocationLike,
} from './attribution';
import type { StorageLike } from './identity';

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

const here: LocationLike = { search: '', hostname: 'terrapayx.com' };

describe('deriveAttribution', () => {
  it('prefers UTM parameters over the referrer', () => {
    const a = deriveAttribution(
      { search: '?utm_source=newsletter&utm_medium=email&utm_campaign=launch', hostname: 'terrapayx.com' },
      'https://l.instagram.com/',
    );
    expect(a).toEqual({ source: 'newsletter', medium: 'email', campaignId: 'launch' });
  });

  it('falls back to the referrer host for an off-site arrival', () => {
    expect(deriveAttribution(here, 'https://l.instagram.com/')).toEqual({
      source: 'l.instagram.com',
      medium: 'referral',
    });
  });

  it('treats an on-site referrer as direct — internal navigation is not acquisition', () => {
    expect(deriveAttribution(here, 'https://terrapayx.com/articles')).toEqual({
      source: 'direct',
      medium: 'none',
    });
  });

  it.each([
    ['no referrer', ''],
    ['a malformed referrer', 'not-a-url'],
  ])('falls back to direct for %s', (_label, referrer) => {
    expect(deriveAttribution(here, referrer)).toEqual({ source: 'direct', medium: 'none' });
  });

  /**
   * Real arrivals seen on 2026-07-28 came from `android-app://…`, which has no
   * meaningful hostname. It must degrade to a usable value, not throw.
   */
  it('handles an app-scheme referrer without throwing', () => {
    const a = deriveAttribution(here, 'android-app://com.google.android.googlequicksearchbox/');
    expect(a.source).toBeTruthy();
    expect(a.medium).toBeTruthy();
  });
});

describe('getOrCaptureAttribution', () => {
  it('captures and persists the first touch', () => {
    const s = fakeStorage();
    const a = getOrCaptureAttribution(s, here, 'https://l.instagram.com/');
    expect(a).toEqual({ source: 'l.instagram.com', medium: 'referral' });
    expect(JSON.parse(s.data[ATTRIBUTION_KEY])).toEqual(a);
  });

  /**
   * FIRST-touch, held at the visitor level and inherited forward. This is the
   * behaviour that made two sessions arriving from the Google app report
   * `l.instagram.com` in the 2026-07-28 window — working as specified, not a
   * defect, but the reason the funnel's source counts are not per-visit channel
   * data. Pinned here so nobody "fixes" it into last-touch by accident.
   */
  it('keeps the first touch when a later visit arrives from somewhere else', () => {
    const s = fakeStorage();
    const first = getOrCaptureAttribution(s, here, 'https://l.instagram.com/');
    const later = getOrCaptureAttribution(
      s,
      here,
      'android-app://com.google.android.googlequicksearchbox/',
    );
    expect(later).toEqual(first);
    expect(later.source).toBe('l.instagram.com');
  });

  it('keeps the first touch even when a later visit carries UTM parameters', () => {
    const s = fakeStorage();
    getOrCaptureAttribution(s, here, 'https://l.instagram.com/');
    const later = getOrCaptureAttribution(
      s,
      { search: '?utm_source=newsletter&utm_medium=email', hostname: 'terrapayx.com' },
      '',
    );
    expect(later.source).toBe('l.instagram.com');
  });

  it('re-captures when the stored value is corrupt rather than failing', () => {
    const s = fakeStorage({ [ATTRIBUTION_KEY]: '{not json' });
    expect(getOrCaptureAttribution(s, here, 'https://l.instagram.com/')).toEqual({
      source: 'l.instagram.com',
      medium: 'referral',
    });
  });
});
