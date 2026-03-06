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
