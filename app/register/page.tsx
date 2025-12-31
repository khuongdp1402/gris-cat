"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Register:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Register", href: "/register" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Branding */}
          <div className="hidden lg:block relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
              alt="Fashion"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
              <h2 className="font-playfair text-4xl font-bold mb-2">Join GRIS-CAT</h2>
              <p className="text-lg font-light">Become part of our exclusive community</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  Exclusive member-only offers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  Free shipping on all orders
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  Early access to new collections
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Register Form */}
          <div className="max-w-md mx-auto w-full">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Image
                src="/logo.png"
                alt="GRIS-CAT"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-playfair text-2xl font-bold text-foreground-muted">
                GRIS-CAT
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground text-center mb-2">
              Create Account
            </h1>
            <p className="text-sm text-foreground-muted text-center mb-8">
              Join us and start shopping your favorites
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      placeholder="First name"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="Last name"
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+84 123 456 789"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Create a password"
                    required
                    className="w-full pl-12 pr-12 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                    placeholder="Confirm your password"
                    required
                    className="w-full pl-12 pr-12 py-3 border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground-muted"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms & Newsletter */}
              <div className="space-y-3">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="w-4 h-4 mt-0.5 border-border"
                  />
                  <span className="text-sm text-foreground-muted">
                    I agree to the{" "}
                    <Link href="/terms" className="text-foreground underline hover:text-foreground-muted">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-foreground underline hover:text-foreground-muted">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={subscribeNewsletter}
                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                    className="w-4 h-4 mt-0.5 border-border"
                  />
                  <span className="text-sm text-foreground-muted">
                    Subscribe to our newsletter for exclusive offers and updates
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-foreground-muted transition-colors"
              >
                Create Account
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center text-sm text-foreground-muted mt-8">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-foreground hover:text-foreground-muted underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

