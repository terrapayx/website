import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Articles — Terra Pay X Labs',
  description:
    'Practical writing on AI governance, AI workforce design, multi-agent architecture, and the operational realities of deploying AI in business environments.',
  openGraph: {
    title: 'Articles — Terra Pay X Labs',
    description:
      'Practical writing on AI governance, AI workforce design, and moving from AI experimentation to execution.',
    url: 'https://terrapayx.com/articles',
  },
};

const bg = '#020817';
const surface = '#0D1426';
const border = '#1C2E4A';
const accent = '#38BDF8';
const secondary = '#2DD4BF';
const textPrimary = '#E2EBF8';
const textMuted = '#94A3B8';

const articles = [
  {
    tag: 'AI Execution',
    title: 'The Gap Between AI Pilot and AI Production',
    excerpt:
      'Why most AI pilots succeed in isolation but fail to scale — and what it takes to bridge the architectural and governance gap between a working demo and a deployed system.',
    readTime: '7 min read',
    date: 'May 2026',
    featured: true,
  },
  {
    tag: 'AI Governance',
    title: 'Designing AI Governance Systems That Enable Teams',
    excerpt:
      'Governance frameworks are typically designed to restrict. We argue they should be designed to enable — with explicit boundaries that give teams room to move and leadership the confidence to approve.',
    readTime: '6 min read',
    date: 'May 2026',
  },
  {
    tag: 'Architecture',
    title: 'Multi-Agent Architecture Patterns for Enterprise Operations',
    excerpt:
      'A practical look at role separation, task routing, handoff protocols, and coordination patterns for multi-agent systems operating in real business environments.',
    readTime: '9 min read',
    date: 'April 2026',
  },
  {
    tag: 'AI Workforce',
    title: 'Building an AI Workforce: From Concept to Deployment',
    excerpt:
      'How to move from "we should use AI agents" to a structured AI workforce with defined roles, task routing, and governance — without building your own infrastructure from scratch.',
    readTime: '8 min read',
    date: 'April 2026',
  },
  {
    tag: 'Operations',
    title: 'Operational Readiness for AI Systems',
    excerpt:
      'What production-grade AI operations actually require: observability, audit trails, error handling, human escalation paths, and the governance controls that make AI systems trustworthy.',
    readTime: '7 min read',
    date: 'March 2026',
  },
  {
    tag: 'Strategy',
    title: 'The ROI Framework for AI Business Transformation',
    excerpt:
      'How to evaluate AI investment against business outcomes — with practical framing for making the case to leadership and scoping engagements to deliver measurable value.',
    readTime: '5 min read',
    date: 'March 2026',
  },
];

export default function ArticlesPage() {
  const [featured, ...rest] = articles;

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
            Articles
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: textPrimary }}>
            Practical writing on AI execution
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: textMuted }}>
            Governance, workforce design, architecture patterns, and the operational
            realities of deploying AI in business environments.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-12 px-6" style={{ background: surface, borderTop: `1px solid ${border}` }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: accent }}>
            Featured
          </p>
          <div
            className="card-hover rounded-2xl p-8 sm:p-10"
            style={{ background: bg, border: `1px solid ${accent}` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-4">
                <span
                  className="self-start px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    color: accent,
                  }}
                >
                  {featured.tag}
                </span>
                <h2 className="text-2xl font-bold leading-snug" style={{ color: textPrimary }}>
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs" style={{ color: textMuted }}>
                    {featured.date}
                  </span>
                  <span className="text-xs" style={{ color: textMuted }}>
                    {featured.readTime}
                  </span>
                </div>
              </div>
              <div
                className="rounded-xl p-6 flex flex-col gap-3"
                style={{ background: surface, border: `1px solid ${border}` }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                  style={{
                    background: 'rgba(45,212,191,0.06)',
                    border: '1px solid rgba(45,212,191,0.2)',
                    color: secondary,
                  }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: secondary }}
                  />
                  Publishing soon — subscribe to be notified
                </div>
                <p className="text-xs leading-relaxed" style={{ color: textMuted }}>
                  Articles are released as internal programs produce publishable insights.
                  Subscribers get early access.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex justify-center px-4 py-2.5 rounded-lg text-sm font-semibold"
                  style={{ background: accent, color: bg }}
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-12 px-6 pb-20" style={{ background: surface }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: accent }}>
            All Articles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <div
                key={article.title}
                className="card-hover rounded-xl p-6 flex flex-col gap-4"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <span
                  className="self-start px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(56,189,248,0.08)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    color: accent,
                  }}
                >
                  {article.tag}
                </span>
                <h3 className="text-base font-semibold leading-snug" style={{ color: textPrimary }}>
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: textMuted }}>
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2" style={{ borderTop: `1px solid ${border}` }}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs" style={{ color: textMuted }}>
                      {article.date}
                    </span>
                    <span className="text-xs" style={{ color: textMuted }}>
                      {article.readTime}
                    </span>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(45,212,191,0.06)',
                      border: '1px solid rgba(45,212,191,0.15)',
                      color: secondary,
                    }}
                  >
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section
        className="py-20 px-6"
        style={{ background: bg, borderTop: `1px solid ${border}` }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold" style={{ color: textPrimary }}>
            Get articles as they publish
          </h2>
          <p className="text-base leading-relaxed" style={{ color: textMuted }}>
            Articles are released as our programs generate publishable insights. Reach out
            via the contact form and we&apos;ll add you to the list.
          </p>
          <Link
            href="/contact"
            className="px-7 py-3 rounded-lg text-sm font-semibold"
            style={{ background: accent, color: bg }}
          >
            Subscribe to Updates
          </Link>
        </div>
      </section>
    </main>
  );
}
