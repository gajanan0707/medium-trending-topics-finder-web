# Medium Trending Topics Finder — Web Showcase & Simulator 🚀

> **The official web showcase, interactive simulator, and documentation hub for the Medium Trending Topics Finder Chrome Extension.**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Zero Telemetry](https://img.shields.io/badge/Privacy-100%25%20Local-success)](https://mediumradar.app/#privacy)
[![Manifest V3](https://img.shields.io/badge/Extension-Manifest%20V3-blue)](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3)

---

## 📌 Overview

**Medium Trending Topics Finder Web** is a fast, responsive, and tactile web platform built with **React** and **Vite**. It serves as the official landing page, live in-browser simulator, and architectural showcase for the **Medium Trending Topics Finder** Chrome extension.

The web app allows creators, content strategists, and publication editors to test and experience the core analytics engine directly in their browser before installing the extension. It features an interactive radar demo, real-time engagement score calculator, features bento grid, official Chrome Web Store privacy disclosures, and complete technical documentation.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [The 5× Engagement Velocity Formula](#-the-5-engagement-velocity-formula)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Help Center & Support Desk](#-help-center--support-desk-chrome-web-store-support-url)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Production Deployment](#-production-deployment)
- [SEO, AEO & LLM Readiness](#-seo-aeo--llm-readiness)
- [Chrome Extension Relationship](#-chrome-extension-relationship)
- [Browser Compatibility](#-browser-compatibility)
- [License & Disclaimer](#-license--disclaimer)

---

## ⚡ Key Features

### 1. 🎯 Interactive Radar Demo (`InteractiveRadarDemo.jsx`)
- **Simulated In-Page Overlay**: Experience how the extension's claymorphic analytics bar operates inside Medium tag pages (`medium.com/tag/*`).
- **Tag Switching & Custom Queries**: Seamlessly toggle between popular topics (`artificial-intelligence`, `programming`, `technology`, `python`, `writing`) or input any custom tag slug.
- **Dynamic Multi-Metric Sorting**: Re-rank stories on the fly by **Engagement Score**, **Most Claps**, or **Most Comments**.
- **Real-Time KPI Summaries**: Automatic calculations of total story count, aggregate claps, total comments, and peak engagement score.
- **1-Click CSV Export**: Generate and download structured spreadsheet reports containing Rank, Title, Claps, Comments, Engagement Score, Signal, and Story URLs directly from the client.

### 2. 📐 Mathematical Model & Live Calculator (`AlgorithmExplainer.jsx`)
- **Interactive Calculator**: Adjust slider or number inputs for claps and comments to observe live score changes and automated trend badge tier assignment.
- **Mathematical Transparency**: Clear rationale exposing why comment-weighting surfaces genuine reader resonance over superficial clapping.

### 3. 🍱 Features Bento Grid (`FeaturesBento.jsx`)
- Visual overview highlighting:
  - **Real-Time In-Page Analytics Overlay** (zero tab switching)
  - **Infinite Scroll Auto-Indexer** (powered by `MutationObserver`)
  - **1-Click CSV Data Export** (ready for Notion, Google Sheets, or Python)
  - **100% Local & Zero-Telemetry Privacy** (runs entirely in browser memory)

### 4. 🛡️ Privacy & Permissions Disclosures (`PrivacyPolicySection.jsx`)
- Comprehensive Chrome Web Store developer compliance documentation detailing:
  - Strict **zero-data-collection** guarantee (no PII, cookies, or remote logging).
  - Explicit justification for minimal Chrome permissions (`storage` and static `content_scripts`).
  - Zero external telemetry or tracking dependencies.

### 5. 🎨 Soft 3D Claymorphic Design System (`src/index.css`)
- Custom-crafted CSS design system without heavy framework overhead:
  - Multi-layered soft inner and outer shadows (`clay-card`, `btn-clay`).
  - Floating ambient 3D gradient spheres (`orb-3d`).
  - Tactile pastel signal badges (`badge-pill`, `badge-mint`, `badge-peach`, `badge-teal`).
  - Responsive typographic hierarchy powered by **Plus Jakarta Sans** and **JetBrains Mono**.

---

## 📐 The 5× Engagement Velocity Formula

Traditional Medium aggregators rank content purely by claps. However, claps require minimal effort (a reader can hold the clap button for up to 50 claps in seconds). In contrast, writing a thoughtful comment requires reading comprehension, critical thought, and user intent.

### Scoring Equation

$$\text{Engagement Score} = \text{Claps} + (\text{Responses} \times 5)$$

### Signal Tiers

| Signal Badge | Condition | Description |
| :--- | :--- | :--- |
| `💬 High Debate` | Responses $\ge 30$ | High community discourse, debate, controversy, or active discussion |
| `🔥 Viral Claps` | Claps $\ge 1{,}000$ | Broad platform distribution and wide viral reach |
| `⚡ Rising` | Score $\ge 200$ | Rapid organic momentum and rising audience curiosity |
| `✨ Active` | Score $< 200$ | Steady baseline reader momentum and interest |

---

## 🛠️ Tech Stack

- **Core Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react`
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla Modern CSS (CSS Variables, Flexbox/Grid, Claymorphism)
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *JetBrains Mono*)
- **Target Runtime**: Modern ECMAScript (ES2020+)

---

## 📂 Project Architecture

```
medium-trending-topics-finder-web/
├── index.html                   # HTML entry point with Schema.org JSON-LD & SEO meta
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite configuration (port 3000, React plugin)
├── vercel.json                  # SPA routing rules for static deployment
├── LICENSE                      # MIT Open Source License
├── public/
│   ├── icon16.png               # Favicon & extension icon (16x16)
│   ├── icon48.png               # App icon (48x48)
│   ├── icon128.png              # App icon (128x128)
│   ├── llms.txt                 # Structured documentation for AI/LLM search engines
│   ├── robots.txt               # Search engine crawler policies
│   └── sitemap.xml              # XML Sitemap for search indexing
└── src/
    ├── App.jsx                  # Root layout aggregating sections & support router
    ├── main.jsx                 # React DOM mount point
    ├── index.css                # Global styles, variables, and Claymorphism theme
    ├── components/
    │   ├── Navbar.jsx           # Sticky claymorphic navigation header with support link
    │   ├── Hero.jsx             # Hero section with CTA & trust indicators
    │   ├── InteractiveRadarDemo.jsx # Live in-browser tag simulator & CSV exporter
    │   ├── AlgorithmExplainer.jsx   # Formula breakdown & interactive calculator
    │   ├── FeaturesBento.jsx    # Bento grid showcasing core capabilities
    │   ├── PrivacyPolicySection.jsx # Compliance & permissions disclosures
    │   ├── FAQSection.jsx       # Expandable FAQ accordion
    │   ├── HelpCenter.jsx       # Dedicated Chrome Web Store Help & Support Center
    │   └── Footer.jsx           # Legal disclaimers, support email, and links
    └── data/
        ├── faqData.js           # Structured FAQ questions and answers
        └── mockStories.js       # Curated story datasets across multiple topics
```

### 6. 💬 Dedicated Help Center & Support Desk (`HelpCenter.jsx`)
- **Official Chrome Web Store Support URL**: Provides the required support destination for Google Chrome Web Store listing approval.
- **Direct Developer Email**: `mrcoder701@gmail.com` with guaranteed 24–48h response window.
- **Pre-formatted Ticket Generator**: In-browser composer allowing users to specify issue categories (Bug Report, Feature Request, Overlay Troubleshooting, Permissions & Privacy) and launch prefilled email drafts.
- **Self-Serve Knowledge Base**: Categorized step-by-step solutions for extension installation, toolbar pinning, infinite scroll scanning, CSV downloads, and permissions explanations.

---

## 💬 Help Center & Support Desk (Chrome Web Store Support URL)

This web application acts as the official **Support URL** registered with the **Google Chrome Web Store Developer Dashboard** for the **Medium Trending Topics Finder** extension.

### Support Credentials & Contact Details
- **Official Support URL**: `https://medium-trending-topics-finder.vercel.app/#support` (or `/support`)
- **Primary Support Email**: [`mrcoder701@gmail.com`](mailto:mrcoder701@gmail.com)
- **Response Time Guarantee**: Within 24–48 business hours
- **Developer**: Gajanan Patil
- **Compliance Status**: Verified against Chrome Web Store Developer Program Policies & Single Purpose Policy

### Supported Troubleshooting Topics
1. **Installation & Pinning**: How to install from Chrome Web Store and pin to the browser toolbar.
2. **Scanner & Overlay Diagnostics**: What to do if the overlay does not inject on `medium.com`, handling page refreshes, and ad-blocker whitelisting.
3. **Infinite Scroll Indexing**: Explains how `MutationObserver` captures dynamically loaded stories as the user scrolls down Medium tag pages.
4. **CSV Export Inquiries**: Guidance on downloading and importing structured story metrics into Google Sheets, Notion, or Excel.
5. **Permissions & Security Justification**: Clear documentation of `storage` permission and static `content_scripts` confirming 100% local, zero-telemetry execution.

---

## 💻 Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js**: `v18.0.0` or higher (LTS recommended)
- **Package Manager**: `npm` (bundled with Node), `pnpm`, or `yarn`
- **Modern Browser**: Chromium-based browser (Chrome, Edge, Brave), Firefox, or Safari

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/gajanan0707/medium-trending-topics-finder-web.git
cd medium-trending-topics-finder-web
```

### 2. Install Dependencies

Using `npm`:
```bash
npm install
```

Or using `pnpm`:
```bash
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The Vite dev server will spin up at:
```
  VITE v5.4.11  ready in ~200 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

The browser will open automatically. Any changes made to source files will reflect instantly via Hot Module Replacement (HMR).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server on port `3000` with auto-open. |
| `npm run build` | Compiles and bundles production-optimized static assets into the `dist/` directory. |
| `npm run preview` | Runs a local web server to preview the built `dist/` assets before deploying. |

---

## 🌐 Production Deployment

Since this project builds into a zero-backend static single-page application (SPA), it can be deployed on any modern static hosting provider.

### Option 1: Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the project into the [Vercel Dashboard](https://vercel.com/).
3. Vercel automatically detects Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Option 2: Netlify

1. Connect your repository in [Netlify](https://www.netlify.com/).
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Option 3: Cloudflare Pages

1. In the Cloudflare dashboard, navigate to **Compute (Workers) > Pages**.
2. Connect your repository.
3. Select the **Vite** build preset (`npm run build`, output: `dist`).
4. Click **Save and Deploy**.

### Option 4: Docker & Nginx

To containerize and serve with Nginx, use this lightweight multi-stage `Dockerfile`:

```dockerfile
# Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t medium-trending-web .
docker run -p 8080:80 medium-trending-web
```
Access at `http://localhost:8080`.

---

## 🔍 SEO, AEO & LLM Readiness

This project is optimized for both human search engines (SEO) and Artificial Intelligence / Answer Engine Optimization (AEO):

- **Structured Data (JSON-LD)**: Includes comprehensive schema definitions for `SoftwareApplication`, `WebSite`, and `FAQPage` embedded in [index.html](index.html).
- **Social Graph Sharing**: Fully configured OpenGraph (`og:*`) and Twitter Card (`twitter:*`) tags for previews.
- **LLM Indexing**: An [llms.txt](public/llms.txt) manifest adhering to the LLM context specification is provided in `/public/llms.txt` for AI crawlers, researchers, and agentic workflows.
- **Search Directives**: Dedicated [sitemap.xml](public/sitemap.xml) and [robots.txt](public/robots.txt) for web spiders.

---

## 🧩 Chrome Extension Relationship

This web application represents the companion portal for the **Medium Trending Topics Finder** browser extension.

### What the Extension Does:
- Injects directly into `medium.com/tag/*` pages and personal feeds.
- Intercepts live DOM nodes via `MutationObserver` to count claps, responses, and author metrics.
- Uses `chrome.storage.local` to cache historical scans locally with zero external network requests.

### What This Web App Provides:
- Interactive simulator allowing potential users to test the UI and logic with real Medium topic data.
- Transparency into the underlying mathematical formulas.
- Centralized privacy policy and compliance statements for Chrome Web Store verification.

---

## 🌐 Browser Compatibility

Tested and optimized across modern desktop and mobile browsers:

| Browser | Compatibility | Notes |
| :--- | :--- | :--- |
| **Google Chrome** | ✅ Full Support | Optimized for Chromium layout engine |
| **Brave** | ✅ Full Support | Tested with Shields active |
| **Microsoft Edge** | ✅ Full Support | Native Chromium support |
| **Arc** | ✅ Full Support | Verified responsive styling |
| **Mozilla Firefox**| ✅ Full Support | CSS backdrop filters & shadows compatible |
| **Apple Safari** | ✅ Full Support | WebKit compatible |

---

## 📄 License & Disclaimer

### License
This project is licensed under the [MIT License](LICENSE) — free for personal and commercial usage.

### Disclaimer
*Medium Trending Topics Finder is an independent, open-source research and analytics tool. It is not affiliated, associated, authorized, endorsed by, or in any way officially connected with **A Medium Corporation** (`medium.com`), or any of its subsidiaries or affiliates. All product and company names are trademarks™ or registered® trademarks of their respective holders.*
