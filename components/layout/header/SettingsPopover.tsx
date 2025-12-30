"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

interface SettingsPopoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsPopover({ isOpen, onClose }: SettingsPopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("EN");

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={popoverRef}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Language Switcher */}
          <div className="p-4 border-b border-gray-100 dark:border-gray-700">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Language
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setLanguage("EN")}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                  language === "EN"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage("VN")}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                  language === "VN"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                VN
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Theme
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => theme === "dark" && toggleTheme()}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors flex items-center justify-center gap-2 ${
                  theme === "light"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <Sun className="w-4 h-4" />
                Light
              </button>
              <button 
                onClick={() => theme === "light" && toggleTheme()}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded transition-colors flex items-center justify-center gap-2 ${
                  theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <Moon className="w-4 h-4" />
                Dark
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

