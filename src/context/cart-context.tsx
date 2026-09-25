"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Cart } from "@/lib/shopify/types";
import {
  createCart,
  addToCart,
  updateCartLines,
  removeCartLines,
  getCart,
} from "@/lib/shopify/client";

interface CartContextType {
  cart: Cart | null;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  totalQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "shopify_cart_id";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Cart on client mount
  useEffect(() => {
    async function initCart() {
      const storedCartId = typeof window !== "undefined" ? localStorage.getItem(CART_STORAGE_KEY) : null;
      if (storedCartId) {
        setIsLoading(true);
        const existingCart = await getCart(storedCartId);
        if (existingCart) {
          setCart(existingCart);
        } else {
          localStorage.removeItem(CART_STORAGE_KEY);
        }
        setIsLoading(false);
      }
    }
    initCart();
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    async (variantId: string, quantity = 1) => {
      setIsLoading(true);
      try {
        let currentCart = cart;

        if (!currentCart) {
          currentCart = await createCart([{ merchandiseId: variantId, quantity }]);
          if (currentCart) {
            setCart(currentCart);
            localStorage.setItem(CART_STORAGE_KEY, currentCart.id);
          }
        } else {
          const updatedCart = await addToCart(currentCart.id, [{ merchandiseId: variantId, quantity }]);
          if (updatedCart) {
            setCart(updatedCart);
          }
        }
        setIsOpen(true);
      } catch (error) {
        console.error("Failed to add item to cart:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const updateQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        if (quantity <= 0) {
          const updatedCart = await removeCartLines(cart.id, [lineId]);
          if (updatedCart) setCart(updatedCart);
        } else {
          const updatedCart = await updateCartLines(cart.id, [{ id: lineId, quantity }]);
          if (updatedCart) setCart(updatedCart);
        }
      } catch (error) {
        console.error("Failed to update cart line quantity:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        const updatedCart = await removeCartLines(cart.id, [lineId]);
        if (updatedCart) setCart(updatedCart);
      } catch (error) {
        console.error("Failed to remove item from cart:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const totalQuantity = cart?.totalQuantity || 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        isLoading,
        openCart,
        closeCart,
        addItem,
        updateQuantity,
        removeItem,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
