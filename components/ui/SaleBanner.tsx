"use client";

import React from "react";
import Link from "next/link";

export function SaleBanner() {
    return (
        <section className="w-full h-[120px] md:h-[150px] bg-gradient-to-r from-[#201A16] via-[#2C241E] to-[#201A16] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-[#E5E5E5] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                    SALE
                </h2>
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white">
                        UP TO 50% OFF NEW STYLES ADDED
                    </p>
                    <Link
                        href="/collections/sale"
                        className="mt-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-0.5 hover:opacity-70 transition-opacity"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
        </section>
    );
}
