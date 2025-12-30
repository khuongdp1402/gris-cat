# Header Migration Guide

## 🎯 What Changed

The header has been completely refactored from a single-file component to a **modular, professional structure** for luxury e-commerce.

## 📦 New Structure

### Before
```
components/layout/
└── Header.tsx (single file, ~160 lines)
```

### After
```
components/layout/
├── Header.backup.tsx (old header, preserved)
└── header/ (new modular structure)
    ├── Header.tsx (main export)
    ├── DesktopHeader.tsx (2-row desktop layout)
    ├── MobileHeader.tsx (mobile navbar)
    ├── MobileMenuDrawer.tsx (multi-level drawer)
    ├── SettingsPopover.tsx (language + theme)
    ├── index.ts (barrel exports)
    ├── README.md (documentation)
    ├── STRUCTURE.md (visual guide)
    └── MIGRATION.md (this file)
```

## ✨ New Features

### Desktop (2 Rows)
1. **Row 1 (Always visible, 70px)**
   - Utility links (ABOUT THE BRAND, OUR STORY)
   - Brand name (center, text-only, no icon)
   - Icons (Search, Heart, User, Cart)
   - Settings button (Language + Theme dropdown)

2. **Row 2 (Auto-collapse on scroll, 56px)**
   - Category navigation (NEW ARRIVALS, CLOTHING, etc.)
   - Hides smoothly when scrollY > 50px

### Mobile
1. **Navbar**
   - Hamburger - Brand - Cart
   
2. **Multi-level Drawer**
   - Level 0: Main categories
   - Level 1: Sub-categories with back button
   - Footer: Utility links + Settings

3. **Settings in Drawer**
   - Language switcher (EN/VN)
   - Theme toggle (Light/Dark)

## 🔄 Breaking Changes

### Import Path (Same)
```tsx
// Still works the same
import { Header } from "@/components/layout";
```

### Component API (Same)
```tsx
// Usage hasn't changed
<Header />
```

## 🚀 What You Need to Do

### Nothing! 

The import path and API are **100% compatible**. The refactor is internal only.

### Optional: Remove Old Files

If everything works, you can safely delete:
```bash
# Optional cleanup
rm components/layout/Header.backup.tsx
```

## 📝 Customization

### Adding Categories

Edit both `DesktopHeader.tsx` and `MobileMenuDrawer.tsx`:

```tsx
// DesktopHeader.tsx - Row 2
const CATEGORIES = [
  { label: "YOUR NEW CATEGORY", href: "/your-category" },
  // ...
];

// MobileMenuDrawer.tsx - Main menu
const MENU_ITEMS = [
  {
    id: "your-category",
    label: "YOUR NEW CATEGORY",
    href: "/your-category",
    subMenu: [ // Optional
      { label: "Subcategory 1", href: "/your-category/sub1" },
    ],
  },
];
```

### Adjusting Scroll Threshold

```tsx
// DesktopHeader.tsx - Line ~35
setIsScrolled(window.scrollY > 50); // Change this value
```

### Modifying Settings

```tsx
// SettingsPopover.tsx
// Edit language options, theme toggles, etc.
```

## 🎨 Style Differences

### Old Header
- Single row
- Logo placeholder (140px left)
- Navigation in center
- Transparent → White on scroll

### New Header

**Desktop:**
- Two rows (Row 1 + Row 2)
- Brand name centered (text-only)
- Utility links (left)
- Settings dropdown (right)
- Row 2 collapses on scroll

**Mobile:**
- Clean navbar
- Full-featured drawer with sub-menus
- Settings integrated in drawer footer

## 🐛 Potential Issues

### Issue 1: MotionLogo Conflict
The old header had a logo placeholder. The new header has the brand name centered.

**Solution:** You may need to adjust `MotionLogo.tsx` positioning if you're using it.

### Issue 2: MobileDrawer Import
The old header used `MobileDrawer` from `./MobileDrawer`. 

**Status:** This is now internal to the header module. External `MobileDrawer` is no longer needed by Header.

### Issue 3: Navigation Links
The old header had different nav items.

**Solution:** Update `CATEGORIES` in `DesktopHeader.tsx` and `MENU_ITEMS` in `MobileMenuDrawer.tsx` to match your site structure.

## ✅ Testing Checklist

- [ ] Desktop header renders correctly
- [ ] Row 2 collapses on scroll (desktop)
- [ ] Settings popover opens/closes (desktop)
- [ ] Mobile navbar displays
- [ ] Mobile drawer opens/closes
- [ ] Sub-menu navigation works (mobile)
- [ ] Back button works in sub-menus (mobile)
- [ ] Settings work in drawer footer (mobile)
- [ ] All links navigate correctly
- [ ] Dark mode works
- [ ] Responsive breakpoints work (1024px)

## 📞 Support

If you encounter issues:

1. Check `Header.backup.tsx` for the old implementation
2. Review `STRUCTURE.md` for visual layout
3. See `README.md` for usage examples

## 🎯 Rollback (If Needed)

```tsx
// components/layout/index.ts
export { HeaderBackup as Header } from './Header.backup';
```

Then restart your dev server.

---

**Note:** The old header is preserved in `Header.backup.tsx` for reference. You can safely delete it after confirming the new header works perfectly.

