"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const values = [
  {
    title: "Signal Over Noise",
    desc: "We don't write content to fill feeds. Every article is researched, considered, and designed to shift how you think about money.",
  },
  {
    title: "Access Over Gatekeeping",
    desc: "The financial system rewards those who understand it. We believe that understanding should be freely available, not locked behind paywalls.",
  },
  {
    title: "Earned Attention",
    desc: "We don't mine your data. We reward your attention. $BEAN isn't a gimmick — it's a statement that your time has monetary value.",
  },
];

const team = [
  {
    name: "The Editorial Desk",
    role: "Content & Strategy",
    desc: "Former financial journalists, credit analysts, and banking professionals who translate institutional knowledge into actionable intelligence.",
  },
  {
    name: "The Lab",
    role: "Engineering & Product",
    desc: "Full-stack engineers and product designers building the infrastructure where financial media meets attention economics.",
  },
  {
    name: "The Network",
    role: "Partnerships & Growth",
    desc: "Relationship builders who curate our sponsor ecosystem and ensure every ad on the platform meets our quality standard.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-900 pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_60%)]" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-semibold text-cream-100 
                             leading-tight mb-6">
                Born in Seattle.
                <br />
                <span className="text-brand-gold">Brewed for builders.</span>
              </h1>
              <p className="text-lg text-cream-400 font-light leading-relaxed max-w-xl mx-auto">
                credit.coffee started with a simple observation: the best financial 
                conversations happen over coffee. We built a platform that honors that tradition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-sm font-semibold tracking-wider uppercase text-cream-600 mb-8">
                Origin
              </h2>
              <div className="space-y-6 text-lg text-forest-800 leading-relaxed font-light">
                <p>
                  In the quiet corners of Seattle coffee shops — not the tourist traps, but the ones 
                  with exposed brick and single-origin pour-overs — we noticed something. The people 
                  who understood money best weren&apos;t reading mainstream financial news. They were 
                  reading each other&apos;s notes.
                </p>
                <p>
                  They traded insights about credit optimization the way baristas trade recipes. 
                  They discussed banking relationships with the precision of sommeliers describing 
                  terroir. And they did it all quietly, without the noise of financial media.
                </p>
                <p className="text-forest-900 font-normal">
                  credit.coffee is that conversation, digitized. We took the intellectual atmosphere 
                  of a Seattle Reserve bar, combined it with the rigor of a financial journal, and 
                  added something new: a token economy that pays you to pay attention.
                </p>
                <blockquote className="border-l-2 border-brand-gold pl-6 my-8">
                  <p className="text-xl font-serif text-forest-900 italic">
                    &ldquo;Credit is not debt. It&apos;s access. And access changes everything.&rdquo;
                  </p>
                </blockquote>
                <p>
                  Our newsletter covers the topics that matter: credit score architecture, business 
                  credit stacking, banking relationships, travel hacking, cashback systems, and tax 
                  positioning. No ads disguised as articles. No affiliate links hidden in advice. 
                  Just signal.
                </p>
                <p>
                  And when we do show you an ad, we pay you for it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-200">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">What We Believe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8"
              >
                <h3 className="text-lg font-serif font-semibold text-forest-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-forest-700/70 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">The Team</h2>
            <p className="section-subheading mx-auto">
              Three desks. One mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-forest-900/5 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {i === 0 ? "📝" : i === 1 ? "⚡" : "🤝"}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-forest-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-xs text-brand-gold font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-sm text-forest-700/70 leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetization Transparency */}
      <section className="py-24 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.05)_0%,_transparent_60%)]" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream-100 mb-6">
                How We Make Money
              </h2>
              <p className="text-cream-400 font-light leading-relaxed mb-10">
                Transparency is non-negotiable. Here&apos;s our model.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {[
                  {
                    title: "Sponsored Content",
                    desc: "Curated ads from vetted financial products. You earn $BEAN for viewing them.",
                  },
                  {
                    title: "Affiliate Partnerships",
                    desc: "When you open a card or account through our links, we earn a referral fee.",
                  },
                  {
                    title: "Premium Tier (Coming)",
                    desc: "Advanced strategies, model portfolios, and direct analyst access.",
                  },
                  {
                    title: "Token Economy (Future)",
                    desc: "On-chain $BEAN with real utility, governance, and exchange value.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i + 1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="glass-dark rounded-2xl p-6"
                  >
                    <h3 className="text-sm font-semibold text-cream-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cream-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-200">
        <div className="container-main text-center">
          <h2 className="section-heading mb-4">
            Ready for your first cup?
          </h2>
          <p className="section-subheading mx-auto mb-8">
            Join the conversation. Earn while you learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/newsletter" className="btn-primary text-base px-8 py-4">
              Read the Newsletter
            </Link>
            <Link href="/ads" className="btn-secondary text-base px-8 py-4">
              Start Earning $BEAN
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
