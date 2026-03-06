# Design: "The Archive" — Full Site Redesign

## Overview

A full visual redesign of the photography portfolio for Manos Tzavidas. The concept is "The Archive" — warm, minimal, fine art. Inspired by photography books and museum archives rather than social feeds. Light mode default with warm tones; dark mode available via an elegant toggle.

## Design Direction

**Style:** Project-based, minimal fine art
**Goal:** Personal archive + building audience/online presence as an artist
**Aesthetic:** Like an aged fine art photobook — warm paper tones, deliberate typography, no visual noise

---

## Foundations

### Color Palette

```
Light mode (default):
--bg:        #F7F4EF   warm off-white, like aged paper
--ink:       #1C1916   warm near-black
--muted:     #9C9488   warm gray for secondary text
--border:    #E2DDD6   subtle warm divider

Dark mode:
--bg:        #1A1815   deep warm charcoal, not cold black
--ink:       #EDE9E2   warm off-white
--muted:     #6B6560   warm dark gray
--border:    #2E2B27   subtle warm divider
```

### Typography

- **Display** (name, chapter titles, page headings): DM Serif Display — use italic variant for mood
- **UI** (navigation, labels, captions, body): Geist at weight 300 — invisible, functional
- **Labels:** All caps + wide letter-spacing, e.g. `COPENHAGEN · 2024`

### Atmosphere

- Subtle CSS noise/grain texture at 3–4% opacity over background areas
- Adds materiality, prevents the cream from feeling flat or digital

---

## Navigation / Header

- **Homepage:** Header is NOT sticky — scrolls away to give photos maximum space
- **Inner pages:** Header IS sticky — thin, minimal, stays out of the way
- **Desktop layout:** Name (DM Serif Display, ~2rem) left-aligned | Nav links centered-right in Geist 300 uppercase | Toggle far right
- **Mobile layout:** Name centered | Nav below as single row of small caps | Toggle inline
- **Nav links:** `HOME · CHAPTERS · JOURNAL · ABOUT` — Geist 300, small, uppercase, wide tracking
- **Theme toggle:** Single small pill, sun/moon icon slides between states — understated, redesigned from current overlapping pills

---

## Homepage

**Structure:**
1. Header (scrolls away)
2. Name in DM Serif Display italic, large — quiet introduction
3. Horizontal scroll film strip of 4–5 curated photos, full viewport height (`100dvh`)
4. Below strip: label `RECENT WORK · 2025` in Geist caps + subtle link to Chapters

**Film strip behavior:**
- Photos sit edge-to-edge, small gap (~8px) between them
- Horizontal scroll via mouse wheel (no visible scrollbar)
- Hover: subtle brightness lift only — no scale transform
- Mobile: snap scrolling, one photo at a time, full screen

**No masonry grid on homepage** — the strip IS the homepage. Chapters is where the depth lives.

---

## Chapters Page (`/chapters`)

**Structure:**
- Sticky header
- `Chapters` in DM Serif Display, large, left-aligned with thin horizontal rule beneath
- Numbered list of chapters, each row:
  - Number: `01` in muted warm gray
  - Title: DM Serif Display
  - Metadata: Geist caps, muted — `COPENHAGEN · 2024`
  - Count: Geist, muted — `12 photos`
- Thin border separates each row
- **Hover effect:** Large cover photo fades in as ghost image behind the row (desktop only)
- **Mobile:** Tap reveals cover image above row before navigating

**Chapter Detail Page (`/chapters/[slug]`):**
- Full-bleed cover photo on entry, chapter title overlaid in DM Serif Display italic, white
- Scroll reveals the photo grid (restyled masonry — keep existing grid logic)
- Lightbox restyled to match warm palette

---

## About Page

- Name large in DM Serif Display italic at top
- Bio paragraph in Geist 300, comfortable line-height
- Location: `COPENHAGEN, DENMARK` in small Geist caps
- Optional: single full-width photo below text (when ready)

---

## Journal Page

- List of entries: date in muted caps | title in DM Serif Display | first line in Geist 300
- Current empty state: single centered italic line — `Nothing here yet. Come back soon.` in Geist italic, muted

---

## Contact Page

- Minimal: email link + Instagram, nothing more

---

## Technical Notes

- Fonts: Load DM Serif Display + Geist from Google Fonts / Fontshare
- Grain texture: CSS-only using SVG filter or a small base64 noise PNG at low opacity
- Horizontal scroll: CSS `overflow-x: scroll` with `scroll-snap` on mobile; `wheel` event listener on desktop to translate vertical scroll to horizontal
- Dark mode: `next-themes` stays, CSS variables handle the swap
- No new dependencies needed beyond what's already installed
- Commit each page/component separately for easy rollback
