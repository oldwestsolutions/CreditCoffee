export interface ToolAction {
  slug: string;
  title: string;
  description: string;
  buttonText: string;
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
    imageAlt: "Credit score planning",
    items: [
      {
        slug: "credit-score-simulator",
        title: "Credit Score Simulator",
        description:
          "Adjust balances, utilization, and on-time payments to see how your score could change.",
        buttonText: "Open Simulator",
      },
    ],
  },
  {
    id: "credit-utilization-calculator",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    imageAlt: "Credit utilization",
    items: [
      {
        slug: "credit-utilization-calculator",
        title: "Credit Utilization Calculator",
        description:
          "Enter your credit limits and balances to instantly calculate your utilization ratio.",
        buttonText: "Calculate Utilization",
      },
    ],
  },
  {
    id: "loan-comparison",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Loan comparison",
    items: [
      {
        slug: "loan-comparison",
        title: "Loan Comparison Tool",
        description:
          "Compare interest rates, terms, and total cost across multiple loan options.",
        buttonText: "Compare Loans",
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
