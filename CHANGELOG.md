# Changelog - Solomiya Energy Landing MVP

## 2026-05-17

- Change: Prepared safe selective commit flow for preview deploy readiness.
- Agent: Codex
- Files:
  - `docs/SAFE-COMMIT-INSTRUCTIONS.md`
  - `docs/PREVIEW-DEPLOY-EXECUTION.md`
  - `docs/POST-PREVIEW-QA-FLOW.md`
  - `docs/SAFE-GIT-STATE-REPORT.md`
  - `CHANGELOG.md`
  - `project-todo.md`
- Risk: Low. Git/release instructions only; no push, deploy, merge, Netlify, API, form, dependency, or production logic changes.
- Verification: Git status, protected diff, secret scan, asset/archive/cache scan, and whitespace check completed locally.

- Change: Prepared safe preview deploy and Lighthouse validation flow documentation.
- Agent: Codex
- Files:
  - `docs/PREVIEW-DEPLOY-CHECKLIST.md`
  - `docs/LIGHTHOUSE-EXECUTION-GUIDE.md`
  - `docs/REAL-DEVICE-QA.md`
  - `docs/RELEASE-RISK-MATRIX.md`
  - `docs/SAFE-PRODUCTION-DEPLOY-PLAN.md`
  - `docs/ROLLBACK-PLAN.md`
  - `CHANGELOG.md`
  - `project-todo.md`
- Risk: Low. Release preparation documentation only; no deploy, push, merge, Netlify, API, or form changes.
- Verification: Git state and asset references checked locally; missing icon/OG assets documented as release risks.

- Change: Completed safe manual QA and Lighthouse readiness validation after mobile/performance patches.
- Agent: Codex
- Files:
  - `docs/MANUAL-QA-CHECKLIST.md`
  - `docs/STAGING-LIGHTHOUSE-PLAN.md`
  - `docs/FINAL-PRE-DEPLOY-READINESS.md`
  - `docs/KNOWN-LIMITATIONS.md`
  - `docs/SAFE-DEPLOY-SEQUENCE.md`
  - `CHANGELOG.md`
  - `project-todo.md`
- Risk: Low. Documentation and read-only validation only; no deploy, push, form submit, API/function, or Netlify changes.
- Verification: Local browser smoke checked mobile and desktop viewports; SEO/assets checked read-only.

- Change: Ran a safe performance optimization sprint and added requestAnimationFrame throttling to the existing scroll UI handler.
- Agent: Codex
- Files:
  - `index.html`
  - `docs/PERFORMANCE-OPTIMIZATION-PLAN.md`
  - `docs/PERFORMANCE-RISK-REGISTER.md`
  - `docs/LIGHTHOUSE-READINESS.md`
  - `docs/SAFE-PERFORMANCE-PATCH-REPORT.md`
  - `CHANGELOG.md`
  - `project-todo.md`
- Risk: Low. Scroll behavior preserved; forms, API/functions, Netlify config, SEO files, and deploy/export copy were not changed.
- Verification: `git diff --check` passed; local browser smoke checked desktop/mobile widths with no console errors.

- Change: Added AI-ready workspace governance, rules, todo, changelog, gitignore, env template, and workflow docs.
- Agent: Codex
- Files:
  - `ai/ai-session-start.md`
  - `project-rules.md`
  - `project-todo.md`
  - `CHANGELOG.md`
  - `.gitignore`
  - `.env.example`
  - `docs/README-AI-WORKFLOW.md`
  - `docs/GIT-SNAPSHOT-PLAN.md`
  - `docs/WORKSPACE-SETUP.md`
  - `docs/AI-READY-STRUCTURE-REPORT.md`
  - `README.md`
- Risk: Low. Documentation and workspace setup only; production code not changed.
- Verification: File existence and required ignore/template contents checked locally.
