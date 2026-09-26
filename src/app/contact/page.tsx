"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-xs font-semibold text-zinc-300">
            <MessageSquare className="h-3.5 w-3.5 text-white" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-white underline decoration-zinc-500">Collegiate Campus Store</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Have questions regarding sizing, custom batch orders for your university org, or delivery times? We are here to help!
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-zinc-950">Reach Out to Us</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Our support and custom merch team operates Monday through Saturday to answer inquiries and prepare design proofs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-none bg-zinc-50 border border-zinc-200">
                <div className="flex h-10 w-10 items-center justify-center bg-black text-white flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950">Email Us</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">support@campusmerch.ph</p>
                  <p className="text-xs text-zinc-600">custom@campusmerch.ph</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950">Call / Viber Support</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">+63 (917) 000-0000</p>
                  <p className="text-xs text-zinc-600">+63 (2) 8000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950">Production Hub & Office</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    Metro Manila, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950">Operating Hours</h4>
                  <p className="text-xs text-zinc-600 mt-0.5">Mon - Sat: 9:00 AM – 6:00 PM PHT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-zinc-950 text-white">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950">Message Received!</h3>
                <p className="text-sm text-zinc-600 max-w-md mx-auto">
                  Thank you for reaching out. Our campus representative will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl bg-black px-6 py-2.5 text-xs font-bold text-white hover:bg-zinc-800 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-zinc-950">Send Us a Message</h3>
                <p className="text-xs text-zinc-500">Fill in your information and message below.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Juan Dela Cruz"
                      className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="juan@university.edu"
                      className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">University / Org Name</label>
                    <input
                      type="text"
                      placeholder="e.g. UST, DLSU, UP"
                      className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-700">Inquiry Type</label>
                    <select className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-xs text-zinc-700 focus:border-black focus:outline-none">
                      <option>Order Status & Shipping</option>
                      <option>Custom Bulk / Org Merch Quote</option>
                      <option>Sizing & Product Questions</option>
                      <option>General Feedback / Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you need..."
                    className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:border-black focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-xs font-bold text-white hover:bg-zinc-800 active:scale-[0.99] transition shadow-md"
                >
                  <Send className="h-3.5 w-3.5 text-white" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
