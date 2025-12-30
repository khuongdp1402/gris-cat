"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, MapPin, Headphones, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// Main categories with sub-categories
const CATEGORIES = [
    {
        id: "new-in",
        label: "NEW IN",
        href: "/new-arrivals",
        subCategories: [
            { label: "New Arrivals", href: "/new-arrivals" },
            { label: "Online Exclusive", href: "/new-arrivals/exclusive" },
            { label: "Best Sellers", href: "/new-arrivals/best-sellers" },
        ],
    },
    {
        id: "bags",
        label: "BAGS",
        href: "/bags",
        subCategories: [
            { label: "Tote Bags", href: "/bags/totes" },
            { label: "Shoulder Bags", href: "/bags/shoulder" },
            { label: "Clutches", href: "/bags/clutches" },
            { label: "Wallets", href: "/bags/wallets" },
        ],
    },
    {
        id: "shoes",
        label: "SHOES",
        href: "/shoes",
        subCategories: [
            { label: "Ballet Flats", href: "/shoes/flats" },
            { label: "Heels", href: "/shoes/heels" },
            { label: "Sandals", href: "/shoes/sandals" },
            { label: "Boots", href: "/shoes/boots" },
        ],
    },
    {
        id: "accessories",
        label: "ACCESSORIES",
        href: "/accessories",
        subCategories: [
            { label: "Jewelry", href: "/accessories/jewelry" },
            { label: "Scarves", href: "/accessories/scarves" },
            { label: "Sunglasses", href: "/accessories/sunglasses" },
            { label: "Belts", href: "/accessories/belts" },
        ],
    },
];

// Footer links
const FOOTER_LINKS = [
    { icon: MapPin, label: "Store Locator", href: "/stores" },
    { icon: Headphones, label: "Customer Care", href: "/help" },
    { icon: Globe, label: "Language", href: "#" },
];

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleCategoryClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        setShowSubMenu(true);
    };

    const handleBackToMain = () => {
        setShowSubMenu(false);
        setTimeout(() => setActiveCategory(null), 300);
    };

    const handleClose = () => {
        setShowSubMenu(false);
        setActiveCategory(null);
        onClose();
    };

    const activeCategoryData = CATEGORIES.find((cat) => cat.id === activeCategory);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/30 z-50 lg:hidden"
                        onClick={handleClose}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-y-0 left-0 w-[90%] max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-6 border-b-2 border-gray-100">
                            <Link
                                href="/account"
                                className="text-lg font-bold uppercase tracking-widest text-gris-dark hover:opacity-70 transition-opacity bg-gray-50 px-4 py-2 rounded-sm"
                                onClick={handleClose}
                            >
                                LOGIN / REGISTER
                            </Link>
                            <button
                                onClick={handleClose}
                                className="h-10 w-10 inline-flex items-center justify-center text-gris-dark hover:opacity-70 transition-opacity"
                                aria-label="Close menu"
                                type="button"
                            >
                                <X className="h-7 w-7" strokeWidth={1.2} />
                            </button>
                        </div>

                        {/* Content Area - Scrollable */}
                        <div className="flex-1 overflow-hidden relative">
                            {/* Main Menu */}
                            <motion.div
                                initial={false}
                                animate={{ x: showSubMenu ? "-100%" : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="absolute inset-0 overflow-y-auto"
                            >
                                <nav className="px-6 py-6">
                                    <ul className="space-y-1">
                                        {CATEGORIES.map((category) => (
                                            <li key={category.id}>
                                                <button
                                                    onClick={() => handleCategoryClick(category.id)}
                                                    className="w-full flex items-center justify-between py-4 text-lg uppercase font-medium tracking-wide text-gris-dark hover:opacity-70 transition-opacity group"
                                                    type="button"
                                                >
                                                    <span>{category.label}</span>
                                                    <ChevronRight
                                                        className="h-5 w-5 text-gris-medium group-hover:translate-x-1 transition-transform"
                                                        strokeWidth={1.5}
                                                    />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Additional Links */}
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <Link
                                            href="/collection"
                                            className="block py-4 text-lg uppercase font-medium tracking-wide text-gris-dark hover:opacity-70 transition-opacity"
                                            onClick={handleClose}
                                        >
                                            COLLECTIONS
                                        </Link>
                                        <Link
                                            href="/sale"
                                            className="block py-4 text-lg uppercase font-medium tracking-wide text-red-600 hover:opacity-70 transition-opacity"
                                            onClick={handleClose}
                                        >
                                            SALE
                                        </Link>
                                    </div>
                                </nav>
                            </motion.div>

                            {/* Sub Menu - Slides in from right */}
                            <motion.div
                                initial={false}
                                animate={{ x: showSubMenu ? 0 : "100%" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="absolute inset-0 bg-white overflow-y-auto"
                            >
                                {activeCategoryData && (
                                    <div className="px-6 py-6">
                                        {/* Back Button */}
                                        <button
                                            onClick={handleBackToMain}
                                            className="flex items-center gap-2 mb-6 text-sm uppercase font-bold tracking-wider text-gris-medium hover:text-gris-dark transition-colors"
                                            type="button"
                                        >
                                            <ChevronRight className="h-4 w-4 rotate-180" strokeWidth={2} />
                                            <span>BACK</span>
                                        </button>

                                        {/* Category Title */}
                                        <h2 className="text-2xl uppercase font-bold tracking-wide text-gris-dark mb-6">
                                            {activeCategoryData.label}
                                        </h2>

                                        {/* View All Link */}
                                        <Link
                                            href={activeCategoryData.href}
                                            className="block py-4 text-base uppercase font-medium tracking-wide text-gris-dark hover:opacity-70 transition-opacity border-b border-gray-100"
                                            onClick={handleClose}
                                        >
                                            VIEW ALL {activeCategoryData.label}
                                        </Link>

                                        {/* Sub Categories */}
                                        <ul className="mt-4 space-y-1">
                                            {activeCategoryData.subCategories.map((subCat) => (
                                                <li key={subCat.href}>
                                                    <Link
                                                        href={subCat.href}
                                                        className="block py-4 text-base font-normal text-gris-dark hover:opacity-70 transition-opacity"
                                                        onClick={handleClose}
                                                    >
                                                        {subCat.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
                            <div className="space-y-4">
                                {FOOTER_LINKS.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="flex items-center gap-3 text-sm uppercase font-bold tracking-wider text-gris-dark hover:opacity-70 transition-opacity"
                                            onClick={link.label === "Language" ? undefined : handleClose}
                                        >
                                            <Icon className="h-5 w-5" strokeWidth={1.5} />
                                            <span>{link.label}</span>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Language Selector */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-3">
                                    <button
                                        className="px-4 py-2 text-xs uppercase font-bold tracking-wider bg-white border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors"
                                        type="button"
                                    >
                                        VN
                                    </button>
                                    <button
                                        className="px-4 py-2 text-xs uppercase font-bold tracking-wider bg-white border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors"
                                        type="button"
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
