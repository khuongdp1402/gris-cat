"use client";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { RelatedProducts } from "@/components/product/RelatedProducts";

interface ProductDetailContentProps {
  product: {
    id: string;
    slug: string;
    name: string;
    variant: string;
    fullName: string;
    description: string;
    price: number;
    salePrice: number | null;
    discount: number | null;
    isNew: boolean;
    isBestSeller: boolean;
    inStock: boolean;
    breadcrumb: Array<{ name: string; href: string }>;
    images: Array<{ id: string; url: string; alt: string; isMain?: boolean }>;
    colors: Array<{ id: string; name: string; hex: string; isSelected?: boolean }>;
    sizes: Array<{ id: string; label: string; isAvailable: boolean; isSelected?: boolean }>;
    details: {
      material: string;
      dimensions: string;
      care: string;
    };
    editorNote: string;
  };
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <Breadcrumbs items={product.breadcrumb} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid Layout: Gallery (8 cols) + Info (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-8">
            <ProductGallery
              images={product.images}
              productName={product.fullName}
            />
          </div>

          {/* Right Column: Product Info (Sticky) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="border-t border-border mt-16">
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  );
}

