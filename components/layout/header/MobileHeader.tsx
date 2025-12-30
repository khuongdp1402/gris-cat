"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 h-[60px] px-4 bg-white dark:bg-[#1a202c] border-b border-gray-100 dark:border-gray-800">
        <div className="h-full flex items-center justify-between">
          
          {/* Left: Hamburger Menu */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 -ml-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Center: Brand Name */}
          <Link
            href="/"
            className="font-playfair text-2xl font-bold text-gray-900 dark:text-white"
          >
            GRIS-CAT
          </Link>

          {/* Right: Cart */}
          <Link
            href="/cart"
            className="relative p-2 -mr-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
            <span className="absolute top-0 right-0 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}

