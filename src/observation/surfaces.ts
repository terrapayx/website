// Business instrumentation surfaces.
//
// Observation is defined against *business surfaces*, not page paths. A page
// binds itself to a surface declaratively (a data attribute); the observation
// layer maps surfaces to canonical events. Any future digital product reuses
// these same surfaces with no change to the observation layer.
//
//   Landing Surface  →  Product Surface  →  Primary Commerce CTA  →  Checkout Surface
//
// - Landing / page views are emitted automatically (session start + route
//   change) — they need no marker.
// - Product and Commerce-CTA surfaces are bound declaratively with the data
//   attributes below.
// - The Checkout surface itself lives off-repo (the payment provider); this
//   website observes its *initiation* at the Primary Commerce CTA.

import { EventType, type ObservationEventType } from './contract';

export const Surface = {
  LANDING: 'landing',
  PRODUCT: 'product',
  COMMERCE_CTA: 'commerce-cta',
  CHECKOUT: 'checkout',
  // ── FRPE-RI-3B ─────────────────────────────────────────────────────────────
  /** Any call-to-action, including advisory ones. FOP-2. */
  CTA: 'cta',
  /** A page section whose visibility is the engagement-depth signal. FOP-3. */
  SECTION: 'section',
} as const;

export type ObservationSurface = (typeof Surface)[keyof typeof Surface];

/** Declarative attributes a page adds to bind an element to a surface. */
export const DataAttr = {
  /** Marks an element as a business surface, e.g. `data-observe-surface="product"`. */
  SURFACE: 'data-observe-surface',
  /** Identifies the product a surface concerns, e.g. `data-observe-product="ai-engineering-starter-kit"`. */
  PRODUCT: 'data-observe-product',
  /**
   * Identifies WHICH cta/section this element is, e.g. `data-observe-id="hero-starter-kit"`.
   * This is deliberately a field value, not part of the event name: a name per
   * section would be unbounded cardinality, which the naming standard forbids.
   */
  ID: 'data-observe-id',
} as const;

/**
 * Surfaces that emit on view (when the marked element is present after a
 * navigation). Keyed by surface → canonical event type.
 */
export const VIEW_SURFACE_EVENTS: Partial<Record<ObservationSurface, ObservationEventType>> = {
  [Surface.PRODUCT]: EventType.ENGAGEMENT_PRODUCT_VIEWED,
};

/**
 * Surfaces that emit on click (a delegated listener catches clicks on the
 * marked element). Keyed by surface → canonical event type.
 */
export const CLICK_SURFACE_EVENTS: Partial<Record<ObservationSurface, ObservationEventType>> = {
  [Surface.COMMERCE_CTA]: EventType.COMMERCE_CHECKOUT_STARTED,
  [Surface.CTA]: EventType.ENGAGEMENT_CTA_CLICKED,
};

/**
 * Surfaces observed by viewport intersection rather than by route change.
 * This is the engagement-depth signal (FOP-3) — the only thing that separates
 * "did not arrive" from "arrived and rejected", which demand opposite remedies.
 */
export const INTERSECT_SURFACE_EVENTS: Partial<Record<ObservationSurface, ObservationEventType>> = {
  [Surface.SECTION]: EventType.ENGAGEMENT_SECTION_VIEWED,
};

/** CSS selector matching any element observed by intersection. */
export const INTERSECT_SURFACE_SELECTOR = Object.keys(INTERSECT_SURFACE_EVENTS)
  .map((s) => `[${DataAttr.SURFACE}="${s}"]`)
  .join(',');

/** CSS selector matching any element bound to a click surface. */
export const CLICK_SURFACE_SELECTOR = Object.keys(CLICK_SURFACE_EVENTS)
  .map((s) => `[${DataAttr.SURFACE}="${s}"]`)
  .join(',');

/** CSS selector matching any element bound to a view surface. */
export const VIEW_SURFACE_SELECTOR = Object.keys(VIEW_SURFACE_EVENTS)
  .map((s) => `[${DataAttr.SURFACE}="${s}"]`)
  .join(',');
