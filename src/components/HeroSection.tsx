import * as React from "react";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function HeroSection() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 basis-1/3">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {/* Add an image here */}
                  <img
                    src={`/images/image-product-${index + 1}.jpg`}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel Navigation */}
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
