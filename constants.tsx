
import React from 'react';
import { Shield, TrendingUp, Globe, Headphones, BookOpen, LineChart, PieChart, Lock, Zap, Target, Users } from 'lucide-react';

export const MARKET_DATA = [
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0842', change: '+0.12%', isPositive: true },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: '64,231.50', change: '-1.45%', isPositive: false },
  { symbol: 'GOLD', name: 'Gold Spot', price: '2,314.20', change: '+0.45%', isPositive: true },
  { symbol: 'AAPL', name: 'Apple Inc.', price: '189.45', change: '+0.88%', isPositive: true },
  { symbol: 'OIL', name: 'WTI Crude', price: '78.54', change: '-0.32%', isPositive: false },
  { symbol: 'ETH/USD', name: 'Ethereum', price: '3,412.10', change: '+2.14%', isPositive: true },
  { symbol: 'GBP/JPY', name: 'Pound / Yen', price: '190.12', change: '-0.05%', isPositive: false },
];

export const COIN_MARKET_DATA = [
  { name: 'Bitcoin', symbol: 'BTC', mktCap: '1.8 T', fdMktCap: '1.89 T', color: '#F7931A' },
  { name: 'Ethereum', symbol: 'ETH', mktCap: '374.44 B', fdMktCap: '374.44 B', color: '#627EEA' },
  { name: 'Tether USDt', symbol: 'USDT', mktCap: '186.99 B', fdMktCap: '189.73 B', color: '#26A17B' },
  { name: 'XRP', symbol: 'XRP', mktCap: '121.55 B', fdMktCap: '200.32 B', color: '#23292F' },
  { name: 'Binance Coin', symbol: 'BNB', mktCap: '120.46 B', fdMktCap: '120.46 B', color: '#F3BA2F' },
  { name: 'Solana', symbol: 'SOL', mktCap: '74.16 B', fdMktCap: '81.31 B', color: '#14F195' },
  { name: 'TRON', symbol: 'TRX', mktCap: '27.71 B', fdMktCap: '27.71 B', color: '#EF0027' },
  { name: 'Dogecoin', symbol: 'DOGE', mktCap: '23.74 B', fdMktCap: '23.74 B', color: '#C2A633' },
  { name: 'Cardano', symbol: 'ADA', mktCap: '13.95 B', fdMktCap: '17.46 B', color: '#0033AD' },
  { name: 'Bitcoin Cash', symbol: 'BCH', mktCap: '12.64 B', fdMktCap: '13.29 B', color: '#8BC34A' },
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Contact', path: '/contact' },
];

export const FEATURES = [
  {
    title: 'Precision Risk Management',
    description: 'Protect your capital with our advanced proprietary risk assessment frameworks.',
    icon: <Shield className="w-8 h-8 text-amber-500" />
  },
  {
    title: 'Institutional Analysis',
    description: 'Gain access to market insights typically reserved for top-tier financial institutions.',
    icon: <TrendingUp className="w-8 h-8 text-amber-500" />
  },
  {
    title: 'Global Connectivity',
    description: 'Trade major markets across Forex, Crypto, Stocks, and Commodities from one place.',
    icon: <Globe className="w-8 h-8 text-amber-500" />
  },
  {
    title: 'Elite Support 24/7',
    description: 'Our dedicated team of experts is available around the clock to ensure your success.',
    icon: <Headphones className="w-8 h-8 text-amber-500" />
  }
];

export const SERVICES_LIST = [
  {
    title: 'Trading Education',
    description: 'Comprehensive mentorship programs from foundational concepts to high-frequency strategies.',
    icon: <BookOpen className="w-10 h-10" />
  },
  {
    title: 'Market Signals',
    description: 'Real-time entry and exit points powered by a blend of AI and professional analyst review.',
    icon: <LineChart className="w-10 h-10" />
  },
  {
    title: 'Portfolio Guidance',
    description: 'Personalized asset allocation strategies designed to maximize long-term growth.',
    icon: <PieChart className="w-10 h-10" />
  },
  {
    title: 'Risk Infrastructure',
    description: 'Tools and calculators that help you define your downside before every single trade.',
    icon: <Lock className="w-10 h-10" />
  }
];

export const INVESTMENT_PLANS = [
  {
    name: "Starter Edge",
    min: "$100",
    max: "$4,999",
    roi: "15% Weekly",
    duration: "7 Days",
    features: ["24/7 Support", "Market Insights", "Basic Risk Tools"]
  },
  {
    name: "Pro Growth",
    min: "$5,000",
    max: "$19,999",
    roi: "25% Weekly",
    duration: "7 Days",
    features: ["Priority Support", "Advanced Signals", "Portfolio Guidance"],
    popular: true
  },
  {
    name: "Elite Wealth",
    min: "$20,000",
    max: "$50,000",
    roi: "40% Weekly",
    duration: "7 Days",
    features: ["Personal Account Manager", "Custom Algos", "Exclusive Webinars"]
  }
];

export const HELP_REASONS = [
  {
    title: "Expert Guidance",
    description: "Our analysts have decades of combined experience in high-frequency trading and global macro strategy.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Capital Protection",
    description: "We prioritize your security using state-of-the-art encryption and strictly following risk protocols.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Innovation First",
    description: "Our platform leverages AI and real-time data to provide you with a competitive edge in every trade.",
    icon: <Zap className="w-6 h-6" />
  }
];
