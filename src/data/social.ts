import { NavLink, Stat } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "AOT AI", href: "#aot-ai" },
];

export const STATS: Stat[] = [
  { value: "12K+", label: "LinkedIn Following" },
  { value: "3+", label: "Years Building" },
  { value: "Fast", label: "MVP Delivery" },
  { value: "100%", label: "In-House Team" },
];

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@aotnetwork.com";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "#";
export const TELEGRAM_HANDLE = process.env.NEXT_PUBLIC_TELEGRAM_HANDLE || "#";

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#" },
  { name: "X / Twitter", url: process.env.NEXT_PUBLIC_TWITTER_URL || "#" },
  { name: "TikTok", url: process.env.NEXT_PUBLIC_TIKTOK_URL || "#" },
  { name: "Instagram", url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#" },
];
