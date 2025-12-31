"use client";

import { useState, useRef, useEffect } from "react";
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
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Handle wheel scroll navigation with throttle
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    let isScrolling = false;
    
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      const gallery = galleryRef.current;
      
      if (!gallery || !gallery.contains(target)) return;
      
      // Prevent default scroll behavior
      e.preventDefault();
      e.stopPropagation();
      
      // Throttle scroll events
      if (isScrolling) return;
      
      isScrolling = true;
      
      // Determine scroll direction
      if (Math.abs(e.deltaY) > 10) { // Minimum threshold
        if (e.deltaY > 0) {
          // Scroll down - next image
          setActiveImageIndex((prev) => (prev + 1) % images.length);
        } else {
          // Scroll up - previous image
          setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
      }
      
      // Reset throttle after delay
      timeout = setTimeout(() => {
        isScrolling = false;
      }, 300); // 300ms throttle
    };
    
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (gallery) {
        gallery.removeEventListener('wheel', handleWheel);
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [images.length]);

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
                className={`relative w-full aspect-square overflow-hidden bg-background-alt border-2 transition-all ${
                  activeImageIndex === index
                    ? "border-foreground ring-2 ring-offset-2 ring-foreground"
                    : "border-transparent hover:border-border"
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

          {/* Main Image (Right) - Reduced height with scroll navigation */}
          <div 
            ref={galleryRef}
            className="flex-1 relative h-[600px] w-full overflow-hidden bg-background-alt cursor-ns-resize group"
          >
            <Image
              src={mainImage.url}
              alt={mainImage.alt}
              fill
              className="object-cover transition-opacity duration-300"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            
            {/* Scroll Hint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs font-medium uppercase tracking-wider flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                <span>Scroll to navigate</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {activeImageIndex + 1} / {images.length}
            </div>
            
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

      {/* Mobile: Swipeable Carousel with Scroll Navigation */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Carousel Container */}
          <div 
            ref={galleryRef}
            className="relative h-[500px] w-full overflow-hidden bg-background-alt cursor-ns-resize"
          >
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-900" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {activeImageIndex + 1} / {images.length}
            </div>

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
                      ? "w-8 h-2 bg-foreground rounded-full"
                      : "w-2 h-2 bg-border rounded-full hover:bg-foreground-muted"
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

