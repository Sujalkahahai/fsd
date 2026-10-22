# Database Model — `pathlog_db`

**Source:** initial FSD planning report, section 9. MongoDB ObjectId `ref` fields are application-level references, not SQL-enforced foreign keys.

| Collection | Fields and constraints |
|---|---|
| `users` | `_id`, `name` required/trim, `email` required/unique/lowercase, `passwordHash` required, `role` enum learner/admin default learner, timestamps |
| `subjects` | `_id`, `userId` ref users required/indexed, `title` required/trim, `targetDate` optional, `why` optional max 250, `createdAt` |
| `topics` | `_id`, `subjectId` ref subjects required/indexed, `title` required/trim, `importance` enum 1/2/3 default 2, `revisionThresholdDays` default 14, `lastActivityAt`, `createdAt` |
| `resources` | `_id`, `topicId` ref topics required/indexed, `title` required/trim, `url` valid URL, `type` video/article/doc/course/other, `done` default false |
| `practicelogs` | `_id`, `topicId` ref topics required/indexed, `userId` ref users required, `correct` required boolean, `isRepeat` default false, `difficulty` easy/medium/hard, `createdAt` |
| `assessments` | `_id`, `topicId` ref topics required/indexed, `userId` ref users required, `score` 0–100, `noNotesUsed` default true, `createdAt` |
| `roadmaptemplates` | `_id`, `title` required, `description` required, `createdBy` ref users required, `topics` embedded array of topic/resource/default templates, `isPublished` default false |
| `studyrooms` | `_id`, `name` required, `hostId` ref users required, `activeUserIds` array of user ObjectIds |

## Relationships
- User 1:N Subjects → 1:N Topics → 1:N Resources / PracticeLogs / Assessments.
- User 1:N RoadmapTemplates (created by admins).
- Users N:M StudyRooms via `activeUserIds`.
- PracticeLog and Assessment also directly reference the user who performed them.

## Indexes in report
- `topics`: `{ subjectId: 1, lastActivityAt: -1 }`.
- `practicelogs`: `{ topicId: 1, createdAt: -1 }`.
- `assessments`: `{ topicId: 1, createdAt: -1 }`.

## Derived values (not persisted as arbitrary truths)
- Resource exposure = number done / number total.
- Recent accuracy = correct / total in last ~10 practice logs, with explicit insufficient-evidence handling.
- Evidence Status = documented deterministic assessment/practice rules.
- Revision due date = last meaningful practice/assessment activity + applicable threshold; 7 days for Limited/Needs attention, otherwise 14 by default.
- Priority tier and explanation = derived from overdue, evidence status and importance.

## Data integrity notes
- The report's `lastActivityAt` is defaulted to `Date.now`, but its prose says revision should depend on practice/assessment. Resolve how brand-new topics without evidence enter the queue before implementation; document in `DECISIONS.md`.
- The PDF describes `revisionThresholdDays` default 14 and a separate 7-day weak-evidence rule. Document precedence if users customize thresholds.
- Confidence 1–5 is a functional requirement but is **not included in the eight listed collection schemas**. Decide where it is stored before implementing the confidence feature.
- Account suspension is required but no suspension field is listed in the `users` schema. Add a documented schema extension when implementing admin moderation.
- Timer synchronization is required but the studyroom schema only explicitly lists membership. Document how timer state is stored/synchronized before implementing it.
- When deleting a subject/topic, define and test cleanup behavior for child documents.
