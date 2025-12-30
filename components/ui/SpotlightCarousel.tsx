"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const SPOTLIGHT_ITEMS = [
    {
        id: 1,
        title: "The Balletcore Edit",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
        link: "/collections/clothing",
    },
    {
        id: 2,
        title: "Classic Grey Suitings",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
        link: "/collections/clothing",
    },
    {
        id: 3,
        title: "Evening Occasions",
        image: "https://images.unsplash.com/photo-1566479179817-4d9c0c5e3e0e?q=80&w=800&auto=format&fit=crop",
        link: "/collections/dresses",
    },
    {
        id: 4,
        title: "Timeless Essentials",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
        link: "/collections/new-arrivals",
    },
    {
        id: 5,
        title: "Minimalist Footwear",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
        link: "/collections/accessories",
    },
];

export function SpotlightCarousel() {
    const [emblaRef] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
        dragFree: true,
    });

    return (
        <section className="py-16 md:py-24 bg-white dark:bg-[#1a202c]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-8 md:mb-12">
                    <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gris-dark dark:text-gray-300">
                        IN THE SPOTLIGHT
                    </h2>
                </div>

                {/* Carousel Viewport */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {SPOTLIGHT_ITEMS.map((item) => (
                            <div
                                key={item.id}
                                className="flex-[0_0_85%] md:flex-[0_0_28%] min-w-0" // 1.2 on mobile, ~3.5 on desktop
                            >
                                <Link href={item.link} className="group block">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-gris-backdrop mb-4">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 85vw, 28vw"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-1">
                                        <h3 className="text-sm font-medium uppercase tracking-widest text-gris-dark dark:text-gray-200">
                                            {item.title}
                                        </h3>
                                        <span className="text-[10px] font-bold uppercase tracking-widest border-b border-gris-dark dark:border-gray-400 pb-0.5 group-hover:opacity-70 transition-opacity dark:text-gray-300">
                                            Shop Now
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
