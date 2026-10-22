# Experiment 2 — Development of a Responsive Event Page using React Components and Tailwind CSS

**Student:** Sujal Gupta  
**Class / Roll No.:** D15A / 15  
**Date:** [to be supplied]

## Aim
To develop a responsive Event Page using reusable React components and Tailwind CSS responsive utility classes, demonstrating Flexbox, Grid, breakpoints, and responsive sizing.

## Problem Statement
Enhance the Event Page by converting the Event Card layout into a reusable React component and making the page responsive using Tailwind CSS utilities.

## Concepts demonstrated
React props and `useState`; reusable `EventCard`; `.map()` rendering; Flexbox alignment and direction; CSS Grid; `md` and `lg` breakpoints; responsive typography, spacing, colors, visibility, and widths; accessible frontend-only registration feedback.

## Files created/modified
- `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`
- `src/main.jsx`, `src/styles.css`
- `experiments/exp-02/CODE.md`, `THEORY.md`, `SCREENSHOTS.md`

## Implementation summary
The isolated lab page is available at `/lab/experiment-2/events` through Vite’s SPA fallback. Three distinct demo events are supplied from an array and rendered through one reusable `EventCard`. Register buttons transition to a disabled `Registered` state in component memory only; no backend persistence is claimed.

## Commands executed
```powershell
npm.cmd install
npm.cmd run build
npm.cmd run dev -- --host 127.0.0.1
```

## Testing results
`npm.cmd run build` passed after implementation. Browser viewport verification and real screenshot capture are recorded in `SCREENSHOTS.md` when completed.

## Known limitations
Events and registration state are demo data held in frontend memory. There is no authentication, API, or database registration endpoint because those are outside this experiment’s scope.

## Result
The responsive Event Page is implemented as a reusable React/Tailwind vertical slice within the Pathlog repository.
