"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TICKER_ITEMS = [
    "Free Standard Delivery for new customers",
    "Hassle-free Returns Within 03 Days",
    "Member Exclusive: 10% Off First Order",
];

export function NewsTicker() {
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <aside className="relative w-full h-[40px] bg-gris-light dark:bg-slate-800 flex items-center justify-center overflow-hidden z-50">
            <div className="relative w-full max-w-[1440px] px-4 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gris-dark dark:text-text-main-dark text-center"
                    >
                        {TICKER_ITEMS[currentIndex]}
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={() => {
                        setIsVisible(false);
                        sessionStorage.setItem("announcementBarClosed", "true");
                        window.dispatchEvent(new Event("announcementBarClosed"));
                    }}
                    className="absolute right-4 md:right-8 text-gris-dark dark:text-text-main-dark hover:opacity-60 transition-opacity"
                    aria-label="Close"
                    type="button"
                >
                    <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
            </div>
        </aside>
    );
}
