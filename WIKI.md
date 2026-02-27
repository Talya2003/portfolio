# Portfolio Wiki

Operational guide for maintaining and extending the portfolio.

## 1) Product Scope

This project is a recruiter-facing engineering portfolio focused on:

- Professional profile and project case studies
- Public GitHub activity visibility
- AI-powered resume Q&A
- Structured contact and resume-request workflows

## 2) Core Routes

- `/` Home page (hero + sections)
- `/about` About page
- `/project/:id` Project case-study page
- `*` Not Found

Hash anchors:

- `/#projects`
- `/#contact`

## 3) Source of Truth

Main content file:

- `src/data/portfolioData.js`

Update this file for:

- Profile details
- Navigation labels
- Section titles/copy
- Projects and case-study content
- Experience timeline
- Contact/resume/AI strings

## 4) Localization Model

Language context:

- `src/context/LanguageContext.jsx`

Behavior:

- Persists selected language in `localStorage` (`lang`)
- Sets `<html lang>` to `en` or `he`
- Sets `<html dir>` to `ltr` or `rtl`

Implementation notes:

- Use `content[lang] || content.en`
- Keep `en` and `he` key structures aligned

## 5) Theming Model

Theme behavior lives in navbar and CSS tokens:

- Theme class toggles on `<html>` using `dark`
- Persists in `localStorage` (`theme`)

Design tokens are defined in:

- `src/index.css`
- `tailwind.config.js`

Rule:

- Prefer semantic token classes only (`bg-card`, `text-muted-foreground`, etc.)

## 6) AI Resume Q&A

Primary component:

- `src/components/AiResumeQaSection.jsx`

Flow:

1. Build prompt from portfolio content.
2. Send request to `/api/hf`.
3. Proxy forwards to Hugging Face Router.
4. Render response in chat UI.

Local development proxy:

- `vite.config.js`

Production serverless route:

- `api/hf.js`

Required env:

- `HF_TOKEN`

Current model:

- `deepseek-ai/DeepSeek-R1:fastest`

Chat UX capabilities:

- Floating launcher
- Typewriter reveal effect
- Auto scroll
- Copy assistant answers
- Clear chat
- Enter to send, Shift+Enter for newline
- Hebrew input stripped when app language is English

## 7) Contact and Resume Workflows

### Contact form

File:

- `src/components/ContactSection.jsx`

Behavior:

- Standard contact fields
- Optional recruiter mode fields
- Sends via EmailJS

### Resume request modal

File:

- `src/components/ResumeRequestModal.jsx`

Behavior:

- Gated resume request fields (name, company, role, LinkedIn, reason)
- Hidden honeypot field (`website`) for spam prevention
- Sends via EmailJS

EmailJS dependencies:

- Service ID
- Contact template ID
- Resume template ID
- Public key

## 8) Project and GitHub Sections

Projects:

- `src/components/ProjectsSection.jsx`
- `src/components/ProjectCard.jsx`
- `src/pages/CaseStudyPage.jsx`

GitHub activity:

- `src/components/GitHubReposSection.jsx`

Recommendation:

- Keep project IDs stable after publishing links to `/project/:id`

## 9) Deployment Playbook (Vercel)

1. Push latest `main` branch.
2. Confirm Vercel project points to correct repository and branch.
3. Set environment variables:
   - `HF_TOKEN`
4. Deploy.
5. Validate:
   - Home route loads
   - `/about` and `/project/:id` routes
   - AI chat request succeeds
   - Contact/resume submissions succeed

## 10) SEO and Sharing

SEO files:

- `index.html`
- `public/og-image.svg`
- `public/favicon.svg`

Update when profile branding changes:

- `<title>`
- meta description
- OG title/description/image
- Twitter card metadata

## 11) Release Checklist

- Build passes: `npm run build`
- No console errors on initial load
- Language switch EN/HE works and persists
- Theme toggle works in both modes
- AI chat can send and receive response
- EmailJS contact template delivers expected fields
- EmailJS resume template delivers expected fields
- Mobile layout sanity check (hero, nav, chat widget)

## 12) Common Failure Modes

- `403` from HF: token missing permission for Inference Providers.
- `404` from `/api/hf`: missing serverless route in deployment.
- `Failed to fetch` in browser: CORS bypass not active (must call local proxy, not HF directly).
- EmailJS send errors: mismatched service/template/public key.

## 13) Suggested Next Technical Improvements

- Move EmailJS IDs/public key to environment variables.
- Add schema validation for `portfolioData.js`.
- Add unit tests for `LanguageContext` and route-level smoke tests.
- Add CI checks for build and lint.
- Add rate limiting and abuse controls for AI endpoint.
