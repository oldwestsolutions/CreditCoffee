"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
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

          <Link href="/login" className="btn-primary text-sm py-2">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
