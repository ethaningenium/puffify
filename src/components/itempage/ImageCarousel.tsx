"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel = () => {
  return (
    <div className="flex w-full bg-black justify-center">
      <div></div>

      <Carousel className="w-[600px] ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" absolute -left-8" />
        <CarouselNext className=" absolute -right-8" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
