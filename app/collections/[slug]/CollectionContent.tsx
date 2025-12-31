"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterSidebar } from "@/components/collection/FilterSidebar";
import { MobileFilterDrawer } from "@/components/collection/MobileFilterDrawer";
import { getProductsByCategory, getAllProducts } from "@/lib/products-data";

// Format price helper
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(price);
};

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "name_asc", label: "Name: A to Z" },
];

interface CollectionContentProps {
  collection: {
    name: string;
    description: string;
    breadcrumb: Array<{ name: string; href: string }>;
    productCount: number;
    slug: string;
  };
}

export function CollectionContent({ collection }: CollectionContentProps) {
  // Get products based on collection slug
  const allProducts = collection.slug === "bags" || collection.slug === "clothing"
    ? getProductsByCategory(collection.slug)
    : getAllProducts();

  // Convert to ProductCard format
  const formattedProducts = allProducts.map(p => ({
    id: p.id,
    name: p.fullName,
    price: p.price,
    salePrice: p.salePrice,
    discount: p.discount,
    imageMain: p.images[0]?.url || "",
    imageHover: p.images[1]?.url || p.images[0]?.url || "",
    colors: p.colors.map(c => ({ name: c.name, hex: c.hex })),
    isNew: p.isNew,
    isBestSeller: p.isBestSeller,
    slug: p.slug,
  }));

  const [products, setProducts] = useState(formattedProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isDesktopFilterOpen, setIsDesktopFilterOpen] = useState(false);
  const [isToolbarSticky, setIsToolbarSticky] = useState(false);
  const [gridCols, setGridCols] = useState(4); // View by: 3, 4, or 6 columns
  
  const displayCount = products.length;
  const totalCount = collection.productCount;
  const hasMore = false; // For demo, no more products
  
  // Get grid class based on column count
  const getGridClass = () => {
    switch (gridCols) {
      case 3:
        return "grid-cols-2 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
      case 6:
        return "grid-cols-2 md:grid-cols-4 lg:grid-cols-6";
      default:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In real app: append new products
    setIsLoading(false);
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  // Sticky toolbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show sticky toolbar after scrolling past banner section (approximately 200px)
      setIsToolbarSticky(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <Breadcrumbs items={collection.breadcrumb} />

      {/* Banner Section */}
      <div className="border-b border-border bg-background">
        <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {collection.name}
          </h1>
          <p className="text-foreground-muted text-sm md:text-base max-w-3xl leading-relaxed mb-6">
            {collection.description}
          </p>
          
          {/* Toolbar (Non-sticky in banner - Hidden when sticky toolbar is visible) */}
          <div className={`flex items-center justify-between pt-4 border-t border-border transition-opacity ${isToolbarSticky ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            {/* Left: Filter Button | Sort By */}
            <div className="flex items-center gap-4">
              {/* Filter Button */}
              <button
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setIsMobileFilterOpen(true);
                  } else {
                    setIsDesktopFilterOpen(!isDesktopFilterOpen);
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider text-foreground-muted border border-border hover:bg-surface transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
                {isDesktopFilterOpen && (
                  <span className="hidden lg:inline text-xs">({activeFilters.length})</span>
                )}
              </button>

              {/* Separator */}
              <span className="hidden lg:block text-border">|</span>

              {/* Sort By (Desktop) - No title */}
              <div className="hidden lg:flex items-center">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-medium text-foreground bg-background border-0 focus:outline-none focus:ring-0 cursor-pointer"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Center: Item Count */}
            <div className="text-sm text-foreground-muted">
              Showing <span className="font-medium text-foreground">1</span> - <span className="font-medium text-foreground">{displayCount}</span> of{" "}
              <span className="font-medium text-foreground">{totalCount}</span> items
            </div>

            {/* Right: View By */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-sm text-foreground-muted">VIEW BY</span>
              <div className="flex items-center gap-1">
                {[3, 4, 6].map((cols) => (
                  <button
                    key={cols}
                    onClick={() => setGridCols(cols)}
                    className={`px-3 py-1 text-sm font-medium transition-colors ${
                      gridCols === cols
                        ? "bg-foreground text-background"
                        : "text-foreground-muted hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    {cols}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Toolbar (Shows on scroll - At top of page) */}
      <AnimatePresence>
        {isToolbarSticky && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sticky top-[70px] z-30 bg-background border-b border-border shadow-elegant"
          >
            <div className="max-w-[1440px] mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Left: Filter Button | Sort By */}
                <div className="flex items-center gap-4">
                  {/* Filter Button */}
                  <button
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        setIsMobileFilterOpen(true);
                      } else {
                        setIsDesktopFilterOpen(!isDesktopFilterOpen);
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider text-foreground-muted border border-border hover:bg-surface transition-colors"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="hidden sm:inline">Filter</span>
                    {isDesktopFilterOpen && (
                      <span className="hidden lg:inline text-xs">({activeFilters.length})</span>
                    )}
                  </button>

                  {/* Separator */}
                  <span className="hidden lg:block text-border">|</span>

                  {/* Sort By (Desktop) - No title */}
                  <div className="hidden lg:flex items-center">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-sm font-medium text-foreground bg-background border-0 focus:outline-none focus:ring-0 cursor-pointer"
                    >
                      {SORT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Center: Item Count */}
                <div className="text-sm text-foreground-muted">
                  Showing <span className="font-medium text-foreground">1</span> - <span className="font-medium text-foreground">{displayCount}</span> of{" "}
                  <span className="font-medium text-foreground">{totalCount}</span> items
                </div>

                {/* Right: View By */}
                <div className="hidden lg:flex items-center gap-2">
                  <span className="text-sm text-foreground-muted">VIEW BY</span>
                  <div className="flex items-center gap-1">
                    {[3, 4, 6].map((cols) => (
                      <button
                        key={cols}
                        onClick={() => setGridCols(cols)}
                        className={`px-3 py-1 text-sm font-medium transition-colors ${
                          gridCols === cols
                            ? "bg-foreground text-background"
                            : "text-foreground-muted hover:text-foreground hover:bg-surface"
                        }`}
                      >
                        {cols}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area - Filter (Left) + Products (Right) */}
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-foreground-muted">Active Filters:</span>
            {activeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleRemoveFilter(filter)}
                className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-surface text-foreground-muted rounded-full hover:bg-border transition-colors"
              >
                {filter}
                <X className="w-3 h-3" />
              </button>
            ))}
            <button
              onClick={() => setActiveFilters([])}
              className="text-sm text-foreground-muted underline hover:text-foreground"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Grid Layout: Filter (LEFT) + Products (RIGHT) */}
        <div className="relative flex gap-8 lg:gap-12">
          {/* Filter Sidebar - LEFT - Desktop Only (Slide In/Out) */}
          <AnimatePresence initial={false} mode="wait">
            {isDesktopFilterOpen && (
              <motion.div
                key="filter-sidebar"
                initial={{ width: 0, opacity: 0, x: -20 }}
                animate={{ 
                  width: "280px", 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    width: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.3, ease: "easeOut" },
                    x: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                  }
                }}
                exit={{ 
                  width: 0, 
                  opacity: 0, 
                  x: -20,
                  transition: {
                    width: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.2, ease: "easeIn" },
                    x: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                  }
                }}
                className="hidden lg:block flex-shrink-0 overflow-hidden"
              >
                <motion.div 
                  className={`sticky w-[280px] ${isToolbarSticky ? 'top-[140px]' : 'top-4'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <FilterSidebar
                    onFilterChange={(filters) => {
                      console.log("Filters:", filters);
                    }}
                    hideHeader={true}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid - RIGHT (Flexible Width) */}
          <div className="flex-1 min-w-0">
            <div className={`grid ${getGridClass()} gap-x-4 gap-y-10`}>
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <ProductCard
                    name={product.name}
                    price={formatPrice(product.salePrice || product.price)}
                    originalPrice={product.salePrice ? formatPrice(product.price) : undefined}
                    discount={product.discount}
                    imageMain={product.imageMain}
                    imageHover={product.imageHover}
                    colors={product.colors}
                    isNew={product.isNew}
                    isBestSeller={product.isBestSeller}
                    isTrending={product.isBestSeller}
                  />
                </Link>
              ))}
            </div>

            {/* Load More Button - Always visible */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="px-12 py-3 text-sm font-bold uppercase tracking-widest text-foreground bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Loading...
                  </span>
                ) : (
                  "LOAD MORE"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        onFilterChange={(filters) => {
          console.log("Mobile Filters:", filters);
        }}
      />
    </div>
  );
}

