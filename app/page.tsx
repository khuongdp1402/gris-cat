import {
  SplitHero,
  SaleBanner,
  SpotlightCarousel,
  HomeProductGrids
} from "@/components/ui";
import { ClassicHeroCarousel } from "@/components/layout";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 1. Hero Carousel */}
      <ClassicHeroCarousel />

      {/* 2. Promotional Highlights - White Background */}
      <section className="relative z-0 bg-background">
        <SaleBanner />
        <SplitHero />
      </section>

      {/* 3. Product Grids (New In + Most Wanted) - Each has own background */}
      <HomeProductGrids />

      {/* 4. Spotlight Carousel - Light Grey Background */}
      <section className="bg-background-alt">
        <SpotlightCarousel />
      </section>

      {/* 5. Brand Narrative Section - White Background */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                The Gris-Cat <br /> Philosophy
              </h2>
              <div className="space-y-6 font-sans text-base md:text-lg font-light text-foreground-muted leading-relaxed max-w-xl">
                <p>
                  At Gris-Cat, we believe in timeless elegance that transcends
                  fleeting trends. Our philosophy is rooted in the delicate
                  balance between classic sophistication and contemporary
                  balletcore aesthetics.
                </p>
              </div>
            </div>
            {/* Philosophy Image */}
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="Gris-Cat Philosophy"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
