"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import photos from "@/data/photos.json";
import Link from "next/link";

// Curate the homepage feature photos (indices into photos.json)
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
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
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
