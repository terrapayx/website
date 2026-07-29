// Dwell measurement — how long a page was actually looked at.
//
// Extracted from the React effect that owned it so the arithmetic is testable
// without a browser, matching the seam the rest of this module already uses
// (StorageLike, LocationLike, an injected clock). The effect keeps only the
// wiring: which browser events call resume/pause/flush, and what page context
// the emitted event carries.
//
// Why this is worth isolating: the first Observation Window recorded three
// external visits at "zero-second dwell", which meant only that no SECOND
// interaction was recorded — not that anyone left immediately. A wrong number
// here would be worse than the missing one it replaces, because it looks
// plausible and nothing downstream would contradict it.

export interface DwellTrackerDeps {
  /** Injected clock, so tests never depend on wall time. */
  now: () => number;
  /** Called with a strictly positive visible span, in milliseconds. */
  onDwell: (visibleMs: number) => void;
}

/**
 * Accumulates VISIBLE time only.
 *
 * A tab left open in the background is not attention: counting it would let a
 * visitor who wandered off for an hour outrank one who actually read the page,
 * corrupting the row this exists to clarify.
 */
export class DwellTracker {
  /** Start of the current visible span, or null when not counting. */
  private since: number | null = null;
  /** Visible time accrued in earlier spans since the last flush. */
  private banked = 0;

  constructor(private readonly deps: DwellTrackerDeps) {}

  /**
   * Begin or resume counting. Idempotent: browsers fire visibilitychange more
   * than once for the same state, and a resume that restarted the clock would
   * silently discard everything counted so far.
   */
  resume(): void {
    if (this.since === null) {
      this.since = this.deps.now();
    }
  }

  /**
   * Stop counting and bank the elapsed span. Idempotent, so a repeated
   * visibilitychange cannot bank the same span twice.
   */
  pause(): void {
    if (this.since !== null) {
      this.banked += this.deps.now() - this.since;
      this.since = null;
    }
  }

  /**
   * Bank any running span, then report the total and reset.
   *
   * Emits nothing when no visible time accrued. That is not squeamishness about
   * zeroes: visibilitychange→hidden and pagehide both fire when a tab closes, so
   * without this guard the second flush would duplicate every departure and
   * dwell would be systematically double-counted. It also keeps a page opened in
   * a background tab and never looked at out of the record entirely.
   */
  flush(): void {
    this.pause();
    const visibleMs = this.banked;
    this.banked = 0;
    if (visibleMs > 0) {
      this.deps.onDwell(visibleMs);
    }
  }
}
