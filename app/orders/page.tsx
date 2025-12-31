import React from "react";
import Link from "next/link";
import { Package, Clock, CheckCircle, Truck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price) + " ₫";
};

// Mock orders data
const ORDERS = [
  {
    id: "ORDER123456",
    date: "Dec 31, 2025",
    status: "processing",
    total: 740000,
    items: 1,
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "My Orders", href: "/orders" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8">
          My Orders
        </h1>

        {ORDERS.length === 0 ? (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
            <p className="text-foreground-muted mb-6">You haven't placed any orders yet</p>
            <Link
              href="/collections/new-arrivals"
              className="inline-block px-8 py-3 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {ORDERS.map((order) => (
              <div key={order.id} className="border border-border bg-background-alt p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 pb-4 border-b border-border">
                  <div>
                    <p className="text-sm text-foreground-muted">Order Number</p>
                    <p className="text-lg font-bold text-foreground">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Order Date</p>
                    <p className="text-sm font-bold text-foreground">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted">Total</p>
                    <p className="text-lg font-bold text-foreground">{formatPrice(order.total)}</p>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-bold rounded">
                      <Clock className="w-4 h-4" />
                      Processing
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-foreground-muted">{order.items} item(s)</p>
                  <Link
                    href={`/orders/${order.id}`}
                    className="text-sm font-bold text-foreground hover:text-foreground-muted underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">Need Help?</h2>
          <p className="text-sm text-foreground-muted mb-4">
            Have questions about your order? Our customer service team is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm font-bold text-foreground hover:text-foreground-muted underline"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

