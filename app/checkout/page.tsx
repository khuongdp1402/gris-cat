"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Minus, Plus, X, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock cart data
const CART_ITEMS = [
  {
    id: "1",
    name: "Classic Leather Clutch",
    color: "Navy",
    size: "One Size",
    price: 1250000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1564422167509-4f15e80f4f05?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Silk Evening Dress",
    color: "Black",
    size: "M",
    price: 2890000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState(CART_ITEMS);
  const [expandedStep, setExpandedStep] = useState(1);

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleStep = (step: number) => {
    if (step < currentStep) {
      setExpandedStep(expandedStep === step ? 0 : step);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a202c]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Checkout
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Complete your order in a few simple steps
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Steps (60-70%) */}
          <div className="lg:col-span-7 space-y-4">
            {/* STEP 1: CART */}
            <CartStep
              isActive={currentStep === 1}
              isExpanded={expandedStep === 1}
              cartItems={cartItems}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
              onContinue={() => {
                setCurrentStep(2);
                setExpandedStep(2);
              }}
              onToggle={() => toggleStep(1)}
              isCompleted={currentStep > 1}
            />

            {/* STEP 2: SHIPPING */}
            <ShippingStep
              isActive={currentStep === 2}
              isExpanded={expandedStep === 2}
              shippingInfo={shippingInfo}
              onInfoChange={setShippingInfo}
              onContinue={() => {
                setCurrentStep(3);
                setExpandedStep(3);
              }}
              onToggle={() => toggleStep(2)}
              isCompleted={currentStep > 2}
            />

            {/* STEP 3: PAYMENT */}
            <PaymentStep
              isActive={currentStep === 3}
              isExpanded={expandedStep === 3}
              total={total}
              onComplete={() => {
                setCurrentStep(4);
                setExpandedStep(4);
              }}
              onToggle={() => toggleStep(3)}
              isCompleted={currentStep > 3}
            />

            {/* STEP 4: SUCCESS */}
            <AnimatePresence>
              {currentStep === 4 && (
                <SuccessStep customerName={shippingInfo.name} />
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Order Summary (30-40%) */}
          <div className="lg:col-span-5 order-first lg:order-last">
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// STEP 1: CART COMPONENT
function CartStep({
  isActive,
  isExpanded,
  cartItems,
  onQuantityChange,
  onRemove,
  onContinue,
  onToggle,
  isCompleted,
}: any) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-[#1a202c]"
      initial={false}
    >
      {/* Step Header */}
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
          isActive ? "bg-gray-50 dark:bg-gray-900/50" : ""
        }`}
        disabled={!isCompleted}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isCompleted
                ? "bg-green-500 text-white"
                : isActive
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            }`}
          >
            {isCompleted ? <Check className="w-4 h-4" /> : "1"}
          </div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Shopping Bag
          </h2>
        </div>
        {isCompleted && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {cartItems.length} items
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </div>
        )}
      </button>

      {/* Step Content */}
      <AnimatePresence initial={false}>
        {(isActive || isExpanded) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 space-y-4 border-t border-gray-200 dark:border-gray-800">
              {/* Cart Items */}
              {cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0"
                >
                  {/* Image */}
                  <div className="relative w-24 h-32 flex-shrink-0 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Color: {item.color} | Size: {item.size}
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-2">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 rounded">
                        <button
                          onClick={() => onQuantityChange(item.id, -1)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onQuantityChange(item.id, 1)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Shipping Note */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3">
                <p className="text-sm font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
                  ✓ SHIPPING: FREE
                </p>
              </div>

              {/* Continue Button */}
              {isActive && (
                <button
                  onClick={onContinue}
                  className="w-full py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  disabled={cartItems.length === 0}
                >
                  Checkout Now
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// STEP 2: SHIPPING COMPONENT
function ShippingStep({
  isActive,
  isExpanded,
  shippingInfo,
  onInfoChange,
  onContinue,
  onToggle,
  isCompleted,
}: any) {
  const isFormValid =
    shippingInfo.name && shippingInfo.phone && shippingInfo.city && shippingInfo.address;

  return (
    <motion.div
      className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-[#1a202c]"
      initial={false}
    >
      {/* Step Header */}
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
          isActive ? "bg-gray-50 dark:bg-gray-900/50" : ""
        }`}
        disabled={!isCompleted}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isCompleted
                ? "bg-green-500 text-white"
                : isActive
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            }`}
          >
            {isCompleted ? <Check className="w-4 h-4" /> : "2"}
          </div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Shipping Details
          </h2>
        </div>
        {isCompleted && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {shippingInfo.name} - {shippingInfo.phone}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </div>
        )}
      </button>

      {/* Step Content */}
      <AnimatePresence initial={false}>
        {(isActive || isExpanded) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 space-y-6 border-t border-gray-200 dark:border-gray-800">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={shippingInfo.name}
                  onChange={(e) =>
                    onInfoChange({ ...shippingInfo, name: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Phone & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={shippingInfo.phone}
                  onChange={(e) =>
                    onInfoChange({ ...shippingInfo, phone: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
                <input
                  type="text"
                  placeholder="City / Province"
                  value={shippingInfo.city}
                  onChange={(e) =>
                    onInfoChange({ ...shippingInfo, city: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  placeholder="Detailed Address"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    onInfoChange({ ...shippingInfo, address: e.target.value })
                  }
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-gray-900 dark:focus:border-gray-100 focus:outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Continue Button */}
              {isActive && (
                <button
                  onClick={onContinue}
                  disabled={!isFormValid}
                  className="w-full py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Payment
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// STEP 3: PAYMENT COMPONENT
function PaymentStep({
  isActive,
  isExpanded,
  total,
  onComplete,
  onToggle,
  isCompleted,
}: any) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-[#1a202c]"
      initial={false}
    >
      {/* Step Header */}
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
          isActive ? "bg-gray-50 dark:bg-gray-900/50" : ""
        }`}
        disabled={!isCompleted}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isCompleted
                ? "bg-green-500 text-white"
                : isActive
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            }`}
          >
            {isCompleted ? <Check className="w-4 h-4" /> : "3"}
          </div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
            Payment
          </h2>
        </div>
        {isCompleted && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Payment Completed
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </div>
        )}
      </button>

      {/* Step Content */}
      <AnimatePresence initial={false}>
        {(isActive || isExpanded) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 space-y-6 border-t border-gray-200 dark:border-gray-800">
              {/* Instructions */}
              <p className="text-center text-gray-600 dark:text-gray-400">
                Please scan the QR Code below to transfer via Banking App
              </p>

              {/* QR Code Placeholder */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-white flex items-center justify-center">
                      <span className="text-xs text-gray-400">QR Code</span>
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="text-center space-y-2 bg-gray-50 dark:bg-gray-900/50 px-6 py-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Bank: <span className="font-bold text-gray-900 dark:text-gray-100">VCB (Vietcombank)</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Account: <span className="font-bold text-gray-900 dark:text-gray-100">99998888</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Name: <span className="font-bold text-gray-900 dark:text-gray-100">GRIS STORE</span>
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-4">
                    Amount: {formatPrice(total)}
                  </p>
                </div>
              </div>

              {/* Complete Button */}
              {isActive && (
                <button
                  onClick={onComplete}
                  className="w-full py-4 bg-green-600 dark:bg-green-500 text-white font-bold text-sm uppercase tracking-widest hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                >
                  I Have Transferred - Complete Order
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// STEP 4: SUCCESS COMPONENT
function SuccessStep({ customerName }: { customerName: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border border-green-200 dark:border-green-800 rounded-lg overflow-hidden bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-[#1a202c]"
    >
      <div className="px-6 py-12 text-center space-y-6">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
        </motion.div>

        {/* Success Message */}
        <div className="space-y-3">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Thank you{customerName && `, ${customerName}`}!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your order <span className="font-bold text-gray-900 dark:text-gray-100">#GRIS-10294</span> is confirmed.
          </p>
        </div>

        {/* Tracking Info */}
        <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg px-6 py-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You can track your order status in your{" "}
            <Link
              href="/account"
              className="font-bold text-gray-900 dark:text-gray-100 underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              My Account
            </Link>{" "}
            section.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/account"
            className="flex-1 py-4 px-6 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold text-sm uppercase tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-center"
          >
            View Order
          </Link>
          <Link
            href="/"
            className="flex-1 py-4 px-6 border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 font-bold text-sm uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors text-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ORDER SUMMARY COMPONENT
function OrderSummary({
  subtotal,
  shipping,
  total,
  itemCount,
}: {
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg px-6 py-6 space-y-4">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100 pb-3 border-b border-gray-200 dark:border-gray-800">
          Order Summary
        </h3>

        {/* Items Count */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Items ({itemCount})</span>
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {formatPrice(subtotal)}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="font-medium text-green-600 dark:text-green-400">
            {shipping === 0 ? "FREE" : formatPrice(shipping)}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Total
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {formatPrice(total)}
            </span>
          </div>
        </div>

        {/* Security Note */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
            🔒 Secure checkout with 256-bit SSL encryption
          </p>
        </div>
      </div>
    </div>
  );
}
