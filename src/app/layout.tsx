import type { Metadata } from "next";
import "./globals.css";

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;900&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap";

export const metadata: Metadata = {
  title: "AOT Network - Build. Ship. Scale.",
  description:
    "From MVP to production\u2014fast, structured, and reliable. We build scalable mobile apps, web platforms, AI systems, and automation workflows.",
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
      "Premium product development and AI systems agency. Mobile apps, web platforms, AI workflows.",
    type: "website",
    locale: "en_US",
    siteName: "AOT Network",
  },
  twitter: {
    card: "summary_large_image",
    title: "AOT Network - Build. Ship. Scale.",
    description:
      "Premium product development and AI systems agency.",
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
    <html lang="en" className="h-full">
      <head>
        <link href={FONT_LINK} rel="stylesheet" />
      </head>
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
