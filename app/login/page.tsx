"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-forest-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(11,61,46,0.6)_0%,_transparent_50%)]" />

      <div className="w-full max-w-md mx-4 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
              <span className="text-forest-900 text-lg font-serif font-bold">c</span>
            </div>
            <span className="text-2xl font-serif font-semibold text-cream-100 tracking-tight">
              credit.coffee
            </span>
          </Link>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-serif font-semibold text-forest-900 mb-1">
              {isSignUp ? "Create Your Account" : "Welcome Back"}
            </h1>
            <p className="text-sm text-cream-700">
              {isSignUp
                ? "Connect your wallet and earn USDC from advertiser revenue share."
                : "Your financial intelligence awaits."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-xs font-medium text-forest-800 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="input-field"
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-forest-800 mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-forest-800 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="input-field"
                required
              />
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-cream-400 text-forest-900 
                               focus:ring-forest-900/20"
                  />
                  <span className="text-xs text-cream-700">Remember me</span>
                </label>
                <button type="button" className="text-xs text-brand-gold hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-3.5 text-base mt-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cream-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-cream-600">or continue with</span>
            </div>
          </div>

          {/* Wallet Connect */}
          <button className="w-full py-3 rounded-xl border border-cream-300 text-sm font-medium
                             text-forest-900 hover:bg-cream-100 transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
            </svg>
            Connect Wallet
          </button>

          <p className="text-center text-sm text-cream-700 mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-brand-gold font-medium hover:underline"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-forest-500 mt-6"
        >
          By continuing, you agree to our Terms and Privacy Policy.
        </motion.p>
      </div>
    </div>
  );
}
