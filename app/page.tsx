"use client";

import { useRef, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import photos from "@/data/photos.json";


// Alternating landscape / portrait: L, P, L, P, L, P, L, P
const FEATURED_INDICES = [0, 2, 6, 4, 7, 8, 11, 9];
const featured = FEATURED_INDICES.map((i) => photos[i]).filter(Boolean);

// Parallax strength — how much the background pans per scroll unit (0 = none)
const PARALLAX_STRENGTH = 70; // percentage points of background-position shift at full offset

export default function Home() {
  const stripRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const updateParallax = () => {
      const viewportWidth = strip.clientWidth;
      const viewportCenter = strip.scrollLeft + viewportWidth / 2;

      panelRefs.current.forEach((panel) => {
        if (!panel) return;
        const panelCenter = panel.offsetLeft + panel.offsetWidth / 2;
        // -1 = panel far left, 0 = centered, +1 = far right
        const relativeOffset = (panelCenter - viewportCenter) / viewportWidth;
        // Panel to the right → show left side of image (lower %)
        // Panel to the left  → show right side of image (higher %)
        const posX = Math.max(10, Math.min(90, 50 + relativeOffset * PARALLAX_STRENGTH));
        panel.style.backgroundPositionX = `${posX}%`;
      });
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      strip.scrollLeft += e.deltaY;
    };

    strip.addEventListener("wheel", onWheel, { passive: false });
    strip.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      strip.removeEventListener("wheel", onWheel);
      strip.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div>
      {/* Horizontal film strip with parallax panning */}
      <div
        ref={stripRef}
        className="flex overflow-x-auto items-center"
        style={{
          height: "calc(100dvh - 5rem)",
          gap: 0,
          paddingTop: "3.5rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {featured.map((photo, i) => {
          const isPortrait = photo.orientation === "portrait";
          const heightPct = isPortrait ? 80 : 52;
          const H = `calc((100dvh - 5rem) * ${heightPct} / 100)`;

          return (
            <div
              key={photo.src}
              ref={(el) => { panelRefs.current[i] = el; }}
              onClick={() => setIndex(i)}
              className="flex-shrink-0 cursor-zoom-in"
              style={{
                height: H,
                width: isPortrait ? `calc(${H} * 2 / 3)` : `calc(${H} * 3 / 2)`,
                backgroundImage: `url('${photo.src}')`,
                backgroundSize: "150% auto",
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}
      </div>

      {/* Footer label */}
      <div className="px-10 pt-5 pb-10 flex justify-end">
        <span className="label">Recent Work</span>
      </div>

      {/* Lightbox — uses Next.js Image optimised src */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={featured.map(({ src, alt }) => ({ src, description: alt }))}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(244,243,240,0.97)" } }}
        zoom={{ maxZoomPixelRatio: 2 }}
      />
    </div>
  );
}
