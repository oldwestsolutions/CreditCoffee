"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ToolCard } from "@/components/ToolCard";
import { homeToolCards } from "@/lib/home-tools";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80";

function IconWallet() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,110,0.1)_0%,_transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="container-main relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-serif font-semibold text-cream-100 leading-[1.12] tracking-tight mb-6"
              >
                Where professional credit guidance
                <br />
                <span className="text-brand-gold">meets the smooth simplicity of a great cup.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base md:text-lg text-cream-400/95 leading-relaxed mb-8 max-w-lg font-light"
              >
                Credit Coffee brings bank-caliber perspective down to earth — clear writing, honest tools, and a pace that respects your time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                <Link href="/newsletter" className="btn-gold text-center text-sm px-6 py-3">
                  Start Reading
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl text-center text-sm font-medium border border-cream-400/25 text-cream-200 hover:bg-cream-100/5 transition-colors"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-cream-100/10 aspect-[4/3] lg:aspect-[5/4] max-h-[420px] lg:max-h-none"
            >
              <Image
                src={HERO_IMAGE}
                alt="Coffee shop atmosphere"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-24 md:py-32 bg-cream-200">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">What We Cover</h2>
            <p className="section-subheading mx-auto">
              Deep dives into the financial systems that shape your access, your credit, and your wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Credit & Banking",
                desc: "Credit score architecture, business credit stacking, banking relationship tiers, and the strategies institutions use to evaluate you.",
                link: "/newsletter",
              },
              {
                step: "02",
                title: "Cards & Rewards",
                desc: "Sign-up bonuses, cashback optimization, travel hacking playbooks, and how to build a card portfolio that works for your lifestyle.",
                link: "/perks",
              },
              {
                step: "03",
                title: "Wealth & Strategy",
                desc: "Tax positioning frameworks, asset-based lending, SBA eligibility, margin accounts, and the financial tools the informed use quietly.",
                link: "/perks",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <Link href={item.link} className="card group block p-8 h-full">
                  <span className="text-5xl font-serif font-semibold text-cream-400 group-hover:text-brand-gold transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-serif font-semibold text-forest-900 mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-forest-700/70 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-forest-900 group-hover:text-brand-gold transition-colors">
                    Explore
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-main">
          <div className="mb-12">
            <h2 className="section-heading mb-3">Tools</h2>
            <p className="section-subheading max-w-2xl">
              Simple, practical calculators and planners to understand your credit and build a clearer path forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeToolCards.map((card, i) => (
              <ToolCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Coinbase payouts */}
      <section className="py-24 md:py-32 bg-forest-950 text-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(201,169,110,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(11,61,46,0.9),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,241,232,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,241,232,0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Coinbase wallet
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-semibold leading-tight mb-6 text-cream-50">
                Receive your $BEAN rewards where you already hold crypto.
              </h2>
              <p className="text-cream-400/95 text-lg font-light leading-relaxed mb-10 max-w-lg">
                When you earn on Credit Coffee, payouts route to your Coinbase wallet — the same place you custody, convert, and move assets. No separate balance trapped in a silo. Your attention converts to tokens you can see, hold, and withdraw on your terms.
              </p>

              <ul className="space-y-6">
                {[
                  {
                    title: "Direct deposit to Coinbase",
                    body: "Connect once. $BEAN from ads, streaks, and referrals lands in the wallet you trust.",
                    Icon: IconWallet,
                  },
                  {
                    title: "Fast, transparent settlement",
                    body: "Rewards post on-chain with clear history — no opaque points or hidden minimums.",
                    Icon: IconBolt,
                  },
                  {
                    title: "One portfolio, full picture",
                    body: "See $BEAN alongside the rest of your Coinbase holdings in a single, familiar view.",
                    Icon: IconChart,
                  },
                ].map((row) => {
                  const FeatureIcon = row.Icon;
                  return (
                  <li key={row.title} className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold">
                      <FeatureIcon />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-cream-100 mb-1">{row.title}</h3>
                      <p className="text-sm text-cream-500 leading-relaxed">{row.body}</p>
                    </div>
                  </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-gold/40 via-brand-gold/10 to-transparent opacity-80 blur-sm" />
              <div className="relative rounded-3xl border border-cream-100/10 bg-gradient-to-br from-forest-900/95 to-forest-950 p-8 md:p-10 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-cream-100/10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-cream-500 mb-1">
                      Payout destination
                    </p>
                    <p className="font-serif text-xl text-cream-100">Coinbase Wallet</p>
                  </div>
                  <div className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                    Connected
                  </div>
                </div>
                <div className="rounded-2xl bg-black/25 border border-cream-100/5 p-6 mb-6">
                  <p className="text-xs text-cream-500 mb-2">Available balance</p>
                  <p className="text-4xl font-serif text-cream-50 tracking-tight">
                    47.85 <span className="text-brand-gold text-2xl">$BEAN</span>
                  </p>
                  <p className="text-xs text-cream-600 mt-3 font-mono">
                    Last payout · Today, 9:14 AM
                  </p>
                </div>
                <p className="text-xs text-cream-500 leading-relaxed">
                  Illustrative balance. Connect your Coinbase account in the app to route real payouts when live.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 md:py-32 bg-cream-200">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading mb-6">Start your morning brew.</h2>
              <p className="section-subheading mx-auto mb-10">
                Join thousands of readers who start their day with Credit Coffee. No spam, no noise — just financial clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input type="email" placeholder="your@email.com" className="input-field flex-1" />
                <button className="btn-primary whitespace-nowrap px-8">Subscribe Free</button>
              </div>
              <p className="text-xs text-cream-600 mt-4">
                Free forever. Unsubscribe anytime. We respect your inbox.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
