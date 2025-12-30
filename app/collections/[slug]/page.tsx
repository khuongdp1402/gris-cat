import { Metadata } from "next";
import { CollectionContent } from "./CollectionContent";
import { getProductsByCategory, getAllProducts } from "@/lib/products-data";

// Collection data mapping
const COLLECTIONS: Record<string, { name: string; description: string }> = {
  bags: {
    name: "WOMEN'S BAGS",
    description: "Discover our curated collection of luxury bags, from timeless totes to elegant clutches. Each piece is crafted with meticulous attention to detail.",
  },
  clothing: {
    name: "WOMEN'S CLOTHING",
    description: "Elegant pieces that blend classic sophistication with contemporary aesthetics. From silk tops to ballet-inspired skirts.",
  },
  dresses: {
    name: "DRESSES",
    description: "Timeless dresses for every occasion. From minimalist day dresses to elegant evening pieces.",
  },
  accessories: {
    name: "ACCESSORIES",
    description: "Complete your look with our carefully curated selection of accessories.",
  },
};

const getCollectionData = async (slug: string) => {
  const collection = COLLECTIONS[slug] || {
    name: slug.toUpperCase().replace(/-/g, " "),
    description: "Discover our curated collection of luxury fashion pieces.",
  };

  const products = slug === "bags" || slug === "clothing" 
    ? getProductsByCategory(slug)
    : getAllProducts();

  return {
    name: collection.name,
    slug: slug,
    description: collection.description,
    breadcrumb: [
      { name: "Home", href: "/" },
      { name: "Collections", href: "/collections" },
      { name: collection.name, href: `/collections/${slug}` },
    ],
    productCount: products.length,
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const collection = await getCollectionData(params.slug);
  
  return {
    title: `${collection.name} | GRIS-CAT`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = await getCollectionData(params.slug);
  
  return <CollectionContent collection={collection} />;
}

