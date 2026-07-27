import Link from 'next/link';

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#64748B';

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    // RI-3B / FOP-3: the engagement-depth signal. This is the only marker that
    // separates "did not arrive" from "arrived and rejected" — two outcomes that
    // demand opposite remedies and are otherwise indistinguishable in a funnel
    // that only counts purchases.
    <section
      data-observe-surface="section"
      data-observe-id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 overflow-hidden"
      style={{ background: bg }}
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
          style={{
            border: '1px solid rgba(56,189,248,0.4)',
            color: accent,
            background: 'rgba(56,189,248,0.06)',
          }}
        >
          Cloud-Native · AI-Governed · Production-Ready
        </div>

        <h1
          className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight"
          style={{ color: textPrimary }}
        >
          Terra Pay X
        </h1>

        <p className="text-xl sm:text-2xl font-medium" style={{ color: textMuted }}>
          Cloud-native financial infrastructure and intelligent operational systems.
        </p>

        <p className="max-w-2xl text-base leading-relaxed" style={{ color: textMuted }}>
          Terra Pay X builds secure, observable payments infrastructure powered by modern cloud
          architecture — and helps organizations deploy AI workforces, governance systems, and
          operational architectures through Terra Pay X Labs.
        </p>

        {/* D7 (RI-2 acceptance criteria): the homepage previously offered no path to the
            only purchasable product — every CTA led to the advisory funnel. The product
            CTA is ADDED alongside the advisory CTAs, not in place of them.

            RI-3B / FOP-2: all three now carry `data-observe-surface="cta"`. Until this
            delivery the site's primary calls to action were entirely unobservable —
            `commerce.checkout.started` covered only the product-page CTA. The id is a
            data attribute rather than part of the event name, because a name per CTA
            would be unbounded cardinality. */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/book"
            className="px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{ background: accent, color: bg }}
            data-observe-surface="cta"
            data-observe-id="hero-strategy-session"
          >
            Book a Strategy Session
          </Link>
          <Link
            href="/products/ai-engineering-starter-kit"
            className="px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{ border: `1px solid ${secondary}`, color: secondary }}
            data-observe-surface="cta"
            data-observe-id="hero-starter-kit"
          >
            Get the Starter Kit
          </Link>
          <Link
            href="#divisions"
            className="px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{ border: `1px solid ${border}`, color: textPrimary }}
            data-observe-surface="cta"
            data-observe-id="hero-explore-work"
          >
            Explore Our Work
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${bg})` }}
      />
    </section>
  );
}

// ─── Divisions ────────────────────────────────────────────────────────────────

const platformCapabilities = [
  'Payment infrastructure',
  'Ledger & reconciliation',
  'Subscription systems',
  'Merchant enablement',
];

const labsCapabilities = [
  'AI Workforce Design',
  'AI Governance & Engineering',
  'Multi-Agent Operations',
  'AI Engineering Systems',
];

function Divisions() {
  return (
    <section id="divisions" className="py-24 px-6" style={{ background: surface }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: accent }}
          >
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
            Two strategic initiatives, one foundation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Platform */}
          <div
            className="card-hover rounded-2xl p-8 flex flex-col gap-6"
            style={{ background: bg, border: `1px solid ${border}` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: accent }}
                >
                  Terra Pay X
                </p>
                <h3 className="text-2xl font-bold" style={{ color: textPrimary }}>
                  Platform
                </h3>
              </div>
              <span
                className="shrink-0 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(56,189,248,0.08)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  color: accent,
                }}
              >
                In development
              </span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
              Secure, observable, and operationally resilient payments infrastructure built
              on ECS Fargate, OpenTelemetry, PostgreSQL, and AWS-native services — governed
              by the same AI engineering workflows we deploy for clients.
            </p>

            <ul className="flex flex-col gap-2">
              {platformCapabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2 text-sm" style={{ color: textMuted }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" stroke={accent} strokeWidth="1.2" />
                    <path d="M4.5 7l2 2 3-3" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {cap}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <Link
                href="/platform"
                className="flex-1 inline-flex justify-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ border: `1px solid ${border}`, color: textPrimary }}
              >
                Learn about the Platform
              </Link>
              <a
                href="https://github.com/terrapayx"
                className="inline-flex justify-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ color: accent, border: `1px solid rgba(56,189,248,0.2)` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Labs */}
          <div
            className="card-hover rounded-2xl p-8 flex flex-col gap-6"
            style={{ background: bg, border: `1px solid ${accent}` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: secondary }}
                >
                  Terra Pay X
                </p>
                <h3 className="text-2xl font-bold" style={{ color: textPrimary }}>
                  Labs
                </h3>
              </div>
              <span
                className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
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
                Available today
              </span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
              The advisory and innovation division of Terra Pay X. We design and implement
              AI workforces, AI governance systems, and operational architectures that help
              organizations move from AI experimentation to AI execution.
            </p>

            <ul className="flex flex-col gap-2">
              {labsCapabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2 text-sm" style={{ color: textMuted }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" stroke={secondary} strokeWidth="1.2" />
                    <path d="M4.5 7l2 2 3-3" stroke={secondary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {cap}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="flex-1 inline-flex justify-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ background: accent, color: bg }}
              >
                Book a Strategy Session
              </Link>
              <Link
                href="/labs"
                className="inline-flex justify-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                style={{ border: `1px solid ${border}`, color: textPrimary }}
              >
                Explore Labs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Engineering Foundation ───────────────────────────────────────────────────

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

function EngineeringFoundation() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background: `linear-gradient(135deg, ${surface} 0%, rgba(13,20,38,0.95) 50%, ${bg} 100%)`,
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: accent }}
          >
            Engineering Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
            The disciplines that separate serious infrastructure from prototype systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div
              key={p.num}
              className="card-hover rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden"
              style={{ background: bg, border: `1px solid ${border}` }}
            >
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.05) 0%, transparent 60%)',
                }}
              />
              <span
                className="text-4xl font-bold leading-none"
                style={{ color: 'rgba(56,189,248,0.18)' }}
              >
                {p.num}
              </span>
              <h3 className="text-lg font-semibold" style={{ color: textPrimary }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Programs ─────────────────────────────────────────────────────────────────

// RI-1 / decision D3 (Founder, 2026-07-27): two of these cards previously read
// "deployed for a technical operations team" and "deployed across teams", and the
// section was framed as "Programs & Work / Representative programs" — all of which
// a reader takes as claims about delivered client work. Those claims could not be
// substantiated from the operational record. The cards now describe capabilities
// Terra Pay X has built and operates itself, which is verifiable: the governance
// workflows run as required checks on protected branches across the public
// terrapayx GitHub organization.
const programs = [
  {
    tag: 'AI Engineering',
    title: 'AI Engineering System',
    desc: 'Governed AI engineering workflow — structured delivery with explicit review boundaries, risk classification, and an audit trail. Operating across Terra Pay X repositories.',
    division: 'Labs',
    divisionColor: secondary,
  },
  {
    tag: 'Governance',
    title: 'Governance Automation',
    desc: 'AI governance framework with risk classification, approval workflows, and compliance documentation — enforced as required checks on protected branches.',
    division: 'Labs',
    divisionColor: secondary,
  },
  {
    tag: 'Architecture',
    title: 'Multi-Agent Architecture',
    desc: 'Multi-agent coordination system with parallel task routing, defined agent role separation, and governed handoff protocols.',
    division: 'Labs',
    divisionColor: secondary,
  },
  {
    tag: 'Platform',
    title: 'Terra Pay X Platform Program',
    desc: 'Internal reference program: AI-governed engineering for cloud-native payments infrastructure under financial-grade operational standards.',
    division: 'Platform',
    divisionColor: accent,
  },
];

function Programs() {
  return (
    <section className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: accent }}
          >
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
            AI execution in practice
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: textMuted }}>
            The systems our methodology produces — built and operated inside Terra Pay X.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="card-hover rounded-xl p-6 flex flex-col gap-4"
              style={{ background: surface, border: `1px solid ${border}` }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    color: accent,
                  }}
                >
                  {p.tag}
                </span>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: p.divisionColor }}
                >
                  {p.division}
                </span>
              </div>
              <h3 className="text-base font-semibold" style={{ color: textPrimary }}>
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
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background: `linear-gradient(135deg, ${surface} 0%, ${bg} 100%)`,
        borderTop: `1px solid ${border}`,
      }}
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
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
          Terra Pay X Labs — accepting new engagements
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
          Ready to move from AI experimentation to execution?
        </h2>
        <p className="text-base leading-relaxed" style={{ color: textMuted }}>
          A strategy session with Terra Pay X Labs is where we learn about your organization,
          your current AI state, and what execution actually looks like for your context.
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
            href="/labs"
            className="px-7 py-3 rounded-lg text-sm font-semibold"
            style={{ border: `1px solid ${border}`, color: textPrimary }}
          >
            Explore Labs
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Hero />
      <Divisions />
      <EngineeringFoundation />
      <Programs />
      <FinalCTA />
    </main>
  );
}
