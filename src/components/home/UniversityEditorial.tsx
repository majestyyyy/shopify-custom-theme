import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

interface UniversityItem {
  code: string;
  name: string;
  handle: string;
  colors: string;
  image: string;
  tagline: string;
}

const UNIVERSITY_EDITORIAL: UniversityItem[] = [
  {
    code: "UP",
    name: "University of the Philippines",
    handle: "up",
    colors: "Maroon & Forest Green",
    tagline: "Honor and Excellence",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "UST",
    name: "University of Santo Tomas",
    handle: "ust",
    colors: "Gold, Black & White",
    tagline: "Veritas in Caritate",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "DLSU",
    name: "De La Salle University",
    handle: "dlsu",
    colors: "Green & White",
    tagline: "Religio, Mores, Cultura",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "ADMU",
    name: "Ateneo de Manila University",
    handle: "admu",
    colors: "Royal Blue & White",
    tagline: "Lux in Domino",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "FEU",
    name: "Far Eastern University",
    handle: "feu",
    colors: "Green & Gold",
    tagline: "Fortitude, Excellence, Uprightness",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "UE",
    name: "University of the East",
    handle: "ue",
    colors: "Red & White",
    tagline: "Tomorrow Begins in the East",
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "ADU",
    name: "Adamson University",
    handle: "adu",
    colors: "Blue & White",
    tagline: "Veritas in Caritate",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    code: "NU",
    name: "National University",
    handle: "nu",
    colors: "Navy Blue & Gold",
    tagline: "Education that Works",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
  },
];

export default function UniversityEditorial() {
  return (
    <section className="py-16 bg-black text-white border-t border-b border-zinc-800 my-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-zinc-300">
              <GraduationCap className="h-3.5 w-3.5 text-white" />
              <span>COLLECTION EDITORIAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-white">
              Shop by University
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Explore dedicated university collections featuring heavyweight fleece hoodies, varsity game-day jerseys, everyday graphic tees, caps, and lanyards.
            </p>
          </div>

          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            8 Collegiate Editions Available
          </div>
        </div>

        {/* 8-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UNIVERSITY_EDITORIAL.map((uni) => (
            <Link
              key={uni.code}
              href={`/collections/${uni.handle}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-950 aspect-[3/4] p-6 text-white border border-zinc-800 hover:border-zinc-400 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Background Image Placeholder with Zoom Effect */}
              <Image
                src={uni.image}
                alt={uni.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-50 group-hover:opacity-70"
              />

              {/* Gradient Darkness Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

              {/* Top Right: Arrow Action Button */}
              <div className="relative z-10 flex justify-end">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 border border-zinc-700 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-110">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Lower Left Corner: University Name & Info */}
              <div className="relative z-10 text-left space-y-1 mt-auto">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                  {uni.colors}
                </span>

                {/* Big University Code */}
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-zinc-100 transition-colors uppercase leading-none">
                  {uni.code}
                </h3>

                {/* Full University Name */}
                <p className="text-sm font-bold text-zinc-200 line-clamp-1 leading-snug">
                  {uni.name}
                </p>

                {/* Tagline / Motto */}
                <p className="text-[11px] text-zinc-400 italic pt-0.5 line-clamp-1">
                  &ldquo;{uni.tagline}&rdquo;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
