import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProductByHandle, getProducts } from "@/lib/shopify/client";
import ProductDetails from "@/components/product/ProductDetails";
import ProductGrid from "@/components/product/ProductGrid";

export const revalidate = 60;

interface ProductPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const image = product.featuredImage || product.images?.edges?.[0]?.node;

  return {
    title: `${product.title} | NextStore`,
    description: product.description || `Buy ${product.title} online.`,
    openGraph: {
      title: product.title,
      description: product.description,
      images: image?.url ? [image.url] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  // Related products recommendation
  const allProducts = await getProducts({ first: 5 });
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pb-16">
      <ProductDetails product={product} />

      {relatedProducts.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-zinc-200">
          <ProductGrid
            products={relatedProducts}
            title="You Might Also Like"
            description="Recommended products based on what you are viewing."
          />
        </div>
      )}
    </div>
  );
}
