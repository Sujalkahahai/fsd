# Pathlog — Agent Instructions

Read this file before editing anything. This repository is **Pathlog**, not EventHub.

## Source of truth
1. `docs/PRODUCT.md` — what to build and what not to build.
2. `docs/ARCHITECTURE.md` — stack, boundaries, folders and implementation rules.
3. `docs/DATA_MODEL.md` — MongoDB collections and ownership.
4. `docs/DESIGN.md` — UI behavior and visual direction.
5. `docs/ROADMAP.md` — incremental FSD lab delivery.
6. `docs/LAB_WORKFLOW.md` — experiment evidence and reports.
7. `docs/DECISIONS.md` — decisions, assumptions and unresolved questions.

The initial planning report is `experiments/exp-00/README.md`; keep the original faculty PDF separately in that folder when available. Later experiment requirements must be supplied by the student; **do not invent faculty aims, dates, questions, or expected outputs**.

## Mandatory workflow
- Inspect existing files and git status before edits; never assume a blank repo.
- Identify the current experiment, its acceptance criteria, and the smallest vertical slice to implement.
- Explain the files you intend to change, then implement, test and document them.
- Do not implement future-experiment features unless they are dependencies and explicitly agreed.
- Maintain `docs/ROADMAP.md` and the relevant `experiments/exp-XX/README.md` with actual progress.
- Provide exact commands for Windows PowerShell and a manual test checklist.
- For screenshots, capture the **real running application**, not fabricated mockups. Record route, state, date, and screenshot file path. Never claim an untested feature works.
- Keep documentation and code synchronized. If the requirements conflict, record the conflict in `docs/DECISIONS.md` and ask rather than silently choose.
- Never overwrite files or delete working code to create placeholder files. Do not commit `.env`, credentials, tokens, or personal data.

## Product invariants
- **Evidence before confidence.** Resource completion measures exposure, not competence.
- Show resource exposure as `done/total`, never as a mastery percentage.
- Evidence Status is **Strong / Moderate / Limited / Needs attention** and must show an understandable reason.
- Self-rated confidence (1–5) is separate from computed evidence status.
- Revision clock resets only after practice or assessment, not resource viewing/completion.
- Priorities are tiered and explainable, not arbitrary numerical scores.
- No XP, streaks, badges, leaderboards, vanity metrics, fake AI predictions, or unsupported mastery claims.
- Every user-owned record is access-controlled on the server. Admin actions are server-authorized.
- Use loading, error, empty, success, and accessible interaction states.

## Definition of done for any feature
- Implementation matches the experiment and project requirements.
- No broken imports or placeholder interactions disguised as working features.
- Appropriate automated/manual tests pass; report commands and results truthfully.
- Responsive layout and keyboard usability checked.
- API validation and authorization added when backend endpoints are involved.
- Relevant docs updated; actual screenshots captured and referenced for the lab report.
