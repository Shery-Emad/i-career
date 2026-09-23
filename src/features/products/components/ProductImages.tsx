"use client";

import { useState } from "react";
import clsx from "clsx";

export function ProductImages({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="aspect-[4/5] w-full overflow-hidden bg-parchment-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIndex]}
          alt={productName}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`Show image ${index + 1} of ${productName}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={clsx(
                "aspect-square overflow-hidden bg-parchment-dark ring-1 transition",
                index === activeIndex ? "ring-ink" : "ring-transparent",
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
