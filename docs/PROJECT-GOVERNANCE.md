# PROJECT GOVERNANCE - Solomiya Energy Landing MVP

Дата: 2026-05-17

## MAIN SOURCE OF TRUTH

`D:\solomiya-landing-mvp`

Це єдина офіційна робоча папка для:

- AI agents
- Claude Code
- Codex
- VSCode
- Netlify workflow review
- audit/documentation tasks

Усі зміни, перевірки, аналіз і майбутні робочі сесії мають стартувати тільки з цієї папки.

## DEPLOY/EXPORT COPY

`C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`

Ця папка є deploy/export snapshot. Вона НЕ є production source і НЕ є source of truth.

Deploy/export copy:

- не редагувати;
- не використовувати як робочу папку;
- не merge без окремого ручного рішення;
- не вважати повною source-структурою проєкту;
- використовувати тільки як read-only reference для audit/diff.

## Rules For AI Agents

- Працювати тільки в `D:\solomiya-landing-mvp`.
- Не редагувати файли поза `D:\solomiya-landing-mvp`, якщо немає окремого прямого дозволу.
- Не редагувати deploy/export copy.
- Не переносити файли з deploy/export copy у main source автоматично.
- Не змінювати production code, forms, Netlify settings або deploy logic без окремого task-specific дозволу.
- Не виконувати `git push` без прямого дозволу.

## Governance Status

Офіційний source-of-truth path:

`D:\solomiya-landing-mvp`

Read-only deploy/export reference:

`C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`

