import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions — Terra Pay X Labs',
  description:
    'AI execution solutions for enterprise teams, operations leaders, and technology organizations. Terra Pay X Labs designs AI workforces, governance systems, and transformation programs.',
  openGraph: {
    title: 'Solutions — Terra Pay X Labs',
    description:
      'AI workforce, governance, and transformation solutions for organizations moving from AI experimentation to execution.',
    url: 'https://terrapayx.com/solutions',
  },
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#94A3B8';

const useCases = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke={accent} strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke={accent} strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke={secondary} strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke={secondary} strokeWidth="1.5" />
      </svg>
    ),
    audience: 'Operations Teams',
    problem: 'High-volume, repetitive tasks consuming team capacity without AI systems to handle the load.',
    solution: 'AI Workforce Design that maps agent roles to your specific task types, routes work reliably, and frees your team for judgment-intensive work.',
    service: 'AI Workforce Design',
    serviceHref: '/services#workforce',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={accent} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 12v5M12 12l-4-3M12 12l4-3" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    audience: 'Compliance & Legal Teams',
    problem: 'AI adoption blocked by governance gaps — no audit trails, unclear review boundaries, leadership concern about AI-generated output.',
    solution: 'AI Governance & Engineering that establishes review boundaries, audit workflows, and compliance documentation so AI can be deployed with leadership confidence.',
    service: 'AI Governance & Engineering',
    serviceHref: '/services#governance',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke={accent} strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    audience: 'Technology Leadership',
    problem: 'Engineering teams using AI ad hoc with inconsistent quality, no governance, and growing technical debt from unstructured AI adoption.',
    solution: 'AI Engineering systems with defined agent workflows, review boundaries, and structured output standards that make AI a reliable part of the engineering lifecycle.',
    service: 'AI Governance & Engineering',
    serviceHref: '/services#governance',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke={accent} strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    audience: 'Executive & Leadership Teams',
    problem: 'Organization has AI enthusiasm but no strategic alignment, no implementation infrastructure, and no way to measure AI investment against business outcomes.',
    solution: 'AI Business Transformation covering strategy, workforce design, governance implementation, and the organizational change management required to make AI execution stick.',
    service: 'AI Business Transformation',
    serviceHref: '/services#transformation',
  },
];

const maturityLevels = [
  {
    level: 'Exploring',
    desc: 'Your team has used AI tools but hasn\'t deployed structured AI systems. You\'re evaluating where AI can create operational value.',
    recommendation: 'Start with a strategy session and AI Workforce Design to establish your first structured AI deployment.',
    color: accent,
  },
  {
    level: 'Piloting',
    desc: 'You have AI pilots running but they\'re siloed, inconsistent, or blocked from broader adoption by governance concerns.',
    recommendation: 'AI Governance & Engineering to establish the framework that turns pilots into production systems.',
    color: secondary,
  },
  {
    level: 'Scaling',
    desc: 'AI is operating in some functions but adoption is uneven, governance is informal, and leadership wants structured oversight before expanding.',
    recommendation: 'AI Business Transformation to align strategy, extend workforce architecture, and formalize governance across functions.',
    color: accent,
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: bg }}
      >
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-5">
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ border: '1px solid rgba(56,189,248,0.4)', color: accent, background: 'rgba(56,189,248,0.06)' }}
          >
            Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: textPrimary }}>
            AI execution for your specific context
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: textMuted }}>
            Different organizations are at different stages of AI adoption. We design solutions
            matched to your maturity, your team, and your governance requirements.
          </p>
        </div>
      </section>

      {/* By use case */}
      <section className="py-20 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              By Team & Function
            </p>
            <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
              Solutions by organizational context
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.audience}
                className="card-hover rounded-xl p-6 flex flex-col gap-4"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">{uc.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold" style={{ color: textPrimary }}>
                      {uc.audience}
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: textMuted }}>
                    Challenge
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                    {uc.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: accent }}>
                    Solution
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                    {uc.solution}
                  </p>
                </div>
                <Link
                  href={uc.serviceHref}
                  className="self-start text-xs font-semibold"
                  style={{ color: accent }}
                >
                  → {uc.service}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maturity levels */}
      <section className="py-20 px-6" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              By AI Maturity
            </p>
            <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
              Where are you on the AI execution journey?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maturityLevels.map((m) => (
              <div
                key={m.level}
                className="card-hover rounded-xl p-6 flex flex-col gap-4"
                style={{
                  background: surface,
                  border: `1px solid ${border}`,
                  borderTop: `3px solid ${m.color}`,
                }}
              >
                <h3 className="text-lg font-bold" style={{ color: m.color }}>
                  {m.level}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {m.desc}
                </p>
                <div
                  className="p-3 rounded-lg text-xs leading-relaxed"
                  style={{ background: bg, border: `1px solid ${border}`, color: textMuted }}
                >
                  <span className="font-semibold" style={{ color: textPrimary }}>
                    Recommended:{' '}
                  </span>
                  {m.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{ background: surface, borderTop: `1px solid ${border}` }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
            Identify the right solution for your context
          </h2>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            A strategy session gives us the information we need to recommend the right engagement
            scope — and gives you a clear picture of what AI execution looks like for your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book"
              className="px-7 py-3 rounded-lg text-sm font-semibold"
              style={{ background: accent, color: bg }}
            >
              Request a Strategy Session
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-lg text-sm font-semibold"
              style={{ border: `1px solid ${border}`, color: textPrimary }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
