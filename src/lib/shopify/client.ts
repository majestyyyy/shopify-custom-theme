import {
  GET_PRODUCTS_QUERY,
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_COLLECTIONS_QUERY,
  GET_COLLECTION_PRODUCTS_QUERY,
} from './queries';
import {
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_LINES_MUTATION,
  REMOVE_CART_LINES_MUTATION,
  GET_CART_QUERY,
} from './mutations';
import {
  Product,
  Collection,
  Cart,
  ShopifyResponse,
} from './types';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '';
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';
const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2024-10';

export async function shopifyFetch<T>({
  query,
  variables = {},
  cache = 'force-cache',
  revalidate = 60, // 1 minute default ISR cache
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  revalidate?: number;
}): Promise<T | null> {
  const isMockDomain = domain === 'mock.shop' || !domain || !storefrontAccessToken;

  // If using Shopify mock.shop API endpoint
  const endpoint = isMockDomain
    ? 'https://mock.shop/api'
    : `https://${domain}/api/${apiVersion}/graphql.json`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (!isMockDomain && storefrontAccessToken) {
    headers['X-Shopify-Storefront-Access-Token'] = storefrontAccessToken;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate },
      cache,
    });

    if (!response.ok) {
      console.error(`Shopify API HTTP Error: ${response.status} ${response.statusText}`);
      return null;
    }

    const result: ShopifyResponse<T> = await response.json();

    if (result.errors && result.errors.length > 0) {
      console.error('Shopify GraphQL Errors:', result.errors);
      return null;
    }

    return result.data || null;
  } catch (error) {
    console.error('Failed to fetch from Shopify API:', error);
    return null;
  }
}

import { UNIVERSITY_PRODUCTS, UNIVERSITY_COLLECTIONS } from './mock-data';

// Data fetching helper functions
export async function getProducts(options: {
  first?: number;
  query?: string;
  sortKey?: string;
  reverse?: boolean;
} = {}): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: { edges: Array<{ node: Product }> };
  }>({
    query: GET_PRODUCTS_QUERY,
    variables: options,
  });

  const liveProducts = data?.products?.edges?.map((edge) => edge.node) || [];
  if (liveProducts.length > 0) return liveProducts;

  // University Merchandise Catalog Fallback
  return UNIVERSITY_PRODUCTS.slice(0, options.first || 20);
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: Product | null }>({
    query: GET_PRODUCT_BY_HANDLE_QUERY,
    variables: { handle },
  });

  if (data?.product) return data.product;

  // University Merchandise fallback
  return UNIVERSITY_PRODUCTS.find((p) => p.handle === handle) || null;
}

export async function getCollections(first: number = 10): Promise<Collection[]> {
  const data = await shopifyFetch<{
    collections: { edges: Array<{ node: Collection }> };
  }>({
    query: GET_COLLECTIONS_QUERY,
    variables: { first },
  });

  const liveCollections = data?.collections?.edges?.map((edge) => edge.node) || [];
  if (liveCollections.length > 0) return liveCollections;

  return UNIVERSITY_COLLECTIONS.slice(0, first);
}

export async function getCollectionProducts(handle: string, first: number = 20): Promise<{
  collection: Collection | null;
  products: Product[];
}> {
  const data = await shopifyFetch<{
    collection: (Collection & { products: { edges: Array<{ node: Product }> } }) | null;
  }>({
    query: GET_COLLECTION_PRODUCTS_QUERY,
    variables: { handle, first },
  });

  if (data?.collection) {
    const { products, ...collection } = data.collection;
    return {
      collection,
      products: products.edges.map((e) => e.node),
    };
  }

  // University Merchandise collection fallback
  const mockCol = UNIVERSITY_COLLECTIONS.find((c) => c.handle.toLowerCase() === handle.toLowerCase());
  let mockProducts = UNIVERSITY_PRODUCTS;

  const upperHandle = handle.toUpperCase();
  const lowerHandle = handle.toLowerCase();

  // University filter (UE, FEU, UST, DLSU, ADU, ADMU, UP, NU)
  const isUni = ["UE", "FEU", "UST", "DLSU", "ADU", "ADMU", "UP", "NU"].includes(upperHandle);
  if (isUni) {
    mockProducts = UNIVERSITY_PRODUCTS.filter((p) =>
      p.tags?.some((t) => t.toUpperCase() === upperHandle) ||
      p.handle.toLowerCase().startsWith(`${lowerHandle}-`)
    );
  } else if (lowerHandle === "shirt" || lowerHandle === "tshirts") {
    mockProducts = UNIVERSITY_PRODUCTS.filter((p) => p.tags?.includes("Shirt") || p.tags?.includes("T-Shirt"));
  } else if (lowerHandle === "hoodie" || lowerHandle === "sweatshirts") {
    mockProducts = UNIVERSITY_PRODUCTS.filter((p) => p.tags?.includes("Hoodie") || p.tags?.includes("Sweatshirt"));
  } else if (lowerHandle === "cap" || lowerHandle === "accessories") {
    mockProducts = UNIVERSITY_PRODUCTS.filter((p) => p.tags?.includes("Cap") || p.tags?.includes("Accessories"));
  } else if (lowerHandle === "jersey" || lowerHandle === "jerseys-athletic") {
    mockProducts = UNIVERSITY_PRODUCTS.filter((p) => p.tags?.includes("Jersey"));
  } else if (lowerHandle === "lanyard") {
    mockProducts = UNIVERSITY_PRODUCTS.filter((p) => p.tags?.includes("Lanyard"));
  }

  // If no specific product matched, return all mock products as fallback
  if (mockProducts.length === 0) {
    mockProducts = UNIVERSITY_PRODUCTS;
  }

  return {
    collection: mockCol || {
      id: handle,
      handle,
      title: handle.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      description: `Official campus gear in ${handle.replace(/-/g, " ")}.`,
    },
    products: mockProducts.slice(0, first),
  };
}

// In-Memory / Local Mock Cart Store for Mock Products
let mockCartStore: Cart = {
  id: "mock-cart-id",
  checkoutUrl: "https://printingavenueph.myshopify.com/checkout",
  totalQuantity: 0,
  lines: { edges: [] },
  cost: {
    subtotalAmount: { amount: "0.00", currencyCode: "PHP" },
    totalAmount: { amount: "0.00", currencyCode: "PHP" },
    totalTaxAmount: null,
  },
};

function recalculateMockCart(cart: Cart): Cart {
  let totalQty = 0;
  let subtotal = 0;
  cart.lines.edges.forEach(({ node }) => {
    totalQty += node.quantity;
    const priceNum = parseFloat(node.merchandise.price.amount) || 0;
    const lineTotal = (priceNum * node.quantity).toFixed(2);
    node.cost.totalAmount.amount = lineTotal;
    subtotal += priceNum * node.quantity;
  });
  cart.totalQuantity = totalQty;
  cart.cost.subtotalAmount.amount = subtotal.toFixed(2);
  cart.cost.totalAmount.amount = subtotal.toFixed(2);
  return { ...cart };
}

function findMockProductAndVariant(variantId: string) {
  for (const product of UNIVERSITY_PRODUCTS) {
    const variantEdge = product.variants.edges.find((v) => v.node.id === variantId);
    if (variantEdge) {
      return { product, variant: variantEdge.node };
    }
  }
  return null;
}

// Cart Mutations Client Helpers
export async function createCart(lines?: Array<{ merchandiseId: string; quantity: number }>): Promise<Cart | null> {
  const isMockDomain = domain === 'mock.shop' || !domain || !storefrontAccessToken;

  // If first item is a mock item (e.g. starts with "var-") or mock domain, use mock cart
  const hasMockItem = lines?.some((l) => l.merchandiseId.startsWith("var-") || l.merchandiseId.startsWith("prod-"));

  if (!isMockDomain && !hasMockItem) {
    const data = await shopifyFetch<{
      cartCreate: { cart: Cart; userErrors: Array<{ message: string }> };
    }>({
      query: CREATE_CART_MUTATION,
      variables: {
        input: lines ? { lines } : {},
      },
      cache: 'no-store',
    });

    if (data?.cartCreate?.cart) {
      return data.cartCreate.cart;
    }
  }

  // Fallback / Mock Cart Creation
  mockCartStore = {
    id: `cart-${Date.now()}`,
    checkoutUrl: `https://${domain || "printingavenueph.myshopify.com"}/checkout`,
    totalQuantity: 0,
    lines: { edges: [] },
    cost: {
      subtotalAmount: { amount: "0.00", currencyCode: "PHP" },
      totalAmount: { amount: "0.00", currencyCode: "PHP" },
      totalTaxAmount: null,
    },
  };

  if (lines && lines.length > 0) {
    for (const item of lines) {
      const match = findMockProductAndVariant(item.merchandiseId);
      if (match) {
        mockCartStore.lines.edges.push({
          node: {
            id: `line-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            quantity: item.quantity,
            cost: {
              totalAmount: {
                amount: (parseFloat(match.variant.price.amount) * item.quantity).toFixed(2),
                currencyCode: match.variant.price.currencyCode || "PHP",
              },
            },
            merchandise: {
              id: match.variant.id,
              title: match.variant.title,
              selectedOptions: match.variant.selectedOptions,
              image: match.variant.image || match.product.featuredImage,
              product: {
                id: match.product.id,
                handle: match.product.handle,
                title: match.product.title,
                featuredImage: match.product.featuredImage,
              },
              price: match.variant.price,
            },
          },
        });
      }
    }
  }

  return recalculateMockCart(mockCartStore);
}

export async function addToCart(cartId: string, lines: Array<{ merchandiseId: string; quantity: number }>): Promise<Cart | null> {
  const isMockCart = cartId.startsWith("cart-") || lines.some((l) => l.merchandiseId.startsWith("var-"));

  if (!isMockCart) {
    const data = await shopifyFetch<{
      cartLinesAdd: { cart: Cart; userErrors: Array<{ message: string }> };
    }>({
      query: ADD_TO_CART_MUTATION,
      variables: { cartId, lines },
      cache: 'no-store',
    });

    if (data?.cartLinesAdd?.cart) {
      return data.cartLinesAdd.cart;
    }
  }

  // Fallback / Mock Cart Addition
  for (const item of lines) {
    const existingIndex = mockCartStore.lines.edges.findIndex(
      (e) => e.node.merchandise.id === item.merchandiseId
    );

    if (existingIndex > -1) {
      mockCartStore.lines.edges[existingIndex].node.quantity += item.quantity;
    } else {
      const match = findMockProductAndVariant(item.merchandiseId);
      if (match) {
        mockCartStore.lines.edges.push({
          node: {
            id: `line-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            quantity: item.quantity,
            cost: {
              totalAmount: {
                amount: (parseFloat(match.variant.price.amount) * item.quantity).toFixed(2),
                currencyCode: match.variant.price.currencyCode || "PHP",
              },
            },
            merchandise: {
              id: match.variant.id,
              title: match.variant.title,
              selectedOptions: match.variant.selectedOptions,
              image: match.variant.image || match.product.featuredImage,
              product: {
                id: match.product.id,
                handle: match.product.handle,
                title: match.product.title,
                featuredImage: match.product.featuredImage,
              },
              price: match.variant.price,
            },
          },
        });
      }
    }
  }

  return recalculateMockCart(mockCartStore);
}

export async function updateCartLines(cartId: string, lines: Array<{ id: string; quantity: number }>): Promise<Cart | null> {
  const isMockCart = cartId.startsWith("cart-");

  if (!isMockCart) {
    const data = await shopifyFetch<{
      cartLinesUpdate: { cart: Cart; userErrors: Array<{ message: string }> };
    }>({
      query: UPDATE_CART_LINES_MUTATION,
      variables: { cartId, lines },
      cache: 'no-store',
    });

    if (data?.cartLinesUpdate?.cart) {
      return data.cartLinesUpdate.cart;
    }
  }

  // Fallback / Mock Cart Quantity Update
  lines.forEach((update) => {
    const edge = mockCartStore.lines.edges.find((e) => e.node.id === update.id);
    if (edge) {
      edge.node.quantity = update.quantity;
    }
  });

  return recalculateMockCart(mockCartStore);
}

export async function removeCartLines(cartId: string, lineIds: string[]): Promise<Cart | null> {
  const isMockCart = cartId.startsWith("cart-");

  if (!isMockCart) {
    const data = await shopifyFetch<{
      cartLinesRemove: { cart: Cart; userErrors: Array<{ message: string }> };
    }>({
      query: REMOVE_CART_LINES_MUTATION,
      variables: { cartId, lineIds },
      cache: 'no-store',
    });

    if (data?.cartLinesRemove?.cart) {
      return data.cartLinesRemove.cart;
    }
  }

  // Fallback / Mock Cart Item Removal
  mockCartStore.lines.edges = mockCartStore.lines.edges.filter((e) => !lineIds.includes(e.node.id));
  return recalculateMockCart(mockCartStore);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const isMockCart = cartId.startsWith("cart-");

  if (!isMockCart) {
    const data = await shopifyFetch<{ cart: Cart | null }>({
      query: GET_CART_QUERY,
      variables: { cartId },
      cache: 'no-store',
    });

    if (data?.cart) {
      return data.cart;
    }
  }

  return recalculateMockCart(mockCartStore);
}
