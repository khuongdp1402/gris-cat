// Sample Products Data
export const SAMPLE_PRODUCTS = [
  {
    id: "1",
    slug: "gris-signature-tote-ash-grey",
    name: "Gris Signature Tote",
    variant: "Ash Grey",
    fullName: "Gris Signature Tote - Ash Grey",
    description: "A timeless tote bag crafted from premium Italian leather, featuring our signature minimalist design.",
    price: 1850000,
    salePrice: 1480000,
    discount: 20,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    category: "bags",
    subCategory: "totes",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
        alt: "Gris Signature Tote - Front View",
        isMain: true,
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
        alt: "Gris Signature Tote - Detail",
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1564422167509-4f15e80f4f05?q=80&w=1200&auto=format&fit=crop",
        alt: "Gris Signature Tote - Interior",
      },
      {
        id: "4",
        url: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
        alt: "Gris Signature Tote - Side View",
      },
    ],
    colors: [
      { id: "ash-grey", name: "Ash Grey", hex: "#718096", isSelected: true },
      { id: "black", name: "Black", hex: "#000000" },
      { id: "tan", name: "Tan", hex: "#D2B48C" },
      { id: "navy", name: "Navy", hex: "#1e3a8a" },
    ],
    sizes: [
      { id: "one-size", label: "One Size", isAvailable: true, isSelected: true },
    ],
    details: {
      material: "100% Italian Leather",
      dimensions: "38cm (W) x 42cm (H) x 12cm (D)",
      care: "Wipe clean with a damp cloth. Store in dust bag when not in use.",
    },
    editorNote: "This signature tote embodies our philosophy of timeless elegance. Perfect for the modern woman who values both style and functionality.",
  },
  {
    id: "2",
    slug: "minimalist-shoulder-bag-black",
    name: "Minimalist Shoulder Bag",
    variant: "Black",
    fullName: "Minimalist Shoulder Bag - Black",
    description: "Sleek and sophisticated, this shoulder bag combines minimalist aesthetics with practical design.",
    price: 1450000,
    salePrice: null,
    discount: null,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    category: "bags",
    subCategory: "shoulder-bags",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
        alt: "Minimalist Shoulder Bag - Front",
        isMain: true,
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
        alt: "Minimalist Shoulder Bag - Detail",
      },
    ],
    colors: [
      { id: "black", name: "Black", hex: "#000000", isSelected: true },
      { id: "tan", name: "Tan", hex: "#D2B48C" },
    ],
    sizes: [
      { id: "one-size", label: "One Size", isAvailable: true, isSelected: true },
    ],
    details: {
      material: "Premium Leather",
      dimensions: "32cm (W) x 28cm (H) x 8cm (D)",
      care: "Wipe clean with a damp cloth.",
    },
    editorNote: "A versatile piece that transitions seamlessly from day to evening.",
  },
  {
    id: "3",
    slug: "classic-leather-clutch-navy",
    name: "Classic Leather Clutch",
    variant: "Navy",
    fullName: "Classic Leather Clutch - Navy",
    description: "An elegant evening clutch that exudes sophistication and refinement.",
    price: 1250000,
    salePrice: null,
    discount: null,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    category: "bags",
    subCategory: "clutches",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1564422167509-4f15e80f4f05?q=80&w=1200&auto=format&fit=crop",
        alt: "Classic Leather Clutch - Front",
        isMain: true,
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
        alt: "Classic Leather Clutch - Interior",
      },
    ],
    colors: [
      { id: "navy", name: "Navy", hex: "#1e3a8a", isSelected: true },
      { id: "black", name: "Black", hex: "#000000" },
    ],
    sizes: [
      { id: "one-size", label: "One Size", isAvailable: true, isSelected: true },
    ],
    details: {
      material: "Italian Leather",
      dimensions: "24cm (W) x 16cm (H) x 4cm (D)",
      care: "Store in dust bag when not in use.",
    },
    editorNote: "The perfect companion for special occasions.",
  },
  {
    id: "4",
    slug: "silk-wrap-bodysuit-grey",
    name: "Silk Wrap Bodysuit",
    variant: "Grey",
    fullName: "Silk Wrap Bodysuit - Grey",
    description: "Elegant silk wrap bodysuit featuring a graceful drape and sophisticated silhouette.",
    price: 1150000,
    salePrice: null,
    discount: null,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    category: "clothing",
    subCategory: "tops",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop",
        alt: "Silk Wrap Bodysuit - Front",
        isMain: true,
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1200&auto=format&fit=crop",
        alt: "Silk Wrap Bodysuit - Detail",
      },
    ],
    colors: [
      { id: "grey", name: "Grey", hex: "#718096", isSelected: true },
      { id: "white", name: "White", hex: "#FFFFFF" },
    ],
    sizes: [
      { id: "s", label: "S", isAvailable: true, isSelected: true },
      { id: "m", label: "M", isAvailable: true },
      { id: "l", label: "L", isAvailable: false },
    ],
    details: {
      material: "100% Silk",
      dimensions: "One Size",
      care: "Dry clean only.",
    },
    editorNote: "A timeless piece that embodies effortless elegance.",
  },
  {
    id: "5",
    slug: "tulle-ballet-skirt-charcoal",
    name: "Tulle Ballet Skirt",
    variant: "Charcoal",
    fullName: "Tulle Ballet Skirt - Charcoal",
    description: "Inspired by ballet aesthetics, this tulle skirt adds a touch of grace to any ensemble.",
    price: 850000,
    salePrice: null,
    discount: null,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    category: "clothing",
    subCategory: "bottoms",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
        alt: "Tulle Ballet Skirt - Front",
        isMain: true,
      },
    ],
    colors: [
      { id: "charcoal", name: "Charcoal", hex: "#4A5568", isSelected: true },
      { id: "black", name: "Black", hex: "#000000" },
    ],
    sizes: [
      { id: "s", label: "S", isAvailable: true, isSelected: true },
      { id: "m", label: "M", isAvailable: true },
      { id: "l", label: "L", isAvailable: true },
    ],
    details: {
      material: "100% Polyester Tulle",
      dimensions: "Waist: Adjustable",
      care: "Hand wash or dry clean.",
    },
    editorNote: "Channel your inner ballerina with this ethereal piece.",
  },
];

// Get product by slug
export function getProductBySlug(slug: string) {
  return SAMPLE_PRODUCTS.find(p => p.slug === slug);
}

// Get products by category
export function getProductsByCategory(category: string) {
  return SAMPLE_PRODUCTS.filter(p => p.category === category);
}

// Get all products
export function getAllProducts() {
  return SAMPLE_PRODUCTS;
}

