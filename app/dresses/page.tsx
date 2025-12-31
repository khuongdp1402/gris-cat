import { ProductCard } from "@/components/ui/ProductCard";

const dresses = [
  {
    name: "Velvet Evening Dress",
    price: "3,100,000đ",
    imageMain:
      "https://images.unsplash.com/photo-1566479179817-4d9c0c5e3e0e?q=80&w=800&auto=format&fit=crop",
    id: "velvet-evening-dress",
  },
];

export default function DressesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Dresses
        </h1>
        <p className="font-sans text-lg font-light text-foreground/70 max-w-2xl mx-auto">
          Timeless elegance in every silhouette
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {dresses.map((product) => (
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

