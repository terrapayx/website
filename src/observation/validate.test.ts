import { describe, expect, it } from 'vitest';
import { EventType } from './contract';
import { validateObservationEvent } from './validate';

// This validator is what makes the contract-first rule self-enforcing rather
// than advisory: an event name that has not been ratified in growth-observation
// is dropped by our own code before it can be shipped. These tests pin that.

function valid(): Record<string, unknown> {
  return {
    eventId: '7c1e4d92-5a63-4f18-b0d7-3e9a2c8f61b4',
    eventType: EventType.ENGAGEMENT_PAGE_DWELLED,
    occurredAt: '2026-07-29T14:30:25.052Z',
    schemaVersion: '1.0.0',
    visitorId: 'v_ab0cf79c-fa9a-4b57-b844-ae869d504b85',
    sessionId: 's_f04ce6ae-e8f5-4c74-9dbe-5a4f17d111ab',
    metadata: { visibleMs: 73700 },
  };
}

const reasons = (e: unknown) => validateObservationEvent(e).errors.join(' | ');

describe('validateObservationEvent', () => {
  it('accepts a well-formed canonical event', () => {
    expect(validateObservationEvent(valid())).toEqual({ valid: true, errors: [] });
  });

  it.each(['eventId', 'eventType', 'occurredAt', 'schemaVersion'])(
    'rejects an event missing %s',
    (field) => {
      const e = valid();
      delete e[field];
      expect(reasons(e)).toContain(`missing required field: ${field}`);
    },
  );

  it('rejects a two-segment name — the standard requires domain.entity.action', () => {
    expect(reasons({ ...valid(), eventType: 'engagement.dwelled' })).toContain('naming');
  });

  it('rejects a name outside the six canonical domains', () => {
    // The domain set is closed; a new one is a breaking change requiring an ADR.
    expect(reasons({ ...valid(), eventType: 'marketing.page.dwelled' })).toContain('domain');
  });

  it('rejects a vendor-shaped name', () => {
    // EVENT_NAMING_STANDARD §5: names must carry no vendor.
    expect(validateObservationEvent({ ...valid(), eventType: 'ga4.page.view' }).valid).toBe(false);
  });

  /**
   * Every event must be attributable to someone, or it cannot participate in a
   * funnel at all — an unanchored event is a fact about nobody.
   */
  it('rejects an event with no identity anchor', () => {
    const e = valid();
    delete e.visitorId;
    expect(reasons(e)).toContain('identity anchor');
  });

  it.each(['userId', 'organizationId'])('accepts %s as the identity anchor instead', (anchor) => {
    const e = valid();
    delete e.visitorId;
    e[anchor] = 'x_123';
    expect(validateObservationEvent(e).valid).toBe(true);
  });

  /**
   * The strict top-level envelope is what keeps the schema governable: anything
   * situational belongs in `metadata`, which is deliberately open. Without this
   * the top level would accrete fields nobody ratified.
   */
  it('rejects an unknown top-level field', () => {
    expect(reasons({ ...valid(), utmSource: 'instagram' })).toContain('unknown top-level field');
  });

  it('allows arbitrary keys inside metadata', () => {
    const e = valid();
    e.metadata = { visibleMs: 1, anythingSituational: { nested: true } };
    expect(validateObservationEvent(e).valid).toBe(true);
  });

  it('rejects a non-RFC3339 occurredAt', () => {
    expect(reasons({ ...valid(), occurredAt: '29/07/2026 22:30' })).toContain('RFC 3339');
  });

  it('rejects a non-semver schemaVersion', () => {
    expect(reasons({ ...valid(), schemaVersion: 'v1' })).toContain('semver');
  });

  it.each([
    ['null', null],
    ['an array', []],
    ['a string', 'engagement.page.dwelled'],
    ['a number', 42],
  ])('rejects %s rather than throwing', (_label, input) => {
    expect(validateObservationEvent(input).valid).toBe(false);
  });

  it('reports every problem at once, not just the first', () => {
    // The client logs these on drop; one-at-a-time would make a malformed event
    // take several deploys to diagnose.
    const { errors } = validateObservationEvent({ eventType: 'nope' });
    expect(errors.length).toBeGreaterThan(2);
  });
});
