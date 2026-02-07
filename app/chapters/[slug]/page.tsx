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

  const breakpointColumnsObj = {
    default: 3,
    1280: 2,
    768: 1,
  };

  if (!album) {
    return <div className="text-center p-10">Album not found</div>;
  }

  return (
    <main className="relative px-0 sm:px-2 pt-3 pb-8 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-semibold mb-3 text-center">{album.title}</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-1"
        columnClassName="space-y-1"
      >
        {album.images.map((image, i) => (
          <div
            key={image.src}
            onClick={() => setIndex(i)}
            className={`relative w-full ${image.orientation === "landscape" ? "aspect-[5/4]" : "aspect-[4/5]"} cursor-zoom-in overflow-hidden shadow-md hover:scale-[1.01] transition-transform`}
          >
            <Image
              src={image.src}
              alt={`${album.title} photo ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={i === 0}
            />
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={album.images.map(({ src }) => ({ src }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        styles={{ container: { backgroundColor: "rgba(255,255,255,0.95)" } }}
      />
    </main>
  );
}
