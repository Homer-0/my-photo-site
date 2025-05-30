"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Masonry from "react-masonry-css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const albums = [
  {
    slug: "andelsbolig",
    title: "Andelsbolig",
    images: [
      "/images/Andelsbolig.jpg",
      // add more images for this album here
    ],
  },
  {
    slug: "copenhagen",
    title: "Copenhagen",
    images: [
      "/images/building.jpg",
      "/images/metro.jpg",
      // more images
    ],
  },
  {
    slug: "morocco",
    title: "Morocco",
    images: [
      "/images/monstera2.jpg",
      "/images/track-field.jpg",
      // more images
    ],
  },
];

export default function AlbumPage() {
  const { slug } = useParams();
  const album = albums.find((a) => a.slug === slug);

  const [index, setIndex] = useState(-1);

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  if (!album) {
    return <div className="text-center p-10">Album not found</div>;
  }

  return (
    <main className="relative px-2 md:px-6 lg:px-10 pt-4 pb-10 max-w-[1600px] mx-auto">
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-40 hidden sm:block">
  <ThemeSwitcher />
</div>
      <h1 className="text-2xl font-semibold mb-4 text-center">{album.title}</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {album.images.map((src, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="relative w-full cursor-zoom-in overflow-hidden shadow-md hover:scale-[1.01] transition-transform"
          >
            <Image
              src={src}
              alt={`${album.title} photo ${i + 1}`}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
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
        slides={album.images.map((src) => ({ src }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        styles={{ container: { backgroundColor: "rgba(255,255,255,0.95)" } }}
      />
    </main>
  );
}