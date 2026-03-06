# The Archive — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the entire photography portfolio with the "The Archive" aesthetic — warm paper tones, DM Serif Display + Geist typography, horizontal scroll homepage, editorial chapters index, and a refined theme toggle.

**Architecture:** All changes are purely visual (CSS, layout, component rewrites). No new dependencies needed. Each task is a self-contained component or page. The existing data layer (photos.json, chapters.json) and routing stay unchanged.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 3.4, next-themes, lucide-react, react-masonry-css, yet-another-react-lightbox

---

## Task 1: Foundations — CSS Variables, Fonts, Grain Texture

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace globals.css entirely**

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Geist:wght@300;400&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #F7F4EF;
  --ink: #1C1916;
  --muted: #9C9488;
  --border: #E2DDD6;
}

.dark {
  --bg: #1A1815;
  --ink: #EDE9E2;
  --muted: #6B6560;
  --border: #2E2B27;
}

body {
  font-family: 'Geist', sans-serif;
  font-weight: 300;
  background-color: var(--bg);
  color: var(--ink);
}

/* Grain texture overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
}

.font-display {
  font-family: 'DM Serif Display', serif;
}

.label {
  font-family: 'Geist', sans-serif;
  font-weight: 300;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}
```

**Step 2: Verify fonts load**

Run `npm run dev` and open the browser. Check that body text is in Geist (thin weight) and the CSS variables are applied. Background should be warm cream `#F7F4EF`.

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "design: set up Archive foundations — CSS vars, DM Serif Display + Geist, grain texture"
```

---

## Task 2: Theme Toggle Redesign

**Files:**
- Modify: `components/ThemeSwitcher.tsx`

**Step 1: Rewrite ThemeSwitcher as a single elegant pill**

```tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
      className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors hover:opacity-60"
    >
      {isDark ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
    </button>
  );
}
```

**Step 2: Verify toggle works**

Open the site, click the toggle. Confirm it switches between light (warm cream) and dark (deep warm charcoal) cleanly. The icon should switch between sun and moon.

**Step 3: Commit**

```bash
git add components/ThemeSwitcher.tsx
git commit -m "design: redesign theme toggle as minimal single-icon pill"
```

---

## Task 3: Header / Navigation

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Rewrite the layout header**

Replace the entire `<header>` block in `app/layout.tsx`. Also add a `data-page` approach — inner pages get sticky header. For now make it sticky everywhere and we'll handle homepage separately in Task 4.

```tsx
import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { Providers } from "./providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Manos Tzavidas – Photography",
  description: "Photography portfolio by Manos Tzavidas",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <header
            className="sticky top-0 z-50 px-6 sm:px-10 py-5"
            style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            {/* Mobile */}
            <div className="sm:hidden flex flex-col items-center gap-2">
              <Link href="/" className="font-display text-xl italic" style={{ color: "var(--ink)" }}>
                Manos Tzavidas
              </Link>
              <div className="flex items-center gap-5">
                <nav className="flex items-center gap-5">
                  {["Home", "Chapters", "Journal", "About"].map((label) => (
                    <Link
                      key={label}
                      href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                      className="label"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <ThemeSwitcher />
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex items-center justify-between">
              <Link href="/" className="font-display text-2xl italic" style={{ color: "var(--ink)" }}>
                Manos Tzavidas
              </Link>
              <nav className="flex items-center gap-10">
                {["Home", "Chapters", "Journal", "About"].map((label) => (
                  <Link
                    key={label}
                    href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    className="label transition-opacity hover:opacity-60"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <ThemeSwitcher />
            </div>
          </header>
          <main>{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
```

**Step 2: Remove the logo image dependency**

The `Image` import and `/logo.png` are no longer used. Remove the `import Image from "next/image"` line from layout.tsx.

**Step 3: Verify header**

Check desktop and mobile. Name should be in DM Serif Display italic. Nav links should be tiny uppercase warm gray. Toggle should be the new pill. A thin warm border separates it from content.

**Step 4: Commit**

```bash
git add app/layout.tsx components/ThemeSwitcher.tsx
git commit -m "design: redesign header with editorial typography and minimal nav"
```

---

## Task 4: Homepage — Horizontal Film Strip

**Files:**
- Modify: `app/page.tsx`

**Context:** The homepage shows 4–5 curated photos from `data/photos.json` as a full-height horizontal scroll strip. The existing masonry grid is replaced entirely. We pick the first 5 photos from photos.json (or you can manually curate — see step below).

**Step 1: Rewrite app/page.tsx**

```tsx
"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import photos from "@/data/photos.json";
import Link from "next/link";

// Curate the 5 homepage feature photos (adjust indices to pick your best shots)
const FEATURED_INDICES = [0, 2, 4, 6, 9, 13];
const featured = FEATURED_INDICES.map((i) => photos[i]).filter(Boolean);

export default function Home() {
  const stripRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(-1);

  // Convert vertical wheel scroll to horizontal scroll on the strip
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // already horizontal
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div>
      {/* Name intro */}
      <div className="px-6 sm:px-10 pt-12 pb-6">
        <p className="font-display italic text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
          Manos Tzavidas
        </p>
        <p className="label mt-2">Photographer · Copenhagen</p>
      </div>

      {/* Film strip */}
      <div
        ref={stripRef}
        className="flex gap-2 overflow-x-auto px-6 sm:px-10 pb-2"
        style={{
          height: "70dvh",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {featured.map((photo, i) => (
          <div
            key={photo.src}
            onClick={() => setIndex(i)}
            className="relative flex-shrink-0 h-full cursor-zoom-in"
            style={{
              scrollSnapAlign: "start",
              width: photo.orientation === "landscape" ? "calc(70dvh * 5 / 4)" : "calc(70dvh * 4 / 5)",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-[filter] duration-300 hover:brightness-105"
              sizes="(max-width: 640px) 100vw, 60vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Footer label */}
      <div className="px-6 sm:px-10 pt-5 pb-16 flex items-center justify-between">
        <span className="label">Recent Work · 2025</span>
        <Link href="/chapters" className="label transition-opacity hover:opacity-60">
          View Chapters →
        </Link>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={featured.map(({ src, alt }) => ({ src, description: alt }))}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(247,244,239,0.97)" } }}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </div>
  );
}
```

**Step 2: Hide the webkit scrollbar**

Add to `app/globals.css`:

```css
/* Hide scrollbar on film strip */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
```

**Step 3: Verify the strip**

Open the homepage. You should see your name in large DM Serif italic, then the film strip of photos at 70% viewport height. Scroll vertically with the mouse wheel — it should scroll horizontally. On mobile, swipe horizontally and photos should snap.

**Step 4: Curate your 5 featured photos**

Look at the photos.json file (indices 0–16). Update `FEATURED_INDICES` in page.tsx to pick the 5 photos that best represent your work for the homepage.

**Step 5: Commit**

```bash
git add app/page.tsx app/globals.css
git commit -m "design: replace masonry grid with horizontal film strip homepage"
```

---

## Task 5: Chapters Index Page

**Files:**
- Modify: `app/chapters/page.tsx`

**Step 1: Read the chapters data first**

Check `data/chapters.json` to confirm the shape: `{ slug, title, cover, subtitle?, images[] }`.

**Step 2: Rewrite the chapters page**

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import chapters from "@/data/chapters.json";

export default function ChaptersPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="relative px-6 sm:px-10 pt-10 pb-20 max-w-[1200px] mx-auto">
      {/* Page title */}
      <div className="mb-10">
        <h1 className="font-display italic text-5xl sm:text-6xl" style={{ color: "var(--ink)" }}>
          Chapters
        </h1>
        <div className="mt-4" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>

      {/* Ghost cover preview (desktop) */}
      {hovered && (
        <div
          className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
          style={{ opacity: 0.12 }}
        >
          <img
            src={chapters.find((c) => c.slug === hovered)?.cover}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}

      {/* Chapter list */}
      <ol className="relative z-10">
        {chapters.map((chapter, i) => (
          <li key={chapter.slug} style={{ borderBottom: "1px solid var(--border)" }}>
            <Link
              href={`/chapters/${chapter.slug}`}
              className="flex items-baseline gap-6 py-6 group transition-opacity hover:opacity-70"
              onMouseEnter={() => setHovered(chapter.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Number */}
              <span className="label w-6 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <span className="font-display italic text-2xl sm:text-3xl flex-1" style={{ color: "var(--ink)" }}>
                {chapter.title}
              </span>

              {/* Meta */}
              <span className="label hidden sm:block">
                {chapter.images?.length ?? 0} photos
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
```

**Step 3: Verify the chapters page**

Open `/chapters`. You should see a large italic "Chapters" heading with a thin rule, then a numbered list. On desktop, hovering a row should make the chapter's cover photo appear faintly behind the entire page.

**Step 4: Commit**

```bash
git add app/chapters/page.tsx
git commit -m "design: redesign chapters index as editorial numbered list with ghost preview"
```

---

## Task 6: Chapter Detail Page

**Files:**
- Modify: `app/chapters/[slug]/page.tsx`

**Step 1: Rewrite the chapter detail page**

```tsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Masonry from "react-masonry-css";
import chapters from "@/data/chapters.json";

export default function AlbumPage() {
  const { slug } = useParams();
  const album = chapters.find((a) => a.slug === slug);
  const [index, setIndex] = useState(-1);

  const breakpointCols = { default: 3, 1280: 2, 768: 1 };

  if (!album) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="label">Album not found</p>
      </div>
    );
  }

  return (
    <main>
      {/* Full-bleed cover */}
      <div className="relative w-full" style={{ height: "70dvh" }}>
        <Image
          src={album.cover}
          alt={album.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(28,25,22,0.6) 0%, transparent 60%)" }}
        />
        <div className="absolute bottom-8 left-6 sm:left-10">
          <h1 className="font-display italic text-4xl sm:text-5xl text-white">
            {album.title}
          </h1>
          {album.subtitle && (
            <p className="mt-1 text-white/70 text-sm font-light tracking-widest uppercase">
              {album.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Photo grid */}
      <div className="px-2 sm:px-3 pt-3 pb-12">
        <Masonry
          breakpointCols={breakpointCols}
          className="flex gap-2"
          columnClassName="space-y-2"
        >
          {album.images.map((image, i) => (
            <div
              key={image.src}
              onClick={() => setIndex(i)}
              className={`relative w-full ${
                image.orientation === "landscape" ? "aspect-[5/4]" : "aspect-[4/5]"
              } cursor-zoom-in overflow-hidden`}
            >
              <Image
                src={image.src}
                alt={`${album.title} photo ${i + 1}`}
                fill
                className="object-cover transition-[filter] duration-300 hover:brightness-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i === 0}
              />
            </div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox — warm palette */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={album.images.map(({ src }) => ({ src }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        styles={{ container: { backgroundColor: "rgba(247,244,239,0.97)" } }}
      />
    </main>
  );
}
```

**Step 2: Verify chapter detail**

Open a chapter. The top should be a full-bleed cover photo with the title overlaid at the bottom. Scrolling down reveals the masonry grid. Clicking a photo opens the warm-background lightbox.

**Step 3: Commit**

```bash
git add app/chapters/[slug]/page.tsx
git commit -m "design: add full-bleed cover header to chapter detail pages"
```

---

## Task 7: About Page

**Files:**
- Modify: `app/about/page.tsx`

**Step 1: Rewrite about page**

```tsx
export default function About() {
  return (
    <main className="px-6 sm:px-10 pt-12 pb-20 max-w-[680px]">
      <h1 className="font-display italic text-5xl sm:text-6xl mb-8" style={{ color: "var(--ink)" }}>
        Manos Tzavidas
      </h1>
      <p className="label mb-8">Copenhagen, Denmark</p>
      <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
        <p>
          I'm Manos — a photographer based in Copenhagen.
        </p>
        <p>
          More to come.
        </p>
      </div>
    </main>
  );
}
```

**Step 2: Verify about page**

Open `/about`. Should show the name in large DM Serif italic, location in small caps, and body text in light Geist.

**Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "design: redesign about page with Archive typography"
```

---

## Task 8: Journal Page

**Files:**
- Modify: `app/journal/page.tsx`

**Step 1: Rewrite journal page**

```tsx
export default function Journal() {
  return (
    <main className="px-6 sm:px-10 pt-12 pb-20 max-w-[800px]">
      <div className="mb-10">
        <h1 className="font-display italic text-5xl sm:text-6xl" style={{ color: "var(--ink)" }}>
          Journal
        </h1>
        <div className="mt-4" style={{ borderBottom: "1px solid var(--border)" }} />
      </div>

      {/* Empty state */}
      <p className="italic text-center py-20" style={{ color: "var(--muted)", fontFamily: "'Geist', sans-serif", fontWeight: 300 }}>
        Nothing here yet. Come back soon.
      </p>
    </main>
  );
}
```

**Step 2: Commit**

```bash
git add app/journal/page.tsx
git commit -m "design: redesign journal page with Archive typography and empty state"
```

---

## Task 9: Contact Page

**Files:**
- Modify: `app/contact/page.tsx`

**Step 1: Rewrite contact page**

```tsx
export default function Contact() {
  return (
    <main className="px-6 sm:px-10 pt-12 pb-20 max-w-[680px]">
      <h1 className="font-display italic text-5xl sm:text-6xl mb-10" style={{ color: "var(--ink)" }}>
        Contact
      </h1>
      <div className="space-y-4">
        <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
          <p className="label mb-1">Email</p>
          <a
            href="mailto:hello@yourdomain.com"
            className="text-base transition-opacity hover:opacity-60"
            style={{ color: "var(--ink)" }}
          >
            hello@yourdomain.com
          </a>
        </div>
        <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
          <p className="label mb-1">Instagram</p>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base transition-opacity hover:opacity-60"
            style={{ color: "var(--ink)" }}
          >
            @yourhandle
          </a>
        </div>
      </div>
    </main>
  );
}
```

**Step 2: Commit**

```bash
git add app/contact/page.tsx
git commit -m "design: redesign contact page — minimal email + Instagram links"
```

---

## Task 10: Final Polish — Tailwind Config

**Files:**
- Modify: `tailwind.config.ts` (or `tailwind.config.js`)

**Step 1: Check if tailwind config exists**

Run: `ls /Users/manos/my-photo-site/tailwind.config.*`

**Step 2: Add font-display utility**

In the tailwind config, extend the theme to recognise `font-display` as a font family shortcut (this ensures Tailwind doesn't purge the class):

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 3: Verify**

Restart the dev server (`npm run dev`). All `font-display` and `label` classes should render correctly.

**Step 4: Final visual check across all pages**

- `/` — Film strip, name intro, warm cream background
- `/chapters` — Numbered list, ghost hover preview
- `/chapters/[slug]` — Full-bleed cover, photo grid
- `/about` — Clean typography
- `/journal` — Empty state
- `/contact` — Minimal links
- Toggle between light and dark mode on each page

**Step 5: Commit**

```bash
git add tailwind.config.*
git commit -m "design: add font-display to tailwind config"
```

---

## Notes

- **Rollback:** Each task is a separate commit. To revert to the old design: `git log` to find the commit before Task 1, then `git checkout <hash> -- app/ components/`.
- **Curate homepage photos:** In Task 4, update `FEATURED_INDICES` to hand-pick which photos appear on the homepage film strip.
- **Personal content:** Update email, Instagram handle, and bio text in About/Contact pages with real details.
- **Logo image:** `/logo.png` and `/public/logo.png` are no longer used after Task 3. You can delete them or keep them.
