"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag, Search } from "lucide-react";
import { MobileMenuDrawer } from "./MobileMenuDrawer";

export function MobileHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 h-[60px] px-4 bg-background border-b border-border">
        <div className="h-full flex items-center justify-between">
          
          {/* Left: Hamburger Menu & Search */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -ml-2 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => {
                const event = new CustomEvent('openSearch');
                window.dispatchEvent(event);
              }}
              className="p-2 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Center: Logo + Brand Name */}
          <Link
            href="/"
            className="flex items-center justify-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="GRIS-CAT"
              width={160}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="font-playfair text-xl font-bold text-foreground-muted">
              GRIS-CAT
            </span>
          </Link>

          {/* Right: Cart */}
          <Link
            href="/cart"
            className="relative p-2 -mr-2 text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
            <span className="absolute top-0 right-0 bg-foreground text-background text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
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

