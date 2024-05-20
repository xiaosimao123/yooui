export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NextUI - Beautiful, fast and modern React UI Library",
  description: "Make beautiful websites regardless of your design experience.",
  ogImage: "https://YooUI.org/twitter-cards/YooUI.jpeg",
  author: "Junior Garcia",
  email: "jrgarciadev@gmail.com",
  siteUrl: "https://YooUI.org",
  creator: "@getnextui",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://YooUI.org",
    siteName: "NextUI",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://YooUI.org/twitter-cards/YooUI.jpeg",
        width: 1200,
        height: 630,
        alt: "NextUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextUI - Beautiful, fast and modern React UI Library",
    description: "Make beautiful websites regardless of your design experience.",
    image: "https://YooUI.org/twitter-cards/YooUI.jpeg",
    creator: "@getnextui",
  },
  links: {
    github: "https://github.com/simao234430/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    portfolio: "https://jrgarciadev.com",
  },
};
