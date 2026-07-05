// Dependency-free structural validation of a canonical observation event.
//
// This mirrors the load-bearing invariants enforced by the growth-observation
// `validate` gate and JSON Schema (schemas/observation-event.schema.json):
// required structural fields, the eventType naming pattern + six-domain
// membership, the identity-anchor rule, and the strict top-level envelope.
// It is intentionally dependency-free (no ajv) — the website adds no analytics
// infrastructure. The vendored schema (`observation-event.schema.json`) is the
// authoritative reference and is validated against these same shapes in CI.

import {
  OBSERVATION_DOMAINS,
  OBSERVATION_TOP_LEVEL_KEYS,
  type ObservationEvent,
} from './contract';

const NAME_RE = /^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*){2,}$/;
const SEMVER_RE = /^[0-9]+\.[0-9]+\.[0-9]+$/;
const RFC3339_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

const REQUIRED_FIELDS = ['eventId', 'eventType', 'occurredAt', 'schemaVersion'] as const;
const IDENTITY_ANCHORS = ['visitorId', 'userId', 'organizationId'] as const;
const ALLOWED_KEYS = new Set<string>(OBSERVATION_TOP_LEVEL_KEYS);
const DOMAINS = new Set<string>(OBSERVATION_DOMAINS);

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/** Validate an event against the canonical contract's structural invariants. */
export function validateObservationEvent(event: unknown): ValidationResult {
  const errors: string[] = [];

  if (typeof event !== 'object' || event === null || Array.isArray(event)) {
    return { valid: false, errors: ['event must be a plain object'] };
  }
  const e = event as Record<string, unknown>;

  // required structural fields
  for (const key of REQUIRED_FIELDS) {
    const v = e[key];
    if (v === undefined || v === null || v === '') {
      errors.push(`missing required field: ${key}`);
    }
  }

  // eventType: naming pattern + canonical domain
  if (typeof e.eventType === 'string') {
    if (!NAME_RE.test(e.eventType)) {
      errors.push(`eventType "${e.eventType}" violates domain.entity.action naming`);
    } else if (!DOMAINS.has(e.eventType.split('.')[0])) {
      errors.push(`eventType domain "${e.eventType.split('.')[0]}" is not one of the six canonical domains`);
    }
  } else if (e.eventType !== undefined) {
    errors.push('eventType must be a string');
  }

  // occurredAt / schemaVersion formats
  if (typeof e.occurredAt === 'string' && !RFC3339_RE.test(e.occurredAt)) {
    errors.push(`occurredAt "${e.occurredAt}" is not an RFC 3339 date-time`);
  }
  if (typeof e.schemaVersion === 'string' && !SEMVER_RE.test(e.schemaVersion)) {
    errors.push(`schemaVersion "${e.schemaVersion}" is not semver`);
  }

  // identity-anchor rule
  if (!IDENTITY_ANCHORS.some((k) => typeof e[k] === 'string' && e[k] !== '')) {
    errors.push(`at least one identity anchor (${IDENTITY_ANCHORS.join(', ')}) is required`);
  }

  // strict top-level envelope
  for (const key of Object.keys(e)) {
    if (!ALLOWED_KEYS.has(key)) {
      errors.push(`unknown top-level field: ${key}`);
    }
  }

  return { valid: errors.length === 0, errors };
}

/** Type guard form of {@link validateObservationEvent}. */
export function isValidObservationEvent(event: unknown): event is ObservationEvent {
  return validateObservationEvent(event).valid;
}
