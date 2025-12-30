"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: Array<{ id: string; url: string; alt: string; isMain?: boolean }>;
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mainImage = images[activeImageIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Desktop: Thumbnails (Left) + Main Image (Right) */}
      <div className="hidden lg:block">
        <div className="flex gap-4">
          {/* Thumbnails Column (Left) */}
          <div className="flex-shrink-0 w-20 space-y-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveImageIndex(index)}
                className={`relative w-full aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 transition-all ${
                  activeImageIndex === index
                    ? "border-gray-900 dark:border-gray-100 ring-2 ring-offset-2 ring-gray-900 dark:ring-gray-100"
                    : "border-transparent hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>

          {/* Main Image (Right) */}
          <div className="flex-1 relative aspect-[3/4] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={mainImage.url}
              alt={mainImage.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            
            {/* Shop Similar Button Overlay */}
            <div className="absolute top-4 left-4">
              <Link
                href="/collections/bags"
                className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors"
              >
                SHOP SIMILAR
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Swipeable Carousel */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div
              className="flex transition-transform duration-300 ease-in-out h-full"
              style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
            >
              {images.map((image) => (
                <div key={image.id} className="min-w-full h-full relative">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={image.isMain}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-gray-900 dark:text-gray-100" />
                </button>
              </>
            )}

            {/* Shop Similar Button */}
            <div className="absolute bottom-4 left-4">
              <Link
                href="/collections/bags"
                className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors"
              >
                Shop Similar
              </Link>
            </div>
          </div>

          {/* Pagination Dots */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`transition-all ${
                    activeImageIndex === index
                      ? "w-8 h-2 bg-gray-900 dark:bg-gray-100 rounded-full"
                      : "w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

