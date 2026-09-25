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
      className="group flex flex-col overflow-hidden rounded-none border border-zinc-200 bg-white transition hover:shadow-lg hover:border-black"
    >
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-950">
        {featuredImage?.url ? (
          <Image
            src={featuredImage.url}
            alt={featuredImage.altText || product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col justify-between p-6 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="relative z-10 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-0.5 bg-zinc-900/80">
                {product.tags?.[0] || "COLLEGIATE"}
              </span>
              <Package className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="relative z-10 font-black text-2xl tracking-tighter uppercase text-zinc-400 group-hover:text-white transition">
              {product.tags?.[0] || "CAMPUS"}
            </div>
          </div>
        )}

        {!product.availableForSale && (
          <div className="absolute top-3 left-3 rounded-none bg-zinc-900 px-2.5 py-1 text-xs font-semibold text-white">
            Sold Out
          </div>
        )}

        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-none bg-black/60 border border-zinc-700 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-black group-hover:border-white">
          <ArrowUpRight className="h-4 w-4" />
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
