/**
 * Competitor analysis and detailed pricing data for the Pricing page.
 * Sourced from public pricing pages and positioning (Madgicx, Optmyzr, Smartly.io).
 */

export interface CompetitorRow {
  name: string;
  pricingModel: string;
  startingPrice: string;
  platforms: string;
  aiOptimization: string;
  otaSupport: string;
  crossChannel: string;
  overagesOrExtra: string;
  notes?: string;
}

export const competitors: CompetitorRow[] = [
  {
    name: 'AdvertisingSystems',
    pricingModel: 'Flat per ad account',
    startingPrice: '$99/mo',
    platforms: 'Google, Meta, OTAs, TikTok, LinkedIn, Bing, Pinterest',
    aiOptimization: 'Unified cross-channel AI (50K+ signals)',
    otaSupport: 'Yes — Booking.com, Expedia, TripAdvisor',
    crossChannel: 'Single dashboard, one AI, one attribution',
    overagesOrExtra: 'None — no per-click or % of spend',
    notes: 'Part of Multisystems ecosystem (Hotel, Reputation)',
  },
  {
    name: 'Madgicx',
    pricingModel: 'Based on monthly ad spend',
    startingPrice: 'From ~$99/mo',
    platforms: 'Primarily Meta; limited Google',
    aiOptimization: 'Meta-focused AI; Pro Complete plan',
    otaSupport: 'No',
    crossChannel: 'Within-platform only',
    overagesOrExtra: 'Add-ons (e.g. Ad Library + AI ~$29/mo)',
    notes: '7-day trial; good for Meta-heavy brands',
  },
  {
    name: 'Optmyzr',
    pricingModel: 'Tiered by ad spend + overages',
    startingPrice: '$129–$649/mo',
    platforms: 'Google, Microsoft (PPC focus)',
    aiOptimization: 'Rules-based + some automation',
    otaSupport: 'No',
    crossChannel: 'PPC-focused; no Meta/OTA unification',
    overagesOrExtra: 'Overage fees per $1K spend; $5/mo per extra account',
    notes: 'Essential $249/mo “sweet spot”; overages can add cost',
  },
  {
    name: 'Smartly.io',
    pricingModel: '% of ad spend (enterprise)',
    startingPrice: '~$3K+/mo (~$36K+/yr)',
    platforms: 'Meta, TikTok, Pinterest, Snap, Google Display',
    aiOptimization: 'Creative & scaling; managed or self-serve',
    otaSupport: 'No',
    crossChannel: 'Social/display; no OTA',
    overagesOrExtra: 'Cost scales with spend; custom quotes',
    notes: 'Enterprise-only; best for $50K+ monthly social spend',
  },
];

export interface PlanFeatureRow {
  feature: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export const planFeatureMatrix: PlanFeatureRow[] = [
  { feature: 'Ad accounts', starter: 'Up to 2', professional: 'Up to 10', enterprise: 'Unlimited' },
  { feature: 'Campaign Intelligence (unified dashboard)', starter: true, professional: true, enterprise: true },
  { feature: 'AI Optimization Engine (autonomous bids & budgets)', starter: true, professional: true, enterprise: true },
  { feature: 'Performance Analytics & attribution', starter: true, professional: true, enterprise: true },
  { feature: 'Automation Studio (rules-based)', starter: true, professional: true, enterprise: true },
  { feature: 'Budget Allocator (cross-channel)', starter: true, professional: true, enterprise: true },
  { feature: 'Google Ads, Meta Ads, OTA integrations', starter: true, professional: true, enterprise: true },
  { feature: 'TikTok, LinkedIn, Bing, Pinterest', starter: true, professional: true, enterprise: true },
  { feature: 'Real-time sync (every 15 min)', starter: true, professional: true, enterprise: true },
  { feature: 'Email & chat support', starter: true, professional: true, enterprise: true },
  { feature: 'REST API access', starter: false, professional: true, enterprise: true },
  { feature: 'Custom integrations (CRM, PMS, BI)', starter: false, professional: true, enterprise: true },
  { feature: 'Dedicated customer success', starter: false, professional: false, enterprise: true },
  { feature: 'SSO, custom contracts, SLA', starter: false, professional: false, enterprise: true },
  { feature: '14-day free trial (no credit card)', starter: true, professional: true, enterprise: true },
];

export const ourDifferentiators = [
  {
    title: 'One price, no surprises',
    body: 'We charge by ad account count — not by ad spend, not by percentage. No overage fees, no per-click add-ons. What you see is what you pay.',
  },
  {
    title: 'Google + Meta + OTAs in one place',
    body: 'Competitors focus on one or two channels. We unify Google Ads, Meta Ads, and OTA campaigns (Booking.com, Expedia, TripAdvisor) in a single AI and dashboard.',
  },
  {
    title: 'True cross-channel AI',
    body: 'Our AI optimizes across all connected accounts every 15 minutes — shifting budget and bids where they perform best, not just within a single platform.',
  },
  {
    title: 'Built for travel and every vertical',
    body: 'OTA integration is built in. Part of the Multisystems ecosystem so your ads connect to hotel and reputation systems when you need it.',
  },
];

export const pricingPageFaqs = [
  {
    question: 'How is your pricing different from Madgicx or Optmyzr?',
    answer: 'Madgicx ties price to ad spend; Optmyzr uses tiers plus overage fees and per-account add-ons. We use a flat monthly price by number of ad accounts. No percentage of spend, no overages, no hidden add-ons. Same AI and features on every plan.',
  },
  {
    question: 'What counts as an "ad account"?',
    answer: 'Each connected Google Ads account, Meta Ads account, or OTA advertising account (e.g. one Booking.com, one Expedia) counts as one. Starter allows 2, Professional 10, Enterprise unlimited.',
  },
  {
    question: 'Are there any overage or extra fees?',
    answer: "No. If you're on Professional with 10 accounts, you pay $249/mo whether those accounts spend $1K or $500K. We don't charge per click, per campaign, or percentage of spend.",
  },
  {
    question: 'Do you offer annual billing?',
    answer: "Yes. You can choose annual billing for a discount. The option appears at signup or in your account settings. We don't require long-term contracts.",
  },
  {
    question: 'What\'s included in the free trial?',
    answer: 'Full access to the plan you choose for 14 days — all modules, AI optimization, integrations, and support. No credit card required. Connect your accounts and see results before paying.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes. Upgrade or downgrade anytime from your account. Changes apply at the start of the next billing cycle. We prorate when you upgrade.',
  },
  {
    question: 'Why is Enterprise "Custom"?',
    answer: 'Enterprise is for unlimited ad accounts, dedicated success, SSO, custom SLAs, and tailored contracts. We quote based on your account count and requirements. Contact sales for a proposal.',
  },
];
