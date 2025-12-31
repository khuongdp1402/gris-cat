"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Hero slides data
const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop",
    title: "New Arrivals",
    subtitle: "Spring Collection 2025",
    cta: "Shop Now",
    link: "/collections/new-arrivals",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    title: "Elegant Dresses",
    subtitle: "Timeless Sophistication",
    cta: "Discover",
    link: "/collections/dresses",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&auto=format&fit=crop",
    title: "Premium Bags",
    subtitle: "Crafted for Excellence",
    cta: "Explore",
    link: "/collections/bags",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Preload next and previous images
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % HERO_SLIDES.length;
    const prevIndex = (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    
    const nextImg = new window.Image();
    nextImg.src = HERO_SLIDES[nextIndex].image;
    
    const prevImg = new window.Image();
    prevImg.src = HERO_SLIDES[prevIndex].image;
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 100, damping: 50, duration: 1.2 },
            opacity: { duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              fill
              className="object-cover object-center"
              priority={currentSlide === 0}
              quality={90}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-[1440px] mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Subtitle */}
                <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 font-bold">
                  {HERO_SLIDES[currentSlide].subtitle}
                </p>

                {/* Title */}
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  {HERO_SLIDES[currentSlide].title}
                </h1>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={HERO_SLIDES[currentSlide].link}
                    className="inline-block px-10 py-4 bg-white text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all hover:scale-105"
                  >
                    {HERO_SLIDES[currentSlide].cta}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Desktop Only */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-500 ease-in-out hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white/90" strokeWidth={1} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-500 ease-in-out hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white/90" strokeWidth={1} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "w-8 h-[2px] bg-white/90 rounded-full"
                : "w-2 h-[2px] bg-white/30 hover:bg-white/50 rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

