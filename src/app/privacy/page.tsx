// Privacy Policy.
//
// Written against the system as it actually is, not against a template. In
// particular it describes the first-party observation layer in `src/observation`
// honestly: what it stores, where it stores it, and that it uses localStorage
// and sessionStorage rather than cookies.
//
// RI-1 applies here more than anywhere: a privacy policy is a set of claims
// about behaviour, and publishing one we do not honour is the same failure as a
// form that says "message received" and discards it. Two consequences:
//
//   - The retention period below is a PROMISE. The observation table currently
//     has no TTL configured, so it must be set before this page is published or
//     this paragraph is false. See docs/ in platform-infra-cdk.
//   - Nothing here claims a certification, an audit, or a DPO that we do not
//     have.
//
// PLACEHOLDERS the Founder must complete before publishing are marked TODO.

import type { Metadata } from 'next';
import LegalPage, { LegalNote, LegalSection } from '../../components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Terra Pay X',
  description:
    'What Terra Pay X collects, why, how long it is kept, and how to have it removed. No cookies, no third-party analytics, no data sale.',
};

export default function PrivacyPage(): React.JSX.Element {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="30 July 2026"
      intro="This describes what we collect, why we collect it, how long we keep it, and how to have it removed. It is written to be checked against what the site actually does."
    >
      <LegalSection heading="Who we are">
        <p>
          Terra Pay X, Inc. is a United States corporation operating{' '}
          <strong style={{ color: '#E2EBF8' }}>terrapayx.com</strong>. We are the controller of the
          personal data described here. Contact us about anything on this page at{' '}
          <a href="mailto:labs@terrapayx.com" style={{ color: '#38BDF8' }}>
            labs@terrapayx.com
          </a>
          .
        </p>
        {/* TODO(Founder): registered address and state of incorporation. A privacy
            notice without a postal address is incomplete under GDPR Art. 13. */}
        <p>
          <em>Registered address: to be completed.</em>
        </p>
      </LegalSection>

      <LegalSection heading="What we collect when you buy something">
        <p>
          Checkout is hosted by <strong style={{ color: '#E2EBF8' }}>Stripe</strong>. You enter your
          email address and payment details on Stripe&apos;s page, not ours.
        </p>
        <p>
          <strong style={{ color: '#E2EBF8' }}>We never receive or store your card details.</strong>{' '}
          Stripe processes the payment and returns to us the information we need to fulfil the
          order — your email address, the amount, and identifiers for the purchase. We use your
          email address for one purpose: to deliver the product you bought and to confirm you
          received it.
        </p>
        <p>
          Stripe is an independent controller of the payment data it collects. Their handling is
          governed by their own privacy policy.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect when you browse">
        <p>
          We run our own measurement, on our own infrastructure. It exists to answer one question:
          whether anyone finds this site useful. It records:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>the pages you view, their titles, and how long a page was visible</li>
          <li>the site that linked you here, and any campaign parameters in the URL</li>
          <li>which buttons and sections you interacted with</li>
          <li>
            two random identifiers — one for the browser, one for the visit — so repeat views can be
            counted as one person rather than several
          </li>
        </ul>
        <LegalNote>
          <strong style={{ color: '#E2EBF8' }}>We do not use cookies.</strong> The two identifiers
          live in your browser&apos;s <code>localStorage</code> and <code>sessionStorage</code>.
          They are random values that mean nothing outside this site — they are not linked to your
          name, and they are not shared with anyone. Clearing your browser storage for this site
          erases them, and the next visit starts fresh.
        </LegalNote>
        <p>
          There are{' '}
          <strong style={{ color: '#E2EBF8' }}>no third-party analytics or advertising trackers</strong>{' '}
          on this site. No Google Analytics, no Meta pixel, no session recording. Measurement data
          goes to infrastructure we operate and is not shared with any advertising network.
        </p>
      </LegalSection>

      <LegalSection heading="What we do not do">
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>We do not sell or rent personal data. Ever, to anyone.</li>
          <li>We do not buy, rent, or scrape mailing lists.</li>
          <li>
            We do not run a newsletter or send marketing email. The only mail we send is about a
            purchase you made or a message you sent us.
          </li>
          <li>We do not build advertising profiles or share data with ad networks.</li>
          <li>We do not attempt to identify you from the browsing measurement described above.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Why we are allowed to hold it">
        <p>
          Where the UK GDPR or EU GDPR applies, our lawful bases are:{' '}
          <strong style={{ color: '#E2EBF8' }}>performance of a contract</strong> for the data
          needed to deliver a product you bought, and{' '}
          <strong style={{ color: '#E2EBF8' }}>legitimate interests</strong> for understanding
          whether the site works — an interest we have limited by collecting no cookies, no
          third-party trackers, and no directly identifying information.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        <p>
          <strong style={{ color: '#E2EBF8' }}>Purchase records</strong> are kept for as long as
          needed to support the customer and to meet accounting and tax obligations — generally
          seven years.
        </p>
        <p>
          <strong style={{ color: '#E2EBF8' }}>Browsing measurement</strong> is kept for 26 months
          and then deleted automatically.
        </p>
        <p>
          <strong style={{ color: '#E2EBF8' }}>Email you send us</strong> is kept while the
          conversation is useful, and deleted on request.
        </p>
      </LegalSection>

      <LegalSection heading="Where it is stored">
        <p>
          Our infrastructure runs on Amazon Web Services in Singapore and the United States. If you
          are in the UK, the EEA, or elsewhere outside those regions, your data is transferred
          there. Payment data is handled by Stripe under their own transfer safeguards.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You can ask us for a copy of what we hold about you, ask us to correct it, ask us to
          delete it, or object to the browsing measurement. Email{' '}
          <a href="mailto:labs@terrapayx.com" style={{ color: '#38BDF8' }}>
            labs@terrapayx.com
          </a>{' '}
          and we will respond within 30 days.
        </p>
        <p>
          One practical limit, stated plainly: the browsing identifiers are random and not connected
          to your name, so if you ask us to delete &ldquo;your&rdquo; browsing data we generally{' '}
          <strong style={{ color: '#E2EBF8' }}>cannot tell which records are yours</strong>. Clearing
          your browser storage for this site is the reliable way to sever the link. We would rather
          say this than imply a capability we do not have.
        </p>
        <p>
          If you are in the UK or EEA and think we have handled your data badly, you may complain to
          your national data protection authority.
        </p>
      </LegalSection>

      <LegalSection heading="Children">
        <p>
          This site is not directed at children, and we do not knowingly collect data from anyone
          under 16. If you believe we have, tell us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          If we change this policy we will update the date at the top. Material changes affecting
          existing customers will be sent by email to the address used for the purchase.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
