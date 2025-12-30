"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Sun, Moon, MessageCircle, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingToolsBackup() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [lang, setLang] = useState("VN");
    const [showLangMenu, setShowLangMenu] = useState(false);

    // Handle scroll to show/hide "Back to Top"
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle theme toggle
    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
            <AnimatePresence>
                {/* 1. Back To Top */}
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-gris-dark dark:text-text-main-dark shadow-lg hover:scale-110 transition-transform"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </motion.button>
                )}

                {/* 2. Language Toggle */}
                <div className="relative">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowLangMenu(!showLangMenu)}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-gris-dark dark:text-text-main-dark shadow-lg font-bold text-xs"
                    >
                        {lang}
                    </motion.button>

                    <AnimatePresence>
                        {showLangMenu && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="absolute right-14 top-0 bg-white dark:bg-slate-700 shadow-xl rounded-lg p-2 flex flex-col gap-1 min-w-[60px]"
                            >
                                {["VN", "EN"].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => {
                                            setLang(l);
                                            setShowLangMenu(false);
                                        }}
                                        className={cn(
                                            "px-3 py-1 text-xs font-medium rounded hover:bg-gris-light dark:hover:bg-slate-600 transition-colors",
                                            lang === l ? "text-gris-dark font-bold" : "text-gray-400"
                                        )}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 3. Theme Toggle */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 text-gris-dark dark:text-text-main-dark shadow-lg"
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>

                {/* 4. Chat Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gris-dark text-white shadow-2xl"
                    aria-label="Contact us"
                >
                    <MessageCircle className="w-7 h-7" />
                </motion.button>
            </AnimatePresence>
        </div>
    );
}

