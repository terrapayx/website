import { describe, expect, it } from 'vitest';
import { DwellTracker } from './dwell';

// The dwell timer exists to make a short visit interpretable: the first
// Observation Window recorded three external visits at "zero-second dwell",
// which meant only that no SECOND interaction was recorded. A wrong number here
// is worse than no number, because it looks plausible — so these cover the
// arithmetic rather than the wiring.

/** Drive the tracker from a clock we control. No wall time is involved. */
function harness() {
  let t = 1_000_000;
  const emitted: number[] = [];
  const tracker = new DwellTracker({
    now: () => t,
    onDwell: (visibleMs) => emitted.push(visibleMs),
  });
  return {
    tracker,
    emitted,
    advance: (ms: number) => {
      t += ms;
    },
  };
}

describe('DwellTracker', () => {
  it('reports the elapsed span of a single visible period', () => {
    const h = harness();
    h.tracker.resume();
    h.advance(30_000);
    h.tracker.flush();
    expect(h.emitted).toEqual([30_000]);
  });

  /**
   * The whole point of measuring VISIBLE time. A tab left open in the background
   * is not attention, and counting it would corrupt the row this exists to
   * clarify — a visitor who wandered off for an hour would outrank one who read
   * the page.
   */
  it('excludes time spent hidden', () => {
    const h = harness();
    h.tracker.resume();
    h.advance(10_000); // visible
    h.tracker.pause();
    h.advance(600_000); // hidden for ten minutes — must not count
    h.tracker.resume();
    h.advance(5_000); // visible again
    h.tracker.flush();
    expect(h.emitted).toEqual([15_000]);
  });

  it('banks a still-running span when flushed while visible', () => {
    // A route change flushes without a preceding pause; the elapsed time must
    // still be attributed to the page being left.
    const h = harness();
    h.tracker.resume();
    h.advance(7_500);
    h.tracker.flush();
    expect(h.emitted).toEqual([7_500]);
  });

  it('emits nothing when no visible time has accrued', () => {
    const h = harness();
    h.tracker.flush();
    expect(h.emitted).toEqual([]);
  });

  /**
   * visibilitychange→hidden and pagehide fire in quick succession when a tab is
   * closed. The second flush must be a no-op, or every close produces a
   * duplicate and dwell is systematically double-counted.
   */
  it('does not emit twice when flushed again immediately', () => {
    const h = harness();
    h.tracker.resume();
    h.advance(12_000);
    h.tracker.flush();
    h.tracker.flush();
    expect(h.emitted).toEqual([12_000]);
  });

  it('starts a fresh count after a flush', () => {
    const h = harness();
    h.tracker.resume();
    h.advance(4_000);
    h.tracker.flush();
    h.tracker.resume();
    h.advance(6_000);
    h.tracker.flush();
    expect(h.emitted).toEqual([4_000, 6_000]);
  });

  /**
   * Browsers fire visibilitychange more than once for the same state. A resume
   * that restarts the clock would silently discard everything counted so far.
   */
  it('ignores a repeated resume rather than restarting the clock', () => {
    const h = harness();
    h.tracker.resume();
    h.advance(8_000);
    h.tracker.resume(); // duplicate — must not reset
    h.advance(2_000);
    h.tracker.flush();
    expect(h.emitted).toEqual([10_000]);
  });

  it('ignores a repeated pause rather than double-counting the span', () => {
    const h = harness();
    h.tracker.resume();
    h.advance(9_000);
    h.tracker.pause();
    h.tracker.pause(); // duplicate — must not bank the span twice
    h.tracker.flush();
    expect(h.emitted).toEqual([9_000]);
  });

  it('reports nothing for a page that was never visible', () => {
    // Opened in a background tab and closed without ever being looked at.
    const h = harness();
    h.advance(45_000);
    h.tracker.flush();
    expect(h.emitted).toEqual([]);
  });
});
