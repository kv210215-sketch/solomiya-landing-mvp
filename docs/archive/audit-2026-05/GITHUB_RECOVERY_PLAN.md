# GitHub Recovery Plan — Solomiya Energy Landing MVP

**Date:** 2026-05-17  
**Owner account (from remote URL):** `andriy555solar-afk`  
**Configured remote:** `https://github.com/andriy555solar-afk/solomiya-landing-mvp.git`

---

## 1. Diagnosis

| Test | Result |
|------|--------|
| `git remote -v` | Points to `andriy555solar-afk/solomiya-landing-mvp` |
| `git push --dry-run origin main` | **fatal: Repository not found** |
| GitHub API `GET /repos/andriy555solar-afk/solomiya-landing-mvp` | **404** |
| Alternate names (`site`, `solomiya-energy-landing`, `solomiya-energy`, `solomiya-landing`) | All **404** |
| `gh` CLI | Not installed on this machine |
| Local git history | ✅ Intact (3 commits on `main`) |

**Conclusion:** Local repository is healthy. Remote repository **does not exist** (or account/repo name is wrong, or repo is private and credentials are missing — unauthenticated API also returns 404).

---

## 2. Recovery options

### Option A — Create new repo with same name (recommended)

Use when you want URL: `github.com/andriy555solar-afk/solomiya-landing-mvp`

### Option B — Create under different name

Example: `solomiya-energy-landing` — then update remote URL.

### Option C — Repo exists under another account/org

Update remote:

```powershell
git remote set-url origin https://github.com/<CORRECT_OWNER>/<CORRECT_REPO>.git
git push -u origin main
```

---

## 3. Exact commands — create repository (GitHub website)

1. Log in: https://github.com/andriy555solar-afk  
2. **New repository**
   - Name: `solomiya-landing-mvp`
   - Visibility: **Private** (recommended for pre-launch) or Public
   - **Do NOT** initialize with README, .gitignore, or license (local repo already has history)
3. Create repository.

---

## 4. Exact commands — push local `main` (PowerShell)

```powershell
cd D:\solomiya-landing-mvp

# Verify remote (adjust if you used Option B/C)
git remote -v

# If needed:
# git remote set-url origin https://github.com/andriy555solar-afk/solomiya-landing-mvp.git

# First push
git push -u origin main
```

**Authentication:** GitHub no longer accepts password for HTTPS. Use one of:

- **GitHub CLI** (install `gh`, then `gh auth login`)
- **Personal Access Token (PAT)** as password when prompted for HTTPS
- **SSH remote:**

```powershell
git remote set-url origin git@github.com:andriy555solar-afk/solomiya-landing-mvp.git
git push -u origin main
```

---

## 5. Exact commands — create repo via GitHub CLI (after installing `gh`)

```powershell
# Install: winget install GitHub.cli
gh auth login

cd D:\solomiya-landing-mvp

gh repo create solomiya-landing-mvp --private --source=. --remote=origin --push
```

Flags:
- `--public` instead of `--private` if needed
- Omit `--push` to create empty remote first, then `git push -u origin main` manually

---

## 6. Post-push checklist

- [ ] GitHub shows 3+ commits on `main`
- [ ] Root files visible: `index.html`, `netlify.toml`, `_headers`
- [ ] Secrets **not** in repo (verify no `.env` committed)
- [ ] Connect Netlify: **Import from Git** → select `solomiya-landing-mvp`
- [ ] Netlify build settings: publish `.`, functions `netlify/functions` (from `netlify.toml`)
- [ ] Set environment variables in Netlify UI
- [ ] Deploy preview → test form → Telegram

---

## 7. Branch strategy after recovery

| Branch | Action |
|--------|--------|
| `main` | Push first — production source |
| `claude/affectionate-wescoff-5973d9` | Do not push unless reviewed; local worktree only |

---

## 8. If repository was deleted on GitHub

Local commits are the **only** copy until push succeeds. Before any cleanup:

```powershell
cd D:\solomiya-landing-mvp
git bundle create D:\solomiya-landing-mvp-backup-2026-05-17.bundle main
```

Store `.bundle` on OneDrive/USB until GitHub push is confirmed.

---

## 9. Netlify ↔ GitHub linking (after push)

1. Netlify Dashboard → **Add new site** → **Import an existing project**
2. GitHub → authorize → select `solomiya-landing-mvp`
3. Build command: *(leave empty for static)*
4. Publish directory: `.`
5. Functions: auto from `netlify.toml`
6. Env vars: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `ALLOWED_ORIGIN=https://www.solomiya-energy.com`

---

## 10. Troubleshooting

| Error | Fix |
|-------|-----|
| Repository not found | Create repo on GitHub or fix remote URL |
| Permission denied | Wrong account — check `git config` user vs repo owner |
| Authentication failed | Use PAT or SSH, not account password |
| Rejected non-fast-forward | Remote has commits — pull/rebase only if remote was initialized with files |

---

*Local source of truth: `D:\solomiya-landing-mvp`. Recovery is push-only; no code rewrite required.*
