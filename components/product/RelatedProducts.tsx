"use client";

import { ProductCard, type ColorVariant } from "@/components/ui/ProductCard";

type RelatedCardItem = {
  id: string;
  name: string;
  price: string;
  imageMain: string;
  imageHover: string;
  colors?: ColorVariant[];
  isNew?: boolean;
};

// Mock related products
const YOU_MAY_ALSO_LIKE: RelatedCardItem[] = [
  {
    id: "2",
    name: "Minimalist Shoulder Bag",
    price: "1,450,000đ",
    imageMain: "/vay1.png",
    imageHover: "/da876d982174822a7ffd56dd84d37bfb.jpg",
  },
  {
    id: "3",
    name: "Classic Leather Clutch",
    price: "1,250,000đ",
    imageMain: "/tui-tote.png",
    imageHover: "/3ba3d90c5617589e971be9adeb758b2d.jpg",
    colors: [{ name: "Navy", hex: "#1e3a8a" }],
  },
  {
    id: "4",
    name: "Crossbody Chain Bag",
    price: "1,650,000đ",
    imageMain: "/vong1.png",
    imageHover: "/cb2b9f88de24c5087cb476970406c1f9.jpg",
    isNew: true,
  },
  {
    id: "5",
    name: "Oversized Shopper Tote",
    price: "1,950,000đ",
    imageMain: "/vay2.png",
    imageHover: "/ef2f59dd753cc514f448f70c3913c810.jpg",
  },
];

const STYLE_IT_WITH: RelatedCardItem[] = [
  {
    id: "6",
    name: "Silk Scarf",
    price: "850,000đ",
    imageMain: "/vay1.png",
    imageHover: "/da876d982174822a7ffd56dd84d37bfb.jpg",
  },
  {
    id: "7",
    name: "Leather Belt",
    price: "650,000đ",
    imageMain: "/vong1.png",
    imageHover: "/cb2b9f88de24c5087cb476970406c1f9.jpg",
  },
  {
    id: "8",
    name: "Minimalist Watch",
    price: "2,250,000đ",
    imageMain: "/tui-tote.png",
    imageHover: "/3ba3d90c5617589e971be9adeb758b2d.jpg",
  },
  {
    id: "9",
    name: "Leather Wallet",
    price: "950,000đ",
    imageMain: "/vay2.png",
    imageHover: "/ef2f59dd753cc514f448f70c3913c810.jpg",
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

