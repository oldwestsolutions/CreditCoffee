export interface HomeTool {
  slug: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
}

export const homeTools: HomeTool[] = [
  {
    slug: "credit-score-simulator",
    title: "Credit Score Simulator",
    description:
      "Adjust balances, utilization, and on-time payments to see how your score could change.",
    buttonText: "Open Simulator",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    imageAlt: "Credit score planning",
  },
  {
    slug: "credit-utilization-calculator",
    title: "Credit Utilization Calculator",
    description:
      "Enter your credit limits and balances to instantly calculate your utilization ratio.",
    buttonText: "Calculate Utilization",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    imageAlt: "Calculator and finances",
  },
  {
    slug: "debt-payoff-planner",
    title: "Debt Payoff Planner",
    description:
      "Compare avalanche vs snowball payoff strategies and generate a personalized plan.",
    buttonText: "Plan Payoff",
    imageUrl:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
    imageAlt: "Debt planning",
  },
  {
    slug: "loan-comparison",
    title: "Loan Comparison Tool",
    description:
      "Compare interest rates, terms, and total cost across multiple loan options.",
    buttonText: "Compare Loans",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Loan documents",
  },
  {
    slug: "approval-odds-estimator",
    title: "Approval Odds Estimator",
    description:
      "Estimate your chances of approval based on score range, income, and credit history.",
    buttonText: "Check Odds",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    imageAlt: "Approval and credit",
  },
];
