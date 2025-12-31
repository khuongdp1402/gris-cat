"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
  hideHeader?: boolean;
}

const CATEGORIES = [
  { id: "handbags", label: "Handbags", count: 24 },
  { id: "shoulder-bags", label: "Shoulder Bags", count: 15 },
  { id: "crossbody", label: "Crossbody Bags", count: 18 },
  { id: "totes", label: "Tote Bags", count: 12 },
  { id: "clutches", label: "Clutches", count: 8 },
  { id: "wallets", label: "Wallets", count: 20 },
];

const COLORS = [
  { id: "black", label: "Black", hex: "#000000" },
  { id: "white", label: "White", hex: "#FFFFFF" },
  { id: "tan", label: "Tan", hex: "#D2B48C" },
  { id: "navy", label: "Navy", hex: "#1e3a8a" },
  { id: "grey", label: "Grey", hex: "#718096" },
  { id: "burgundy", label: "Burgundy", hex: "#800020" },
];

const MATERIALS = [
  { id: "leather", label: "Leather", count: 32 },
  { id: "canvas", label: "Canvas", count: 8 },
  { id: "suede", label: "Suede", count: 12 },
  { id: "nylon", label: "Nylon", count: 6 },
];

export function FilterSidebar({ onFilterChange, hideHeader = false }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  return (
    <div className="space-y-0 pt-0">
      {/* Filter Header */}
      {!hideHeader && (
        <div className="border-b border-border pb-4 mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
            FILTER
          </h2>
        </div>
      )}

      {/* Category Filter */}
      <div className="border-b border-border">
        <button
          onClick={() => toggleSection("category")}
          className="w-full flex items-center justify-between py-4 px-4 text-left bg-surface hover:bg-border transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-foreground">
            Category
          </span>
          {isExpanded("category") ? (
            <ChevronUp className="w-5 h-5 text-foreground-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-foreground-muted" />
          )}
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded("category") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn("space-y-2", isExpanded("category") ? "pb-4" : "")}>
            {CATEGORIES.map((category) => (
              <label
                key={category.id}
                className="flex items-center justify-between cursor-pointer hover:bg-surface py-1 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, category.id]);
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== category.id));
                      }
                    }}
                    className="w-4 h-4 text-foreground border-border rounded focus:ring-2 focus:ring-accent"
                  />
                  <span className="text-sm text-foreground-muted">{category.label}</span>
                </div>
                <span className="text-xs text-foreground-muted">({category.count})</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Color Filter */}
      <div className="border-b border-border">
        <button
          onClick={() => toggleSection("color")}
          className="w-full flex items-center justify-between py-4 px-4 text-left bg-surface hover:bg-border transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-foreground">
            Color
          </span>
          {isExpanded("color") ? (
            <ChevronUp className="w-5 h-5 text-foreground-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-foreground-muted" />
          )}
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded("color") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn("space-y-2", isExpanded("color") ? "pb-4" : "")}>
            {COLORS.map((color) => (
              <label
                key={color.id}
                className="flex items-center gap-3 cursor-pointer hover:bg-surface py-1 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedColors([...selectedColors, color.id]);
                    } else {
                      setSelectedColors(selectedColors.filter(c => c !== color.id));
                    }
                  }}
                  className="sr-only"
                />
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 transition-all",
                    selectedColors.includes(color.id)
                      ? "border-foreground ring-2 ring-offset-2 ring-foreground"
                      : "border-border"
                  )}
                  style={{
                    backgroundColor: color.hex,
                    borderColor: color.hex === "#FFFFFF" ? "var(--border)" : color.hex,
                  }}
                />
                <span className="text-sm text-foreground-muted">{color.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Price Filter */}
      <div className="border-b border-border">
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex items-center justify-between py-4 px-4 text-left bg-surface hover:bg-border transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-foreground">
            Price Range
          </span>
          {isExpanded("price") ? (
            <ChevronUp className="w-5 h-5 text-foreground-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-foreground-muted" />
          )}
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded("price") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn("space-y-3", isExpanded("price") ? "pb-4" : "")}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-foreground-muted mb-1">Min</label>
                <input
                  type="number"
                  placeholder="0"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-xs text-foreground-muted mb-1">Max</label>
                <input
                  type="number"
                  placeholder="5,000,000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <button className="w-full py-2 text-sm font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Material Filter */}
      <div className="border-b border-border">
        <button
          onClick={() => toggleSection("material")}
          className="w-full flex items-center justify-between py-4 px-4 text-left bg-surface hover:bg-border transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-foreground">
            Material
          </span>
          {isExpanded("material") ? (
            <ChevronUp className="w-5 h-5 text-foreground-muted" />
          ) : (
            <ChevronDown className="w-5 h-5 text-foreground-muted" />
          )}
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded("material") ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn("space-y-2", isExpanded("material") ? "pb-4" : "")}>
            {MATERIALS.map((material) => (
              <label
                key={material.id}
                className="flex items-center justify-between cursor-pointer hover:bg-surface py-1 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(material.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedMaterials([...selectedMaterials, material.id]);
                      } else {
                        setSelectedMaterials(selectedMaterials.filter(m => m !== material.id));
                      }
                    }}
                    className="w-4 h-4 text-foreground border-border rounded focus:ring-2 focus:ring-accent"
                  />
                  <span className="text-sm text-foreground-muted">{material.label}</span>
                </div>
                <span className="text-xs text-foreground-muted">({material.count})</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

