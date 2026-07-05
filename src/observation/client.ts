// Observation client — builds, validates, and emits canonical events.
//
// The client ties together identity, attribution, validation, and the adapter.
// It is constructed with injected dependencies (storage, location, clock, uuid,
// adapter) so the pure event-building and emission logic is fully testable
// without a browser. The React provider (ObservationProvider) wires the real
// browser implementations.
//
// Invariant: an event is validated against the canonical contract BEFORE it is
// emitted. Invalid events are dropped with a warning and never shipped — the
// success criterion is *valid* canonical events.

import { CONTRACT_VERSION, type ObservationEvent, type ObservationEventType, type ObservationPage, type ObservationResource } from './contract';
import { getOrCaptureAttribution, type Attribution, type LocationLike } from './attribution';
import { getOrCreateSessionId, getOrCreateVisitorId, type StorageLike } from './identity';
import { validateObservationEvent } from './validate';
import type { ObservationAdapter } from './adapter';

export interface ObservationClientDeps {
  /** Long-lived storage (localStorage) — visitor id + first-touch attribution. */
  local: StorageLike;
  /** Session-scoped storage (sessionStorage) — session id + last-seen. */
  session: StorageLike;
  location: LocationLike;
  referrer: string;
  adapter: ObservationAdapter;
  now?: () => number;
  uuid?: () => string;
}

export interface ObserveContext {
  page?: ObservationPage;
  resource?: ObservationResource;
  metadata?: Record<string, unknown>;
}

function defaultUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export class ObservationClient {
  private readonly deps: Required<ObservationClientDeps>;

  constructor(deps: ObservationClientDeps) {
    this.deps = {
      now: () => Date.now(),
      uuid: defaultUuid,
      ...deps,
    };
  }

  private attribution(): Attribution {
    return getOrCaptureAttribution(this.deps.local, this.deps.location, this.deps.referrer);
  }

  /** Build a canonical event from the current identity, attribution, and context. */
  buildEvent(eventType: ObservationEventType | string, ctx: ObserveContext = {}): ObservationEvent {
    const nowMs = this.deps.now();
    const attribution = this.attribution();

    const event: ObservationEvent = {
      eventId: this.deps.uuid(),
      eventType,
      occurredAt: new Date(nowMs).toISOString(),
      schemaVersion: CONTRACT_VERSION,
      visitorId: getOrCreateVisitorId(this.deps.local),
      sessionId: getOrCreateSessionId(this.deps.session, nowMs),
    };

    if (attribution.source) event.source = attribution.source;
    if (attribution.medium) event.medium = attribution.medium;
    if (attribution.campaignId) event.campaignId = attribution.campaignId;
    if (ctx.page) event.page = ctx.page;
    if (ctx.resource) event.resource = ctx.resource;
    if (ctx.metadata && Object.keys(ctx.metadata).length > 0) event.metadata = ctx.metadata;

    return event;
  }

  /**
   * Build, validate, and emit a canonical event. Returns the emitted event, or
   * null when validation failed (in which case nothing is shipped).
   */
  emit(eventType: ObservationEventType | string, ctx: ObserveContext = {}): ObservationEvent | null {
    const event = this.buildEvent(eventType, ctx);
    const result = validateObservationEvent(event);
    if (!result.valid) {
      if (typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn('[observation] dropped invalid event', eventType, result.errors);
      }
      return null;
    }
    this.deps.adapter.emit(event);
    return event;
  }
}
