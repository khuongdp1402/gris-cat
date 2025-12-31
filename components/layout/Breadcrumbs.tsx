"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-foreground-muted">
          {items.map((item, index) => (
            <div key={item.href} className="flex items-center gap-2">
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
              {index < items.length - 1 && (
                <ChevronRight className="w-3 h-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

