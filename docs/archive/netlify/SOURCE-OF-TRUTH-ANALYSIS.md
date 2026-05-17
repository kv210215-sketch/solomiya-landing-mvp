# SOURCE OF TRUTH ANALYSIS - Solomiya Energy

Дата audit: 2026-05-17  
Режим: analysis/report only. Файли проєкту, Netlify settings, форми та git не змінювались.

Порівнювались:

1. `D:\solomiya-landing-mvp`
2. `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`

## Executive summary

- `D:\solomiya-landing-mvp` виглядає як основна робоча/source папка: має `.git`, production/support файли, `README.md`, audit/checklist файли, `api`, `functions`, `netlify\functions`, `robots.txt`, `sitemap.xml`, `_headers`.
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy` виглядає як deploy/export copy: містить тільки `index.html`, `netlify.toml`, `_redirects`.
- Deploy/export папка має newer `index.html` і `netlify.toml`, але вона неповна як source folder і не має функцій, `_headers`, SEO файлів, README.
- Це НЕ безпечний автоматичний merge: `index.html` і `netlify.toml` суттєво відрізняються, а deploy `index.html` схожий на окрему сторінку-бриф із Netlify Forms, тоді як main `index.html` схожий на основний landing site.
- Ризик втрати production state є: deploy папка може відображати новіший фактично задеплоєний стан, але main folder має повніший production/source контекст.

## 1. Яка папка виглядає основною

Основною/source-of-truth candidate виглядає:

`D:\solomiya-landing-mvp`

Причини:

- повна структура проєкту;
- є `.git`;
- є `index.html`, `netlify.toml`, `_headers`, `robots.txt`, `sitemap.xml`;
- є serverless/function файли:
  - `api\lead.js`
  - `functions\api\lead.js`
  - `netlify\functions\lead.js`
- є документація та audit-файли:
  - `README.md`
  - `DEPLOY_CHECKLIST.md`
  - `FINAL_AUDIT.md`
  - `FIXES_APPLIED.md`
- main `netlify.toml` явно налаштований на `functions = "netlify/functions"` і redirect `/api/lead`.

Важлива примітка: timestamp папки `D:\solomiya-landing-mvp` не є production-сигналом, бо `docs` були створені під час discovery/audit. Для production-висновків використані конкретні файли.

## 2. Яка папка схожа на deploy/export

Deploy/export copy:

`C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`

Причини:

- назва `netlify_deploy`;
- містить мінімальний deploy набір:
  - `index.html`
  - `netlify.toml`
  - `_redirects`
- не має source/documentation/support структури;
- не має `api`, `functions`, `netlify\functions`, `_headers`, `robots.txt`, `sitemap.xml`, `README.md`.

## 3. Порівняння файлів

| Файл/папка | Main: `D:\solomiya-landing-mvp` | Deploy: `...\netlify_deploy` | Висновок |
|---|---:|---:|---|
| `index.html` | Є, 95,364 B, 2026-05-14 23:39:59 | Є, 58,438 B, 2026-05-17 00:01:14 | Відрізняється; deploy новіший, але інший тип сторінки. |
| `netlify.toml` | Є, 295 B, 2026-05-05 09:26:33 | Є, 550 B, 2026-05-16 17:27:53 | Відрізняється; deploy новіший і має inline headers. |
| `_headers` | Є, 667 B, 2026-05-14 23:40:18 | Немає | Missing у deploy folder. |
| `functions` | Є | Немає | Missing у deploy folder. |
| `api` | Є | Немає | Missing у deploy folder. |
| `robots.txt` | Є, 77 B, 2026-05-13 22:23:00 | Немає | Missing у deploy folder. |
| `sitemap.xml` | Є, 414 B, 2026-05-14 22:26:35 | Немає | Missing у deploy folder. |
| `README.md` | Є, 8,261 B, 2026-05-05 09:26:32 | Немає | Missing у deploy folder. |
| `_redirects` | Немає | Є, 24 B, 2026-05-16 16:49:52 | Deploy-only file. |

Main-only production/support файли:

- `_headers`
- `api\lead.js`
- `functions\api\lead.js`
- `netlify\functions\lead.js`
- `robots.txt`
- `sitemap.xml`
- `README.md`
- `DEPLOY_CHECKLIST.md`
- `FINAL_AUDIT.md`
- `FIXES_APPLIED.md`

Deploy-only files:

- `_redirects`

## 4. Які файли відрізняються

### `index.html`

Diff stat:

- 1 file changed
- 1012 insertions
- 1326 deletions
- deploy file is smaller: 58,438 B vs 95,364 B

Content signal:

- Main title: `Сонячні електростанції під ключ у Львові — Solomiya Energy`
- Deploy title: `Бриф — Solomiya Energy`
- Deploy `index.html` містить `data-netlify="true"`, `netlify-honeypot`, hidden `form-name = solomiya-brief`, `submission_source = netlify-forms`.
- Main `index.html` виглядає як SEO landing page для Solomiya Energy.

Висновок: це не просто новіша версія того самого файлу; deploy `index.html` схожий на окремий brief/form page.

### `netlify.toml`

Diff stat:

- 1 file changed
- 12 insertions
- 9 deletions

Main `netlify.toml`:

- `publish = "."`
- `functions = "netlify/functions"`
- redirect `/api/lead` -> `/.netlify/functions/lead`

Deploy `netlify.toml`:

- `publish = "."`
- inline `[[headers]]` security/cache config
- немає `functions = "netlify/functions"`
- немає redirect `/api/lead`

Висновок: deploy config не еквівалентний main config. Він схожий на static deploy config для форми/SPA, а не на повний source config із Netlify Function.

## 5. Які файли newer

Newer у deploy/export папці:

- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\index.html` - 2026-05-17 00:01:14
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\netlify.toml` - 2026-05-16 17:27:53
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\_redirects` - 2026-05-16 16:49:52

Newer у main для target-файлів:

- `_headers` - 2026-05-14 23:40:18; deploy version missing
- `sitemap.xml` - 2026-05-14 22:26:35; deploy version missing
- `robots.txt` - 2026-05-13 22:23:00; deploy version missing
- `netlify\functions\lead.js` - 2026-05-13 17:15:00; deploy version missing

Important: newer timestamp у deploy папці не означає автоматично source-of-truth. Він може означати пізніший export/package.

## 6. Missing files

Missing у deploy/export папці:

- `_headers`
- `functions`
- `api`
- `robots.txt`
- `sitemap.xml`
- `README.md`
- `netlify\functions\lead.js`
- audit/checklist файли

Missing у main folder порівняно з deploy:

- `_redirects`

## 7. Чи це deploy copy

Так, `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy` дуже схожа на deploy/export copy.

Ознаки:

- мінімальна структура;
- відсутність source/docs/functions;
- назва `netlify_deploy`;
- наявність `_redirects`;
- config більше схожий на static Netlify export із headers, без functions directory.

## 8. Чи безпечно об'єднувати

Ні, автоматично об'єднувати небезпечно.

Причини:

- `index.html` описує різні сценарії: main landing site vs deploy brief/form page;
- deploy `netlify.toml` прибирає functions mapping `/api/lead`;
- main має `_headers`, deploy має inline headers у `netlify.toml`;
- deploy має `_redirects`, main не має;
- deploy не має SEO файлів і function files;
- можливо, deploy папка є фактичним останнім production export для окремої brief/form версії.

Рекомендовано тільки manual diff review, без copy/merge до рішення людини.

## 9. Що НЕ МОЖНА чіпати без окремого дозволу

- `D:\solomiya-landing-mvp\index.html`
- `D:\solomiya-landing-mvp\netlify.toml`
- `D:\solomiya-landing-mvp\_headers`
- `D:\solomiya-landing-mvp\robots.txt`
- `D:\solomiya-landing-mvp\sitemap.xml`
- `D:\solomiya-landing-mvp\api\lead.js`
- `D:\solomiya-landing-mvp\functions\api\lead.js`
- `D:\solomiya-landing-mvp\netlify\functions\lead.js`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\index.html`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\netlify.toml`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\_redirects`
- будь-які форми, hidden form fields, Netlify Forms attributes, EmailJS/lead capture logic;
- будь-які `.env`, secrets, deploy tokens, Netlify account/site settings.

## 10. Production state risk

Є ризик втрати production state, якщо:

- замінити main `index.html` deploy `index.html` без розуміння, що це інша brief/form page;
- замінити main `netlify.toml` deploy config і втратити `/api/lead` function route;
- видалити deploy папку, якщо вона є єдиним локальним знімком фактично задеплоєної brief/form версії;
- ігнорувати `_redirects`, якщо він був потрібний для SPA/static deploy;
- вважати main folder єдиною production версією без перевірки фактичного Netlify deploy.

## 11. Рекомендована структура

Не виконувати автоматично; тільки рекомендація:

- Source of truth candidate:
  - `D:\solomiya-landing-mvp`
- Keep as deploy snapshot until manual verification:
  - `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`
- У main docs залишити audit-файли:
  - `D:\solomiya-landing-mvp\docs\FOUND-PROJECT-FILES.md`
  - `D:\solomiya-landing-mvp\docs\SOURCE-OF-TRUTH-ANALYSIS.md`
- Якщо brief/form page справді є production, створити окреме рішення на наступному етапі:
  - або окрема підпапка/source для brief form;
  - або окрема Netlify site/deploy package;
  - або ручний merge після diff review.
- Перед будь-яким cleanup вручну перевірити фактичний Netlify production deploy: який `index.html`, який routing, чи використовується Netlify Forms, чи потрібна `/.netlify/functions/lead`.

## Bottom line

`D:\solomiya-landing-mvp` є найкращим source-of-truth candidate для повного проєкту.  
`C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy` є newer deploy/export snapshot, але не повний source project.  
Автоматичне об'єднання небезпечне; потрібна ручна перевірка фактичного Netlify production state.

