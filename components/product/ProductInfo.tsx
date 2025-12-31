"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { SizeGuideModal } from "./SizeGuideModal";

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    variant: string;
    fullName: string;
    description: string;
    price: number;
    salePrice: number | null;
    discount: number | null;
    isNew: boolean;
    isBestSeller: boolean;
    inStock: boolean;
    colors: Array<{ id: string; name: string; hex: string; isSelected?: boolean }>;
    sizes: Array<{ id: string; label: string; isAvailable: boolean; isSelected?: boolean }>;
    details: {
      material: string;
      dimensions: string;
      care: string;
    };
    editorNote: string;
  };
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors.find(c => c.isSelected)?.id || product.colors[0]?.id
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.find(s => s.isSelected)?.id || product.sizes.find(s => s.isAvailable)?.id
  );
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const displayPrice = product.salePrice || product.price;
  const oldPrice = product.salePrice ? product.price : null;

  return (
    <div className="space-y-6">
      {/* Badges */}
      <div className="flex items-center gap-2">
        {product.isNew && (
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            New In
          </span>
        )}
        {product.isBestSeller && (
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            Best Seller
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
        {product.fullName}
      </h1>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        {oldPrice && (
          <>
            <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
              {formatPrice(oldPrice)}
            </span>
            {product.discount && (
              <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                -{product.discount}% OFF
              </span>
            )}
          </>
        )}
        <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          {formatPrice(displayPrice)}
        </span>
      </div>

      {/* Color Selector - Compact */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Color: {product.colors.find(c => c.id === selectedColor)?.name}
          </label>
        </div>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={cn(
                "w-8 h-8 rounded-full border-2 transition-all",
                selectedColor === color.id
                  ? "ring-2 ring-offset-1 ring-gray-900 dark:ring-gray-100 border-gray-900 dark:border-gray-100"
                  : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
              )}
              style={{
                backgroundColor: color.hex,
                borderColor: color.hex === "#FFFFFF" ? "#e5e7eb" : color.hex,
              }}
              title={color.name}
              aria-label={`Select color ${color.name}`}
            />
          ))}
        </div>
      </div>

      {/* Size Selector - Compact */}
      {product.sizes.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Size
            </label>
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="text-xs text-gray-600 dark:text-gray-400 underline hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              Size Guide
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => size.isAvailable && setSelectedSize(size.id)}
                disabled={!size.isAvailable}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium border-2 transition-all min-w-[60px]",
                  selectedSize === size.id
                    ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                    : size.isAvailable
                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-100"
                    : "bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 border-gray-200 dark:border-gray-700 line-through cursor-not-allowed"
                )}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <button
          disabled={!product.inStock}
          className={cn(
            "w-full h-[50px] text-sm font-bold uppercase tracking-widest transition-colors",
            product.inStock
              ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-200"
              : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
          )}
        >
          {product.inStock ? "ADD TO BAG" : "OUT OF STOCK"}
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "flex-1 h-[50px] flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider border-2 transition-colors",
              isWishlisted
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-100"
            )}
          >
            <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
            {isWishlisted ? "Saved" : "Add to Wishlist"}
          </button>

          <button className="flex-1 h-[50px] flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:border-gray-900 dark:hover:border-gray-100 transition-colors">
            <MapPin className="w-4 h-4" />
            Find in Store
          </button>
        </div>
      </div>

      {/* Accordions */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-6 space-y-0">
        {/* Editor's Note */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => toggleSection("editor")}
            className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Editor's Note
            </span>
            {expandedSections.includes("editor") ? (
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          {expandedSections.includes("editor") && (
            <div className="pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {product.editorNote}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => toggleSection("details")}
            className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Product Details
            </span>
            {expandedSections.includes("details") ? (
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          {expandedSections.includes("details") && (
            <div className="pb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Material:</span>{" "}
                {product.details.material}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Dimensions:</span>{" "}
                {product.details.dimensions}
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Care:</span>{" "}
                {product.details.care}
              </div>
            </div>
          )}
        </div>

        {/* Shipping & Returns */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => toggleSection("shipping")}
            className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
              Shipping & Returns
            </span>
            {expandedSections.includes("shipping") ? (
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          {expandedSections.includes("shipping") && (
            <div className="pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
              <p>
                <strong className="text-gray-900 dark:text-gray-100">Free Standard Shipping</strong> on orders over 1,000,000đ. Delivery within 3-5 business days.
              </p>
              <p>
                <strong className="text-gray-900 dark:text-gray-100">Hassle-free Returns</strong> within 03 days of delivery. Items must be unworn and in original packaging.
              </p>
              <Link
                href="/shipping"
                className="underline hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Learn more about shipping & returns
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
