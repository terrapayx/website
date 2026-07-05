// Analytics adapter abstraction — the vendor-independence seam.
//
// The observation layer only ever produces canonical events and hands them to
// an ObservationAdapter. Vendors (GA4, PostHog, Meta Pixel, a first-party
// collector, …) are implemented as adapters BELOW this interface — never as
// concepts within the canonical event. Swapping or adding a vendor is an
// adapter change; the emission code and the canonical events never change.
// This is Runtime Neutrality (CRA) applied to observation.

import type { ObservationEvent } from './contract';

export interface ObservationAdapter {
  /** Stable adapter name, for diagnostics. */
  readonly name: string;
  /** Ship one already-validated canonical event. Must never throw. */
  emit(event: ObservationEvent): void;
}

/** Logs canonical events to the console. Default sink in development. */
export function createConsoleAdapter(): ObservationAdapter {
  return {
    name: 'console',
    emit(event) {
      if (typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.debug('[observation]', event.eventType, event);
      }
    },
  };
}

/**
 * Ships canonical events to a first-party collector endpoint via
 * `navigator.sendBeacon` (survives page navigation — important for the
 * commerce CTA, which navigates away to checkout). Falls back to console when
 * the endpoint is unset or sendBeacon is unavailable. The endpoint is a
 * first-party URL; no third-party vendor is contacted.
 */
export function createBeaconAdapter(endpoint: string | undefined): ObservationAdapter {
  const fallback = createConsoleAdapter();
  return {
    name: endpoint ? 'beacon' : 'beacon(fallback:console)',
    emit(event) {
      const canBeacon =
        typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function';
      if (endpoint && canBeacon) {
        try {
          const blob = new Blob([JSON.stringify(event)], { type: 'application/json' });
          const ok = navigator.sendBeacon(endpoint, blob);
          if (ok) return;
        } catch {
          // fall through to console on any beacon failure
        }
      }
      fallback.emit(event);
    },
  };
}

/**
 * Resolve the default adapter from build-time configuration. When
 * NEXT_PUBLIC_OBSERVATION_ENDPOINT is set (a first-party collector), events are
 * beaconed there; otherwise they are logged. Either way the events are
 * identical canonical events — vendor-neutral by construction.
 */
export function createDefaultAdapter(): ObservationAdapter {
  const endpoint = process.env.NEXT_PUBLIC_OBSERVATION_ENDPOINT?.trim() || undefined;
  return createBeaconAdapter(endpoint);
}
