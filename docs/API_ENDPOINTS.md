# API Endpoints Design - GRIS-CAT E-commerce

## 📚 API Structure Overview

Base URL: `https://api.griscat.com/v1`

---

## 🛍️ Products API

### 1. Get Products List (with filters)

```http
GET /products
```

**Query Parameters:**
```typescript
{
  category?: string;        // Category slug
  tags?: string[];          // Array of tag slugs
  collection?: string;      // Collection slug
  isNew?: boolean;
  isFeatured?: boolean;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sort?: 'newest' | 'price_asc' | 'price_desc' | 'popular' | 'rating';
  page?: number;            // Default: 1
  limit?: number;           // Default: 20, Max: 100
}
```

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "sku": "GC-DR-001",
      "name": "Silk Wrap Bodysuit",
      "slug": "silk-wrap-bodysuit",
      "price": 1150000,
      "salePrice": null,
      "isNew": true,
      "isFeatured": false,
      "imageMain": "https://cdn.griscat.com/...",
      "imageHover": "https://cdn.griscat.com/...",
      "primaryCategory": {
        "id": "uuid",
        "name": "Dresses",
        "slug": "dresses"
      },
      "colors": [
        { "name": "Grey", "hex": "#718096" },
        { "name": "White", "hex": "#FFFFFF" }
      ],
      "analytics": {
        "totalSales": 245,
        "averageRating": 4.5
      }
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 156,
    "totalPages": 8
  }
}
```

### 2. Get Product Detail

```http
GET /products/:slug
```

**Response:**
```json
{
  "data": {
    "id": "uuid",
    "sku": "GC-DR-001",
    "name": "Silk Wrap Bodysuit",
    "slug": "silk-wrap-bodysuit",
    "description": "Elegant silk wrap...",
    "shortDescription": "A timeless piece...",
    "price": 1150000,
    "salePrice": null,
    "isNew": true,
    
    "primaryCategory": {
      "id": "uuid",
      "name": "Dresses",
      "slug": "dresses",
      "breadcrumb": [
        { "name": "Home", "slug": "/" },
        { "name": "Clothing", "slug": "/clothing" },
        { "name": "Dresses", "slug": "/dresses" }
      ]
    },
    
    "categories": [...],
    
    "tags": {
      "style": [
        { "name": "Elegant", "slug": "elegant" }
      ],
      "occasion": [
        { "name": "Evening", "slug": "evening" }
      ],
      "material": [
        { "name": "Silk", "slug": "silk" }
      ]
    },
    
    "variants": [
      {
        "id": "uuid",
        "sku": "GC-DR-001-GR-S",
        "color": "Grey",
        "colorHex": "#718096",
        "size": "S",
        "stockQuantity": 15,
        "isAvailable": true,
        "imageUrl": "..."
      }
    ],
    
    "images": [
      {
        "url": "https://cdn.griscat.com/...",
        "alt": "Silk Wrap Bodysuit - Front",
        "order": 1
      }
    ],
    
    "attributes": {
      "careInstructions": "Hand wash only",
      "fit": "True to size",
      "modelSize": "Model wears size S",
      "fabricComposition": "100% Silk"
    },
    
    "analytics": {
      "totalSales": 245,
      "totalViews": 1523,
      "totalCartAdds": 89,
      "averageRating": 4.5,
      "totalReviews": 42
    },
    
    "relatedProducts": [...]
  }
}
```

---

## 📂 Categories API

### 1. Get Categories Tree

```http
GET /categories
```

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Clothing",
      "slug": "clothing",
      "image": "https://cdn.griscat.com/...",
      "productCount": 234,
      "children": [
        {
          "id": "uuid",
          "name": "Dresses",
          "slug": "dresses",
          "productCount": 89
        }
      ]
    }
  ]
}
```

### 2. Get Category Detail

```http
GET /categories/:slug
```

**Response:**
```json
{
  "data": {
    "id": "uuid",
    "name": "Dresses",
    "slug": "dresses",
    "description": "...",
    "image": "...",
    "breadcrumb": [...],
    "children": [...],
    "productCount": 89,
    "filters": {
      "availableSizes": ["XS", "S", "M", "L", "XL"],
      "availableColors": [...],
      "priceRange": {
        "min": 850000,
        "max": 3500000
      }
    }
  }
}
```

---

## 🏷️ Collections API

### 1. Get Collections List

```http
GET /collections
```

**Query Parameters:**
```typescript
{
  isFeatured?: boolean;
  isVisible?: boolean;
  active?: boolean;  // Filter by date range
}
```

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Spring Collection 2025",
      "slug": "spring-collection-2025",
      "description": "...",
      "bannerImage": "...",
      "productCount": 45,
      "isFeatured": true,
      "startDate": "2025-01-01",
      "endDate": "2025-03-31"
    }
  ]
}
```

### 2. Get Collection Products

```http
GET /collections/:slug/products
```

**Same query params as /products**

---

## 🎯 Homepage Sections API

### 1. Get Homepage Data

```http
GET /homepage
```

**Response:**
```json
{
  "data": {
    "heroCarousel": [
      {
        "id": 1,
        "title": "New Arrivals",
        "subtitle": "Spring Collection 2025",
        "image": "...",
        "cta": {
          "text": "Shop Now",
          "link": "/new-arrivals"
        }
      }
    ],
    
    "newIn": {
      "title": "NEW IN",
      "products": [...] // 4-8 products
    },
    
    "mostWanted": {
      "title": "MOST WANTED",
      "products": [...] // 4-8 products
    },
    
    "spotlight": {
      "title": "IN THE SPOTLIGHT",
      "items": [
        {
          "id": 1,
          "title": "The Balletcore Edit",
          "image": "...",
          "link": "/balletcore"
        }
      ]
    },
    
    "featuredCollections": [...]
  }
}
```

---

## 🔍 Search API

### 1. Search Products

```http
GET /search
```

**Query Parameters:**
```typescript
{
  q: string;              // Search query
  category?: string;
  tags?: string[];
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
}
```

**Response:**
```json
{
  "data": {
    "products": [...],
    "suggestions": [
      "silk dress",
      "silk scarf",
      "silk blouse"
    ],
    "filters": {
      "categories": [...],
      "tags": [...],
      "priceRanges": [...]
    }
  },
  "meta": {
    "query": "silk",
    "total": 45,
    "took": 23 // milliseconds
  }
}
```

---

## 📊 Analytics API (Internal)

### 1. Track Product View

```http
POST /analytics/view
```

**Body:**
```json
{
  "productId": "uuid",
  "sessionId": "session-uuid",
  "userId": "user-uuid" // optional
}
```

### 2. Get Trending Products

```http
GET /analytics/trending
```

**Query:**
```typescript
{
  timeRange?: '24h' | '7d' | '30d'; // Default: 7d
  limit?: number; // Default: 10
}
```

---

## 🛒 Cart & Wishlist API

### 1. Add to Cart

```http
POST /cart/items
```

**Body:**
```json
{
  "variantId": "uuid",
  "quantity": 1
}
```

### 2. Add to Wishlist

```http
POST /wishlist/items
```

**Body:**
```json
{
  "productId": "uuid"
}
```

---

## 🎨 Filters & Sorting

### Available Sort Options

```typescript
type SortOption = 
  | 'newest'          // created_at DESC
  | 'price_asc'       // price ASC
  | 'price_desc'      // price DESC
  | 'popular'         // total_sales DESC
  | 'rating'          // average_rating DESC
  | 'trending';       // total_views DESC (last 7 days)
```

### Filter Aggregations

When querying products, include aggregations:

```http
GET /products?category=dresses&agg=true
```

**Response includes:**
```json
{
  "data": [...],
  "aggregations": {
    "sizes": [
      { "value": "S", "count": 45 },
      { "value": "M", "count": 67 }
    ],
    "colors": [
      { "name": "Grey", "hex": "#718096", "count": 34 }
    ],
    "priceRanges": [
      { "min": 0, "max": 1000000, "count": 23 },
      { "min": 1000000, "max": 2000000, "count": 45 }
    ],
    "tags": [
      { "name": "Elegant", "slug": "elegant", "count": 12 }
    ]
  }
}
```

---

## 🔐 Authentication

All authenticated requests require:

```http
Authorization: Bearer <token>
```

---

## ⚡ Performance

### 1. Caching Strategy

```http
Cache-Control: public, max-age=3600  // Homepage sections
Cache-Control: public, max-age=300   // Product listings
Cache-Control: public, max-age=86400 // Product details
Cache-Control: no-cache              // Cart, Wishlist
```

### 2. Rate Limiting

```
- Anonymous: 100 req/min
- Authenticated: 300 req/min
- Admin: Unlimited
```

### 3. Pagination

Use cursor-based pagination for large datasets:

```http
GET /products?cursor=eyJpZCI6InV1aWQifQ&limit=20
```

**Response:**
```json
{
  "data": [...],
  "meta": {
    "nextCursor": "eyJpZCI6Im5leHQtdXVpZCJ9",
    "hasMore": true
  }
}
```

---

## 📝 Error Responses

### Standard Error Format

```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product with slug 'invalid-slug' not found",
    "details": {},
    "statusCode": 404
  }
}
```

### Common Error Codes

```
400 - BAD_REQUEST
401 - UNAUTHORIZED
403 - FORBIDDEN
404 - NOT_FOUND
422 - VALIDATION_ERROR
429 - RATE_LIMIT_EXCEEDED
500 - INTERNAL_SERVER_ERROR
```

---

**Version:** 1.0  
**Last Updated:** December 30, 2025

