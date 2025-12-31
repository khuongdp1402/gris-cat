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
        url: "/tui-tote.png",
        alt: "Gris Signature Tote - Front View",
        isMain: true,
      },
      {
        id: "2",
        url: "/3ba3d90c5617589e971be9adeb758b2d.jpg",
        alt: "Gris Signature Tote - Detail",
      },
      {
        id: "3",
        url: "/vong1.png",
        alt: "Gris Signature Tote - Interior",
      },
      {
        id: "4",
        url: "/cb2b9f88de24c5087cb476970406c1f9.jpg",
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
        url: "/vay1.png",
        alt: "Minimalist Shoulder Bag - Front",
        isMain: true,
      },
      {
        id: "2",
        url: "/da876d982174822a7ffd56dd84d37bfb.jpg",
        alt: "Minimalist Shoulder Bag - Detail",
      },
      {
        id: "3",
        url: "/vay2.png",
        alt: "Minimalist Shoulder Bag - Side View",
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
        url: "/vong1.png",
        alt: "Classic Leather Clutch - Front",
        isMain: true,
      },
      {
        id: "2",
        url: "/cb2b9f88de24c5087cb476970406c1f9.jpg",
        alt: "Classic Leather Clutch - Interior",
      },
      {
        id: "3",
        url: "/tui-tote.png",
        alt: "Classic Leather Clutch - Detail",
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
        url: "/vay2.png",
        alt: "Silk Wrap Bodysuit - Front",
        isMain: true,
      },
      {
        id: "2",
        url: "/ef2f59dd753cc514f448f70c3913c810.jpg",
        alt: "Silk Wrap Bodysuit - Detail",
      },
      {
        id: "3",
        url: "/vay1.png",
        alt: "Silk Wrap Bodysuit - Side View",
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
        url: "/vay1.png",
        alt: "Tulle Ballet Skirt - Front",
        isMain: true,
      },
      {
        id: "2",
        url: "/da876d982174822a7ffd56dd84d37bfb.jpg",
        alt: "Tulle Ballet Skirt - Detail",
      },
      {
        id: "3",
        url: "/vay2.png",
        alt: "Tulle Ballet Skirt - Back",
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

