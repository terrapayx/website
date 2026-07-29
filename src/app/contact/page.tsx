// RI-1 — Truthful Customer Communication.
//
// This page previously rendered a form whose submit handler simulated an 800ms
// network delay and then displayed "Message received … we'll follow up within
// 1–2 business days". Nothing was ever transmitted: the data lived in React
// state and was destroyed on navigation.
//
// This is a static export (next.config.js `output: 'export'`) — there is no
// server and no API route to post to. Rather than simulate a submission the
// system cannot perform, the page now offers the contact path that genuinely
// works: direct email to a mailbox verified to receive mail.
//
// Governing principle (FRPE-RI-0 §1): the system must not claim an observation
// or state transition that did not occur.
//
// Address: labs@terrapayx.com is canonical (Founder decision D1, 2026-07-27).
// It is the only Terra Pay X address with positive evidence of receiving mail.
// contact@terrapayx.com is not provisioned-verified and is therefore not
// published anywhere on this site.

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — Terra Pay X',
  description:
    'Get in touch with Terra Pay X Labs by email. Direct contact with the people who design and implement the work.',
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#64748B';

const CONTACT_EMAIL = 'labs@terrapayx.com';

const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Terra Pay X Labs enquiry',
)}&body=${encodeURIComponent(
  [
    'Name:',
    'Organization:',
    '',
    'What we are working on:',
    '',
    '',
    '(Anything else you would like us to know before we reply.)',
  ].join('\n'),
)}`;

const includeInMessage = [
  'Your name and organization',
  'The AI or delivery challenge you are working on',
  'Where you are today — exploring, piloting, or already in production',
];

export default function ContactPage() {
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
            Contact
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: textPrimary }}>
            Get in touch
          </h1>
          <p className="text-lg leading-relaxed max-w-xl" style={{ color: textMuted }}>
            Email us directly. Messages go to the Terra Pay X Labs mailbox and are read by
            the people who would do the work.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 pb-24" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Primary path */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col gap-6"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold" style={{ color: textPrimary }}>
                  Email Terra Pay X Labs
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  We do not run a contact form. Email reaches us directly, and you keep a copy
                  of what you sent.
                </p>
              </div>

              {/* Observation markers (GIP-1-B): declarative and additive — they bind
                  this element to the CTA surface so the ObservationProvider emits
                  engagement.cta.clicked. They do not change the link's behavior.

                  The click is the ONLY fact observable from our side. Whether a
                  message was actually sent happens in the visitor's mail client,
                  where we have no visibility — so this is deliberately not named
                  as a contact or enquiry event. Claiming an outcome we cannot see
                  is the failure this page was rewritten to remove. */}
              <a
                href={MAILTO}
                className="inline-flex self-start items-center px-7 py-3 rounded-lg text-sm font-semibold"
                style={{ background: accent, color: bg }}
                data-observe-surface="cta"
                data-observe-id="contact-compose-email"
              >
                Compose an email
              </a>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: textMuted }}>
                  Or write to
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg font-semibold"
                  style={{ color: accent }}
                  data-observe-surface="cta"
                  data-observe-id="contact-email-address"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div
                className="rounded-xl p-6 flex flex-col gap-3"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                  Helpful to include
                </h3>
                <ul className="flex flex-col gap-2">
                  {includeInMessage.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: textMuted }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 mt-0.5"
                      >
                        <circle cx="8" cy="8" r="7" stroke={secondary} strokeWidth="1.3" />
                        <path
                          d="M5 8.2l2.2 2.2L11 6.6"
                          stroke={secondary}
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl p-6 flex flex-col gap-3" style={{ background: bg, border: `1px solid ${border}` }}>
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Who reads it
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                Terra Pay X Labs engagements are founder-led. The person who replies is the
                person who would design and implement the work — there is no intake layer in
                between.
              </p>
            </div>

            <div className="rounded-xl p-6 flex flex-col gap-3" style={{ background: bg, border: `1px solid ${border}` }}>
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Looking at the Starter Kit?
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                Questions about the AI Engineering System Starter Kit are welcome before you
                buy — scope, fit, or what is inside.
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
                Elsewhere
              </h3>
              <a
                href="https://github.com/terrapayx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
                style={{ color: accent }}
              >
                github.com/terrapayx →
              </a>
              <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                Our engineering and governance work is public.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
