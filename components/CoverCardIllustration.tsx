"use client";

type Variant = "banking" | "rewards" | "wealth";

const gradients: Record<Variant, { front: string; mid: string; back: string }> = {
  banking: {
    front: "from-forest-800 to-forest-950",
    mid: "from-forest-600 to-forest-800",
    back: "from-cream-300 to-cream-500",
  },
  rewards: {
    front: "from-[#1a1f3c] to-[#0f1328]",
    mid: "from-brand-gold/90 to-[#8a6b35]",
    back: "from-forest-700 to-forest-900",
  },
  /* Tan / sand card on top; darker cards beneath */
  wealth: {
    front: "from-[#e8dcc8] via-[#d4c4a8] to-[#b8a684]",
    mid: "from-slate-800 to-slate-950",
    back: "from-emerald-900 to-forest-950",
  },
};

export function CoverCardIllustration({ variant }: { variant: Variant }) {
  const g = gradients[variant];
  const lightTop = variant === "wealth";

  return (
    <div className="relative h-44 sm:h-48 flex items-center justify-center select-none pointer-events-none" aria-hidden>
      <div
        className={`absolute w-[78%] max-w-[220px] aspect-[1.586/1] rounded-xl bg-gradient-to-br ${g.back} shadow-lg rotate-[-8deg] translate-y-2 opacity-90`}
      />
      <div
        className={`absolute w-[78%] max-w-[220px] aspect-[1.586/1] rounded-xl bg-gradient-to-br ${g.mid} shadow-xl rotate-[4deg] translate-y-1`}
      />
      <div
        className={`relative w-[82%] max-w-[230px] aspect-[1.586/1] rounded-xl bg-gradient-to-br ${g.front} shadow-2xl ring-1 overflow-hidden ${
          lightTop ? "ring-stone-700/20" : "ring-white/10"
        }`}
      >
        <div
          className={`absolute inset-0 opacity-[0.12] bg-[repeating-linear-gradient(-45deg,transparent,transparent_6px,rgba(0,0,0,0.15)_6px,rgba(0,0,0,0.15)_7px)]`}
        />
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <div className={`h-7 w-10 rounded ${lightTop ? "bg-stone-800/20" : "bg-white/15"}`} />
          <div className={`h-5 w-12 rounded ${lightTop ? "bg-stone-800/15" : "bg-white/10"}`} />
        </div>
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <div className={`h-2 w-[60%] max-w-[140px] rounded ${lightTop ? "bg-stone-800/25" : "bg-white/20"}`} />
          <div className={`h-2 w-[40%] max-w-[100px] rounded ${lightTop ? "bg-stone-800/15" : "bg-white/10"}`} />
        </div>
      </div>
    </div>
  );
}
