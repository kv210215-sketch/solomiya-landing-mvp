# SAFE WORKFLOW - Solomiya Energy Landing MVP

Дата: 2026-05-17

## Source Folder

Усі інструменти та AI agents мають працювати тільки в:

`D:\solomiya-landing-mvp`

Deploy/export copy у Downloads не є робочою папкою.

## Claude Code Workflow

- Відкривати тільки `D:\solomiya-landing-mvp`.
- Перед будь-якими змінами читати `docs\PROJECT-GOVERNANCE.md`, `docs\DO-NOT-TOUCH.md`, `docs\SOURCE-OF-TRUTH-ANALYSIS.md`.
- Для analysis tasks створювати звіти тільки в `docs`.
- Не змінювати `index.html`, forms, `netlify.toml`, `_headers`, API/functions без окремого дозволу.
- Не використовувати `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy` як source.

## Codex Workflow

- Робочий каталог: `D:\solomiya-landing-mvp`.
- Перед редагуванням перевіряти scope task-а.
- Для governance/audit задач створювати тільки requested docs.
- Не робити merge deploy copy.
- Не запускати destructive commands.
- Не робити `git push`.
- Якщо task вимагає production-файлів, спершу зафіксувати ризик і отримати окремий дозвіл.

## VSCode Workflow

- Відкривати workspace root: `D:\solomiya-landing-mvp`.
- Не відкривати Downloads deploy copy як workspace root.
- Якщо потрібно порівняти deploy copy, робити це read-only.
- Не зберігати випадкові зміни в production файлах.
- Перед cleanup або rename перевіряти governance docs.

## Netlify Workflow

- Не змінювати Netlify settings без окремого task-specific дозволу.
- Не змінювати `netlify.toml`, `_headers`, `_redirects`, API/functions або form attributes без окремого дозволу.
- Не вважати deploy/export copy source-of-truth.
- Перед деплоєм вручну підтвердити, яка сторінка має бути production: landing site чи brief/form page.

## Do Not Touch Without Explicit Permission

- `index.html`
- forms and hidden form fields
- `netlify.toml`
- `_headers`
- `_redirects`
- `api`
- `functions`
- `netlify\functions`
- `.env` або secrets
- deploy/export copy in Downloads
- old backups

## Avoiding Chaos Engineering

- One source folder: `D:\solomiya-landing-mvp`.
- One purpose per task.
- No automatic merge from Downloads.
- No cleanup before manual verification.
- No production edits during discovery/audit/governance tasks.
- No deploy changes mixed with content changes.
- No AI agent should infer that newer timestamp means source-of-truth.

