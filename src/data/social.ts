import { NavLink, Stat } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#pricing" },
  { label: "Process", href: "#process" },
];

export const STATS: Stat[] = [
  { value: "12K+", label: "LinkedIn Following" },
  { value: "3+", label: "Years Building" },
  { value: "Fast", label: "MVP Delivery" },
  { value: "100%", label: "In-House Team" },
];

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "aotayom34@gmail.com";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "#";
export const TELEGRAM_HANDLE = process.env.NEXT_PUBLIC_TELEGRAM_HANDLE || "#";

export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "#";

export const UPWORK_URL = "https://www.upwork.com/freelancers/~012db4b0d78f573b8c";

export const SOCIAL_LINKS = [
  { name: "GitHub", url: GITHUB_URL },
  { name: "Upwork", url: UPWORK_URL },
  { name: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#" },
  { name: "X / Twitter", url: process.env.NEXT_PUBLIC_TWITTER_URL || "#" },
];
