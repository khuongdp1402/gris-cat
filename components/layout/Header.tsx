"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple Cat Silhouette SVG Component
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
    <circle cx="9" cy="9" r="1" />
    <circle cx="15" cy="9" r="1" />
    <path d="M9 13h6" />
  </svg>
);

const navItems = [
  { label: "COLLECTION", href: "/collection" },
  { label: "BALLETCORE", href: "/balletcore" },
  { label: "DRESSES", href: "/dresses" },
  { label: "ACCESSORIES", href: "/accessories" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Set initial state
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-14" : "h-20"
          )}
        >
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground hover:text-brand-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop NEW ARRIVALS Link */}
            <Link
              href="/new-arrivals"
              className="hidden md:block font-sans text-sm font-light text-foreground hover:text-brand-accent transition-colors uppercase tracking-wider"
            >
              NEW ARRIVALS
            </Link>
          </div>

          {/* Center Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 group transition-all duration-300",
              isScrolled ? "scale-90" : "scale-100"
            )}
          >
            <h1
              className={cn(
                "font-serif font-bold text-brand-accent uppercase tracking-tight transition-all duration-300",
                isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              )}
            >
              GRIS-CAT
            </h1>
            <CatIcon
              className={cn(
                "text-brand-accent group-hover:opacity-80 transition-opacity duration-300",
                isScrolled ? "w-4 h-4 md:w-5 md:h-5" : "w-5 h-5 md:w-6 md:h-6"
              )}
            />
          </Link>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              className="text-foreground hover:text-brand-accent transition-colors"
              aria-label="Search"
            >
              <Search
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "w-5 h-5" : "w-5 h-5 md:w-6 md:h-6"
                )}
              />
            </button>
            <button
              className="text-foreground hover:text-brand-accent transition-colors"
              aria-label="Account"
            >
              <User
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "w-5 h-5" : "w-5 h-5 md:w-6 md:h-6"
                )}
              />
            </button>
            <button
              className="text-foreground hover:text-brand-accent transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "w-5 h-5" : "w-5 h-5 md:w-6 md:h-6"
                )}
              />
            </button>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav
          className={cn(
            "hidden md:flex items-center justify-center gap-8 border-t border-foreground/5 transition-all duration-300",
            isScrolled ? "py-2" : "py-4"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-light text-foreground hover:text-brand-accent transition-colors uppercase tracking-wider relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-foreground/5">
            <div className="flex flex-col gap-4">
              <Link
                href="/new-arrivals"
                className="font-sans text-sm font-light text-foreground hover:text-brand-accent transition-colors uppercase tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                NEW ARRIVALS
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm font-light text-foreground hover:text-brand-accent transition-colors uppercase tracking-wider py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
