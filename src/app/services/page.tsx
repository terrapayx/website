import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Terra Pay X Labs',
  description:
    'AI Workforce Design, AI Governance & Engineering, and AI Business Transformation services from Terra Pay X Labs. Execution-focused engagements starting at $500.',
  openGraph: {
    title: 'Services — Terra Pay X Labs',
    description:
      'AI implementation and governance services for organizations moving from experimentation to execution.',
    url: 'https://terrapayx.com/services',
  },
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#94A3B8';

const services = [
  {
    id: 'workforce',
    label: 'Service 01',
    title: 'AI Workforce Design',
    price: '$500',
    tagline: 'Build an AI team that works alongside your people',
    description:
      'AI agents are most powerful when they\'re designed with clear roles, defined tasks, and structured coordination. We design AI workforce architectures that map directly to your operational context — not generic templates, but purpose-built systems your team can trust and extend.',
    deliverables: [
      'AI agent role definition and scope documentation',
      'Task routing architecture and workflow map',
      'Multi-agent coordination protocol design',
      'Integration plan for your existing tools and systems',
      'Deployment support and team enablement',
    ],
    outcomes: [
      'Deployed AI agents operating in your environment',
      'Documented workforce architecture your team owns',
      'Clear governance boundaries for each agent role',
    ],
    suitable: [
      'Teams with repetitive, high-volume operational tasks',
      'Organizations piloting AI but lacking structured deployment',
      'Engineering or operations teams ready for agent-assisted workflows',
    ],
  },
  {
    id: 'governance',
    label: 'Service 02',
    title: 'AI Governance & Engineering',
    price: '$1,500',
    tagline: 'AI governance that enables operations instead of blocking them',
    description:
      'Governance is often treated as a risk management exercise. We treat it as an operational capability. Good governance frameworks give leadership confidence and give teams the room to move. We design and implement governance structures grounded in the auditability and correctness standards of financial systems.',
    deliverables: [
      'AI governance framework tailored to your organization',
      'Risk classification model for AI-assisted operations',
      'Review boundary and approval workflow design',
      'Audit trail and compliance documentation architecture',
      'Leadership alignment documentation and enablement',
    ],
    outcomes: [
      'Governance framework deployed and adopted by your team',
      'Clear approval boundaries that accelerate, not block, operations',
      'Audit-ready documentation for compliance and leadership review',
    ],
    suitable: [
      'Organizations deploying AI in regulated or compliance-sensitive contexts',
      'Teams where leadership needs visibility and control over AI output',
      'Companies preparing for AI governance audits or board-level review',
    ],
    featured: true,
  },
  {
    id: 'transformation',
    label: 'Service 03',
    title: 'AI Business Transformation',
    price: '$3,000',
    tagline: 'Full-scope transformation from AI strategy to operational deployment',
    description:
      'For organizations ready for comprehensive change, this engagement covers the full arc — from strategic alignment through AI workforce architecture, governance implementation, and cross-functional enablement. We work alongside your leadership and teams to make AI execution a durable organizational capability.',
    deliverables: [
      'Strategic AI transformation roadmap and executive alignment',
      'AI workforce design across relevant business functions',
      'Full governance framework and review system implementation',
      'Cross-functional team enablement and capability transfer',
      'Operating model documentation for ongoing AI operations',
    ],
    outcomes: [
      'AI systems deployed across target business functions',
      'Governance and oversight framework operating in production',
      'Internal teams equipped to sustain and extend AI operations',
    ],
    suitable: [
      'Organizations committed to AI as a core operational capability',
      'Leadership teams aligned on AI investment and organizational change',
      'Companies seeking a partner for the full implementation journey',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Strategy Session',
    desc: 'We learn about your organization, your current AI state, and what execution looks like in your context.',
  },
  {
    step: '02',
    title: 'Scoping & Proposal',
    desc: 'We scope the engagement, define deliverables and timeline, and align on success criteria before any work begins.',
  },
  {
    step: '03',
    title: 'Design & Build',
    desc: 'We design and implement your AI systems alongside your team, with regular checkpoints and transparent progress.',
  },
  {
    step: '04',
    title: 'Deploy & Govern',
    desc: 'We deploy the systems into your environment, establish governance, and ensure your team is equipped to operate and extend them.',
  },
];

export default function ServicesPage() {
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
            Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: textPrimary }}>
            Structured engagements built around your objectives
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: textMuted }}>
            Every engagement is scoped to your specific context. We don&apos;t deploy generic
            solutions — we design and implement AI systems that fit your team, your operations,
            and your governance requirements.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {services.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="rounded-2xl p-8 sm:p-10"
              style={{
                background: bg,
                border: svc.featured ? `1px solid ${accent}` : `1px solid ${border}`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: textMuted }}>
                      {svc.label}
                    </span>
                    {svc.featured && (
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ background: accent, color: bg }}
                      >
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1" style={{ color: textPrimary }}>
                      {svc.title}
                    </h2>
                    <p className="text-base font-medium" style={{ color: accent }}>
                      {svc.tagline}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                    {svc.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: textMuted }}>
                      Deliverables
                    </p>
                    <ul className="flex flex-col gap-2">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm" style={{ color: textMuted }}>
                          <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" fill="rgba(45,212,191,0.1)" stroke={secondary} strokeWidth="1.2" />
                            <path d="M5 8.5l2 2 4-4" stroke={secondary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-5">
                  <div
                    className="rounded-xl p-5 flex flex-col gap-4"
                    style={{ background: surface, border: `1px solid ${border}` }}
                  >
                    <div>
                      <p className="text-xs" style={{ color: textMuted }}>Starting investment</p>
                      <p className="text-3xl font-bold mt-1" style={{ color: textPrimary }}>
                        {svc.price}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: textMuted }}>
                        Outcomes
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {svc.outcomes.map((o) => (
                          <li key={o} className="text-xs leading-relaxed" style={{ color: textMuted }}>
                            — {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: textMuted }}>
                        Suitable for
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {svc.suitable.map((s) => (
                          <li key={s} className="text-xs leading-relaxed" style={{ color: textMuted }}>
                            — {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/book"
                      className="inline-flex justify-center px-4 py-3 rounded-lg text-sm font-semibold"
                      style={
                        svc.featured
                          ? { background: accent, color: bg }
                          : { border: `1px solid ${border}`, color: textPrimary }
                      }
                    >
                      Book a Strategy Session
                    </Link>
                  </div>

                  <p className="text-xs text-center" style={{ color: textMuted }}>
                    Final scope determined during strategy session
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              How Engagements Work
            </p>
            <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
              From first conversation to deployed system
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <span className="text-3xl font-bold" style={{ color: 'rgba(56,189,248,0.18)' }}>
                  {p.step}
                </span>
                <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {p.desc}
                </p>
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
            Not sure which service fits?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            A strategy session helps us understand your situation before recommending a scope.
            There&apos;s no commitment required — just a direct conversation about where you are
            and what execution looks like for your context.
          </p>
          <Link
            href="/book"
            className="px-7 py-3 rounded-lg text-sm font-semibold"
            style={{ background: accent, color: bg }}
          >
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </main>
  );
}
