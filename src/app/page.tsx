'use client';

import { useEffect, useState } from 'react';

// ─── Icons (inline SVG components) ───────────────────────────────────────────

function IconFlow() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="#38BDF8" strokeWidth="1.5" />
      <path
        d="M9 14h10M16 11l3 3-3 3"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9c-1.5 0-3 .5-3 2s1.5 2 3 2"
        stroke="#2DD4BF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLedger() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="18" height="20" rx="2" stroke="#38BDF8" strokeWidth="1.5" />
      <path
        d="M9 10h10M9 14h10M9 18h6"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M17 17l2 2 3-3" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="3" fill="#38BDF8" />
      <circle cx="6" cy="8" r="2.5" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="22" cy="8" r="2.5" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="6" cy="20" r="2.5" stroke="#2DD4BF" strokeWidth="1.5" />
      <circle cx="22" cy="20" r="2.5" stroke="#2DD4BF" strokeWidth="1.5" />
      <path
        d="M8.2 9.4L11.5 12M16.5 12l3.3-2.6M8.2 18.6L11.5 16M16.5 16l3.3 2.6"
        stroke="#1C2E4A"
        strokeWidth="2"
      />
      <path
        d="M8.2 9.4L11.5 12M16.5 12l3.3-2.6M8.2 18.6L11.5 16M16.5 16l3.3 2.6"
        stroke="#38BDF8"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="rgba(45,212,191,0.12)" stroke="#2DD4BF" strokeWidth="1.5" />
      <path d="M6.5 10.5l2.5 2.5 4.5-4.5" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      style={{
        backgroundColor: scrolled ? 'rgba(2, 8, 23, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderColor: '#1C2E4A',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-text">Terra Pay</span>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ color: '#38BDF8' }}
          >
            X
          </span>
        </div>

        {/* Right nav */}
        <a
          href="mailto:contact@terrapayx.com"
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: '#64748B' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#E2EBF8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const techBadges = ['ECS Fargate', 'OpenTelemetry', 'PostgreSQL', 'Redis', 'WAF/TLS', 'AWS CloudFront'];

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
      style={{ background: '#020817' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <div
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
          style={{
            border: '1px solid rgba(56,189,248,0.4)',
            color: '#38BDF8',
            background: 'rgba(56,189,248,0.06)',
          }}
        >
          Cloud-Native · AI-Governed · Production-Ready
        </div>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight" style={{ color: '#E2EBF8' }}>
          Cloud-Native Payments Infrastructure
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl font-medium" style={{ color: '#64748B' }}>
          Built for Reliability and Intelligent Operations
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-base leading-relaxed" style={{ color: '#64748B' }}>
          Terra Pay X builds secure, observable, and operationally resilient payments infrastructure
          powered by modern cloud architecture and governed AI engineering workflows.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#architecture"
            className="px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{
              background: '#38BDF8',
              color: '#020817',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#7DD3FC')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#38BDF8')}
          >
            View Architecture
          </a>
          <a
            href="mailto:contact@terrapayx.com"
            className="px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{
              border: '1px solid #38BDF8',
              color: '#38BDF8',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(56,189,248,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Contact Us
          </a>
        </div>

        {/* Tech badges divider */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 pt-8" style={{ borderTop: '1px solid #1C2E4A', width: '100%' }}>
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: '#0D1426',
                border: '1px solid #1C2E4A',
                color: '#64748B',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #020817)' }}
      />
    </section>
  );
}

// ─── Core Capabilities ────────────────────────────────────────────────────────

const capabilities = [
  {
    icon: <IconFlow />,
    title: 'Payments Orchestration',
    body: 'Reliable payment workflows with idempotent processing, reconciliation safety, and resilient recovery mechanisms designed for production-grade reliability.',
  },
  {
    icon: <IconLedger />,
    title: 'Financial Correctness',
    body: 'Immutable ledger principles, audit-oriented workflows, and operational safeguards designed for the correctness guarantees that financial systems demand.',
  },
  {
    icon: <IconNetwork />,
    title: 'Intelligent Operations',
    body: 'AI-assisted engineering governance, structured observability, release review workflows, and bounded operational automation for financial infrastructure.',
  },
];

function CoreCapabilities() {
  return (
    <section className="py-24 px-6" style={{ background: '#020817' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#38BDF8' }}>
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#E2EBF8' }}>
            Built on engineering discipline, not buzzwords
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="card-hover rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: '#0D1426',
                border: '1px solid #1C2E4A',
                borderTop: '3px solid #38BDF8',
              }}
            >
              <div>{cap.icon}</div>
              <h3 className="text-lg font-semibold" style={{ color: '#E2EBF8' }}>
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Architecture ─────────────────────────────────────────────────────────────

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

function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6" style={{ background: '#0D1426' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#38BDF8' }}>
            Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#E2EBF8' }}>
            AWS-native. Observable. Operationally resilient.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: flow diagram */}
          <div className="flex flex-col items-center gap-0">
            {architectureLayers.map((layer, i) => (
              <div key={layer} className="w-full flex flex-col items-center">
                <div
                  className="w-full rounded-lg px-5 py-3 text-sm font-medium text-center"
                  style={{
                    background: '#020817',
                    border: '1px solid #1C2E4A',
                    borderLeft: '3px solid #38BDF8',
                    color: '#E2EBF8',
                  }}
                >
                  {layer}
                </div>
                {i < architectureLayers.length - 1 && (
                  <div className="flex flex-col items-center my-1">
                    <div style={{ width: 1, height: 12, background: '#1C2E4A' }} />
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                      <path d="M0 0l5 6 5-6" fill="#38BDF8" opacity="0.6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: tech detail pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {techDetails.map((tech) => (
              <div
                key={tech.label}
                className="flex flex-col gap-1 rounded-lg px-4 py-3"
                style={{
                  background: '#020817',
                  border: '1px solid #1C2E4A',
                }}
              >
                <span className="text-sm font-semibold" style={{ color: '#38BDF8' }}>
                  {tech.label}
                </span>
                <span className="text-xs" style={{ color: '#64748B' }}>
                  {tech.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Engineering Principles ───────────────────────────────────────────────────

const principles = [
  {
    num: '01',
    title: 'Reliability First',
    body: 'Designed with operational resilience, bounded recovery, and observability-driven operations as foundational requirements — not afterthoughts.',
  },
  {
    num: '02',
    title: 'Financial Safety',
    body: 'Payment correctness, reconciliation integrity, and auditability are treated as first-class concerns throughout the system lifecycle.',
  },
  {
    num: '03',
    title: 'Governed AI Systems',
    body: 'AI workflows operate under explicit governance, defined review boundaries, and human approval controls — automation within bounded scope.',
  },
];

function EngineeringPrinciples() {
  return (
    <section className="py-24 px-6" style={{ background: '#020817' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#38BDF8' }}>
            Engineering Principles
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#E2EBF8' }}>
            The disciplines that separate serious infrastructure from prototype systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div
              key={p.num}
              className="card-hover rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden"
              style={{
                background: '#0D1426',
                border: '1px solid #1C2E4A',
              }}
            >
              {/* Subtle gradient border glow */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(56,189,248,0.06) 0%, transparent 60%)',
                }}
              />
              <span
                className="text-4xl font-bold leading-none"
                style={{ color: 'rgba(56,189,248,0.2)' }}
              >
                {p.num}
              </span>
              <h3 className="text-lg font-semibold" style={{ color: '#E2EBF8' }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AI Engineering ───────────────────────────────────────────────────────────

const aiFeatures = [
  {
    title: 'Governed Automation',
    desc: 'All AI actions operate within explicitly defined scope and review boundaries',
  },
  {
    title: 'Risk-Aware Workflows',
    desc: 'Operational decisions are weighted against financial risk classifications',
  },
  {
    title: 'Human-in-the-Loop',
    desc: 'Critical operations require human approval before execution',
  },
];

function AIEngineering() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background:
          'linear-gradient(135deg, #0D1426 0%, rgba(13,20,38,0.95) 50%, #020817 100%)',
        borderTop: '1px solid #1C2E4A',
        borderBottom: '1px solid #1C2E4A',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#38BDF8' }}>
              AI Engineering
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: '#E2EBF8' }}>
              A Control Plane for Governed AI Operations
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
              Terra Pay X is developing an AI engineering control plane designed to support governed
              software operations, risk-aware workflows, and bounded automation for financial systems.
              Not AI for AI&#39;s sake — AI as infrastructure, operating under the same reliability and
              correctness standards as the systems it governs.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium self-start"
              style={{
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.3)',
                color: '#2DD4BF',
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: '#2DD4BF' }}
              />
              In active development
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="flex flex-col gap-4">
            {aiFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-xl px-5 py-4 flex flex-col gap-1"
                style={{
                  background: '#020817',
                  border: '1px solid #1C2E4A',
                }}
              >
                <span className="text-sm font-semibold" style={{ color: '#E2EBF8' }}>
                  {f.title}
                </span>
                <span className="text-sm" style={{ color: '#64748B' }}>
                  {f.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Operational Readiness ────────────────────────────────────────────────────

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

function OperationalReadiness() {
  return (
    <section className="py-24 px-6" style={{ background: '#020817' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#38BDF8' }}>
            Operational Readiness
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#E2EBF8' }}>
            Production-grade observability and resilience from day one
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {readinessItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: '#0D1426',
                border: '1px solid #1C2E4A',
              }}
            >
              <IconCheck />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold" style={{ color: '#E2EBF8' }}>
                  {item.label}
                </span>
                <span className="text-xs leading-relaxed" style={{ color: '#64748B' }}>
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      className="px-6 py-12"
      style={{
        background: '#020817',
        borderTop: '1px solid #1C2E4A',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          {/* Left: wordmark */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="font-bold text-base" style={{ color: '#E2EBF8' }}>
                Terra Pay
              </span>
              <span className="font-bold text-base" style={{ color: '#38BDF8' }}>
                X
              </span>
            </div>
            <p className="text-xs" style={{ color: '#64748B' }}>
              Cloud-Native Financial Infrastructure
            </p>
          </div>

          {/* Right: links */}
          <nav className="flex items-center gap-6">
            {[
              { label: 'Architecture', href: '#architecture' },
              { label: 'GitHub', href: 'https://github.com/terrapayx' },
              { label: 'Contact', href: 'mailto:contact@terrapayx.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: '#64748B' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E2EBF8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom line */}
        <div style={{ borderTop: '1px solid #1C2E4A', paddingTop: '1.5rem' }}>
          <p className="text-xs text-center" style={{ color: '#64748B' }}>
            &copy; 2026 Terra Pay X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CoreCapabilities />
        <Architecture />
        <EngineeringPrinciples />
        <AIEngineering />
        <OperationalReadiness />
      </main>
      <Footer />
    </>
  );
}
