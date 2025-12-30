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
    <div className="space-y-0">
      {/* Filter Header */}
      {!hideHeader && (
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            FILTER
          </h2>
        </div>
      )}

      {/* Category Filter */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => toggleSection("category")}
          className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Category
          </span>
          {isExpanded("category") ? (
            <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 py-1 transition-colors"
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
                    className="w-4 h-4 text-gray-900 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-gray-400"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{category.label}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500">({category.count})</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Color Filter */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => toggleSection("color")}
          className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Color
          </span>
          {isExpanded("color") ? (
            <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 py-1 transition-colors"
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
                      ? "border-gray-900 dark:border-gray-100 ring-2 ring-offset-2 ring-gray-900 dark:ring-gray-100"
                      : "border-gray-300 dark:border-gray-600"
                  )}
                  style={{
                    backgroundColor: color.hex,
                    borderColor: color.hex === "#FFFFFF" ? "#e5e7eb" : color.hex,
                  }}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{color.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Price Filter */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Price Range
          </span>
          {isExpanded("price") ? (
            <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Min</label>
                <input
                  type="number"
                  placeholder="0"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">Max</label>
                <input
                  type="number"
                  placeholder="5,000,000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
            <button className="w-full py-2 text-sm font-bold uppercase tracking-wider bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Material Filter */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => toggleSection("material")}
          className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Material
          </span>
          {isExpanded("material") ? (
            <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 py-1 transition-colors"
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
                    className="w-4 h-4 text-gray-900 border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-gray-400"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{material.label}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500">({material.count})</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

