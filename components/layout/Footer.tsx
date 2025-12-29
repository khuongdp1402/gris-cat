import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const customerCareLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/griscat", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/griscat", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/griscat", label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9FAFB] border-t border-foreground/5">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Story */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              Brand Story
            </h3>
            <p className="font-sans text-sm font-light text-foreground/70 leading-relaxed max-w-sm">
              Gris-Cat: Timeless Elegance. We curate luxury women's fashion that
              blends classic sophistication with contemporary balletcore aesthetics,
              creating pieces that transcend trends.
            </p>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              Customer Care
            </h3>
            <ul className="space-y-2">
              {customerCareLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm font-light text-foreground/70 hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-brand-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-foreground/5">
          <p className="font-sans text-xs font-light text-foreground/50 text-center">
            © {currentYear} Gris-Cat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

