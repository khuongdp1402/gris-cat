import type { Metadata } from "next";
import { ProductClient } from "./ProductClient";

// Mock product data - In a real app, this would come from an API or database
const getProductData = (id: string) => {
  const products: Record<
    string,
    {
      id: string;
      name: string;
      price: string;
      images: string[];
      description: string;
      sizes: string[];
      colors: string[];
    }
  > = {
    "gris-silk-wrap-top": {
      id: "gris-silk-wrap-top",
      name: "Gris Silk Wrap Top",
      price: "1,250,000đ",
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop",
      ],
      description:
        "Elegant silk wrap top featuring a graceful drape and sophisticated silhouette. Perfect for both day and evening wear, this piece embodies timeless elegance with a modern twist.",
      sizes: ["S", "M", "L"],
      colors: ["Grey", "Black", "Cream"],
    },
  };

  return (
    products[id] || {
      id: "default",
      name: "Product",
      price: "0đ",
      images: [
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1200&auto=format&fit=crop",
      ],
      description: "Product description",
      sizes: ["S", "M", "L"],
      colors: ["Grey", "Black", "Cream"],
    }
  );
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = getProductData(params.id);

  return {
    title: `${product.name} | Gris-Cat`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductData(params.id);

  return <ProductClient product={product} />;
}
