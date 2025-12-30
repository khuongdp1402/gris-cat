import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Color Palette
        'background-light': '#FFFFFF',
        'background-dark': '#1A202C', // Slate-900 (High-end dark background)
        'text-main-light': '#374151', // Gray-700
        'text-main-dark': '#F3F4F6',  // Gray-100
        'accent-grey': '#4A5568',     // Cool Grey (Gris brand color)

        // Legacy/Existing Brand Colors for compatibility
        'gris': {
          dark: '#4A5568',
          medium: '#718096',
          light: '#E2E8F0',
          backdrop: '#F8F9FA',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
        playfair: ['var(--font-playfair)', ...fontFamily.serif],
      },
      // Override default background and text colors to use the new palette
      backgroundColor: {
        background: 'var(--background)',
      },
      textColor: {
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};

export default config;
