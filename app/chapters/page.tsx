"use client";

import Link from "next/link";
import chapters from "@/data/chapters.json";

export default function ChaptersPage() {
  return (
    <main className="relative px-0 sm:px-2 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 py-6">
          {chapters.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/chapters/${chapter.slug}`}
              className="group block"
            >
              <h2 className="text-center text-xl font-medium mb-2 text-black dark:text-white">
                {chapter.title}
              </h2>
              <div className="relative w-full aspect-square overflow-hidden shadow-lg">
                <img
                  src={chapter.cover}
                  alt={chapter.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
  );
}
