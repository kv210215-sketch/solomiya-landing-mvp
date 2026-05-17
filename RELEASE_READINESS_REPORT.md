# Release Readiness Report — Solomiya Energy Landing MVP

**Date:** 2026-05-17  
**Project root:** `D:\solomiya-landing-mvp`  
**Branch:** `main` (3 commits, no upstream tracking)  
**Remote:** `origin` → `https://github.com/andriy555solar-afk/solomiya-landing-mvp.git` — **repository not found (404)**

---

## Executive summary

The local project is **functionally deploy-ready** as a static Netlify site with a Telegram lead function. Critical gaps are **GitHub remote recovery** (repo does not exist), **production brand assets** (placeholders created during this audit — replace with final design), and **manual Netlify env verification** (not verifiable from repo alone).

**Deploy readiness score: 78 / 100** (see scoring table below).

---

## 1. Git & repository state

| Check | Status | Notes |
|-------|--------|-------|
| `.git` present | ✅ | Valid repo at project root |
| Branch | ✅ | `main` active |
| Commits | ✅ | 3 commits on `main` |
| Remote configured | ✅ | `origin` → GitHub URL |
| Remote reachable | ❌ | `git push --dry-run` → *Repository not found* |
| Upstream tracking | ❌ | `main` has no `origin/main` |
| Staged changes | ✅ | Clean index |
| Untracked files | ⚠️ | 19 docs in `docs/` + new root assets/reports from this audit |

**Recent commits:**
- `5a16823` — Safe mobile stability and preview readiness patch
- `b608dfe` — Safe mobile stabilization patch
- `b6949f1` — AI-ready production governance baseline

**Other branch:** `claude/affectionate-wescoff-5973d9` (Claude worktree, not merged).

---

## 2. Sensitive data scan

| Item | Status |
|------|--------|
| `.env` in repo | ✅ Absent (only `.env.example` with empty placeholders) |
| Live Telegram tokens in code | ✅ Not found |
| Hardcoded API keys | ✅ Not found |
| `.gitignore` covers secrets | ✅ `.env`, `*.key`, `*.pem`, `secrets/`, archives |
| Absolute paths in production code | ✅ None in `index.html`, JS, `netlify.toml` |
| Absolute paths in docs | ⚠️ Present in `README.md`, `docs/*` (machine-specific; not deployed) |

---

## 3. Deploy-ready structure

| Asset / config | Status |
|----------------|--------|
| `index.html` | ✅ ~96 KB, SEO + OG + canonical + JSON-LD |
| `netlify.toml` | ✅ `publish = "."`, functions → `netlify/functions` |
| `netlify/functions/lead.js` | ✅ Active path via redirect |
| `_headers` | ✅ CSP, security headers, CORS for `/api/*` |
| `robots.txt` | ✅ |
| `sitemap.xml` | ✅ Single URL, lastmod 2026-05-14 |
| `api/lead.js` | ⚠️ Vercel variant (inactive on Netlify) |
| `functions/api/lead.js` | ⚠️ CF Pages variant (inactive on Netlify) |
| Duplicate lead handlers | ⚠️ 3 files, **different hashes** — document which is canonical |

---

## 4. Frontend production checks (`index.html`)

| Feature | Status |
|---------|--------|
| `lang="uk"` | ✅ |
| Meta description / keywords | ✅ |
| Canonical + hreflang | ✅ `https://www.solomiya-energy.com/` |
| OG + Twitter cards | ✅ |
| Viewport | ✅ |
| Safe-area insets (sticky CTA) | ✅ `env(safe-area-inset-*)` |
| Sticky mobile CTA | ✅ |
| Form → `POST /api/lead` | ✅ JSON + honeypot + phone validation |
| Skip nav + focus-visible | ✅ |
| JSON-LD LocalBusiness | ✅ |
| `manifest.json` link in `<head>` | ❌ File exists; not linked yet (optional) |

---

## 5. Production assets (post-audit)

| File | Status |
|------|--------|
| `favicon.svg` | ✅ Created (placeholder) |
| `favicon.ico` | ✅ Created (placeholder) |
| `apple-touch-icon.png` | ✅ Created, 180×180, ~41 KB |
| `og-image.jpg` | ✅ Created, 1200×630, ~79 KB |
| `manifest.json` | ✅ Created (not linked in HTML) |

See `MISSING_ASSETS_REPORT.md` for details and replacement guidance.

---

## 6. Size & hygiene

- **Total tracked workspace:** ~818 KB (no files > 500 KB in tree after image optimization).
- **Backup folder:** `backup/*.bak` (2 files, ~186 KB) — local safety copies, not required for deploy.
- **Placeholder dirs:** `assets/`, `backups/`, `scripts/` contain only `.gitkeep`.

---

## 7. Deploy readiness scoring

| Area | Weight | Score | Notes |
|------|--------|-------|-------|
| Core HTML/CSS/JS | 25% | 23/25 | Complete landing + form |
| Netlify config | 20% | 18/20 | `-2` duplicate function paths |
| SEO / social | 15% | 12/15 | `-3` placeholder OG/icons, no manifest link |
| Security | 15% | 14/15 | `-1` CSP allows `unsafe-inline` (required for inline CSS) |
| Assets | 10% | 7/10 | Placeholders present; need brand-final art |
| Git / CI | 15% | 4/15 | Remote repo missing, no upstream |
| **Total** | **100%** | **78/100** | |

---

## 8. Blockers before production push

1. **Create GitHub repository** and push `main` (see `GITHUB_RECOVERY_PLAN.md`).
2. **Connect Netlify** to the new repo (or manual deploy) and set env vars: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `ALLOWED_ORIGIN`.
3. **End-to-end lead test** on preview URL after deploy.
4. **Replace placeholder** favicon / OG image with final brand assets when available.
5. **Confirm** live Netlify site matches `D:\solomiya-landing-mvp` (not Downloads export copies).

---

## 9. Recommended next commands

```powershell
cd D:\solomiya-landing-mvp

# After creating GitHub repo (see GITHUB_RECOVERY_PLAN.md):
git remote set-url origin https://github.com/andriy555solar-afk/solomiya-landing-mvp.git
git push -u origin main

# Optional: commit new assets + reports
git add favicon.svg favicon.ico apple-touch-icon.png og-image.jpg manifest.json `
  RELEASE_READINESS_REPORT.md MISSING_ASSETS_REPORT.md SAFE_CLEANUP_PLAN.md GITHUB_RECOVERY_PLAN.md
git status
```

---

*Generated by repository recovery audit. No production logic was modified except creation of missing static assets.*
