# AOT Network

**Build. Ship. Scale.**

A premium, scalable portfolio platform for **AOT Network** — a product development and AI systems agency. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, and designed to be fully data-driven so you never need to touch component code to update content.

---

## Table of Contents

- [About AOT Network](#about-aot-network)
- [Business Model](#business-model)
- [Services](#services)
- [Pricing & Packages](#pricing--packages)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Content Management Guide](#content-management-guide)
  - [How to Add a New Project](#how-to-add-a-new-project)
  - [How to Update Services](#how-to-update-services)
  - [How to Update Pricing](#how-to-update-pricing)
  - [How to Update the AI System Prompt](#how-to-update-the-ai-system-prompt)
  - [How to Update Contact Info](#how-to-update-contact-info)
  - [How to Add Project Screenshots](#how-to-add-project-screenshots)
- [Featured Projects System](#featured-projects-system)
- [AI Chat System](#ai-chat-system)
- [Design System](#design-system)
- [Environment Variables](#environment-variables)
- [Build & Deploy](#build--deploy)

---

## About AOT Network

AOT Network is a premium product development and AI systems agency that builds:

- **Mobile apps** — iOS & Android via React Native
- **Web platforms** — SaaS dashboards, admin systems, landing pages
- **AI systems** — LLM-powered features, automation pipelines, intelligent workflows
- **dApps & Web3** — Blockchain testnet contributions, smart contracts, protocol testing
- **Trading & automation** — Bots, portfolio management, real-time market systems
- **Developer advocacy** — Community building, open source, technical content

### Brand Identity

- **Theme:** Futuristic, minimal, premium, cyber-dark
- **Visual style:** Glassmorphism, gradient-heavy, smooth animations, responsive
- **Colors:** Black backgrounds, deep navy, purple gradients (`#7c3aed` → `#a855f7` → `#e879f9`), electric blue accents, soft white typography
- **Typography:**
  - Headings: Exo 2 (300–900)
  - Body: Rajdhani (400–700)
  - Mono/UI: Share Tech Mono

### Social Proof

- **13,000+** LinkedIn followers
- **3+ years** of product development experience
- **100%** in-house team
- **Fast MVP delivery** track record

---

## Business Model

AOT Network operates on a structured, transparent engagement model:

1. **Structured Packages** — Three clear tiers (Starter MVP, Growth Build, AI Systems) with defined scope, timeline, and pricing
2. **Flexible Scope** — Selective partnerships with founders at various stages; discovery calls to determine fit
3. **Monthly Client Cap** — One new client per month to ensure quality
4. **No Subcontractors** — All work done in-house

### Core Values

- No fluff. Just execution.
- Structured sprints, regular updates, clean maintainable code
- From MVP to production — fast, structured, reliable
- Direct, technical, execution-focused communication

---

## Services

| Service | Description | Technologies |
|---|---|---|
| **Mobile App Development** | Cross-platform iOS and Android apps from concept to App Store | React Native, iOS, Android, Push Notifications |
| **Web & Dashboard Systems** | Scalable web platforms, SaaS dashboards, admin systems | Next.js, React, Supabase, REST APIs |
| **AI Systems & Integrations** | LLM features, automation pipelines, intelligent workflows | OpenAI, Anthropic, Automation, Custom APIs |

---

## Pricing & Packages

| Package | Price | Timeline | Best For |
|---|---|---|---|
| **Starter MVP** | From $1,000 | 2–4 weeks | Early-stage validation |
| **Growth Build** | From $3,000 | 4–8 weeks | Full product with backend, dashboards, integrations |
| **AI Systems** | Custom quote | Scope-dependent | AI-first products, automation, complex logic |

Each package includes deployment, documentation, and post-launch support.

---

## Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI Libraries:** Shadcn/ui compatible patterns
- **Icons:** Lucide React / Inline SVGs
- **Animation:** CSS keyframe animations

### Backend / Infrastructure
- **Deployment:** Vercel (zero-config)
- **Image Optimization:** Next.js Image component

### AI Chat
- **Provider:** Anthropic API
- **Model:** Claude Sonnet 4
- **System Prompt:** Configurable via `src/data/aiConfig.ts`

---

## Repository Structure

```
aot-network/
├── .env.example                  # Environment variable template
├── .env.local                    # Local environment variables (gitignored)
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS config (Tailwind)
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
├── public/
│   └── images/
│       └── projects/             # Project screenshots (place images here)
└── src/
    ├── app/
    │   ├── layout.tsx            # Root layout, Google Fonts, SEO metadata, OpenGraph
    │   ├── page.tsx              # Assembles all sections into the homepage
    │   └── globals.css           # Tailwind v4 imports, CSS variables, keyframe animations
    ├── components/
    │   ├── sections/             # Full-page sections (one file per section)
    │   │   ├── Nav.tsx           # Fixed responsive navbar with mobile drawer
    │   │   ├── Hero.tsx          # Typewriter animation, particles, floating triangles, stats
    │   │   ├── Work.tsx          # Project cards (featured + all view toggle, filters)
    │   │   ├── Services.tsx      # Three-column service cards
    │   │   ├── Pricing.tsx       # Three-tier pricing with popular highlight
    │   │   ├── FlexPricing.tsx   # Custom budget form
    │   │   ├── Process.tsx       # 4-step timeline/process
    │   │   ├── AOTAIChat.tsx     # AI chat widget (Anthropic API)
    │   │   ├── Authority.tsx     # Testimonials, avatar stack, social proof
    │   │   ├── Contact.tsx       # Contact form (mailto), WhatsApp, Telegram, Email
    │   │   └── Footer.tsx        # Logo, tagline, social links, legal
    │   └── ui/                   # Reusable UI primitives
    │       ├── AOTLogo.tsx       # AOT triangle SVG with glow filter
    │       ├── SectionLabel.tsx  # Section header with diamond + gradient lines
    │       ├── Particles.tsx     # Floating particle background effect
    │       └── FloatingTriangles.tsx  # Background floating AOT logos
    ├── data/                     # All content — edit these, never touch components
    │   ├── projects.ts           # Project entries (type: Project[])
    │   ├── services.ts           # Service offerings (type: Service[])
    │   ├── pricing.ts            # Pricing plans + process steps
    │   ├── aiConfig.ts           # AI system prompt, model config, quick questions
    │   ├── social.ts             # Nav links, stats, contact env vars
    │   └── testimonials.ts       # Testimonial quotes
    ├── hooks/
    │   └── useTypewriter.ts      # Typewriter effect hook
    └── types/
        └── index.ts              # TypeScript interfaces for all data shapes
```

### Architecture Principles

- **Data-driven:** Every piece of content lives in `src/data/`. Adding a project = adding one object. Zero component changes.
- **Modular:** Each section is an independent component with clear props/imports
- **Typed:** Full TypeScript coverage with strict interfaces
- **Maintainable:** Separation of concerns — UI, data, configuration, and types are isolated

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Content Management Guide

### How to Add a New Project

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  id: "my-project",                    // Unique identifier
  name: "My Project",                  // Display name
  tag: "AI · Automation",              // Category tag shown on card
  description: "Short description.",   // Project summary
  role: "Full-Stack Development",      // Your role
  status: "Live",                      // "Live" | "In Progress" | "Open"
  accent: "#a855f7",                   // Theme color for card (hex)
  year: 2025,                          // Release year
  featured: true,                      // Show in featured section
  technologies: ["React", "Node.js"],  // Tech stack badges
  // All links are optional — buttons only render when URLs exist:
  appStoreUrl: "https://apps.apple.com/...",
  playStoreUrl: "https://play.google.com/...",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  caseStudyUrl: "https://...",
  imageUrl: "/images/projects/my-project.png",  // Optional screenshot
}
```

The project card automatically renders with:
- Correct status badge color (green/live, purple/in progress, fuchsia/open)
- Tech stack badges
- Action buttons for each provided URL
- Image preview or logo placeholder fallback

### How to Update Services

Open `src/data/services.ts`. Each service has:
- `icon`: A Unicode symbol
- `title`: Service name
- `description`: Brief explanation
- `tags`: Array of technology/skill tags displayed as badges

### How to Update Pricing

Open `src/data/pricing.ts`. Each plan has:
- `name`, `price`, `timeline`, `tag`, `description`, `features` (string array)
- `highlight`: If true, card gets the "POPULAR" badge and accent styling

The same file contains `processSteps` for the 4-step process section.

### How to Update the AI System Prompt

Open `src/data/aiConfig.ts` and edit the `SYSTEM_PROMPT` string. This controls how the AOT AI chatbot responds. The prompt contains:
- What AOT Network builds
- Pricing packages and budget handling instructions
- Known projects
- Tone and behavior guidelines (direct, technical, execution-focused)

You can also update:
- `AI_MODEL`: The Anthropic model name
- `AI_MAX_TOKENS`: Response length limit
- `AI_WELCOME_MESSAGE`: First message shown in chat
- `quickQuestions`: Pre-filled question buttons

### How to Update Contact Info

Edit `.env.local`:

```
NEXT_PUBLIC_CONTACT_EMAIL=hello@aotnetwork.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_TELEGRAM_HANDLE=aotnetwork
```

These are consumed in `src/data/social.ts` and used across the Contact and Footer sections.

### How to Add Project Screenshots

1. Place images in `/public/images/projects/`
2. Set the `imageUrl` field in the project data, e.g. `"/images/projects/bigcut.png"`
3. If no `imageUrl` is provided, the card falls back to the AOT logo with "Preview Coming Soon"

Supported formats: PNG, WebP, JPEG. Recommended ratio: 16:9 or 4:3.

---

## Featured Projects System

- Projects with `featured: true` appear first
- Only featured projects are shown by default (max 3)
- A "View all projects" toggle reveals all non-featured projects
- Non-featured projects are still accessible — just one click away

---

## AI Chat System

The AOT AI chat widget (`#aot-ai` section) connects to the Anthropic API:

- **Model:** Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- **Endpoint:** `https://api.anthropic.com/v1/messages`
- **System prompt:** Configurable in `src/data/aiConfig.ts`
- **Quick questions:** "What do you build?", "How does pricing work?", etc.
- **UI:** Chat bubble design with AOT logo avatar, loading animation, scroll-to-bottom

> Note: The Anthropic API key is sent from the client side. In production, you should proxy through an API route or server action for security.

---

## Design System

### Colors

| Role | Value |
|---|---|
| Background | `#000` |
| Surface | `#0d0020` |
| Border | `#a855f7` / `#7c3aed` (at varying opacities) |
| Primary gradient | `#7c3aed` → `#a855f7` → `#e879f9` |
| Text primary | `#fff` |
| Text secondary | `#a1a1aa` (zinc-400) |
| Text muted | `#71717a` (zinc-500) |

### Typography

- **Exo 2:** Hero headings, section titles, stat numbers
- **Rajdhani:** Body copy, buttons, CTA text
- **Share Tech Mono:** Labels, badges, nav links, footer, code-like UI

### Animations

Defined in `src/app/globals.css`:

| Animation | Purpose |
|---|---|
| `float-logo` | Gentle vertical float for the AOT logo |
| `float-tri` | Floating background triangle logos |
| `float-particle` | Subtle particle movement |
| `pulse-glow` | Glow pulse on the AI chat status dot |

### UI Patterns

- Glassmorphism: `backdrop-blur-2xl bg-black/85`
- Card hover: hover with `-translate-y-2` + glow shadow
- Section transitions: `transition-all duration-500`
- Scrollbar: 3px custom purple gradient scrollbar
- Scroll behavior: `smooth` for anchor links

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_CONTACT_EMAIL` | Yes | Contact email address |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | WhatsApp number (digits only) |
| `NEXT_PUBLIC_TELEGRAM_HANDLE` | Yes | Telegram username (without @) |
| `NEXT_PUBLIC_LINKEDIN_URL` | No | LinkedIn profile/company URL |
| `NEXT_PUBLIC_TWITTER_URL` | No | X/Twitter profile URL |
| `NEXT_PUBLIC_TIKTOK_URL` | No | TikTok profile URL |
| `NEXT_PUBLIC_INSTAGRAM_URL` | No | Instagram profile URL |

Copy `.env.example` to `.env.local` and fill in your values.

---

## Build & Deploy

```bash
npm run build   # Production build (outputs to .next/)
npm start       # Start production server on port 3000
```

### Deploy to Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy — zero configuration required

The project uses `next build` with standard Next.js output, fully compatible with Vercel's build system.

---

## License

© 2024–2025 AOT Network. All rights reserved.
