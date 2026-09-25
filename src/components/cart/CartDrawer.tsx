"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, updateQuantity, removeItem, isLoading } = useCart();

  // Prevent background scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lines = cart?.lines?.edges?.map((e) => e.node) || [];
  const subtotal = cart?.cost?.subtotalAmount?.amount || "0.00";
  const currencyCode = cart?.cost?.subtotalAmount?.currencyCode || "USD";

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-zinc-900" />
              <h2 className="text-lg font-bold text-zinc-900">Your Cart</h2>
              {cart?.totalQuantity ? (
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-600">
                  {cart.totalQuantity}
                </span>
              ) : null}
            </div>
            <button
              onClick={closeCart}
              className="rounded-full p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {lines.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-zinc-400">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-base font-semibold text-zinc-900">Your cart is empty</p>
                  <p className="text-sm text-zinc-500 mt-1">Looks like you haven&apos;t added anything to your cart yet.</p>
                </div>
                <button
                  onClick={closeCart}
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-zinc-200 space-y-4">
                {lines.map((line) => {
                  const merchandise = line.merchandise;
                  const image = merchandise?.image || merchandise?.product?.featuredImage;

                  return (
                    <li key={line.id} className="pt-4 flex gap-4">
                      {/* Product Image */}
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50">
                        {image?.url ? (
                          <Image
                            src={image.url}
                            alt={image.altText || merchandise.title || "Product image"}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-zinc-400">
                            <ShoppingBag className="h-6 w-6" />
                          </div>
                        )}
                      </div>

                      {/* Line Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between text-sm">
                            <h3 className="font-semibold text-zinc-900 line-clamp-1">
                              {merchandise?.product?.title || merchandise?.title}
                            </h3>
                            <p className="ml-2 font-semibold text-zinc-900">
                              {formatPrice(line.cost.totalAmount.amount, line.cost.totalAmount.currencyCode)}
                            </p>
                          </div>
                          {merchandise?.selectedOptions && merchandise.selectedOptions.length > 0 && (
                            <p className="mt-0.5 text-xs text-zinc-500">
                              {merchandise.selectedOptions.map((opt) => `${opt.name}: ${opt.value}`).join(" / ")}
                            </p>
                          )}
                        </div>

                        {/* Quantity and Remove Action */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center rounded-lg border border-zinc-200 bg-zinc-50">
                            <button
                              onClick={() => updateQuantity(line.id, line.quantity - 1)}
                              disabled={isLoading}
                              className="p-1.5 text-zinc-500 hover:text-zinc-900 disabled:opacity-50 transition"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 text-xs font-semibold text-zinc-800">{line.quantity}</span>
                            <button
                              onClick={() => updateQuantity(line.id, line.quantity + 1)}
                              disabled={isLoading}
                              className="p-1.5 text-zinc-500 hover:text-zinc-900 disabled:opacity-50 transition"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(line.id)}
                            disabled={isLoading}
                            className="text-zinc-400 hover:text-red-500 p-1 transition"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Footer / Checkout */}
          {lines.length > 0 && (
            <div className="border-t border-zinc-200 px-6 py-6 space-y-4 bg-zinc-50/50">
              <div className="space-y-1.5">
                <div className="flex justify-between text-base font-bold text-zinc-900">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal, currencyCode)}</span>
                </div>
                <p className="text-xs text-zinc-500">Shipping, taxes, and discounts calculated at checkout.</p>
              </div>

              <a
                href={cart?.checkoutUrl || "#"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 active:scale-[0.99] transition disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
