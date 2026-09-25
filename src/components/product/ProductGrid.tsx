import React from "react";
import { Product } from "@/lib/shopify/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
}

export default function ProductGrid({ products, title, description }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg font-medium text-zinc-900">No products found</p>
        <p className="mt-1 text-sm text-zinc-500">Check back later or try browsing a different category.</p>
      </div>
    );
  }

  return (
    <section className="py-8">
      {title && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{title}</h2>
          {description && <p className="mt-2 text-sm text-zinc-600">{description}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
