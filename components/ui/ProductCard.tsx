"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "./Button";

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  imageAlt?: string;
}

export function ProductCard({
  name,
  price,
  imageUrl,
  imageAlt = name,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-soft-accent">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h3 className="font-sans text-sm font-light text-foreground uppercase tracking-wide">
          {name}
        </h3>
        <p className="font-sans text-base font-normal text-foreground">
          {price}
        </p>
      </div>

      {/* Quick Add Button - Appears on Hover */}
      <div
        className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Button
          variant="default"
          className="w-full bg-brand-accent text-background hover:bg-brand-accent/90"
        >
          <ShoppingBag className="inline-block mr-2 w-4 h-4" />
          Quick Add
        </Button>
      </div>
    </div>
  );
}

