# AGENTS.md — Agência GIZ

Guidance for AI coding agents (GitHub Copilot, Cursor, Claude, etc.) working in this repository. Follow these conventions strictly to maintain consistency across the codebase.

---

## Stack Overview

| Layer        | Technology                          | Version |
| ------------ | ----------------------------------- | ------- |
| Framework    | Next.js App Router                  | 15.x    |
| Language     | TypeScript (strict)                 | 5.7     |
| Styling      | Tailwind CSS v4 (CSS-first config)  | 4.x     |
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
│   └── globals.css            # Tailwind @import + @theme tokens + .container-giz
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

### Styling (Tailwind v4)

> This project uses **Tailwind CSS v4** with the CSS-first config in `src/app/globals.css`.
> There is **no `tailwind.config.ts`** — design tokens are declared with `@theme` inside the CSS file.

**Design tokens (use these classes, never raw hex values):**

| Class         | Value     | Usage                            |
| ------------- | --------- | -------------------------------- |
| `bg-dark`     | `#271E55` | Navbar, dark section backgrounds |
| `text-dark`   | `#271E55` | Body text                        |
| `bg-accent`   | `#C2F628` | Icons, highlights                 |
| `text-accent` | `#C2F628` | Accent text                       |
| `bg-button`   | `#B3DB3C` | Buttons only                      |
| `text-button` | `#B3DB3C` | Button text/border (outline)      |
| `font-sora`   | Sora      | Body text, buttons               |
| `font-archivo`| Archivo   | Headings, menu links             |

**Container:** Always use `<Container>` component from `@/components/layout/Container` instead of writing `max-w-*` manually for page sections.

**Tailwind v4 syntax differences (important):**
- Use `bg-linear-to-b` instead of `bg-gradient-to-b`
- Arbitrary values: prefer Tailwind scale equivalents (`min-h-75` over `min-h-[300px]`)
- No `tailwind.config.ts` — extend tokens in `globals.css` `@theme {}` block

### Typography
- Headings: `font-archivo` with `font-stretch: expanded` (Archivo variable font)
- Body / buttons: `font-sora`
- Both fonts are loaded via `next/font/google` in `src/app/layout.tsx` with CSS variables `--font-sora` and `--font-archivo`

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

## Image Placeholders

All images are placeholders via `https://placehold.co`. When replacing with real assets:
1. Place image files in `public/images/<page>/`
2. Update the `src` in the relevant component
3. `next/image` is already used everywhere — keep using it

---

## Adding Content

To add or edit text on any page:
1. Edit `src/data/content.ts` only
2. The component will automatically reflect the change
3. Do not add new text fields directly in component files

---

## Adding a New Page

1. Create `src/app/<route>/page.tsx`
2. Create section components in `src/components/<route>/`
3. Add content to `src/data/content.ts`
4. Add the link to `navLinks` in `src/data/content.ts`
5. Add `export const metadata` in the page file
6. If the page needs a footer, add `<Footer />` as the last JSX element

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

- ❌ Don't hardcode colors as hex — use `bg-dark`, `text-accent`, etc.
- ❌ Don't add `tailwind.config.ts` — config lives in `globals.css`
- ❌ Don't add `"use client"` to components that don't need it
- ❌ Don't put site copy directly in JSX — always use `src/data/content.ts`
- ❌ Don't access env vars outside `src/lib/` and `src/app/api/`
- ❌ Don't skip input validation / HTML sanitization in the API route
- ❌ Don't add `<Footer />` to `layout.tsx` — only to individual pages
