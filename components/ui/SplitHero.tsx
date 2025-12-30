"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function SplitHero() {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:h-[80vh] min-h-[600px] md:min-h-0">

                {/* Left Column: Sneakers */}
                <div className="relative h-[50vh] md:h-full border-r border-white/10 group overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop"
                        alt="Step Out In Sneakers"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />

                    <div className="absolute top-10 left-10 md:top-16 md:left-16 z-10 text-white max-w-xs">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest leading-tight mb-4 drop-shadow-md">
                            Step Out In <br /> Sneakers
                        </h2>
                        <Link
                            href="/shoes/sneakers"
                            className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b-[1.5px] border-white pb-1 hover:opacity-70 transition-all"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Right Column: Totes */}
                <div className="relative h-[50vh] md:h-full group overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1920&auto=format&fit=crop"
                        alt="Totes To Tote"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />

                    <div className="absolute top-10 left-10 md:top-16 md:left-16 z-10 text-white max-w-xs">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest leading-tight mb-4 drop-shadow-md">
                            Totes To <br /> Tote
                        </h2>
                        <Link
                            href="/bags/totes"
                            className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b-[1.5px] border-white pb-1 hover:opacity-70 transition-all"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
