"use client";

import React from "react";
import { Users, Shirt, Award, Send } from "lucide-react";

export default function CustomOrdersBanner() {
  return (
    <section className="mx-4 sm:mx-6 lg:mx-8 my-12">
      <div className="rounded-3xl border border-zinc-800 bg-black text-white p-8 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-3.5 py-1 text-xs font-bold text-white">
              <Award className="h-3.5 w-3.5 text-white" />
              <span>Custom Batch & Organization Orders</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Need Custom Merch for Your Club, Varsity Team, or Batch?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We specialize in custom screen printing, chenille embroidery, and sublimation for university student councils, college sports teams, sororities/fraternities, and alumni associations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 shadow-sm border border-zinc-800">
                  <Shirt className="h-5 w-5 text-white" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Heavyweight Blanks</p>
                  <p className="text-zinc-400">260-400 GSM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 shadow-sm border border-zinc-800">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Low Minimums</p>
                  <p className="text-zinc-400">Starting at 20 pcs</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 shadow-sm border border-zinc-800">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white">Student Discounts</p>
                  <p className="text-zinc-400">Tiered bulk pricing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-zinc-950 rounded-2xl border border-zinc-800 p-6 shadow-xl">
            <h3 className="font-bold text-white text-lg">Request Custom Merch Quote</h3>
            <p className="text-xs text-zinc-400 mt-1">Get mockup renders & pricing within 24 hours.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="University / Organization Name"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-white focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-2">
                <select className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-xs text-zinc-300 focus:border-white focus:outline-none">
                  <option>Sweatshirts & Fleece</option>
                  <option>Game-Day Jerseys</option>
                  <option>T-Shirts</option>
                  <option>Caps & Lanyards</option>
                </select>
                <input
                  type="number"
                  placeholder="Estimated Qty (e.g. 50)"
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-white focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Contact Email Address"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-black hover:bg-zinc-200 transition"
              >
                <Send className="h-3.5 w-3.5 text-black" />
                <span>Submit Custom Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
