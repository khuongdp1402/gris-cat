"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl max-h-[85vh] bg-background rounded-lg shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
                Size Guide
              </h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              {/* Clothing Size Guide */}
              <div className="mb-8">
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-4">
                  Clothing
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-surface">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium text-foreground border-b border-border">
                          Size
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-foreground border-b border-border">
                          Bust (cm)
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-foreground border-b border-border">
                          Waist (cm)
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-foreground border-b border-border">
                          Hips (cm)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-medium text-foreground">XS</td>
                        <td className="px-4 py-3 text-foreground-muted">78-82</td>
                        <td className="px-4 py-3 text-foreground-muted">60-64</td>
                        <td className="px-4 py-3 text-foreground-muted">84-88</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-medium text-foreground">S</td>
                        <td className="px-4 py-3 text-foreground-muted">82-86</td>
                        <td className="px-4 py-3 text-foreground-muted">64-68</td>
                        <td className="px-4 py-3 text-foreground-muted">88-92</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-medium text-foreground">M</td>
                        <td className="px-4 py-3 text-foreground-muted">86-90</td>
                        <td className="px-4 py-3 text-foreground-muted">68-72</td>
                        <td className="px-4 py-3 text-foreground-muted">92-96</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-medium text-foreground">L</td>
                        <td className="px-4 py-3 text-foreground-muted">90-94</td>
                        <td className="px-4 py-3 text-foreground-muted">72-76</td>
                        <td className="px-4 py-3 text-foreground-muted">96-100</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-foreground">XL</td>
                        <td className="px-4 py-3 text-foreground-muted">94-98</td>
                        <td className="px-4 py-3 text-foreground-muted">76-80</td>
                        <td className="px-4 py-3 text-foreground-muted">100-104</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bags & Accessories */}
              <div className="mb-8">
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-4">
                  Bags & Accessories
                </h3>
                <div className="space-y-3 text-sm text-foreground-muted">
                  <p>
                    <span className="font-medium text-foreground">Small Bags:</span> Compact designs perfect for essentials (20-25cm width)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Medium Bags:</span> Versatile everyday bags (30-35cm width)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Large Bags:</span> Spacious totes for work and travel (38-42cm width)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">One Size:</span> Universal fit accessories
                  </p>
                </div>
              </div>

              {/* How to Measure */}
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-4">
                  How to Measure
                </h3>
                <div className="space-y-3 text-sm text-foreground-muted">
                  <p>
                    <span className="font-medium text-foreground">Bust:</span> Measure around the fullest part of your chest, keeping the tape parallel to the floor.
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Waist:</span> Measure around the narrowest part of your waistline, about 2-3cm above your belly button.
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Hips:</span> Stand with your feet together and measure around the fullest part of your hips.
                  </p>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 p-4 bg-surface rounded-lg border border-border">
                <p className="text-xs text-foreground-muted">
                  <span className="font-medium text-foreground">Note:</span> All measurements are approximate and may vary slightly depending on the style. If you're between sizes, we recommend sizing up for a more comfortable fit.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

