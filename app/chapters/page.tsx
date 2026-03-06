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
