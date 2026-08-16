# PAIDEIA

Static multilingual website for **PAIDEIA**, built with **React + TypeScript + Vite + Tailwind CSS v4** and prepared for deployment to **GitHub Pages** at `/paideia/`.

## Concept

PAIDEIA is presented as a rural learning community rooted in small towns: learning by doing, recovering practical knowledge, contributing to territory, and transmitting wisdom across generations. The site is intentionally editorial, calm, and spacious.

## Features

- Single-page architecture with anchor navigation
- Four local languages: **Catalan**, **Spanish**, **Basque**, and **Galician**
- Language context with localStorage persistence
- Mobile-first responsive layout
- Accessible semantic structure and keyboard-friendly navigation
- Subtle scroll reveal and hero parallax that respect `prefers-reduced-motion`
- SEO metadata, Open Graph tags, `robots.txt`, and `sitemap.xml`
- GitHub Pages deployment workflow

## Project structure

```text
src/
  components/        Reusable UI sections and helpers
  content/           Typed multilingual content
  hooks/             Language context
  App.tsx            Page assembly
  main.tsx           React entry point
  index.css          Tailwind theme tokens
public/
  robots.txt
  sitemap.xml
.github/workflows/
  deploy.yml
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The Vite base path is already configured for GitHub Pages:

```ts
base: '/paideia/'
```

## Content management

All website copy lives locally in:

- `src/content/ca.ts`
- `src/content/es.ts`
- `src/content/eu.ts`
- `src/content/gl.ts`

The shared TypeScript schema is defined in `src/content/index.ts`.

## Deployment

The workflow in `.github/workflows/deploy.yml` deploys the generated `dist/` folder to GitHub Pages on every push to `main`.

## Notes

- The contact form sends submissions through a form delivery service configured in the client code.
- Fonts are loaded from Google Fonts (`Playfair Display` and `Inter`).
