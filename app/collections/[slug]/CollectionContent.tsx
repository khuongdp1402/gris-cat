"use client";

import { useState } from "react";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";
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
  
  const displayCount = products.length;
  const totalCount = collection.productCount;
  const hasMore = false; // For demo, no more products

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

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a202c]">
      {/* Breadcrumbs */}
      <Breadcrumbs items={collection.breadcrumb} />

      {/* Banner Section */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a202c]">
        <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {collection.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed mb-6">
            {collection.description}
          </p>
          
          {/* Toolbar */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
            {/* Left: Item Count */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-medium text-gray-900 dark:text-gray-100">1</span> - <span className="font-medium text-gray-900 dark:text-gray-100">{displayCount}</span> of{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">{totalCount}</span> items
            </div>

            {/* Right: Sort By, View By & Mobile Filter */}
            <div className="flex items-center gap-4">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort By (Desktop) */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                  SORT BY
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-0 focus:outline-none focus:ring-0 cursor-pointer"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View By Grid Columns (Desktop) */}
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">VIEW BY</span>
                <div className="flex items-center gap-1">
                  {[3, 4, 6].map((cols) => (
                    <button
                      key={cols}
                      onClick={() => {
                        // Handle grid columns change
                        console.log(`View by ${cols} columns`);
                      }}
                      className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      {cols}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active Filters:</span>
            {activeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleRemoveFilter(filter)}
                className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {filter}
                <X className="w-3 h-3" />
              </button>
            ))}
            <button
              onClick={() => setActiveFilters([])}
              className="text-sm text-gray-600 dark:text-gray-400 underline hover:text-gray-900 dark:hover:text-gray-200"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Grid Layout: Filter (LEFT) + Products (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Filter Sidebar - LEFT (3 columns) - Desktop Only */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <FilterSidebar
                onFilterChange={(filters) => {
                  console.log("Filters:", filters);
                }}
              />
            </div>
          </div>

          {/* Product Grid - RIGHT (9 columns) */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
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

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="px-12 py-3 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            )}
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

