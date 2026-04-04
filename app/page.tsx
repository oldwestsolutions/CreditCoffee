"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/lib/mock-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <>
      {/* Hero — About Us */}
      <section className="relative min-h-[90vh] flex items-center bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,110,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(11,61,46,0.8)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        <div className="container-main relative z-10 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold 
                         text-cream-100 leading-[1.1] tracking-tight mb-6"
            >
              Financial literacy,
              <br />
              <span className="text-brand-gold">one cup at a time.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-cream-400 max-w-xl leading-relaxed mb-6 font-light"
            >
              Credit Coffee is a financial media platform built in the spirit of 
              Seattle coffee culture — calm, intentional, and crafted for people 
              who take their money as seriously as their morning pour-over.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-cream-500 max-w-xl leading-relaxed mb-10 font-light"
            >
              We publish curated insights on credit optimization, banking strategy, 
              and wealth systems — and we reward you for your attention with real 
              crypto payouts. No noise. No gimmicks. Just signal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/newsletter"
                className="btn-gold text-center text-base px-8 py-4"
              >
                Start Reading
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-xl text-center text-base font-medium
                           border border-cream-400/20 text-cream-300 
                           hover:bg-cream-100/5 hover:border-cream-400/40
                           transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Cover — Ad Subjects */}
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
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-forest-900 
                                  group-hover:text-brand-gold transition-colors">
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

      {/* Featured Articles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-main">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="section-heading mb-3">Latest Brews</h2>
              <p className="section-subheading">
                Financial intelligence, distilled.
              </p>
            </div>
            <Link
              href="/newsletter"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-forest-900 
                         hover:text-brand-gold transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article, i) => (
              <motion.article
                key={article.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="card group overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tag">{article.category}</span>
                    <span className="text-xs text-cream-600">
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-forest-900 mb-2 
                                 group-hover:text-brand-gold transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-sm text-forest-700/70 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/newsletter" className="btn-secondary">
              View All Articles
            </Link>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                              bg-brand-gold/10 border border-brand-gold/20 mb-8">
                <span className="text-brand-gold text-xs font-medium tracking-wider uppercase">
                  Powered by Coinbase
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-cream-100 
                             leading-tight mb-6">
                Your rewards.
                <br />
                <span className="text-brand-gold">Real crypto. Real wallets.</span>
              </h2>
              <p className="text-lg text-cream-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Credit Coffee connects directly to Coinbase so your $BEAN earnings 
                live in a real wallet. View your balance, transfer to Coinbase, 
                and manage your tokens — all from one place.
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
                  <p className="text-sm text-cream-400 leading-relaxed">
                    {feature.desc}
                  </p>
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
              <h2 className="section-heading mb-6">
                Start your morning brew.
              </h2>
              <p className="section-subheading mx-auto mb-10">
                Join thousands of readers who start their day with Credit Coffee. 
                No spam, no noise — just financial clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input-field flex-1"
                />
                <button className="btn-primary whitespace-nowrap px-8">
                  Subscribe Free
                </button>
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
