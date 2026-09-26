import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Award, Sparkles, CheckCircle2, Users, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Collegiate Campus Store",
  description: "Learn more about our collegiate store - premier provider of university merchandise, custom apparel, and campus gear.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-xs font-semibold text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-white" />
            <span>Our Story & Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-white underline decoration-zinc-500">Collegiate Campus Store</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Your premier destination for high-quality collegiate merchandise, custom university apparel, game-day jerseys, heavyweight hoodies, and student organization merchandise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
              <Award className="h-4 w-4 text-black" />
              <span>Campus Excellence Since Day One</span>
            </div>
            <h2 className="text-3xl font-extrabold text-zinc-950 sm:text-4xl">
              We bring your campus pride to life with premium apparel.
            </h2>
            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
              We believe university pride should be worn with comfort and durability. We specialize in producing official and custom merchandise for universities across the Philippines, including <strong>UE, FEU, UST, DLSU, ADU, ADMU, UP, NU</strong>, and more.
            </p>
            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
              From heavyweight 400GSM fleece hoodies and breathable athletic jerseys to screen-printed graphic tees and customized student organization lanyards, our craftsmanship guarantees apparel that lasts through all your university years and beyond.
            </p>
          </div>

          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-none bg-black p-8 flex flex-col justify-between text-white shadow-2xl border border-zinc-800">
            <div className="flex h-12 w-12 items-center justify-center border border-zinc-700 bg-white text-black font-black text-lg">
              CS
            </div>
            <div className="space-y-2">
              <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Our Commitment</span>
              <h3 className="text-2xl font-bold">Uncompromising Quality & Speed</h3>
              <p className="text-xs text-zinc-400">
                Heavyweight fabrics • Precision embroidery • High-density silkscreen • Fast campus delivery
              </p>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-200">
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white shadow-sm">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-zinc-950">Premium Blanks & Fabrics</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              We exclusively source heavyweight carded cotton, 400GSM organic fleece, and authentic poly-mesh materials.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white shadow-sm">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-zinc-950">Student & Org Focused</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Tailored tiered pricing, low batch minimums, and dedicated mock-up designers for college clubs and sports teams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white shadow-sm">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-zinc-950">Direct Shopify Checkout</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Seamless headless e-commerce browsing with encrypted, ultra-fast Shopify payment gateway processing.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-black text-white p-8 sm:p-12 text-center space-y-6 border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to wear your university colors?</h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Browse our latest collegiate drop or contact our custom team for bulk batch orders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-black hover:bg-zinc-200 transition"
            >
              <span>Shop All Merch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-zinc-800 hover:border-white transition"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
