"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ToolCard } from "@/components/ToolCard";
import { homeTools } from "@/lib/home-tools";

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
                className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-cream-100 leading-[1.08] tracking-tight mb-5"
              >
                Financial literacy,
                <br />
                <span className="text-brand-gold">one cup at a time.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base md:text-lg text-cream-400/95 leading-relaxed mb-8 max-w-md font-light"
              >
                Credit Coffee is Seattle-inspired financial media — calm, clear, and built for people who care about credit, banking, and building wealth without the noise.
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
            {homeTools.map((tool, i) => (
              <ToolCard key={tool.slug} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Coinbase Integration */}
      <section className="py-24 md:py-32 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-8">
                <span className="text-brand-gold text-xs font-medium tracking-wider uppercase">
                  Powered by Coinbase
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-cream-100 leading-tight mb-6">
                Your rewards.
                <br />
                <span className="text-brand-gold">Real crypto. Real wallets.</span>
              </h2>
              <p className="text-lg text-cream-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Credit Coffee connects directly to Coinbase so your $BEAN earnings live in a real wallet. View your balance, transfer to Coinbase, and manage your tokens — all from one place.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔗",
                  title: "Coinbase Wallet",
                  desc: "Link your Coinbase account to receive $BEAN payouts directly to your wallet.",
                },
                {
                  icon: "💰",
                  title: "Instant Settlement",
                  desc: "Earnings are settled on-chain. No delays, no minimums, no hidden fees.",
                },
                {
                  icon: "📊",
                  title: "Portfolio View",
                  desc: "Track your $BEAN alongside the rest of your Coinbase portfolio in one dashboard.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-dark rounded-2xl p-8 text-left"
                >
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-lg font-serif font-semibold text-cream-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-cream-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
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
