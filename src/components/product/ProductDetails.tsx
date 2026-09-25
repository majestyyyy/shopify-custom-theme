"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Product, ProductVariant } from "@/lib/shopify/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { Check, ShoppingBag, Loader2, Shield, Truck, RefreshCw } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem, isLoading } = useCart();
  const variants = useMemo(() => product.variants.edges.map((e) => e.node), [product]);
  const images = useMemo(() => product.images.edges.map((e) => e.node), [product]);

  // Selected options state: { [optionName]: optionValue }
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    if (variants.length > 0 && variants[0].selectedOptions) {
      variants[0].selectedOptions.forEach((opt) => {
        initial[opt.name] = opt.value;
      });
    }
    return initial;
  });

  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Find matching variant based on selected options
  const selectedVariant: ProductVariant | undefined = useMemo(() => {
    return variants.find((variant) => {
      return variant.selectedOptions.every((opt) => selectedOptions[opt.name] === opt.value);
    }) || variants[0];
  }, [variants, selectedOptions]);

  const handleOptionSelect = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem(selectedVariant.id, quantity);
  };

  const activeImage = images[activeImageIndex] || product.featuredImage || selectedVariant?.image;
  const isAvailable = selectedVariant ? selectedVariant.availableForSale : product.availableForSale;

  const currentPrice = selectedVariant?.price || product.priceRange.minVariantPrice;
  const compareAtPrice = selectedVariant?.compareAtPrice;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Image Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[550px] scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={img.url + idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                    activeImageIndex === idx ? "border-zinc-900 shadow-sm" : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.altText || `Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Featured Image */}
          <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
            {activeImage?.url ? (
              <Image
                src={activeImage.url}
                alt={activeImage.altText || product.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-300"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-zinc-400">
                <ShoppingBag className="h-16 w-16 stroke-[1]" />
              </div>
            )}
          </div>
        </div>

        {/* Product Details & Purchase Panel */}
        <div className="flex flex-col space-y-6">
          <div>
            {product.vendor && (
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {product.vendor}
              </span>
            )}
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {product.title}
            </h1>

            {/* Price section */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-zinc-900">
                {formatPrice(currentPrice.amount, currentPrice.currencyCode)}
              </span>
              {compareAtPrice && parseFloat(compareAtPrice.amount) > parseFloat(currentPrice.amount) && (
                <span className="text-lg text-zinc-400 line-through">
                  {formatPrice(compareAtPrice.amount, compareAtPrice.currencyCode)}
                </span>
              )}
              {isAvailable ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold text-zinc-900">
                  <Check className="h-3 w-3" /> In Stock
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-semibold text-zinc-300">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          <hr className="border-zinc-200" />

          {/* Product Options / Variant Pickers */}
          {product.options && product.options.length > 0 && product.options[0].name !== "Title" && (
            <div className="space-y-5">
              {product.options.map((option) => (
                <div key={option.id || option.name}>
                  <label className="text-sm font-semibold text-zinc-900">
                    {option.name}: <span className="font-normal text-zinc-600">{selectedOptions[option.name]}</span>
                  </label>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {option.values.map((val) => {
                      const isSelected = selectedOptions[option.name] === val;
                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleOptionSelect(option.name, val)}
                          className={`rounded-xl border px-4 py-2 text-sm font-medium transition ${
                            isSelected
                              ? "border-zinc-900 bg-zinc-900 text-white shadow-sm"
                              : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400"
                          }`}
                        >
                          {val}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="text-sm font-semibold text-zinc-900">
                Quantity:
              </label>
              <div className="flex items-center rounded-xl border border-zinc-300 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-zinc-600 hover:text-zinc-950 font-semibold"
                >
                  -
                </button>
                <span className="px-3 text-sm font-semibold text-zinc-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1.5 text-zinc-600 hover:text-zinc-950 font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!isAvailable || isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-4 text-base font-semibold text-white shadow-md hover:bg-zinc-800 active:scale-[0.99] transition disabled:bg-zinc-300 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" />
                  <span>{isAvailable ? "Add to Cart" : "Out of Stock"}</span>
                </>
              )}
            </button>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-200">
            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
              <Truck className="h-5 w-5 text-zinc-700" />
              <span className="mt-1.5 text-[11px] font-semibold text-zinc-800">Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
              <Shield className="h-5 w-5 text-zinc-700" />
              <span className="mt-1.5 text-[11px] font-semibold text-zinc-800">Shopify Secured</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
              <RefreshCw className="h-5 w-5 text-zinc-700" />
              <span className="mt-1.5 text-[11px] font-semibold text-zinc-800">30-Day Returns</span>
            </div>
          </div>

          {/* Product Description */}
          {product.description && (
            <div className="pt-4 border-t border-zinc-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Description</h3>
              {product.descriptionHtml ? (
                <div
                  className="prose prose-sm prose-zinc mt-3 text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              ) : (
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{product.description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
