"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const SPOTLIGHT_ITEMS = [
    {
        id: 1,
        title: "School Style",
        image: "/vay1.png",
        link: "/collections/clothing",
    },
    {
        id: 2,
        title: "New Arrivals",
        image: "/vay2.png",
        link: "/collections/new-arrivals",
    },
    {
        id: 3,
        title: "Elegant Steps",
        image: "/vong1.png",
        link: "/collections/dresses",
    },
    {
        id: 4,
        title: "Office Collection",
        image: "/tui-tote.png",
        link: "/collections/bags",
    },
    {
        id: 5,
        title: "Street Fashion",
        image: "/vay1.png",
        link: "/collections/accessories",
    },
    {
        id: 6,
        title: "Evening Collection",
        image: "/vay2.png",
        link: "/collections/dresses",
    },
];

export function SpotlightCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="py-12 md:py-16">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                {/* Header with Navigation */}
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <h2 className="text-lg md:text-xl font-playfair font-medium tracking-tight text-foreground">
                        In the Spotlight
                    </h2>
                    
                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-10 h-10 flex items-center justify-center border border-border hover:bg-background-alt transition-colors"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-10 h-10 flex items-center justify-center border border-border hover:bg-background-alt transition-colors"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={16}
                    slidesPerView={2}
                    speed={800}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                        1280: { slidesPerView: 5, spaceBetween: 24 },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="w-full"
                >
                    {SPOTLIGHT_ITEMS.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link href={item.link} className="group block">
                                <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-sm font-medium text-foreground mb-1">
                                        {item.title}
                                    </h3>
                                    <span className="text-xs uppercase tracking-wider text-foreground-muted hover:text-foreground transition-colors">
                                        Shop Now
                                    </span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
