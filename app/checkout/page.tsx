"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Check, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price) + " ₫";
};

const STEPS = [
  { id: 1, name: "Contact", label: "Contact Information" },
  { id: 2, name: "Shipping", label: "Shipping Address" },
  { id: 3, name: "Payment", label: "Payment Method" },
  { id: 4, name: "Review", label: "Review Order" },
  { id: 5, name: "Complete", label: "Order Complete" },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  });
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const subtotal = 490000;
  const shipping = 250000;
  const total = subtotal + shipping;

  const validateStep = () => {
    const newErrors: string[] = [];

    if (currentStep === 1) {
      if (!email) {
        newErrors.push("Email is required");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.push("Please enter a valid email");
      }
    }

    if (currentStep === 2) {
      if (!shippingInfo.firstName) newErrors.push("First name is required");
      if (!shippingInfo.lastName) newErrors.push("Last name is required");
      if (!shippingInfo.address) newErrors.push("Address is required");
      if (!shippingInfo.city) newErrors.push("City is required");
      if (!shippingInfo.state) newErrors.push("State is required");
      if (!shippingInfo.postalCode) newErrors.push("Postal code is required");
      if (!shippingInfo.phone) newErrors.push("Phone is required");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
        setErrors([]);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors([]);
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    setCurrentStep(5);
    setErrors([]);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Shopping Bag", href: "/cart" },
          { name: "Checkout", href: "/checkout" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8">
          CHECKOUT
        </h1>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      currentStep > step.id
                        ? "bg-green-600 text-white"
                        : currentStep === step.id
                        ? "bg-foreground text-background ring-4 ring-foreground/20"
                        : "bg-background-alt text-foreground-muted border-2 border-border"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium hidden md:block ${
                      currentStep >= step.id ? "text-foreground" : "text-foreground-muted"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 transition-all ${
                      currentStep > step.id ? "bg-green-600" : "bg-border"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left: Step Content */}
          <div className="lg:col-span-7">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>
                  
                  {/* Error Messages */}
                  {errors.length > 0 && (
                    <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded">
                      <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                        {errors.map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors([]);
                    }}
                    placeholder="Email address"
                    className={`w-full px-4 py-3 border bg-background text-foreground focus:outline-none focus:ring-2 ${
                      errors.length > 0 ? "border-red-500 focus:ring-red-500" : "border-border focus:ring-foreground-muted"
                    }`}
                  />
                  <label className="flex items-center gap-2 mt-3 text-sm text-foreground-muted">
                    <input type="checkbox" className="w-4 h-4" />
                    Keep me updated on exclusive offers and news
                  </label>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-foreground text-background text-center text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors flex items-center justify-center gap-2"
                >
                  Next <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Shipping Address */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Shipping Address</h2>
                
                {/* Error Messages */}
                {errors.length > 0 && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded">
                    <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                      {errors.map((error, index) => (
                        <li key={index}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      value={shippingInfo.firstName}
                      onChange={(e) => {
                        setShippingInfo({ ...shippingInfo, firstName: e.target.value });
                        setErrors([]);
                      }}
                      className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={shippingInfo.lastName}
                      onChange={(e) => {
                        setShippingInfo({ ...shippingInfo, lastName: e.target.value });
                        setErrors([]);
                      }}
                      className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={shippingInfo.address}
                    onChange={(e) => {
                      setShippingInfo({ ...shippingInfo, address: e.target.value });
                      setErrors([]);
                    }}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      value={shippingInfo.city}
                      onChange={(e) => {
                        setShippingInfo({ ...shippingInfo, city: e.target.value });
                        setErrors([]);
                      }}
                      className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                    />
                    <div className="relative">
                      <select
                        value={shippingInfo.state}
                        onChange={(e) => {
                          setShippingInfo({ ...shippingInfo, state: e.target.value });
                          setErrors([]);
                        }}
                        className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted appearance-none"
                      >
                        <option value="">State</option>
                        <option value="HCM">Ho Chi Minh</option>
                        <option value="HN">Hanoi</option>
                        <option value="DN">Da Nang</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted pointer-events-none" />
                    </div>
                    <input
                      type="text"
                      placeholder="Postal code"
                      value={shippingInfo.postalCode}
                      onChange={(e) => {
                        setShippingInfo({ ...shippingInfo, postalCode: e.target.value });
                        setErrors([]);
                      }}
                      className="px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={shippingInfo.phone}
                    onChange={(e) => {
                      setShippingInfo({ ...shippingInfo, phone: e.target.value });
                      setErrors([]);
                    }}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 py-4 bg-background-alt text-foreground text-center text-sm font-bold uppercase tracking-widest hover:bg-border transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 py-4 bg-foreground text-background text-center text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors flex items-center justify-center gap-2"
                  >
                    Next <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method (QR Code) */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Payment Method</h2>
                
                {/* QR Payment */}
                <div className="border-2 border-foreground bg-background-alt p-6 text-center">
                  <p className="text-sm font-bold text-foreground mb-4">Bank Transfer via QR Code</p>
                  
                  {/* QR Code Placeholder */}
                  <div className="w-64 h-64 mx-auto bg-white border-4 border-border flex items-center justify-center mb-4">
                    <Image
                      src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=Bank:Vietcombank%7CAccount:0123456789%7CAmount:740000%7CContent:GRISCAT-ORDER123"
                      alt="QR Code"
                      width={240}
                      height={240}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>

                  {/* Bank Details */}
                  <div className="text-left bg-background border border-border p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Bank:</span>
                      <span className="text-sm font-bold text-foreground">Vietcombank</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Account Number:</span>
                      <span className="text-sm font-bold text-foreground">0123 4567 8900</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Account Name:</span>
                      <span className="text-sm font-bold text-foreground">GRIS-CAT FASHION</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Amount:</span>
                      <span className="text-sm font-bold text-red-600">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground-muted">Transfer Content:</span>
                      <span className="text-sm font-bold text-foreground">GRISCAT ORDER123</span>
                    </div>
                  </div>

                  <p className="text-xs text-foreground-muted mt-4">
                    Please scan the QR code or transfer manually using the details above.
                    <br />
                    After transferring, click "Confirm Payment" below.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 py-4 bg-background-alt text-foreground text-center text-sm font-bold uppercase tracking-widest hover:bg-border transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 py-4 bg-foreground text-background text-center text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors flex items-center justify-center gap-2"
                  >
                    Next <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review Order */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Review Your Order</h2>
                
                {/* Order Summary */}
                <div className="border border-border p-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-2">Contact</h3>
                    <p className="text-sm text-foreground-muted">{email || "Not provided"}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-2">Shipping Address</h3>
                    <p className="text-sm text-foreground-muted">
                      {shippingInfo.firstName} {shippingInfo.lastName}<br />
                      {shippingInfo.address}<br />
                      {shippingInfo.city}, {shippingInfo.state} {shippingInfo.postalCode}<br />
                      {shippingInfo.phone}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-2">Payment Method</h3>
                    <p className="text-sm text-foreground-muted">Bank Transfer (QR Code)</p>
                  </div>
                </div>

                {/* Confirmation */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 p-4 rounded">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Important:</strong> Please ensure you have completed the bank transfer before confirming your payment.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleBack}
                    className="flex-1 py-4 bg-background-alt text-foreground text-center text-sm font-bold uppercase tracking-widest hover:bg-border transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={handleConfirmPayment}
                    className="flex-1 py-4 bg-green-600 text-white text-center text-sm font-bold uppercase tracking-widest hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Confirm Payment <Check className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Order Complete */}
            {currentStep === 5 && (
              <div className="text-center space-y-6 py-12">
                <div className="flex justify-center">
                  <CheckCircle className="w-24 h-24 text-green-600" />
                </div>
                
                <h2 className="text-3xl font-playfair font-bold text-foreground">
                  Payment Confirmed!
                </h2>
                
                <p className="text-lg text-foreground-muted max-w-md mx-auto">
                  Thank you for your order! We have received your payment confirmation and will process your order shortly.
                </p>

                <div className="bg-background-alt border border-border p-6 max-w-md mx-auto text-left">
                  <p className="text-sm font-bold text-foreground mb-2">Order Number</p>
                  <p className="text-2xl font-bold text-foreground mb-4">#ORDER123456</p>
                  <p className="text-xs text-foreground-muted">
                    A confirmation email has been sent to <strong>{email}</strong>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Link
                    href="/orders"
                    className="flex-1 py-4 bg-foreground text-background text-center text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors"
                  >
                    Track Your Order
                  </Link>
                  <Link
                    href="/"
                    className="flex-1 py-4 bg-background-alt text-foreground text-center text-sm font-bold uppercase tracking-widest hover:bg-border transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <p className="text-xs text-foreground-muted mt-8">
                  Need help? <Link href="/contact" className="underline hover:text-foreground">Contact our support team</Link>
                </p>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-background-alt border border-border p-6">
              <h2 className="text-lg font-bold text-foreground mb-6">ORDER SUMMARY</h2>

              {/* Cart Items */}
              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex gap-4">
                  <div className="relative w-20 h-28 bg-surface flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400&auto=format&fit=crop"
                      alt="Product"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-foreground mb-1">
                      Jane Pearl Embellished Quilted Card Holder
                    </h3>
                    <p className="text-xs text-foreground-muted mb-2">Black, M/S</p>
                    <p className="text-sm font-bold text-foreground">{formatPrice(490000)}</p>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-muted">Subtotal</span>
                  <span className="font-bold text-foreground">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground-muted">Shipping</span>
                  <span className="font-bold text-foreground">{formatPrice(shipping)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-baseline">
                  <span className="text-base font-bold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-foreground">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
