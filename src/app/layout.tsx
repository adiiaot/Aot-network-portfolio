import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/sections/Nav";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap";

export const metadata: Metadata = {
  title: "AOT Network - Build. Ship. Scale.",
  description:
    "From MVP to production—fast, structured, and reliable. I build scalable mobile apps, web platforms, AI systems, and automation workflows.",
  keywords: [
    "AOT Network",
    "Mobile Development",
    "AI Development",
    "Web Development",
    "React Native",
    "Next.js",
    "MVP Development",
  ],
  openGraph: {
    title: "AOT Network - Build. Ship. Scale.",
    description:
      "Premium contract development. Mobile apps, web platforms, and AI systems.",
    type: "website",
    locale: "en_US",
    siteName: "AOT Network",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AOT Network - Build. Ship. Scale.",
    description:
      "Premium contract development. Mobile apps, web platforms, AI systems.",
    images: [{ url: "/images/og-image.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-theme="light" suppressHydrationWarning>
      <head>
        <link href={FONT_LINK} rel="stylesheet" />
      </head>
      <body className="min-h-full antialiased">
        <ThemeProvider>
          <Nav />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
