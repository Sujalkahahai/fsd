# UI / UX Guide

## Basis
The planning PDF includes Stitch wireframes/designs (pages 7–10) for registration, dashboard/subject workflows, topic evidence, revision, templates and study room. Use those images as **references**, not a claim that pixel-perfect assets or editable design source are available.

## Character
Calm, academic, technical and decision-oriented. Strong information hierarchy and high readability. Favor deep ink/navy, neutral surfaces, restrained teal accents, and semantic status colors. Avoid generic flashy AI dashboards, purple gradient overload, glassmorphism, random decoration, and giant vanity metrics.

## Navigation
Login/Register → Dashboard → Subjects → Subject Detail → Topic Detail; top navigation to Revision Queue, Study Room, Templates and Profile. Admin-only link to Admin Panel.

## Primary screens
- Dashboard: next action + reason first; due summary; mismatch only if present; target-date subjects.
- Subjects: compact subject list/cards; optional target date/why; clear create flow.
- Subject detail: topic list, exposure `x/y`, evidence status with text, next action.
- Topic detail: resource toggles, one-click practice logging, assessment, confidence, evidence reason, revision state.
- Revision: sorted due list with overdue duration and explicit rationale.
- Templates: inspect before cloning; clarify clone creates an independent copy.
- Study Room: clear connection state, participants, shared timer and activity feed.

## Interaction rules
- Status always uses text and accessible cues, not color alone.
- Include empty, loading, error, success and disconnected states.
- Mobile layouts must not require horizontal scrolling for primary actions.
- Keyboard focus visible; labels attached to form inputs; avoid inaccessible icon-only actions.
- Do not show fake progress bars, fake charts, streaks, XP or mastery percentages.
- Distinguish resource completion, logged practice, assessment and self-rated confidence visually and in wording.

## Screenshots
Use actual app screenshots from the running build at a reproducible viewport. Prefer representative empty, filled, validation and success states; no fabricated data represented as real user data. Store images in the corresponding experiment's `screenshots/` folder.
