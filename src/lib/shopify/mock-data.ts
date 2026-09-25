import { Product, Collection } from './types';

export const UNIVERSITY_LIST = [
  { code: "UE", name: "University of the East", handle: "ue", color: "Red & White", motto: "Tomorrow Begins in the East" },
  { code: "FEU", name: "Far Eastern University", handle: "feu", color: "Green & Gold", motto: "Fortitude, Excellence, Uprightness" },
  { code: "UST", name: "University of Santo Tomas", handle: "ust", color: "Gold, Black & White", motto: "Veritas in Caritate" },
  { code: "DLSU", name: "De La Salle University", handle: "dlsu", color: "Green & White", motto: "Religio, Mores, Cultura" },
  { code: "ADU", name: "Adamson University", handle: "adu", color: "Blue & White", motto: "Veritas in Caritate" },
  { code: "ADMU", name: "Ateneo de Manila University", handle: "admu", color: "Blue & White", motto: "Lux in Domino" },
  { code: "UP", name: "University of the Philippines", handle: "up", color: "Maroon & Forest Green", motto: "Honor and Excellence" },
  { code: "NU", name: "National University", handle: "nu", color: "Navy Blue & Gold", motto: "Education that works" },
];

export const CATEGORY_LIST = [
  { name: "Shirt", handle: "shirt", tag: "Shirt", description: "100% Premium carded cotton collegiate graphic t-shirts" },
  { name: "Hoodie", handle: "hoodie", tag: "Hoodie", description: "400GSM Heavyweight brushed fleece pullover and zip hoodies" },
  { name: "Cap", handle: "cap", tag: "Cap", description: "Structured 6-panel wool blend and twill snapbacks" },
  { name: "Jersey", handle: "jersey", tag: "Jersey", description: "Authentic breathable athletic mesh varsity jerseys" },
  { name: "Lanyard", handle: "lanyard", tag: "Lanyard", description: "High-density woven ID lanyards with metal swivel clips" },
];

export const UNIVERSITY_COLLECTIONS: Collection[] = [
  // University Collections
  ...UNIVERSITY_LIST.map((u) => ({
    id: `col-${u.handle}`,
    handle: u.handle,
    title: `${u.code} - ${u.name}`,
    description: `Official campus merchandise, apparel, hoodies, and accessories for ${u.name} (${u.code}). Colors: ${u.color}.`,
    image: {
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
      altText: `${u.code} Collection`,
    },
  })),

  // Category Collections
  {
    id: "col-shirt",
    handle: "shirt",
    title: "University T-Shirts",
    description: "Premium combed cotton t-shirts featuring university typography and collegiate crests.",
    image: {
      url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      altText: "University T-Shirts",
    },
  },
  {
    id: "col-hoodie",
    handle: "hoodie",
    title: "Heavyweight Hoodies",
    description: "Ultra-comfortable 400GSM heavyweight cotton fleece campus hoodies.",
    image: {
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
      altText: "Heavyweight Hoodies",
    },
  },
  {
    id: "col-cap",
    handle: "cap",
    title: "Campus Caps & Headwear",
    description: "Embroidered 3D monogram snapbacks and dad caps.",
    image: {
      url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
      altText: "Campus Caps",
    },
  },
  {
    id: "col-jersey",
    handle: "jersey",
    title: "Varsity Sports Jerseys",
    description: "Breathable dual-mesh jerseys built for athletic events and game days.",
    image: {
      url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800&auto=format&fit=crop",
      altText: "Varsity Jerseys",
    },
  },
  {
    id: "col-lanyard",
    handle: "lanyard",
    title: "University Lanyards",
    description: "Premium satin and woven ID lanyards with heavy-duty metal clasps and breakaway buckles.",
    image: {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      altText: "University Lanyards",
    },
  },
];

export const UNIVERSITY_PRODUCTS: Product[] = [
  {
    id: "prod-up-varsity-hoodie",
    handle: "up-maroon-heavyweight-fleece-hoodie",
    title: "UP Fighting Maroons Heavyweight 400GSM Fleece Hoodie",
    description: "Signature University of the Philippines varsity pullover in deep maroon. Crafted from 400GSM cotton fleece with chenille patch lettering and embroidered university seal.",
    descriptionHtml: "<p>Signature University of the Philippines varsity pullover in deep maroon. Crafted from 400GSM cotton fleece with chenille patch lettering and embroidered university seal.</p><ul><li>400 GSM Heavyweight Brushed Cotton</li><li>Pre-shrunk for zero wash shrinkage</li><li>University of the Philippines Official Merch</li></ul>",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["UP", "Hoodie", "Featured", "Collegiate"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
      altText: "UP Maroon Heavyweight Fleece Hoodie",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
            altText: "UP Maroon Hoodie Front",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "65.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "65.00", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "80.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "80.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-up-hoodie-color", name: "Color", values: ["UP Maroon", "Forest Green", "Heather Grey"] },
      { id: "opt-up-hoodie-size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-up-hoodie-m",
            title: "UP Maroon / M",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "UP Maroon" },
              { name: "Size", value: "M" },
            ],
            price: { amount: "65.00", currencyCode: "USD" },
            compareAtPrice: { amount: "80.00", currencyCode: "USD" },
          },
        },
        {
          node: {
            id: "var-up-hoodie-l",
            title: "UP Maroon / L",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "UP Maroon" },
              { name: "Size", value: "L" },
            ],
            price: { amount: "65.00", currencyCode: "USD" },
            compareAtPrice: { amount: "80.00", currencyCode: "USD" },
          },
        },
      ],
    },
  },
  {
    id: "prod-dlsu-jersey",
    handle: "dlsu-green-archers-pro-mesh-jersey",
    title: "DLSU Green Archers Game Day Pro Mesh Jersey",
    description: "Authentic De La Salle University athletic mesh jersey in emerald green with white/gold side stripe panels and heat-pressed archers typography.",
    descriptionHtml: "<p>Authentic De La Salle University athletic mesh jersey in emerald green with white/gold side stripe panels and heat-pressed archers typography.</p>",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["DLSU", "Jersey", "Featured"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1000&auto=format&fit=crop",
      altText: "DLSU Green Archers Jersey",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1000&auto=format&fit=crop",
            altText: "DLSU Jersey Front",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "52.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "52.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-dlsu-jersey-color", name: "Color", values: ["Emerald Green / White", "Whiteout Edition"] },
      { id: "opt-dlsu-jersey-size", name: "Size", values: ["S", "M", "L", "XL"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-dlsu-jersey-m",
            title: "Emerald Green / White / M",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "Emerald Green / White" },
              { name: "Size", value: "M" },
            ],
            price: { amount: "52.00", currencyCode: "USD" },
            compareAtPrice: null,
          },
        },
      ],
    },
  },
  {
    id: "prod-ust-tee",
    handle: "ust-growling-tigers-box-fit-tee",
    title: "UST Growling Tigers Heavyweight Box-Fit Tee",
    description: "University of Santo Tomas 260GSM carded cotton drop-shoulder streetwear tee with gold and white vintage tiger graphic print.",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["UST", "Shirt", "Featured"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
      altText: "UST Box Fit Tee",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
            altText: "UST White Tee",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "34.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "34.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-ust-color", name: "Color", values: ["Tiger Gold", "Black", "Vintage Cream"] },
      { id: "opt-ust-size", name: "Size", values: ["S", "M", "L", "XL"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-ust-tee-m",
            title: "Tiger Gold / M",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "Tiger Gold" },
              { name: "Size", value: "M" },
            ],
            price: { amount: "34.00", currencyCode: "USD" },
            compareAtPrice: null,
          },
        },
      ],
    },
  },
  {
    id: "prod-admu-cap",
    handle: "admu-blue-eagles-heritage-snapback",
    title: "ADMU Blue Eagles Heritage Wool-Blend Snapback",
    description: "Ateneo de Manila University 6-panel structured cap with 3D raised embroidery and green undervisor in navy royal blue.",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["ADMU", "Cap", "Featured"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
      altText: "ADMU Heritage Snapback",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000&auto=format&fit=crop",
            altText: "ADMU Snapback Cap",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "28.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "28.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-admu-cap-color", name: "Color", values: ["Royal Blue / White", "Midnight Black"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-admu-cap",
            title: "Royal Blue / White",
            availableForSale: true,
            selectedOptions: [{ name: "Color", value: "Royal Blue / White" }],
            price: { amount: "28.00", currencyCode: "USD" },
            compareAtPrice: null,
          },
        },
      ],
    },
  },
  {
    id: "prod-feu-hoodie",
    handle: "feu-tamaraws-heritage-fleece-hoodie",
    title: "FEU Tamaraws Heavyweight Heritage Fleece Hoodie",
    description: "Far Eastern University green & gold hoodie with embroidered FEU Tamaraw seal and thick ribbed cuffs.",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["FEU", "Hoodie"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      altText: "FEU Tamaraws Fleece Hoodie",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
            altText: "FEU Hoodie",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "65.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "65.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-feu-color", name: "Color", values: ["Tamaraw Green", "Gold", "Charcoal"] },
      { id: "opt-feu-size", name: "Size", values: ["S", "M", "L", "XL"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-feu-hoodie-m",
            title: "Tamaraw Green / M",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "Tamaraw Green" },
              { name: "Size", value: "M" },
            ],
            price: { amount: "65.00", currencyCode: "USD" },
            compareAtPrice: null,
          },
        },
      ],
    },
  },
  {
    id: "prod-ue-jersey",
    handle: "ue-red-warriors-game-day-jersey",
    title: "UE Red Warriors Game Day Athletic Jersey",
    description: "University of the East varsity basketball jersey in bold crimson red and white with warrior emblem.",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["UE", "Jersey"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=1000&auto=format&fit=crop",
      altText: "UE Red Warriors Jersey",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=1000&auto=format&fit=crop",
            altText: "UE Jersey",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "52.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "52.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-ue-color", name: "Color", values: ["Warrior Red", "White"] },
      { id: "opt-ue-size", name: "Size", values: ["S", "M", "L", "XL"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-ue-jersey-m",
            title: "Warrior Red / M",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "Warrior Red" },
              { name: "Size", value: "M" },
            ],
            price: { amount: "52.00", currencyCode: "USD" },
            compareAtPrice: null,
          },
        },
      ],
    },
  },
  {
    id: "prod-adu-lanyard",
    handle: "adu-soaring-falcons-premium-lanyard",
    title: "Adamson University Soaring Falcons Premium Satin Lanyard",
    description: "Adamson University official lanyard featuring double-sided silk sublimation print, heavy alloy swivel hook, and quick safety release buckle.",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["ADU", "Lanyard"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      altText: "Adamson University Lanyard",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
            altText: "ADU Lanyard",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "12.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "12.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-adu-lanyard-style", name: "Style", values: ["Falcon Blue", "Navy White"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-adu-lanyard-1",
            title: "Falcon Blue",
            availableForSale: true,
            selectedOptions: [{ name: "Style", value: "Falcon Blue" }],
            price: { amount: "12.00", currencyCode: "USD" },
            compareAtPrice: null,
          },
        },
      ],
    },
  },
  {
    id: "prod-nu-lanyard",
    handle: "nu-bulldogs-heavy-woven-lanyard",
    title: "NU Bulldogs Heavy-Duty Woven ID Lanyard",
    description: "National University official lanyard with gold-stitched typography, leather accent tab, and durable lobster clasp.",
    availableForSale: true,
    vendor: "PRINTING AVENUE PH",
    tags: ["NU", "Lanyard"],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      altText: "NU Bulldogs Lanyard",
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
            altText: "NU Lanyard",
          },
        },
      ],
    },
    priceRange: {
      minVariantPrice: { amount: "12.00", currencyCode: "USD" },
      maxVariantPrice: { amount: "12.00", currencyCode: "USD" },
    },
    options: [
      { id: "opt-nu-lanyard-style", name: "Style", values: ["Navy & Gold", "Blackout"] },
    ],
    variants: {
      edges: [
        {
          node: {
            id: "var-nu-lanyard-1",
            title: "Navy & Gold",
            availableForSale: true,
            selectedOptions: [{ name: "Style", value: "Navy & Gold" }],
            price: { amount: "12.00", currencyCode: "USD" },
            compareAtPrice: null,
          },
        },
      ],
    },
  },
];
