"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/newsletter", label: "Newsletter" },
  { href: "/perks", label: "Perks" },
  { href: "/ads", label: "Earn" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const hideNavPaths = ["/login", "/dashboard"];
  if (hideNavPaths.includes(pathname)) return null;

  return (
    <nav className="sticky top-0 z-40 bg-cream-200/80 backdrop-blur-xl border-b border-cream-300/60">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-forest-900 flex items-center justify-center">
              <span className="text-cream-200 text-sm font-serif font-bold">c</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg md:text-xl font-serif font-semibold text-forest-900 tracking-tight">
                credit.coffee
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    pathname === link.href
                      ? "bg-forest-900 text-cream-100"
                      : "text-forest-800 hover:bg-forest-900/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/dashboard" className="btn-secondary text-sm py-2">
              Dashboard
            </Link>
            <Link href="/login" className="btn-primary text-sm py-2">
              Sign In
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-forest-900/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-forest-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cream-300/60 bg-cream-200/95 backdrop-blur-xl"
          >
            <div className="container-main py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${
                      pathname === link.href
                        ? "bg-forest-900 text-cream-100"
                        : "text-forest-800 hover:bg-forest-900/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="btn-secondary text-center">
                  Dashboard
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)} className="btn-primary text-center">
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
