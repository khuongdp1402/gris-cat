import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";

// Mock Product Data
const products = [
  {
    name: "Gris Silk Wrap Top",
    price: "1,250,000đ",
    imageUrl:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Ballet Midi Skirt - Charcoal",
    price: "980,000đ",
    imageUrl:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Classic Structure Blazer",
    price: "2,400,000đ",
    imageUrl:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Velvet Evening Dress",
    price: "3,100,000đ",
    imageUrl:
      "https://images.unsplash.com/photo-1566479179817-4d9c0c5e3e0e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero Banner */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1920&auto=format&fit=crop"
            alt="Grey Fashion Ballet"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <p className="font-sans text-sm md:text-base font-light text-background/90 uppercase tracking-[0.2em] mb-4">
              AUTUMN / WINTER 2026
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-8 leading-tight">
              THE GREY SYMPHONY
            </h1>
            <Link
              href="/collection"
              className="inline-block bg-brand-accent text-background hover:bg-brand-accent/90 rounded-full px-10 py-4 text-sm uppercase tracking-wider font-sans font-light transition-all duration-300 ease-in-out"
            >
              SHOP COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: The Edit - Product Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-center mb-12 md:mb-16">
            CURATED CLASSICS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Brand Mood - Split Section */}
      <section className="py-16 md:py-24 bg-soft-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
                The Gris-Cat Philosophy
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg font-light text-foreground/80 leading-relaxed">
                <p>
                  At Gris-Cat, we believe in timeless elegance that transcends
                  fleeting trends. Our philosophy is rooted in the delicate
                  balance between classic sophistication and contemporary
                  balletcore aesthetics.
                </p>
                <p>
                  Each piece in our collection is thoughtfully curated to
                  celebrate the graceful movement of the body, the refined
                  palette of grey tones, and the enduring beauty of minimalist
                  design. We craft garments that become cherished staples in
                  your wardrobe—pieces that tell a story of elegance, poise, and
                  understated luxury.
                </p>
                <p>
                  Our commitment to quality and craftsmanship ensures that every
                  garment not only looks beautiful but feels exceptional,
                  embodying the essence of classic beauty reimagined for the
                  modern woman.
                </p>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="Gris-Cat Philosophy - Elegant Fashion"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
