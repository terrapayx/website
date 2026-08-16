// RI-1 — Truthful Customer Communication.
//
// This page previously rendered a form whose submit handler simulated an 800ms
// network delay and then displayed "Strategy session requested … we'll follow
// up within 1–2 business days". Nothing was ever transmitted: the data lived in
// React state and was destroyed on navigation.
//
// This is a static export (next.config.js `output: 'export'`) — there is no
// server and no API route to post to. Rather than simulate a request the system
// cannot perform, the page now offers the path that genuinely works: a direct
// email, pre-structured with the details that make the first reply useful.
//
// Governing principle (FRPE-RI-0 §1): the system must not claim an observation
// or state transition that did not occur.
//
// Address: labs@terrapayx.com is canonical (Founder decision D1, 2026-07-27).

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book a Strategy Session — Terra Pay X Labs',
  description:
    'Request a strategy session with Terra Pay X Labs — a direct conversation about your AI state, your challenges, and what execution looks like in your context.',
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#94A3B8';

const CONTACT_EMAIL = 'labs@terrapayx.com';

const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Strategy session request',
)}&body=${encodeURIComponent(
  [
    'Name:',
    'Organization:',
    'Industry:',
    'Team size:',
    '',
    'The challenge we are working on:',
    '',
    '',
    'What a good outcome would look like:',
    '',
    '',
  ].join('\n'),
)}`;

const sessionExpectations = [
  {
    title: 'Understand your context',
    desc: 'We learn about your organization, current AI state, team capabilities, and operational constraints.',
  },
  {
    title: 'Identify the real challenge',
    desc: 'We distinguish between AI strategy gaps, execution gaps, and governance gaps — they require different approaches.',
  },
  {
    title: 'Scope what execution looks like',
    desc: 'We define what a meaningful AI engagement would deliver for your specific context and timeline.',
  },
  {
    title: 'No commitment required',
    desc: 'The strategy session is a conversation. We only scope a formal engagement if it makes sense for both parties.',
  },
];

export default function BookPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden" style={{ background: bg }}>
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-5">
          <div
            className="self-start inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ border: '1px solid rgba(56,189,248,0.4)', color: accent, background: 'rgba(56,189,248,0.06)' }}
          >
            Strategy Session
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: textPrimary }}>
            Book a Strategy Session
          </h1>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: textMuted }}>
            A direct conversation about your organization&apos;s AI state, your biggest
            challenges, and what execution actually looks like in your context.
          </p>
        </div>
      </section>

      {/* Request + expectations */}
      <section className="py-16 px-6 pb-24" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Primary path */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col gap-6"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold" style={{ color: textPrimary }}>
                  Request a session by email
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  Sessions are arranged directly by email. The link below opens a message
                  with the useful details already laid out — fill in what you can and send it.
                </p>
              </div>

              <a
                href={MAILTO}
                className="inline-flex self-start items-center px-7 py-3 rounded-lg text-sm font-semibold"
                style={{ background: accent, color: bg }}
              >
                Compose your request
              </a>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: textMuted }}>
                  Or write to
                </span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-semibold" style={{ color: accent }}>
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            {/* What to expect */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-6"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <h2 className="text-lg font-semibold" style={{ color: textPrimary }}>
                What the session covers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {sessionExpectations.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-xl p-5"
                    style={{ background: surface, border: `1px solid ${border}` }}
                  >
                    <div className="flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
                        <circle cx="8" cy="8" r="7" stroke={secondary} strokeWidth="1.3" />
                        <path
                          d="M5 8.2l2.2 2.2L11 6.6"
                          stroke={secondary}
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl p-6 flex flex-col gap-3" style={{ background: bg, border: `1px solid ${border}` }}>
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Who you are talking to
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                Engagements are founder-led. The person on the call is the person who would
                design and implement the work.
              </p>
            </div>

            <div className="rounded-xl p-6 flex flex-col gap-3" style={{ background: bg, border: `1px solid ${border}` }}>
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Prefer to start smaller?
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                The AI Engineering System Starter Kit packages the governance model as a
                self-serve product — no engagement required.
              </p>
              <Link
                href="/products/ai-engineering-starter-kit"
                className="inline-flex justify-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ border: `1px solid ${border}`, color: textPrimary }}
              >
                View the Starter Kit
              </Link>
            </div>

            <div className="rounded-xl p-6 flex flex-col gap-3" style={{ background: bg, border: `1px solid ${border}` }}>
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Just have a question?
              </h3>
              <Link href="/contact" className="text-sm font-semibold" style={{ color: accent }}>
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
