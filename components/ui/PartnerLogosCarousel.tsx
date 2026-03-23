"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type PartnerLogoItem = {
  name: string;
  logo: string;
};

type PartnerLogosCarouselProps = {
  items: PartnerLogoItem[];
};

export default function PartnerLogosCarousel({ items }: PartnerLogosCarouselProps) {
  const carouselItems = items.length < 6 ? [...items, ...items, ...items] : items;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    containScroll: "keepSnaps",
  });
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!emblaApi || isPaused || reduceMotion) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 1800);

    return () => window.clearInterval(interval);
  }, [emblaApi, isPaused, reduceMotion]);

  return (
    <div
      className="partners-embla"
      aria-label="Logotipos de colegios actuales"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="partners-embla__viewport" ref={emblaRef}>
        <div className="partners-embla__container">
          {carouselItems.map((school, idx) => (
            <article
              key={`${school.name}-${idx}`}
              className="partners-embla__slide"
              aria-label={school.name}
            >
              <Image
                src={school.logo}
                alt={`Logotipo ${school.name}`}
                width={200}
                height={92}
                className="partner-logo"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
