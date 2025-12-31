"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterSidebar } from "./FilterSidebar";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: any) => void;
}

export function MobileFilterDrawer({ isOpen, onClose, onFilterChange }: MobileFilterDrawerProps) {
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
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-background z-50 flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-bold uppercase tracking-wider text-foreground">
                Filters
              </h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Close filters"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 pt-0 pb-6">
                <FilterSidebar onFilterChange={onFilterChange} hideHeader={true} />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-border space-y-3">
              <button
                onClick={onClose}
                className="w-full py-3 text-sm font-bold uppercase tracking-wider bg-foreground text-background hover:opacity-90 transition-colors"
              >
                Apply Filters
              </button>
              <button
                onClick={() => {
                  // Reset all filters
                  onClose();
                }}
                className="w-full py-3 text-sm font-bold uppercase tracking-wider text-foreground-muted border border-border hover:bg-surface transition-colors"
              >
                Clear All
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

