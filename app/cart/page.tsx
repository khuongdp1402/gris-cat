"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

// Mock cart data
const INITIAL_CART_ITEMS = [
  {
    id: "1",
    name: "Jane Pearl Embellished Quilted Card Holder",
    color: "Black, M/S",
    price: 490000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop",
    inStock: true,
  },
];

// Mock recommended products
const RECOMMENDED_PRODUCTS = [
  {
    id: "1",
    name: "Adelaide Croc Effect Top Handle Bag - Ivory",
    price: 1895000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "MGC Kerry Top Handle Bag - Light Pink",
    price: 2150000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Arwen Quilted Top Handle Vanity Bag - Light Pink",
    price: 1690000,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Arwen Quilted Top Handle Vanity Bag - Cream",
    price: 1690000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Alma Quilted Chain Handle Bag - Black",
    price: 1950000,
    image: "https://images.unsplash.com/photo-1564422167509-4f81663f0e0a?q=80&w=400&auto=format&fit=crop",
  },
];

// Mock recently viewed
const RECENTLY_VIEWED = [
  {
    id: "1",
    name: "Paulina Elongated Top Handle Bag - Pink",
    originalPrice: 1680000,
    salePrice: 960000,
    discount: 43,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price) + " ₫";
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [reminders, setReminders] = useState(250000);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const estimatedTotal = subtotal + reminders;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Shopping Bag", href: "/cart" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8">
          SHOPPING BAG
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-foreground-muted mb-6">Your shopping bag is empty</p>
            <Link
              href="/collections/new-arrivals"
              className="inline-block px-8 py-3 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left: Cart Items */}
            <div className="lg:col-span-7">
              {/* Info Messages */}
              <div className="mb-6 space-y-3">
                <div className="flex items-start gap-3 p-4 border border-border bg-background-alt">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <p className="text-sm text-foreground-muted">
                    <strong>Keep an eye on GRIS-CAT boutique</strong> where pre-loved orders can be placed within 24 hours of purchasing. For assistance, please{" "}
                    <Link href="/contact" className="underline hover:text-foreground">
                      get in touch
                    </Link>{" "}
                    with us.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-4 border border-border bg-background-alt">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold">!</span>
                  </div>
                  <p className="text-sm text-foreground-muted">
                    An order with more support now form of prepayment. If you wish to transfer or transfer, the money-back option reaches the parent directly. please or ahead. or{" "}
                    <Link href="/payment-info" className="underline hover:text-foreground">
                      view payment under our recommendations
                    </Link>
                    .
                  </p>
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                <p className="text-sm font-bold text-foreground">
                  {cartItems.length} ITEM{cartItems.length > 1 ? "S" : ""}
                </p>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-border">
                    {/* Image */}
                    <div className="relative w-24 h-32 bg-surface flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between gap-4 mb-2">
                          <h3 className="text-sm font-medium text-foreground">{item.name}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-foreground-muted hover:text-foreground transition-colors flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-xs text-foreground-muted mb-2">{item.color}</p>
                        {!item.inStock && (
                          <p className="text-xs text-red-600 font-bold">In Stock</p>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-foreground">{formatPrice(item.price)}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-background-alt transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-background-alt transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Edit / Leave as Wishlist */}
                      <div className="flex gap-4 mt-2">
                        <button className="text-xs text-foreground-muted hover:text-foreground underline">
                          Edit | Leave as Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-background-alt border border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-6">ORDER SUMMARY</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground-muted">Subtotal</span>
                    <span className="font-bold text-foreground">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground-muted">Reminders ({formatPrice(250000)})</span>
                    <span className="font-bold text-foreground">{formatPrice(reminders)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-base font-bold text-foreground">Estimated Totals</span>
                    <span className="text-xl font-bold text-foreground">{formatPrice(estimatedTotal)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-foreground text-background text-center text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors mb-4"
                >
                  Proceed to Checkout
                </Link>

                <div className="space-y-2 text-xs text-foreground-muted">
                  <p className="font-bold uppercase tracking-wider">Accepted Payment Methods</p>
                  <div className="flex gap-2">
                    <div className="w-10 h-7 bg-surface border border-border flex items-center justify-center text-[8px] font-bold">VISA</div>
                    <div className="w-10 h-7 bg-surface border border-border flex items-center justify-center text-[8px] font-bold">MC</div>
                    <div className="w-10 h-7 bg-surface border border-border flex items-center justify-center text-[8px] font-bold">AMEX</div>
                    <div className="w-10 h-7 bg-surface border border-border flex items-center justify-center text-[8px] font-bold">JCB</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
                    Promo Code
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                    />
                    <button className="px-6 py-2 bg-foreground text-background text-sm font-bold uppercase hover:bg-foreground-muted transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Complete Your Purchase */}
        {cartItems.length > 0 && (
          <div className="mt-16">
            <h2 className="text-lg font-bold text-foreground mb-6">Complete Your Purchase</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {RECOMMENDED_PRODUCTS.slice(0, 3).map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className="group">
                  <div className="relative aspect-[3/4] bg-surface mb-2 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-foreground mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm font-bold text-foreground">{formatPrice(product.price)}</p>
                  <button className="mt-2 w-full py-2 bg-foreground text-background text-xs font-bold uppercase hover:bg-foreground-muted transition-colors">
                    Add to Bag
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Recommended For You */}
        <div className="mt-16">
          <h2 className="text-lg font-bold text-foreground mb-6">Recommended For You</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {RECOMMENDED_PRODUCTS.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-[3/4] bg-surface mb-2 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <h3 className="text-xs font-medium text-foreground mb-1 line-clamp-2 text-center">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-foreground text-center">{formatPrice(product.price)}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-16">
          <h2 className="text-lg font-bold text-foreground mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {RECENTLY_VIEWED.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-[3/4] bg-surface mb-2 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <h3 className="text-xs font-medium text-foreground mb-1 line-clamp-2 text-center">
                  {product.name}
                </h3>
                <div className="text-center">
                  <span className="text-xs text-foreground-muted line-through mr-2">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-sm font-bold text-foreground">{formatPrice(product.salePrice)}</span>
                </div>
                <p className="text-xs text-red-600 font-bold text-center mt-1">-{product.discount}% OFF</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Need Help */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">NEED HELP?</h2>
          <p className="text-sm text-foreground-muted">
            Our customer service team is here to assist you.{" "}
            <Link href="/contact" className="underline hover:text-foreground">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

