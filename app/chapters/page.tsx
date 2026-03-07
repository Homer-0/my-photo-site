"use client";

import Link from "next/link";
import Image from "next/image";
import chapters from "@/data/chapters.json";

type Chapter = typeof chapters[0];

function getCoverOrientation(chapter: Chapter): "portrait" | "landscape" {
  const match = chapter.images?.find(img => img.src === chapter.cover);
  return (match?.orientation as "portrait" | "landscape") ?? "landscape";
}

const SIDES: Array<"left" | "right"> = ["left", "right", "left"];

const NUMBERS = ["01", "02", "03"];

// Per-chapter overrides: width (vw) and margin-top (px)
const OVERRIDES: Array<{ w?: number; mt?: number }> = [
  { w: 54, mt: 80  },  // Andelsbolig — larger
  { w: 40, mt: 140 },  // Copenhagen — bigger gap after Andelsbolig
  { w: 28, mt: 24  },  // Presence
];

export default function ChaptersPage() {
  return (
    // px-10 gives ~40px breathing room from both screen edges, matching the reference
    <main className="pb-64 px-10" style={{ overflow: "clip" }}>
      {chapters.map((chapter, i) => {
        const orientation = getCoverOrientation(chapter);
        const isPortrait = orientation === "portrait";
        const side = SIDES[i] ?? (i % 2 === 0 ? "left" : "right");
        const isLeft = side === "left";
        const override = OVERRIDES[i] ?? {};
        const w = override.w ?? (isPortrait ? 28 : 40);
        const aspect = isPortrait ? "2/3" : "3/2";
        const mt = override.mt ?? 24;

        if (i === 0) {
          // Andelsbolig: image left, caption top-right, close to image
          return (
            <div key={chapter.slug} style={{ marginTop: `${mt}px` }}>
              <Link href={`/chapters/${chapter.slug}`} className="group flex items-start gap-2 w-fit pointer-events-none">
                <div className="relative flex-shrink-0 pointer-events-auto" style={{ width: `${w}vw`, aspectRatio: aspect }}>
                  <Image
                    src={chapter.cover}
                    alt={chapter.title}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-80"
                    sizes={`${w}vw`}
                  />
                </div>
                <div className="pointer-events-auto" style={{ display: "flex", alignItems: "stretch", gap: "0.6em" }}>
                  <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "1.2em", fontWeight: 100, color: "var(--muted)", lineHeight: 1.35, alignSelf: "flex-start" }}>{NUMBERS[i]}</span>
                  <div style={{ borderLeft: "1px solid var(--muted)", paddingLeft: "0.6em", display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase" as const }}>{chapter.title}</p>
                    {chapter.subtitle && (
                      <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontFamily: "'Geist', sans-serif", fontWeight: 300, marginTop: "0.15rem", opacity: 0.6 }}>
                        {chapter.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        } else if (isLeft) {
          // Left: image at left edge, caption to its right at vertical center
          return (
            <div key={chapter.slug} style={{ marginTop: `${mt}px` }}>
              <Link href={`/chapters/${chapter.slug}`} className="group flex items-center gap-2 w-fit pointer-events-none">
                <div className="relative flex-shrink-0 pointer-events-auto" style={{ width: `${w}vw`, aspectRatio: aspect }}>
                  <Image
                    src={chapter.cover}
                    alt={chapter.title}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-80"
                    sizes={`${w}vw`}
                  />
                </div>
                <div className="pointer-events-auto" style={{ display: "flex", alignItems: "stretch", gap: "0.6em" }}>
                  <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "1.2em", fontWeight: 100, color: "var(--muted)", lineHeight: 1.35, alignSelf: "flex-start" }}>{NUMBERS[i]}</span>
                  <div style={{ borderLeft: "1px solid var(--muted)", paddingLeft: "0.6em", display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase" as const }}>{chapter.title}</p>
                    {chapter.subtitle && (
                      <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontFamily: "'Geist', sans-serif", fontWeight: 300, marginTop: "0.15rem", opacity: 0.6 }}>
                        {chapter.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        } else {
          // Right: image + caption stacked vertically, caption below image at its left edge
          return (
            <div key={chapter.slug} style={{ marginTop: `${mt}px`, display: "flex", justifyContent: "flex-end" }}>
              <Link href={`/chapters/${chapter.slug}`} className="group flex flex-col w-fit pointer-events-none">
                <div className="relative pointer-events-auto" style={{ width: `${w}vw`, aspectRatio: aspect }}>
                  <Image
                    src={chapter.cover}
                    alt={chapter.title}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-80"
                    sizes={`${w}vw`}
                  />
                </div>
                <div className="pointer-events-auto" style={{ marginTop: "0.25rem", display: "flex", alignItems: "stretch", gap: "0.6em" }}>
                  <span style={{ fontFamily: "'Geist', sans-serif", fontSize: "1.2em", fontWeight: 100, color: "var(--muted)", lineHeight: 1.35, alignSelf: "flex-start" }}>{NUMBERS[i]}</span>
                  <div style={{ borderLeft: "1px solid var(--muted)", paddingLeft: "0.6em", display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase" as const }}>{chapter.title}</p>
                    {chapter.subtitle && (
                      <p style={{ color: "var(--muted)", fontSize: "0.82rem", fontFamily: "'Geist', sans-serif", fontWeight: 300, marginTop: "0.15rem", opacity: 0.6 }}>
                        {chapter.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </main>
  );
}
