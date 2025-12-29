"use client";

import { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { VariantSelector } from "@/components/ui/VariantSelector";
import { Button } from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";

interface ProductClientProps {
  product: {
    id: string;
    name: string;
    price: string;
    images: string[];
    description: string;
    sizes: string[];
    colors: string[];
  };
}

export function ProductClient({ product }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleAddToBag = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select both size and color");
      return;
    }
    // In a real app, this would add to cart
    // TODO: Implement add to cart functionality
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side - Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square w-full overflow-hidden bg-soft-accent">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(0, 4).map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square w-full overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-brand-accent"
                    : "border-transparent hover:border-foreground/20"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 25vw, 12.5vw"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-6 md:space-y-8">
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            {product.name}
          </h1>

          {/* Price */}
          <p className="font-sans text-2xl font-normal text-foreground">
            {product.price}
          </p>

          {/* Variants */}
          <div className="space-y-6 pt-4">
            <VariantSelector
              label="Size"
              options={product.sizes.map((size) => ({
                value: size,
                label: size,
              }))}
              selectedValue={selectedSize}
              onSelect={setSelectedSize}
            />

            <VariantSelector
              label="Color"
              options={product.colors.map((color) => ({
                value: color,
                label: color,
              }))}
              selectedValue={selectedColor}
              onSelect={setSelectedColor}
            />
          </div>

          {/* Add to Bag Button */}
          <Button
            onClick={handleAddToBag}
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-4 text-sm uppercase tracking-wider"
          >
            <ShoppingBag className="inline-block mr-2 w-4 h-4" />
            ADD TO BAG
          </Button>

          {/* Accordion Description */}
          <div className="pt-4">
            <Accordion>
              <AccordionItem title="Details" defaultOpen>
                <p>{product.description}</p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li>100% Premium Silk</li>
                  <li>Hand-finished details</li>
                  <li>Dry clean only</li>
                  <li>Made with sustainable practices</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Size Guide">
                <div className="space-y-3">
                  <p className="font-medium mb-3">Size Measurements (cm):</p>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-foreground/10">
                        <th className="py-2 pr-4 font-medium">Size</th>
                        <th className="py-2 pr-4 font-medium">Bust</th>
                        <th className="py-2 pr-4 font-medium">Waist</th>
                        <th className="py-2 font-medium">Hip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2">S</td>
                        <td className="py-2">86-90</td>
                        <td className="py-2">66-70</td>
                        <td className="py-2">90-94</td>
                      </tr>
                      <tr className="border-b border-foreground/5">
                        <td className="py-2">M</td>
                        <td className="py-2">90-94</td>
                        <td className="py-2">70-74</td>
                        <td className="py-2">94-98</td>
                      </tr>
                      <tr>
                        <td className="py-2">L</td>
                        <td className="py-2">94-98</td>
                        <td className="py-2">74-78</td>
                        <td className="py-2">98-102</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>
              <AccordionItem title="Shipping">
                <div className="space-y-3">
                  <p>
                    <strong>Standard Shipping:</strong> 3-5 business days - Free
                    for orders over 2,000,000đ
                  </p>
                  <p>
                    <strong>Express Shipping:</strong> 1-2 business days -
                    50,000đ
                  </p>
                  <p>
                    <strong>International Shipping:</strong> Available to
                    select countries. Contact us for details.
                  </p>
                  <p className="pt-2">
                    All orders are carefully packaged and insured. You will
                    receive tracking information via email once your order
                    ships.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

