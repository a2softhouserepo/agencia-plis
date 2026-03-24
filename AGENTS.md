# AGENTS.md — Agência GIZ

Guidance for AI coding agents (GitHub Copilot, Cursor, Claude, etc.) working in this repository. Follow these conventions strictly to maintain consistency across the codebase.

---

## Stack Overview

| Layer        | Technology                          | Version |
| ------------ | ----------------------------------- | ------- |
| Framework    | Next.js App Router                  | 15.x    |
| Language     | TypeScript (strict)                 | 5.7     |
| Styling      | CSS Modules + CSS Custom Properties | —       |
| Icons        | Lucide React                        | 0.474   |
| Email        | NodeMailer (Gmail SMTP)             | 6.x     |
| Deploy       | Vercel                              | —       |

---

## Project Structure

```
src/
├── app/                       # Next.js App Router (pages, API routes, layout)
│   ├── layout.tsx             # Root layout — imports fonts, renders <Navbar />
│   ├── page.tsx               # Home /
│   ├── sobre/page.tsx         # /sobre
│   ├── nosso-metodo/page.tsx  # /nosso-metodo
│   ├── contato/page.tsx       # /contato
│   ├── api/contact/route.ts   # POST endpoint — NodeMailer
│   └── globals.css            # CSS reset + design tokens (:root) + .container-giz
├── assets/                    # Static images imported via next/image (src imports)
│   ├── banner-hero-bg.jpg
│   └── contato-falante.png
├── components/
│   ├── layout/                # Navbar, Footer, FooterVertical, Container
│   ├── ui/                    # Shared UI: Button, LogoBand
│   ├── home/                  # Section components for Home page
│   ├── sobre/                 # Section components for Sobre page
│   ├── metodo/                # Section components for Nosso Método page
│   └── contato/               # Section components for Contato page
├── data/
│   └── content.ts             # ALL site text/copy (single source of truth)
└── lib/
    └── mail.ts                # NodeMailer transporter + sendContactEmail()
```

---

## Core Conventions

### File Naming
- **Components:** PascalCase — `SectionMetodo.tsx`, `HeroBanner.tsx`
- **CSS Modules:** Same name as component — `SectionMetodo.module.css`, `HeroBanner.module.css`
- **Pages/Routes:** `page.tsx` inside folder (App Router)
- **Utilities:** camelCase — `mail.ts`, `content.ts`

### Component Structure
- Server components by default. Add `"use client"` only when strictly needed (interactivity, hooks, browser APIs)
- Page files (`app/*/page.tsx`) should only import and compose section components — no JSX logic
- Section components live in `src/components/<page>/` and are named `Section<Name>.tsx`

### Content / Text
- **Never hardcode text in component files.** All copy must be in `src/data/content.ts`
- Export typed objects (`siteConfig`, `homeContent`, `sobreContent`, etc.)
- Import content at the component level: `import { homeContent } from "@/data/content"`
- Content strings may contain **HTML markup** (e.g. `<br>`, `<span>`) — components render them via `dangerouslySetInnerHTML={{ __html: ... }}`

### Styling (CSS Modules + Custom Properties)

> This project uses **CSS Modules** (`.module.css` files) for component-level styling and **CSS Custom Properties** declared in `src/app/globals.css` as design tokens.
> There is **no Tailwind CSS** — it was fully removed from the project.

**Design tokens (defined in `:root` in `globals.css`, use via `var(--token)` in CSS Modules):**

| CSS Variable              | Value     | Usage                                |
| ------------------------- | --------- | ------------------------------------ |
| `--color-dark`            | `#271E55` | Navbar, dark section backgrounds     |
| `--color-dark-light`      | `#3a2f6e` | Checkbox bg, subtle dark elements    |
| `--color-dark-lightest`   | `#602E9E` | Input hover borders                  |
| `--color-dark-ultra-light`| `#8948D9` | Input default borders                |
| `--color-accent`          | `#C2F628` | Icons, highlights, checked states    |
| `--color-button`          | `#B3DB3C` | Buttons                              |
| `--font-sora`             | Sora      | Body text, buttons                   |
| `--font-archivo`          | Archivo   | Headings, menu links                 |

**Container:** Always use `<Container>` component from `@/components/layout/Container` (renders `.container-giz` — `max-width: 1860px`) instead of writing max-width manually.

**Styling rules:**
- One `.module.css` file per component — import as `import styles from "./Component.module.css"`
- Use `var(--color-dark)`, `var(--color-accent)`, etc. — never raw hex values in CSS Modules
- Use `var(--font-sora)`, `var(--font-archivo)` for `font-family`
- Global base styles (reset, focus, container) live in `globals.css` only

### Typography
- Headings: `var(--font-archivo)` with `font-stretch: expanded` (Archivo variable font)
- Body / buttons: `var(--font-sora)`
- Both fonts are loaded via `next/font/google` in `src/app/layout.tsx` with CSS variables `--font-sora` and `--font-archivo`

---

## Navbar Behavior

- **Fixed** at the top of the viewport (`position: fixed`, `z-index: 50`)
- **Default height:** 208px — **Scrolled height:** 120px (animated with `transition: height 0.3s ease`)
- Logo SVG also scales down on scroll via CSS transition
- The scroll state is managed with a `useState` + `useEffect` listener in `Navbar.tsx` (`"use client"`)
- All pages have `padding-top: 208px` on `<main>` (set in `globals.css`) to offset the fixed header

---

## Page & Routing Rules

| Route            | Has Footer? | Footer location          |
| ---------------- | ----------- | ------------------------ |
| `/`              | ❌          | N/A (uses `<SectionFrase>` with `<FooterVertical>`) |
| `/sobre`         | ✅          | Last section (`<Footer />`) |
| `/nosso-metodo`  | ❌          | N/A                      |
| `/contato`       | ✅          | Last section (`<Footer />`) |

- **Footer is NOT in `layout.tsx`** — it's included manually in pages that need it
- **`<LogoBand />`** appears between sections 02 and 03 on Home and Nosso Método pages
- **`/contato`** page uses the class `page-contato` (bg `#ECECE2`) set in layout

---

## API Route — `/api/contact`

File: `src/app/api/contact/route.ts`

- Method: `POST` only
- Validates: all fields required, email regex, max field lengths (500 chars), max message (5000 chars)
- Sanitizes: HTML-escapes all user inputs before putting them in the email body
- Calls `sendContactEmail()` from `src/lib/mail.ts`
- Returns `{ message }` on 200, `{ error }` on 400/500

**Never** remove input validation or HTML sanitization from this route.

---

## Environment Variables

Defined in `.env` (gitignored) and documented in `.env.example`.

| Variable                  | Used in           |
| ------------------------- | ----------------- |
| `NODEMAILER_HOST`         | `src/lib/mail.ts` |
| `NODEMAILER_PORT`         | `src/lib/mail.ts` |
| `NODEMAILER_USER`         | `src/lib/mail.ts` |
| `NODEMAILER_PASS`         | `src/lib/mail.ts` |
| `NOTIFICATION_NODEMAILER` | `src/lib/mail.ts` |

Never access `process.env` outside of `src/lib/mail.ts` and `src/app/api/`.

---

## Images / Assets

Images are stored in `src/assets/` and imported directly in components (Next.js handles optimization):

```tsx
import bannerBg from "@/assets/banner-hero-bg.jpg";
<Image src={bannerBg} alt="..." />
```

When adding new images:
1. Place the file in `src/assets/`
2. Import it in the component with a static import
3. Use `next/image` `<Image>` component

---

## Adding Content

To add or edit text on any page:
1. Edit `src/data/content.ts` only
2. The component will automatically reflect the change
3. Do not add new text fields directly in component files
4. HTML markup (`<br>`, `<span>`, etc.) is supported — rendered via `dangerouslySetInnerHTML`

---

## Adding a New Page

1. Create `src/app/<route>/page.tsx`
2. Create section components in `src/components/<route>/`
3. Create corresponding `.module.css` files for each component
4. Add content to `src/data/content.ts`
5. Add the link to `navLinks` in `src/data/content.ts`
6. Add `export const metadata` in the page file
7. If the page needs a footer, add `<Footer />` as the last JSX element

---

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build — must pass with zero errors
npm run lint     # ESLint check
npm start        # Run production build locally
```

---

## What NOT to Do

- ❌ Don't hardcode colors as hex — use `var(--color-dark)`, `var(--color-accent)`, etc.
- ❌ Don't add Tailwind CSS — the project uses CSS Modules
- ❌ Don't write inline styles — use CSS Modules
- ❌ Don't add `"use client"` to components that don't need it
- ❌ Don't put site copy directly in JSX — always use `src/data/content.ts`
- ❌ Don't access env vars outside `src/lib/` and `src/app/api/`
- ❌ Don't skip input validation / HTML sanitization in the API route
- ❌ Don't add `<Footer />` to `layout.tsx` — only to individual pages
- ❌ Don't put images in `public/` — use `src/assets/` with static imports
