# ClearBin 🗑️♻️ — Hackathon Reference Build

> **"Your waste still has value — let's find it a second life."**

**ClearBin** is a circular economy web application designed as a hackathon submission prototype. It connects households holding reusable waste (plastic bottles, glass jars, fabric remnants, e-waste, and batteries) directly with nearby artisans, upcyclers, NGOs, and community recyclers.

---

## 📌 Project Overview & Problem Statement

### The Problem
Urban households discard millions of tons of reusable materials into landfills every year. This occurs due to:
1. **Inconvenience & Friction**: Household members lack an easy platform to list small quantities of segregated materials.
2. **Lack of Transparency**: Consumers do not know where their segregated waste goes or if it actually avoids the dump.
3. **Informal Sector Disconnect**: Local upcyclers, micro-artisans, and informal waste pickers struggle to source clean, pre-sorted raw materials, raising their costs and limiting their livelihoods.

### The ClearBin Solution
ClearBin creates a closed-loop exchange:
- **Post**: Households quickly list available reusable items with a category and pickup location.
- **Match**: Micro-entrepreneurs, artisans, and green NGOs browse local listings or get matched based on material demand.
- **Transform**: Items are upcycled into new products (e.g. plastic bottles into tote bags, glass jars into candles), with transparent proof of impact and community reward points.

---

## ⚡ Tech Stack & Architecture

- **Frontend**: React 18 + Vite
- **Routing**: `react-router-dom` (v7)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Dark Mode aesthetics, glassmorphism, responsive navigation)
- **State & Data**: Lightweight React state with mock datasets in `src/data/mockData.js`
- **Backend Status**: **Frontend Demo Only** — Static/mock data for hackathon presentation and quick judge evaluation. No live backend database required.

---

## 📁 Directory Structure

```
Clearbin/
├── index.html              # HTML shell with Google Fonts & SEO meta tags
├── package.json            # Project manifest & dependencies
├── README.md               # Project documentation (this file)
├── src/
│   ├── main.jsx            # Application entry point
│   ├── App.jsx             # React Router navigation shell
│   ├── index.css           # Global design system, utility classes & components
│   ├── data/
│   │   └── mockData.js     # Mock datasets for matches, showcase items, & stats
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky top navbar with active routing & mobile drawer
│   │   ├── Footer.jsx      # Footer links & hackathon disclaimer note
│   │   ├── MatchCard.jsx   # Upcycler/NGO card component with pickup triggers
│   │   └── ShowcaseCard.jsx# Transformation story card with EcoPoints badges
│   └── pages/
│       ├── Home.jsx        # Landing page with hero section & 3-step visual
│       ├── PostWaste.jsx   # Waste posting form with animated mock matching state
│       ├── Matches.jsx     # Upcycler directory with material filter tabs
│       ├── Showcase.jsx    # Upcycling transformation gallery
│       └── About.jsx      # Problem statement & informal worker empowerment
```

---

## 🚀 Pages & Key Features

1. **Landing Page (`/`)**:
   - Hero headline: *"Your waste still has value — let's find it a second life"*
   - 3-Step visual workflow: **Post $\rightarrow$ Match $\rightarrow$ Transform**
   - Material preview grid & real-time impact metrics ticker.

2. **Post Waste Page (`/post`)**:
   - Photo upload dropzone simulation (toggleable placeholder preview).
   - Category dropdown (*Plastic, Glass, Fabric, E-waste, Batteries*).
   - Location input with mock GPS auto-detect.
   - Animated submit workflow showing *"Matching with nearby upcyclers..."* progress.

3. **Browse Matches Page (`/matches`)**:
   - Static mock list of 4 verified local upcyclers & NGOs.
   - Filter by material category.
   - Interactive *"Request Pickup"* dialog modal with confirmation state.

4. **Showcase Page (`/showcase`)**:
   - Gallery of before-and-after upcycling stories (e.g. 6 Plastic Bottles $\rightarrow$ 1 Tote Bag).
   - Prominent **"EcoPoints Earned"** badges and artisan credits.

5. **About Page (`/about`)**:
   - In-depth problem statement on household waste misallocation.
   - The ClearBin circular loop explanation.
   - Focus on empowering informal waste workers and local craftspeople.

---

## 🔧 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Run Commands

```bash
# Clone or navigate to directory
cd Clearbin

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open your browser at `http://localhost:5173` to explore the live demo.

### Build Verification

To verify that the application compiles without errors:

```bash
npm run build
```

---

## 📝 Hackathon Submission Note
*This codebase is built as a reference prototype for hackathon judging. All matches, transformation stories, and image placeholders run entirely in-browser without external API dependencies for fast and reliable demonstration.*
