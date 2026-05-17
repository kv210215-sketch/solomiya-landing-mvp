# README - AI Workflow

## Before Starting

Read these files first:

- `ai/ai-session-start.md`
- `docs/PROJECT-GOVERNANCE.md`
- `docs/SAFE-WORKFLOW.md`
- `docs/DO-NOT-TOUCH.md`
- `docs/SOURCE-OF-TRUTH-ANALYSIS.md`
- `project-rules.md`

## Claude Workflow

- Open only `D:\solomiya-landing-mvp`.
- Treat `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy` as read-only reference.
- Do not rebuild from scratch.
- Make small, reviewable changes.
- For audit/governance tasks, write docs instead of touching production files.
- Ask for explicit approval before changing forms, Netlify logic, API/functions, or `index.html`.

## Codex Workflow

- Work from `D:\solomiya-landing-mvp`.
- Inspect files before editing.
- Use narrow patches.
- Do not run deploy, `git push`, npm install, migrations, or destructive commands without permission.
- Update `CHANGELOG.md` after meaningful changes.
- Verify docs and file existence after workspace setup changes.

## Avoiding Chaos Engineering

- One source-of-truth folder.
- One task scope at a time.
- No automatic merge from Downloads.
- No cleanup before manual verification.
- No production edits during discovery, audit, or governance tasks.
- No deploy changes mixed with frontend/content changes.

## Documenting Changes

For important changes, record:

- date;
- change;
- agent;
- files;
- risk;
- verification.

Use `CHANGELOG.md` for workspace-level history and `docs` for detailed reports.

## Files Not To Touch Without Permission

- `index.html`
- `netlify.toml`
- `_headers`
- `_redirects`
- `api`
- `functions`
- `netlify/functions`
- forms and hidden fields
- `.env`, secrets, keys, tokens
- deploy/export copy
- old backups

## Git Workflow

- Check `git status` before preparing a snapshot.
- Verify `.gitignore` before staging.
- Stage intentionally.
- Commit only after review.
- Never run `git push` without explicit permission.

