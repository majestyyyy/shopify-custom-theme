import React from "react";
import Link from "next/link";
import { GraduationCap, ShieldCheck, Sparkles, Shirt } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-zinc-950 py-20 sm:py-28 border-b border-zinc-200">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-zinc-100 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">

        {/* Main Title */}
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase leading-tight text-zinc-950">
          WEAR YOUR <br />
          <span className="bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-600 bg-clip-text text-transparent">
            CAMPUS PRIDE.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-600 leading-relaxed">
          Premium heavyweight 400GSM fleece Sweatshirts, varsity game-day jerseys, box-fit cotton tees, embroidered caps, and woven lanyards crafted for students, athletes, and alumni.
        </p>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#catalog"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-zinc-800 active:scale-[0.98] transition"
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span>Browse Catalog</span>
          </Link>

          <Link
            href="/collections/hoodie"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-zinc-900 bg-transparent px-8 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-100 active:scale-[0.98] transition"
          >
            <Shirt className="h-4 w-4 text-black" />
            <span>Explore Sweatshirts</span>
          </Link>
        </div>

        {/* Guarantees */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-600 font-medium">
          <span className="flex items-center gap-1.5 text-zinc-900 font-semibold">
            <ShieldCheck className="h-4 w-4 text-black" /> 100% Quality Guarantee
          </span>
          <span className="hidden sm:inline text-zinc-300">•</span>
          <span>Heavyweight Combed Cotton & 400GSM Fleece</span>
          <span className="hidden sm:inline text-zinc-300">•</span>
          <span>Custom Bulk Batch Orders for Orgs</span>
        </div>
      </div>
    </section>
  );
}
