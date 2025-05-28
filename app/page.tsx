"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/images/Lake.jpg", alt: "Lake" },
  { src: "/images/Andelsbolig.jpg", alt: "Andelsbolig" },
  { src: "/images/Athen.jpg", alt: "Athen" },
  { src: "/images/Beach.jpg", alt: "Beach" },
  { src: "/images/Block.jpg", alt: "Block" },
  { src: "/images/Globe.jpg", alt: "Globe" },
  { src: "/images/Kitchen.jpg", alt: "Kitchen" },
  { src: "/images/Mirror.jpg", alt: "Mirror" },
  { src: "/images/Red.jpg", alt: "Red" },
  { src: "/images/Sunrise.jpg", alt: "Sunrise" }
];

export default function Home() {
  const [index, setIndex] = useState(-1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-4 md:px-16 py-12 bg-white text-black">
      <h1 className="text-2xl md:text-3xl font-light tracking-widest mb-8 text-center">
        MANOS TZAVIDAS.
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-6xl">
        {images.map((img, i) => (
          <button key={i} onClick={() => setIndex(i)} className="relative w-full h-40 sm:h-48 md:h-64">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              priority={i === 0}
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({ src: img.src }))}
        plugins={[Zoom]}
      />
    </main>
  );
}