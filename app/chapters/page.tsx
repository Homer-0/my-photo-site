"use client";

import Link from "next/link";
import chapters from "@/data/chapters.json";

export default function ChaptersPage() {
  return (
    <main className="relative px-0 sm:px-2 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 py-6">
          {chapters.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/chapters/${chapter.slug}`}
              className="relative group overflow-hidden shadow-lg aspect-square"
            >
              <div className="relative w-full h-full">
                <img
                  src={chapter.cover}
                  alt={chapter.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold">
                  {chapter.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
  );
}
