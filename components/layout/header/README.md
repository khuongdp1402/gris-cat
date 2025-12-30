# Header Component Structure

Comprehensive header system for GRIS-CAT luxury e-commerce site.

## 📁 File Structure

```
header/
├── Header.tsx              # Main export (switches Desktop/Mobile)
├── DesktopHeader.tsx       # Desktop 2-row layout
├── MobileHeader.tsx        # Mobile navbar
├── MobileMenuDrawer.tsx    # Multi-level drawer navigation
├── SettingsPopover.tsx     # Language & Theme settings
├── index.ts               # Barrel exports
└── README.md              # This file
```

## 🖥️ Desktop Header (2 Rows)

### Row 1: Main Top Bar (70px, Sticky)
- **Left:** "ABOUT THE BRAND", "OUR STORY" links
- **Center:** "GRIS-CAT" brand name (Serif, text-3xl)
- **Right:** Search, Heart, User, Cart icons + Settings button

### Row 2: Category Navigation (56px, Collapsible)
- Centered links: "NEW ARRIVALS", "CLOTHING", "DRESSES", "BAGS", "ACCESSORIES"
- **Auto-hides** when `scrollY > 50px` using Framer Motion

## 📱 Mobile Layout

### Navbar (60px)
- **Left:** Hamburger menu
- **Center:** Brand name
- **Right:** Cart icon

### Drawer Navigation (Multi-level)
- Slides in from left
- **Level 0 (Root):** Main categories
- **Level 1 (Sub-menu):** Sub-categories with back button
- **Footer:** Utility links + Settings (Language/Theme)

## 🎨 Features

### Settings Management
- **Desktop:** Popover dropdown (Globe icon)
- **Mobile:** Integrated in drawer footer
- **Options:** 
  - Language: EN / VN
  - Theme: Light / Dark

### Animations
- Row 2 collapse: `AnimatePresence` + height/opacity
- Drawer slide: Spring animation
- Menu transitions: Smooth slide effects

### Responsive
- Desktop: `hidden lg:block`
- Mobile: `lg:hidden`
- Breakpoint: 1024px (lg)

## 🔧 Usage

```tsx
import { Header } from "@/components/layout";

export default function Layout() {
  return (
    <>
      <Header />
      {/* Your content */}
    </>
  );
}
```

## 📝 Customization

### Add New Category
Edit `DesktopHeader.tsx` and `MobileMenuDrawer.tsx`:

```tsx
const CATEGORIES = [
  { label: "NEW ITEM", href: "/new-item" },
  // ...
];
```

### Add Sub-menu
Edit `MENU_ITEMS` in `MobileMenuDrawer.tsx`:

```tsx
{
  id: "clothing",
  label: "CLOTHING",
  href: "/clothing",
  subMenu: [
    { label: "New Sub Item", href: "/clothing/new" },
  ],
}
```

## 🎯 Tech Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- TypeScript

