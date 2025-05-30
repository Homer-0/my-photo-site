"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

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

  if (!album) {
    return <div className="text-center p-10">Album not found</div>;
  }

  return (
    <main className="relative px-2 md:px-6 lg:px-10 py-10 max-w-[1600px] mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">{album.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {album.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${album.title} photo ${i + 1}`}
            className="w-full h-auto object-cover rounded-xl cursor-zoom-in hover:scale-[1.01] transition-transform"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

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