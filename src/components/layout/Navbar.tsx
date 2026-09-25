"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useCart } from "@/context/cart-context";

const UNIVERSITIES = [
  { code: "UE", name: "University of the East", handle: "ue" },
  { code: "FEU", name: "Far Eastern University", handle: "feu" },
  { code: "UST", name: "University of Santo Tomas", handle: "ust" },
  { code: "DLSU", name: "De La Salle University", handle: "dlsu" },
  { code: "ADU", name: "Adamson University", handle: "adu" },
  { code: "ADMU", name: "Ateneo de Manila University", handle: "admu" },
  { code: "UP", name: "University of the Philippines", handle: "up" },
  { code: "NU", name: "National University", handle: "nu" },
];

const CATEGORIES = [
  { name: "Shirt", handle: "shirt", icon: "👕" },
  { name: "Hoodie", handle: "hoodie", icon: "🧥" },
  { name: "Cap", handle: "cap", icon: "🧢" },
  { name: "Jersey", handle: "jersey", icon: "🏀" },
  { name: "Lanyard", handle: "lanyard", icon: "🏷️" },
];

export default function Navbar() {
  const { openCart, totalQuantity } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"university" | "category" | null>(null);

  const [mobileUniOpen, setMobileUniOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-xs font-medium py-2.5 px-4 text-center border-b border-zinc-800">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-white" />
          <span>
            PRINTING AVENUE PH — Official & Custom University Merchandise
          </span>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header className="sticky top-0 z-40 w-full bg-black text-white border-b border-zinc-800 shadow-xl">
        <div ref={navRef} className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Logo Only (Acts as Home Button) */}
          <div className="flex items-center flex-shrink-0 z-10">
            <Link
              href="/"
              aria-label="Printing Avenue PH - Home"
              className="relative flex h-18 w-28 sm:h-20 sm:w-36 md:h-22 md:w-40 items-center justify-center transition-transform hover:scale-105 active:scale-95 group"
            >
              <Image
                src="/logo.svg"
                alt="Printing Avenue PH"
                fill
                sizes="(min-width: 768px) 160px, (min-width: 640px) 144px, 112px"
                className="object-contain transition group-hover:brightness-125"
                priority
              />
            </Link>
          </div>

          {/* Center: Exactly Centered Desktop Navigation Links */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-2 text-sm font-semibold text-white z-0">
            {/* University Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "university" ? null : "university")}
                onMouseEnter={() => setActiveDropdown("university")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition ${
                  activeDropdown === "university"
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <span>University</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "university" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* University Dropdown Menu */}
              {activeDropdown === "university" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border border-zinc-800 bg-black p-2 shadow-2xl animate-in fade-in-50 zoom-in-95 z-50"
                >
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 mb-1">
                    Select University
                  </div>
                  <div className="grid grid-cols-1 gap-0.5">
                    {UNIVERSITIES.map((uni) => (
                      <Link
                        key={uni.code}
                        href={`/collections/${uni.handle}`}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
                      >
                        <span className="font-bold text-white">{uni.code}</span>
                        <span className="text-xs text-zinc-400 text-right line-clamp-1">{uni.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === "category" ? null : "category")}
                onMouseEnter={() => setActiveDropdown("category")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl transition ${
                  activeDropdown === "category"
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <span>Category</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "category" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Category Dropdown Menu */}
              {activeDropdown === "category" && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl border border-zinc-800 bg-black p-2 shadow-2xl animate-in fade-in-50 zoom-in-95 z-50"
                >
                  <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 mb-1">
                    Select Category
                  </div>
                  <div className="grid grid-cols-1 gap-0.5">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.name}
                        href={`/collections/${cat.handle}`}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
                      >
                        <span className="text-base">{cat.icon}</span>
                        <span className="font-semibold text-white">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-4 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right: Shopping Cart & Mobile Menu Actions */}
          <div className="flex items-center gap-3 flex-shrink-0 z-10">
            <button
              onClick={openCart}
              aria-label="Shopping Cart"
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-white transition hover:border-white hover:bg-zinc-800 active:scale-95 shadow-sm"
            >
              <ShoppingBag className="h-5 w-5 text-white" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-black text-black shadow-md animate-in zoom-in-50">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-white lg:hidden transition hover:bg-zinc-800"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-zinc-800 bg-black px-4 py-6 lg:hidden animate-in slide-in-from-top-3 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-2 text-base font-semibold text-white">
              {/* Mobile University Accordion */}
              <div className="rounded-2xl bg-zinc-950 p-2.5 border border-zinc-800">
                <button
                  type="button"
                  onClick={() => setMobileUniOpen(!mobileUniOpen)}
                  className="flex w-full items-center justify-between px-2 py-2 text-sm font-bold text-white"
                >
                  <span>University</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileUniOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileUniOpen && (
                  <div className="grid grid-cols-2 gap-1.5 pt-2 pl-1">
                    {UNIVERSITIES.map((uni) => (
                      <Link
                        key={uni.code}
                        href={`/collections/${uni.handle}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                      >
                        {uni.code} - {uni.name.split(" ")[0]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Category Accordion */}
              <div className="rounded-2xl bg-zinc-950 p-2.5 border border-zinc-800">
                <button
                  type="button"
                  onClick={() => setMobileCatOpen(!mobileCatOpen)}
                  className="flex w-full items-center justify-between px-2 py-2 text-sm font-bold text-white"
                >
                  <span>Category</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileCatOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCatOpen && (
                  <div className="grid grid-cols-2 gap-1.5 pt-2 pl-1">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.name}
                        href={`/collections/${cat.handle}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-xl bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 flex items-center gap-1.5 border border-zinc-800"
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-zinc-900 transition"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-zinc-900 transition"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
