# DO NOT TOUCH - Solomiya Energy Landing MVP

Дата: 2026-05-17

Цей файл визначає зони, які не можна редагувати, переміщати, видаляти або merge-ити без окремого прямого дозволу.

## Deploy Copy

Read-only deploy/export snapshot:

`C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`

Не можна:

- редагувати;
- видаляти;
- переміщати;
- перейменовувати;
- використовувати як source-of-truth;
- автоматично merge-ити у `D:\solomiya-landing-mvp`.

## Old Backup

Не чіпати без окремого дозволу:

- `D:\solomiya-landing-mvp\backup`
- `D:\solomiya-landing-mvp\backup\index.html.2026-05-14.bak`
- `D:\solomiya-landing-mvp\backup\index.html.pre-optimization.bak`

## Production Forms

Не змінювати без окремого дозволу:

- form markup;
- `name`, `id`, hidden inputs;
- Netlify Forms attributes;
- honeypot fields;
- lead capture logic;
- EmailJS or form submission logic;
- validation and success/error behavior.

## Netlify Settings And Deploy Logic

Не змінювати без окремого дозволу:

- `D:\solomiya-landing-mvp\netlify.toml`
- `D:\solomiya-landing-mvp\_headers`
- any `_redirects` file
- Netlify dashboard/site settings
- build/publish settings
- redirects
- headers
- cache/security config

## API And Functions

Не змінювати без окремого дозволу:

- `D:\solomiya-landing-mvp\api`
- `D:\solomiya-landing-mvp\api\lead.js`
- `D:\solomiya-landing-mvp\functions`
- `D:\solomiya-landing-mvp\functions\api\lead.js`
- `D:\solomiya-landing-mvp\netlify\functions`
- `D:\solomiya-landing-mvp\netlify\functions\lead.js`

## Core Production Files

Не змінювати без окремого дозволу:

- `D:\solomiya-landing-mvp\index.html`
- `D:\solomiya-landing-mvp\robots.txt`
- `D:\solomiya-landing-mvp\sitemap.xml`

## Secrets

Не відкривати і не змінювати без окремого дозволу:

- `.env`
- API keys
- tokens
- credentials
- Netlify auth/session files

