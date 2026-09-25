import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionProducts, getProducts } from "@/lib/shopify/client";
import ProductGrid from "@/components/product/ProductGrid";

export const revalidate = 60;

interface CollectionPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { handle } = await params;
  const { collection } = await getCollectionProducts(handle);

  const title = collection?.title || handle.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${title} | NextStore`,
    description: collection?.description || `Explore our ${title} collection.`,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { handle } = await params;
  let { collection, products } = await getCollectionProducts(handle);

  // Fallback for special collection slugs if not created on Shopify backend yet
  if (!collection && products.length === 0) {
    const all = await getProducts({ first: 12 });
    products = all;
    collection = {
      id: handle,
      handle,
      title: handle.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      description: `Browsing items in ${handle.replace(/-/g, " ")}.`,
    };
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 border-b border-zinc-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {collection?.title}
        </h1>
        {collection?.description && (
          <p className="mt-3 max-w-3xl text-sm text-zinc-600">
            {collection.description}
          </p>
        )}
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
