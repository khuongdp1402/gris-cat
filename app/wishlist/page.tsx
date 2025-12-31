"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag, Heart } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price) + " ₫";
};

// Mock wishlist data
const INITIAL_WISHLIST = [
  {
    id: "1",
    name: "Silk Wrap Bodysuit",
    price: 1150000,
    imageMain: "/vay1.png",
    inStock: true,
    colors: ["Grey", "White"],
  },
  {
    id: "2",
    name: "Tulle Ballet Skirt",
    price: 850000,
    imageMain: "/vay2.png",
    inStock: true,
    colors: ["Charcoal"],
  },
  {
    id: "3",
    name: "Minimalist Slingback",
    price: 1450000,
    imageMain: "/vong1.png",
    inStock: false,
    colors: ["Black"],
  },
  {
    id: "4",
    name: "Gathered Waist Blazer",
    price: 2650000,
    imageMain: "/tui-tote.png",
    inStock: true,
    colors: ["Navy"],
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(INITIAL_WISHLIST);

  const removeItem = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Wishlist", href: "/wishlist" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">
            MY WISHLIST
          </h1>
          <div className="flex items-center gap-2 text-foreground-muted">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">{wishlistItems.length} items</span>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <p className="text-foreground-muted mb-6">Your wishlist is empty</p>
            <Link
              href="/collections/new-arrivals"
              className="inline-block px-8 py-3 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group relative">
                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Remove from wishlist"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>

                <Link href={`/products/${item.id}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[3/4] bg-surface mb-3 overflow-hidden">
                    <Image
                      src={item.imageMain}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    
                    {/* Stock Badge */}
                    {!item.inStock && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-foreground text-background text-xs font-bold uppercase">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-foreground mb-2">
                      {formatPrice(item.price)}
                    </p>
                    
                    {/* Colors */}
                    <p className="text-xs text-foreground-muted mb-3">
                      {item.colors.length} color{item.colors.length > 1 ? "s" : ""} available
                    </p>

                    {/* Add to Bag Button */}
                    <button
                      disabled={!item.inStock}
                      className="w-full py-2 bg-foreground text-background text-xs font-bold uppercase tracking-wider hover:bg-foreground-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {item.inStock ? "Add to Bag" : "Notify Me"}
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">Need Help?</h2>
          <p className="text-sm text-foreground-muted mb-4">
            Our customer service team is here to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-bold text-foreground hover:text-foreground-muted underline"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

