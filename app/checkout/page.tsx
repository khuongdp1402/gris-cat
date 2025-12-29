"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Vietnam",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // TODO: Implement form submission logic
  };

  // Mock order summary data
  const orderItems = [
    { name: "Gris Silk Wrap Top", size: "M", color: "Grey", price: "1,250,000đ", quantity: 1 },
  ];

  const subtotal = 1250000;
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8 md:mb-12">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Shipping Form */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Shipping Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Order Summary & Payment */}
        <div className="space-y-8">
          {/* Order Summary */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Order Summary
            </h2>
            <div className="border border-foreground/10 p-6 space-y-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <p className="font-sans text-sm font-light text-foreground">
                      {item.name}
                    </p>
                    <p className="font-sans text-xs text-foreground/60 mt-1">
                      {item.size} / {item.color} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-sans text-sm font-normal text-foreground">
                    {item.price}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t border-foreground/10 space-y-3">
                <div className="flex justify-between">
                  <span className="font-sans text-sm font-light text-foreground">
                    Subtotal
                  </span>
                  <span className="font-sans text-sm font-normal text-foreground">
                    {subtotal.toLocaleString("vi-VN")}đ
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-sm font-light text-foreground">
                    Shipping
                  </span>
                  <span className="font-sans text-sm font-normal text-foreground">
                    {shipping === 0 ? "Free" : `${shipping.toLocaleString("vi-VN")}đ`}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-foreground/10">
                  <span className="font-sans text-base font-medium text-foreground">
                    Total
                  </span>
                  <span className="font-sans text-base font-semibold text-foreground">
                    {total.toLocaleString("vi-VN")}đ
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Payment Method
            </h2>
            <div className="border border-foreground/10 p-6 space-y-6">
              {/* Bank Transfer / QR Code Option */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-2 border-brand-accent bg-brand-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                  <span className="font-sans text-sm font-medium text-foreground uppercase tracking-wide">
                    Bank Transfer / QR Code
                  </span>
                </div>

                {/* QR Code */}
                <div className="flex justify-center py-4">
                  <div className="relative w-48 h-48 bg-soft-accent border border-foreground/10 flex items-center justify-center">
                    {/* Mock QR Code - In production, this would be a real QR code image */}
                    <div className="text-center p-4">
                      <div className="font-sans text-xs text-foreground/40 mb-2">
                        QR Code
                      </div>
                      <div className="grid grid-cols-8 gap-1">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`aspect-square ${
                              Math.random() > 0.5
                                ? "bg-foreground"
                                : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bank Account Info */}
                <div className="space-y-2 pt-4 border-t border-foreground/10">
                  <p className="font-sans text-sm font-light text-foreground/80">
                    <strong className="font-medium">Bank:</strong> Vietcombank
                  </p>
                  <p className="font-sans text-sm font-light text-foreground/80">
                    <strong className="font-medium">Account Name:</strong>{" "}
                    Gris-Cat
                  </p>
                  <p className="font-sans text-sm font-light text-foreground/80">
                    <strong className="font-medium">Account Number:</strong>{" "}
                    0123456789
                  </p>
                  <p className="font-sans text-xs text-foreground/60 pt-2">
                    Please transfer the exact amount and include your order number
                    in the transfer description.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-none py-4 text-sm uppercase tracking-wider"
          >
            PLACE ORDER
          </Button>
        </div>
      </div>
    </div>
  );
}

