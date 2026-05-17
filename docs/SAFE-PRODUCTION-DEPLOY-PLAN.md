# Safe Production Deploy Plan

Date: 2026-05-17

## Current Status

Not ready for production deploy yet.

Ready for selective local commit and preview deploy preparation.

## Required Before Production

1. Create selective local commit.
2. Create preview deploy from `D:\solomiya-landing-mvp`.
3. Verify preview URL on desktop and mobile.
4. Run Lighthouse Mobile and Desktop on preview.
5. Complete iPhone Safari safe-area QA.
6. Decide missing asset handling.
7. Confirm no form/API/Netlify changes were included.
8. Get explicit human production deploy approval.

## Production Deploy Gates

PASS required:

- No console errors on preview.
- No horizontal page overflow.
- Sticky CTA safe on iPhone.
- Form visible and layout intact.
- Lighthouse does not show severe LCP/CLS/TBT regression.
- Preview matches source-of-truth.

## Production Deploy Command Policy

Do not run production deploy automatically.

Do not run `git push` automatically.

Only deploy after explicit human instruction naming the target.

## Post-Deploy Smoke

After an approved production deploy:

- Open production URL.
- Check title/canonical.
- Check hero/contact/footer.
- Check sticky CTA on mobile.
- Check no console errors.
- Check robots and sitemap.
- Check form surface only unless form submit testing is explicitly authorized.

