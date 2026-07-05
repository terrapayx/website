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
  VIEW_SURFACE_EVENTS,
  VIEW_SURFACE_SELECTOR,
  type ObservationSurface,
} from './surfaces';

const LANDED_KEY = 'txp.observation.landed';

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
        resource: productId ? { type: 'product', id: productId } : undefined,
      });
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return <ObservationContext.Provider value={api}>{children}</ObservationContext.Provider>;
}
