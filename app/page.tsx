"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import PageContainer from "@/components/PageContainer";
import photos from "@/data/photos.json";

export default function Home() {
  const [index, setIndex] = useState(-1);

  const breakpointColumnsObj = {
    default: 3,
    1280: 2,
    768: 1,
  };

  return (
    <main className="relative max-w-[1600px] mx-auto">
      <PageContainer>
        <h2 className="text-center font-semibold text-lg mb-4 mt-4">Recent work</h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-1 px-0 sm:px-1"
          columnClassName="space-y-1"
        >
          {photos.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setIndex(i)}
              className={`relative w-full ${img.orientation === "landscape" ? "aspect-[5/4]" : "aspect-[4/5]"} cursor-zoom-in overflow-hidden shadow-md hover:scale-[1.01] transition-transform`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
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
        slides={photos.map(({ src, alt }) => ({ src, description: alt }))}
        plugins={[Zoom]}
        styles={{
          container: { backgroundColor: "rgba(255,255,255,0.95)" },
        }}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </main>
  );
}
