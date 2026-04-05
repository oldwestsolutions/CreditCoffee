"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ToolCard } from "@/components/ToolCard";
import { CoverCardIllustration } from "@/components/CoverCardIllustration";
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

function IconWallet({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
      />
    </svg>
  );
}

function IconBolt({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconChart({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-semibold text-cream-100 leading-[1.12] tracking-tight mb-6"
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
            {(
              [
                {
                  step: "01",
                  title: "Credit & Banking",
                  desc: "Credit score architecture, business credit stacking, banking relationship tiers, and the strategies institutions use to evaluate you.",
                  link: "/newsletter",
                  illustration: "banking" as const,
                },
                {
                  step: "02",
                  title: "Cards & Rewards",
                  desc: "Sign-up bonuses, cashback optimization, travel hacking playbooks, and how to build a card portfolio that works for your lifestyle.",
                  link: "/perks",
                  illustration: "rewards" as const,
                },
                {
                  step: "03",
                  title: "Wealth & Strategy",
                  desc: "Tax positioning frameworks, asset-based lending, SBA eligibility, margin accounts, and the financial tools the informed use quietly.",
                  link: "/perks",
                  illustration: "wealth" as const,
                },
              ] as const
            ).map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <Link href={item.link} className="card group block overflow-hidden h-full flex flex-col">
                  <div className="bg-gradient-to-b from-cream-100/80 to-cream-200/40 border-b border-cream-200/80 px-4 pt-6 pb-2">
                    <CoverCardIllustration variant={item.illustration} />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-xs font-semibold tracking-widest text-cream-600 uppercase mb-2">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-semibold text-forest-900 mb-3 group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-forest-700/70 leading-relaxed text-sm flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-forest-900 group-hover:text-brand-gold transition-colors">
                      Explore
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
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

      {/* Coinbase payouts — product-inspired UI */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-[#EEF2FF]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(0,82,255,0.08),transparent)] pointer-events-none" />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-slate-200/80 px-3 py-1.5 shadow-sm mb-6">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-coinbase-blue text-[11px] font-bold text-white">
                  C
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                  Coinbase
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold leading-[1.15] tracking-tight text-slate-900 mb-5">
                Get paid in crypto, right in your Coinbase wallet.
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Credit Coffee sends $BEAN rewards to the same Coinbase wallet you already use to buy, sell, and self-custody. One balance, one login, full control — the way modern on-ramp products are meant to feel.
              </p>

              <ul className="space-y-5">
                {[
                  {
                    title: "Link your Coinbase wallet",
                    body: "Authorize once. Payouts from engagement flow straight into your primary wallet.",
                    Icon: IconWallet,
                  },
                  {
                    title: "Settlement you can trace",
                    body: "Every credit appears in your activity feed with a clear timestamp and amount.",
                    Icon: IconBolt,
                  },
                  {
                    title: "Unified holdings",
                    body: "View $BEAN next to your other assets without leaving the Coinbase experience.",
                    Icon: IconChart,
                  },
                ].map((row) => {
                  const FeatureIcon = row.Icon;
                  return (
                    <li key={row.title} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-coinbase-blue/10 flex items-center justify-center text-coinbase-blue">
                        <FeatureIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">{row.title}</h3>
                        <p className="text-sm text-coinbase-muted leading-relaxed">{row.body}</p>
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
              transition={{ duration: 0.65, delay: 0.06 }}
              className="lg:sticky lg:top-28"
            >
              <div className="rounded-2xl border border-coinbase-line bg-coinbase-surface shadow-[0_24px_80px_-24px_rgba(15,23,42,0.25)] overflow-hidden">
                <div className="px-5 pt-5 pb-4 border-b border-coinbase-line bg-white">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coinbase-blue text-sm font-bold text-white">
                        C
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-coinbase-muted">
                          Payout destination
                        </p>
                        <p className="text-lg font-semibold text-slate-900 truncate">Coinbase Wallet</p>
                      </div>
                    </div>
                    <span className="shrink-0 inline-flex items-center rounded-full bg-[#E8FDF3] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#098551] border border-[#B8EBD0]">
                      Connected
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-coinbase-wash">
                  <div className="rounded-xl border border-coinbase-line bg-white p-5 shadow-sm">
                    <p className="text-xs font-medium text-coinbase-muted mb-1">Available balance</p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-4xl font-semibold tracking-tight text-slate-900 tabular-nums">
                        47.85
                      </span>
                      <span className="text-lg font-semibold text-coinbase-blue">$BEAN</span>
                    </div>
                    <div className="mt-4 h-px bg-coinbase-line" />
                    <p className="mt-3 text-xs text-coinbase-muted">
                      Last payout · Today, 9:14 AM
                    </p>
                  </div>
                  <p className="mt-4 text-center text-[11px] leading-relaxed text-coinbase-muted px-1">
                    Sample balance for demonstration. Connect Coinbase in the app to receive live payouts when available.
                  </p>
                </div>
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
