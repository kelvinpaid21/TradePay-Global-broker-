
export interface MarketItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
