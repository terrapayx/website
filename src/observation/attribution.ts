// Attribution capture, persistence, and inheritance.
//
// Realizes growth-observation/docs/ATTRIBUTION_MODEL.md: first-touch
// acquisition attribution is captured at the Visitor level and inherited
// forward, unchanged, on every later event — so a checkout can always be
// traced to the source/medium/campaign that produced the visit (GI-4).
//
// `source` here is the MARKETING acquisition origin (google, newsletter,
// referral, direct) — never the origin *system*. It is deliberately distinct
// from `sourcePlatform`/`sourceEventId` in the commerce schema.

import type { StorageLike } from './identity';

export const ATTRIBUTION_KEY = 'txp.observation.attribution';

export interface Attribution {
  source?: string;
  medium?: string;
  campaignId?: string;
}

/** Minimal location surface, so the logic is testable without a browser. */
export interface LocationLike {
  search: string; // e.g. "?utm_source=google&utm_medium=cpc"
  hostname: string;
}

function firstNonEmpty(...values: (string | null | undefined)[]): string | undefined {
  for (const v of values) {
    if (typeof v === 'string' && v.trim() !== '') return v.trim();
  }
  return undefined;
}

/** Derive attribution from UTM params, falling back to referrer / direct. */
export function deriveAttribution(location: LocationLike, referrer: string): Attribution {
  const params = new URLSearchParams(location.search);
  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');

  if (utmSource || utmMedium || utmCampaign) {
    return {
      source: firstNonEmpty(utmSource) ?? 'unknown',
      medium: firstNonEmpty(utmMedium) ?? 'unknown',
      campaignId: firstNonEmpty(utmCampaign),
    };
  }

  // No UTM: infer from the referrer.
  if (referrer) {
    try {
      const refHost = new URL(referrer).hostname;
      if (refHost && refHost !== location.hostname) {
        return { source: refHost, medium: 'referral' };
      }
    } catch {
      // malformed referrer — treat as direct
    }
  }

  return { source: 'direct', medium: 'none' };
}

/**
 * Return the persisted first-touch attribution, capturing and storing it on the
 * first visit. Subsequent calls return the stored first-touch unchanged
 * (preservation / inheritance); the model choice (first vs last touch) is a
 * downstream concern — this layer only guarantees the touch is never lost.
 */
export function getOrCaptureAttribution(
  storage: StorageLike,
  location: LocationLike,
  referrer: string,
): Attribution {
  const stored = storage.getItem(ATTRIBUTION_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as Attribution;
    } catch {
      // fall through and re-capture if the stored value is corrupt
    }
  }
  const attribution = deriveAttribution(location, referrer);
  storage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  return attribution;
}
