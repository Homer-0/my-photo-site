"use client";

import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const chapters = [
  { title: "Andelsbolig", slug: "andelsbolig", cover: "/images/andelsbolig/Andelsbolig.jpg" },
  { title: "Copenhagen", slug: "copenhagen", cover: "/images/copenhagen/building.jpg" },
  { title: "Metro", slug: "metro", cover: "/images/metro/metro.jpg" },
];

export default function ChaptersPage() {
  return (
    <>
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-40">
        <ThemeSwitcher />
      </div>
      <main className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/chapters/${chapter.slug}`}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={chapter.cover}
              alt={chapter.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold">
              {chapter.title}
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}