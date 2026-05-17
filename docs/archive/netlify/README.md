# Netlify — Legacy (not used)

**Status:** Archived documentation and config references only.

Solomiya Energy Landing MVP **does not use Netlify** for production.

## Current production

- **Host:** Cloudflare Pages  
- **URL:** https://solomiya-energy-landing.pages.dev/  
- **Active handler:** `functions/api/lead.js`  
- **Architecture:** `docs/ARCHITECTURE.md`  
- **Telegram:** `docs/TELEGRAM-INTEGRATION.md`

## Legacy files still in the repo

These remain for historical reference. **Do not use them for deploy or incident response:**

| File | Former role |
|------|-------------|
| `netlify.toml` | Redirect `/api/lead` → Netlify Function |
| `netlify/functions/lead.js` | Netlify serverless handler |

Do not delete or “clean up” these files without a separate approved task and full QA on Cloudflare production.

## Archived deploy docs

Older guides that mention Netlify deploy, rollback, or `netlify deploy` live under:

- `docs/archive/netlify/` (moved deploy-specific docs)
- `docs/archive/audit-2026-05/` (recovery/audit reports)

If a document here conflicts with `README.md` or `docs/ARCHITECTURE.md`, **trust the non-archive docs**.
