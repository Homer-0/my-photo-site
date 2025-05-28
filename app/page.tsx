'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

const images = [
  { src: '/images/Andelsbolig.jpg', alt: 'Andelsbolig' },
  { src: '/images/building.jpg', alt: 'Building' },
  { src: '/images/Home.jpg', alt: 'Home' },
  { src: '/images/Lake.jpg', alt: 'Lake' },
  { src: '/images/metro.jpg', alt: 'Metro' },
  { src: '/images/monstera.jpg', alt: 'Monstera' },
  { src: '/images/monstera2.jpg', alt: 'Monstera 2' },
  { src: '/images/track-field.jpg', alt: 'Track Field' },
];

export default function Page() {
  const [index, setIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl w-full">
        {images.map((image, idx) => (
          <div
            key={image.src}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setIndex(idx)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
        plugins={[Zoom]}
      />
    </main>
  );
}