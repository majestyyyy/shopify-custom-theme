import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shirt } from "lucide-react";

const CATEGORY_CARDS = [
  {
    title: "University Shirts",
    handle: "shirt",
    tagline: "Heavyweight Box-Fit & Graphic Tees",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Heavyweight Hoodies",
    handle: "hoodie",
    tagline: "400GSM Fleece & Letterman Pullovers",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Campus Caps",
    handle: "cap",
    tagline: "Wool Snapbacks & 3D Embroidery",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Game Day Jerseys",
    handle: "jersey",
    tagline: "Breathable Athletic Mesh Jerseys",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "University Lanyards",
    handle: "lanyard",
    tagline: "Premium Woven ID Lanyards",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CategoryBanners() {
  return (
    <section className="py-16 bg-zinc-950 text-white border-b border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-zinc-300">
              <Shirt className="h-3.5 w-3.5 text-white" />
              <span>CATEGORIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">
              Shop by Merch Type
            </h2>
          </div>
          <Link
            href="/collections/shirt"
            className="text-sm font-bold text-zinc-300 hover:text-white transition flex items-center gap-1"
          >
            Explore all categories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CATEGORY_CARDS.map((cat) => (
            <Link
              key={cat.handle}
              href={`/collections/${cat.handle}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-black aspect-[3/4] justify-end p-5 text-white transition hover:shadow-2xl border border-zinc-800 hover:border-zinc-400"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-75"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-zinc-100 transition">
                    {cat.title}
                  </h3>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-zinc-400 line-clamp-2 font-medium">
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
