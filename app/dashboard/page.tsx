"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { mockDashboard, perks } from "@/lib/mock-data";

export default function DashboardPage() {
  const [data] = useState(mockDashboard);
  const [copied, setCopied] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const savedPerksList = perks.filter((p) => data.savedPerks.includes(p.id));

  const copyReferral = () => {
    navigator.clipboard.writeText(`https://credit.coffee/ref/${data.referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const streakDays = Array.from({ length: 7 }, (_, i) => {
    const active = i < data.streak % 7 || data.streak >= 7;
    return { day: ["M", "T", "W", "T", "F", "S", "S"][i], active };
  });

  return (
    <div className="min-h-screen bg-cream-200">
      {/* Dashboard Header */}
      <header className="bg-forest-900 text-cream-100">
        <div className="container-main py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center">
                <span className="text-forest-900 text-sm font-serif font-bold">c</span>
              </div>
              <span className="text-lg font-serif font-semibold tracking-tight hidden sm:block">
                credit.coffee
              </span>
            </Link>
            <div className="h-6 w-px bg-forest-700" />
            <span className="text-sm text-cream-400">Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full 
                            bg-brand-gold/10 border border-brand-gold/20">
              <span className="text-brand-gold text-xs font-semibold">
                {data.wallet.balance.toFixed(2)} {data.wallet.tokenSymbol}
              </span>
            </div>
            <button
              onClick={() => setShowLogout(true)}
              className="px-4 py-2 rounded-xl text-sm font-medium 
                         bg-forest-800 hover:bg-forest-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Logout Modal */}
      {showLogout && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-xl"
          >
            <h3 className="text-xl font-serif font-semibold text-forest-900 mb-2">
              Confirm Logout
            </h3>
            <p className="text-sm text-cream-700 mb-6">
              Your earnings and progress are saved. You can always come back.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogout(false)} className="btn-secondary flex-1">
                Cancel
              </button>
              <Link href="/" className="btn-primary flex-1 text-center">
                Logout
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      <div className="container-main py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-semibold text-forest-900 mb-1">
            Good morning, {data.name}.
          </h1>
          <p className="text-sm text-cream-700">
            Your financial intelligence dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Earned",
              value: `${data.totalEarned.toFixed(2)}`,
              suffix: data.wallet.tokenSymbol,
              color: "text-brand-gold",
            },
            {
              label: "Reading Streak",
              value: `${data.streak}`,
              suffix: "days",
              color: "text-forest-600",
            },
            {
              label: "Ads Viewed",
              value: `${data.adsViewed}`,
              suffix: "total",
              color: "text-forest-900",
            },
            {
              label: "Articles Read",
              value: `${data.articlesRead}`,
              suffix: "total",
              color: "text-forest-900",
            },
          ].map((stat) => (
            <div key={stat.label} className="card p-5">
              <div className="text-xs text-cream-600 mb-2">{stat.label}</div>
              <div className={`text-2xl font-serif font-semibold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-cream-500 mt-1">{stat.suffix}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Wallet Card */}
            <div className="card-glass p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-serif font-semibold text-forest-900">
                  Wallet
                </h2>
                <span className="text-xs text-cream-600 font-mono">
                  {data.wallet.address}
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-forest-900 to-forest-800 text-cream-100 mb-6">
                <div className="text-sm text-cream-400 mb-1">Balance</div>
                <div className="text-4xl font-serif font-semibold text-brand-gold">
                  {data.wallet.balance.toFixed(2)}
                  <span className="text-lg text-cream-400 ml-2">
                    ${data.wallet.tokenSymbol}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link href="/ads" className="btn-primary flex-1 text-center">
                  Earn More
                </Link>
                <button className="btn-secondary flex-1" disabled>
                  Withdraw (Coming Soon)
                </button>
              </div>
            </div>

            {/* Transactions */}
            <div className="card p-6">
              <h2 className="text-lg font-serif font-semibold text-forest-900 mb-4">
                Earnings History
              </h2>
              <div className="space-y-3">
                {data.transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between py-3 border-b border-cream-200 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
                        ${tx.type === "earn" ? "bg-forest-900/5 text-forest-900" :
                          tx.type === "referral" ? "bg-brand-gold/10 text-brand-gold" :
                          "bg-cream-300 text-cream-700"}`}
                      >
                        {tx.type === "earn" ? "☕" : tx.type === "referral" ? "🤝" : "🎁"}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-forest-900">
                          {tx.description}
                        </div>
                        <div className="text-xs text-cream-600">
                          {new Date(tx.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-forest-600">
                      +{tx.amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Streak */}
            <div className="card p-6">
              <h2 className="text-lg font-serif font-semibold text-forest-900 mb-4">
                Reading Streak
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {streakDays.map((d, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium mb-1
                        ${d.active
                          ? "bg-forest-900 text-cream-100"
                          : "bg-cream-200 text-cream-500"
                        }`}
                    >
                      {d.active ? "✓" : d.day}
                    </div>
                    <span className="text-[10px] text-cream-600">{d.day}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-3xl font-serif font-semibold text-forest-900">
                  {data.streak}
                </span>
                <span className="text-sm text-cream-600 ml-1">day streak</span>
              </div>
              <p className="text-xs text-cream-600 text-center mt-2">
                Keep reading daily to earn streak bonuses!
              </p>
            </div>

            {/* Referrals */}
            <div className="card p-6">
              <h2 className="text-lg font-serif font-semibold text-forest-900 mb-2">
                Referral Program
              </h2>
              <p className="text-xs text-cream-700 mb-4">
                Earn a percentage of your referrals&apos; ad revenue.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 px-4 py-2.5 rounded-xl bg-cream-100 border border-cream-300 
                                text-sm font-mono text-forest-900 truncate">
                  credit.coffee/ref/{data.referralCode}
                </div>
                <button
                  onClick={copyReferral}
                  className="btn-primary py-2.5 px-4 whitespace-nowrap"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-cream-600">Referrals</span>
                <span className="font-semibold text-forest-900">{data.referralCount}</span>
              </div>
            </div>

            {/* Saved Perks */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-serif font-semibold text-forest-900">
                  Saved Perks
                </h2>
                <Link href="/perks" className="text-xs text-brand-gold font-medium">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {savedPerksList.map((perk) => (
                  <div
                    key={perk.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream-50 border border-cream-200"
                  >
                    <span className="text-xl">{perk.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-forest-900 truncate">
                        {perk.title}
                      </div>
                      <div className="text-xs text-cream-600">{perk.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credit Education Progress */}
            <div className="card p-6">
              <h2 className="text-lg font-serif font-semibold text-forest-900 mb-4">
                Education Progress
              </h2>
              {[
                { topic: "Credit Score Basics", progress: 100 },
                { topic: "Business Credit", progress: 65 },
                { topic: "Travel Hacking", progress: 40 },
                { topic: "Banking Strategy", progress: 20 },
              ].map((item) => (
                <div key={item.topic} className="mb-4 last:mb-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-medium text-forest-800">
                      {item.topic}
                    </span>
                    <span className="text-xs text-cream-600">{item.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-cream-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-forest-900 rounded-full transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
