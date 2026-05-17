# Rollback Plan

Date: 2026-05-17

## Local Rollback Before Commit

For tracked sprint changes:

```powershell
git restore -- index.html CHANGELOG.md project-todo.md
```

For newly created docs from this release-prep phase, remove only the intended files:

```powershell
Remove-Item -LiteralPath docs\PREVIEW-DEPLOY-CHECKLIST.md,docs\LIGHTHOUSE-EXECUTION-GUIDE.md,docs\REAL-DEVICE-QA.md,docs\RELEASE-RISK-MATRIX.md,docs\SAFE-PRODUCTION-DEPLOY-PLAN.md,docs\ROLLBACK-PLAN.md
```

## Local Rollback After Commit

Use a non-destructive revert:

```powershell
git revert <commit-hash>
```

Use reset only before push and only with explicit approval:

```powershell
git reset --soft HEAD~1
```

## Preview Deploy Rollback

- Do not promote preview to production.
- Create a new preview from the last known good commit if needed.
- Keep the failed preview URL documented for investigation.

## Production Rollback

If production deploy is approved later and fails:

- Use Netlify deploy rollback to the last known good deploy.
- Do not patch production live without reproducing locally.
- Document the failed deploy URL, issue, browser/device, and rollback time.

## Stop Conditions

Rollback or stop advancement if:

- Form route `/api/lead` is broken.
- Console errors affect core UX.
- iPhone sticky CTA blocks content.
- Horizontal scroll returns.
- Lighthouse reports severe CLS or TBT regression.
- Wrong page/source appears in preview or production.

