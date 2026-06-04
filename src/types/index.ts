export interface Project {
  id: string;
  name: string;
  tag: string;
  description: string;
  role: string;
  status: "Live" | "In Progress" | "Open";
  accent: string;
  year: number;
  apkUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  imageUrl?: string;
  featured: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  timeline: string;
  tag: string;
  description: string;
  features: string[];
  highlight: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  idea: string;
  budget: string;
}

export interface FlexPricingForm {
  name: string;
  idea: string;
  budget: string;
}
