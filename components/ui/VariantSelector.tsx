"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface VariantOption {
  value: string;
  label: string;
}

interface VariantSelectorProps {
  label: string;
  options: VariantOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

export function VariantSelector({
  label,
  options,
  selectedValue,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block font-sans text-sm font-light text-foreground uppercase tracking-wide">
        {label}
      </label>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={cn(
              "px-6 py-2.5 border transition-all duration-300 font-sans text-sm font-light uppercase tracking-wide",
              selectedValue === option.value
                ? "bg-brand-accent text-background border-brand-accent"
                : "bg-transparent text-foreground border-foreground/30 hover:border-brand-accent/50 hover:text-brand-accent"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

