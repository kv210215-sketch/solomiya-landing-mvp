# Project Rules - Solomiya Energy Landing MVP

## Source Of Truth

Official source-of-truth path:

`D:\solomiya-landing-mvp`

All AI agents, Claude Code, Codex, VS Code, Cursor, and Netlify workflow review must use this folder as the project root.

## Forbidden Folders

Do not edit, move, delete, or use as source:

- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`
- `D:\solomiya-landing-mvp\backup`
- `D:\solomiya-landing-mvp\backups\private`
- any secrets or credential folders

Deploy/export copy is read-only reference only.

## Production Safety Rules

- Do not change `index.html` unless explicitly authorized.
- Do not change forms unless explicitly authorized.
- Do not change `netlify.toml`, `_headers`, redirects, API routes, or Netlify settings unless explicitly authorized.
- Do not merge deploy/export copy into source automatically.
- Do not delete backups.
- Do not push to GitHub without explicit permission.
- Do not deploy without explicit permission.

## Coding Rules

- Make small PR-style changes.
- Follow existing project structure.
- Avoid broad rewrites.
- Avoid frontend refactors unless explicitly requested.
- Preserve user-facing content unless explicitly tasked.
- Keep changes easy to review.
- Add comments only when they clarify non-obvious behavior.

## AI Agent Workflow

- Start by reading:
  - `ai/ai-session-start.md`
  - `docs/PROJECT-GOVERNANCE.md`
  - `docs/SAFE-WORKFLOW.md`
  - `docs/DO-NOT-TOUCH.md`
- Confirm task scope before production edits.
- Prefer docs/report files for audit and governance tasks.
- Update `CHANGELOG.md` after meaningful workspace changes.
- Never infer that a newer file timestamp means source-of-truth.

## Netlify Rules

- Do not edit Netlify dashboard settings without explicit permission.
- Do not change `netlify.toml` without explicit permission.
- Preserve `/api/lead` routing unless explicitly tasked.
- Preserve headers/security config unless explicitly tasked.
- Keep deploy/export snapshots read-only.

## Forms Rules

- Do not change form markup, hidden fields, field names, validation, submission handlers, Netlify Forms attributes, EmailJS logic, or lead functions without explicit permission.
- After any authorized form/API/function change, test successful submit and failure state.
- Never commit secrets or live tokens.

## SEO Rules

- Preserve `robots.txt`, `sitemap.xml`, canonical URL, title, description, Open Graph, Twitter metadata, and structured SEO content unless explicitly tasked.
- SEO changes must be reviewed as production-risk changes.

## Mobile Rules

- Treat mobile as the primary production viewport.
- Do not introduce layout shifts, overlapping text, or inaccessible tap targets.
- Test mobile after any authorized UI change.

## Security Rules

- No secrets in git.
- Use `.env.example` only for empty placeholders.
- Keep `.env`, keys, tokens, and credentials ignored.
- Do not expose Telegram, SMTP, Netlify, or API credentials in docs or code.

