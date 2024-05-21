import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
import manifest from "@/config/routes.json";
import "@/styles/globals.css";
import { Providers } from "./providers";
import {clsx} from "@simao234430/shared-utils";
// import {fontSans} from "@/config/fonts";
import {siteConfig} from "@/config/site";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {fontSans} from "@/config/fonts";
import {ProBanner} from "@/components/pro-banner";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "NextUI",
    "React Aria",
    "Server Components",
    "React Components",
    "UI Components",
    "UI Kit",
    "UI Library",
    "UI Framework",
    "UI Design System",
  ],
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "white"},
    {media: "(prefers-color-scheme: dark)", color: "black"},
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  authors: [
    {
      name: "jrgarciadev",
      url: "https://jrgarciadev.com",
    },
  ],
  creator: "jrgarciadev",
  alternates: {
    canonical: "https://YooUI.org",
    types: {
      "application/rss+xml": [{url: "https://YooUI.org/feed.xml", title: "NextUI RSS Feed"}],
    },
  },
  viewport:
    "viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning dir="ltr" lang="en">
    {/* <body className={clsx("min-h-screen bg-background font-sans antialiased" )}>
    <div className="relative flex flex-col" id="app-container">
      <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
      <Navbar mobileRoutes={manifest.mobileRoutes} routes={manifest.routes} />
            {children}
            <Footer />
      </Providers>
      </div>
      </body> */}

      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
          <div className="relative flex flex-col" id="app-container">
          <ProBanner />
            <Navbar mobileRoutes={manifest.mobileRoutes} routes={manifest.routes} />
            {children}
            <Footer />
          </div>
   
        </Providers>
     
      </body>
    </html>
  );
}
