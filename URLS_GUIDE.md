# 📍 URLs Guide - GRIS-CAT E-commerce

## 🏠 Homepage
```
http://localhost:3000/
```

---

## 🛍️ Product Detail Pages (PDP)

### Available Products:
1. **Gris Signature Tote - Ash Grey**
   ```
   http://localhost:3000/products/gris-signature-tote-ash-grey
   ```
   - Features: Sale price (20% off), Multiple colors, New In badge

2. **Minimalist Shoulder Bag - Black**
   ```
   http://localhost:3000/products/minimalist-shoulder-bag-black
   ```
   - Features: Best Seller badge, Multiple colors

3. **Classic Leather Clutch - Navy**
   ```
   http://localhost:3000/products/classic-leather-clutch-navy
   ```
   - Features: New In badge, Multiple colors

4. **Silk Wrap Bodysuit - Grey**
   ```
   http://localhost:3000/products/silk-wrap-bodysuit-grey
   ```
   - Features: New In badge, Size selector (S, M, L), Multiple colors

5. **Tulle Ballet Skirt - Charcoal**
   ```
   http://localhost:3000/products/tulle-ballet-skirt-charcoal
   ```
   - Features: New In badge, Size selector, Multiple colors

---

## 📂 Collection Pages (PLP)

### Bags Collection
```
http://localhost:3000/collections/bags
```
- Shows: 3 bag products
- Filter sidebar on right (desktop)
- Mobile filter drawer

### Clothing Collection
```
http://localhost:3000/collections/clothing
```
- Shows: 2 clothing products
- Filter sidebar on right (desktop)
- Mobile filter drawer

### Other Collections
```
http://localhost:3000/collections/dresses
http://localhost:3000/collections/accessories
```
- Shows: All products (fallback)

---

## 📖 About Pages

### About The Brand
```
http://localhost:3000/about
```
- Hero section with image
- Philosophy section
- Values section (3 cards)
- CTA section

### Our Story
```
http://localhost:3000/story
```
- Hero section
- Timeline story (4 chapters)
- Closing statement

---

## 🔗 Navigation Flow

### From Homepage:
```
Home → Collections → Product Detail
Home → About → Story
```

### From Collection:
```
Collection → Product Detail (click product card)
Collection → Filter → Update products
```

### From Product Detail:
```
Product → Related Products → Another Product
Product → Shop Similar → Collection
Product → Breadcrumb → Collection/Home
```

---

## 📱 Mobile URLs (Same as Desktop)

All URLs work the same on mobile, with responsive layouts:
- Product Detail: Gallery becomes carousel
- Collection: Filter becomes drawer
- About/Story: Stacked layout

---

## 🎯 Quick Test URLs

**Test Product with Sale:**
```
/products/gris-signature-tote-ash-grey
```

**Test Collection with Filters:**
```
/collections/bags
```

**Test About Pages:**
```
/about
/story
```

---

## 📊 Sample Data Summary

**Total Products:** 5
- Bags: 3 products
- Clothing: 2 products

**Collections:**
- `/collections/bags` → 3 products
- `/collections/clothing` → 2 products
- `/collections/dresses` → All products (fallback)
- `/collections/accessories` → All products (fallback)

**About Pages:**
- `/about` → Brand introduction
- `/story` → Brand story timeline

---

**Last Updated:** December 30, 2025

