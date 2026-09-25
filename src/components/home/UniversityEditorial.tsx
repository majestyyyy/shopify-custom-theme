import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

interface UniversityItem {
  code: string;
  name: string;
  handle: string;
  colors: string;
  tagline: string;
  established?: string;
}

const UNIVERSITY_EDITORIAL: UniversityItem[] = [
  {
    code: "UP",
    name: "University of the Philippines",
    handle: "up",
    colors: "Maroon & Forest Green",
    tagline: "Honor and Excellence",
    established: "1908",
  },
  {
    code: "UST",
    name: "University of Santo Tomas",
    handle: "ust",
    colors: "Gold, Black & White",
    tagline: "Veritas in Caritate",
    established: "1611",
  },
  {
    code: "DLSU",
    name: "De La Salle University",
    handle: "dlsu",
    colors: "Green & White",
    tagline: "Religio, Mores, Cultura",
    established: "1911",
  },
  {
    code: "ADMU",
    name: "Ateneo de Manila University",
    handle: "admu",
    colors: "Royal Blue & White",
    tagline: "Lux in Domino",
    established: "1859",
  },
  {
    code: "FEU",
    name: "Far Eastern University",
    handle: "feu",
    colors: "Green & Gold",
    tagline: "Fortitude, Excellence, Uprightness",
    established: "1928",
  },
  {
    code: "UE",
    name: "University of the East",
    handle: "ue",
    colors: "Red & White",
    tagline: "Tomorrow Begins in the East",
    established: "1946",
  },
  {
    code: "ADU",
    name: "Adamson University",
    handle: "adu",
    colors: "Blue & White",
    tagline: "Veritas in Caritate",
    established: "1932",
  },
  {
    code: "NU",
    name: "National University",
    handle: "nu",
    colors: "Navy Blue & Gold",
    tagline: "Education that Works",
    established: "1900",
  },
];

export default function UniversityEditorial() {
  return (
    <section className="py-16 bg-white text-zinc-950 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-zinc-950">
              Shop by University
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
              Explore dedicated university lookbooks featuring heavyweight fleece hoodies, varsity game-day jerseys, everyday graphic tees, caps, and lanyards.
            </p>
          </div>

          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            8 Collegiate Editions Available
          </div>
        </div>

        {/* 8-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {UNIVERSITY_EDITORIAL.map((uni) => (
            <Link
              key={uni.code}
              href={`/collections/${uni.handle}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-none bg-zinc-950 aspect-[3/4] p-6 text-white border border-zinc-300 hover:border-black transition-all duration-500 hover:shadow-2xl select-none"
            >
              {/* Background Architectural Vector Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black pointer-events-none" />
              
              {/* Subtle Grid Lines & Architectural Lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] group-hover:opacity-25 transition-opacity duration-500" />
              
              {/* Big Watermark Code in Background Center/Right */}
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 font-black text-[120px] leading-none text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none tracking-tighter select-none">
                {uni.code}
              </div>

              {/* Top Row: Graduation Icon & Arrow Action */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-none bg-white/5 border border-zinc-800 text-zinc-400 backdrop-blur-sm group-hover:text-white group-hover:border-zinc-600 transition">
                  <GraduationCap className="h-4 w-4" />
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-none bg-black/60 border border-zinc-700 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Lower Left Corner: University Name & Info */}
              <div className="relative z-10 text-left space-y-1.5 mt-auto">
                <div className="flex items-center gap-2">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-800 px-2 py-0.5 bg-zinc-900/80">
                    {uni.colors}
                  </span>
                  {uni.established && (
                    <span className="text-[10px] font-medium text-zinc-500">
                      EST. {uni.established}
                    </span>
                  )}
                </div>

                {/* Big University Code */}
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-zinc-100 transition-colors uppercase leading-none">
                  {uni.code}
                </h3>

                {/* Full University Name */}
                <p className="text-sm font-bold text-zinc-300 line-clamp-1 leading-snug">
                  {uni.name}
                </p>

                {/* Tagline / Motto */}
                <p className="text-[11px] text-zinc-400 italic line-clamp-1">
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
