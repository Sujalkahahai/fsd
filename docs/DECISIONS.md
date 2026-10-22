# Decisions and Open Questions

Record choices here before agents introduce new product behavior. Each entry should have date, context, decision, rationale, and affected files.

## Confirmed by initial planning PDF
- Product is Pathlog, with Learner and Admin roles.
- Exposure and evidence are separate signals.
- Recent practice accuracy considers approximately the latest 10 attempts.
- Revision baseline is 14 days, reduced to 7 days for weak evidence.
- Priority is tiered and explainable, not weighted by invented scores.
- Stack is React/Vite/Tailwind, Express/Mongoose/MongoDB, JWT/bcrypt, Socket.IO.

## Open decisions (do not silently assume faculty-defined answers)
- [ ] Exact Strong/Moderate/Limited/Needs attention evidence thresholds and insufficient-data handling.
- [ ] Confidence 1–5 persistence field and mismatch rule.
- [ ] Interaction between custom `revisionThresholdDays` and the weak-evidence 7-day override.
- [ ] Revision behavior for topics with zero practice/assessment entries.
- [ ] Priority tier ordering and tie-breaks.
- [ ] `users` suspension fields and existing JWT invalidation strategy.
- [ ] Study-room timer persistence, time authority, reconnection behavior.
- [ ] Template embedded topic/resource shape and clone consistency.
- [ ] Exact routes/API contracts, tests and deployment environments.
- [ ] Faculty instructions and due dates for future experiments.

## Decision template
### YYYY-MM-DD — Short title
**Context:** ...
**Decision:** ...
**Why:** ...
**Affected files/tests:** ...
