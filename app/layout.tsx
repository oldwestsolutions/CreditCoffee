import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen">
        <div className="grain-overlay" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
