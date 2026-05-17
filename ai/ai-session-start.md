# AI Session Start - Solomiya Energy Landing MVP

Before doing any work, every Claude/Codex session must read:

- `docs/PROJECT-GOVERNANCE.md`
- `docs/SAFE-WORKFLOW.md`
- `docs/DO-NOT-TOUCH.md`
- `docs/SOURCE-OF-TRUTH-ANALYSIS.md`

## Core Rules

- Work only in `D:\solomiya-landing-mvp`.
- Never edit deploy/export copy: `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`.
- Never rebuild the project from scratch.
- Preserve production stability.
- Make small PR-style changes.
- Keep production code, forms, Netlify logic, and routing stable unless a task explicitly authorizes changes.
- Update docs after important changes.
- Test forms after any form, API, or function change.
- Treat mobile-first layout as a production requirement.
- Keep SEO-safe changes: preserve canonical, metadata, sitemap, robots, and structured content unless explicitly tasked.
- Never put secrets in git.
- Do not run deploy, `git push`, npm migration, or package installation without explicit permission.

## Working Style

- Read first, edit second.
- Keep scope small.
- Prefer documentation over code changes for governance tasks.
- Record important decisions in `CHANGELOG.md` or `docs`.
- If production risk is unclear, stop and ask for explicit approval.

