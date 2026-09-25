import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/shopify/types";
import { formatPrice } from "@/lib/utils";
import { ArrowUpRight, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const featuredImage = product.featuredImage || product.images?.edges?.[0]?.node;
  const minPrice = product.priceRange.minVariantPrice;
  const maxPrice = product.priceRange.maxVariantPrice;
  const hasPriceRange = minPrice.amount !== maxPrice.amount;

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:shadow-lg hover:border-zinc-300"
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-100">
        {featuredImage?.url ? (
          <Image
            src={featuredImage.url}
            alt={featuredImage.altText || product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400">
            <Package className="h-10 w-10 stroke-[1.5]" />
          </div>
        )}

        {!product.availableForSale && (
          <div className="absolute top-3 left-3 rounded-full bg-zinc-900/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Sold Out
          </div>
        )}

        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 opacity-0 shadow-sm backdrop-blur-sm transition group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
          <ArrowUpRight className="h-4 w-4 text-zinc-900" />
        </div>
      </div>

      {/* Product Meta */}
      <div className="flex flex-1 flex-col p-4">
        {product.vendor && (
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            {product.vendor}
          </p>
        )}
        <h3 className="mt-1 font-semibold text-zinc-900 line-clamp-1 group-hover:text-zinc-600 transition">
          {product.title}
        </h3>

        <div className="mt-auto pt-3 flex items-center justify-between">
          <p className="font-semibold text-zinc-900 text-sm">
            {hasPriceRange
              ? `From ${formatPrice(minPrice.amount, minPrice.currencyCode)}`
              : formatPrice(minPrice.amount, minPrice.currencyCode)}
          </p>
          <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900 transition">
            View Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
