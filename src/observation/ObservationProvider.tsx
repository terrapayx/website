'use client';

// ObservationProvider — wires the canonical observation contract into the app.
//
// It is the single injection point (rendered once in the root layout). It:
//   - constructs an ObservationClient from real browser APIs;
//   - emits `acquisition.visit.landed` once per session (the Landing surface);
//   - emits `engagement.page.viewed` on every route;
//   - emits `engagement.product.viewed` for any Product surface on the page;
//   - emits `commerce.checkout.started` when a Primary Commerce CTA is clicked
//     (a delegated, capture-phase listener — so pages need only a data marker,
//     never a click handler; the business flow is untouched).
//
// All browser access happens inside effects, so it is safe under static export.

import { createContext, useContext, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ObservationClient } from './client';
import { createDefaultAdapter } from './adapter';
import { EventType, type ObservationEventType, type ObservationPage } from './contract';
import {
  CLICK_SURFACE_EVENTS,
  CLICK_SURFACE_SELECTOR,
  DataAttr,
  INTERSECT_SURFACE_EVENTS,
  INTERSECT_SURFACE_SELECTOR,
  Surface,
  VIEW_SURFACE_EVENTS,
  VIEW_SURFACE_SELECTOR,
  type ObservationSurface,
} from './surfaces';

const LANDED_KEY = 'txp.observation.landed';

/** Fraction of a section that must be visible before it counts as viewed. */
const SECTION_VISIBLE_RATIO = 0.5;

/**
 * Build the `resource` for an element bound to a cta/section surface. The
 * identity is a FIELD VALUE — `engagement.hero.viewed` would begin an unbounded
 * name set, which the canonical naming standard prohibits.
 */
function resourceFor(el: HTMLElement, surface: ObservationSurface) {
  const id = el.getAttribute(DataAttr.ID) || undefined;
  return id ? { type: surface, id } : undefined;
}

interface ObservationApi {
  observe: (eventType: ObservationEventType | string, page?: boolean) => void;
}

const ObservationContext = createContext<ObservationApi | null>(null);

/** Access the observation API imperatively (optional; most instrumentation is declarative). */
export function useObservation(): ObservationApi {
  const ctx = useContext(ObservationContext);
  if (!ctx) {
    // No-op outside the provider rather than throwing — instrumentation must
    // never break a page.
    return { observe: () => {} };
  }
  return ctx;
}

function currentPage(): ObservationPage {
  if (typeof window === 'undefined') return {};
  return {
    url: window.location.href,
    path: window.location.pathname,
    referrer: document.referrer || undefined,
    title: document.title || undefined,
  };
}

export function ObservationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const clientRef = useRef<ObservationClient | null>(null);
  const lastViewedPath = useRef<string | null>(null);

  // Build the client once, from real browser APIs.
  const getClient = (): ObservationClient | null => {
    if (typeof window === 'undefined') return null;
    if (!clientRef.current) {
      clientRef.current = new ObservationClient({
        local: window.localStorage,
        session: window.sessionStorage,
        location: { search: window.location.search, hostname: window.location.hostname },
        referrer: document.referrer || '',
        adapter: createDefaultAdapter(),
      });
    }
    return clientRef.current;
  };

  const api = useMemo<ObservationApi>(
    () => ({
      observe: (eventType, page = false) => {
        const client = getClient();
        client?.emit(eventType, page ? { page: currentPage() } : {});
      },
    }),
    [],
  );

  // Landing (once per session) + per-route page and product-surface views.
  useEffect(() => {
    const client = getClient();
    if (!client) return;
    if (lastViewedPath.current === pathname) return; // guard StrictMode double-invoke
    lastViewedPath.current = pathname;

    // Landing surface: the session's first observed touch.
    try {
      if (!window.sessionStorage.getItem(LANDED_KEY)) {
        client.emit(EventType.ACQUISITION_VISIT_LANDED, { page: currentPage() });
        window.sessionStorage.setItem(LANDED_KEY, '1');
      }
    } catch {
      // storage unavailable — skip the landing guard, still emit page views
    }

    // Every route is a page view.
    client.emit(EventType.ENGAGEMENT_PAGE_VIEWED, { page: currentPage() });

    // Any Product surface present on this route emits a product view.
    if (VIEW_SURFACE_SELECTOR) {
      document.querySelectorAll<HTMLElement>(VIEW_SURFACE_SELECTOR).forEach((el) => {
        const surface = el.getAttribute(DataAttr.SURFACE) as ObservationSurface | null;
        const eventType = surface ? VIEW_SURFACE_EVENTS[surface] : undefined;
        if (!eventType) return;
        const productId = el.getAttribute(DataAttr.PRODUCT) || undefined;
        client.emit(eventType, {
          page: currentPage(),
          resource: productId ? { type: 'product', id: productId } : undefined,
        });
      });
    }
  }, [pathname]);

  // Primary Commerce CTA: delegated, capture-phase click listener.
  useEffect(() => {
    if (typeof document === 'undefined' || !CLICK_SURFACE_SELECTOR) return;

    const onClick = (e: MouseEvent) => {
      const start = e.target as HTMLElement | null;
      const el = start?.closest?.(CLICK_SURFACE_SELECTOR) as HTMLElement | null;
      if (!el) return;
      const surface = el.getAttribute(DataAttr.SURFACE) as ObservationSurface | null;
      const eventType = surface ? CLICK_SURFACE_EVENTS[surface] : undefined;
      if (!eventType) return;

      const client = getClient();
      if (!client) return;
      const productId = el.getAttribute(DataAttr.PRODUCT) || undefined;
      // sendBeacon (see adapter) fires synchronously and survives the navigation
      // to the external checkout, so we never delay or alter the CTA's behavior.
      client.emit(eventType, {
        page: currentPage(),
        resource: productId
          ? { type: 'product', id: productId }
          : resourceFor(el, surface as ObservationSurface),
        metadata: { ctaLabel: (el.textContent || '').trim().slice(0, 80) || undefined },
      });
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  // Carry the visit identity onto off-site checkout links.
  //
  // The observation boundary ends at the CTA click: the payment host is a
  // different origin and carries none of this instrumentation. On 2026-07-28 two
  // checkout CTAs were clicked and only one became a Stripe Session, and the two
  // records could be matched only by guessing from an 18-second gap — an
  // inference that stops working the moment there is more than one a day.
  //
  // Appending `?ref=<visitorId>.<sessionId>` lets the payment host attach it to
  // the session as `client_reference_id`, making the join exact.
  //
  // Done once after hydration rather than during the click, deliberately: the
  // click path to a buy button is the last place to add work that could throw.
  // If this effect never runs, the CTA still navigates exactly as authored — it
  // simply arrives without a reference.
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const ref = getClient()?.identityRef();
    if (!ref) return;

    const selector = `a[${DataAttr.SURFACE}="${Surface.COMMERCE_CTA}"]`;
    document.querySelectorAll<HTMLAnchorElement>(selector).forEach((a) => {
      try {
        const url = new URL(a.href, window.location.href);
        // Only off-site payment links. The CTA falls back to an internal route
        // when no payment URL is configured, and that needs no reference.
        if (url.origin === window.location.origin) return;
        if (url.protocol !== 'https:' && url.protocol !== 'http:') return;
        url.searchParams.set('ref', ref); // set, not append — idempotent per route
        a.href = url.toString();
      } catch {
        // Leave the CTA exactly as authored. Instrumentation must never be the
        // reason someone cannot buy.
      }
    });
  }, [pathname]);

  // Engagement depth (FOP-3): a marked section entering the viewport.
  // Emitted at most once per section per route — repeated scrolling past the
  // same hero is not repeated evidence, and counting it as such would inflate
  // the very signal this exists to measure.
  useEffect(() => {
    if (typeof window === 'undefined' || !INTERSECT_SURFACE_SELECTOR) return;
    if (typeof IntersectionObserver === 'undefined') return; // never break a page

    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const surface = el.getAttribute(DataAttr.SURFACE) as ObservationSurface | null;
          const eventType = surface ? INTERSECT_SURFACE_EVENTS[surface] : undefined;
          if (!eventType) continue;

          const key = `${pathname}::${el.getAttribute(DataAttr.ID) || 'anon'}`;
          if (seen.has(key)) continue;
          seen.add(key);
          observer.unobserve(el);

          getClient()?.emit(eventType, {
            page: currentPage(),
            resource: resourceFor(el, surface as ObservationSurface),
            metadata: { visibleRatio: SECTION_VISIBLE_RATIO },
          });
        }
      },
      { threshold: SECTION_VISIBLE_RATIO },
    );

    document
      .querySelectorAll<HTMLElement>(INTERSECT_SURFACE_SELECTOR)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return <ObservationContext.Provider value={api}>{children}</ObservationContext.Provider>;
}
