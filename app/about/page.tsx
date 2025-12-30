import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "About The Brand | GRIS-CAT",
  description: "Discover the story behind GRIS-CAT - where timeless elegance meets contemporary grace.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About The Brand", href: "/about" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a202c]">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop"
          alt="GRIS-CAT Brand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4">
            About The Brand
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Introduction */}
        <section className="mb-16 md:mb-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
              Timeless Elegance, Modern Sophistication
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              GRIS-CAT was born from a vision to create luxury fashion that transcends fleeting trends. 
              We believe in pieces that tell a story, that become part of your journey, and that stand 
              the test of time.
            </p>
          </div>
        </section>

        {/* Image + Text Section */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="Our Philosophy"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
                Our Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At GRIS-CAT, we curate luxury women's fashion that blends classic sophistication with 
                contemporary balletcore aesthetics. Each piece is thoughtfully designed to create a 
                delicate balance between timeless elegance and modern sensibility.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe in quality over quantity, in pieces that you'll reach for again and again, 
                and in fashion that empowers rather than overwhelms. Our collections are designed for 
                the modern woman who values both style and substance.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 md:mb-24">
          <h3 className="text-center font-playfair text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-playfair text-xl font-semibold text-gray-900 dark:text-gray-100">
                Quality Craftsmanship
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Every piece is crafted with meticulous attention to detail, using only the finest 
                materials and techniques.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-playfair text-xl font-semibold text-gray-900 dark:text-gray-100">
                Sustainable Practices
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                We are committed to sustainable fashion, creating pieces that last and reducing our 
                environmental impact.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-playfair text-xl font-semibold text-gray-900 dark:text-gray-100">
                Timeless Design
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Our designs transcend seasons, creating pieces that remain elegant and relevant for 
                years to come.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 border-t border-gray-200 dark:border-gray-800">
          <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Join Our Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover our collections and become part of the GRIS-CAT community. 
            Follow us for the latest updates, styling tips, and exclusive offers.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/collections/bags"
              className="px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-black dark:hover:bg-gray-200 transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/story"
              className="px-8 py-3 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-bold text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
            >
              Our Story
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

