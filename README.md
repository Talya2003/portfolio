# Talya Kazayof Portfolio

Production-grade personal portfolio built with React, Vite, and Tailwind CSS.

## Overview

This repository contains Talya Kazayof's public portfolio website with:

- Bilingual UX (English/Hebrew) with RTL support
- Dark/light theme toggle with persistence
- Case-study project pages with structured engineering write-ups
- Recruiter-focused contact form and resume request flow
- AI Resume Q&A assistant (Hugging Face via secured proxy route)
- SEO metadata, Open Graph image, and custom favicon

## Live Architecture

- Frontend: React 18 + Vite 7
- Styling: Tailwind CSS + semantic design tokens
- Routing: React Router
- Motion: Framer Motion
- Icons: Lucide React
- Email delivery: EmailJS
- AI inference: Hugging Face Router through `/api/hf` proxy

## Key Features

- Hero section with animated technical background and profile image
- Projects section with category filter and dedicated `/project/:id` pages
- GitHub repositories section for public activity snapshot
- AI Resume Q&A as both full section and floating chat widget
- Contact form with optional recruiter mode fields
- Resume request modal with anti-bot honeypot field
- Smooth hash navigation (`/#projects`, `/#contact`)

## Tech Stack

- `react`, `react-dom`
- `react-router-dom`
- `tailwindcss`, `postcss`, `autoprefixer`, `tailwindcss-animate`
- `framer-motion`
- `lucide-react`
- `@emailjs/browser`
- `vite`, `@vitejs/plugin-react`

## Project Structure

```text
.
|- api/
|  |- hf.js                     # Serverless HF proxy (Vercel)
|- public/
|  |- favicon.svg
|  |- og-image.svg
|- src/
|  |- components/
|  |- context/
|  |- data/
|  |  |- portfolioData.js       # Main content source (EN/HE)
|  |- pages/
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- index.html
|- vite.config.js
|- WIKI.md
|- TERMS_OF_USE.md
|- LICENSE
`- README.md
```

## Documentation

- `README.md`: setup and deployment overview
- `WIKI.md`: detailed operational and maintenance guide
- `TERMS_OF_USE.md`: website usage restrictions
- `LICENSE`: copyright and no-reuse terms

## Content Management

Primary content is managed from `src/data/portfolioData.js`.

Update there for:

- Site identity (`siteConfig`)
- English/Hebrew labels (`content.en`, `content.he`)
- Projects, experience, principles, tech stack
- Contact/resume/AI copy and microcopy

## Local Development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Environment Variables

Create `.env` in project root:

```env
HF_TOKEN=your_huggingface_token
```

Notes:

- `HF_TOKEN` is required for AI chat through `/api/hf`
- In local development, Vite proxy injects this token server-side
- In production (Vercel), set the same `HF_TOKEN` in project Environment Variables

## EmailJS Setup

Current implementation expects EmailJS IDs in code:

- Contact form: `src/components/ContactSection.jsx`
- Resume request modal: `src/components/ResumeRequestModal.jsx`

Required EmailJS assets:

- Service ID
- Contact template ID
- Resume template ID
- Public key

## Deployment (Vercel)

1. Push repository to GitHub
2. Import project into Vercel
3. Add environment variable `HF_TOKEN`
4. Deploy

Vercel serverless route used for AI calls: `api/hf.js`

## SEO Assets

Managed in:

- `index.html` (meta, OG, Twitter card)
- `public/og-image.svg`
- `public/favicon.svg`

## Troubleshooting

- `403` from `/api/hf`: token lacks Inference Provider permission
- `404` from `/api/hf`: route not deployed or incorrect path
- `410` from old HF endpoint: ensure router endpoint is used
- Contact/resume email not delivered: validate EmailJS service/template IDs

## Quality Notes

- Theme and language are persisted in `localStorage`
- Color usage is token-based (`bg-background`, `text-foreground`, etc.)
- App layout supports desktop and mobile

## License

This project is proprietary and protected by copyright.

- No copying, redistribution, resale, or reuse is allowed without prior written permission.
- See `LICENSE` and `TERMS_OF_USE.md` for full terms.
