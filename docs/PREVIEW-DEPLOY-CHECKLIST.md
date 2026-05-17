# Preview Deploy Checklist

Date: 2026-05-17
Scope: release preparation only. No deploy, no push, no production changes.

## Current Git State

Tracked modified files:

- `CHANGELOG.md`
- `index.html`
- `project-todo.md`

Untracked documentation files are present. Selective staging is required.

## Safe Selective Commit Readiness

Safe to create a local selective commit after review.

Recommended commit scope:

- `index.html`
- `CHANGELOG.md`
- `project-todo.md`
- performance sprint docs
- manual QA/readiness docs
- preview/Lighthouse/release docs

Do not stage:

- `.env`
- backups
- deploy/export copy
- API/functions
- `netlify.toml`
- `_headers`
- unrelated archives
- secrets

## Preview Deploy Preconditions

- Commit is local and reviewed.
- No push has happened unless explicitly approved.
- Preview deploy source is `D:\solomiya-landing-mvp`.
- Deploy/export copy in Downloads is not used.
- Netlify settings are not changed.
- `/api/lead` route is preserved.

## Asset Readiness

Known missing local source assets:

- `/og-image.jpg`
- `/favicon.ico`
- `/favicon.svg`
- `/apple-touch-icon.png`

Preview deploy can proceed only if missing assets are accepted as known limitations or fixed in a separate approved asset task.

## Path Readiness

- Root-relative icon paths are present.
- Metadata references production absolute OG URL.
- `robots.txt` exists.
- `sitemap.xml` exists.
- No production `<img>` tags were found.

## Preview Smoke Checklist

- Open preview URL on desktop Chrome.
- Open preview URL on iPhone Safari.
- Open preview URL on Android Chrome.
- Confirm no console errors.
- Confirm no horizontal page overflow.
- Confirm sticky CTA appears on mobile after scroll.
- Confirm form is visible but do not submit.
- Confirm title, meta description, canonical, OG/Twitter tags are present.
- Confirm missing asset behavior is either fixed or accepted.

