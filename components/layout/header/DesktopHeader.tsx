"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User, ShoppingBag, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SettingsPopover } from "./SettingsPopover";

// Main navigation categories - Links to collection pages
const CATEGORIES = [
  { label: "NEW ARRIVALS", href: "/collections/new-arrivals" },
  { label: "CLOTHING", href: "/collections/clothing" },
  { label: "DRESSES", href: "/collections/dresses" },
  { label: "BAGS", href: "/collections/bags" },
  { label: "ACCESSORIES", href: "/collections/accessories" },
];

// Utility links
const UTILITY_LINKS = [
  { label: "ABOUT THE BRAND", href: "/about" },
  { label: "OUR STORY", href: "/story" },
];

export function DesktopHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Increased threshold to 150px and added hysteresis
          const scrollY = window.scrollY;
          
          // Add hysteresis: different thresholds for showing/hiding
          if (scrollY > 150 && !isScrolled) {
            setIsScrolled(true);
          } else if (scrollY < 100 && isScrolled) {
            setIsScrolled(false);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header className="hidden lg:block sticky top-0 z-40 bg-background border-b border-border">
      {/* Row 1: Main Top Bar */}
      <div className="h-[70px] px-6 border-b border-border">
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="h-full grid grid-cols-3 items-center gap-8">
            
            {/* Left: Utility Links */}
            <div className="flex items-center gap-6">
              {UTILITY_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-foreground-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center: Logo + Brand Name */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/logo.png"
                  alt="GRIS-CAT"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain"
                  priority
                />
                <span className="font-playfair text-3xl font-bold text-foreground-muted">
                  GRIS-CAT
                </span>
              </Link>
            </div>

                {/* Right: Icons & Settings */}
                <div className="flex items-center gap-4 justify-end">
                  <button
                    onClick={() => {
                      const event = new CustomEvent('openSearch');
                      window.dispatchEvent(event);
                    }}
                    className="p-1.5 text-foreground-muted hover:text-foreground transition-colors"
                    aria-label="Search"
                  >
                    <Search className="w-[22px] h-[22px]" strokeWidth={1.5} />
                  </button>

                  <Link
                    href="/wishlist"
                    className="p-1.5 text-foreground-muted hover:text-foreground transition-colors"
                    aria-label="Wishlist"
                  >
                    <Heart className="w-[22px] h-[22px]" strokeWidth={1.5} />
                  </Link>

                  <Link
                    href="/account"
                    className="p-1.5 text-foreground-muted hover:text-foreground transition-colors"
                    aria-label="Account"
                  >
                    <User className="w-[22px] h-[22px]" strokeWidth={1.5} />
                  </Link>

                  <Link
                    href="/cart"
                    className="relative p-1.5 text-foreground-muted hover:text-foreground transition-colors"
                    aria-label="Shopping Cart"
                  >
                    <ShoppingBag className="w-[22px] h-[22px]" strokeWidth={1.5} />
                    <span className="absolute top-0 right-0 bg-foreground text-background text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      0
                    </span>
                  </Link>

                  {/* Settings Popover */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSettings(!showSettings)}
                      className="p-1.5 text-foreground-muted hover:text-foreground transition-colors"
                      aria-label="Settings"
                    >
                      <Globe className="w-[22px] h-[22px]" strokeWidth={1.5} />
                    </button>

                    <SettingsPopover
                      isOpen={showSettings}
                      onClose={() => setShowSettings(false)}
                    />
                  </div>
                </div>
          </div>
        </div>
      </div>

      {/* Row 2: Category Navigation (Only on Homepage, Collapses on scroll) */}
      {isHomePage && (
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: 56, opacity: 1 }}
              animate={{ height: 56, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <nav className="h-14 px-6">
                <div className="max-w-[1440px] mx-auto h-full">
                  <div className="h-full flex items-center justify-center gap-8">
                    {CATEGORIES.map((category) => (
                      <Link
                        key={category.label}
                        href={category.href}
                        className="text-xs font-bold uppercase tracking-widest text-foreground-muted hover:text-foreground transition-colors"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}

