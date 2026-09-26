import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, Shirt, Award, Users, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-zinc-950 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Bold Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 border border-zinc-300 bg-zinc-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-900 shadow-sm rounded-none">
              <span className="flex h-2 w-2 bg-black animate-pulse" />
              <span>COLLEGIATE SEASON 2026</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-zinc-950 leading-[0.95]">
                WEAR YOUR <br />
                <span className="text-zinc-400">CAMPUS</span> PRIDE.
              </h1>
              <p className="pt-2 text-base sm:text-lg text-zinc-600 max-w-xl font-normal leading-relaxed">
                Authentic heavyweight 400GSM fleece hoodies, game-day athletic jerseys, 260GSM carded graphic tees, and woven lanyards crafted for UAAP & NCAA collegiate athletes, students, and alumni.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl hover:bg-zinc-800 active:scale-[0.99] transition rounded-none"
              >
                <span>Shop All Campus Merch</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/collections/hoodie"
                className="inline-flex items-center justify-center gap-2 border-2 border-black bg-transparent px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-zinc-950 hover:bg-zinc-100 active:scale-[0.99] transition rounded-none"
              >
                <Shirt className="h-4 w-4" />
                <span>Heavyweight Fleece</span>
              </Link>
            </div>

            {/* Live Stats & Trust Counters */}
            <div className="pt-6 border-t border-zinc-200 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">8</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Collegiate Editions</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">400<span className="text-sm font-bold text-zinc-500">GSM</span></p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Brushed Heavy Fleece</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">100%</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Authentic Quality</p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Flagship Lookbook Card Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden bg-zinc-950 aspect-[4/5] p-8 text-white border border-zinc-300 hover:border-black transition-all duration-500 hover:shadow-2xl flex flex-col justify-between rounded-none select-none">
              
              {/* Background Architectural Vector Pattern */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black pointer-events-none" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Watermark Monogram */}
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 font-black text-[130px] leading-none text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none tracking-tighter select-none">
                UAAP
              </div>

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-zinc-300 border border-zinc-700 px-2.5 py-1 bg-zinc-900/90">
                  <Award className="h-3.5 w-3.5 text-white" />
                  <span>FLAGSHIP EDITION</span>
                </span>

                <span className="flex h-9 w-9 items-center justify-center bg-black/80 border border-zinc-700 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Card Center Feature Points */}
              <div className="relative z-10 space-y-3 my-auto py-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Chenille Stitch Patch Lettering
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Zero-Shrink Pre-Washed Carded Cotton
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Direct-to-Film & Silk Screen Graphics
                  </span>
                </div>
              </div>

              {/* Card Lower-Left Info */}
              <div className="relative z-10 text-left space-y-1.5 border-t border-zinc-800 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  COLLEGIATE APPAREL
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-none">
                  PRINTING AVENUE PH
                </h3>
                <p className="text-xs text-zinc-400">
                  Official Varsity Apparel & Custom Batch Specialists
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
