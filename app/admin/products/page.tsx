"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Gris Silk Wrap Top",
    category: "Tops",
    price: "1,250,000đ",
    inventory: 45,
    status: "Active",
    imageUrl:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ballet Midi Skirt - Charcoal",
    category: "Skirts",
    price: "980,000đ",
    inventory: 32,
    status: "Active",
    imageUrl:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Classic Structure Blazer",
    category: "Outerwear",
    price: "2,400,000đ",
    inventory: 18,
    status: "Active",
    imageUrl:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Velvet Evening Dress",
    category: "Dresses",
    price: "3,100,000đ",
    inventory: 12,
    status: "Active",
    imageUrl:
      "https://images.unsplash.com/photo-1566479179817-4d9c0c5e3e0e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Silk Scarf - Grey",
    category: "Accessories",
    price: "650,000đ",
    inventory: 0,
    status: "Draft",
    imageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=200&auto=format&fit=crop",
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-4xl font-semibold text-foreground mb-2">
            Products
          </h1>
          <p className="font-sans text-sm font-light text-foreground/70">
            Manage your product inventory
          </p>
        </div>
        <Button className="bg-brand-accent text-background hover:bg-brand-accent/90">
          <Plus className="inline-block mr-2 w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Products Table */}
      <div className="bg-background border border-foreground/10 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-soft-accent border-b border-foreground/10">
            <tr>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Image
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Name
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Category
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Price
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Inventory
                </span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="font-sans text-xs font-light text-foreground/70 uppercase tracking-wide">
                  Status
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-soft-accent/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="relative w-16 h-16 bg-soft-accent">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-light text-foreground">
                    {product.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-light text-foreground/70">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-sans text-sm font-normal text-foreground">
                    {product.price}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`font-sans text-sm font-light ${
                      product.inventory === 0
                        ? "text-red-600"
                        : product.inventory < 20
                        ? "text-orange-600"
                        : "text-foreground"
                    }`}
                  >
                    {product.inventory}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-sans font-light uppercase tracking-wide ${
                      product.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-foreground/10 text-foreground/70"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

