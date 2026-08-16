---
name: Terra Pay X
description: Governed AI engineering and payments infrastructure — instrumentation rendered as interface
colors:
  ground: "#020817"
  panel: "#0D1426"
  hairline: "#1C2E4A"
  read: "#E2EBF8"
  aside: "#64748B"
  aside-legible: "#94A3B8"
  signal-cyan: "#38BDF8"
  signal-cyan-light: "#7DD3FC"
  confirmation-teal: "#2DD4BF"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  # Reusable scale only. The observed one-off `3px` (::-webkit-scrollbar-thumb,
  # globals.css:40) is deliberately NOT a key here — see Shapes and the sidecar's
  # extensions.observedOneOffs. Presence in this map is what grants a value
  # token status; absence is the only reliable way to withhold it.
  action: "8px"
  panel: "12px"
  feature: "16px"
  pill: "9999px"
spacing:
  gutter: "24px"
  card: "32px"
  section: "80px"
  section-major: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.ground}"
    rounded: "{rounded.action}"
    padding: "12px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.signal-cyan-light}"
    textColor: "{colors.ground}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.read}"
    rounded: "{rounded.action}"
    padding: "12px 28px"
  badge-signal:
    backgroundColor: "rgba(56,189,248,0.06)"
    textColor: "{colors.signal-cyan}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  badge-confirmation:
    backgroundColor: "rgba(45,212,191,0.08)"
    textColor: "{colors.confirmation-teal}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  card-panel:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.read}"
    rounded: "{rounded.feature}"
    padding: "32px"
  nav-shell:
    backgroundColor: "rgba(2,8,23,0.96)"
    textColor: "{colors.read}"
    height: "64px"
---

# Design System: Terra Pay X

> **Provenance.** Extracted from `terrapayx/website` at `main` (`12a2254`) on 2026-08-16 by
> `/impeccable document`. This records the **shipped** visual system as a pre-redesign baseline.
> It is descriptive, not aspirational.
>
> **Pending delta — not incorporated.** Draft PR #17 (`redesign/terrapayx-p0-commercial-clarity`)
> raises `aside` from `#64748B` to `#94A3B8` site-wide for WCAG AA, reframes the homepage hero
> and root metadata around Labs, and reduces the hero to two CTAs. That branch is unmerged and is
> deliberately **not** treated as incumbent here. Regenerate this file after #17 merges.
>
> **How to read this file.** It is an **anti-reference**: a record of what shipped, so the redesign
> can reject it deliberately rather than absorb it by default. Nothing here is a target. Where the
> incumbent system is defective, the defect is reproduced faithfully and labelled — corrections are
> segregated under *Recorded defects* and marked **[remediation]**, never mixed into the
> description. Rules carry a strength: an **invariant** holds throughout the source; a **tendency**
> is the majority pattern with counted exceptions. `.impeccable/design.json` carries the same
> distinctions in machine-readable form.

## Overview

**Incumbent creative metaphor: "The Control Room"**

This metaphor is a *reading of what shipped*, not a direction to build toward. It is descriptive and
explicitly non-aspirational. The redesign is not required to honor it, and should not treat it as a
brief.

Terra Pay X renders itself as instrumentation. The ground (`#020817`) is an unlit room; panels
(`#0D1426`) are the surfaces that catch light; a dot-grid substrate sits beneath the hero at 40%
opacity as the faint graph paper such rooms are built on. Against that near-monochrome darkness
exactly one color is alive — Signal Cyan — and it is spent only on the things a visitor can act
on or a system can confirm. Depth arrives largely as a response to attention: no surface carries a
resting box-shadow, though the hero itself holds a permanent ambient glow.

The density is generous rather than packed: an 1152px reading column, 80–96px between sections,
32px inside feature panels. Type does almost all of the structural work, since the palette
refuses to. Hierarchy is carried by weight and scale in a single family, with a wide-tracked
uppercase micro-label doing the job that a second typeface would do in a warmer system.

The character this produces is precise, quiet, and slightly clinical — a system that would rather
be trusted than liked. That is also its limitation, and it is recorded here deliberately.

**Confirmed anti-reference:** the incumbent world reads as generic technical SaaS — dark navy
plus cyan, dot grid, gradient glow, repeated dark cards, and Inter throughout. Recorded
2026-08-16 per the redesign audit. Capturing it here is what allows the next phase to treat it as
evidence rather than as a starting point.

**Independent corroboration — about this system, not about these choices in general.** Impeccable's
mechanical anti-pattern detector, run over `globals.css` on 2026-08-16, flagged two of the same
traits the audit named, without reference to it: **Inter** as a face generated UIs converge on, and
the `.dot-grid` field (`globals.css:49`) as a decorative grid-line background it classes as a
recurring generated-UI signature outside genuine canvas, map, blueprint, or measurement surfaces.

What this establishes is narrow and worth stating precisely: **two independent methods, applied to
*this* codebase, reached the same reading of it** — that the surface presents as generic rather than
particular. It is not a finding that Inter is a poor typeface, that dot-grid fields are bad
generally, or that either must be removed. Both are defensible choices in a system that has a
reason for them; the evidence here is that this system does not visibly have one. Whether either
survives is a decision for the redesign brief, made in `shape` against confirmed product truth —
not something this baseline settles.

Both findings are left **unfixed and unsuppressed**. Fixing them would be a source change in a
documentation-only capture; suppressing them would delete evidence a later verification pass should
be able to re-derive.

**Key Characteristics:**
- Near-black navy ground with a single raised panel tone; no third surface level
- One live accent, one confirming accent, nothing else chromatic
- No resting shadow anywhere; interactive surfaces gain glow and lift only on hover. The hero is the
  exception — it carries a permanent ambient glow
- Hairline `1px` borders used both as component outlines **and** as section/nav/footer dividers
- One typeface carrying five roles through weight and scale alone
- Wide-tracked uppercase micro-labels on eyebrows, though not on all small text

## Colors

A near-monochrome dark field interrupted by exactly one live hue, with a second reserved for
confirmation.

### Primary
- **Signal Cyan** (`#38BDF8`): the dominant accent, carrying both actionable and decorative work.
  Actionable: primary CTA fills and the `X` of the wordmark. Semantic: badge borders and text,
  section eyebrows. **Decorative:** capability-list icon strokes, the hero's permanent ambient
  glow, the card hover glow, the scrollbar thumb, and the oversized principle numerals rendered at
  `rgba(56,189,248,0.18)`. It never appears as body text.
- **Signal Cyan Light** (`#7DD3FC`): hover state for filled cyan actions only. It exists to prove
  a button is live; it has no resting use anywhere in the system.

### Secondary
- **Confirmation Teal** (`#2DD4BF`): carries **three unrelated roles** on `main`, which is itself
  worth recording. (1) *Resolved state* — the "Available today" badge and its pulsing dot,
  checkmark icons. (2) *Division / category marking* — the `divisionColor` applied to Labs-owned
  entries. (3) *Action* — the hero "Get the Starter Kit" CTA is bordered and lettered in teal
  (`page.tsx:79`). Roughly a quarter as frequent as cyan.

> **Recorded defect — semantic inconsistency.** The same color simultaneously means "this has
> already resolved", "this belongs to Labs", and "click this to buy". A visitor cannot learn what
> teal means, because it does not mean one thing. This is a property of the shipped system, not a
> deliberate scheme.

### Neutral
- **Ground** (`#020817`): page background, and also the fill of cards that sit *on* panels. The
  system inverts the usual relationship — cards are darker than the sections containing them.
- **Panel** (`#0D1426`): raised section backgrounds, used to band the page into alternating
  registers. The only other surface tone in the system.
- **Hairline** (`#1C2E4A`): every border, the dot-grid dot color, and the nav's bottom edge once
  scrolled. It is never used for text.
- **Read** (`#E2EBF8`): all primary text, headings, and active navigation.
- **Aside** (`#64748B`): secondary body copy, inactive navigation, footer text, captions.
- **Aside Legible** (`#94A3B8`): a lighter secondary tone appearing in three places on `main`.

### Named Rules

**The One Live Color Pattern** (measured tendency, *not* an invariant). Signal Cyan is the accent a
visitor most often finds on something actionable, and the palette is otherwise near-monochrome — so
cyan does read as the page's live channel. But it is not a reliable signal of interactivity in
either direction, and the exceptions are numerous enough to name:

- **Cyan without interaction:** capability-list icon strokes, the hero's permanent ambient glow,
  the card hover glow, the scrollbar thumb, and the oversized principle numerals at
  `rgba(56,189,248,0.18)`. None of these can be acted on.
- **Interaction without cyan:** the hero "Get the Starter Kit" CTA is Confirmation Teal; ghost
  buttons are hairline-bordered with Read-colored text; navigation links are Aside or Read.

A redesign may well want a rule of this shape. The incumbent system does not have one.

**The Inverted Card Pattern** (observed tendency, *not* an invariant). Panels are lighter than the
page, and cards placed on panels are usually filled with Ground — darker than their container. This
is the majority pattern, not a rule: of the card surfaces on `main`, **8 use Ground and 4 use
Panel**. A redesign should treat tonal inversion as a recurring habit of the incumbent system, not
as a law it obeys.

**The Contrast Debt Rule.** `aside` (`#64748B`) measures 4.20:1 on Ground and 3.85:1 on Panel —
below WCAG AA (4.5:1) for normal text, and it carries most secondary copy. `aside-legible`
(`#94A3B8`) measures 7.80:1 and 7.15:1 but appears in only three places on `main`. This is a
recorded defect of the incumbent system, not a style choice.

> **Non-incumbent remediation.** "Use `#94A3B8` instead of `#64748B`" is a *correction*, not a
> description of what shipped. It is not part of the baseline. Draft PR #17 implements it site-wide;
> until that merges, `#64748B` is the incumbent secondary text color.

## Typography

**Display Font:** Inter (with `system-ui`, `sans-serif`)
**Body Font:** Inter (with `system-ui`, `sans-serif`)
**Label Font:** Inter, differentiated by tracking and case rather than by family

**Character:** A single neutral grotesque doing all five roles. The pairing contrast other systems
get from two families, this one gets from a 700/400 weight split and a wide-tracked uppercase
micro-label. The result is uniform and legible, and — recorded honestly — undifferentiated.

### Hierarchy
- **Display** (700, `48px` → `60px` at ≥640px, line-height 1.25, tracking `-0.025em`): page hero
  headline. One per page, in the first viewport.
- **Headline** (700, `30–36px`, line-height 1.25, tracking `-0.025em`): section openers.
- **Title** (600–700, `20–24px`, line-height 1.4): card and panel headings. The homepage feature
  cards sit at the top of that range — `24px` / weight 700.
- **Body** (400, `16px`, line-height 1.625): paragraph copy, held to a `max-w-2xl` (672px)
  measure, roughly 70ch.
- **Label** (500, `12px`, tracking `0.1em`, uppercase): eyebrows, badges, metadata, table keys.
  The most distinctive typographic move in the system.

### Named Rules

**The Weight-Not-Family Rule.** Hierarchy comes from weight (400 / 500 / 600 / 700) and scale. The
system uses exactly one family — though it loads that one family through **two** paths: `next/font`
in `layout.tsx` and a Google Fonts `@import` in `globals.css`. One family, two requests; the second
is a defect, recorded below.

**The Eyebrow Label Pattern** (applies to eyebrows, *not* to all small text). Section eyebrows and
hero badges at `12px` are uppercase, weight 500–600, tracked `0.1em`–`0.15em`. This is **not**
universal to `12px`: of 91 `text-xs` uses on `main`, **45 are not uppercase** — status pills such as
"In development", card body copy, and fine print all sit at `12px` in sentence case.

## Layout

A single centered column at `max-w-6xl` (1152px) with a `24px` gutter governs every page; wide
sections never break it. Reading passages narrow further to `max-w-2xl` (672px) and feature
grids to `max-w-4xl` (896px), so measure is controlled independently of container width.

Vertical rhythm alternates `80px` and `96px` between sections, with `32px` inside feature panels
and `24px` inside smaller cards. Grids are shallow by intent: one column on mobile, two at
`lg` (1024px) for the paired feature panels, three at `sm`/`md` for principle cards, with a
uniform `24px` gap. The project uses stock Tailwind breakpoints (it defines none of its own), and
of that set only `sm` (640px), `md` (768px) and `lg` (1024px) appear in the source — `xl` and `2xl`
are unused. Those three are observed usages, not the framework's full scale. `sm` carries the most
work: it is where the display size steps up and CTA rows change from stacked to inline.

The page banding is the structural device: Ground and Panel alternate down the page, and the hero
closes with a `128px` gradient fade back to Ground so the first section emerges rather than
starts.

## Elevation & Depth

The system has **no resting box-shadow anywhere**. Depth is produced by three non-shadow means:
tonal alternation between Ground and Panel, `1px` hairline borders, and a `blur(12px)` backdrop
filter on the navigation once scrolled.

Shadow exists only as interaction response, and only in one form. Light, however, is not only an
interaction response: the hero on `/` and `/labs` carries a **permanent ambient glow** — a
`rgba(56,189,248,0.08)` elliptical gradient anchored to the top edge, rendered at rest and never
triggered. Ambient glow on the hero and reactive glow on components are two different devices.

### Shadow Vocabulary
- **Interaction glow** (`box-shadow: 0 0 30px rgba(56,189,248,0.12), 0 0 0 1px rgba(56,189,248,0.2)`):
  applied on card hover together with `translateY(-2px)` over `0.3s ease`. It is an ambient
  cyan bloom plus a brightened border — the card appearing to come online, not to lift.

### Named Rules

**The No Reactive Glow At Rest Rule.** *Interactive* surfaces do not glow until touched — a card,
badge, or button emitting light at rest is broken. This does not extend to the page: the hero's
ambient glow is permanent and is part of the incumbent atmosphere, not a state.

## Shapes

The reusable radius scale has four steps, each bound to a role rather than to a size: `8px` for
**boxed, button-like actions** (filled CTAs, ghost buttons, the nav CTA), `12px` for standard
cards, `16px` for the two large feature panels, and full-round for badges and status pills. The
system never mixes them within one component family.

**Observed one-off — not a token.** A fifth radius value, `3px`, appears exactly once in the
entire source: on `::-webkit-scrollbar-thumb` at `globals.css:40`. It sits outside the Tailwind
radius scale the rest of the system uses and belongs to no component family. It is recorded here
because the incumbent record must be complete, and it is **deliberately excluded from the
`rounded` frontmatter map** so that no generator, linter, or agent reads its presence in the
normative token scale as permission to apply it to a component. Do not use `3px` for anything.

Radius is not a marker of clickability. Plain navigation links, inline text links, and the wordmark
are all clickable and carry no radius, background, or border at all.

Borders are always `1px` and always hairline-toned, except where a panel is deliberately promoted
— the Labs card takes a `1px` Signal Cyan border to mark it as the live commercial path while its
sibling keeps hairline. That single substitution is the system's only structural emphasis device.

The same hairline serves a second, structural role: **the system does use dividers.** On `main`
there are 29 `borderTop` separators between sections, a `border-b` under the navigation once
scrolled, and `borderTop` rules in the footer and the mobile nav panel. Tonal alternation and a
hairline divider are used together, not as alternatives.

## Components

### Buttons
- **Shape:** Softly rounded (`8px`), never pill, never square.
- **Primary:** Signal Cyan fill with Ground-colored text, `12px 28px` padding, `14px` weight 600.
  Compact `8px 16px` variant in the navigation bar.
- **Hover:** only the navigation CTA has one — background shifts to Signal Cyan Light, applied by
  inline JS event handlers rather than a CSS pseudo-class. **Page-level CTAs declare
  `transition-all duration-200` but define no hover state to transition to**, so they are visually
  inert under the cursor.
- **Focus:** none. There is **no `:focus-visible` treatment anywhere in the system** — a recorded
  gap, not a style.
- **Ghost:** Transparent fill, `1px` hairline border, Read-colored text, identical geometry to
  primary so the two align in a row. No hover, no focus.
- **Teal outline (the counterexample):** the hero "Get the Starter Kit" CTA — transparent fill,
  `1px` **Confirmation Teal** border, teal text, same `12px 28px` / `8px` geometry (`page.tsx:79`).
  It is the system's only teal action, and the reason Confirmation Teal cannot be described as
  non-interactive.

### Cards / Containers
- **Corner Style:** `16px` for the two large feature panels, `12px` for principle and content
  cards.
- **Background:** Ground, placed on Panel sections — darker than their container.
- **Border:** `1px` hairline; Signal Cyan on the single promoted card.
- **Shadow Strategy:** none at rest; interaction glow on hover (see Elevation & Depth).
- **Internal Padding:** `32px` for feature panels, `24px` for smaller cards.

### Badges
- **Style:** Full-round, `12px` uppercase weight-500 text tracked to `0.1em`, on a 6–8% tint of
  its own accent with a 20–40% border of the same hue.
- **Variants:** Signal Cyan for category and eyebrow use (`6px 16px`); Confirmation Teal for
  availability (`4px 12px`) with a leading `animate-pulse` dot. Teal is not confined to badges —
  see the teal CTA below and the semantic-inconsistency note under Colors.

### Navigation
- **Style:** Fixed full-width, `64px` tall, contents held to the `max-w-6xl` column. Transparent
  over the hero, transitioning to `rgba(2,8,23,0.96)` with `blur(12px)` and a hairline bottom
  border once scrolled, over `300ms`.
- **Typography:** `14px` weight 500. Active route in Read; inactive in Aside; hover raises
  inactive to Read via inline handlers.
- **Mobile:** Same shell with a disclosure toggle; links stack at `10px` vertical padding and the
  primary CTA is hidden below `md` (768px).

### Signature: the dot-grid field
A `radial-gradient` of `1px` hairline dots on a `32px` pitch, laid across the hero at 40% opacity
beneath a `rgba(56,189,248,0.08)` elliptical glow anchored to the top edge. It is the system's
only texture and appears on exactly one surface per page.

## Do's and Don'ts

These describe how the incumbent system behaves, so that a redesign can decide what to keep or
reject deliberately. Items marked **[remediation]** are *not* incumbent behavior — they are
corrections to recorded defects, listed separately so the two are never confused.

### Do:
- **Do** keep the palette near-monochrome, with accent coverage low — roughly 10% of any viewport.
  Note that the incumbent system does *not* restrict Signal Cyan to actionable elements; see The One
  Live Color Pattern for the counted exceptions.
- **Do** carry hierarchy with weight and scale in Inter rather than reaching for a second family.
- **Do** set section eyebrows as uppercase, weight 500–600, tracked `0.1em`–`0.15em` — but do not
  extend that to all `12px` text; badges and fine print are sentence case.
- **Do** hold body copy to a `max-w-2xl` (672px) measure regardless of container width.
- **Do** expect a card on a Panel section to be Ground-filled *most* of the time (8 of 12), while
  treating that as a tendency rather than a constraint.

### Don't:
- **Don't** introduce a resting box-shadow. Depth is tonal; reactive glow is a hover response.
- **Don't** add a third surface tone. The system is Ground and Panel only.
- **Don't** use hairline (`#1C2E4A`) for text.
- **Don't** mix radii within a component family, or give a boxed action anything other than `8px`.

### Recorded defects — do not inherit these

These are properties of the shipped system, reproduced faithfully above, that should **not** carry
into a redesign:

- **[remediation]** `#64748B` fails WCAG AA at normal size (4.20:1 / 3.85:1). Use `#94A3B8`
  (7.80:1 / 7.15:1) instead. Draft PR #17 implements this site-wide; it is not incumbent.
- **[remediation]** No `:focus-visible` treatment exists anywhere in the system. Keyboard focus is
  effectively invisible. Any redesign must add one.
- **[remediation]** No `prefers-reduced-motion` override exists, including for the animated
  availability indicator.
- **[remediation]** Inter is loaded twice — `next/font` in `layout.tsx` plus a Google Fonts
  `@import` in `globals.css`. Remove the `@import`.
- **[remediation]** Hover states on navigation links and the nav CTA are applied through inline JS
  event handlers rather than CSS pseudo-classes.
- **[remediation]** Confirmation Teal carries three unrelated meanings — resolved state, Labs
  division marking, and a purchase action — so it teaches the visitor nothing. Pick one meaning per
  accent.
- **[remediation]** Page-level CTAs declare a `200ms` transition with no hover state defined, so
  they are visually inert under the cursor.
