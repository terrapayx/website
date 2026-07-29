// Terms of Service.
//
// Scope note: Terra Pay X currently sells exactly one thing — the AI Engineering
// System Starter Kit, a documentation package, one-time payment, delivered by
// email. These terms describe that and nothing else. They deliberately do not
// cover subscriptions, SaaS access, or professional services, because we do not
// sell those through this site today. Terms that describe products we do not
// have would be the same class of untruth as a form that fakes a submission.
//
// DELIVERY TIMING is deliberately not promised in hours or days. FRPE-RI-1
// established that the site must not assert a timeframe it has no evidence for;
// a single prior settlement is not a service level. If a commitment is wanted,
// it is a Founder decision to make and then state — not something to infer.
//
// PLACEHOLDERS the Founder must complete before publishing are marked TODO.

import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LegalNote, LegalSection } from '../../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service — Terra Pay X',
  description:
    'The terms on which Terra Pay X sells the AI Engineering System Starter Kit: what you get, what you may do with it, and what we promise.',
};

const accent = '#38BDF8';
const strong = '#E2EBF8';

export default function TermsPage(): React.JSX.Element {
  return (
    <LegalPage
      title="Terms of Service"
      updated="30 July 2026"
      intro="These terms govern the purchase and use of products sold on this site. They are short because we sell one thing."
    >
      <LegalSection heading="Who you are contracting with">
        <p>
          Terra Pay X, Inc., a United States corporation. Reachable at{' '}
          <a href="mailto:labs@terrapayx.com" style={{ color: accent }}>
            labs@terrapayx.com
          </a>
          .
        </p>
        {/* TODO(Founder): registered address and state of incorporation. */}
        <p>
          <em>Registered address: to be completed.</em>
        </p>
      </LegalSection>

      <LegalSection heading="What we sell">
        <p>
          One product: the{' '}
          <Link href="/products/ai-engineering-starter-kit" style={{ color: accent }}>
            AI Engineering System Starter Kit
          </Link>{' '}
          — a documentation package, sold for a one-time payment of USD 299.
        </p>
        <p>
          &ldquo;Lifetime access to v1.0&rdquo; means exactly what it says: you receive version 1.0
          of the kit and its templates, and you keep them indefinitely. It is{' '}
          <strong style={{ color: strong }}>not</strong> a subscription, and it does not entitle you
          to future major versions, to support, or to consulting time. If we release a v2.0 we may
          offer it separately.
        </p>
      </LegalSection>

      <LegalSection heading="Payment">
        <p>
          Payments are processed by Stripe. Prices are in US dollars and exclude any tax that may
          apply where you are; you are responsible for that. Your order is accepted when payment is
          confirmed.
        </p>
      </LegalSection>

      <LegalSection heading="Delivery">
        <p>
          The kit is delivered by email to the address you provide at checkout, after payment is
          verified. We confirm that you received it.
        </p>
        <LegalNote>
          Delivery is currently performed by a person rather than automatically. We are not
          promising a delivery time in hours, because we do not yet have enough completed orders to
          support such a promise — and stating one we could not stand behind is worse than stating
          none. If your kit has not arrived and you are wondering, email{' '}
          <a href="mailto:labs@terrapayx.com" style={{ color: accent }}>
            labs@terrapayx.com
          </a>{' '}
          and you will get a human reply.
        </LegalNote>
        <p>
          If we cannot deliver at all, you get a full refund. See the{' '}
          <Link href="/refunds" style={{ color: accent }}>
            Refund Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="What you may and may not do with it">
        <p>
          You get a perpetual, non-exclusive, non-transferable licence to use the kit{' '}
          <strong style={{ color: strong }}>
            for yourself and inside the organisation that paid for it
          </strong>
          , including on client work you perform.
        </p>
        <p>You may not:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>resell, sublicense, or redistribute the kit or its templates as a product</li>
          <li>publish it publicly, in whole or in substantial part</li>
          <li>
            use it to train or fine-tune a machine learning model intended for distribution to
            others
          </li>
        </ul>
        <p>
          We retain all intellectual property in the kit. Nothing here transfers ownership. Work
          product you create using the templates is yours.
        </p>
      </LegalSection>

      <LegalSection heading="What the kit is not">
        <p>
          The kit is documentation and templates describing engineering governance practice. It is{' '}
          <strong style={{ color: strong }}>
            not legal, financial, regulatory, or compliance advice
          </strong>
          , and buying it does not make your systems compliant with anything. Decisions you make
          using it remain yours.
        </p>
        <p>
          It is provided &ldquo;as is&rdquo;. We do not warrant that it is free of errors or fit for
          any particular purpose.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the maximum extent the law allows, our total liability arising from your purchase is
          limited to the amount you paid us. We are not liable for lost profits, lost data, or
          indirect or consequential loss.
        </p>
        <p>
          Nothing here excludes liability that cannot lawfully be excluded — including for fraud, or
          for consumer rights you have that cannot be signed away.
        </p>
      </LegalSection>

      <LegalSection heading="Ending things">
        <p>
          If you breach the licence terms above, the licence ends. You may stop using the kit at any
          time. Refunds are governed by the{' '}
          <Link href="/refunds" style={{ color: accent }}>
            Refund Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        {/* TODO(Founder): state of incorporation determines this. Do not guess — the
            wrong jurisdiction is worse than an obvious blank. */}
        <p>
          <em>
            Governing law and venue: to be completed, following the state of incorporation.
          </em>
        </p>
        <p>
          If you are a consumer, this does not deprive you of the protection of mandatory laws in
          your country of residence.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          We may update these terms for future purchases. The terms that apply to your purchase are
          the ones published when you bought.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
