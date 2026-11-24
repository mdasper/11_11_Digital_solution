# 11 11 Digital Solutions — Flagship Portfolio Website (v4)

> **Precision meets passion.**  
> Awwwards / FWA Site-of-the-Day level portfolio web application engineered for **11 11 Digital Solutions**, a premier digital agency offering **Website Development**, **Digital Marketing**, **Reels Production**, and **Video Editing**.

Founded and directed by **Mohamed Asper** (`+91 95664 98072` · `asper.mohamed22@gmail.com`).

---

## 💎 Signature Brand Innovations

1. **Twin-Bar Rail (Desktop Navigation DNA)**:
   - Fixed twin vertical bars on the desktop left edge inspired by the `11 11` logo motif.
   - Fills with the signature crimson gradient (`#FF1A63` -> `#C2104A` -> `#7A0A2E`) as scroll progress increases.
   - Morphing section counter (`01` through `12`) with active section label.
2. **11:11 Ritual Clock Motif**:
   - Signature preloader counts up from `00:00` to `11:11` in 1.8s, followed by a circular clip-path reveal into the hero.
   - Real-time IST studio clock in the editorial footer.
   - Page route transition curtains with staggered crimson columns and a centered `11:11` brand flash.
3. **Crimson Studio Light & Spotlight Cards**:
   - Cursor-reactive radial gradient lighting on cards and borders (`SpotlightCard.tsx`).
   - Specular glare and subtle 3D tilt on desktop.
4. **Interactive Project Estimator**:
   - Real-time service scope calculator on `/pricing`.
   - Scale slider + add-ons checkboxes calculate dynamic range in INR (`₹`).
   - 1-tap WhatsApp button pre-formats all selections directly into `wa.me/919566498072`.

---

## 🎨 Design System & Color Tokens

Strictly adheres to the **Crimson & Ink / Off-White** palette:
- **Dark Stages (~50%)**: `--ink: #0D0A0C`, `--charcoal: #1B1619`, `--graphite: #2B2B2E`
- **Light Accents (~40%)**: `--offwhite: #FAF6F7`, `--blush: #FFE8EE`, `--line-dark: rgba(255,255,255,0.10)`
- **Crimson Accents (~10%)**: `--crimson: #F8115A`, `--magenta: #C2104A`, `--burgundy: #7A0A2E`
- **Gradients & Glow**: `--grad: linear-gradient(135deg, #FF1A63 0%, #C2104A 55%, #7A0A2E 100%)`, `--glow: 0 10px 40px rgba(248,17,90,0.35)`
- **Strict Rule**: Zero blue, green, or yellow anywhere in the interface.

### Typography
- **Display Headings**: `Sora` (600, 700, 800)
- **Body & Controls**: `DM Sans` (400, 500, 700)
- **Signature Accent Words**: `Instrument Serif` (italic with crimson gradient clip)

---

## 🚀 Routes & Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | 12-section flagship experience: Preloader, Aurora Shader Hero, Marquee, Manifesto Parallax, Services Bento, Stacked Work Deck, Stats, Why Us, 4-Step Process, Before/After Slider, Testimonials, Free Audit CTA. |
| `/about` | About | Studio manifesto, Founder Mohamed Asper profile, values bento, 11:11 ritual card, trajectory timeline (2022-2026), tools marquee. |
| `/services` | Services | Pinned horizontal scroll panels (01 Websites, 02 Marketing, 03 Reels, 04 Editing), collaboration phases, FAQ accordion. |
| `/services/websites` | Websites Deep-Dive | 6 website categories, scroll-driven laptop mockup, Lighthouse 90+ benchmarks, 3 packages. |
| `/services/marketing` | Marketing Deep-Dive | Conversion graph, 4-tier growth pillars (SEO, Meta/Google Ads, Social, CRO), monthly retainers. |
| `/services/reels` | Reels Deep-Dive | Interactive 9:16 vertical grid, soundwave bar animations, 4-step viral protocol, reel packages. |
| `/services/editing` | Editing Deep-Dive | Timeline visual hero, 6 disciplines, before/after DaVinci color grading comparison, 48h turnaround SLA. |
| `/work` | Selected Work | Filterable portfolio (`All`, `Websites`, `Video`) with layout shuffle animation, mockup previews, KPI chips. |
| `/work/:slug` | Case Study | Dynamic case studies for JB Healthcare, Highland Origin, Fazil Garments, SNAPIT Studio. Parallax gallery, tech architecture, Up Next card. |
| `/pricing` | Pricing | 3 categories (9 tiers), Interactive Project Estimator, 8-question FAQ accordion, bespoke quote banner. |
| `/contact` | Contact | Split layout: Mohamed Asper founder card, discovery call trigger, 2-hour SLA badge, prefillable project brief form routing directly to WhatsApp. |
| `*` | 404 | Branded `11 : 404` with return shortcuts. |

---

## 🛠️ Tech Stack & Architecture

- **React 18** + **Vite 6** + **TypeScript (strict)**
- **Tailwind CSS** with CSS token variables
- **GSAP 3** (`ScrollTrigger`, `CustomEase`) + **Lenis Smooth Scroll** synced via `gsap.ticker`
- **Framer Motion** for layout animations (`layoutId`, `AnimatePresence`)
- **Three.js** fluid aurora shader canvas (desktop fine pointer only)
- **Lucide React** icons
- **React Helmet Async** for route-level SEO meta
- **100% Offline-Resilient Vector Assets**: Built-in SVG mockups and diagrams in `src/assets/` ensure instant rendering with zero external CDN lag.

---

## 📂 Content Customization Guide (`src/data/`)

All content, pricing, case studies, and FAQs are separated from code in `src/data/*.ts`:

| File | What to Edit |
|---|---|
| `src/data/projects.ts` | Add/edit client projects, case study descriptions, stats, gallery screenshots, and live URLs. |
| `src/data/packages.ts` | Change pricing tiers, package features, estimator base prices, and add-on costs. |
| `src/data/services.ts` | Update service descriptions, features, and deliverables. |
| `src/data/faqs.ts` | Edit or add frequently asked questions and answers. |
| `src/data/about.ts` | Edit Mohamed Asper bio, team members, studio values, and company milestones. |
| `src/data/navigation.ts` | Add or reorder navbar links and mega-menu items. |
| `src/data/stats.ts` | Update metrics displayed across the home page and footer. |

---

## 💻 Development & Deployment

### Run Locally
```bash
# Install dependencies
npm install

# Start Vite dev server on http://localhost:3000
npm run dev
```

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Vercel / Netlify
This repository is configured for zero-config deployment on Vercel:
```bash
# Using Vercel CLI
npm i -g vercel
vercel
```
Ensure build command is `npm run build` and output directory is `dist`.

---

## 📞 Studio Contact

- **Lead**: Mohamed Asper, Founder & Creative Lead
- **Phone / WhatsApp**: `+91 95664 98072`
- **Email**: `asper.mohamed22@gmail.com`
- **LinkedIn**: [Mohamed Asper](https://www.linkedin.com/in/mohamed-asper-a-6a0657180/)
- **Studio**: Sivakasi & Chennai, Tamil Nadu, India (IST)
