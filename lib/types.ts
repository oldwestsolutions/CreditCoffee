export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string;
  publishedAt: string;
  featured: boolean;
}

export interface Perk {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  requirements: string;
  value: string;
  icon: string;
  featured: boolean;
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  sponsor: string;
  imageUrl: string;
  linkUrl: string;
  category: string;
  reward: number;
  duration: number;
}

export interface WalletData {
  balance: number;
  tokenSymbol: string;
  address: string;
}

export interface Transaction {
  id: string;
  type: "earn" | "referral" | "bonus" | "withdrawal";
  amount: number;
  description: string;
  createdAt: string;
}

export interface UserDashboard {
  name: string;
  email: string;
  streak: number;
  totalEarned: number;
  adsViewed: number;
  articlesRead: number;
  referralCode: string;
  referralCount: number;
  wallet: WalletData;
  transactions: Transaction[];
  savedPerks: string[];
}

export type PerkCategory =
  | "credit-cards"
  | "banking"
  | "advanced";
