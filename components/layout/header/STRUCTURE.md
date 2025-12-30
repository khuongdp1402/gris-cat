# Header Visual Structure

## 🖥️ Desktop Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ ROW 1 (h-70px, STICKY, Always visible)                         │
│                                                                 │
│  ABOUT | OUR STORY    [GRIS-CAT]    🔍 ♡ 👤 🛒 🌐           │
│  (Left Links)         (Center)       (Right Icons + Settings)   │
├─────────────────────────────────────────────────────────────────┤
│ ROW 2 (h-56px, COLLAPSES on scroll > 50px)                    │
│                                                                 │
│         NEW ARRIVALS  CLOTHING  DRESSES  BAGS  ACCESSORIES     │
│                     (Centered Category Links)                   │
└─────────────────────────────────────────────────────────────────┘

When scrollY > 50px:
┌─────────────────────────────────────────────────────────────────┐
│ ROW 1 (h-70px, STICKY)                                         │
│  ABOUT | OUR STORY    [GRIS-CAT]    🔍 ♡ 👤 🛒 🌐           │
└─────────────────────────────────────────────────────────────────┘
         ↑ ROW 2 collapsed (height: 0, opacity: 0)
```

## 📱 Mobile Layout

### Closed State
```
┌─────────────────────────────┐
│ ☰   [GRIS-CAT]   🛒(0)     │  h-60px
└─────────────────────────────┘
```

### Open Drawer (Level 0 - Main Menu)
```
┌──────────────────────┐
│   Menu          ✕    │  ← Header (Close button)
├──────────────────────┤
│                      │
│ NEW ARRIVALS         │
│ CLOTHING          ›  │  ← Has submenu
│ DRESSES              │
│ BAGS              ›  │
│ ACCESSORIES       ›  │
│                      │
├──────────────────────┤
│ Quick Actions        │
│ [🔍 Search] [♡] [👤] │
├──────────────────────┤
│                      │  ↓ Scroll
│ About The Brand      │
│ Our Story            │
│ Contact              │
│                      │
│ Language: [EN] [VN]  │
│ Theme: [☀️] [🌙]     │  ← Footer (Always visible)
└──────────────────────┘
```

### Open Drawer (Level 1 - Submenu)
```
┌──────────────────────┐
│ ‹  CLOTHING      ✕   │  ← Back + Close buttons
├──────────────────────┤
│                      │
│ Tops                 │
│ Bottoms              │
│ Dresses              │
│ Outerwear            │
│                      │
│                      │
│                      │
│                      │
│                      │
└──────────────────────┘
```

## 🎯 Component Hierarchy

```
Header (Main)
├── DesktopHeader (lg:block)
│   ├── Row 1 (Main Bar)
│   │   ├── Left: Utility Links
│   │   ├── Center: Brand Name
│   │   └── Right: Icons + SettingsPopover
│   └── Row 2 (Categories)
│       └── AnimatePresence wrapper
│
└── MobileHeader (lg:hidden)
    ├── Navbar (Hamburger - Brand - Cart)
    └── MobileMenuDrawer
        ├── Drawer Header (Back - Title - Close)
        ├── Content (Level 0 or Level 1)
        │   ├── Main Menu (categories)
        │   ├── Quick Actions (Search, Wishlist, Account)
        │   └── Sub Menu (if selected)
        └── Footer (Utility + Settings)
```

## 🎬 Animations

### Desktop Row 2 Collapse
```typescript
<AnimatePresence>
  {!isScrolled && (
    <motion.div
      initial={{ height: 56, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  )}
</AnimatePresence>
```

### Mobile Drawer Slide
```typescript
<motion.div
  initial={{ x: "-100%" }}
  animate={{ x: 0 }}
  exit={{ x: "-100%" }}
  transition={{ type: "spring", damping: 30, stiffness: 300 }}
/>
```

### Menu Level Transitions
```typescript
// Main → Sub
initial={{ x: 20, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}

// Sub → Main
initial={{ x: -20, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
```

## 📊 State Management

### Desktop
- `isScrolled`: Boolean (scrollY > 50)
- `showSettings`: Boolean (popover open/close)

### Mobile
- `isDrawerOpen`: Boolean (drawer visibility)
- `activeSubMenu`: string | null (current submenu ID)

## 🎨 Styling Guidelines

### Colors
- Background: `bg-white dark:bg-[#1a202c]`
- Text: `text-gray-700 dark:text-gray-300`
- Hover: `hover:text-gray-900 dark:hover:text-white`
- Border: `border-gray-100 dark:border-gray-800`

### Typography
- Brand Name: `font-playfair` (Serif)
- UI Text: `font-sans` (Inter/Montserrat)
- Category Links: `text-xs font-bold uppercase tracking-widest`

### Spacing
- Desktop Height: Row 1 = 70px, Row 2 = 56px
- Mobile Height: 60px
- Drawer Width: 85vw (max 384px)

## 🔍 Responsive Breakpoints

- Mobile: `< 1024px` (lg:hidden)
- Desktop: `≥ 1024px` (hidden lg:block)

## ⚡ Performance Optimizations

1. **Lazy animations**: AnimatePresence prevents layout thrashing
2. **Passive scroll**: `{ passive: true }` for scroll listeners
3. **Click outside**: Efficient event cleanup in popover
4. **Conditional rendering**: Mobile/Desktop components separated

