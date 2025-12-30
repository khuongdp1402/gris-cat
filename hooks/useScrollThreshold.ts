"use client";

import { useState, useEffect, useRef } from "react";

/**
 * A custom hook that tracks scroll progress relative to a threshold.
 * Optimized with requestAnimationFrame for performance.
 * 
 * @param threshold - The scroll pixel value where progress reaches 1.
 * @returns { scrollProgress: number, isPastThreshold: boolean }
 */
export function useScrollThreshold(threshold: number) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isPastThreshold, setIsPastThreshold] = useState(false);

    // Use a ref to store the requestAnimationFrame ID
    const requestRef = useRef<number>();

    useEffect(() => {
        const handleScroll = () => {
            // Cancel previous frame if it's still pending
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }

            // Schedule the state update on the next animation frame
            requestRef.current = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                // Calculate progress from 0 to 1
                const progress = Math.min(Math.max(currentScrollY / threshold, 0), 1);

                setScrollProgress(progress);
                setIsPastThreshold(currentScrollY > threshold);
            });
        };

        // Initial check
        handleScroll();

        // Add scroll event listener with passive option for performance
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [threshold]);

    return { scrollProgress, isPastThreshold };
}
