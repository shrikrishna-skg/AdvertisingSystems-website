/**
 * Blog post content and metadata. Used by blog index and [slug].astro.
 */

export interface BlogSection {
  title?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  color: 'royal-green' | 'blue' | 'violet' | 'amber' | 'rose';
  author: { name: string; role?: string };
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-budget-allocator-2',
    category: 'Product Updates',
    title: 'Introducing AI Budget Allocator 2.0: Smarter Cross-Channel Spending',
    excerpt: 'Our latest release brings real-time budget reallocation across Google, Meta, and OTA campaigns — driven by reinforcement learning that adapts every 15 minutes.',
    date: 'Mar 8, 2026',
    readTime: '4 min read',
    color: 'royal-green',
    author: { name: 'AdvertisingSystems Team', role: 'Product' },
    content: [
      {
        title: 'Why we rebuilt the Budget Allocator',
        paragraphs: [
          'The first version of Budget Allocator helped thousands of advertisers move spend from underperforming campaigns to winners. But we kept hearing the same request: "I need it to move faster, and I need it to consider my whole mix — not just one platform."',
          'Budget Allocator 2.0 is our answer. It uses reinforcement learning trained on 50,000+ anonymized account histories to reallocate budget across Google Ads, Meta Ads, and OTA campaigns every 15 minutes. No more waiting for end-of-day reports to shift spend.',
        ],
      },
      {
        title: 'What’s new',
        paragraphs: [
          'Real-time reallocation: Budget shifts as performance signals change, not on a fixed schedule.',
          'Cross-channel rules: Set guardrails (e.g. "never drop Meta below 30%") and let the AI optimize within them.',
          'Transparency: Every reallocation is logged with a short reason, so you can audit and override when needed.',
          'OTA-aware: For travel advertisers, the allocator now factors in occupancy, seasonality, and OTA-specific KPIs so OTA spend isn’t treated like generic paid search.',
        ],
      },
      {
        title: 'How to try it',
        paragraphs: [
          'Budget Allocator 2.0 is available on all plans. If you already use Budget Allocator, you’ll see a one-click upgrade in the dashboard. New users can enable it from the Automation Studio or during onboarding.',
          'We’ll share deeper benchmarks and configuration tips in a follow-up post. For now, head to your dashboard and turn it on — your cross-channel mix will thank you.',
        ],
      },
    ],
  },
  {
    slug: 'cut-cpa-40-without-reducing-spend',
    category: 'Advertising Tips',
    title: 'How to Cut CPA by 40% Without Reducing Ad Spend',
    excerpt: 'Most advertisers chase cheaper clicks. The real lever is audience precision. Here are 5 proven strategies our top-performing accounts use to slash acquisition costs.',
    date: 'Mar 1, 2026',
    readTime: '7 min read',
    color: 'blue',
    author: { name: 'AdvertisingSystems Team', role: 'Strategy' },
    content: [
      {
        title: 'The mistake most teams make',
        paragraphs: [
          'When CPA goes up, the first reaction is often to cut budget or narrow targeting until volume drops. That can stabilize CPA on paper while shrinking revenue. The accounts we see hitting 40%+ CPA reductions without cutting spend do the opposite: they sharpen who they’re talking to and where, then let the system optimize bids and creative for that audience.',
        ],
      },
      {
        title: '5 strategies that actually work',
        paragraphs: [
          '1. Consolidate lookalikes and exclude converters: One strong lookalike of recent converters, with all converters excluded across the funnel, often outperforms multiple broad lookalikes.',
          '2. Use cross-channel signals: If someone searched on Google but converted on Meta, feed that back. Unified attribution lets you bid up on people who show intent on one channel and convert on another.',
          '3. Segment by value, not just action: A "purchase" segment that includes only high AOV or LTV customers gives the algorithm a better target than a single "all purchasers" segment.',
          '4. Let automation handle bid and budget: Once audiences and creative are set, our top accounts let AI handle bid and budget reallocation. Manual overrides spike CPA more often than they help.',
          '5. Test one variable at a time: When CPA spikes, change audience or creative or placement — not all three. Otherwise you never learn what actually moved the needle.',
        ],
      },
      {
        title: 'Putting it together',
        paragraphs: [
          'None of this requires a huge team. It requires clear segments, clean conversion data, and a platform that can optimize across channels. Start with one channel and one segment (e.g. high-LTV lookalike on Meta), measure CPA and ROAS for 2–3 weeks, then expand. We’ve seen 40% CPA drops in 60–90 days with this approach.',
        ],
      },
    ],
  },
  {
    slug: 'boutique-hotel-chain-5-8x-roas',
    category: 'Case Studies',
    title: 'How a Boutique Hotel Chain Achieved 5.8x ROAS in 60 Days',
    excerpt: 'Mediterranean Escapes went from scattered OTA campaigns to a unified AI-optimized strategy — and saw revenue per room night increase 230%.',
    date: 'Feb 22, 2026',
    readTime: '6 min read',
    color: 'violet',
    author: { name: 'AdvertisingSystems Team', role: 'Customer Success' },
    content: [
      {
        title: 'The challenge',
        paragraphs: [
          'Mediterranean Escapes runs 12 properties across Spain and Portugal. Each property had its own OTA campaigns (Booking.com, Expedia, TripAdvisor) plus some Google and Meta activity. The marketing lead was spending 2–3 hours a day jumping between extranets, updating bids and budgets by hand, and still seeing huge variance in cost per booking and occupancy.',
          'They needed one place to see performance, set rules, and let automation handle the rest — without hiring more people.',
        ],
      },
      {
        title: 'What we did',
        paragraphs: [
          'We connected all OTA and paid accounts to AdvertisingSystems in under a week. The team set occupancy and revenue targets per property; our AI Budget Allocator and bid rules then reallocated spend toward the best-performing campaigns and dates.',
          'They used our cross-channel dashboard to spot which properties and OTAs were driving the most revenue per euro spent, and shifted budget accordingly. Manual bid updates stopped; the system now adjusts every 15 minutes.',
        ],
      },
      {
        title: 'Results',
        paragraphs: [
          'Within 60 days, Mediterranean Escapes saw ROAS climb to 5.8x on average across OTAs and paid, with revenue per room night up 230% for the same period year over year. Time spent on campaign management dropped from ~15 hours a week to under 2, and they’ve since expanded the same setup to a new property in Italy.',
        ],
      },
      {
        title: 'Takeaway',
        paragraphs: [
          'Unifying OTA and paid channels in one AI-driven system doesn’t just save time — it surfaces which combinations of property, OTA, and creative actually drive revenue. Once you see that, reallocation and automation do the rest.',
        ],
      },
    ],
  },
  {
    slug: 'death-of-manual-bidding-2026',
    category: 'Industry Trends',
    title: 'The Death of Manual Bidding: What 2026 Means for PPC Managers',
    excerpt: "Automation isn't replacing PPC professionals — it's elevating them. A look at how the role is shifting from bid management to strategic oversight.",
    date: 'Feb 14, 2026',
    readTime: '5 min read',
    color: 'amber',
    author: { name: 'AdvertisingSystems Team', role: 'Editorial' },
    content: [
      {
        title: 'The shift we’re seeing',
        paragraphs: [
          'Manual bidding made sense when platforms gave limited levers and data was sparse. Today, Google and Meta (and the major OTAs) expose thousands of signals and allow rule- and ML-driven automation. The teams that thrive in 2026 aren’t the ones tweaking bids by hand — they’re the ones defining audiences, creative tests, and guardrails, then letting algorithms execute.',
        ],
      },
      {
        title: 'What stays human',
        paragraphs: [
          'Strategy: Which channels, segments, and offers to prioritize.',
          'Creative and messaging: What to test and how to position the brand.',
          'Guardrails: Min/max spend, brand safety, and "never do this" rules.',
          'Interpretation: Why did ROAS drop? Is it creative, audience, or something external? Automation can flag it; humans decide the fix.',
        ],
      },
      {
        title: 'What becomes automated',
        paragraphs: [
          'Bid and budget adjustments, reallocation across campaigns and channels, and routine reporting can all run on rules and ML. The PPC manager’s job becomes setting the strategy and reviewing outcomes, not clicking through UIs every day.',
        ],
      },
      {
        title: 'Bottom line',
        paragraphs: [
          '2026 isn’t the end of the PPC professional. It’s the year the role finally separates "strategist" from "bid mechanic." The former is more valuable than ever; the latter is being absorbed by the platforms and tools like ours. If you’re still spending most of your day on manual bids, now’s the time to lean into strategy and automation.',
        ],
      },
    ],
  },
  {
    slug: 'meta-ads-google-ads-cross-channel-playbook',
    category: 'Advertising Tips',
    title: 'Meta Ads + Google Ads: The Cross-Channel Playbook That Actually Works',
    excerpt: "Running both platforms in silos? You're leaving money on the table. Learn how unified attribution reveals the full customer journey and boosts ROAS.",
    date: 'Feb 7, 2026',
    readTime: '8 min read',
    color: 'blue',
    author: { name: 'AdvertisingSystems Team', role: 'Strategy' },
    content: [
      {
        title: 'The silo problem',
        paragraphs: [
          'Most advertisers run Google and Meta separately: separate budgets, separate reporting, separate "last click" wins. So when someone sees a Meta ad, then searches on Google and converts, Google gets the credit and Meta looks inefficient. You end up underfunding the channel that started the journey and overfunding the one that closed it.',
        ],
      },
      {
        title: 'Why unified attribution matters',
        paragraphs: [
          'Unified attribution (view-through and click-through across both platforms) shows the full path. You’ll often find that Meta is driving a large share of conversions that Google eventually closes — and that Meta’s "direct" ROAS is understated. Once you credit both touchpoints, you can reallocate budget to the true drivers instead of the last click.',
        ],
      },
      {
        title: 'A playbook that works',
        paragraphs: [
          '1. Connect both Google and Meta to a single reporting and optimization layer (e.g. AdvertisingSystems) so you see one journey.',
          '2. Use a consistent attribution window (e.g. 7-day click, 1-day view) across both so you’re comparing apples to apples.',
          '3. Create segments of "Google converters who saw Meta" and "Meta converters who saw Google" and use them for lookalikes and remarketing.',
          '4. Set cross-channel budget rules: e.g. "If Meta’s attributed ROAS is above X, allow the AI to shift more spend from Google to Meta."',
          '5. Review weekly: Look at assisted conversions and path reports, not just last-click. Adjust creative and audience based on where people actually enter and exit the funnel.',
        ],
      },
      {
        title: 'What you’ll see',
        paragraphs: [
          'Accounts that implement this typically see ROAS improve by 20–40% within 60–90 days, not because they spend more, but because they spend in the right place. Meta often gets a fairer share of budget; Google keeps closing intent. If you’re still optimizing each platform in a vacuum, this is the year to connect them.',
        ],
      },
    ],
  },
  {
    slug: 'tiktok-ads-integration-live',
    category: 'Product Updates',
    title: 'New Integration: TikTok Ads Now Live in AdvertisingSystems',
    excerpt: 'Manage TikTok campaigns alongside Google, Meta, and OTAs from a single dashboard. Full bidding, analytics, and AI optimization support included.',
    date: 'Jan 30, 2026',
    readTime: '3 min read',
    color: 'royal-green',
    author: { name: 'AdvertisingSystems Team', role: 'Product' },
    content: [
      {
        title: 'What’s available',
        paragraphs: [
          'TikTok Ads is now fully integrated into AdvertisingSystems. You can connect your TikTok Ads Manager account and get: a single dashboard for TikTok alongside Google, Meta, and OTA campaigns; real-time spend and performance; AI-driven bid and budget recommendations; and cross-channel reporting so you can see how TikTok fits into the full funnel.',
        ],
      },
      {
        title: 'How to connect',
        paragraphs: [
          'In AdvertisingSystems, go to Settings → Integrations and select TikTok Ads. You’ll be guided through TikTok’s OAuth flow; once connected, we’ll pull in your campaigns, ad sets, and ads. Bidding and budget changes you make in AdvertisingSystems are pushed back to TikTok via their API.',
        ],
      },
      {
        title: 'What’s next',
        paragraphs: [
          'We’re rolling out TikTok-specific AI rules (e.g. optimize for video views or conversions) and creative performance breakdowns in the next few weeks. If you’re already running TikTok, connect your account and try it; if you’ve been waiting for TikTok to sit next to your other channels, now’s the time.',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
