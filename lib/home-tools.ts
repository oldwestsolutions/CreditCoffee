export interface ToolAction {
  slug: string;
  title: string;
  description: string;
  buttonText: string;
  /** Small label above the title (e.g. protocol theme for the card). */
  badge?: string;
}

export interface HomeToolCard {
  id: string;
  imageUrl: string;
  imageAlt: string;
  items: ToolAction[];
}

export const homeToolCards: HomeToolCard[] = [
  {
    id: "credit-score-simulator",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    imageAlt: "Financial planning and credit signal modeling",
    items: [
      {
        slug: "credit-score-simulator",
        badge: "Reputation & signals",
        title: "Credit posture simulator",
        description:
          "Stress-test balances, utilization, and payment behavior—the same levers that inform traditional scores and emerging on-chain credit primitives across the NEAR ecosystem.",
        buttonText: "Open simulator",
      },
    ],
  },
  {
    id: "credit-utilization-calculator",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    imageAlt: "Liquidity and capital efficiency",
    items: [
      {
        slug: "credit-utilization-calculator",
        badge: "Liquidity",
        title: "Utilization & capital efficiency",
        description:
          "Map limits and balances to a clear utilization picture—essential context when credit is programmable, composable, and settled with transparency on NEAR.",
        buttonText: "Calculate utilization",
      },
    ],
  },
  {
    id: "loan-comparison",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Comparing loan terms and obligations",
    items: [
      {
        slug: "loan-comparison",
        badge: "Obligations",
        title: "Obligation comparison",
        description:
          "Contrast rates, terms, and total cost across options—whether you are bridging familiar products or evaluating NEAR-native lending and credit-market designs.",
        buttonText: "Compare terms",
      },
    ],
  },
];

export function getAllToolSlugs(): { slug: string }[] {
  return homeToolCards.flatMap((card) =>
    card.items.map((item) => ({ slug: item.slug }))
  );
}

export function findToolBySlug(slug: string): ToolAction | undefined {
  for (const card of homeToolCards) {
    const found = card.items.find((i) => i.slug === slug);
    if (found) return found;
  }
  return undefined;
}
