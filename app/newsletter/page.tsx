"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { articles, categories } from "@/lib/mock-data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function NewsletterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featured = articles.filter((a) => a.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-forest-900 pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.08)_0%,_transparent_50%)]" />
        <div className="container-main relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                            bg-brand-gold/10 border border-brand-gold/20 mb-6">
              <span className="text-brand-gold text-xs font-medium tracking-wider uppercase">
                Newsletter
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-cream-100 
                           leading-tight mb-4">
              Financial Intelligence,
              <br />
              <span className="text-brand-gold">Brewed Daily</span>
            </h1>
            <p className="text-lg text-cream-400 font-light leading-relaxed mb-8">
              Curated insights on credit systems, banking strategy, and wealth architecture. 
              No fluff. No clickbait. Just signal.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-forest-800 border border-forest-700 
                           text-cream-100 placeholder:text-forest-500 text-sm
                           focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
              <button
                type="submit"
                className="btn-gold whitespace-nowrap"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-main">
            <h2 className="text-sm font-semibold tracking-wider uppercase text-cream-600 mb-8">
              Featured
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((article, i) => (
                <motion.article
                  key={article.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="card group overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="tag">{article.category}</span>
                      <span className="text-xs text-cream-600">
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2 
                                   group-hover:text-brand-gold transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-forest-700/70 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 text-xs text-cream-700">
                      By {article.author}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-cream-200">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <h2 className="text-2xl font-serif font-semibold text-forest-900">
              All Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <motion.article
                key={article.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
                  <p className="text-sm text-forest-700/70 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-xs text-cream-700">
                    By {article.author}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-cream-600">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
