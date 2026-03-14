export const features = [
  {
    icon: "layout-dashboard",
    title: "Campaign Intelligence",
    subtitle: "One command center. Every channel.",
    quotes: [
      "Google, Meta, Booking.com, Expedia — everything in one screen. I stopped tab-switching and started scaling.",
      "I see exactly where every dollar goes across 6 ad platforms. No more blind spots.",
      "Launched 14 campaigns across 3 channels in 20 minutes. That used to take my team two days.",
    ],
    link: { text: "Explore Campaign Intelligence", href: "/features/campaign-management" },
    tags: ["Cross-channel sync", "Bulk launcher", "Real-time status"],
    mockup: {
      url: "app.advertisingsystems.ai",
      type: "campaigns" as const,
    },
  },
  {
    icon: "sparkles",
    title: "AI Optimization Engine",
    subtitle: "Your campaigns optimize themselves.",
    quotes: [
      "AI cut our CPA by 40% in week one. It found patterns across 50,000 data points that no human could.",
      "It shifted $2,400 from dying campaigns to top performers overnight. I woke up to record ROAS.",
      "The AI discovered a micro-audience that now drives 60% of our conversions. We never would have found it.",
    ],
    link: { text: "Explore AI Engine", href: "/features/ai-optimization" },
    tags: ["Autonomous bidding", "Budget reallocation", "Audience discovery"],
    mockup: {
      url: "app.advertisingsystems.ai",
      type: "optimization" as const,
    },
  },
  {
    icon: "chart-bar",
    title: "Performance Analytics",
    subtitle: "From data to decisions in seconds.",
    quotes: [
      "I proved $180K in attributed revenue to the CEO in a 5-minute report. The platform made it automatic.",
      "Caught a $800/week keyword drain before it cost us another cent. The AI flagged it, I killed it.",
      "Cross-channel attribution finally works. I know which touchpoints actually drive bookings.",
    ],
    link: { text: "Explore Analytics", href: "/features/analytics" },
    tags: ["Revenue attribution", "Live dashboards", "Anomaly alerts"],
    mockup: {
      url: "app.advertisingsystems.ai",
      type: "analytics" as const,
    },
  },
];
