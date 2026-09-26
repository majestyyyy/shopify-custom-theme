import React from "react";
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
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />
              
              {/* Center Watermark & Monogram Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                <div className="flex h-16 w-16 items-center justify-center border border-zinc-800 bg-white/[0.03] text-zinc-500 mb-2 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-colors">
                  <GraduationCap className="h-8 w-8 stroke-[1.25]" />
                </div>
                <div className="font-black text-5xl sm:text-6xl tracking-tighter text-white/[0.12] group-hover:text-white/[0.22] transition-colors uppercase leading-none">
                  {uni.code}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 mt-1">
                  COLLEGIATE LOOKBOOK
                </span>
              </div>

              <div className="relative z-10 text-left space-y-1.5 mt-auto pt-8">
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
