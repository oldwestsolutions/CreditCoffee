"use client";

import { useState, useEffect } from "react";
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
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > 80 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideNavPaths = ["/login", "/dashboard"];
  if (hideNavPaths.includes(pathname)) return null;

  return (
    <nav
      className={`sticky top-0 z-40 bg-cream-200/80 backdrop-blur-xl border-b border-cream-300/60
                  transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg className="w-8 h-8 text-forest-900" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10C6 8.89543 6.89543 8 8 8H20C21.1046 8 22 8.89543 22 10V11H23C25.2091 11 27 12.7909 27 15C27 17.2091 25.2091 19 23 19H22V20C22 22.2091 20.2091 24 18 24H10C7.79086 24 6 22.2091 6 20V10Z" fill="currentColor"/>
              <path d="M22 13H23C24.1046 13 25 13.8954 25 15C25 16.1046 24.1046 17 23 17H22V13Z" fill="#F5F1E8"/>
              <path d="M10 26H18C18 26 17.5 28 14 28C10.5 28 10 26 10 26Z" fill="currentColor" opacity="0.5"/>
            </svg>
            <span className="text-lg md:text-xl font-serif font-semibold text-forest-900 tracking-tight">
              Credit Coffee
            </span>
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
