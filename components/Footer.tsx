"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  product: [
    { label: "Newsletter", href: "/newsletter" },
    { label: "Perks Directory", href: "/perks" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Mission", href: "/about" },
    { label: "Contact", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  const hideFooterPaths = ["/login", "/dashboard"];
  if (hideFooterPaths.includes(pathname)) return null;

  return (
    <footer className="bg-forest-900 text-cream-200">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <svg className="w-8 h-8 text-cream-200" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10C6 8.89543 6.89543 8 8 8H20C21.1046 8 22 8.89543 22 10V11H23C25.2091 11 27 12.7909 27 15C27 17.2091 25.2091 19 23 19H22V20C22 22.2091 20.2091 24 18 24H10C7.79086 24 6 22.2091 6 20V10Z" fill="currentColor"/>
                <path d="M22 13H23C24.1046 13 25 13.8954 25 15C25 16.1046 24.1046 17 23 17H22V13Z" fill="#0B3D2E"/>
                <path d="M10 26H18C18 26 17.5 28 14 28C10.5 28 10 26 10 26Z" fill="currentColor" opacity="0.5"/>
              </svg>
              <span className="text-xl font-serif font-semibold text-cream-100 tracking-tight">
                Credit Coffee
              </span>
            </Link>
            <p className="text-cream-400 text-sm leading-relaxed mb-6 max-w-sm">
              Financial intelligence, brewed daily. Read curated content, unlock perks, 
              and build your financial literacy. Credit is not debt — it&apos;s access.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream-100 mb-4 tracking-wide uppercase">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream-100 mb-4 tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream-100 mb-4 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forest-500">
            &copy; {new Date().getFullYear()} Centuries Mutual. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-forest-500 hover:text-cream-300 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-forest-500 hover:text-cream-300 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
