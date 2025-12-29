import { ProductCard } from "@/components/ui/ProductCard";

const accessories = [
  {
    name: "Silk Scarf - Grey",
    price: "650,000đ",
    imageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=800&auto=format&fit=crop",
    id: "silk-scarf-grey",
  },
];

export default function AccessoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Accessories
        </h1>
        <p className="font-sans text-lg font-light text-foreground/70 max-w-2xl mx-auto">
          Finishing touches for your elegant ensemble
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {accessories.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

