# Safe Commit Instructions

Date: 2026-05-17
Scope: prepare selective local commit only. No push, no deploy.

## Safe Files For Selective Commit

Core tracked files:

- `index.html`
- `CHANGELOG.md`
- `project-todo.md`

Release flow docs:

- `docs/LIGHTHOUSE-EXECUTION-GUIDE.md`
- `docs/PREVIEW-DEPLOY-CHECKLIST.md`
- `docs/REAL-DEVICE-QA.md`
- `docs/RELEASE-RISK-MATRIX.md`
- `docs/SAFE-PRODUCTION-DEPLOY-PLAN.md`
- `docs/ROLLBACK-PLAN.md`
- `docs/SAFE-COMMIT-INSTRUCTIONS.md`
- `docs/PREVIEW-DEPLOY-EXECUTION.md`
- `docs/POST-PREVIEW-QA-FLOW.md`
- `docs/SAFE-GIT-STATE-REPORT.md`

Recommended supporting docs to include in the same release-prep commit:

- `docs/FINAL-PRE-DEPLOY-READINESS.md`
- `docs/KNOWN-LIMITATIONS.md`
- `docs/LIGHTHOUSE-READINESS.md`
- `docs/MANUAL-QA-CHECKLIST.md`
- `docs/MOBILE-STABILIZATION-PATCH-REPORT.md`
- `docs/PERFORMANCE-OPTIMIZATION-PLAN.md`
- `docs/PERFORMANCE-RISK-REGISTER.md`
- `docs/SAFE-DEPLOY-SEQUENCE.md`
- `docs/SAFE-PERFORMANCE-PATCH-REPORT.md`
- `docs/STAGING-LIGHTHOUSE-PLAN.md`

## Files That Must Stay Untracked Unless Separately Approved

- `docs/FRONTEND-RISK-REGISTER.md`
- `docs/FUTURE-ARCHITECTURE.md`
- `docs/GIT-SNAPSHOT-RESULT.md`
- `docs/MOBILE-PATCH-COMMIT-RESULT.md`
- `docs/PRE-CLAUDE-MOBILE-PATCH-CHECK.md`
- `docs/PRODUCTION-HARDENING-PLAN.md`
- `docs/PRODUCTION-READINESS-REPORT.md`
- `docs/SAFE-OPTIMIZATION-OPPORTUNITIES.md`
- any backup/archive/cache/generated files
- any `.env`, secrets, tokens, credentials
- deploy/export copy files

## Safe Staging Commands

Minimal expected commit:

```powershell
git add -- index.html CHANGELOG.md project-todo.md `
  docs\LIGHTHOUSE-EXECUTION-GUIDE.md `
  docs\PREVIEW-DEPLOY-CHECKLIST.md `
  docs\REAL-DEVICE-QA.md `
  docs\RELEASE-RISK-MATRIX.md `
  docs\SAFE-PRODUCTION-DEPLOY-PLAN.md `
  docs\ROLLBACK-PLAN.md `
  docs\SAFE-COMMIT-INSTRUCTIONS.md `
  docs\PREVIEW-DEPLOY-EXECUTION.md `
  docs\POST-PREVIEW-QA-FLOW.md `
  docs\SAFE-GIT-STATE-REPORT.md
```

Recommended full release-prep commit:

```powershell
git add -- index.html CHANGELOG.md project-todo.md `
  docs\FINAL-PRE-DEPLOY-READINESS.md `
  docs\KNOWN-LIMITATIONS.md `
  docs\LIGHTHOUSE-EXECUTION-GUIDE.md `
  docs\LIGHTHOUSE-READINESS.md `
  docs\MANUAL-QA-CHECKLIST.md `
  docs\MOBILE-STABILIZATION-PATCH-REPORT.md `
  docs\PERFORMANCE-OPTIMIZATION-PLAN.md `
  docs\PERFORMANCE-RISK-REGISTER.md `
  docs\POST-PREVIEW-QA-FLOW.md `
  docs\PREVIEW-DEPLOY-CHECKLIST.md `
  docs\PREVIEW-DEPLOY-EXECUTION.md `
  docs\REAL-DEVICE-QA.md `
  docs\RELEASE-RISK-MATRIX.md `
  docs\ROLLBACK-PLAN.md `
  docs\SAFE-COMMIT-INSTRUCTIONS.md `
  docs\SAFE-DEPLOY-SEQUENCE.md `
  docs\SAFE-GIT-STATE-REPORT.md `
  docs\SAFE-PERFORMANCE-PATCH-REPORT.md `
  docs\SAFE-PRODUCTION-DEPLOY-PLAN.md `
  docs\STAGING-LIGHTHOUSE-PLAN.md
```

## Verify Before Commit

```powershell
git diff --cached --name-only
git diff --cached --check
git diff --cached -- netlify.toml _headers api functions netlify robots.txt sitemap.xml
```

Expected protected-file diff: empty.

## Safe Commit Command

```powershell
git commit -m "Prepare preview deploy validation flow"
```

## Rollback Commands

Before commit:

```powershell
git restore --staged .
git restore -- index.html CHANGELOG.md project-todo.md
```

After local commit and before push:

```powershell
git reset --soft HEAD~1
```

Non-destructive rollback after commit:

```powershell
git revert <commit-hash>
```

## Never Run In This Flow

```powershell
git push
netlify deploy --prod
git reset --hard
```

