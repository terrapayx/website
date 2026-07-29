import { defineConfig } from 'vitest/config';

// Test harness for the observation layer.
//
// `node` environment, not jsdom: the observation modules are written against
// injected dependencies (StorageLike, LocationLike, a clock, an adapter) rather
// than against globals, so the logic under test never needs a DOM. That is a
// property of the design and this config depends on it — if a test ever needs
// jsdom, the module it covers has probably grown a browser dependency it should
// not have.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
