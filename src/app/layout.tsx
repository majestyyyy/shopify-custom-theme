import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: "Printing Avenue PH | Official University Merchandise & Custom Apparel",
  description: "Shop official and custom collegiate merchandise: Heavyweight Hoodies, Game-Day Jerseys, T-Shirts, Caps, and Lanyards for UE, FEU, UST, DLSU, ADU, ADMU, UP, NU.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
