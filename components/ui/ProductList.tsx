"use client";

import { ProductCard, type ProductCardProps } from "./ProductCard";

interface ProductListProps {
    products: (Omit<ProductCardProps, ""> & { id: string | number })[];
    title?: string;
}

export function ProductList({ products, title }: ProductListProps) {
    return (
        <div className="w-full">
            {title && (
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-gris-dark text-center mb-10 md:mb-16">
                    {title}
                </h2>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 sm:gap-x-4 gap-y-6 md:gap-y-10">
                {products.map((product) => (
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
    );
}
