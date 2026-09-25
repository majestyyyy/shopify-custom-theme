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
      p.title.toUpperCase().includes(upperHandle)
    );
  } else if (lowerHandle === "shirt" || lowerHandle === "tshirts") {
    mockProducts = UNIVERSITY_PRODUCTS.filter((p) => p.tags?.includes("Shirt") || p.tags?.includes("T-Shirt"));
  } else if (lowerHandle === "hoodie" || lowerHandle === "hoodies-sweatshirts") {
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

// Cart Mutations Client Helpers
export async function createCart(lines?: Array<{ merchandiseId: string; quantity: number }>): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartCreate: { cart: Cart; userErrors: Array<{ message: string }> };
  }>({
    query: CREATE_CART_MUTATION,
    variables: {
      input: lines ? { lines } : {},
    },
    cache: 'no-store',
  });

  return data?.cartCreate?.cart || null;
}

export async function addToCart(cartId: string, lines: Array<{ merchandiseId: string; quantity: number }>): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: Cart; userErrors: Array<{ message: string }> };
  }>({
    query: ADD_TO_CART_MUTATION,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  return data?.cartLinesAdd?.cart || null;
}

export async function updateCartLines(cartId: string, lines: Array<{ id: string; quantity: number }>): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: Cart; userErrors: Array<{ message: string }> };
  }>({
    query: UPDATE_CART_LINES_MUTATION,
    variables: { cartId, lines },
    cache: 'no-store',
  });

  return data?.cartLinesUpdate?.cart || null;
}

export async function removeCartLines(cartId: string, lineIds: string[]): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: Cart; userErrors: Array<{ message: string }> };
  }>({
    query: REMOVE_CART_LINES_MUTATION,
    variables: { cartId, lineIds },
    cache: 'no-store',
  });

  return data?.cartLinesRemove?.cart || null;
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: Cart | null }>({
    query: GET_CART_QUERY,
    variables: { cartId },
    cache: 'no-store',
  });

  return data?.cart || null;
}
