import { Metadata } from "next";
import { ProductDetailContent } from "./ProductDetailContent";
import { getProductBySlug } from "@/lib/products-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found | GRIS-CAT",
    };
  }
  
  return {
    title: `${product.fullName} | GRIS-CAT`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  // Build breadcrumb
  const breadcrumb = [
    { name: "Home", href: "/" },
    { name: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/collections/${product.category}` },
    { name: product.subCategory.charAt(0).toUpperCase() + product.subCategory.slice(1).replace(/-/g, " "), href: `/collections/${product.category}/${product.subCategory}` },
    { name: product.name, href: `/products/${product.slug}` },
  ];
  
  return <ProductDetailContent product={{ ...product, breadcrumb }} />;
}
