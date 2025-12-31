import { ProductCard } from "@/components/ui/ProductCard";

const balletcoreProducts = [
  {
    name: "Ballet Midi Skirt - Charcoal",
    price: "980,000đ",
    imageMain:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    id: "ballet-midi-skirt",
  },
];

export default function BalletcorePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Balletcore Collection
        </h1>
        <p className="font-sans text-lg font-light text-foreground/70 max-w-2xl mx-auto">
          Graceful elegance inspired by ballet aesthetics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {balletcoreProducts.map((product) => (
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

