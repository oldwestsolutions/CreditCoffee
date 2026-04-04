"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { perks, perkCategories } from "@/lib/mock-data";
import type { PerkCategory } from "@/lib/types";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function PerksPage() {
  const [activeCategory, setActiveCategory] = useState<PerkCategory | "all">("all");
  const [savedPerks, setSavedPerks] = useState<Set<string>>(new Set(["p1", "p4", "p7"]));

  const filtered =
    activeCategory === "all"
      ? perks
      : perks.filter((p) => p.category === activeCategory);

  const toggleSave = (id: string) => {
    setSavedPerks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-forest-900 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,110,0.08)_0%,_transparent_50%)]" />
        <div className="container-main relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                            bg-brand-gold/10 border border-brand-gold/20 mb-6">
              <span className="text-brand-gold text-xs font-medium tracking-wider uppercase">
                Perks Directory
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-cream-100 
                           leading-tight mb-4">
              Perks You Can
              <br />
              <span className="text-brand-gold">Unlock</span>
            </h1>
            <p className="text-lg text-cream-400 font-light leading-relaxed">
              A living directory of financial benefits available to you — from cashback and 
              sign-up bonuses to business credit lines and private banking access.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-cream-300/60 sticky top-16 md:top-20 z-30">
        <div className="container-main py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium 
                         transition-all whitespace-nowrap
                ${
                  activeCategory === "all"
                    ? "bg-forest-900 text-cream-100"
                    : "bg-cream-100 text-forest-800 hover:bg-cream-200 border border-cream-300"
                }`}
            >
              All Perks
              <span className="text-xs opacity-60">({perks.length})</span>
            </button>
            {perkCategories.map((cat) => {
              const count = perks.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium 
                             transition-all whitespace-nowrap
                    ${
                      activeCategory === cat.id
                        ? "bg-forest-900 text-cream-100"
                        : "bg-cream-100 text-forest-800 hover:bg-cream-200 border border-cream-300"
                    }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                  <span className="text-xs opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-12 bg-cream-200">
        <div className="container-main">
          {/* Featured Banner */}
          {activeCategory === "all" && (
            <div className="mb-10 p-8 rounded-2xl bg-gradient-to-br from-forest-900 to-forest-800 
                           text-cream-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-serif font-semibold mb-2">
                  Unlock Your Financial Potential
                </h2>
                <p className="text-cream-400 text-sm max-w-lg mb-4">
                  From your first cashback card to business credit lines with no personal guarantee — 
                  every perk here is a door. You just need the right key.
                </p>
                <div className="flex items-center gap-4 text-xs text-cream-500">
                  <span>{perks.length} perks available</span>
                  <span>•</span>
                  <span>{perks.filter((p) => p.featured).length} featured</span>
                  <span>•</span>
                  <span>{savedPerks.size} saved</span>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((perk, i) => (
              <motion.div
                key={perk.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="card p-6 flex flex-col relative group"
              >
                {perk.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold 
                                     bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                      Featured
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{perk.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-serif font-semibold text-forest-900 leading-tight mb-1">
                      {perk.title}
                    </h3>
                    <span className="text-xs text-cream-600">{perk.subcategory}</span>
                  </div>
                </div>

                <p className="text-sm text-forest-700/70 leading-relaxed mb-4 flex-1">
                  {perk.description}
                </p>

                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-cream-600 mt-0.5 shrink-0">Requires:</span>
                    <span className="text-xs text-forest-800">{perk.requirements}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-cream-600 mt-0.5 shrink-0">Value:</span>
                    <span className="text-xs font-semibold text-forest-900">{perk.value}</span>
                  </div>
                </div>

                <button
                  onClick={() => toggleSave(perk.id)}
                  className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                    ${
                      savedPerks.has(perk.id)
                        ? "bg-forest-900 text-cream-100 hover:bg-forest-800"
                        : "bg-cream-100 text-forest-900 border border-cream-300 hover:bg-cream-200"
                    }`}
                >
                  {savedPerks.has(perk.id) ? "✓ Saved" : "Save Perk"}
                </button>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-cream-600 text-lg">No perks in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
