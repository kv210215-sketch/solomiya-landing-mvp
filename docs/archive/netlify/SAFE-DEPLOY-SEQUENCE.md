# Safe Deploy Sequence

Date: 2026-05-17

## Current Rule

Do not deploy directly to production from the current state.

Use preview/staging first.

## Recommended Sequence

1. Review current git diff.
2. Create a selective local commit for the performance sprint and QA docs.
3. Confirm no forbidden files are staged:
   - `.env`
   - backups
   - deploy/export copy
   - `netlify.toml`
   - `_headers`
   - API/functions
4. Create a preview deploy only from `D:\solomiya-landing-mvp`.
5. Open the preview URL on desktop and mobile.
6. Run Lighthouse Mobile and Desktop on the preview URL.
7. Manually test iPhone Safari safe-area behavior.
8. Verify missing assets decision:
   - add approved `og-image.jpg`/icons, or
   - explicitly accept preview limitation.
9. If preview passes, prepare production deploy approval.
10. Production deploy only after explicit human approval.

## Rollback Plan

- For uncommitted local changes: use `git restore` for tracked files and remove only the new QA docs intended for rollback.
- For committed patch changes: use `git revert <commit-hash>`.
- For production deploy rollback: use Netlify deploy rollback to the last known good deploy.

## Stop Conditions

Stop before production deploy if:

- iPhone sticky CTA overlaps important content.
- Any form layout is broken.
- Preview Lighthouse shows severe LCP/CLS/TBT regression.
- Console errors appear on preview.
- `/api/lead` routing is affected.
- The deployed page does not match source-of-truth.

