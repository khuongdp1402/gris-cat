"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileDrawer } from "./MobileDrawer";

// Navigation items (Bottom Row / Shared)
const NAV_ITEMS = [
  { label: "NEW ARRIVALS", href: "/new-arrivals" },
  { label: "BAGS", href: "/bags" },
  { label: "SHOES", href: "/shoes" },
  { label: "COLLECTIONS", href: "/collection" },
  { label: "SALE", href: "/sale" },
];

/**
 * Cat Icon Component (Small version for Header)
 */
const CatIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2C8 2 5 5 5 9c0 2 1 3.5 2 4.5L6 18h12l-1-4.5c1-1 2-2.5 2-4.5 0-4-3-7-7-7z" />
    <circle cx="15" cy="9" r="1" />
    <circle cx="9" cy="9" r="1" />
    <path d="M9 13h6" />
  </svg>
);

export function HeaderBackup() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Sticky Header with Matte Background */}
      <header
        className={cn(
          "sticky top-0 z-40 h-[70px] px-6 transition-colors duration-300 ease-in-out",
          isScrolled
            ? "bg-white dark:bg-[#1a202c] border-b border-gray-100 dark:border-gray-800"
            : "bg-transparent border-none shadow-none"
        )}
      >
        <div className="max-w-[1440px] mx-auto h-full">
          <div className="h-full grid grid-cols-[140px_1fr_auto] items-center gap-4">

            {/* Left Section: Logo Placeholder (Reserved for MotionLogo) */}
            <div className="w-[140px] shrink-0 h-full flex items-center">
              {/* Space reserved for MotionLogo landing */}
            </div>

            {/* Center Section: Navigation Menu */}
            <nav className="hidden lg:flex items-center justify-center gap-6 lg:gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-widest transition-all duration-300",
                    isScrolled 
                      ? "text-foreground dark:text-text-main-dark" 
                      : "text-white dark:text-white",
                    "hover:opacity-70"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Section: Action Icons */}
            <div className="flex items-center gap-4 md:gap-6 justify-end">
              <button 
                className={cn(
                  "flex items-center gap-2 hover:opacity-70 transition-all duration-300",
                  isScrolled 
                    ? "text-foreground dark:text-text-main-dark" 
                    : "text-white dark:text-white"
                )}
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>

              <Link 
                href="/account" 
                className={cn(
                  "hidden md:flex items-center hover:opacity-70 transition-all duration-300",
                  isScrolled 
                    ? "text-foreground dark:text-text-main-dark" 
                    : "text-white dark:text-white"
                )}
              >
                <User className="h-5 w-5" strokeWidth={1.5} />
              </Link>

              <Link
                href="/cart"
                className={cn(
                  "relative hover:opacity-70 transition-all duration-300",
                  isScrolled 
                    ? "text-foreground dark:text-text-main-dark" 
                    : "text-white dark:text-white"
                )}
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                <span 
                  className={cn(
                    "absolute -top-1.5 -right-1.5 text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold transition-all duration-300",
                    isScrolled
                      ? "bg-foreground dark:bg-gris-medium text-white dark:text-background-dark"
                      : "bg-white text-gris-dark"
                  )}
                >
                  0
                </span>
              </Link>

              {/* Hamburger Menu Icon (Mobile Only) */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "lg:hidden h-10 w-10 inline-flex items-center justify-center hover:opacity-70 transition-all duration-300",
                  isScrolled 
                    ? "text-foreground dark:text-text-main-dark" 
                    : "text-white dark:text-white"
                )}
                aria-label="Open menu"
                type="button"
              >
                <Menu className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

