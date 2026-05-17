# Git Snapshot Plan

This is a plan only. Do not push without explicit permission.

## 1. Check Status

Run:

```powershell
git status --short
git status
```

Review tracked, untracked, and modified files before staging.

## 2. Verify `.gitignore`

Confirm these are ignored:

- `node_modules`
- `.env`
- `.env.local`
- `dist`
- `build`
- `.cache`
- `.DS_Store`
- `*.log`
- `backups/private`
- `secrets`
- `*.key`
- `*.pem`
- `*.zip`
- `*.rar`

## 3. First Clean Commit

Only after manual review:

```powershell
git add .gitignore .env.example ai docs project-rules.md project-todo.md CHANGELOG.md README.md
git status --short
git commit -m "chore: establish AI-ready production workspace"
```

Do not include secrets, deploy copies, archives, or private backups.

## 4. Rollback Point

After a clean local commit, tag or note it as the rollback point:

```powershell
git tag ai-ready-workspace-2026-05-17
```

Only create tags after confirming the commit is correct.

## 5. Push Policy

Forbidden without explicit permission:

```powershell
git push
git push --tags
```

No GitHub push should happen during governance/setup unless the user explicitly authorizes it.

