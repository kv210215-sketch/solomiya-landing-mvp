# Project Rules - Solomiya Energy Landing MVP

## Production status

- **Live:** https://solomiya-energy-landing.pages.dev/
- **Host:** Cloudflare Pages
- **Telegram integration:** Stable — do not change without explicit approval and QA

## Source of truth

Official path: `D:\solomiya-landing-mvp`  
GitHub: `kv210215-sketch/solomiya-landing-mvp`

Active production files:

- `index.html`
- `functions/api/lead.js`

## Forbidden changes (without explicit approval)

- Do **not** modify `functions/api/lead.js` (active lead handler).
- Do **not** modify form submit logic or `fetch('/api/lead')` in `index.html`.
- Do **not** change Cloudflare env vars `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, or `ALLOWED_ORIGIN`.
- Do **not** change active Cloudflare Pages deployment logic or replatform without a dedicated task.
- Do **not** merge handlers (`api/`, `netlify/`) into the production path.

## Forbidden folders

Do not edit, move, delete, or use as source:

- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`
- `backup/` (local snapshots; gitignored)
- `backups/private/`
- any secrets or credential folders

## Production safety rules

- Do not change `index.html` unless explicitly authorized.
- Do not change forms unless explicitly authorized.
- Do not change `_headers` unless explicitly authorized.
- Do not merge deploy/export copy into source automatically.
- Do not delete local backups in `backup/`.
- Do not push to GitHub without explicit permission.
- Do not deploy without explicit permission.

## Coding rules

- Make small PR-style changes.
- Follow existing project structure.
- Avoid broad rewrites and architecture “improvements” unless requested.
- Preserve user-facing content unless explicitly tasked.
- Documentation-only tasks must not touch production code paths.

## AI agent workflow

Start by reading:

- `ai/ai-session-start.md`
- `docs/ARCHITECTURE.md`
- `docs/TELEGRAM-INTEGRATION.md`
- `docs/DO-NOT-TOUCH.md`
- `docs/PROJECT-GOVERNANCE.md`

Update `CHANGELOG.md` after meaningful workspace changes.

## Legacy Netlify / Vercel

- Netlify is **not** production. See `docs/archive/netlify/README.md`.
- Do not edit `netlify.toml` or Netlify functions for routine tasks.
- `api/lead.js` (Vercel) is legacy only.

## Forms rules

- Do not change form markup, field names, validation, submission handlers, or lead functions without explicit permission.
- After any authorized form/API change: test desktop + iPhone Safari and confirm Telegram delivery.
- Never commit secrets or live tokens.

## SEO rules

- Preserve `robots.txt`, `sitemap.xml`, canonical URL, and meta tags unless explicitly tasked.

## Mobile rules

- Treat mobile as the primary production viewport.
- Test mobile after any authorized UI change.

## Security rules

- No secrets in git.
- Use `.env.example` only for empty placeholders.
- Keep `.env`, keys, tokens, and credentials ignored.
