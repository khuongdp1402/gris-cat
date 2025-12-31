"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ClassicSlide = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
};

const SLIDES: ClassicSlide[] = [
  {
    id: "grey-edit",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop",
    subtitle: "GRIS-CAT",
    title: "The Grey Edit",
    cta: "DISCOVER",
    href: "/collections/new-arrivals",
  },
  {
    id: "soft-silhouettes",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    subtitle: "SPRING / SUMMER",
    title: "Soft Silhouettes",
    cta: "DISCOVER",
    href: "/collections/clothing",
  },
  {
    id: "timeless-elegance",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&auto=format&fit=crop",
    subtitle: "SIGNATURE",
    title: "Timeless Elegance",
    cta: "DISCOVER",
    href: "/collections/dresses",
  },
];

export function ClassicHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPrev = useCallback(() => {
    const btn = document.querySelector<HTMLButtonElement>(".classic-hero-prev");
    btn?.click();
  }, []);

  const onNext = useCallback(() => {
    const btn = document.querySelector<HTMLButtonElement>(".classic-hero-next");
    btn?.click();
  }, []);

  const activeSlide = SLIDES[activeIndex] ?? SLIDES[0];

  return (
    <section className="group relative w-full h-[75vh] md:h-[calc(100vh-80px)] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{
          clickable: true,
          bulletClass: "classic-hero-bullet",
          bulletActiveClass: "classic-hero-bullet-active",
        }}
        navigation={{
          prevEl: ".classic-hero-prev",
          nextEl: ".classic-hero-next",
        }}
        className="h-full w-full"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === SLIDES[0]?.id}
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Subtle gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination style hooks */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 28px !important;
          }
          .classic-hero-bullet {
            width: 6px;
            height: 6px;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 1;
            margin: 0 6px !important;
            transition: transform 500ms ease, background 500ms ease;
          }
          .classic-hero-bullet-active {
            background: rgba(255, 255, 255, 1);
            transform: scale(1.15);
          }
        `}</style>
      </Swiper>

      {/* Animated Text (driven by activeIndex) */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="pointer-events-none max-w-[1440px] mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="space-y-5"
            >
              <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/80 font-semibold">
                {activeSlide.subtitle}
              </p>
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight italic">
                {activeSlide.title}
              </h1>
              <div className="pt-4">
                <Link
                  href={activeSlide.href}
                  className="pointer-events-auto inline-flex items-center justify-center px-10 py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-white border border-white/80 hover:border-white hover:bg-white/10 transition-all duration-500 ease-out"
                >
                  {activeSlide.cta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Hidden Swiper nav elements (controlled via class selectors) */}
      <button
        className="classic-hero-prev hidden"
        aria-hidden="true"
        tabIndex={-1}
        type="button"
      />
      <button
        className="classic-hero-next hidden"
        aria-hidden="true"
        tabIndex={-1}
        type="button"
      />

      {/* Minimalist arrows – only appear on hover */}
      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        <button
          onClick={onPrev}
          className="pointer-events-auto absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          aria-label="Previous slide"
          type="button"
        >
          <span className="flex h-14 w-14 items-center justify-center">
            <ChevronLeft className="h-10 w-10 text-white/85" strokeWidth={1} />
          </span>
        </button>
        <button
          onClick={onNext}
          className="pointer-events-auto absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          aria-label="Next slide"
          type="button"
        >
          <span className="flex h-14 w-14 items-center justify-center">
            <ChevronRight className="h-10 w-10 text-white/85" strokeWidth={1} />
          </span>
        </button>
      </div>
    </section>
  );
}


