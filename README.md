# Prakash Ramaswamy - Portfolio

Personal portfolio website for Prakash Ramaswamy, an Automation Engineer focused on Python, Robot Framework, Playwright, API testing, RPA, and AI-powered automation.

## Features

- Responsive portfolio layout with light and dark themes
- Professional experience and skills sections
- Project filtering for professional and development work
- Confidentiality notices for healthcare-related work
- Native, theme-aware resume preview
- Resume download and print support
- Learning and certificate showcase
- Contact form with Gmail, Outlook, Yahoo Mail, and default mail application options
- SEO metadata, sitemap, robots file, and Schema.org structured data

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Vite

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The site will be available at the local URL shown by Vite.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
.
├── public/
│   ├── certificates/
│   ├── favicon.png
│   ├── favicon.svg
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/achievements.js
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── README.md
```

## Updating content

- Update projects, skills, and page interactions in `src/main.js`.
- Update professional highlights and learning certificates in `src/data/achievements.js`.
- Replace `public/resume.pdf` when publishing a new resume.
- Update `public/sitemap.xml` if the public site URL or page structure changes.

Professional healthcare work is intentionally generalized to protect patient, client, and employer confidentiality. Sensitive or proprietary information should not be added to this repository.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to a static hosting provider such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
