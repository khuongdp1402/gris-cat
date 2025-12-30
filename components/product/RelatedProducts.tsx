"use client";

import { ProductCard } from "@/components/ui/ProductCard";

// Mock related products
const YOU_MAY_ALSO_LIKE = [
  {
    id: "2",
    name: "Minimalist Shoulder Bag",
    price: "1,450,000đ",
    imageMain: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Classic Leather Clutch",
    price: "1,250,000đ",
    imageMain: "https://images.unsplash.com/photo-1564422167509-4f15e80f4f05?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
    colors: [{ name: "Navy", hex: "#1e3a8a" }],
  },
  {
    id: "4",
    name: "Crossbody Chain Bag",
    price: "1,650,000đ",
    imageMain: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1564422167509-4f15e80f4f05?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "5",
    name: "Oversized Shopper Tote",
    price: "1,950,000đ",
    imageMain: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
  },
];

const STYLE_IT_WITH = [
  {
    id: "6",
    name: "Silk Scarf",
    price: "850,000đ",
    imageMain: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Leather Belt",
    price: "650,000đ",
    imageMain: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Minimalist Watch",
    price: "2,250,000đ",
    imageMain: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    name: "Leather Wallet",
    price: "950,000đ",
    imageMain: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
  },
];

interface RelatedProductsProps {
  currentProductId: string;
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  return (
    <div className="bg-white dark:bg-[#1a202c] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* YOU MAY ALSO LIKE */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-center text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-gray-100 mb-8 md:mb-12">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {YOU_MAY_ALSO_LIKE.map((product) => (
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

        {/* STYLE IT WITH */}
        <section>
          <h2 className="text-center text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-gray-100 mb-8 md:mb-12">
            STYLE IT WITH
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {STYLE_IT_WITH.map((product) => (
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
      </div>
    </div>
  );
}

