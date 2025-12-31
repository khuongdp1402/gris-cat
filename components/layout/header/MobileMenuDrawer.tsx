"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Search, Heart, User, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Menu structure with sub-menus - Links to collection pages
const MENU_ITEMS = [
  {
    id: "new-arrivals",
    label: "NEW ARRIVALS",
    href: "/collections/new-arrivals",
  },
  {
    id: "clothing",
    label: "CLOTHING",
    href: "/collections/clothing",
    subMenu: [
      { label: "Tops", href: "/collections/clothing/tops" },
      { label: "Bottoms", href: "/collections/clothing/bottoms" },
      { label: "Dresses", href: "/collections/dresses" },
      { label: "Outerwear", href: "/collections/clothing/outerwear" },
    ],
  },
  {
    id: "dresses",
    label: "DRESSES",
    href: "/collections/dresses",
  },
  {
    id: "bags",
    label: "BAGS",
    href: "/collections/bags",
    subMenu: [
      { label: "Tote Bags", href: "/collections/bags/totes" },
      { label: "Shoulder Bags", href: "/collections/bags/shoulder-bags" },
      { label: "Clutches", href: "/collections/bags/clutches" },
      { label: "Backpacks", href: "/collections/bags/backpacks" },
    ],
  },
  {
    id: "accessories",
    label: "ACCESSORIES",
    href: "/collections/accessories",
    subMenu: [
      { label: "Jewelry", href: "/collections/accessories/jewelry" },
      { label: "Belts", href: "/collections/accessories/belts" },
      { label: "Scarves", href: "/collections/accessories/scarves" },
      { label: "Hats", href: "/collections/accessories/hats" },
    ],
  },
];

const UTILITY_LINKS = [
  { label: "About The Brand", href: "/about" },
  { label: "Our Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];

// Mobile Settings Component
function MobileSettings() {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("EN");

  return (
    <div className="space-y-3 pt-4 border-t border-border">
      {/* Language */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
          Language
        </p>
        <div className="flex gap-2">
          <button 
            onClick={() => setLanguage("EN")}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
              language === "EN"
                ? "bg-foreground text-background"
                : "bg-surface text-foreground-muted hover:bg-border"
            }`}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage("VN")}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
              language === "VN"
                ? "bg-foreground text-background"
                : "bg-surface text-foreground-muted hover:bg-border"
            }`}
          >
            VN
          </button>
        </div>
      </div>

      {/* Theme */}
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
          Theme
        </p>
        <div className="flex gap-2">
          <button 
            onClick={() => theme === "dark" && toggleTheme()}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors flex items-center justify-center gap-2 ${
              theme === "light"
                ? "bg-foreground text-background"
                : "bg-surface text-foreground-muted hover:bg-border"
            }`}
          >
            <Sun className="w-4 h-4" />
            Light
          </button>
          <button 
            onClick={() => theme === "light" && toggleTheme()}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors flex items-center justify-center gap-2 ${
              theme === "dark"
                ? "bg-foreground text-background"
                : "bg-surface text-foreground-muted hover:bg-border"
            }`}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
        </div>
      </div>
    </div>
  );
}

export function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleBackToMain = () => {
    setActiveSubMenu(null);
  };

  const handleOpenSubMenu = (menuId: string) => {
    setActiveSubMenu(menuId);
  };

  const currentSubMenu = MENU_ITEMS.find((item) => item.id === activeSubMenu);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 bottom-0 w-[85vw] max-w-sm bg-background z-50 flex flex-col shadow-2xl"
          >
            {/* Drawer Header */}
            <div className="h-[60px] px-4 flex items-center justify-between border-b border-border">
              
              {/* Left: Back Button (if in sub-menu) */}
              <button
                onClick={handleBackToMain}
                className={`p-2 -ml-2 text-foreground-muted hover:text-foreground transition-all ${
                  activeSubMenu ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                aria-label="Back"
              >
                <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
              </button>

              {/* Center: Title */}
              <h2 className="font-playfair text-xl font-bold text-foreground">
                {activeSubMenu ? currentSubMenu?.label : "Menu"}
              </h2>

              {/* Right: Close Button */}
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Drawer Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {!activeSubMenu ? (
                  // Level 0: Main Menu
                  <motion.div
                    key="main-menu"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="py-4"
                  >
                    {/* Main Categories */}
                    <nav className="border-b border-border pb-4 mb-4">
                      {MENU_ITEMS.map((item) => (
                        <div key={item.id}>
                          {item.subMenu ? (
                            <button
                              onClick={() => handleOpenSubMenu(item.id)}
                              className="w-full px-6 py-3 flex items-center justify-between text-left text-sm font-bold uppercase tracking-wider text-foreground-muted hover:text-foreground hover:bg-surface transition-colors"
                            >
                              {item.label}
                              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={onClose}
                              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground-muted hover:text-foreground hover:bg-surface transition-colors"
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>

                    {/* Quick Actions */}
                    <div className="px-6 py-4 border-b border-border">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-3">
                        Quick Actions
                      </p>
                      <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-surface rounded-lg hover:bg-border transition-colors">
                          <Search className="w-5 h-5 text-foreground-muted" strokeWidth={1.5} />
                          <span className="text-sm font-medium text-foreground-muted">Search</span>
                        </button>
                        <Link
                          href="/wishlist"
                          onClick={onClose}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-surface rounded-lg hover:bg-border transition-colors"
                        >
                          <Heart className="w-5 h-5 text-foreground-muted" strokeWidth={1.5} />
                        </Link>
                        <Link
                          href="/account"
                          onClick={onClose}
                          className="flex items-center justify-center gap-2 px-4 py-3 bg-surface rounded-lg hover:bg-border transition-colors"
                        >
                          <User className="w-5 h-5 text-foreground-muted" strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Level 1: Sub Menu
                  <motion.div
                    key="sub-menu"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="py-4"
                  >
                    <nav>
                      {currentSubMenu?.subMenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={onClose}
                          className="block px-6 py-3 text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-surface transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-border p-6 space-y-4">
              {/* Utility Links */}
              <div>
                {UTILITY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Settings */}
              <MobileSettings />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

