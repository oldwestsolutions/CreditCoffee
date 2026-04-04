"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { HomeToolCard } from "@/lib/home-tools";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ToolCard({ card, index }: { card: HomeToolCard; index: number }) {
  const multi = card.items.length > 1;

  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="card group overflow-hidden flex flex-col h-full"
    >
      <div className="aspect-[16/10] overflow-hidden shrink-0 relative">
        <Image
          src={card.imageUrl}
          alt={card.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        {card.items.map((item, idx) => (
          <div key={item.slug} className={idx > 0 ? "mt-8 pt-8 border-t border-cream-200" : ""}>
            <span className="tag w-fit mb-3">Tool</span>
            <h3 className="text-lg font-serif font-semibold text-forest-900 mb-2 leading-tight group-hover:text-brand-gold transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-forest-700/70 leading-relaxed mb-5">
              {item.description}
            </p>
            <Link
              href={`/tools/${item.slug}`}
              className={`btn-primary text-center text-sm py-2.5 ${
                multi ? "w-full" : "w-full sm:w-auto sm:self-start"
              }`}
            >
              {item.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
