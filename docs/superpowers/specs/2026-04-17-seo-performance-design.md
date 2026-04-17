# SEO, Performance & Content Design — Ashwa

**Date:** 2026-04-17  
**Scope:** Approach B — SEO + Performance + Content, no layout/animation changes  
**Deploy target:** Cloudflare via OpenNext

---

## 1. SEO

### New files
- `public/robots.txt` — allow all crawlers, `Sitemap: https://ashwa.in/sitemap.xml`
- `src/app/sitemap.ts` — Next.js sitemap returning `/` (priority 1.0) and `/about` (priority 0.8), weekly changefreq

### Modified files
- `src/app/layout.tsx`
  - Add JSON-LD via `<Script>` in `<head>`: two schemas — `Organization` (name, url, logo, address Raipur CG, contactPoint hello@ashwa.io) and `SoftwareApplication` (applicationCategory: BusinessApplication, operatingSystem: Web)
  - Ensure `metadataBase` always resolves to `https://ashwa.in`
  - Add `display: 'swap'` to Bebas Neue font config
- `src/app/about/layout.tsx`
  - Add `export const metadata` with title "About Ashwa — Vehicle Tracking Engineers", description, canonical `/about`, OG/Twitter tags

### OG image
- `/og-image.jpg` is referenced in layout metadata but does not exist in `public/`. Add placeholder or real 1200×630 image. **Blocks social share previews until resolved.**

---

## 2. Performance

### GlobalDatabase (`src/components/ui/GlobalDatabase.tsx`)
- Canvas size: `1200×1200` → `600×600` (devicePixelRatio stays 2, still sharp)
- `mapSamples`: `25000` → `16000`
- `isMobile` init: replace `useState(true)` with `useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : true)` to reduce re-render flash

### Lazy loading (`src/app/(home)/page.tsx`)
- `GlobalDatabase` and `Achievements` converted to `dynamic()` imports with `ssr: false` and a minimal height placeholder as `loading` fallback
- Above-fold components (`Hero`, `About`) remain static imports

### next.config.ts
- Add `compress: true`
- Add `poweredByHeader: false`
- Add image formats: `['image/webp', 'image/avif']`

### Font
- Bebas Neue: add `display: 'swap'` to prevent FOIT

---

## 3. Content

### Hero (`src/sections/Hero2.tsx`)
- Badge text: "Now live — real-time GPS tracking across India"
- Body copy: "Know where every vehicle is, right now. Complete route history, driver analytics, and instant alerts — built for Indian fleets."
- CTA: "Start Tracking Free" (was "Launch Dashboard")

### Services (`src/sections/services.tsx`)
- Fix mobile: wrap in `overflow-hidden` container to prevent `whitespace-nowrap` overflow
- "History Management" → "Trip History & Playback"
- "Advanced Features Coming Soon" → "Driver Scoring & Fuel Monitoring"

### About section (`src/sections/about.tsx`)
- Replace generic boilerplate with: "We built Ashwa after watching fleet operators lose hours to phone calls just to know where their vehicles were. No more guessing — live location, full history, one dashboard."

### Achievements (`src/sections/achievements.tsx`)
- Tighten descriptions: remove corporate filler, make each stat feel earned and specific

### About page (`src/app/about/page.tsx`)
- Sharpen h1: keep structure, improve specificity
- Vision section: trim filler phrases, make paragraphs punchy

---

## Out of scope
- Nav/footer link wiring (kept as-is per user instruction)
- New pages or routes
- shadcn component additions
- Animation/layout refactors
- RSC pattern refactor for GlobalDatabase
