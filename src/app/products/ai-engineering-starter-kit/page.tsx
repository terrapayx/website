import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Engineering System Starter Kit — Terra Pay X',
  description:
    'A turnkey framework for governing AI-assisted software delivery: risk-classified review, explicit routing, and operational guardrails. Founding-customer price USD 299, one-time.',
  openGraph: {
    title: 'AI Engineering System Starter Kit — Terra Pay X',
    description:
      'Adopt governed, AI-assisted software delivery in 30 days. Risk tiers, review routing, and operational guardrails — packaged. Founding-customer price USD 299.',
    url: 'https://terrapayx.com/products/ai-engineering-starter-kit',
  },
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#64748B';

// Founding-customer commercial terms. Kept as named constants so copy stays
// consistent across the hero badge and the pricing section.
const PRICE_DISPLAY = 'USD 299';
const PRICE_NOTE = 'One-time purchase · Founding-customer price';

// The checkout destination is configuration, never a hardcoded payment URL.
// When NEXT_PUBLIC_STARTER_KIT_PAYMENT_URL is set at build time it is used
// directly (the real Terra Pay X payment link). Until that link exists the CTA
// falls back to the existing /contact route so the button is always functional
// and never points at a fabricated payment endpoint. See .env.example.
const paymentUrl = process.env.NEXT_PUBLIC_STARTER_KIT_PAYMENT_URL?.trim();
const ctaConfigured = Boolean(paymentUrl && paymentUrl.length > 0);
const ctaHref = ctaConfigured ? (paymentUrl as string) : '/contact';

const problems = [
  {
    title: 'AI writes the code; nobody governs it',
    body: 'AI now produces a large and growing share of production code. The bottleneck has shifted from writing code to trusting it — and most teams have no deterministic way to do that.',
  },
  {
    title: 'Review is ad hoc and unevenly applied',
    body: 'Without explicit risk tiers, a one-line copy change and a payment-path change get the same casual review. Rigor depends on reviewer mood instead of policy.',
  },
  {
    title: 'Regulated and revenue-critical teams cannot prove control',
    body: 'Payments, fintech, healthcare, and infrastructure teams cannot merge un-reviewed AI output — and need to demonstrate, on demand, that they did not.',
  },
];

const included = [
  {
    title: 'Governance Guide',
    body: 'The complete governance model: risk tiers L1–L6, review, approval, escalation, and release control.',
  },
  {
    title: 'EOS Architecture Guide',
    body: 'The reference architecture: governance kernel, enforcement engine, review and model routing, and operational flows.',
  },
  {
    title: 'AI Review Playbook',
    body: 'The day-to-day operating manual: PR lifecycle, review lifecycle, escalation paths, and common failure modes.',
  },
  {
    title: 'Template Pack',
    body: 'Six ready-to-use, editable templates for pull requests, delivery reports, governance and architecture reviews, risk assessment, and release readiness.',
  },
  {
    title: '30-Day Adoption Plan',
    body: 'A week-by-week rollout plan with goals, activities, deliverables, and success metrics — from zero to an operating, audited system.',
  },
];

const audience = [
  {
    title: 'Engineering leaders',
    body: 'Standing up AI-assisted development across a team and needing a defensible governance posture.',
  },
  {
    title: 'Platform & DevEx teams',
    body: 'Owners of CI/CD, branch protection, and review process who need a reference architecture to build on.',
  },
  {
    title: 'Staff & principal engineers',
    body: 'Responsible for code quality and risk in an AI-heavy delivery environment.',
  },
  {
    title: 'Regulated & revenue-critical teams',
    body: 'Payments, healthcare, fintech, and infrastructure teams who must prove un-reviewed AI output never merges.',
  },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="rgba(45,212,191,0.12)" stroke={secondary} strokeWidth="1.5" />
      <path
        d="M6.5 10.5l2.5 2.5 4.5-4.5"
        stroke={secondary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrimaryCta({ className }: { className?: string }) {
  const classes = `px-7 py-3 rounded-lg text-sm font-semibold ${className ?? ''}`.trim();
  // External configured payment link vs. internal fallback route.
  // Observation markers (GIP-1-B) are declarative and additive: they bind this
  // element to the Primary Commerce CTA surface so the ObservationProvider emits
  // commerce.checkout.started on click. They do not change the CTA's behavior.
  if (ctaConfigured) {
    return (
      <a
        href={ctaHref}
        className={classes}
        style={{ background: accent, color: bg }}
        data-observe-surface="commerce-cta"
        data-observe-product="ai-engineering-starter-kit"
      >
        Get the Starter Kit
      </a>
    );
  }
  return (
    <Link
      href={ctaHref}
      className={classes}
      style={{ background: accent, color: bg }}
      data-observe-surface="commerce-cta"
      data-observe-product="ai-engineering-starter-kit"
    >
      Get the Starter Kit
    </Link>
  );
}

export default function AiEngineeringStarterKitPage() {
  return (
    // Observation marker (GIP-1-B): binds the page to the Product surface so the
    // ObservationProvider emits engagement.product.viewed. Additive only.
    <main data-observe-surface="product" data-observe-product="ai-engineering-starter-kit">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden" style={{ background: bg }}>
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
            Terra Pay X Labs · Starter Kit v1.0
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: textPrimary }}
          >
            AI Engineering System Starter Kit
          </h1>
          <p className="text-xl sm:text-2xl font-medium" style={{ color: textMuted }}>
            Govern AI-assisted software delivery — deterministically, not by hope.
          </p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: textMuted }}>
            A turnkey AI-governance framework that helps engineering teams adopt AI-assisted
            software delivery using proportional risk controls, review routing, and operational
            guardrails. It is the productized version of the Engineering Operating System (EOS)
            that Terra Pay X Labs runs on its own production payments platform.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            <PrimaryCta />
            <a
              href="#whats-included"
              className="px-7 py-3 rounded-lg text-sm font-semibold"
              style={{ border: `1px solid ${border}`, color: textPrimary }}
            >
              See what&apos;s included
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
            <span className="text-lg font-semibold" style={{ color: textPrimary }}>
              {PRICE_DISPLAY}
            </span>
            <span className="text-sm" style={{ color: textMuted }}>
              {PRICE_NOTE}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.3)',
                color: secondary,
              }}
            >
              Digital product · delivered electronically
            </span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              The teams that win are the ones who can trust what AI produces
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
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

      {/* Solution */}
      <section className="py-24 px-6" style={{ background: bg }}>
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              The Solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              A governance system you can run, not a slide deck
            </h2>
          </div>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            The Starter Kit packages a complete operating model for AI-assisted delivery. Every
            change is risk-classified before it is reviewed, routed to the right reviewers and the
            right AI model, checked against an explicit governance policy, and gated by branch
            protection before it can merge. You change the policy in one place and the whole
            organization moves together.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              'Risk is classified before it is reviewed — tiers L1 to L6 set the rigor.',
              'The system enforces; people judge. Automation handles bookkeeping.',
              'Routing is explicit, to both reviewers and AI models.',
              'Nothing high-risk merges unseen — branch protection makes the gate non-optional.',
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-lg p-4"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <span className="shrink-0 mt-0.5">
                  <CheckIcon />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: textPrimary }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        id="whats-included"
        className="py-24 px-6"
        style={{ background: surface, borderTop: `1px solid ${border}` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              What&apos;s Included
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              Five deliverables, ready to adopt
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <div
                key={item.title}
                className="card-hover rounded-xl p-6 flex flex-col gap-4"
                style={{ background: bg, border: `1px solid ${border}`, borderTop: `3px solid ${accent}` }}
              >
                <span className="text-xs font-semibold tracking-widest" style={{ color: accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold" style={{ color: textPrimary }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target customer */}
      <section className="py-24 px-6" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: accent }}>
              Who It&apos;s For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textPrimary }}>
              Built for teams that ship AI-assisted code and own the risk
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {audience.map((a) => (
              <div
                key={a.title}
                className="rounded-xl p-6 flex flex-col gap-2"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <h3 className="text-base font-semibold" style={{ color: textPrimary }}>
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {a.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-center max-w-2xl mx-auto mt-10" style={{ color: textMuted }}>
            No prior AI-governance program is assumed. The kit takes a team from zero to an
            operating, audited system in 30 days.
          </p>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-24 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: accent }}>
            Founding Customer
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="text-5xl font-bold" style={{ color: textPrimary }}>
              {PRICE_DISPLAY}
            </span>
            <span className="text-sm" style={{ color: textMuted }}>
              {PRICE_NOTE}
            </span>
          </div>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            One payment. Lifetime access to v1.0 of the kit and its templates. This is a digital
            product, delivered electronically after purchase — there is nothing to ship.
          </p>
          <PrimaryCta />
          {!ctaConfigured && (
            <p className="text-xs leading-relaxed max-w-md" style={{ color: textMuted }}>
              Secure checkout is being finalized. Contact us to reserve founding-customer pricing
              and we&apos;ll send your payment link directly.
            </p>
          )}
          <p className="text-xs" style={{ color: textMuted }}>
            Questions before buying?{' '}
            <Link href="/contact" className="font-semibold" style={{ color: accent }}>
              Talk to Terra Pay X Labs
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
