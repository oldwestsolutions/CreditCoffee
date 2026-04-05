import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Cormorant: elegant editorial serif — closest free web match to Sandover’s tone */
const sandover = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sandover",
  display: "swap",
});

export const metadata: Metadata = {
  title: "credit.coffee — Financial Intelligence, Brewed Daily",
  description:
    "A financial newsletter and crypto-powered ad network. Read curated financial content. Earn $BEAN for your attention. Credit is not debt — it's access.",
  keywords: [
    "credit",
    "finance",
    "newsletter",
    "crypto",
    "banking",
    "credit score",
    "travel hacking",
  ],
  openGraph: {
    title: "credit.coffee",
    description: "Financial Intelligence, Brewed Daily",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${sandover.variable}`}>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <div className="grain-overlay" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
