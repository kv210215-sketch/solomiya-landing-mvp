# Architecture — Solomiya Energy Landing MVP

**Last updated:** 2026-05-18  
**Production host:** [Cloudflare Pages](https://solomiya-energy-landing.pages.dev/)

---

## Source of truth

| Layer | File | Role |
|-------|------|------|
| Frontend | `index.html` | Single-file landing: CSS, JS, form, SEO |
| API | `functions/api/lead.js` | `POST /api/lead` → Telegram |
| Static SEO | `robots.txt`, `sitemap.xml` | Crawlers |
| Security headers | `_headers` | CSP, CORS hints (supported on Cloudflare Pages) |
| Assets | `favicon.*`, `og-image.jpg`, `apple-touch-icon.png`, `manifest.json` | Icons and social preview |

Repository root: `D:\solomiya-landing-mvp` (GitHub: `kv210215-sketch/solomiya-landing-mvp`).

---

## Current production stack

```
User → Cloudflare Pages (CDN + SSL)
         ├── GET /           → index.html
         ├── GET /assets…    → static files
         └── POST /api/lead  → functions/api/lead.js → Telegram API
```

**Live URL:** https://solomiya-energy-landing.pages.dev/

Telegram integration is **stable**. Environment variables are configured in the Cloudflare dashboard, not in this repo.

---

## Lead capture path (do not break)

1. User submits `#mainForm` in `index.html`
2. JavaScript `fetch('/api/lead', { method: 'POST', body: JSON })`
3. Cloudflare runs `functions/api/lead.js`
4. Function reads `env.TELEGRAM_BOT_TOKEN` and `env.TELEGRAM_CHAT_ID`
5. Message posted to Telegram; JSON `{ "success": true }` returned

See `docs/TELEGRAM-INTEGRATION.md` for env vars, curl tests, and troubleshooting.

---

## Legacy (not used in production)

| Item | Notes |
|------|-------|
| `netlify.toml`, `netlify/functions/lead.js` | Netlify-era routing; archived docs in `docs/archive/netlify/` |
| `api/lead.js` | Vercel adapter |
| Old deploy/export copies on local disk | Read-only; never merge into source |
| `docs/archive/` | Superseded audit and Netlify deploy guides |

---

## Critical warning

**Do not modify the production lead flow without validation:**

- `index.html` — form markup, field IDs, `fetch('/api/lead', …)`
- `functions/api/lead.js` — active handler
- Cloudflare env: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `ALLOWED_ORIGIN`
- Active Cloudflare Pages deployment settings

After any authorized change: test desktop + iPhone Safari, confirm Telegram delivery, check `POST /api/lead` returns 200.

---

## Documentation map

| Doc | Purpose |
|-----|---------|
| `README.md` | Deploy overview (Cloudflare) |
| `docs/TELEGRAM-INTEGRATION.md` | Bot flow, env, testing |
| `docs/DO-NOT-TOUCH.md` | Protected files |
| `project-rules.md` | Agent and safety rules |
| `docs/archive/netlify/README.md` | Legacy Netlify notes |
