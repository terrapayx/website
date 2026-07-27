import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Terra Pay X Labs',
  description:
    'Terra Pay X Labs is the advisory and innovation division of Terra Pay X, building AI execution capabilities for organizations that are serious about production deployment.',
  openGraph: {
    title: 'About — Terra Pay X Labs',
    description:
      'About Terra Pay X Labs — our mission, values, and the engineering principles that guide our work.',
    url: 'https://terrapayx.com/about',
  },
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#64748B';

const values = [
  {
    title: 'Execution before strategy',
    body: 'We believe strategy without implementation is noise. Every engagement ends with something built, deployed, and operating — not a report of recommendations.',
  },
  {
    title: 'Governance as infrastructure',
    body: 'AI governance isn\'t a compliance burden — it\'s the operational infrastructure that makes AI systems trustworthy and scalable. We design governance frameworks that enable rather than restrict.',
  },
  {
    title: 'Financial-grade correctness',
    body: 'Our engineering background in financial infrastructure means we apply the same correctness, auditability, and reliability standards to AI systems that financial systems demand.',
  },
  {
    title: 'Human judgment first',
    body: 'AI automation is most valuable when it\'s bounded. We design systems where AI handles the load and humans retain control of what actually matters.',
  },
  {
    title: 'Direct accountability',
    body: 'Founder-led engagements with no intermediaries. The people who design your systems are the people who implement them — and stand behind the results.',
  },
  {
    title: 'Matched to your maturity',
    body: 'We don\'t apply a single template to every organization. Our frameworks adapt to your team\'s current capabilities and grow with your AI adoption.',
  },
];

const timeline = [
  {
    period: 'Origin',
    title: 'Terra Pay X founded',
    desc: 'Terra Pay X was established to build cloud-native payments infrastructure with AI governance embedded from the start — not bolted on.',
  },
  {
    period: 'Labs',
    title: 'Terra Pay X Labs division launched',
    desc: 'Labs was created as the advisory and innovation arm — a way to generate early revenue and serve organizations actively working to deploy AI while Terra Pay X Core continues development.',
  },
  // RI-1 / decision D3 (Founder, 2026-07-27): the previous entry claimed Labs was
  // "running active engagements". That claim could not be substantiated from the
  // operational record, so it is replaced with statements the record supports.
  // If recurring client delivery later becomes an evidenced business activity,
  // engagement language can be restored with a documented basis.
  {
    period: 'Today',
    title: 'Building, validating, and proving in production',
    desc: 'Labs is building governed AI and commerce capabilities, developing products, and validating them against production evidence — with the Terra Pay X Platform Program as the primary reference implementation. Live payment capture and end-to-end treasury settlement are both validated on production infrastructure.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: bg }}
      >
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6">
          <div
            className="self-start inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{ border: '1px solid rgba(56,189,248,0.4)', color: accent, background: 'rgba(56,189,248,0.06)' }}
          >
            About
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ color: textPrimary }}>
            Built to move organizations from AI experimentation to AI execution
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: textMuted }}>
            Terra Pay X Labs is the advisory and innovation division of Terra Pay X. We exist
            because the gap between AI experimentation and AI production is real, and most
            organizations need more than strategy advice to close it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: accent }}>
                Mission
              </p>
              <h2 className="text-3xl font-bold leading-tight" style={{ color: textPrimary }}>
                AI advisory grounded in engineering, not theory
              </h2>
              <p className="text-base leading-relaxed" style={{ color: textMuted }}>
                Most AI advisory firms deliver strategy. Terra Pay X Labs delivers implementation.
                The difference matters because organizations don&apos;t have an AI understanding
                problem — they have an AI execution problem. They know what they want to do with
                AI. They struggle to make it work in production, at scale, under real organizational
                constraints.
              </p>
              <p className="text-base leading-relaxed" style={{ color: textMuted }}>
                Our work is grounded in the engineering disciplines that financial infrastructure
                demands — correctness, auditability, operational resilience, and governed
                automation. We apply those same standards to AI system design.
              </p>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium self-start"
                style={{
                  background: 'rgba(45,212,191,0.08)',
                  border: '1px solid rgba(45,212,191,0.3)',
                  color: secondary,
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: secondary }}
                />
                Accepting new engagements
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {timeline.map((t) => (
                <div
                  key={t.period}
                  className="rounded-xl p-5 flex gap-4"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <div
                    className="shrink-0 w-16 text-xs font-semibold pt-0.5"
                    style={{ color: accent }}
                  >
                    {t.period}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold" style={{ color: textPrimary }}>
                      {t.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              Values
            </p>
            <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
              The principles that shape how we work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover rounded-xl p-6 flex flex-col gap-3"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <h3 className="text-base font-semibold" style={{ color: textPrimary }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terra Pay X Core note */}
      <section
        className="py-16 px-6"
        style={{ background: surface, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8"
            style={{ background: bg, border: `1px solid ${border}` }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: accent }}>
                Terra Pay X Core
              </p>
              <h3 className="text-xl font-bold" style={{ color: textPrimary }}>
                Labs is the advisory arm. Core is the product.
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                Terra Pay X is building cloud-native payments infrastructure powered by modern cloud
                architecture and AI governance engineering. The Terra Pay X Platform is our core
                product — an AI-governed financial infrastructure system built on ECS Fargate,
                OpenTelemetry, PostgreSQL, and AWS-native services with financial-grade reliability
                standards.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                Terra Pay X Labs uses the Platform Program as our primary internal reference for
                AI governance and engineering patterns — so the frameworks we apply to client
                engagements are the same ones operating in our own production infrastructure.
              </p>
              <a
                href="https://github.com/terrapayx"
                className="self-start text-sm font-semibold"
                style={{ color: accent }}
                target="_blank"
                rel="noopener noreferrer"
              >
                → View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: bg }}>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
            Work with Terra Pay X Labs
          </h2>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            If you&apos;re ready to move from AI experimentation to AI execution, a strategy session
            is the place to start.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book"
              className="px-7 py-3 rounded-lg text-sm font-semibold"
              style={{ background: accent, color: bg }}
            >
              Book a Strategy Session
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg text-sm font-semibold"
              style={{ border: `1px solid ${border}`, color: textPrimary }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
