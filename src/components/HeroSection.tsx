import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import type { CarouselApi } from "./ui/carousel";
import Description from "./Description";

export const productImages = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
];

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 sm:items-center gap-6">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {productImages.map((src, index) => (
            <CarouselItem key={src}>
              {/* Slide container */}
              <div className="relative w-full aspect-square overflow-hidden">
                {/* Image */}
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Previous button */}
                <button
                  onClick={() => api?.scrollPrev()}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-4  disabled:opacity-40"
                  aria-label="Previous slide"
                >
                  <img
                    src="/images/icon-previous.svg"
                    alt=""
                    className="size-6"
                  />
                </button>

                {/* Next button */}
                <button
                  onClick={() => api?.scrollNext()}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-4  disabled:opacity-40"
                  aria-label="Next slide"
                >
                  <img src="/images/icon-next.svg" alt="" className="size-6" />
                </button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Description />
    </section>
  );
}
