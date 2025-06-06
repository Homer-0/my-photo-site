"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import PageContainer from "@/components/PageContainer";
import Link from "next/link";

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
    <main className="relative">
      <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-40 hidden sm:block">
  <ThemeSwitcher />
</div>

      <PageContainer>
        <h2 className="text-center font-semibold text-lg mb-4 mt-4">Recent work</h2>

        <Masonry
  breakpointCols={breakpointColumnsObj}
  className="flex gap-6 px-4 sm:px-10"
  columnClassName="space-y-6"
>
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="relative w-full cursor-zoom-in overflow-hidden shadow-md hover:scale-[1.01] transition-transform"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={i === 0}
              />
            </div>
          ))}
        </Masonry>
      </PageContainer>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map(({ src, alt }) => ({ src, description: alt }))}
        plugins={[Zoom]}
        styles={{
          container: { backgroundColor: "rgba(255,255,255,0.95)" },
        }}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </main>
  );
}