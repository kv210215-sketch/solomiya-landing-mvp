# DO NOT TOUCH - Solomiya Energy Landing MVP

**Updated:** 2026-05-18  
**Production:** Cloudflare Pages · https://solomiya-energy-landing.pages.dev/  
**Telegram:** Stable — real leads in production

Цей файл визначає зони, які не можна редагувати без окремого прямого дозволу та повного QA.

---

## Active production (highest risk)

| Item | Why |
|------|-----|
| `index.html` — `#mainForm`, `#fphone`, `fetch('/api/lead', …)` | Breaks live lead capture |
| `functions/api/lead.js` | **Only** active API handler on Cloudflare |
| Cloudflare env: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `ALLOWED_ORIGIN` | Breaks Telegram delivery |
| Cloudflare Pages project / production deployment | Live site |

**Rules:**

- Do not modify active `lead.js`.
- Do not modify form fetch logic.
- Do not modify `TELEGRAM_*` env values without owner approval.
- Do not change active deployment logic.

---

## Production forms

Do not change without explicit permission:

- form markup and field `id` / `name`;
- honeypot (`#fwebsite`);
- phone validation and error UI;
- success/error screens after submit.

---

## Core production files

- `index.html`
- `functions/api/lead.js`
- `robots.txt`, `sitemap.xml`
- `_headers`
- `favicon.*`, `og-image.jpg`, `apple-touch-icon.png`

---

## Legacy (do not use for incidents)

Not production — do not edit to fix live Telegram issues:

- `netlify.toml`, `netlify/functions/lead.js`
- `api/lead.js` (Vercel)

See `docs/archive/netlify/README.md`.

---

## Deploy copy (read-only)

`C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy` — do not merge into source.

---

## Local backups

`backup/` — local HTML snapshots (gitignored). Do not delete without permission.

---

## Secrets

Never commit or paste into docs:

- `.env` with real values
- `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- API keys, credentials

---

## Safe to change (documentation only tasks)

- `docs/` (except when task says otherwise)
- `README.md`, `project-rules.md`, `CHANGELOG.md`
- `docs/archive/`
