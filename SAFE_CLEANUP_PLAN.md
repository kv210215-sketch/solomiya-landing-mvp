# Safe Cleanup Plan — Solomiya Energy Landing MVP

**Date:** 2026-05-17  
**Policy:** List only. **Do not delete** without explicit owner approval and backup.

---

## 1. Cleanup principles

1. **Never delete** `index.html`, `netlify.toml`, `_headers`, `robots.txt`, `sitemap.xml`, `netlify/functions/lead.js` without a tagged release backup.
2. **Move, don't delete** — prefer `backups/archive-YYYY-MM-DD/` over `Remove-Item`.
3. **Compare before merge** — Downloads/deploy copies may differ from main folder.
4. **Keep `.git` history** — cleanup commits should be separate from feature commits.

---

## 2. Safe cleanup candidates (recommended archive)

### A. Root-level duplicate audit docs

These overlap with newer `docs/` governance set:

| File | Size (approx) | Reason |
|------|---------------|--------|
| `FINAL_AUDIT.md` | 7 KB | Superseded by `docs/PRODUCTION-READINESS-REPORT.md`, this audit |
| `FIXES_APPLIED.md` | 5 KB | Historical changelog fragment |
| `DEPLOY_CHECKLIST.md` | 5 KB | Overlaps `docs/PREVIEW-DEPLOY-CHECKLIST.md`, `README.md` |

**Action:** Move to `backups/docs-archive/` (not delete).

### B. Local HTML backups

| Path | Reason |
|------|--------|
| `backup/index.html.2026-05-14.bak` | Pre-patch snapshot |
| `backup/index.html.pre-optimization.bak` | Pre-optimization snapshot |

**Action:** Keep until GitHub push + Netlify preview confirmed; then zip to `backups/html-snapshots-2026-05-14.zip` and optionally remove loose `.bak` from working tree (still in git history).

### C. Redundant lead function copies (after documenting canonical)

| Path | Platform | Action |
|------|----------|--------|
| `api/lead.js` | Vercel | Archive or add `README` stub: "inactive on Netlify" |
| `functions/api/lead.js` | Cloudflare Pages | Same |
| `netlify/functions/lead.js` | **Netlify active** | **Keep** |

**Action:** Do not delete until platform decision is final. Optional: move inactive copies to `backups/functions-archive/`.

### D. Empty scaffold dirs

| Path | Contents |
|------|----------|
| `assets/.gitkeep` | Empty (root now has real assets) |
| `scripts/.gitkeep` | Empty |

**Action:** Either populate with build scripts or remove `.gitkeep` after adding real `assets/` usage policy.

---

## 3. Untracked docs batch (19 files)

Currently untracked in `docs/`. **Safe to commit** as release documentation (no production code):

```
docs/FINAL-PRE-DEPLOY-READINESS.md
docs/FRONTEND-RISK-REGISTER.md
docs/FUTURE-ARCHITECTURE.md
docs/GIT-SNAPSHOT-RESULT.md
docs/KNOWN-LIMITATIONS.md
docs/LIGHTHOUSE-READINESS.md
docs/MANUAL-QA-CHECKLIST.md
docs/MOBILE-PATCH-COMMIT-RESULT.md
docs/MOBILE-STABILIZATION-PATCH-REPORT.md
docs/PERFORMANCE-OPTIMIZATION-PLAN.md
docs/PERFORMANCE-RISK-REGISTER.md
docs/PRE-CLAUDE-MOBILE-PATCH-CHECK.md
docs/PRODUCTION-HARDENING-PLAN.md
docs/PRODUCTION-READINESS-REPORT.md
docs/ROLLBACK-PLAN.md
docs/SAFE-DEPLOY-SEQUENCE.md
docs/SAFE-OPTIMIZATION-OPPORTUNITIES.md
docs/SAFE-PERFORMANCE-PATCH-REPORT.md
docs/STAGING-LIGHTHOUSE-PLAN.md
```

**Optional consolidation (later):** Merge overlapping performance/Lighthouse docs into one `docs/RELEASE-OPS.md` — **not urgent**.

---

## 4. Do NOT touch (protected)

| Path | Reason |
|------|--------|
| `index.html` | Production HTML |
| `netlify.toml` | Routing + functions dir |
| `_headers` | Security / CSP / CORS |
| `netlify/functions/lead.js` | Live lead handler |
| `robots.txt`, `sitemap.xml` | SEO |
| `.env.example` | Template only |
| `.gitignore` | Secret protection |
| `favicon.*`, `og-image.jpg`, `apple-touch-icon.png` | New production assets |
| `project-rules.md`, `docs/DO-NOT-TOUCH.md` | Governance |

---

## 5. External duplicates (outside repo — manual cleanup)

**Not in git.** Owner may archive locally after confirming main folder is source of truth:

| Location | Risk |
|----------|------|
| `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\` | Newer/smaller `index.html` — compare before any merge |
| `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\` | Very large old `index.html` (~1.7 MB) — legacy |
| `C:\Users\Andriy\Downloads\index.html` | Generic name — confusion risk |
| `C:\Users\Andriy\Downloads\_SORTED\Archives\*.zip` | Old zip duplicates |

**Action:** Move to `_SORTED/Archives/solomiya-legacy/` on disk only; do not import into repo without diff.

---

## 6. Cache / artifacts (none found in repo)

| Pattern | In repo? |
|---------|----------|
| `node_modules/` | ❌ Not present |
| `dist/`, `build/` | ❌ |
| `*.log` | ❌ |
| `*.zip`, `*.rar` | ❌ (gitignored) |
| `.claude/worktrees/` | Present locally; gitignored via `.claude/worktrees/` |

---

## 7. Suggested cleanup sequence (when approved)

```powershell
cd D:\solomiya-landing-mvp
$archive = "backups\archive-2026-05-17"
New-Item -ItemType Directory -Force -Path $archive

# Example: archive root audit duplicates (DO NOT RUN without approval)
# Move-Item FINAL_AUDIT.md, FIXES_APPLIED.md, DEPLOY_CHECKLIST.md -Destination $archive
```

---

## 8. `.gitignore` improvements (optional, non-destructive)

Consider adding:

```
backup/
*.bak
.cursor/
```

Only after confirming `backup/` should not be versioned (currently **tracked** in git).

---

*This plan preserves rollback capability. Execute phases only after GitHub remote is restored and preview deploy passes.*
