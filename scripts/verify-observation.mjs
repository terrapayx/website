#!/usr/bin/env node
// Verify that the observation example fixtures conform to the vendored canonical
// schema. Zero-dependency: it reads the constraints (required fields, eventType
// pattern, identity-anchor rule, strict top-level keys) directly FROM the
// vendored schema and checks each example against them. This is the runnable
// guarantee that the shapes the website emits are contract-valid.
//
//   node scripts/verify-observation.mjs   (or: npm run verify:observation)

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const moduleDir = join(here, '..', 'src', 'observation');
const schema = JSON.parse(readFileSync(join(moduleDir, 'observation-event.schema.json'), 'utf8'));

const allowedKeys = new Set(Object.keys(schema.properties));
const required = schema.required ?? [];
const eventTypeRe = new RegExp(schema.properties.eventType.pattern);
const schemaVersionRe = new RegExp(schema.properties.schemaVersion.pattern);
// identity-anchor rule lives in allOf[].anyOf[].required
const anchorGroup = (schema.allOf ?? []).find((s) => Array.isArray(s.anyOf));
const anchors = anchorGroup ? anchorGroup.anyOf.flatMap((o) => o.required ?? []) : [];

const examplesDir = join(moduleDir, 'examples');
const files = readdirSync(examplesDir).filter((f) => f.endsWith('.json')).sort();

let failed = 0;
for (const file of files) {
  const event = JSON.parse(readFileSync(join(examplesDir, file), 'utf8'));
  const errors = [];

  for (const key of required) {
    if (event[key] === undefined || event[key] === null || event[key] === '') {
      errors.push(`missing required field: ${key}`);
    }
  }
  if (typeof event.eventType === 'string' && !eventTypeRe.test(event.eventType)) {
    errors.push(`eventType "${event.eventType}" violates schema pattern`);
  }
  if (typeof event.schemaVersion === 'string' && !schemaVersionRe.test(event.schemaVersion)) {
    errors.push(`schemaVersion "${event.schemaVersion}" is not semver`);
  }
  if (anchors.length && !anchors.some((a) => typeof event[a] === 'string' && event[a] !== '')) {
    errors.push(`at least one identity anchor (${anchors.join(', ')}) required`);
  }
  for (const key of Object.keys(event)) {
    if (!allowedKeys.has(key)) errors.push(`unknown top-level field: ${key}`);
  }

  if (errors.length) {
    failed++;
    console.error(`FAIL ${file}`);
    for (const e of errors) console.error(`  - ${e}`);
  } else {
    console.log(`ok   ${file}  (${event.eventType})`);
  }
}

if (failed) {
  console.error(`\n${failed} example(s) do not conform to the canonical contract.`);
  process.exit(1);
}
console.log(`\nAll ${files.length} observation examples conform to the canonical contract (v${schema.description.match(/[0-9]+\.[0-9]+\.[0-9]+/)?.[0] ?? '?'}).`);
