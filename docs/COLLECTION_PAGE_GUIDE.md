# Collection Page (PLP) - Implementation Guide

## 📁 File Structure

```
app/collections/[slug]/
├── page.tsx                    # Server component (SEO, metadata)
└── CollectionContent.tsx       # Client component (interactions)

components/collection/
├── FilterSidebar.tsx          # Desktop filter sidebar (right side)
├── MobileFilterDrawer.tsx     # Mobile filter drawer (slides from right)
└── index.ts                   # Barrel exports
```

---

## 🎨 Layout Overview

### Desktop (≥ 1024px)
```
┌─────────────────────────────────────────────────┐
│ Breadcrumbs: Home / Collections / Bags         │
├─────────────────────────────────────────────────┤
│              WOMEN'S BAGS (Title)               │
│          Description text (centered)            │
├─────────────────────────────────────────────────┤
│ Showing 1-12 of 45      Sort by: [Dropdown] [🔧]│
├─────────────────────────────────────────────────┤
│                                                 │
│ ┌─────────────────────┬─────────────────────┐ │
│ │ Product Grid (3col) │ Filter Sidebar (1c) │ │
│ │                     │                     │ │
│ │ [Product] [Product] │ ▼ Category         │ │
│ │ [Product]           │ ▼ Color            │ │
│ │                     │ ▼ Price Range      │ │
│ │ [Product] [Product] │ ▼ Material         │ │
│ │ [Product]           │                     │ │
│ │                     │                     │ │
│ │  [LOAD MORE]        │                     │ │
│ └─────────────────────┴─────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Mobile (< 1024px)
```
┌─────────────────────────────┐
│ Breadcrumbs                 │
├─────────────────────────────┤
│     WOMEN'S BAGS            │
│     Description             │
├─────────────────────────────┤
│ Showing...  [Filters] [Sort]│
├─────────────────────────────┤
│                             │
│ [Product]    [Product]      │  2 columns
│ [Product]    [Product]      │
│ [Product]    [Product]      │
│                             │
│      [LOAD MORE]            │
└─────────────────────────────┘

Filter Drawer (slides from right):
┌─────────────────────┐
│ Filters        [X]  │
├─────────────────────┤
│ + Category          │
│ + Color             │
│ + Price Range       │
│ + Material          │
├─────────────────────┤
│ [Apply Filters]     │
│ [Clear All]         │
└─────────────────────┘
```

---

## 🔧 Component Details

### 1. **page.tsx** (Server Component)

**Purpose:** Handle server-side data fetching, SEO, metadata

**Key Features:**
- Dynamic route: `/collections/[slug]`
- `generateMetadata()` for SEO
- Fetches collection data server-side
- Passes data to client component

**Example URL:**
- `/collections/bags` → Women's Bags collection
- `/collections/dresses` → Dresses collection

---

### 2. **CollectionContent.tsx** (Client Component)

**Purpose:** Main interactive page logic

**State Management:**
```typescript
const [products, setProducts] = useState([]);      // Product list
const [isLoading, setIsLoading] = useState(false); // Load more state
const [sortBy, setSortBy] = useState("featured");  // Sort option
const [activeFilters, setActiveFilters] = useState([]); // Selected filters
const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
```

**Key Sections:**
1. **Breadcrumbs** - Navigation trail
2. **Page Header** - Title + Description (centered)
3. **Toolbar** - Item count + Sort dropdown + Mobile filter button
4. **Active Filters** - Removable filter chips
5. **Grid Layout** - 3 cols (products) + 1 col (sidebar)
6. **Load More** - Button with loading state

**Grid Configuration:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  {/* Products: 3 columns */}
  <div className="lg:col-span-3">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
      {products.map(product => <ProductCard {...product} />)}
    </div>
  </div>
  
  {/* Sidebar: 1 column */}
  <div className="hidden lg:block lg:col-span-1">
    <FilterSidebar />
  </div>
</div>
```

---

### 3. **FilterSidebar.tsx**

**Purpose:** Desktop filter panel (right side)

**Filter Sections:** (All COLLAPSED by default)
1. **Category** - Checkboxes with counts
2. **Color** - Color swatches (circular)
3. **Price Range** - Min/Max inputs
4. **Material** - Checkboxes with counts

**Accordion Behavior:**
```typescript
const [expandedSections, setExpandedSections] = useState<string[]>([]);

const toggleSection = (section: string) => {
  setExpandedSections(prev =>
    prev.includes(section)
      ? prev.filter(s => s !== section)
      : [...prev, section]
  );
};
```

**Icons:**
- Collapsed: `<Plus />` (+)
- Expanded: `<Minus />` (-)

**Color Filter Design:**
```tsx
<div
  className="w-6 h-6 rounded-full border-2"
  style={{ backgroundColor: color.hex }}
/>
```

**Selection State:**
- Selected items get visual feedback (ring, bold, etc.)
- Checkboxes for categories/materials
- Color swatches have ring effect when selected

---

### 4. **MobileFilterDrawer.tsx**

**Purpose:** Mobile filter overlay

**Animation:**
- Slides from RIGHT (not left)
- Backdrop with blur
- Framer Motion spring physics

**Layout:**
```tsx
<motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  className="fixed right-0 top-0 bottom-0 w-[85vw]"
>
  {/* Header */}
  {/* Scrollable Content (FilterSidebar reused) */}
  {/* Footer Actions */}
</motion.div>
```

**Footer Actions:**
- **Apply Filters** - Primary button (dark)
- **Clear All** - Secondary button (outline)

---

## 🎨 Styling Guidelines

### Typography
```tsx
// Page Title
className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold"

// Section Headers (Filter titles)
className="text-sm font-bold uppercase tracking-wider"

// Body Text
className="text-sm text-gray-700 dark:text-gray-300"
```

### Colors
```tsx
// Borders
className="border-gray-200 dark:border-gray-800"

// Background (hover)
className="hover:bg-gray-50 dark:hover:bg-gray-900/50"

// Text
className="text-gray-900 dark:text-gray-100"  // Primary
className="text-gray-600 dark:text-gray-400"  // Secondary
```

### Spacing
```tsx
// Section gaps
className="space-y-0"  // Filters have no gap (borders separate them)

// Grid gaps
className="gap-x-4 gap-y-10"  // Products

// Container padding
className="px-6 py-12"  // Main content
```

---

## 🔍 Filter Logic

### Filter State Structure
```typescript
interface Filters {
  categories: string[];
  colors: string[];
  materials: string[];
  priceRange: {
    min: string;
    max: string;
  };
}
```

### Filter Application Flow
```
1. User checks/unchecks filter
   ↓
2. Local state updates
   ↓
3. onFilterChange callback fires
   ↓
4. Parent component (CollectionContent) updates
   ↓
5. Products list re-fetches/filters
   ↓
6. Active filter chips display
```

### URL Query Params (Recommended)
```typescript
// Example: /collections/bags?color=black&material=leather&sort=price_asc

const searchParams = useSearchParams();
const router = useRouter();

const updateFilters = (newFilters: Filters) => {
  const params = new URLSearchParams();
  newFilters.colors.forEach(c => params.append('color', c));
  newFilters.materials.forEach(m => params.append('material', m));
  
  router.push(`?${params.toString()}`);
};
```

---

## 📦 Sort Options

```typescript
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "name_asc", label: "Name: A to Z" },
];
```

**Backend Mapping:**
```sql
-- Featured
ORDER BY is_featured DESC, display_order ASC

-- Newest
ORDER BY created_at DESC

-- Price Low-High
ORDER BY price ASC

-- Price High-Low
ORDER BY price DESC

-- Name A-Z
ORDER BY name ASC
```

---

## 🔄 Load More Implementation

### Current: Append to List
```typescript
const handleLoadMore = async () => {
  setIsLoading(true);
  
  const nextPage = Math.floor(products.length / 12) + 1;
  const newProducts = await fetchProducts({
    page: nextPage,
    limit: 12,
    filters: activeFilters
  });
  
  setProducts([...products, ...newProducts]);
  setIsLoading(false);
};
```

### Button State
```tsx
<button
  onClick={handleLoadMore}
  disabled={isLoading || !hasMore}
  className="px-12 py-3 border-2 border-gray-900"
>
  {isLoading ? (
    <span>
      <Spinner /> Loading...
    </span>
  ) : (
    "LOAD MORE"
  )}
</button>
```

---

## 📱 Responsive Behavior

### Breakpoints
```typescript
// Mobile: < 768px
- 2-column product grid
- Hidden sidebar
- Filter button in toolbar
- Drawer slides from right

// Tablet: 768px - 1023px
- 3-column product grid
- Hidden sidebar
- Filter drawer

// Desktop: ≥ 1024px
- 3-column product grid
- Visible sidebar (right)
- No filter button needed
```

### Grid Classes
```tsx
// Products container
className="grid grid-cols-2 md:grid-cols-3"

// Main layout
className="grid grid-cols-1 lg:grid-cols-4"

// Products area
className="lg:col-span-3"

// Sidebar area
className="hidden lg:block lg:col-span-1"
```

---

## 🎯 Active Filter Chips

**Location:** Above product grid

**Design:**
```tsx
<button className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 rounded-full">
  Black <X className="w-3 h-3" />
</button>
```

**Behavior:**
- Click X to remove individual filter
- "Clear all" link to reset all filters
- Only shows when filters are active

---

## ⚡ Performance Tips

### 1. **Debounce Filter Updates**
```typescript
import { useDebouncedCallback } from 'use-debounce';

const debouncedFilterChange = useDebouncedCallback(
  (filters) => onFilterChange(filters),
  300
);
```

### 2. **Virtualize Long Lists**
For 100+ products, consider `react-window`:
```typescript
import { FixedSizeGrid } from 'react-window';
```

### 3. **Image Optimization**
```tsx
<Image
  src={product.image}
  sizes="(max-width: 768px) 50vw, 33vw"
  loading="lazy"
/>
```

### 4. **Prefetch on Hover**
```tsx
<Link
  href={`/products/${product.slug}`}
  prefetch={true}
>
```

---

## 🔗 Integration Points

### API Calls
```typescript
// GET /collections/:slug
// Response: { name, description, breadcrumb, productCount }

// GET /collections/:slug/products
// Query params: ?page=1&limit=12&color=black&sort=price_asc
// Response: { data: Product[], meta: { page, total, hasMore } }
```

### Example Integration
```typescript
"use client";

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

export function CollectionContent({ collection }) {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'featured';
  const colors = searchParams.getAll('color');
  
  const { data, isLoading } = useSWR(
    `/api/collections/${collection.slug}/products?${searchParams}`,
    fetcher
  );
  
  return (
    // ... render with data.products
  );
}
```

---

## ✅ Checklist

### Desktop
- [ ] Breadcrumbs display correctly
- [ ] Page title and description centered
- [ ] Toolbar shows count and sort
- [ ] Product grid shows 3 columns
- [ ] Sidebar displays on right (1 column)
- [ ] All filters collapsed by default
- [ ] Plus/Minus icons toggle
- [ ] Color swatches work
- [ ] Price inputs functional
- [ ] Load More button works
- [ ] Active filters display as chips

### Mobile
- [ ] Breadcrumbs readable
- [ ] Title scales down
- [ ] Filter button in toolbar
- [ ] Product grid shows 2 columns
- [ ] Drawer slides from right
- [ ] Drawer header has close button
- [ ] Filters scroll in drawer
- [ ] Apply Filters button works
- [ ] Clear All button works
- [ ] Backdrop closes drawer

### Dark Mode
- [ ] All sections have dark variants
- [ ] Borders visible in dark
- [ ] Text readable
- [ ] Hover states work
- [ ] Icons visible

---

## 📝 Next Steps

1. **Connect to Real API**
   - Replace mock data with API calls
   - Handle loading states
   - Handle errors

2. **Add URL State**
   - Sync filters with URL
   - Enable bookmarking
   - Enable back button

3. **Add Analytics**
   - Track filter usage
   - Track sort changes
   - Track load more clicks

4. **SEO Enhancements**
   - Add canonical URLs
   - Add JSON-LD structured data
   - Add Open Graph tags

---

**Version:** 1.0  
**Last Updated:** December 30, 2025  
**Status:** ✅ Complete

