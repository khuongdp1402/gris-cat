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
        // CSS Variables for Theme Colors (Primary)
        background: {
          DEFAULT: 'var(--background)',
          alt: 'var(--background-alt)',
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          muted: 'var(--foreground-muted)',
        },
        border: {
          DEFAULT: 'var(--border)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
        },
        // Ballet-Classic Theme Palette (Named Colors)
        charcoal: {
          DEFAULT: '#18191B',
          light: '#393A3C',
          lighter: '#5A5B5D',
        },
        ivory: {
          DEFAULT: '#F7F8F9',
          light: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#E1E3E6',
          light: '#F0F1F3',
          dark: '#C8CACD',
        },
        champagne: {
          DEFAULT: '#C9A24D',
          light: '#E6D8B8',
          dark: '#B8943A',
        },
        beige: {
          DEFAULT: '#E6D8B8',
          light: '#F5EDDC',
          dark: '#D4C19A',
        },
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
      boxShadow: {
        'elegant': '0 2px 8px var(--shadow)',
        'elegant-lg': '0 4px 16px var(--shadow)',
        'elegant-xl': '0 8px 24px var(--shadow)',
      },
      borderRadius: {
        'elegant': '0.5rem',
        'elegant-sm': '0.375rem',
      },
    },
  },
  plugins: [],
};

export default config;
