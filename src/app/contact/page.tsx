'use client';

// Next step for form integration: wire up a POST to an API route (src/app/api/contact/route.ts)
// that forwards to Resend, Formspree, or a CRM. The form is statically structured and ready.

import { useState } from 'react';
import Link from 'next/link';

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#64748B';

const budgetRanges = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  'Not sure yet',
];

const inputStyle = {
  background: surface,
  border: `1px solid ${border}`,
  color: textPrimary,
  borderRadius: '0.5rem',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  width: '100%',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  marginBottom: '0.375rem',
  color: textMuted,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};

type FormState = {
  name: string;
  company: string;
  email: string;
  challenge: string;
  budget: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    challenge: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: POST to /api/contact when backend is wired up.
    // For now, simulate submission delay and show success state.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-6 overflow-hidden"
        style={{ background: bg }}
      >
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
            Tell us about your organization and your biggest AI challenge.
            We&apos;ll follow up within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section
        className="py-16 px-6 pb-24"
        style={{ background: surface, borderTop: `1px solid ${border}` }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                className="rounded-2xl p-10 flex flex-col items-center text-center gap-5"
                style={{ background: bg, border: `1px solid ${secondary}` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(45,212,191,0.12)', border: `1px solid ${secondary}` }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M4 11.5l5 5 9-9" stroke={secondary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold" style={{ color: textPrimary }}>
                    Message received
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                    Thank you for reaching out. We&apos;ll review your message and follow up
                    within 1–2 business days at the email you provided.
                  </p>
                </div>
                <Link
                  href="/"
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold"
                  style={{ background: accent, color: bg }}
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 flex flex-col gap-6"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Organization name"
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="challenge" style={labelStyle}>Biggest Challenge *</label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={4}
                    placeholder="Describe the AI challenge or initiative you're working on..."
                    value={form.challenge}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div>
                  <label htmlFor="budget" style={labelStyle}>Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select a range (optional)</option>
                    {budgetRanges.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 self-start"
                  style={{
                    background: submitting ? `rgba(56,189,248,0.5)` : accent,
                    color: bg,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Direct contact
              </h3>
              <a
                href="mailto:contact@terrapayx.com"
                className="text-sm"
                style={{ color: accent }}
              >
                contact@terrapayx.com
              </a>
            </div>

            <div
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Ready to book directly?
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                If you&apos;re ready to schedule a strategy session now, use the booking form
                for the fastest path to a conversation.
              </p>
              <Link
                href="/book"
                className="inline-flex justify-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ background: accent, color: bg }}
              >
                Book a Strategy Session
              </Link>
            </div>

            <div
              className="rounded-xl p-6 flex flex-col gap-3"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                Response time
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                We respond to all messages within 1–2 business days. Engagements are
                typically scoped within one week of initial contact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
