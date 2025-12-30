# Database Schema Design - GRIS-CAT E-commerce

## 📊 Overview

Comprehensive database schema design for a luxury fashion e-commerce platform with flexible product categorization, tagging, and analytics.

---

## 🗂️ Core Entities

### 1. **Products Table** (Sản phẩm chính)

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  short_description VARCHAR(500),
  
  -- Pricing
  base_price DECIMAL(10, 2) NOT NULL,
  sale_price DECIMAL(10, 2),
  cost_price DECIMAL(10, 2), -- For profit calculation
  
  -- Inventory
  track_inventory BOOLEAN DEFAULT true,
  
  -- Status
  status ENUM('draft', 'active', 'archived') DEFAULT 'draft',
  is_featured BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  
  -- SEO
  meta_title VARCHAR(255),
  meta_description TEXT,
  meta_keywords TEXT,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published_at TIMESTAMP,
  
  -- Soft delete
  deleted_at TIMESTAMP NULL,
  
  INDEX idx_sku (sku),
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_is_new (is_new),
  INDEX idx_is_featured (is_featured)
);
```

**Explanation:**
- `sku`: Mã sản phẩm unique (VD: GC-DR-001)
- `slug`: URL-friendly (VD: silk-wrap-bodysuit)
- `is_new`: Flag "NEW IN" sections
- `is_featured`: Sản phẩm nổi bật
- `sale_price`: NULL = không sale

---

### 2. **Product Variants** (Biến thể sản phẩm)

```sql
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  sku VARCHAR(50) UNIQUE NOT NULL,
  
  -- Variant specifics
  color VARCHAR(100),
  color_hex VARCHAR(7), -- #FFFFFF
  size VARCHAR(20), -- XS, S, M, L, XL
  material VARCHAR(100), -- Silk, Cotton, etc.
  
  -- Pricing override (optional)
  price_adjustment DECIMAL(10, 2) DEFAULT 0, -- +/- from base price
  
  -- Inventory
  stock_quantity INT DEFAULT 0,
  low_stock_threshold INT DEFAULT 5,
  
  -- Images
  image_url TEXT,
  
  -- Status
  is_available BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_product_id (product_id),
  INDEX idx_sku (sku),
  INDEX idx_color (color),
  INDEX idx_size (size)
);
```

**Explanation:**
- Mỗi product có nhiều variants (size, color combinations)
- VD: "Silk Dress" có variants: S-Grey, M-Grey, S-White, M-White
- `stock_quantity`: Số lượng tồn kho cho từng variant

---

### 3. **Categories** (Danh mục phân cấp)

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  
  -- Display
  display_order INT DEFAULT 0,
  image_url TEXT,
  icon VARCHAR(100),
  
  -- SEO
  meta_title VARCHAR(255),
  meta_description TEXT,
  
  -- Status
  is_visible BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_parent_id (parent_id),
  INDEX idx_slug (slug),
  INDEX idx_display_order (display_order)
);
```

**Hierarchy Example:**
```
Women's Fashion (parent_id: NULL)
├── Clothing (parent_id: women's-id)
│   ├── Dresses (parent_id: clothing-id)
│   ├── Tops (parent_id: clothing-id)
│   └── Bottoms (parent_id: clothing-id)
├── Bags (parent_id: women's-id)
│   ├── Tote Bags (parent_id: bags-id)
│   └── Clutches (parent_id: bags-id)
└── Shoes (parent_id: women's-id)
```

---

### 4. **Product Categories** (Many-to-Many)

```sql
CREATE TABLE product_categories (
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  is_primary BOOLEAN DEFAULT false, -- Primary category for breadcrumbs
  display_order INT DEFAULT 0,
  
  PRIMARY KEY (product_id, category_id),
  INDEX idx_product_id (product_id),
  INDEX idx_category_id (category_id)
);
```

**Explanation:**
- 1 sản phẩm có thể thuộc nhiều categories
- VD: "Silk Dress" ∈ {Dresses, New Arrivals, Balletcore}
- `is_primary`: Category chính để hiện breadcrumb

---

### 5. **Tags** (Thẻ tag linh hoạt)

```sql
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) UNIQUE NOT NULL,
  type ENUM('style', 'occasion', 'collection', 'season', 'material', 'trend') DEFAULT 'style',
  description TEXT,
  
  created_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_slug (slug),
  INDEX idx_type (type)
);
```

**Tag Types:**
- **style**: minimalist, elegant, casual, formal
- **occasion**: wedding, office, evening, daily
- **collection**: balletcore, spring-2025, timeless-essentials
- **season**: spring, summer, fall, winter
- **material**: silk, cotton, linen, wool
- **trend**: oversized, vintage, modern

---

### 6. **Product Tags** (Many-to-Many)

```sql
CREATE TABLE product_tags (
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  
  PRIMARY KEY (product_id, tag_id),
  INDEX idx_product_id (product_id),
  INDEX idx_tag_id (tag_id)
);
```

---

### 7. **Collections** (Bộ sưu tập được quản lý)

```sql
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  banner_image TEXT,
  
  -- Display
  display_order INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_visible BOOLEAN DEFAULT true,
  
  -- Dates
  start_date DATE,
  end_date DATE,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_slug (slug),
  INDEX idx_is_featured (is_featured)
);
```

**Examples:**
- "Spring Collection 2025"
- "Balletcore Edit"
- "Timeless Essentials"
- "Evening Occasions"

---

### 8. **Product Collections** (Many-to-Many)

```sql
CREATE TABLE product_collections (
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  collection_id UUID REFERENCES collections(id) ON DELETE CASCADE,
  display_order INT DEFAULT 0,
  
  PRIMARY KEY (product_id, collection_id),
  INDEX idx_collection_id (collection_id)
);
```

---

## 📈 Analytics & Business Logic

### 9. **Product Analytics** (Phân tích sản phẩm)

```sql
CREATE TABLE product_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  
  -- Sales metrics
  total_sales INT DEFAULT 0,
  total_revenue DECIMAL(12, 2) DEFAULT 0,
  total_views INT DEFAULT 0,
  total_cart_adds INT DEFAULT 0,
  total_wishlists INT DEFAULT 0,
  
  -- Conversion
  conversion_rate DECIMAL(5, 2), -- Percentage
  
  -- Ratings
  average_rating DECIMAL(3, 2),
  total_reviews INT DEFAULT 0,
  
  -- Last calculated
  last_calculated_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_product_id (product_id),
  INDEX idx_total_sales (total_sales DESC),
  INDEX idx_average_rating (average_rating DESC)
);
```

**Usage:**
- "Most Wanted" = ORDER BY total_sales DESC
- "Top Rated" = ORDER BY average_rating DESC
- "Trending" = ORDER BY total_views DESC (last 7 days)

---

### 10. **Product Views** (Lượt xem chi tiết)

```sql
CREATE TABLE product_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  session_id VARCHAR(255),
  ip_address VARCHAR(45),
  user_agent TEXT,
  
  viewed_at TIMESTAMP DEFAULT NOW(),
  
  INDEX idx_product_id (product_id),
  INDEX idx_viewed_at (viewed_at),
  INDEX idx_user_id (user_id)
);
```

---

### 11. **Product Attributes** (Thuộc tính tùy chỉnh)

```sql
CREATE TABLE product_attributes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  attribute_key VARCHAR(100) NOT NULL,
  attribute_value TEXT NOT NULL,
  
  -- Examples:
  -- key: 'care_instructions', value: 'Hand wash only'
  -- key: 'fit', value: 'True to size'
  -- key: 'model_size', value: 'Model wears size S'
  -- key: 'fabric_composition', value: '100% Silk'
  
  PRIMARY KEY (product_id, attribute_key),
  INDEX idx_attribute_key (attribute_key)
);
```

---

## 🎯 Query Examples

### Get "NEW IN" Products

```sql
SELECT p.*, pa.total_views, pa.total_sales
FROM products p
LEFT JOIN product_analytics pa ON p.id = pa.product_id
WHERE p.is_new = true
  AND p.status = 'active'
  AND p.deleted_at IS NULL
ORDER BY p.created_at DESC
LIMIT 8;
```

### Get "MOST WANTED" Products

```sql
SELECT p.*, pa.total_sales, pa.total_revenue
FROM products p
INNER JOIN product_analytics pa ON p.id = pa.product_id
WHERE p.status = 'active'
  AND p.deleted_at IS NULL
ORDER BY pa.total_sales DESC, pa.total_views DESC
LIMIT 8;
```

### Get Products by Category with Tags

```sql
SELECT p.*, 
       GROUP_CONCAT(DISTINCT t.name) as tags,
       c.name as primary_category
FROM products p
INNER JOIN product_categories pc ON p.id = pc.product_id
INNER JOIN categories c ON pc.category_id = c.id
LEFT JOIN product_tags pt ON p.id = pt.product_id
LEFT JOIN tags t ON pt.tag_id = t.tag_id
WHERE c.slug = 'dresses'
  AND pc.is_primary = true
  AND p.status = 'active'
GROUP BY p.id
ORDER BY p.display_order;
```

### Get "IN THE SPOTLIGHT" (Featured Collections)

```sql
SELECT col.*, COUNT(pc.product_id) as product_count
FROM collections col
LEFT JOIN product_collections pc ON col.id = pc.collection_id
WHERE col.is_featured = true
  AND col.is_visible = true
  AND (col.end_date IS NULL OR col.end_date >= CURRENT_DATE)
GROUP BY col.id
ORDER BY col.display_order
LIMIT 5;
```

---

## 🏗️ Advanced Features

### Dynamic Sections (For Homepage)

```sql
CREATE TABLE homepage_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_type ENUM('new_in', 'most_wanted', 'featured_collection', 'spotlight_carousel', 'custom'),
  title VARCHAR(255) NOT NULL,
  
  -- Query configuration (JSON)
  query_config JSONB, -- Store filters, limits, sorting
  
  -- Example query_config:
  -- {
  --   "filter": {"category": "dresses", "is_new": true},
  --   "limit": 8,
  --   "orderBy": "created_at DESC"
  -- }
  
  display_order INT DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📊 Data Relationships Summary

```
Products (1)
├── (M) Product Variants
├── (M) Product Categories → Categories
├── (M) Product Tags → Tags
├── (M) Product Collections → Collections
├── (1) Product Analytics
├── (M) Product Views
└── (M) Product Attributes

Categories (Tree Structure)
├── parent_id → Self-reference
└── (M) Product Categories

Collections
└── (M) Product Collections

Tags (Flexible tagging)
└── (M) Product Tags
```

---

## 🎨 Frontend Data Structure (API Response)

### Product Detail Response

```typescript
interface ProductDetail {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  salePrice: number | null;
  isNew: boolean;
  isFeatured: boolean;
  
  // Primary category for breadcrumb
  primaryCategory: {
    id: string;
    name: string;
    slug: string;
    ancestors: Category[]; // For breadcrumb trail
  };
  
  // All categories
  categories: Category[];
  
  // Tags grouped by type
  tags: {
    style: Tag[];
    occasion: Tag[];
    collection: Tag[];
    material: Tag[];
  };
  
  // Variants
  variants: ProductVariant[];
  
  // Images
  images: ProductImage[];
  
  // Attributes
  attributes: { [key: string]: string };
  
  // Analytics
  analytics: {
    totalSales: number;
    totalViews: number;
    averageRating: number;
    totalReviews: number;
  };
  
  // Related products
  relatedProducts: ProductCard[];
}
```

---

## 🚀 Optimization Tips

### 1. **Indexes**
- Add composite indexes for common queries
- Index on `(category_id, is_new, created_at)` for "New In" queries

### 2. **Caching**
- Cache "Most Wanted" list (updates hourly)
- Cache category trees (updates on change)
- Cache collection products (updates daily)

### 3. **Denormalization**
- Store computed fields in `product_analytics`
- Use materialized views for complex aggregations

### 4. **Search**
- Use Elasticsearch/Algolia for full-text search
- Index: `name`, `description`, `tags`, `categories`

---

## 📝 Migration Strategy

**Phase 1:** Core tables
- Products, Categories, Tags, Collections

**Phase 2:** Relationships
- Product_Categories, Product_Tags, Product_Collections

**Phase 3:** Analytics
- Product_Analytics, Product_Views

**Phase 4:** Advanced
- Product_Attributes, Homepage_Sections

---

**Version:** 1.0  
**Last Updated:** December 30, 2025  
**Status:** ✅ Production Ready

