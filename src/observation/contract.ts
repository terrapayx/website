// Canonical Observation Contract — TypeScript projection.
//
// This is a faithful, vendor-neutral projection of the canonical observation
// contract that is the source of truth in `terrapayx/growth-observation`
// (docs/OBSERVATION_EVENT_MODEL.md + schemas/observation-event.schema.json,
// contract version 1.0.0). The website does not redefine observation semantics;
// it emits events that conform to that contract.
//
// If the canonical contract changes, update this projection and the vendored
// schema (`observation-event.schema.json`) together — never diverge from it.

/** The contract version this projection conforms to. */
export const CONTRACT_VERSION = '1.0.0';

/** The six canonical observation domains — the first segment of every eventType. */
export const OBSERVATION_DOMAINS = [
  'acquisition',
  'engagement',
  'commerce',
  'identity',
  'experiment',
  'operational',
] as const;

export type ObservationDomain = (typeof OBSERVATION_DOMAINS)[number];

/**
 * Canonical event types this website emits. The set is intentionally small —
 * new event types are proposed in growth-observation first (the standing
 * contract-first rule), never invented here.
 */
export const EventType = {
  /** acquisition: the session's first observed touch (the Landing surface). */
  ACQUISITION_VISIT_LANDED: 'acquisition.visit.landed',
  /** engagement: a page/screen was viewed. */
  ENGAGEMENT_PAGE_VIEWED: 'engagement.page.viewed',
  /** engagement: a Product surface was viewed. */
  ENGAGEMENT_PRODUCT_VIEWED: 'engagement.product.viewed',
  /** commerce: checkout was initiated at a Primary Commerce CTA. */
  COMMERCE_CHECKOUT_STARTED: 'commerce.checkout.started',
  // ── Ratified 2026-07-27 for FRPE-RI-3B (growth-observation §3.1) ────────────
  // Both names went through the governed lifecycle BEFORE appearing here. The
  // client validates against the contract prior to emission, so an unratified
  // name would be dropped by our own validator — the contract-first rule is
  // self-enforcing rather than advisory.
  /** engagement: a marked section entered the viewport. Section id is a field value, never a name segment. */
  ENGAGEMENT_SECTION_VIEWED: 'engagement.section.viewed',
  /** engagement: a call-to-action was clicked (non-commerce CTAs included). */
  ENGAGEMENT_CTA_CLICKED: 'engagement.cta.clicked',
} as const;

export type ObservationEventType = (typeof EventType)[keyof typeof EventType];

/** Page/screen context; surface (web vs app) lives here, never in the event name. */
export interface ObservationPage {
  url?: string;
  path?: string;
  referrer?: string;
  title?: string;
}

/** The domain object an event concerns (e.g. product, checkout). */
export interface ObservationResource {
  type: string;
  id?: string;
}

/**
 * The canonical observation event — a strict envelope with an open `metadata`
 * body. Structural fields (eventId, eventType, occurredAt, schemaVersion) are
 * always present; at least one identity anchor (visitorId | userId |
 * organizationId) is required. Carries observed facts only — never scores,
 * verdicts, confidence, or interpretation.
 */
export interface ObservationEvent {
  // structural (required)
  eventId: string;
  eventType: ObservationEventType | string;
  occurredAt: string; // RFC 3339, event time (not ingest time)
  schemaVersion: string;

  // identity progression (at least one anchor required)
  visitorId?: string;
  sessionId?: string;
  userId?: string;
  organizationId?: string;

  // attribution
  source?: string;
  medium?: string;
  campaignId?: string;
  experimentId?: string;
  variantId?: string;

  // context
  page?: ObservationPage;
  resource?: ObservationResource;
  metadata?: Record<string, unknown>;
}

/** The exact set of top-level keys the strict envelope permits. */
export const OBSERVATION_TOP_LEVEL_KEYS = [
  'eventId',
  'eventType',
  'occurredAt',
  'schemaVersion',
  'visitorId',
  'sessionId',
  'userId',
  'organizationId',
  'source',
  'medium',
  'campaignId',
  'experimentId',
  'variantId',
  'page',
  'resource',
  'metadata',
] as const;
