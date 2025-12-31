# Ballet-Classic Theme Design System

## Overview
A refined, elegant, timeless design system inspired by ballet studios, Parisian fashion houses, and classic editorial magazines. The theme embodies quiet luxury, feminine grace, and understated sophistication.

## Design Principles

### Core Values
- **Elegant**: Timeless, refined, sophisticated
- **Feminine**: Graceful, soft, delicate
- **Quiet Luxury**: Understated, not ostentatious
- **Ballet-Inspired**: Classic, graceful, poised
- **Calm**: Peaceful, serene, tranquil

### Design Rules
- ❌ No neon colors
- ❌ No futuristic elements
- ❌ No aggressive design
- ✅ Generous white space
- ✅ Soft, diffused shadows
- ✅ Subtle rounded corners
- ✅ Smooth color transitions
- ✅ Editorial typography

---

## Color Palette

### Primary: Cool Charcoal Gray
The foundation of the theme, providing depth and sophistication.

- **Charcoal**: `#18191B` - Main dark tone
- **Charcoal Light**: `#393A3C` - Lighter variant for dark mode surfaces
- **Charcoal Lighter**: `#5A5B5D` - Even lighter for subtle elements

**Usage:**
- Dark mode backgrounds
- Primary text in light mode
- Borders and dividers

### Soft White & Ivory
Clean, elegant backgrounds that feel warm and inviting.

- **White**: `#FFFFFF` - Pure white for light mode
- **Ivory**: `#F7F8F9` - Soft, warm white with subtle warmth

**Usage:**
- Light mode backgrounds
- Card surfaces
- Clean, minimal spaces

### Muted Light Gray
Subtle UI elements that don't compete with content.

- **Muted**: `#E1E3E6` - Primary muted gray
- **Muted Light**: `#F0F1F3` - Lighter variant
- **Muted Dark**: `#C8CACD` - Darker variant

**Usage:**
- Borders
- Dividers
- Subtle UI elements
- Disabled states

### Accent: Soft Champagne Gold
Used sparingly for key interactions and highlights.

- **Champagne**: `#C9A24D` - Primary accent
- **Champagne Light**: `#E6D8B8` - Lighter, warmer variant
- **Champagne Dark**: `#B8943A` - Darker, richer variant

**Usage:**
- Hover states
- Focus indicators
- Key actions (buttons, links)
- Subtle highlights
- **Never used for large areas**

### Warm Beige
Complements champagne for a cohesive, warm accent palette.

- **Beige**: `#E6D8B8` - Primary beige
- **Beige Light**: `#F5EDDC` - Lighter variant
- **Beige Dark**: `#D4C19A` - Darker variant

**Usage:**
- Secondary accents
- Backgrounds for special sections
- Warm, inviting elements

---

## Light Mode

### Backgrounds
```css
--background: #FFFFFF        /* Main background */
--background-alt: #F7F8F9    /* Alternative surfaces */
--surface: #F7F8F9          /* Cards, elevated surfaces */
```

### Text
```css
--foreground: #18191B        /* Primary text (cool charcoal) */
--foreground-muted: #393A3C  /* Secondary text */
```

### Borders & Dividers
```css
--border: #E1E3E6            /* Subtle, muted gray */
```

### Shadows
```css
--shadow: rgba(24, 25, 27, 0.08)  /* Soft, diffused, light */
```

### Buttons
- **Default**: Muted gray background
- **Hover**: Champagne gold accent
- **Active**: Slightly darker champagne

---

## Dark Mode

### Backgrounds
```css
--background: #18191B        /* Deep charcoal (not pure black) */
--background-alt: #393A3C    /* Slightly lighter layers */
--surface: #393A3C          /* Cards, elevated surfaces */
```

### Text
```css
--foreground: #F7F8F9        /* Soft white (not pure white) */
--foreground-muted: #E1E3E6  /* Muted gray for secondary text */
```

### Borders & Dividers
```css
--border: #393A3C            /* Muted gray */
```

### Shadows
```css
--shadow: rgba(0, 0, 0, 0.3)  /* Deeper, more pronounced */
```

### Accents
- **Champagne Gold**: Subtly glowing, never bright
- **Icons**: Muted gray
- **Dividers**: Soft, subtle

---

## Typography

### Font Families
- **Serif (Headings)**: Playfair Display
  - Editorial, fashion-inspired
  - Used for: H1, H2, H3, H4, H5, H6
  - Weights: 400, 500, 600, 700

- **Sans-Serif (Body)**: Montserrat
  - Clean, modern, readable
  - Used for: Body text, UI elements
  - Weights: 300, 400, 500, 600

### Typography Guidelines
- **Letter Spacing**: Tight (-0.02em) for headings
- **Line Height**: Generous for readability
- **Font Sizes**: Editorial scale
- **Hierarchy**: Clear, elegant distinction

---

## Spacing & Layout

### White Space
- **Generous**: Allow content to breathe
- **Elegant**: Not cramped, not sparse
- **Balanced**: Visual harmony

### Grid System
- **Max Width**: 1440px (elegant, not too wide)
- **Padding**: Generous (px-6, py-12)
- **Gaps**: Comfortable spacing between elements

---

## Components

### Buttons
```tsx
// Primary Button
className="bg-muted text-foreground hover:bg-accent hover:text-white 
          transition-all duration-300 rounded-elegant px-6 py-3"

// Secondary Button
className="border border-border text-foreground hover:border-accent 
          hover:text-accent transition-all duration-300 rounded-elegant"
```

### Cards
```tsx
className="bg-surface border border-border rounded-elegant 
          shadow-elegant p-6"
```

### Inputs
```tsx
className="bg-background border border-border rounded-elegant-sm 
          px-4 py-2 text-foreground focus:border-accent 
          focus:ring-2 focus:ring-accent/20"
```

---

## Transitions

### Smooth Color Transitions
- **Duration**: 300ms (standard), 500ms (theme switch)
- **Easing**: `ease-in-out`
- **Properties**: All color-related properties

### Animation Guidelines
- **Subtle**: Never aggressive or jarring
- **Smooth**: Always use easing functions
- **Purposeful**: Every animation has a reason

---

## Usage Examples

### Light Mode Card
```tsx
<div className="bg-surface border border-border rounded-elegant 
                shadow-elegant p-8">
  <h2 className="font-playfair text-2xl text-foreground mb-4">
    Elegant Heading
  </h2>
  <p className="text-foreground-muted">
    Soft, calm, sophisticated content.
  </p>
</div>
```

### Dark Mode Card
```tsx
<div className="bg-surface border border-border rounded-elegant 
                shadow-elegant-lg p-8">
  <h2 className="font-playfair text-2xl text-foreground mb-4">
    Elegant Heading
  </h2>
  <p className="text-foreground-muted">
    Soft, calm, sophisticated content.
  </p>
</div>
```

### Accent Button
```tsx
<button className="bg-muted text-foreground hover:bg-accent 
                   hover:text-white transition-all duration-300 
                   rounded-elegant px-8 py-3 font-medium">
  Shop Now
</button>
```

---

## Mood & Inspiration

### Visual References
- **Luxury Ballet Studios**: Soft lighting, elegant spaces
- **Parisian Fashion Houses**: Timeless, refined, sophisticated
- **Classic Editorial Magazines**: Clean layouts, generous white space
- **Quiet Luxury Brands**: Understated elegance, not flashy

### Emotional Tone
- **Calm**: Peaceful, serene
- **Graceful**: Smooth, flowing
- **Elegant**: Refined, sophisticated
- **Understated**: Not loud, not aggressive
- **Feminine**: Soft, delicate, graceful

---

## Implementation Notes

### CSS Variables
All theme colors are defined as CSS variables for easy theme switching:
- `var(--background)`
- `var(--foreground)`
- `var(--accent)`
- etc.

### Tailwind Classes
Use semantic color classes:
- `bg-background` (not `bg-white`)
- `text-foreground` (not `text-gray-900`)
- `border-border` (not `border-gray-200`)

### Theme Switching
Smooth transitions between light and dark modes:
- 500ms duration for theme switch
- All color properties transition smoothly
- No jarring color changes

---

## Checklist

When implementing components:
- ✅ Use CSS variables for colors
- ✅ Apply smooth transitions
- ✅ Maintain generous white space
- ✅ Use subtle rounded corners
- ✅ Apply soft, diffused shadows
- ✅ Use accent colors sparingly
- ✅ Ensure elegant typography
- ✅ Test in both light and dark modes

