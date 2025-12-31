"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Package, MapPin, Heart, CreditCard, Bell, LogOut, Edit2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

// Mock user data
const USER_DATA = {
  name: "Anna Nguyen",
  email: "anna.nguyen@example.com",
  phone: "+84 123 456 789",
  memberSince: "January 2024",
};

const MENU_ITEMS = [
  {
    id: "orders",
    label: "My Orders",
    icon: Package,
    href: "/orders",
    description: "Track, return, or buy things again",
  },
  {
    id: "addresses",
    label: "Addresses",
    icon: MapPin,
    href: "/account/addresses",
    description: "Edit addresses for orders and gifts",
  },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: Heart,
    href: "/wishlist",
    description: "View and manage your wishlist",
  },
  {
    id: "payment",
    label: "Payment Methods",
    icon: CreditCard,
    href: "/account/payment",
    description: "Edit or add payment methods",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    href: "/account/notifications",
    description: "Manage email and push notifications",
  },
];

export default function AccountPage() {
  const [user] = useState(USER_DATA);

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Account", href: "/account" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-2">
            MY ACCOUNT
          </h1>
          <p className="text-foreground-muted">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-background-alt border border-border p-6">
              {/* Profile Info */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{user.name}</h2>
                    <p className="text-sm text-foreground-muted">Member since {user.memberSince}</p>
                  </div>
                </div>
                <button
                  className="p-2 hover:bg-background rounded transition-colors"
                  aria-label="Edit profile"
                >
                  <Edit2 className="w-4 h-4 text-foreground-muted" />
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-1">
                    Email
                  </p>
                  <p className="text-sm text-foreground">{user.email}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-1">
                    Phone
                  </p>
                  <p className="text-sm text-foreground">{user.phone}</p>
                </div>
              </div>

              {/* Logout Button */}
              <button className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground border border-border hover:bg-background transition-colors">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content - Menu Items */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group p-6 border border-border hover:border-foreground transition-colors bg-background-alt hover:bg-background"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-foreground mb-1">
                          {item.label}
                        </h3>
                        <p className="text-sm text-foreground-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-background-alt border border-border">
              <h3 className="text-base font-bold text-foreground mb-3">
                Account Benefits
              </h3>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                  Exclusive member-only offers and early access to sales
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                  Free standard shipping on all orders
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                  Easy returns and exchanges within 30 days
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                  Priority customer support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">Need Help?</h2>
          <p className="text-sm text-foreground-muted mb-4">
            Our customer service team is here to assist you with any questions.
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
