# Changelog

All notable changes to Suryansh Agrawal's engineering portfolio will be documented in this file.

---

## [2.0.0] - 2026-07-17

### Added
- **React Redesign**: Rebuilt the entire interface from scratch using **React (v19)**, **TypeScript**, **Vite (v7)**, and **Tailwind CSS (v4)**.
- **Micro-Animations**: Integrated **Framer Motion** for premium viewport-triggered stagger reveals, smooth cubic-bezier transitions, and interactive floating orbs.
- **Projects Grid**: Added dynamic tab filtering (All, MERN, AI/ML, Full Stack, Backend) featuring 6 priority projects:
  - **Smart Campus Reporting System** (MERN, Leaflet.js maps)
  - **CustomerPulse AI CRM** (MERN, Python, sentiment analysis ML engine)
  - **MediBill AI Price Analyzer** (Python, FastAPI, Tesseract OCR, PostgreSQL)
  - **IPL Score Predictor** (Python, Ridge Regression)
  - **Utensify E-Commerce** (Vanilla JS state sync)
  - **Movie Booking System** (Atomic SQL seat reservations)
- **9 Verified Credentials**: Created a balanced certifications card grid containing verified public Google Drive certificate links.
- **AI-Compiled Resume**: Served a custom generated PDF resume locally at `/suryanshresume.pdf` reflecting current skills, B.Tech CSE details (CGPA: 8.99/10), internships, and projects.
- **Navigation Scroll-Spy**: Added smooth scrolling page traversal using `react-scroll`.

### Changed
- **Migration & Cleanup**: Safely deleted legacy static files (`index.html`, `style.css`, `script.js`, `assets/`) in the repository root directory.
- **Configuration Root**: Moved all React application files into the `client/` workspace and configured Vercel's **Root Directory** settings to build out of `/client`.
- **Bio & Academics**: Mapped CGPA to `8.99/10` and adjusted academic entries to reflect placement readiness.

---

## [1.0.0] - 2024-07-20

### Added
- **Initial Release**: Single-page static profile built with HTML5, CSS3, and Vanilla JavaScript.
- Basic sections for hero greeting, education list, project links, and mail contact form.
