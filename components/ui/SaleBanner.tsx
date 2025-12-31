"use client";

import React from "react";
import Link from "next/link";

export function SaleBanner() {
    return (
        <section className="relative w-full h-[140px] sm:h-[160px] md:h-[200px] overflow-hidden">
            {/* Wood Texture Background with Red Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900">
                {/* Wood grain texture overlay */}
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            90deg,
                            rgba(139, 69, 19, 0.1) 0px,
                            rgba(139, 69, 19, 0.3) 2px,
                            transparent 2px,
                            transparent 4px
                        )`,
                    }}
                />
                {/* Red vibrant overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-orange-500/30 to-red-600/40" />
            </div>

            {/* Content - Desktop & Tablet */}
            <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-6 hidden sm:flex items-center justify-between">
                {/* Left: SALE Text */}
                <div className="flex-shrink-0">
                    <h2 
                        className="text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl"
                        style={{ 
                            fontFamily: 'Impact, Arial Black, sans-serif', 
                            letterSpacing: '0.05em',
                            WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        SALE
                    </h2>
                </div>

                {/* Center: Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-1 md:mb-2 tracking-tight drop-shadow-lg">
                        UP TO 50% OFF
                    </h3>
                    <p className="text-base md:text-xl font-bold text-white mb-1 drop-shadow-md">
                        NEW STYLES ADDED
                    </p>
                    <p className="text-xs md:text-sm text-white/95 drop-shadow-sm">
                        + Extra 10% off when you buy 2 sale items
                    </p>
                </div>

                {/* Right: CTA */}
                <div className="flex-shrink-0">
                    <Link
                        href="/collections/sale"
                        className="inline-block px-6 md:px-8 py-2.5 md:py-3.5 bg-white text-red-700 text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:bg-red-50 hover:scale-105 transition-all shadow-lg"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>

            {/* Content - Mobile (Simplified) */}
            <div className="relative z-10 h-full flex sm:hidden items-center justify-between px-4">
                {/* Left: SALE Text */}
                <div className="flex-shrink-0">
                    <h2 
                        className="text-4xl font-black text-white drop-shadow-2xl"
                        style={{ 
                            fontFamily: 'Impact, Arial Black, sans-serif',
                            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        SALE
                    </h2>
                </div>

                {/* Center: Simplified Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-3">
                    <h3 className="text-base font-black text-white mb-0.5 tracking-tight drop-shadow-lg leading-tight">
                        UP TO 50% OFF
                    </h3>
                    <p className="text-sm font-bold text-white drop-shadow-md leading-tight">
                        NEW STYLES ADDED
                    </p>
                    <p className="text-[10px] text-white/95 mt-1 drop-shadow-sm">
                        + Extra 10% off 2 items
                    </p>
                </div>

                {/* Right: CTA */}
                <div className="flex-shrink-0">
                    <Link
                        href="/collections/sale"
                        className="inline-block px-4 py-2 bg-white text-red-700 text-[10px] font-black uppercase tracking-wider hover:bg-red-50 transition-all shadow-lg whitespace-nowrap"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>

            {/* Bottom Right: Terms Link - Desktop only */}
            <div className="absolute bottom-2 md:bottom-3 right-4 md:right-6 z-10 hidden md:block">
                <Link
                    href="/terms"
                    className="text-[9px] md:text-[10px] text-white/80 uppercase tracking-widest hover:text-white transition-colors font-semibold drop-shadow"
                >
                    *T&Cs Apply
                </Link>
            </div>
        </section>
    );
}
