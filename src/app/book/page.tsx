'use client';

// Next step for form integration: wire up a POST to an API route (src/app/api/book/route.ts)
// that forwards to Resend, Cal.com, or your CRM. The form is statically structured and ready.

import { useState } from 'react';
import Link from 'next/link';

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#64748B';

const industries = [
  'Financial Services',
  'Technology',
  'Healthcare',
  'Professional Services',
  'Retail & E-commerce',
  'Manufacturing',
  'Legal',
  'Government & Public Sector',
  'Education',
  'Other',
];

const teamSizes = [
  '1–10',
  '11–50',
  '51–200',
  '201–500',
  '500+',
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

type FormState = {
  name: string;
  company: string;
  email: string;
  industry: string;
  teamSize: string;
  challenge: string;
  outcome: string;
};

export default function BookPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    industry: '',
    teamSize: '',
    challenge: '',
    outcome: '',
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
    // TODO: POST to /api/book when backend is wired up.
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

      {/* Form + expectations */}
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
                    Strategy session requested
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                    We&apos;ve received your request and will follow up within 1–2 business
                    days to schedule your session. Check your email at the address you
                    provided.
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="industry" style={labelStyle}>Industry *</label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={form.industry}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select your industry</option>
                      {industries.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="teamSize" style={labelStyle}>Team Size *</label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      required
                      value={form.teamSize}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="challenge" style={labelStyle}>Biggest Challenge *</label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={4}
                    placeholder="Describe your biggest AI challenge or the initiative you're trying to advance..."
                    value={form.challenge}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div>
                  <label htmlFor="outcome" style={labelStyle}>Desired Outcome *</label>
                  <textarea
                    id="outcome"
                    name="outcome"
                    required
                    rows={3}
                    placeholder="What does success look like for you? What would a great outcome from an engagement be?"
                    value={form.outcome}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
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
                  {submitting ? 'Submitting...' : 'Request Strategy Session'}
                </button>

                <p className="text-xs" style={{ color: textMuted }}>
                  We&apos;ll follow up within 1–2 business days to schedule your session.
                  No commitment required.
                </p>
              </form>
            )}
          </div>

          {/* What to expect */}
          <div className="flex flex-col gap-5">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: accent }}
            >
              What to Expect
            </p>
            <div className="flex flex-col gap-4">
              {sessionExpectations.map((e, i) => (
                <div
                  key={e.title}
                  className="rounded-xl p-5 flex gap-4"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <span
                    className="shrink-0 text-sm font-bold"
                    style={{ color: 'rgba(56,189,248,0.3)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                      {e.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                      {e.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 flex flex-col gap-2 mt-2"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <p className="text-xs font-semibold" style={{ color: textPrimary }}>
                Prefer email?
              </p>
              <a
                href="mailto:contact@terrapayx.com"
                className="text-sm"
                style={{ color: accent }}
              >
                contact@terrapayx.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
