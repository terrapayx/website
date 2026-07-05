# Observation (GIP-1-B)

Canonical, vendor-neutral instrumentation of the Terra Pay X website against the
**canonical observation contract** owned by
[`terrapayx/growth-observation`](https://github.com/terrapayx/growth-observation)
(contract version **1.0.0**). This module emits canonical observation events; it
does **not** redefine observation semantics, and it depends on no analytics
vendor, SDK, dashboard, warehouse, or runtime service.

## Business surfaces, not page paths

Instrumentation is defined against **business surfaces**, so any future digital
product reuses the same points with no change to this module:

```
Landing Surface  →  Product Surface  →  Primary Commerce CTA  →  Checkout Surface
```

| Surface | Binding | Canonical event |
| --- | --- | --- |
| **Landing** | automatic (session's first touch) | `acquisition.visit.landed` |
| _(every route)_ | automatic (route change) | `engagement.page.viewed` |
| **Product** | `data-observe-surface="product"` `data-observe-product="<id>"` | `engagement.product.viewed` |
| **Primary Commerce CTA** | `data-observe-surface="commerce-cta"` `data-observe-product="<id>"` | `commerce.checkout.started` |
| **Checkout** | off-repo (payment provider) | _observed at CTA as initiation_ |

## Instrumenting a new product (no module changes)

1. Mark the product surface: add `data-observe-surface="product"` and
   `data-observe-product="<product-id>"` to the page's main/hero element.
2. Mark the commerce CTA: add `data-observe-surface="commerce-cta"` and
   `data-observe-product="<product-id>"` to the buy/checkout link.

That is all. The `ObservationProvider` (mounted once in the root layout) picks
up the markers via a delegated, capture-phase listener and emits the canonical
events. No page needs a click handler; the business flow is untouched.

## What it does

- **Identity** — pseudonymous, first-party: a long-lived `visitorId`
  (localStorage) and a bounded `sessionId` (sessionStorage, 30-min idle window).
  No cookies, no fingerprinting, no PII. `userId`/`organizationId` are populated
  downstream once identity is known (out of scope here).
- **Attribution** — first-touch `source`/`medium`/`campaignId` captured from UTM
  params (or referrer, else `direct`), persisted and inherited on every event so
  a checkout traces back to the visit that produced it. `source` is the
  *marketing* origin — never the origin system.
- **Canonical emission** — every event is built to the contract and **validated
  before it is emitted**; invalid events are dropped, never shipped.
- **Adapter abstraction** — events are handed to an `ObservationAdapter`
  (`adapter.ts`). The default beacons to a first-party collector
  (`NEXT_PUBLIC_OBSERVATION_ENDPOINT`) or logs to the console. A future
  GA4/PostHog/collector adapter implements the same interface — the canonical
  events never change. This is the vendor-independence seam.

## Files

| File | Role |
| --- | --- |
| `contract.ts` | Canonical event types + `ObservationEvent` (projection of the growth-observation contract). |
| `surfaces.ts` | The business-surface vocabulary and data-attribute bindings. |
| `validate.ts` | Dependency-free structural validation against the contract. |
| `identity.ts` | Visitor + session identity (first-party storage). |
| `attribution.ts` | First-touch attribution capture + inheritance. |
| `adapter.ts` | `ObservationAdapter` interface + beacon/console adapters. |
| `client.ts` | Builds, validates, and emits canonical events (testable, injected deps). |
| `ObservationProvider.tsx` | Wires the module into the app (mounted in root layout). |
| `observation-event.schema.json` | Vendored canonical JSON Schema (reference of record). |
| `examples/` | One conformant fixture per journey step; checked by `npm run verify:observation`. |

## Not in scope (GIP-1-B)

No Observation Runtime, no dashboards, no warehouses, no BI, no additional
analytics infrastructure. Those remain future options that must be justified by
the evidence this instrumentation begins to produce (Capability Graduation
Doctrine).
