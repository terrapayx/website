import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terra Pay X Labs — AI Advisory & Innovation Division',
  description:
    'Terra Pay X Labs is the advisory and innovation division of Terra Pay X. We generate early revenue and first paying customers through AI workforce design, governance, and business transformation engagements.',
  openGraph: {
    title: 'Terra Pay X Labs — AI Advisory & Innovation Division',
    description:
      'Advisory and innovation services for organizations moving from AI experimentation to AI execution.',
    url: 'https://terrapayx.com/labs',
  },
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#94A3B8';

const approach = [
  {
    num: '01',
    title: 'Assess',
    body: 'We start by understanding your current AI state — what\'s been tried, what\'s working, where the friction lives, and what your team is actually capable of sustaining.',
  },
  {
    num: '02',
    title: 'Architect',
    body: 'We design the AI workforce, governance structure, and operational architecture required for your specific context — scoped to your timeline and organizational maturity.',
  },
  {
    num: '03',
    title: 'Implement',
    body: 'We build alongside your team — deploying agents, governance workflows, and operational tooling so that AI execution becomes a durable organizational capability.',
  },
  {
    num: '04',
    title: 'Govern',
    body: 'We establish the review boundaries, audit workflows, and governance controls that ensure AI operations remain safe, auditable, and trusted by leadership.',
  },
];

const labsValues = [
  {
    title: 'Execution before theory',
    body: 'We don\'t sell roadmaps or strategy documents. Every engagement ends with something deployed and operating — AI systems your team can use and trust.',
  },
  {
    title: 'Governance as a capability',
    body: 'Good AI governance doesn\'t restrict operations — it enables them. We design governance frameworks that give leadership confidence and give teams room to move.',
  },
  {
    title: 'Financial-grade engineering standards',
    body: 'Our approach to AI governance and systems design is grounded in the correctness, auditability, and operational resilience standards of financial infrastructure.',
  },
  {
    title: 'Human judgment at the center',
    body: 'AI automation is most valuable when bounded by clear human review. We design systems where AI handles the load and humans retain control of what matters.',
  },
];

const programs = [
  {
    tag: 'AI Engineering',
    title: 'AI Engineering System',
    status: 'Completed',
  },
  {
    tag: 'Governance',
    title: 'Governance Automation',
    status: 'Completed',
  },
  {
    tag: 'Architecture',
    title: 'Multi-Agent Architecture',
    status: 'Active',
  },
  {
    tag: 'Platform',
    title: 'Terra Pay X Platform Program',
    status: 'Active',
  },
];

export default function LabsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden"
        style={{ background: bg }}
      >
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6">
          <div
            className="self-start inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{
              border: '1px solid rgba(56,189,248,0.4)',
              color: accent,
              background: 'rgba(56,189,248,0.06)',
            }}
          >
            Terra Pay X Labs
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ color: textPrimary }}>
            The advisory and innovation division of Terra Pay X
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: textMuted }}>
            Labs exists to generate early revenue and first paying customers while Terra Pay X Core
            continues development. We work with organizations that are ready to move beyond AI
            experimentation and into execution.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/book"
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{ background: accent, color: bg }}
            >
              Request a Strategy Session
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg text-sm font-semibold"
              style={{ border: `1px solid ${border}`, color: textPrimary }}
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: accent }}>
                Mission
              </p>
              <h2 className="text-3xl font-bold leading-tight" style={{ color: textPrimary }}>
                AI that actually runs your business — not just impresses in demos
              </h2>
              <p className="text-base leading-relaxed" style={{ color: textMuted }}>
                Most organizations are stuck between experimentation and execution. They have AI
                tools but not AI systems. They have AI output but not AI governance. They have AI
                enthusiasm but not AI infrastructure.
              </p>
              <p className="text-base leading-relaxed" style={{ color: textMuted }}>
                Terra Pay X Labs fills that gap. We design, implement, and govern AI workforces
                that operate reliably inside real business environments — with the audit trails,
                review boundaries, and correctness standards that serious operations demand.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {labsValues.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl p-5 flex flex-col gap-2"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                    {v.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              How We Work
            </p>
            <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
              A repeatable process for AI execution
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step) => (
              <div
                key={step.num}
                className="card-hover rounded-xl p-6 flex flex-col gap-4"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <span className="text-3xl font-bold" style={{ color: 'rgba(56,189,248,0.2)' }}>
                  {step.num}
                </span>
                <h3 className="text-base font-semibold" style={{ color: textPrimary }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              Current Programs
            </p>
            <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
              Active and completed engagements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(56,189,248,0.08)',
                      border: '1px solid rgba(56,189,248,0.2)',
                      color: accent,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: p.status === 'Active' ? secondary : textMuted }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full"
                      style={{
                        background: p.status === 'Active' ? secondary : textMuted,
                        animation: p.status === 'Active' ? 'pulse 2s infinite' : 'none',
                      }}
                    />
                    {p.status}
                  </span>
                </div>
                <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                  {p.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{ background: bg, borderTop: `1px solid ${border}` }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
            Ready to start an engagement?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            Request a strategy session and we&apos;ll scope what the right engagement looks like for
            your organization.
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
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
