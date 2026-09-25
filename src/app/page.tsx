import React from "react";
import Hero from "@/components/home/Hero";
import TrustFeatures from "@/components/home/TrustFeatures";
import UniversityEditorial from "@/components/home/UniversityEditorial";
import CategoryBanners from "@/components/home/CategoryBanners";
import CustomOrdersBanner from "@/components/home/CustomOrdersBanner";
import ProductGrid from "@/components/product/ProductGrid";
import { getProducts } from "@/lib/shopify/client";

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProducts({ first: 12 });

  return (
    <div className="bg-black">
      {/* 1. Hero Section (bg-black) */}
      <Hero />

      {/* 2. Value Propositions & Trust Bar (bg-zinc-950) */}
      <TrustFeatures />

      {/* 3. Shop by University: Collection Editorial (bg-black) */}
      <UniversityEditorial />

      {/* 4. Shop by Merch Type: Category Banners (bg-zinc-950) */}
      <CategoryBanners />

      {/* 5. Trending Products Catalog (bg-white for clear product viewing) */}
      <div id="catalog" className="bg-white text-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid
            products={products}
            title="Trending Campus Apparel"
            description="High-demand heavyweight fleece, game-day varsity jerseys, and everyday student essentials."
          />
        </div>
      </div>

      {/* 6. Custom Batch Orders & Inquiry (bg-zinc-100) */}
      <div className="bg-zinc-100 py-12 border-t border-zinc-200">
        <CustomOrdersBanner />
      </div>
    </div>
  );
}
