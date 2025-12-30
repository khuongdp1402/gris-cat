"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SLIDES = [
    {
        id: 1,
        title: "The Gris Collection",
        subtitle: "AUTUMN / WINTER 2026",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1920&auto=format&fit=crop",
        link: "/collections/clothing",
        position: "bottom-left" as const,
    },
    {
        id: 2,
        title: "Balletcore Edit",
        subtitle: "NEW SEASON ARRIVALS",
        image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1920&auto=format&fit=crop",
        link: "/collections/clothing",
        position: "bottom-center" as const,
    },
    {
        id: 3,
        title: "Timeless Essentials",
        subtitle: "CURATED FOR YOU",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop",
        link: "/collections/new-arrivals",
        position: "bottom-left" as const,
    },
];

export function FeaturedCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000);

        return () => {
            emblaApi.off("select", onSelect);
            clearInterval(interval);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    return (
        <section className="relative w-screen overflow-hidden group mt-12 md:mt-16">
            <div className="overflow-hidden h-[50vh] md:h-[70vh]" ref={emblaRef}>
                <div className="flex h-full">
                    {SLIDES.map((slide, index) => (
                        <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    priority={slide.id === 1}
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />
                            </div>

                            <div className={cn(
                                "absolute inset-0 p-8 md:p-16 flex flex-col pointer-events-none",
                                slide.position === "bottom-left" ? "justify-end items-start" : "justify-end items-center text-center",
                                "pb-20 md:pb-24 lg:pb-28"
                            )}>
                                <div className="max-w-2xl text-white pointer-events-auto">
                                    <AnimatePresence mode="wait">
                                        {selectedIndex === index && (
                                            <motion.div
                                                key={slide.id}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            >
                                                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-3 drop-shadow-md">
                                                    {slide.subtitle}
                                                </p>
                                                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight drop-shadow-lg">
                                                    {slide.title}
                                                </h2>
                                                <Link
                                                    href={slide.link}
                                                    className="inline-block text-xs md:text-sm uppercase font-bold tracking-widest border-b-[1.5px] border-white pb-1 hover:opacity-70 transition-all duration-300"
                                                >
                                                    SHOP NOW
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "h-[2px] transition-all duration-300",
                            selectedIndex === index ? "w-12 bg-white" : "w-6 bg-white/40 hover:bg-white/60"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="hidden lg:block absolute left-10 md:left-16 bottom-0 w-[1px] h-20 bg-white/30 z-10" />
        </section>
    );
}
