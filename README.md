# Pathlog

**A Learning Progress and Evidence Tracker** — a full-stack FSD laboratory project.

Pathlog helps learners distinguish **resource exposure** (what they watched/read) from **learning evidence** (what they practiced or assessed). It explains what needs attention, when revision is due, and why a topic is recommended next. It does not pretend that completing a checklist proves mastery.

**Core loop:** Learn → Practice → Assess → Review evidence → Revise → Reassess.

## Planned technology
React + Vite + Tailwind CSS; Node.js + Express; MongoDB Atlas + Mongoose; JWT + bcrypt; Zod; Socket.IO; Jest + Supertest; Docker Compose; GitHub Actions; OpenAPI. Deployment targets: Vercel frontend, Render backend, MongoDB Atlas.

## Project status
Planning/design is documented as **Experiment 0**. Implementation milestones must be updated as actual lab work is completed. Do not mark features as built based on this README.

## For developers and AI agents
Start with [`AGENTS.md`](AGENTS.md), then [`docs/ROADMAP.md`](docs/ROADMAP.md). Project specification: [`docs/PRODUCT.md`](docs/PRODUCT.md). Database: [`docs/DATA_MODEL.md`](docs/DATA_MODEL.md). Lab evidence: [`docs/LAB_WORKFLOW.md`](docs/LAB_WORKFLOW.md).

## Local setup
The commands below apply **after** the `client/` and `server/` packages have been initialized:

```powershell
npm --prefix client install
npm --prefix server install
npm --prefix client run dev
# In a second terminal:
npm --prefix server run dev
```

Do not assume these scripts or folders exist until the first implementation experiment creates them. See `docs/ARCHITECTURE.md` for the intended structure.

## Lab documentation
Each experiment has its own `experiments/exp-XX/` folder for requirements, implementation notes, screenshots, test evidence, and final report. Reports should reflect what actually ran.
