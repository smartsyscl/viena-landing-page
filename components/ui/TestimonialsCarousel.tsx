"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author: string;
}

interface TestimonialsCarouselProps {
  items: TestimonialItem[];
}

export default function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-carousel__viewport" ref={emblaRef}>
        <div className="testimonial-carousel__container">
          {items.map((item) => (
            <div key={item.author} className="testimonial-carousel__slide">
              <blockquote className="testimonial-card">
                <p className="testimonial-quote">“{item.quote}”</p>
                <div className="rating" aria-label="Calificación de 5 estrellas">
                  <Star /> <Star /> <Star /> <Star /> <Star />
                </div>
                <cite>{item.author}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-carousel__dots" aria-label="Selector de testimonios">
        {items.map((item, index) => (
          <button
            key={item.author}
            type="button"
            className={index === selectedIndex ? "is-active" : ""}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}