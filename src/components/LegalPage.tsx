import type { ReactNode } from 'react';
import Link from 'next/link';

// Shared shell for the legal pages (/privacy, /terms, /refunds).
//
// These three are the only pages on the site whose job is to be *checkable*: a
// customer, a payment provider, or a reviewer reads them to find out what we
// actually do. So they share one layout and one set of styles, and the prose in
// each is written to describe the system as it is rather than as a template
// would assume it to be.

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const textPrimary = '#E2EBF8';
const textMuted = '#94A3B8';

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold tracking-tight" style={{ color: textPrimary }}>
        {heading}
      </h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
        {children}
      </div>
    </section>
  );
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-lg px-5 py-4 text-sm leading-relaxed"
      style={{ background: surface, border: `1px solid ${border}`, color: '#94A3B8' }}
    >
      {children}
    </div>
  );
}

export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="px-6 py-24" style={{ background: bg, minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span
            className="self-start inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ background: surface, border: `1px solid ${border}`, color: accent }}
          >
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: textPrimary }}>
            {title}
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#94A3B8' }}>
            {intro}
          </p>
          <p className="text-xs" style={{ color: textMuted }}>
            Last updated {updated} · Terra Pay X, Inc.
          </p>
        </div>

        <div className="flex flex-col gap-8">{children}</div>

        <div className="pt-6 flex flex-col gap-2" style={{ borderTop: `1px solid ${border}` }}>
          <p className="text-xs" style={{ color: textMuted }}>
            Questions about any of this go to{' '}
            <a href="mailto:labs@terrapayx.com" className="font-semibold" style={{ color: accent }}>
              labs@terrapayx.com
            </a>
            , which is a monitored mailbox.
          </p>
          <p className="text-xs" style={{ color: textMuted }}>
            <Link href="/privacy" style={{ color: accent }}>
              Privacy
            </Link>
            {' · '}
            <Link href="/terms" style={{ color: accent }}>
              Terms
            </Link>
            {' · '}
            <Link href="/refunds" style={{ color: accent }}>
              Refunds
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
