"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ServiceGalleryProps {
  images: GalleryImage[];
  /**
   * if you want to hide the nav buttons you can pass false
   */
  showNav?: boolean;
}

export const ServiceGallery: React.FC<ServiceGalleryProps> = ({
  images,
  showNav = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="embla relative">
      {/* viewport */}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, idx) => (
            <div key={idx} className="embla__slide">
              <div className="relative w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  className="embla__slide__img rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* navigation buttons */}
      {showNav && (
        <> 
          <button
            className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/20 text-white rounded-full p-2 focus:outline-none"
            aria-label="Anterior"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
          >
            ‹
          </button>
          <button
            className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/20 text-white rounded-full p-2 focus:outline-none"
            aria-label="Siguiente"
            onClick={() => emblaApi && emblaApi.scrollNext()}
          >
            ›
          </button>
        </>
      )}

      {/* dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ` +
              (idx === selectedIndex
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60")}
            onClick={() => scrollTo(idx)}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;
