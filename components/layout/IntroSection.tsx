"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * IntroSection
 * Hero section with editorial image and brand messaging
 */
export function IntroSection() {
    return (
        <section
            id="brand-intro"
            className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop"
                    alt="Gris-Cat Editorial Hero"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-[1440px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Brand Name */}
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                            GRIS-CAT
                        </h1>

                        {/* Tagline */}
                        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl mx-auto">
                            Timeless Elegance Meets Contemporary Grace
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/collections/new-arrivals"
                                className="inline-block px-8 py-3 bg-white text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
                            >
                                Discover Collection
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
