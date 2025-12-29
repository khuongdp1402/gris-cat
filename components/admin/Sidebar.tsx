"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingBag, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/customers", label: "Customers", icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-foreground text-background h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/admin" className="block mb-8">
          <h2 className="font-serif text-2xl font-bold text-background">
            GRIS-CAT
          </h2>
          <p className="font-sans text-xs font-light text-background/70 uppercase tracking-wide mt-1">
            Admin Panel
          </p>
        </Link>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded transition-all duration-200",
                  isActive
                    ? "bg-background/20 text-background"
                    : "text-background/70 hover:bg-background/10 hover:text-background"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-sans text-sm font-light uppercase tracking-wide">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

