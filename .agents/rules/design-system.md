# 11 11 DIGITAL SOLUTIONS - DESIGN SYSTEM & ARCHITECTURAL RULES
Version: 4.0 | Flagship Portfolio (Awwwards / FWA Site-of-the-Day Standard)

## 1. BRAND ESSENCE & ART DIRECTION
- **Concept**: "Precision meets passion." Cinematic dark stages lit by a single crimson light source, alternating with clean, airy light sections.
- **DNA**: Twin parallel shapes ("11 11") as the signature visual motif.
- **Palette Distribution**: ~50% Dark (`#0D0A0C`, `#1B1619`), ~40% Light (`#FAF6F7`, `#FFE8EE`), ~10% Crimson accent (`#F8115A` -> `#C2104A` -> `#7A0A2E`).
- **Strict Prohibition**: Zero blue, green, or yellow anywhere. No standard generic templates. No stock handshakes or cliché corporate photos.

## 2. DESIGN TOKENS
```css
```css
:root {
  /* colour */
  --ink: #0D0A0C;
  --charcoal: #1B1619;
  --graphite: #2B2B2E;
  --crimson: #F8115A;
  --magenta: #C2104A;
  --burgundy: #7A0A2E;
  --offwhite: #FAF6F7;
  --blush: #FFE8EE;
  --text-dark: #F4EEF0;
  --text-dark-muted: #8E8790;
  --text-light: #2B2B2E;
  --text-light-muted: #5B5459;
  --line-dark: rgba(255, 255, 255, 0.10);
  --line-light: rgba(43, 43, 46, 0.10);
  --grad: linear-gradient(135deg, #FF1A63 0%, #C2104A 55%, #7A0A2E 100%);
  --glow: 0 10px 40px rgba(248, 17, 90, 0.35);

  /* shape */
  --r-sm: 12px;
  --r-md: 20px;
  --r-lg: 28px;
  --r-pill: 999px;

  /* spacing (8px grid scale) */
  --s-1: 8px;
  --s-2: 16px;
  --s-3: 24px;
  --s-4: 32px;
  --s-6: 48px;
  --s-8: 64px;
  --s-12: 96px;
  --s-16: 128px;

  /* typography */
  --font-display: 'Sora', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-accent: 'Instrument Serif', Georgia, serif;
  --fs-h1: clamp(3rem, 8vw, 7rem);
  --fs-h2: clamp(2.2rem, 5vw, 4rem);
  --fs-h3: clamp(1.4rem, 2.4vw, 1.9rem);
  --fs-body: 1.05rem;
  --fs-eyebrow: 0.78rem;

  /* motion */
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.76, 0, 0.24, 1);
  --d-micro: 0.25s;
  --d-base: 0.8s;
  --d-reveal: 1.2s;
}
```

## 3. TYPOGRAPHY RULES
- **Headlines (H1, H2)**: Sora, tight tracking (-0.035em to -0.03em), line-height 0.98 to 1.05. Maximum 8 words per headline.
- **Accents**: Exactly one word per key headline set in *Instrument Serif italic* with crimson gradient text clipping (`bg-clip-text text-transparent bg-gradient-to-r from-[#FF1A63] via-[#C2104A] to-[#7A0A2E]`).
- **Eyebrows**: DM Sans 500, uppercase, tracking 0.18em, crimson, preceded by the signature twin-bar marker `||`.
- **Body**: DM Sans 400/500, line-height 1.7. Card body max 18 words. Bullets max 6 words.
- **Contrast**: White text on crimson gradient must be bold 16px+ (WCAG AA). Never use crimson for small body text on dark surfaces.

## 4. SIGNATURE ELEMENTS
1. **Twin-Bar Rail**: Slim vertical bar pair pinned to the left edge of desktop viewports (`1440px`, `1024px`), fills with crimson gradient relative to scroll progress, shows active section number (01-12) & label with rolling text swap, morphs subtly at each section. Mobile uses top horizontal progress line.
2. **11:11 Clock Motif**:
   - Preloader counter: `00:00` -> `11:11` in 1.8s.
   - Footer: Live real-time IST studio clock (`HH:MM:SS IST`).
   - Page transition flash: crimson curtains with centered `11:11` glyph.
3. **Crimson Studio Light**: Mouse-following radial crimson spotlight (`rgba(248, 17, 90, 0.18)`) over dark surfaces casting dynamic specular glow on card borders. On touch devices, drifts in a gentle organic loop.

## 5. TECHNICAL & MOTION STANDARDS
- React 18 + Vite + TypeScript (strict) + React Router v6 (lazy-loaded routes).
- GSAP + ScrollTrigger + Lenis synced via `gsap.ticker`.
- **GSAP Hygiene**: Always wrap animations in `gsap.context((self) => {...}, containerRef)` and call `ctx.revert()` in unmount cleanups.
- **ScrollTrigger Refresh**: Fire `ScrollTrigger.refresh()` on route transition settlement and when dynamic assets resolve.
- **R3F Hero Aurora**: Lazy-loaded desktop only; static WebP/canvas poster fallback on mobile/touch/low-power.
- **Card Spotlight**: Dynamic CSS variables `--mouse-x` / `--mouse-y` for border and surface illumination.
- **Data Isolation**: All text, projects, pricing, packages, testimonials, and FAQs live in `src/data/*.ts`. Components must not hardcode content. Mark mock data explicitly as `PLACEHOLDER`.
- **Responsive Quality Gates**: Test viewports: 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop). Zero horizontal overflow.
- **Reduced Motion**: Gracefully fall back to simple opacity crossfades; disable shaders, scrub-pinning, and heavy transforms when `prefers-reduced-motion` is detected.
