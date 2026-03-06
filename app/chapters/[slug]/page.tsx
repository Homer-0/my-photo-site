"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import chapters from "@/data/chapters.json";

export default function AlbumPage() {
  const { slug } = useParams();
  const album = chapters.find((a) => a.slug === slug);
  const [index, setIndex] = useState(-1);

  if (!album) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="label">Album not found</p>
      </div>
    );
  }

  // Group images into pairs for asymmetric two-column rows
  const pairs: Array<{ left: typeof album.images[number]; right?: typeof album.images[number] }> = [];
  for (let i = 0; i < album.images.length; i += 2) {
    pairs.push({ left: album.images[i], right: album.images[i + 1] });
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
          <h1 className="font-display text-3xl sm:text-4xl text-white tracking-[0.25em] uppercase">
            {album.title}
          </h1>
          {album.subtitle && (
            <p className="mt-1 text-white/70 text-sm font-light tracking-widest uppercase">
              {album.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Asymmetric two-column layout */}
      <div className="mx-auto max-w-[90rem] px-10 sm:px-16 pt-20 pb-32 flex flex-col gap-32">
        {pairs.map((pair, pairIdx) => {
          const flip = pairIdx % 2 === 1; // alternate which side is larger
          const leftIsLarge = !flip;
          const leftImg = pair.left;
          const rightImg = pair.right;
          const leftPortrait = leftImg.orientation === "portrait";
          const rightPortrait = rightImg?.orientation === "portrait";

          return (
            <div
              key={pairIdx}
              className="flex flex-col sm:flex-row gap-4 sm:gap-40 items-end"
            >
              {/* Left image */}
              <div
                className="relative w-full cursor-zoom-in overflow-hidden"
                style={{
                  flex: leftIsLarge ? "5 1 0%" : "4 1 0%",
                  aspectRatio: leftPortrait ? "2/3" : "3/2",
                  marginTop: leftIsLarge ? 0 : `${3 + pairIdx * 2}rem`,
                }}
                onClick={() => setIndex(pairIdx * 2)}
              >
                <Image
                  src={leftImg.src}
                  alt={`${album.title} photo ${pairIdx * 2 + 1}`}
                  fill
                  className="object-cover transition-[filter] duration-300 hover:brightness-105"
                  sizes="(max-width: 640px) 100vw, 60vw"
                  priority={pairIdx === 0}
                />
              </div>

              {/* Right image */}
              {rightImg && (
                <div
                  className="relative w-full cursor-zoom-in overflow-hidden"
                  style={{
                    flex: leftIsLarge ? "4 1 0%" : "5 1 0%",
                    aspectRatio: rightPortrait ? "2/3" : "3/2",
                    marginTop: leftIsLarge ? `${3 + pairIdx * 2}rem` : 0,
                  }}
                  onClick={() => setIndex(pairIdx * 2 + 1)}
                >
                  <Image
                    src={rightImg.src}
                    alt={`${album.title} photo ${pairIdx * 2 + 2}`}
                    fill
                    className="object-cover transition-[filter] duration-300 hover:brightness-105"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={album.images.map(({ src }) => ({ src }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        styles={{ container: { backgroundColor: "rgba(244,243,240,0.97)" } }}
      />
    </main>
  );
}
