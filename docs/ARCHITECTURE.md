# Technical Architecture

## Stack specified in the initial planning report
- Frontend: React (Vite), JavaScript, Tailwind CSS, React Context (auth and sockets).
- Backend: Node.js, Express.js; REST API.
- Database: MongoDB Atlas with Mongoose.
- Auth: JWT, bcrypt password hashing, RBAC.
- Validation: Zod at API boundary plus Mongoose validation.
- Realtime: Socket.IO.
- Testing: Jest, Supertest, Postman collection.
- Delivery: Docker Compose, GitHub Actions, Swagger/OpenAPI; Vercel + Render + Atlas.

## Proposed repository structure (implementation convention; not mandated by PDF)
```text
pathlog/
  AGENTS.md
  README.md
  docs/
  experiments/
    exp-00/
    exp-01/
  client/
    public/
    src/
      components/
      pages/
      context/
      hooks/
      services/
      utils/
  server/
    config/
    controllers/
    middleware/
    models/
    routes/
    services/
    sockets/
    utils/
  tests/
  .github/workflows/
  .env.example
  .gitignore
```
Create folders only when needed by an experiment; do not scaffold dozens of empty files.

## Boundaries
Browser → React UI → HTTP client → Express routes → controllers → services → Mongoose models → MongoDB.

- Routes: route declarations and middleware only.
- Controllers: parse requests, call services, format responses.
- Services: ownership checks, evidence/revision/priority rules, transaction/business workflows.
- Models: schema, indexes, constraints; do not embed UI logic.
- Socket handlers: authenticated room membership, timer and activity events; validate authorization.
- Frontend: display server-authoritative state; do not rely on frontend-only authorization or evidence calculation.

## API conventions (proposed, subject to experiment requirements)
- `/api/auth`, `/api/subjects`, `/api/topics`, `/api/resources`, `/api/practice`, `/api/assessments`, `/api/revision`, `/api/templates`, `/api/study-rooms`, `/api/admin`.
- JSON success `{ "success": true, "data": ... }`; errors `{ "success": false, "message": "..." }`.
- Use meaningful HTTP status codes, centralized errors, request validation, and pagination on list endpoints.
- Never return password hashes or internal secrets.

## Security and reliability
- Validate every input; enforce ownership by tracing topic → subject → user where needed.
- Reject access to other users' data; protect all admin mutations on server.
- JWT secret, MongoDB URI and deployment keys only in ignored environment variables.
- Never permit client self-assignment of admin role.
- Prevent duplicate template clone writes and inconsistent ownership relationships.
- Persist data in MongoDB, not only in React local state, for completed full-stack features.
- Include explicit disconnected/reconnect states in realtime UI.
