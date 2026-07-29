// Refund Policy.
//
// A separate page rather than a section inside /terms, deliberately: payment
// providers and reviewers look for a findable refund policy, and "it's in
// clause 9 of the terms" fails that test.
//
// THE POLICY BELOW IS A BUSINESS DECISION, not a legal necessity. 30 days,
// no questions asked, is the recommended default and the reasoning is stated on
// the page. The Founder can tighten it; the drafting note is that a stingy
// refund policy on a USD 299 digital product tends to cost more in chargebacks
// and support time than it saves, and a chargeback is worse than a refund
// because it carries a fee and counts against the Stripe account.
//
// The EU/UK digital-content withdrawal right is handled explicitly rather than
// ignored — see the "If you are in the UK or EU" section.

import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LegalNote, LegalSection } from '../../components/LegalPage';

export const metadata: Metadata = {
  title: 'Refund Policy — Terra Pay X',
  description:
    'Thirty days, no questions asked, subject to our abuse policy. How to request a refund from Terra Pay X.',
};

const accent = '#38BDF8';
const strong = '#E2EBF8';

export default function RefundsPage(): React.JSX.Element {
  return (
    <LegalPage
      title="Refund Policy"
      updated="30 July 2026"
      intro="Thirty days, no questions asked, for anyone acting in good faith. If the kit is not what you needed, email us and we refund you."
    >
      <LegalSection heading="The policy">
        <p>
          If you bought the AI Engineering System Starter Kit and it is not what you needed, email{' '}
          <a href="mailto:labs@terrapayx.com" style={{ color: accent }}>
            labs@terrapayx.com
          </a>{' '}
          within <strong style={{ color: strong }}>30 days</strong> of purchase and we will refund
          you in full.
        </p>
        <p>
          You do not need to explain why. You do not need to prove you did not use it. We will not
          ask you to justify it.
        </p>
        <p>
          The one exception is the abuse case set out at the bottom of this page. We would rather
          state it here, next to the promise, than let you find it after you have relied on the
          promise.
        </p>
        <LegalNote>
          We know a digital product cannot be handed back, and we are not pretending otherwise. The
          policy is generous because we would rather refund someone who is disappointed than keep
          money from someone who feels stuck with it. If the kit is not worth USD 299 to you, we
          would rather know.
        </LegalNote>
      </LegalSection>

      <LegalSection heading="How to ask">
        <p>
          Email{' '}
          <a href="mailto:labs@terrapayx.com" style={{ color: accent }}>
            labs@terrapayx.com
          </a>{' '}
          from the address you used at checkout, or tell us what that address was. Say you want a
          refund. That is the whole process.
        </p>
        <p>
          We process refunds to the original payment method through Stripe. Your bank typically
          takes a further five to ten business days to show it.
        </p>
      </LegalSection>

      <LegalSection heading="If we cannot deliver">
        <p>
          If we fail to deliver the kit to you at all, you get a full refund regardless of how much
          time has passed. That is not a concession — you paid for something you did not receive.
        </p>
      </LegalSection>

      <LegalSection heading="If you are in the UK or EU">
        <p>
          Consumers there normally have 14 days to withdraw from a distance purchase. For digital
          content delivered immediately, that right is lost{' '}
          <strong style={{ color: strong }}>
            only if you expressly consent to immediate delivery and acknowledge the loss
          </strong>
          .
        </p>
        <p>
          We do not rely on that. The 30-day policy above is longer than the statutory 14 days and
          applies to you whether or not you consented to anything, so you are never worse off than
          the law provides.
        </p>
      </LegalSection>

      <LegalSection heading="Please talk to us before a chargeback">
        <p>
          If something has gone wrong, email us first. A chargeback costs us a fee on top of the
          refund and takes months to resolve, and you will get your money back faster by asking us
          directly — we do not argue about refunds.
        </p>
        <p>
          We reserve the right to decline refunds where there is clear evidence of abuse, such as
          repeated purchase-and-refund cycles or redistribution of the kit in breach of the{' '}
          <Link href="/terms" style={{ color: accent }}>
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
