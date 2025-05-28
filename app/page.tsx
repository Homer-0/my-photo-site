"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
  { src: "/images/Andelsbolig.jpg", alt: "Andelsbolig" },
  { src: "/images/track-field.jpg", alt: "Track & Field" },
  { src: "/images/Home.jpg", alt: "Mølle Allé" },
  { src: "/images/Lake.jpg", alt: "Lake" },
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
    <div className="text-black">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-zoom-in transition-transform hover:scale-[1.02]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              loading="lazy"
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}