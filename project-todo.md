# Project Todo - Solomiya Energy Landing MVP

## DONE

- Established `D:\solomiya-landing-mvp` as source-of-truth candidate.
- Documented deploy/export copy as read-only reference.
- Added governance docs in `docs`.
- Added AI-ready workspace folders: `ai`, `scripts`, `assets`, `backups`.
- Added AI session start rules.
- Added git safety files and environment template.
- Completed safe performance optimization sprint documentation.
- Added requestAnimationFrame throttling for existing scroll UI updates.
- Completed safe manual QA and Lighthouse readiness planning.
- Prepared safe preview deploy, Lighthouse execution, real-device QA, release risk, production deploy, and rollback plans.
- Prepared safe selective commit instructions and post-preview QA flow.

## IN PROGRESS

- Production governance hardening.
- AI/Codex/Claude workspace documentation.
- Manual mobile performance verification before deploy.
- Preview Lighthouse validation after safe commit.
- Selective local release-prep commit review.
- Safe selective commit execution pending human approval.

## BLOCKED

- Confirm actual Netlify production state manually before any merge or cleanup.
- Confirm whether deploy/export brief page is a separate production artifact.

## NEXT

- Review current git status and prepare a clean local snapshot.
- Manually compare production Netlify deploy with source-of-truth files.
- Decide whether brief/form page needs its own source folder or separate workflow.
- Test lead form only after authorized form/API work.
- Run Lighthouse on staging/production after manual approval.
- Verify iPhone sticky CTA safe-area and scroll smoothness manually.
- Decide whether font family/weight reduction is acceptable after visual review.
- Decide whether to add missing `og-image.jpg`, favicon, SVG favicon, and apple touch icon before production deploy.
- Create preview deploy only after selective safe commit and human approval.
- Run preview deploy smoke on desktop Chrome, iPhone Safari, and Android Chrome.
- Capture Lighthouse Mobile/Desktop metrics from preview URL.
- Execute safe selective commit without push or deploy.
- Verify staged files exactly match the release-prep allowlist before commit.

## IDEAS

- Add a read-only diff checklist for production deploy verification.
- Add a local `solomiya-energy.code-workspace` after deciding VS Code settings.
- Add scripts for non-destructive audit checks.
- Add a lightweight overflow smoke script for mobile and desktop widths.
- Add a future parity-tested CSS/JS extraction plan.
- Add a form contract smoke checklist that does not submit unless explicitly authorized.
- Add approved production social/icon assets in a separate asset task.
- Record preview URL and Lighthouse results after preview deploy.
