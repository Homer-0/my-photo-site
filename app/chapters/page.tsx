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

const OVERRIDES = [
  { wClass: "w-[80vw] sm:w-[54vw]", mt: "mt-12 sm:mt-[80px]"  },
  { wClass: "w-[80vw] sm:w-[40vw]", mt: "mt-12 sm:mt-[140px]" },
  { wClass: "w-[80vw] sm:w-[28vw]", mt: "mt-6  sm:mt-[24px]"  },
];

function Caption({ number, chapter }: { number: string; chapter: Chapter }) {
  return (
    <div className="pointer-events-auto" style={{ display: "flex", alignItems: "flex-start", gap: "0.44em", opacity: 0.55 }}>
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, color: "var(--ink)", lineHeight: 1, position: "relative", top: "-0.12em" }}>{number}</span>
      <div style={{ borderLeft: "1px solid var(--ink)", paddingLeft: "0.44em", display: "flex", flexDirection: "column", alignSelf: "stretch" }}>
        <p style={{ color: "var(--ink)", fontSize: "0.9rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase" as const }}>{chapter.title}</p>
        {chapter.subtitle && (
          <p style={{ color: "var(--ink)", fontSize: "0.82rem", fontFamily: "'Geist', sans-serif", fontWeight: 300, marginTop: "0.15rem", opacity: 0.6 }}>
            {chapter.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ChaptersPage() {
  return (
    <main className="pb-64 px-6 sm:px-10 overflow-x-hidden">
      {chapters.map((chapter, i) => {
        const orientation = getCoverOrientation(chapter);
        const isPortrait = orientation === "portrait";
        const side = SIDES[i] ?? (i % 2 === 0 ? "left" : "right");
        const isLeft = side === "left";
        const override = OVERRIDES[i] ?? { wClass: "w-[80vw] sm:w-[40vw]", mt: "mt-12" };
        const aspect = isPortrait ? "2/3" : "3/2";
        const wNum = parseInt(override.wClass.match(/sm:w-\[(\d+)vw\]/)?.[1] ?? "40");

        if (i === 0) {
          return (
            <div key={chapter.slug} className={override.mt}>
              <Link href={`/chapters/${chapter.slug}`} className="group flex flex-col sm:flex-row sm:items-start sm:gap-2 w-fit pointer-events-none">
                <div className={`relative flex-shrink-0 pointer-events-auto ${override.wClass}`} style={{ aspectRatio: aspect }}>
                  <Image src={chapter.cover} alt={chapter.title} fill className="object-cover transition-opacity duration-500 group-hover:opacity-80" sizes={`(max-width: 640px) 80vw, ${wNum}vw`} />
                </div>
                <div className="mt-2 sm:mt-0 pointer-events-auto">
                  <Caption number={NUMBERS[i]} chapter={chapter} />
                </div>
              </Link>
            </div>
          );
        } else if (isLeft) {
          return (
            <div key={chapter.slug} className={override.mt}>
              <Link href={`/chapters/${chapter.slug}`} className="group flex flex-col sm:flex-row sm:items-center sm:gap-2 w-fit pointer-events-none">
                <div className={`relative flex-shrink-0 pointer-events-auto ${override.wClass}`} style={{ aspectRatio: aspect }}>
                  <Image src={chapter.cover} alt={chapter.title} fill className="object-cover transition-opacity duration-500 group-hover:opacity-80" sizes={`(max-width: 640px) 80vw, ${wNum}vw`} />
                </div>
                <div className="mt-2 sm:mt-0 pointer-events-auto">
                  <Caption number={NUMBERS[i]} chapter={chapter} />
                </div>
              </Link>
            </div>
          );
        } else {
          return (
            <div key={chapter.slug} className={`${override.mt} flex sm:justify-end`}>
              <Link href={`/chapters/${chapter.slug}`} className="group flex flex-col w-fit pointer-events-none">
                <div className={`relative pointer-events-auto ${override.wClass}`} style={{ aspectRatio: aspect }}>
                  <Image src={chapter.cover} alt={chapter.title} fill className="object-cover transition-opacity duration-500 group-hover:opacity-80" sizes={`(max-width: 640px) 80vw, ${wNum}vw`} />
                </div>
                <div className="mt-2 pointer-events-auto">
                  <Caption number={NUMBERS[i]} chapter={chapter} />
                </div>
              </Link>
            </div>
          );
        }
      })}
    </main>
  );
}
