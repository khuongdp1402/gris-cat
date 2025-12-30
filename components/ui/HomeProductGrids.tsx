"use client";

import React from "react";
import { ProductCard } from "./ProductCard";

// Mock Data for the grids
const NEW_IN_PRODUCTS = [
    {
        id: "n1",
        name: "Silk Wrap Bodysuit",
        price: "1,150,000đ",
        imageMain: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
        colors: [{ name: "Grey", hex: "#718096" }, { name: "White", hex: "#FFFFFF" }],
        isNew: true,
    },
    {
        id: "n2",
        name: "Tulle Ballet Skirt",
        price: "850,000đ",
        imageMain: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop",
        colors: [{ name: "Charcoal", hex: "#4A5568" }],
        isNew: true,
    },
    {
        id: "n3",
        name: "Minimalist Slingback",
        price: "1,450,000đ",
        imageMain: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
        isNew: true,
    },
    {
        id: "n4",
        name: "Gathered Waist Blazer",
        price: "2,650,000đ",
        imageMain: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
        isNew: true,
    },
];

const MOST_WANTED_PRODUCTS = [
    {
        id: "m1",
        name: "Gris Iconic Tote",
        price: "1,850,000đ",
        imageMain: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "m2",
        name: "Architectural Heel",
        price: "1,550,000đ",
        imageMain: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1562572159-197eb24874e4?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "m3",
        name: "Silk Slip Dress",
        price: "2,100,000đ",
        imageMain: "https://images.unsplash.com/photo-1566479179817-4d9c0c5e3e0e?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "m4",
        name: "Structure Frame Clutch",
        price: "1,250,000đ",
        imageMain: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
        imageHover: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    },
];

export function HomeProductGrids() {
    return (
        <div className="flex flex-col gap-20 py-16 md:py-24 bg-white dark:bg-[#1a202c]">
            {/* Section A: New In */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
                <div className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl font-serif font-medium tracking-tight text-gris-dark dark:text-gray-200">
                        NEW IN
                    </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 sm:gap-x-4 gap-y-8 md:gap-y-12">
                    {NEW_IN_PRODUCTS.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            imageMain={product.imageMain}
                            imageHover={product.imageHover}
                            colors={product.colors}
                            isNew={product.isNew}
                        />
                    ))}
                </div>
            </section>

            {/* Section B: Most Wanted */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
                <div className="mb-8 md:mb-12">
                    <h2 className="text-xl md:text-2xl font-serif font-medium tracking-tight text-gris-dark dark:text-gray-200">
                        MOST WANTED
                    </h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 sm:gap-x-4 gap-y-8 md:gap-y-12">
                    {MOST_WANTED_PRODUCTS.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            imageMain={product.imageMain}
                            imageHover={product.imageHover}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
