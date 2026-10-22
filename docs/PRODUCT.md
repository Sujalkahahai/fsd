# Product Requirements — Pathlog

**Basis:** the supplied initial FSD planning PDF, *Web Application Design and Planning*, dated 06/08/2026. This is a requirements baseline, not evidence of completed implementation.

## Problem and users
Checklist-style trackers confuse viewing resources with actual understanding. Pathlog records exposure and performance evidence separately and offers a transparent revision queue and next-action list.

- **Learner:** manages subjects/topics/resources, logs practice and assessments, self-rates confidence, sees evidence and revision, joins study rooms, clones published templates.
- **Admin:** all learner permissions, plus template publication and account suspension.

## Modules / acceptance criteria
1. **Authentication:** register/login, hashed passwords, JWT sessions, protected routes, learner/admin RBAC, suspended accounts denied access.
2. **Learning structure:** CRUD subjects (optional target date and why note) and topics (importance 1–3, revision threshold).
3. **Resources:** CRUD topic links (title, URL, type), done toggle; display raw exposure fraction only.
4. **Practice:** one-action correct/incorrect log; optional difficulty; optional repeat flag; last approximately 10 attempts used for recent accuracy.
5. **Assessments:** score 0–100, date, self-reported no-notes-used flag.
6. **Evidence & confidence:** rule-based Strong / Moderate / Limited / Needs attention status, reason text, independent confidence 1–5, mismatch flagged as “worth a second look” (not diagnosis).
7. **Revision:** default due after 14 days without practice/assessment, shortened to 7 for Limited / Needs attention; resource toggles do not reset clock.
8. **Next action:** tiered sorting by overdue state, evidence weakness and importance; show plain-language reasons. No fabricated weighted score.
9. **Templates:** admins create/publish/unpublish curated learning paths; learners browse and clone independent copies.
10. **Study room:** create/join room; Socket.IO presence, shared session timer, activity feed when a participant logs practice. Optional secondary feature.
11. **Administration:** admin-only user listing/suspension and template management.

## Views
| View | Purpose / primary content |
|---|---|
| Login / Register | Auth forms, validation and error states |
| Dashboard | Top next actions with reasons, due summary, mismatch (if any), upcoming target-date subjects |
| Subjects | Subject list, target dates, why notes, create/edit/delete |
| Subject Detail | Topics, exposure fractions, evidence chips, topic editing |
| Topic Detail | Resource toggles, practice, assessments, confidence, evidence status, revision and next action |
| Revision Queue | Due topics, sorted by overdue duration, explanatory reasons; empty state |
| Study Room | Presence, synchronized timer, live practice activity |
| Templates | Browse and clone published learning paths |
| Admin Panel | Suspensions and template management; restricted access |
| Profile | Profile editing and logout |

## Rules that must survive implementation
- No claim of objective mastery; status reflects *available logged evidence*.
- Insufficient evidence must not be presented as strong evidence.
- Confidence is self-report, never secretly incorporated as proof of performance.
- Resource exposure never counts as practice or assessment.
- Avoid vanity dashboard metrics and unnecessary gamification.

## Explicitly unresolved in the planning report
The report does **not** specify exact numeric thresholds for all four evidence statuses, precise confidence mismatch conditions, tie-breaking within priority tiers, assessment scoring provenance, or full REST endpoint contracts. Decide these before implementing the engines, document them in `docs/DECISIONS.md`, and test boundary cases. Do not invent that the faculty report defined these values.
