# Pull Request

## Summary

Describe the change.

## Risk Classification

Select one:

- [ ] L1 — Content-only changes, article drafts, typo fixes
- [ ] L2 — SEO metadata, layout-only UI changes, static marketing copy changes
- [ ] L3 — Analytics, tracking scripts, non-sensitive client-side behavior
- [ ] L4 — Contact forms, booking forms, API routes, deployment config, security headers, CSP, environment variable usage
- [ ] L5 — Payment-related implementation, checkout flow, customer data workflow, authentication, lead data persistence, CRM integration with sensitive data
- [ ] L6 — Credential exposure, unsafe form handling, public secret leakage, production destructive changes, payment provider credential misuse

## Affected Areas

- [ ] Homepage / brand content
- [ ] Labs pages (`/labs`, `/services`, `/solutions`)
- [ ] Platform pages (`/platform`)
- [ ] Articles / editorial content
- [ ] About / contact pages
- [ ] Booking / consultation form (`/book`)
- [ ] Contact form (`/contact`)
- [ ] API routes
- [ ] Navigation / layout / shared components
- [ ] SEO metadata / Open Graph
- [ ] Public assets (`/public`)
- [ ] Deployment configuration (S3, CloudFront, CI/CD)
- [ ] Security headers / CSP
- [ ] Environment variables
- [ ] Governance workflows / CODEOWNERS / PR template

## Payment Scope Check

- [ ] This PR does NOT add Stripe, checkout, payment provider integration, or payment functionality
- [ ] This PR does NOT introduce customer financial data handling
- [ ] This PR does NOT add authentication or session management

## Validation

- [ ] Local build passes (`npm run build`)
- [ ] Visual review completed for UI changes
- [ ] SEO / metadata impact reviewed
- [ ] Security implications reviewed (forms, API routes, headers)
- [ ] No secrets or credentials committed
- [ ] Deployment impact reviewed (cache invalidation, CloudFront, S3)
- [ ] Rollback plan documented (if applicable)

## Rollback Plan

Describe how this change can be safely reverted.

## Notes for Reviewers

Add context, assumptions, or open questions.
