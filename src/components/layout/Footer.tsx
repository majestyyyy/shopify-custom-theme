"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-16 flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Printing Avenue PH Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white leading-tight">
                  PRINTING AVENUE PH
                </span>
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Collegiate Merchandise Store
                </span>
              </div>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Printing Avenue PH is your trusted university apparel partner providing official and custom heavyweight hoodies, varsity jerseys, graphic tees, caps, and lanyards for collegiate pride.
            </p>
          </div>

          {/* Universities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Universities</h4>
            <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
              <Link href="/collections/ue" className="hover:text-white transition">UE</Link>
              <Link href="/collections/feu" className="hover:text-white transition">FEU</Link>
              <Link href="/collections/ust" className="hover:text-white transition">UST</Link>
              <Link href="/collections/dlsu" className="hover:text-white transition">DLSU</Link>
              <Link href="/collections/adu" className="hover:text-white transition">ADU</Link>
              <Link href="/collections/admu" className="hover:text-white transition">ADMU</Link>
              <Link href="/collections/up" className="hover:text-white transition">UP</Link>
              <Link href="/collections/nu" className="hover:text-white transition">NU</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Categories</h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li><Link href="/collections/shirt" className="hover:text-white transition">Shirts</Link></li>
              <li><Link href="/collections/hoodie" className="hover:text-white transition">Hoodies</Link></li>
              <li><Link href="/collections/cap" className="hover:text-white transition">Caps</Link></li>
              <li><Link href="/collections/jersey" className="hover:text-white transition">Jerseys</Link></li>
              <li><Link href="/collections/lanyard" className="hover:text-white transition">Lanyards</Link></li>
            </ul>
          </div>

          {/* Quick Links & Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition">Custom Org Orders</a></li>
              <li><a href="#" className="hover:text-white transition">Size Guide</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Printing Avenue PH. All rights reserved.</p>
          <p className="flex items-center gap-1 text-zinc-400">
            Powered by <span className="font-semibold text-white">Shopify Headless Commerce</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
