import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform — Terra Pay X',
  description:
    'Terra Pay X Platform: secure, observable, and operationally resilient payments infrastructure built on ECS Fargate, OpenTelemetry, PostgreSQL, and AWS-native services.',
  openGraph: {
    title: 'Platform — Terra Pay X',
    description:
      'Cloud-native payments infrastructure built for reliability and governed AI operations.',
    url: 'https://terrapayx.com/platform',
  },
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#64748B';

const capabilities = [
  {
    title: 'Payments Orchestration',
    body: 'Reliable payment workflows with idempotent processing, reconciliation safety, and resilient recovery mechanisms designed for production-grade reliability.',
  },
  {
    title: 'Financial Correctness',
    body: 'Immutable ledger principles, audit-oriented workflows, and operational safeguards designed for the correctness guarantees that financial systems demand.',
  },
  {
    title: 'Intelligent Operations',
    body: 'AI-assisted engineering governance, structured observability, release review workflows, and bounded operational automation for financial infrastructure.',
  },
];

const architectureLayers = [
  'Clients / External Systems',
  'WAF + TLS Termination',
  'API Layer / Load Balancer',
  'Payment Services (ECS Fargate)',
  'PostgreSQL   |   Redis Cache',
  'OpenTelemetry / CloudWatch',
  'AI Governance Control Plane',
];

const techDetails = [
  { label: 'ECS Fargate', desc: 'Container compute' },
  { label: 'WAF + TLS', desc: 'Edge security' },
  { label: 'PostgreSQL', desc: 'Primary data store' },
  { label: 'Redis', desc: 'Cache and session' },
  { label: 'OpenTelemetry', desc: 'Distributed tracing' },
  { label: 'CloudWatch', desc: 'Metrics and alerting' },
  { label: 'Immutable Deployments', desc: 'Zero-drift infra' },
  { label: 'Structured Logging', desc: 'JSON, queryable' },
  { label: 'AI Control Plane', desc: 'Governed operations' },
];

const readinessItems = [
  { label: 'Structured Logging', desc: 'JSON-formatted, queryable, environment-consistent' },
  { label: 'OpenTelemetry Tracing', desc: 'Distributed trace context across all service boundaries' },
  { label: 'CloudWatch Dashboards', desc: 'Real-time service health and business metrics' },
  { label: 'SLO-Ready Alarms', desc: 'Latency, error rate, and availability alerting' },
  { label: 'DLQ Recovery', desc: 'Dead letter queue monitoring with automated alerting' },
  { label: 'Webhook Reconciliation', desc: 'Idempotent processing with provider event replay' },
  { label: 'Immutable Deployments', desc: 'Zero-drift container deployments via ECS Fargate' },
  { label: 'Audit Workflows', desc: 'Immutable audit trail for all financial state changes' },
];

const platformRoadmap = [
  { area: 'Payment Infrastructure', desc: 'Core payment routing, processing, and reconciliation systems.' },
  { area: 'Ledger Engine', desc: 'Double-entry accounting, audit trail, and financial correctness layer.' },
  { area: 'Subscription Systems', desc: 'Recurring billing, plan management, and lifecycle automation.' },
  { area: 'Merchant Enablement', desc: 'Merchant onboarding, configuration, and operational tooling.' },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="rgba(45,212,191,0.12)" stroke={secondary} strokeWidth="1.5" />
      <path d="M6.5 10.5l2.5 2.5 4.5-4.5" stroke={secondary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PlatformPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 px-6 overflow-hidden"
        style={{ background: bg }}
      >
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
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
            Terra Pay X Platform
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: textPrimary }}
          >
            Cloud-Native Payments Infrastructure
          </h1>
          <p className="text-xl sm:text-2xl font-medium" style={{ color: textMuted }}>
            Built for Reliability and Intelligent Operations
          </p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: textMuted }}>
            Terra Pay X builds secure, observable, and operationally resilient payments
            infrastructure powered by modern cloud architecture and governed AI engineering
            workflows.
          </p>
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(56,189,248,0.08)',
                border: '1px solid rgba(56,189,248,0.2)',
                color: accent,
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: accent }}
              />
              In active development
            </span>
            <a
              href="https://github.com/terrapayx"
              className="text-sm font-semibold"
              style={{ color: accent }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              Core Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              Built on engineering discipline, not buzzwords
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="card-hover rounded-xl p-6 flex flex-col gap-4"
                style={{
                  background: bg,
                  border: `1px solid ${border}`,
                  borderTop: `3px solid ${accent}`,
                }}
              >
                <h3 className="text-lg font-semibold" style={{ color: textPrimary }}>
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Roadmap */}
      <section className="py-24 px-6" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              Platform Roadmap
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              What we&apos;re building
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {platformRoadmap.map((item) => (
              <div
                key={item.area}
                className="rounded-xl p-6 flex flex-col gap-2"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <h3 className="text-base font-semibold" style={{ color: textPrimary }}>
                  {item.area}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="py-24 px-6"
        style={{ background: surface, borderTop: `1px solid ${border}` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              AWS-native. Observable. Operationally resilient.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col items-center gap-0">
              {architectureLayers.map((layer, i) => (
                <div key={layer} className="w-full flex flex-col items-center">
                  <div
                    className="w-full rounded-lg px-5 py-3 text-sm font-medium text-center"
                    style={{
                      background: bg,
                      border: `1px solid ${border}`,
                      borderLeft: `3px solid ${accent}`,
                      color: textPrimary,
                    }}
                  >
                    {layer}
                  </div>
                  {i < architectureLayers.length - 1 && (
                    <div className="flex flex-col items-center my-1">
                      <div style={{ width: 1, height: 12, background: border }} />
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M0 0l5 6 5-6" fill={accent} opacity="0.6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techDetails.map((tech) => (
                <div
                  key={tech.label}
                  className="flex flex-col gap-1 rounded-lg px-4 py-3"
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <span className="text-sm font-semibold" style={{ color: accent }}>
                    {tech.label}
                  </span>
                  <span className="text-xs" style={{ color: textMuted }}>
                    {tech.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Readiness */}
      <section className="py-24 px-6" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              Operational Readiness
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              Production-grade observability and resilience from day one
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {readinessItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <CheckIcon />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold" style={{ color: textPrimary }}>
                    {item.label}
                  </span>
                  <span className="text-xs leading-relaxed" style={{ color: textMuted }}>
                    {item.desc}
                  </span>
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
            Interested in the Platform?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            The Terra Pay X Platform is under active development. Follow along on GitHub
            or reach out via the Labs advisory team to discuss how our engineering
            patterns might inform your own infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://github.com/terrapayx"
              className="px-7 py-3 rounded-lg text-sm font-semibold"
              style={{ background: accent, color: bg }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <Link
              href="/book"
              className="px-7 py-3 rounded-lg text-sm font-semibold"
              style={{ border: `1px solid ${border}`, color: textPrimary }}
            >
              Talk to Terra Pay X Labs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
