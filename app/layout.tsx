import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const luxury = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-luxury",
  display: "swap",
});

export const metadata: Metadata = {
  title: "credit.coffee — Financial Intelligence, Brewed Daily",
  description:
    "Curated financial media and advertiser revenue share. When you engage with sponsor content, a portion of ad spend is paid to you in USDC. Credit is not debt — it's access.",
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
    <html lang="en" className={`scroll-smooth ${luxury.variable}`}>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <div className="grain-overlay" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
