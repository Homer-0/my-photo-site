"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Masonry from "react-masonry-css";
import "yet-another-react-lightbox/styles.css";

// ✅ Static imports — these are safe for server builds
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const images = [
  { src: "/images/Andelsbolig.jpg", alt: "Andelsbolig" },
  { src: "/images/track-field.jpg", alt: "Track & Field" },
  { src: "/images/Home.jpg", alt: "Mølle Allé" },
  { src: "/images/Lake.jpg", alt: "Lake" }, // ← uppercase L
  { src: "/images/metro.jpg", alt: "Metro" },
  { src: "/images/monstera.jpg", alt: "Monstera" },
  { src: "/images/monstera2.jpg", alt: "Monstera 2" },
  { src: "/images/building.jpg", alt: "Building" },
];

export default function Home() {
  const [index, setIndex] = useState(-1);

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <div className="text-black p-6">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className="cursor-zoom-in transition-transform hover:scale-[1.02]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1200}
              height={800}
              className="rounded-xl shadow-md object-cover w-full h-auto"
              priority={i < 2}
            />
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 2 }}
        styles={{
          container: { backgroundColor: "rgba(255,255,255,0.95)" },
          description: {
            color: "#111",
            fontSize: "1rem",
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "1rem",
          },
        }}
      />
    </div>
  );
}