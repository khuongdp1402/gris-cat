"use client";

import React from "react";
import { ProductCard } from "./ProductCard";

// Mock Data for the grids
const NEW_IN_PRODUCTS = [
    {
        id: "n1",
        name: "Silk Wrap Bodysuit",
        price: "1,150,000đ",
        imageMain: "/vay1.png",
        imageHover: "/da876d982174822a7ffd56dd84d37bfb.jpg",
        colors: [{ name: "Grey", hex: "#718096" }, { name: "White", hex: "#FFFFFF" }],
        isNew: true,
    },
    {
        id: "n2",
        name: "Tulle Ballet Skirt",
        price: "850,000đ",
        imageMain: "/vay2.png",
        imageHover: "/ef2f59dd753cc514f448f70c3913c810.jpg",
        colors: [{ name: "Charcoal", hex: "#4A5568" }],
        isNew: true,
    },
    {
        id: "n3",
        name: "Minimalist Slingback",
        price: "1,450,000đ",
        imageMain: "/vong1.png",
        imageHover: "/cb2b9f88de24c5087cb476970406c1f9.jpg",
        isNew: true,
    },
    {
        id: "n4",
        name: "Gathered Waist Blazer",
        price: "2,650,000đ",
        imageMain: "/tui-tote.png",
        imageHover: "/3ba3d90c5617589e971be9adeb758b2d.jpg",
        isNew: true,
    },
];

const MOST_WANTED_PRODUCTS = [
    {
        id: "m1",
        name: "Gris Iconic Tote",
        price: "1,850,000đ",
        imageMain: "/tui-tote.png",
        imageHover: "/3ba3d90c5617589e971be9adeb758b2d.jpg",
    },
    {
        id: "m2",
        name: "Architectural Heel",
        price: "1,550,000đ",
        imageMain: "/vong1.png",
        imageHover: "/cb2b9f88de24c5087cb476970406c1f9.jpg",
    },
    {
        id: "m3",
        name: "Silk Slip Dress",
        price: "2,100,000đ",
        imageMain: "/vay2.png",
        imageHover: "/ef2f59dd753cc514f448f70c3913c810.jpg",
    },
    {
        id: "m4",
        name: "Structure Frame Clutch",
        price: "1,250,000đ",
        imageMain: "/vay1.png",
        imageHover: "/da876d982174822a7ffd56dd84d37bfb.jpg",
    },
];

export function HomeProductGrids() {
    return (
        <>
            {/* Section A: New In - Background Alt (Grey) */}
            <section className="py-12 md:py-16 bg-background-alt">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-xl md:text-2xl font-playfair font-medium tracking-tight text-foreground">
                            NEW IN
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-12">
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
                </div>
            </section>

            {/* Section B: Most Wanted - Background White */}
            <section className="py-12 md:py-16 bg-background">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 w-full">
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-xl md:text-2xl font-playfair font-medium tracking-tight text-foreground">
                            MOST WANTED
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-12">
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
                </div>
            </section>
        </>
    );
}
