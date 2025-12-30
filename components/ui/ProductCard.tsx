"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ColorVariant {
  name: string;
  hex: string;
}

export interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: number | null;
  imageMain: string;
  imageHover?: string;
  colors?: ColorVariant[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isBackInStock?: boolean;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  discount,
  imageMain,
  imageHover,
  colors,
  isNew = false,
  isBestSeller = false,
  isTrending = false,
  isBackInStock = false,
}: ProductCardProps) {
  const [activeImage, setActiveImage] = useState(imageMain);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group flex flex-col w-full bg-transparent"
      onMouseEnter={() => {
        setIsHovered(true);
        if (imageHover) setActiveImage(imageHover);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImage(imageMain);
      }}
    >
      {/* Image Container - Aspect 3/4 */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gris-backdrop dark:bg-slate-800">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {isTrending && (
            <span className="text-[10px] font-bold tracking-widest uppercase bg-white dark:bg-slate-900 px-2 py-1 text-gris-dark dark:text-text-main-dark">
              TRENDING NOW
            </span>
          )}
          {isBackInStock && (
            <span className="text-[10px] font-bold tracking-widest uppercase bg-white dark:bg-slate-900 px-2 py-1 text-gris-dark dark:text-text-main-dark">
              BACK IN STOCK
            </span>
          )}
          {isNew && !isTrending && !isBackInStock && (
            <span className="text-[10px] font-bold tracking-widest uppercase bg-white dark:bg-slate-900 px-2 py-1 text-gris-dark dark:text-text-main-dark">
              NEW
            </span>
          )}
        </div>

        <Image
          src={activeImage}
          alt={name}
          fill
          className="object-cover transition-opacity duration-700"
          sizes="(max-width: 640px) 50vw, 25vw"
        />

        {/* Quick Add Overlay - Desktop Only */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 hidden lg:flex items-center justify-center h-12 bg-gris-dark/70 dark:bg-slate-900/80 transition-all duration-300 transform",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}>
          <button
            type="button"
            className="flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info Area */}
      <div className="mt-3 flex flex-col space-y-1">
        <h3 className="text-[11px] md:text-sm uppercase font-medium tracking-widest text-foreground dark:text-text-main-dark truncate leading-none">
          {name}
        </h3>
        
        {/* Price Section */}
        <div className="flex items-baseline gap-2">
          {originalPrice && (
            <span className="text-xs text-gray-400 dark:text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
          <span className="text-sm font-bold text-foreground dark:text-text-main-dark">
            {price}
          </span>
          {discount && discount > 0 && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {colors && colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            {colors.map((color, index) => (
              <button
                key={`${color.name}-${index}`}
                className="w-3 h-3 rounded-full border border-gray-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-gris-dark dark:focus:ring-slate-400 transition-all"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
