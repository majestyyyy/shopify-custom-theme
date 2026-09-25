import React from "react";
import Link from "next/link";
import { ArrowUpRight, Shirt, Sparkles, Tag, Layers, Flame } from "lucide-react";

interface CategoryItem {
  title: string;
  handle: string;
  tagline: string;
  spec: string;
  iconName: string;
}

const CATEGORY_CARDS: CategoryItem[] = [
  {
    title: "University Shirts",
    handle: "shirt",
    tagline: "Heavyweight Box-Fit Tees",
    spec: "260 GSM Carded Cotton",
    iconName: "shirt",
  },
  {
    title: "Heavyweight Hoodies",
    handle: "hoodie",
    tagline: "Fleece & Letterman Pullovers",
    spec: "400 GSM Heavy Fleece",
    iconName: "hoodie",
  },
  {
    title: "Campus Caps",
    handle: "cap",
    tagline: "Wool Snapbacks & Dad Caps",
    spec: "3D Raised Embroidery",
    iconName: "cap",
  },
  {
    title: "Game Day Jerseys",
    handle: "jersey",
    tagline: "Breathable Athletic Mesh",
    spec: "Varsity Performance Mesh",
    iconName: "jersey",
  },
  {
    title: "University Lanyards",
    handle: "lanyard",
    tagline: "Woven ID Lanyards",
    spec: "Alloy Swivel Clasps",
    iconName: "lanyard",
  },
];

export default function CategoryBanners() {
  return (
    <section className="py-16 bg-white text-zinc-950 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 rounded-none border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-zinc-800 shadow-sm">
              <Shirt className="h-3.5 w-3.5 text-black" />
              <span>CATEGORIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase text-zinc-950">
              Shop by Merch Type
            </h2>
          </div>
          <Link
            href="/collections/shirt"
            className="text-sm font-bold text-zinc-950 hover:text-zinc-600 transition flex items-center gap-1 group"
          >
            <span>Explore all categories</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* 5-Category Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CATEGORY_CARDS.map((cat, idx) => (
            <Link
              key={cat.handle}
              href={`/collections/${cat.handle}`}
              className="group relative flex flex-col overflow-hidden rounded-none bg-zinc-950 aspect-[3/4] justify-between p-5 text-white transition-all duration-300 hover:shadow-2xl border border-zinc-300 hover:border-black select-none"
            >
              {/* Background Architectural Vector Pattern */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black pointer-events-none" />
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px] group-hover:opacity-25 transition-opacity duration-500" />

              {/* Watermark Index in Background */}
              <div className="absolute right-2 top-2 font-black text-6xl text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none tracking-tighter">
                0{idx + 1}
              </div>

              {/* Top Action Row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-0.5 bg-zinc-900/80">
                  {cat.spec}
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-none bg-black/60 border border-zinc-700 text-white backdrop-blur-md transition-all group-hover:bg-white group-hover:text-black group-hover:border-white">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Lower Left Corner: Category Info */}
              <div className="relative z-10 flex flex-col justify-end space-y-1 mt-auto text-left">
                <h3 className="text-lg font-black tracking-tight text-white group-hover:text-zinc-100 transition uppercase leading-tight">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-1 font-medium">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
