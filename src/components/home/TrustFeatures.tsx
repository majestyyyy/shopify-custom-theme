import React from "react";
import { Truck, ShieldCheck, Shirt, Sparkles } from "lucide-react";

export default function TrustFeatures() {
  return (
    <section className="bg-zinc-950 text-white border-y border-zinc-800/80 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-black/40 border border-zinc-800/60 transition hover:border-zinc-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm border border-zinc-800 flex-shrink-0">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Nationwide Delivery</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Campus pickup & fast shipping</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-2xl bg-black/40 border border-zinc-800/60 transition hover:border-zinc-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm border border-zinc-800 flex-shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Official Quality Merch</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Heavyweight fabrics & embroidery</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-2xl bg-black/40 border border-zinc-800/60 transition hover:border-zinc-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm border border-zinc-800 flex-shrink-0">
              <Shirt className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Custom Batch Orders</h4>
              <p className="text-xs text-zinc-400 mt-0.5">For university orgs & teams</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-2xl bg-black/40 border border-zinc-800/60 transition hover:border-zinc-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-sm border border-zinc-800 flex-shrink-0">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Shopify Checkout</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Encrypted payment security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
