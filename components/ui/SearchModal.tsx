"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Search, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock trending searches
const TRENDING_SEARCHES = [
  "Canvas",
  "Quilted",
  "Shoes",
  "Thong",
  "Bags",
  "Calla",
  "Card holder",
  "Sammie",
  "Midori",
  "Suede",
];

// Mock recent searches (from localStorage/session)
const RECENT_SEARCHES = ["Britton", "Leather Bag", "Heels"];

// Mock search results
const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Classic Leather Tote",
    price: "1,850,000đ",
    image: "/tui-tote.png",
    slug: "classic-leather-tote",
  },
  {
    id: "2",
    name: "Minimalist Shoulder Bag",
    price: "1,450,000đ",
    image: "/vay1.png",
    slug: "minimalist-shoulder-bag",
  },
  {
    id: "3",
    name: "Elegant Dress",
    price: "2,100,000đ",
    image: "/vay2.png",
    slug: "elegant-dress",
  },
  {
    id: "4",
    name: "Fashion Accessories",
    price: "1,550,000đ",
    image: "/vong1.png",
    slug: "fashion-accessories",
  },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(true);
      // Here you would typically call your search API
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowResults(false);
  };

  const handleClearRecent = () => {
    // Clear recent searches from localStorage
    console.log("Clear all recent searches");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-50 bg-background shadow-2xl"
          >
            <div className="max-w-[1440px] mx-auto">
              {/* Search Header */}
              <div className="border-b border-border px-6 py-4">
                <form onSubmit={handleSearch} className="flex items-center gap-4">
                  {/* Search Icon */}
                  <Search className="w-5 h-5 text-foreground-muted flex-shrink-0" />

                  {/* Search Input */}
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for shoes, bags and more..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-foreground-muted focus:outline-none text-base"
                  />

                  {/* Camera Icon */}
                  <button
                    type="button"
                    className="p-2 hover:bg-background-alt rounded-full transition-colors"
                    aria-label="Search by image"
                  >
                    <Camera className="w-5 h-5 text-foreground-muted" />
                  </button>

                  {/* Close Button */}
                  <button
                    type="button"
                    onClick={onClose}
                    className="p-2 hover:bg-background-alt rounded-full transition-colors"
                    aria-label="Close search"
                  >
                    <X className="w-5 h-5 text-foreground-muted" />
                  </button>
                </form>
              </div>

              {/* Search Content */}
              <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
                {!showResults ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Trending Searches */}
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground-muted mb-4">
                        Trending Searches
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {TRENDING_SEARCHES.map((term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="px-4 py-2 text-sm text-foreground border border-border hover:bg-background-alt transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Recent Searches */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground-muted">
                          Recent Searches
                        </h3>
                        <button
                          onClick={handleClearRecent}
                          className="text-xs text-foreground-muted hover:text-foreground transition-colors"
                        >
                          Clear All
                        </button>
                      </div>
                      <div className="space-y-2">
                        {RECENT_SEARCHES.map((term, index) => (
                          <div key={index} className="flex items-center justify-between group">
                            <button
                              onClick={() => setSearchQuery(term)}
                              className="text-sm text-foreground hover:text-foreground-muted transition-colors"
                            >
                              {term}
                            </button>
                            <button
                              className="opacity-0 group-hover:opacity-100 text-foreground-muted hover:text-foreground transition-all"
                              aria-label="Clear"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Search Results */
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                        Search Results for "{searchQuery}"
                      </h3>
                      <button
                        onClick={clearSearch}
                        className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                      >
                        Clear
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {MOCK_PRODUCTS.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className="group"
                        >
                          <div className="relative aspect-[3/4] bg-surface mb-2 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 50vw, 20vw"
                            />
                          </div>
                          <h4 className="text-xs font-medium text-foreground mb-1 truncate">
                            {product.name}
                          </h4>
                          <p className="text-sm font-bold text-foreground">{product.price}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

