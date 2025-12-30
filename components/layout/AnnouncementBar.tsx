"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Announcement messages
const MESSAGES = [
    "Free Shipping on orders over 2.000.000đ",
    "New Balletcore Collection - Available Now",
    "Tet Holiday Sale - Up to 50% OFF",
];

export function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Check if bar was previously closed
    useEffect(() => {
        const isClosed = sessionStorage.getItem("announcementBarClosed");
        if (isClosed === "true") {
            setIsVisible(false);
        }
    }, []);

    // Cycle through messages
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
                setIsAnimating(false);
            }, 300); // Half of the animation duration
        }, 4000); // Change message every 4 seconds

        return () => clearInterval(interval);
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("announcementBarClosed", "true");
        window.dispatchEvent(new Event("announcementBarClosed"));
    };

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 w-full h-10 bg-gris-light flex items-center justify-center z-50 overflow-hidden">
            {/* Animated text container with slide-up effect */}
            <div className="relative h-full flex items-center overflow-hidden">
                <div className="relative h-full flex items-center">
                    <p
                        key={currentIndex}
                        className={`text-xs uppercase tracking-widest text-gris-dark font-medium transition-all duration-600 ease-in-out ${isAnimating
                            ? "-translate-y-full opacity-0"
                            : "translate-y-0 opacity-100"
                            }`}
                        style={{
                            transitionProperty: "transform, opacity",
                        }}
                    >
                        {MESSAGES[currentIndex]}
                    </p>
                </div>
            </div>

            {/* Close button */}
            <button
                onClick={handleClose}
                className="absolute right-4 h-6 w-6 flex items-center justify-center hover:bg-gris-medium/20 rounded-full transition-colors group"
                aria-label="Close announcement"
                type="button"
            >
                <X className="h-4 w-4 text-gris-dark group-hover:text-gris-dark/80 transition-colors" />
            </button>
        </div>
    );
}
