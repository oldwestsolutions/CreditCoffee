"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ads, adCategories } from "@/lib/mock-data";
import type { Ad } from "@/lib/types";

interface ViewState {
  adId: string;
  timeLeft: number;
  completed: boolean;
}

export default function AdsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewState, setViewState] = useState<ViewState | null>(null);
  const [earnings, setEarnings] = useState(0);
  const [adsViewed, setAdsViewed] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showEarnedToast, setShowEarnedToast] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? ads
      : ads.filter((a) => a.category === activeCategory);

  const startViewing = useCallback((ad: Ad) => {
    if (!walletConnected) return;
    setViewState({ adId: ad.id, timeLeft: ad.duration, completed: false });
  }, [walletConnected]);

  useEffect(() => {
    if (!viewState || viewState.completed || viewState.timeLeft <= 0) return;

    const timer = setInterval(() => {
      setViewState((prev) => {
        if (!prev) return null;
        const next = prev.timeLeft - 1;
        if (next <= 0) {
          const ad = ads.find((a) => a.id === prev.adId);
          if (ad) {
            setEarnings((e) => Math.round((e + ad.reward) * 100) / 100);
            setAdsViewed((v) => v + 1);
            setShowEarnedToast(ad.reward);
            setTimeout(() => setShowEarnedToast(null), 3000);
          }
          return { ...prev, timeLeft: 0, completed: true };
        }
        return { ...prev, timeLeft: next };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [viewState]);

  const activeAd = viewState ? ads.find((a) => a.id === viewState.adId) : null;

  return (
    <>
      {/* Header */}
      <section className="bg-forest-900 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(201,169,110,0.08)_0%,_transparent_50%)]" />
        <div className="container-main relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                              bg-brand-gold/10 border border-brand-gold/20 mb-6">
                <span className="text-brand-gold text-xs font-medium tracking-wider uppercase">
                  Earn USDC
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-cream-100 
                             leading-tight mb-4">
                Your Attention
                <br />
                <span className="text-brand-gold">Has Value</span>
              </h1>
              <p className="text-lg text-cream-400 font-light leading-relaxed">
                View curated sponsor content, complete the Coffee Break timer, and earn a
                share of advertiser spend as USDC. Real payouts for real engagement.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold text-brand-gold">
                  {earnings.toFixed(2)}
                </div>
                <div className="text-xs text-cream-500 mt-1">USDC earned</div>
              </div>
              <div className="w-px bg-forest-700" />
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold text-cream-100">
                  {adsViewed}
                </div>
                <div className="text-xs text-cream-500 mt-1">Ads Viewed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Connect */}
      {!walletConnected && (
        <section className="bg-cream-300/50 border-b border-cream-300">
          <div className="container-main py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 
                            p-6 rounded-2xl bg-white border border-cream-300/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-forest-900/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-forest-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-forest-900">Connect Your Wallet</h3>
                  <p className="text-sm text-cream-700">
                    Connect a wallet to receive USDC from advertiser revenue share when you view ads.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setWalletConnected(true)}
                className="btn-primary whitespace-nowrap"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Earned Toast */}
      <AnimatePresence>
        {showEarnedToast !== null && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 z-50 px-6 py-3 rounded-2xl 
                       bg-forest-900 text-cream-100 shadow-xl flex items-center gap-3"
          >
            <span className="text-brand-gold text-lg">☕</span>
            <span className="font-medium">+{showEarnedToast.toFixed(2)} USDC earned!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Ad Viewer */}
      <AnimatePresence>
        {viewState && activeAd && !viewState.completed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={activeAd.imageUrl}
                  alt={activeAd.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="tag">Sponsored by {activeAd.sponsor}</span>
                  <span className="text-sm font-medium text-brand-gold">
                    +{activeAd.reward.toFixed(2)} USDC
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2">
                  {activeAd.title}
                </h3>
                <p className="text-sm text-forest-700/70 leading-relaxed mb-6">
                  {activeAd.description}
                </p>

                {/* Coffee Break Timer */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-forest-900 flex items-center gap-2">
                      ☕ Coffee Break Timer
                    </span>
                    <span className="text-sm font-mono text-forest-700">
                      {viewState.timeLeft}s
                    </span>
                  </div>
                  <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-forest-900 to-brand-gold rounded-full"
                      initial={{ width: "0%" }}
                      animate={{
                        width: `${((activeAd.duration - viewState.timeLeft) / activeAd.duration) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <p className="text-xs text-cream-600 text-center">
                  Keep this window open to earn your reward
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Modal */}
      <AnimatePresence>
        {viewState?.completed && activeAd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-sm w-full p-8 text-center shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-forest-900/5 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2">
                Coffee Break Complete!
              </h3>
              <p className="text-sm text-cream-700 mb-4">
                You earned <span className="font-semibold text-brand-gold">{activeAd.reward.toFixed(2)} USDC</span> for 
                viewing this ad.
              </p>
              <div className="text-xs text-cream-600 mb-6">
                Total balance: {earnings.toFixed(2)} USDC
              </div>
              <button
                onClick={() => setViewState(null)}
                className="btn-primary w-full"
              >
                Continue Browsing
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ad Categories & Grid */}
      <section className="py-12 bg-cream-200">
        <div className="container-main">
          <div className="flex flex-wrap gap-2 mb-8">
            {adCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all
                  ${
                    activeCategory === cat
                      ? "bg-forest-900 text-cream-100"
                      : "bg-white text-forest-800 hover:bg-cream-300 border border-cream-300"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ad, i) => (
              <motion.div
                key={ad.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="card group overflow-hidden"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={ad.imageUrl}
                    alt={ad.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full 
                                  bg-brand-gold/90 text-forest-900 text-xs font-semibold">
                    +{ad.reward.toFixed(2)} USDC
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tag">{ad.category}</span>
                    <span className="text-xs text-cream-600">
                      {ad.duration}s • {ad.sponsor}
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-semibold text-forest-900 mb-2 leading-tight">
                    {ad.title}
                  </h3>
                  <p className="text-sm text-forest-700/70 leading-relaxed mb-4 line-clamp-2">
                    {ad.description}
                  </p>
                  <button
                    onClick={() => startViewing(ad)}
                    disabled={!walletConnected}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all
                      ${
                        walletConnected
                          ? "btn-primary"
                          : "bg-cream-200 text-cream-600 cursor-not-allowed"
                      }`}
                  >
                    {walletConnected ? "☕ Start Coffee Break" : "Connect Wallet First"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
