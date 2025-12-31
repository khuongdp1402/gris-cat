import { ProductCard } from "@/components/ui/ProductCard";

// Mock product data - same as homepage
const products = [
  {
    name: "Gris Silk Wrap Top",
    price: "1,250,000đ",
    imageMain:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    id: "gris-silk-wrap-top",
  },
  {
    name: "Ballet Midi Skirt - Charcoal",
    price: "980,000đ",
    imageMain:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    id: "ballet-midi-skirt",
  },
  {
    name: "Classic Structure Blazer",
    price: "2,400,000đ",
    imageMain:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
    id: "classic-structure-blazer",
  },
  {
    name: "Velvet Evening Dress",
    price: "3,100,000đ",
    imageMain:
      "https://images.unsplash.com/photo-1566479179817-4d9c0c5e3e0e?q=80&w=800&auto=format&fit=crop",
    id: "velvet-evening-dress",
  },
];

export default function CollectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Collection
        </h1>
        <p className="font-sans text-lg font-light text-foreground/70 max-w-2xl mx-auto">
          Discover our complete collection of timeless elegance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            imageMain={product.imageMain}
            imageHover={product.imageMain}
          />
        ))}
      </div>
    </div>
  );
}

