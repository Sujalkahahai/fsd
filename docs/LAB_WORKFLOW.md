# FSD Experiment Documentation Workflow

Pathlog is built cumulatively: every lab experiment should leave the repository runnable, with a separate report and genuine screenshots.

## Folder convention
```text
experiments/
  exp-00/README.md
  exp-01/
    README.md
    screenshots/
      01-home.png
      02-feature.png
      03-validation.png
    report.docx        # only when actually generated
    report.pdf         # only when actually generated
  _template/README.md
```

## Per-experiment report sections
1. Experiment number and exact faculty title.
2. Student/class/roll/date only as provided; do not guess.
3. Aim and problem statement (faculty wording, when available).
4. Tools/technologies used **in this experiment**.
5. Theory questions and answers, if assigned.
6. Implementation procedure and exact commands.
7. Code: relevant paths and key snippets, not an unmaintainable dump of all dependencies.
8. Screenshots with captions and actual paths.
9. Test cases: input/action, expected result, observed result.
10. Result, conclusion, known limitations and commit hash.

## Screenshot protocol
- Start the real app; wait for all requests to finish.
- Capture the relevant route at a known viewport; keep address bar out unless faculty requires it.
- Include screenshots of normal behavior plus validation/empty/error states where applicable.
- Never generate a simulated UI image and call it a screenshot of a running application.
- Avoid personal information, secrets and tokens in screenshots.
- Use names like `01-dashboard-empty.png`, `02-topic-practice-saved.png`.
- In the report, add a caption explaining what the screenshot demonstrates.

## Experiment completion checklist
- [ ] Requirements received and transcribed faithfully
- [ ] Code implemented and build verified
- [ ] Manual behavior tested
- [ ] Screenshots captured from actual app
- [ ] Report drafted with correct metadata
- [ ] Report reviewed against faculty format
- [ ] Git commit recorded

## Do not do
- Do not invent later experiments or faculty-provided content.
- Do not backdate screenshots or misrepresent incomplete backend as functional.
- Do not copy the EventHub demo's product requirements into Pathlog.
