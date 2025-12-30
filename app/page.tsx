import {
  SplitHero,
  SaleBanner,
  SpotlightCarousel,
  HomeProductGrids
} from "@/components/ui";
import { HeroCarousel } from "@/components/layout";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* 4. Promotional Highlights */}
      <section className="relative z-0">
        <SaleBanner />
        <SplitHero />
      </section>

      {/* 5. Content Discovery Modules */}
      <div className="my-12 md:my-20">
        <SpotlightCarousel />
      </div>

      <div className="pb-12 md:pb-20">
        <HomeProductGrids />
      </div>

      {/* 6. Brand Narrative Section */}
      <section className="py-16 md:py-24 bg-gris-backdrop dark:bg-slate-800/50">
        {/* ... existing footer content ... */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground dark:text-text-main-dark leading-tight">
                The Gris-Cat <br /> Philosophy
              </h2>
              <div className="space-y-6 font-sans text-base md:text-lg font-light text-foreground/80 dark:text-text-main-dark/80 leading-relaxed max-w-xl">
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
