import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Story | GRIS-CAT",
  description: "The journey of GRIS-CAT - from a vision to a luxury fashion brand.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/story" },
];

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a202c]">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
          alt="Our Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4">
            Our Story
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Story Timeline */}
        <div className="space-y-16 md:space-y-24">
          {/* Chapter 1 */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-playfair font-bold text-gray-200 dark:text-gray-700">01</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
                The Beginning
              </h2>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 ml-16">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
                alt="The Beginning"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-16">
              GRIS-CAT was founded in 2020 with a simple yet powerful vision: to create luxury fashion 
              that speaks to the modern woman's desire for timeless elegance. What started as a passion 
              project has grown into a brand that celebrates the delicate balance between classic 
              sophistication and contemporary aesthetics.
            </p>
          </section>

          {/* Chapter 2 */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-playfair font-bold text-gray-200 dark:text-gray-700">02</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
                The Inspiration
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-16">
              Our name, GRIS-CAT, reflects our core philosophy. "Gris" (grey) represents the 
              sophisticated, neutral palette that forms the foundation of our collections. The "Cat" 
              symbolizes grace, elegance, and independence - qualities we believe every woman embodies.
            </p>
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 ml-16">
              <Image
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop"
                alt="The Inspiration"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Chapter 3 */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-playfair font-bold text-gray-200 dark:text-gray-700">03</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
                The Craft
              </h2>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 ml-16">
              <Image
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop"
                alt="The Craft"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-16">
              Every piece in our collection is carefully curated and crafted with attention to detail. 
              We work with skilled artisans and use only the finest materials - from Italian leather to 
              premium silk. Our design process is thoughtful and intentional, ensuring each piece 
              embodies our values of quality, sustainability, and timeless elegance.
            </p>
          </section>

          {/* Chapter 4 */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-playfair font-bold text-gray-200 dark:text-gray-700">04</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
                The Future
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-16">
              As we continue to grow, our commitment remains unchanged: to create beautiful, timeless 
              pieces that empower women to express their unique style. We're constantly evolving, 
              exploring new materials, techniques, and design directions while staying true to our 
              core philosophy of timeless elegance.
            </p>
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 ml-16">
              <Image
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop"
                alt="The Future"
                fill
                className="object-cover"
              />
            </div>
          </section>
        </div>

        {/* Closing Statement */}
        <section className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800 text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Thank You for Being Part of Our Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            We're grateful for every customer who chooses GRIS-CAT. Your support allows us to continue 
            creating pieces that celebrate timeless elegance and modern sophistication.
          </p>
          <a
            href="/collections/bags"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-black dark:hover:bg-gray-200 transition-colors"
          >
            Explore Our Collections
          </a>
        </section>
      </div>
    </div>
  );
}

