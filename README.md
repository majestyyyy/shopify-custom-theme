# Headless Shopify Storefront (Next.js App Router)

A high-performance, modern headless e-commerce storefront built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and connected to Shopify via the **Storefront GraphQL API**.

---

## ⚡ Features

- **Next.js App Router & Server Components:** Server-side rendering, ISR caching, and SEO optimization out of the box.
- **Shopify Storefront GraphQL Integration:** Fully typed queries for products, collections, variants, and real-time inventory.
- **Dynamic Cart & Checkout:** Persistent client-side cart synced with Shopify Cart API mutations (`createCart`, `addToCart`, `updateCart`, `removeCartLines`), with direct redirect to Shopify's secure hosted checkout.
- **Interactive Product Detail Pages:** Dynamic variant selection (Size, Color, etc.), live pricing, and image galleries.
- **Slide-out Cart Drawer:** Smooth slide-over cart drawer with line item quantity controls.
- **Responsive Modern UI:** Tailwind CSS and Lucide React icons.

---

## 🚀 Getting Started

### 1. Environment Variables

Create or update your `.env.local` file with your Shopify store credentials:

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN="your_storefront_access_token"
NEXT_PUBLIC_SHOPIFY_API_VERSION="2024-10"
```

> **Note:** If no credentials are provided, the storefront defaults to Shopify's public `mock.shop` API so you can preview and test immediately.

### 2. How to get your Storefront Access Token

1. Go to your **Shopify Admin** &rarr; **Settings** &rarr; **Apps and sales channels**.
2. Click **Develop apps** &rarr; **Create an app**.
3. Under **Configuration**, click **Configure** next to **Storefront API integration**.
4. Enable the required access scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_tags`
   - `unauthenticated_write_checkouts` / `unauthenticated_read_checkouts`
   - `unauthenticated_write_customers` / `unauthenticated_read_customers`
5. Click **Save**, then click **Install app**.
6. Copy the **Storefront API access token** (found under the *Storefront API access tokens* section).

---

## 🛠️ Development & Build Commands

```bash
# Start the local development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start

# Run ESLint checks
npm run lint
```

---

## 📁 Project Structure

```
├── .env.local                    # Shopify Storefront API credentials
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout (Navbar, Cart Drawer, Footer, CartProvider)
│   │   ├── page.tsx              # Home landing page (Hero + Product showcase)
│   │   ├── products/
│   │   │   └── [handle]/page.tsx # Dynamic product detail page with variant picker
│   │   └── collections/
│   │       └── [handle]/page.tsx # Collection page
│   ├── components/
│   │   ├── layout/               # Navbar & Footer
│   │   ├── home/                 # Hero section
│   │   ├── product/              # ProductCard, ProductGrid, ProductDetails
│   │   └── cart/                 # CartDrawer
│   ├── context/
│   │   └── cart-context.tsx      # React Cart Context (persistent localStorage sync)
│   └── lib/
│       ├── shopify/
│       │   ├── client.ts         # GraphQL client executor with ISR & mock fallback
│       │   ├── queries.ts        # Products & Collections GraphQL queries
│       │   ├── mutations.ts      # Shopify Cart GraphQL mutations
│       │   └── types.ts          # TypeScript interfaces for Shopify Storefront API
│       └── utils.ts              # Price formatting and utility helpers
```
