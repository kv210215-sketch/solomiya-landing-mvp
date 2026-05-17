# FOUND PROJECT FILES - Solomiya Energy Landing MVP

Дата discovery: 2026-05-17  
Режим: пошук, інвентаризація, документування. Production-код не змінювався.

## Executive summary

- Знайдено 10 потенційних папок, які схожі на project/deploy/backup версії Solomiya Energy Landing MVP.
- Основною робочою папкою виглядає `D:\solomiya-landing-mvp`.
- Можливі дублікати є в `C:\Users\Andriy\Downloads`, особливо `Solar Landing Lviv\solomiya-landing-mvp`, `solomiya_package`, `solomiya_brief_*`.
- Backup/deploy версії знайдені в `D:\solomiya-landing-mvp\backup` та `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`.
- Сирий discovery-прохід дав 971 збіг за іменами у дозволених локаціях; значна частина з них є бізнес-документами, загальними solar/energy матеріалами або сторонніми Netlify/SitePilot файлами, тому нижче виділено саме релевантну карту проєкту.

| Шлях | Тип | Розмір | Дата зміни | Ймовірна роль | Ризик дубліката | Коментар |
|---|---|---:|---|---|---|---|
| `D:\solomiya-landing-mvp` | Папка | 310.8 KB | 2026-05-14 23:40:18 | Основна робоча папка/source candidate | Низький | Містить `.git`, production-файли, docs/audit-файли, backup. |
| `D:\solomiya-landing-mvp\index.html` | Файл | 95,364 B | 2026-05-14 23:39:59 | Основний production HTML | Високий | Не змінювати без окремого дозволу. |
| `D:\solomiya-landing-mvp\netlify.toml` | Файл | 295 B | 2026-05-05 09:26:33 | Netlify config | Високий | Може визначати deploy behavior. |
| `D:\solomiya-landing-mvp\_headers` | Файл | 667 B | 2026-05-14 23:40:18 | Netlify headers/security/cache | Середній | Critical production file. |
| `D:\solomiya-landing-mvp\robots.txt` | Файл | 77 B | 2026-05-13 22:23:00 | SEO/robots | Середній | Critical production file. |
| `D:\solomiya-landing-mvp\sitemap.xml` | Файл | 414 B | 2026-05-14 22:26:35 | SEO sitemap | Середній | Critical production file. |
| `D:\solomiya-landing-mvp\api` | Папка | n/a | 2026-05-05 09:26:33 | API/serverless variant | Середній | Містить `api\lead.js`. |
| `D:\solomiya-landing-mvp\functions` | Папка | n/a | 2026-05-05 09:26:34 | Functions variant | Середній | Містить `functions\api\lead.js`. |
| `D:\solomiya-landing-mvp\netlify\functions` | Папка | n/a | 2026-05-13 17:15:00 | Netlify Functions production candidate | Високий | Містить `netlify\functions\lead.js`; новіший за інші lead-файли. |
| `D:\solomiya-landing-mvp\backup` | Папка | ~186 KB | 2026-05-14 23:37:57 | Локальні backup index.html | Середній | Містить 2 `.bak` версії. |
| `D:\solomiya-landing-mvp\backup\index.html.2026-05-14.bak` | Файл | 92,888 B | 2026-05-14 23:17:27 | Старий backup | Середній | Не видаляти до ручної перевірки. |
| `D:\solomiya-landing-mvp\backup\index.html.pre-optimization.bak` | Файл | 93,371 B | 2026-05-14 23:37:57 | Backup перед оптимізацією | Середній | Дуже близький за часом до current `index.html`. |
| `C:\Users\Andriy\Downloads\Solar Landing Lviv` | Папка | 1.71 MB | 2026-05-17 09:09:32 | Можливий старий export/project package | Високий | Містить вкладений `solomiya-landing-mvp`. |
| `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp` | Папка | 1.71 MB | 2026-05-17 09:09:32 | Дублікат project folder | Високий | Має `index.html`, `netlify.toml`, `README.md`, `api`, `functions`, `netlify\functions`. |
| `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\index.html` | Файл | 1,777,057 B | 2026-05-05 09:30:52 | Старіший/великий HTML build | Високий | Значно більший за основний `index.html`; потребує ручного порівняння перед будь-яким рішенням. |
| `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\netlify.toml` | Файл | 295 B | 2026-05-05 09:30:53 | Netlify config duplicate | Високий | Такий самий розмір, як у main folder. |
| `C:\Users\Andriy\Downloads\solomiya_netlify` | Папка | 57.6 KB | 2026-05-17 09:09:32 | Netlify package wrapper | Високий | Містить `netlify_deploy`. |
| `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy` | Папка | 57.6 KB | 2026-05-17 09:09:32 | Deploy/export папка | Високий | Містить deploy-ready `index.html` і `netlify.toml`. |
| `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\index.html` | Файл | 58,438 B | 2026-05-17 00:01:14 | Deploy HTML candidate | Високий | Новіший за main `index.html`, але менший. Перевірити вручну. |
| `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\netlify.toml` | Файл | 550 B | 2026-05-16 17:27:53 | Deploy Netlify config candidate | Високий | Більший за main config; можливі важливі відмінності. |
| `C:\Users\Andriy\Downloads\solomiya_package` | Папка | 61.0 KB | 2026-05-17 09:09:33 | Package/archive extract | Середній | Містить вкладений `solomiya_package\index.html`. |
| `C:\Users\Andriy\Downloads\solomiya_package\solomiya_package\index.html` | Файл | 61,870 B | 2026-05-16 14:51:33 | Packaged HTML duplicate | Середній | Схожий на `Downloads\index.html`. |
| `C:\Users\Andriy\Downloads\index.html` | Файл | 61,870 B | 2026-05-16 15:04:09 | Standalone exported HTML | Високий | Назва generic; легко переплутати з production. |
| `C:\Users\Andriy\Downloads\solomiya_brief_FINAL_localhost` | Папка | 58.0 KB | 2026-05-17 09:09:32 | Localhost package/final brief | Середній | Містить `index.html` 58,587 B. |
| `C:\Users\Andriy\Downloads\solomiya_brief_FINAL_TEMPLATE_QE4RSLH` | Папка | 59.7 KB | 2026-05-17 09:09:32 | Template package | Середній | Містить `index.html` 60,296 B. |
| `C:\Users\Andriy\Downloads\solomiya_brief_TEMPLATE_PREFIX_FIXED` | Папка | 59.2 KB | 2026-05-17 09:09:32 | Template/prefix fix package | Середній | Містить `index.html` 59,784 B. |
| `C:\Users\Andriy\Downloads\solomiya_brief_VERIFIED_PACKAGE` | Папка | 59.6 KB | 2026-05-17 09:09:32 | Verified package candidate | Середній | Містить `index.html` 59,815 B. |
| `C:\Users\Andriy\Downloads\solomiya_brief_emailjs_package (1)` | Папка | ~57 KB | 2026-05-17 09:09:32 | EmailJS package extract | Середній | Містить `solomiya_brief_emailjs_localserver_ready.html`. |
| `C:\Users\Andriy\Downloads\Solomiya Energy MVP.html` | Файл | 1,776,132 B | 2026-05-08 15:09:56 | Старий large HTML MVP | Високий | Схожий на великий `Solar Landing Lviv` HTML. |
| `C:\Users\Andriy\Downloads\solomiya-energy-landing-mvp.html` | Файл | 30,737 B | 2026-05-08 15:10:03 | Старий standalone MVP | Середній | Може бути ранньою версією. |
| `C:\Users\Andriy\Downloads\solomiya_brief_emailjs_ready.html` | Файл | 49,197 B | 2026-05-16 11:49:28 | EmailJS draft | Середній | Не production без ручної перевірки. |
| `C:\Users\Andriy\Downloads\solomiya_brief_emailjs_integrated.html` | Файл | 57,615 B | 2026-05-16 11:56:51 | EmailJS integrated draft | Середній | Може містити форму/інтеграцію. |
| `C:\Users\Andriy\Downloads\solomiya_brief_emailjs_fixed.html` | Файл | 56,435 B | 2026-05-16 12:11:56 | EmailJS fixed draft | Середній | Може містити форму/інтеграцію. |
| `C:\Users\Andriy\Downloads\solomiya_brief_emailjs_localserver_ready.html` | Файл | 58,587 B | 2026-05-16 12:35:02 | Local server ready draft | Середній | Схожий на FINAL localhost package. |
| `C:\Users\Andriy\Downloads\solomiya_brief.html` | Файл | 55,958 B | 2026-05-16 11:38:40 | Brief draft | Середній | Standalone HTML. |
| `C:\Users\Andriy\Downloads\solomiya_brief (1).html` | Файл | 61,870 B | 2026-05-16 14:44:03 | Brief duplicate | Середній | Same size as `Downloads\index.html`. |
| `C:\Users\Andriy\Downloads\solomiya_energy_brief_production.html` | Файл | 48,399 B | 2026-05-16 09:25:00 | File named production brief | Високий | Назва suggests production, але не в main folder. |
| `C:\Users\Andriy\Downloads\solomiya_energy_client_brief.html` | Файл | 40,032 B | 2026-05-16 00:53:51 | Client brief draft | Низький/середній | Може бути контентним джерелом, не production. |
| `C:\Users\Andriy\Downloads\_SORTED\Archives\solomiya_netlify.zip` | Файл | 14,738 B | 2026-05-16 15:04:17 | Zip архів deploy/package | Середній | Старіша zip-версія. |
| `C:\Users\Andriy\Downloads\_SORTED\Archives\solomiya_netlify (1).zip` | Файл | 14,738 B | 2026-05-16 17:14:22 | Zip архів deploy/package | Середній | Можливий повторний download. |
| `C:\Users\Andriy\Downloads\_SORTED\Archives\solomiya_package.zip` | Файл | 14,697 B | 2026-05-16 14:44:06 | Zip архів package | Середній | Пов'язаний із `solomiya_package`. |
| `C:\Users\Andriy\OneDrive\Документи\proposal_solomiya_energy` | Папка | n/a | 2026-03-17 15:44:34 | Комерційна пропозиція/контент | Низький | Не схоже на landing codebase. Не відкривалось як вміст. |
| `F:\ДИСК D\WORK\Solomiya_Energy` | Папка | n/a/empty | 2026-05-17 12:43:46 | Business/work structure | Низький | Має підпапки Branding/Clients/Contracts/etc.; не схоже на MVP codebase. |

## 1. Основна робоча папка

Найбільш ймовірний основний проєкт:

`D:\solomiya-landing-mvp`

Причини:

- це явно заданий основний шлях;
- містить `.git`, `.claude`, `index.html`, `netlify.toml`, `_headers`, `robots.txt`, `sitemap.xml`;
- має audit/checklist файли: `README.md`, `DEPLOY_CHECKLIST.md`, `FINAL_AUDIT.md`, `FIXES_APPLIED.md`;
- має локальну backup-папку для `index.html`;
- має кілька serverless/function варіантів, які треба не чіпати без окремого рішення.

## 2. Можливі дублікати

Найбільш ризикові дублікати:

- `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`
- `C:\Users\Andriy\Downloads\solomiya_package\solomiya_package`
- `C:\Users\Andriy\Downloads\index.html`
- `C:\Users\Andriy\Downloads\Solomiya Energy MVP.html`
- `C:\Users\Andriy\Downloads\solomiya_energy_brief_production.html`
- `C:\Users\Andriy\Downloads\solomiya_brief_*`

Особливо важливо: `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\index.html` має дату 2026-05-17 00:01:14, тобто новіший за `D:\solomiya-landing-mvp\index.html`, але це deploy/export кандидат, не обов'язково source of truth.

## 3. Старі backup

Локальні backup у main folder:

- `D:\solomiya-landing-mvp\backup\index.html.2026-05-14.bak` - 92,888 B, 2026-05-14 23:17:27
- `D:\solomiya-landing-mvp\backup\index.html.pre-optimization.bak` - 93,371 B, 2026-05-14 23:37:57

Архівні zip/package кандидати:

- `C:\Users\Andriy\Downloads\_SORTED\Archives\solomiya_netlify.zip`
- `C:\Users\Andriy\Downloads\_SORTED\Archives\solomiya_netlify (1).zip`
- `C:\Users\Andriy\Downloads\_SORTED\Archives\solomiya_package.zip`
- `C:\Users\Andriy\Downloads\_SORTED\Archives\solomiya_brief_*.zip`

## 4. Netlify deploy папки

Знайдені Netlify/deploy кандидати:

- `D:\solomiya-landing-mvp\netlify.toml`
- `D:\solomiya-landing-mvp\_headers`
- `D:\solomiya-landing-mvp\netlify\functions`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\index.html`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\netlify.toml`

Potential issue: deploy папка у Downloads має новіший `index.html` і відмінний за розміром `netlify.toml`, тому перед будь-яким cleanup треба вручну порівняти її з main folder.

## 5. Critical production files

У main folder:

- `D:\solomiya-landing-mvp\index.html`
- `D:\solomiya-landing-mvp\netlify.toml`
- `D:\solomiya-landing-mvp\_headers`
- `D:\solomiya-landing-mvp\api`
- `D:\solomiya-landing-mvp\api\lead.js`
- `D:\solomiya-landing-mvp\functions`
- `D:\solomiya-landing-mvp\functions\api\lead.js`
- `D:\solomiya-landing-mvp\netlify\functions`
- `D:\solomiya-landing-mvp\netlify\functions\lead.js`
- `D:\solomiya-landing-mvp\robots.txt`
- `D:\solomiya-landing-mvp\sitemap.xml`

Possible duplicate critical files outside main folder:

- `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\index.html`
- `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\netlify.toml`
- `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\api`
- `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\functions`
- `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\netlify\functions`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\index.html`
- `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\netlify.toml`
- `C:\Users\Andriy\Downloads\index.html`

## 6. Файли, які не можна чіпати без окремого дозволу

- `D:\solomiya-landing-mvp\index.html`
- `D:\solomiya-landing-mvp\netlify.toml`
- `D:\solomiya-landing-mvp\_headers`
- `D:\solomiya-landing-mvp\robots.txt`
- `D:\solomiya-landing-mvp\sitemap.xml`
- `D:\solomiya-landing-mvp\api\lead.js`
- `D:\solomiya-landing-mvp\functions\api\lead.js`
- `D:\solomiya-landing-mvp\netlify\functions\lead.js`
- будь-які форми або EmailJS/lead capture файли;
- будь-які `.env`, secrets, deploy credentials, API keys;
- будь-які файли в Downloads, які можуть бути єдиною новішою deploy/export версією, до ручного порівняння.

## 7. Потенційні ризики

- Дублікати в `Downloads` можуть заплутати Claude/Codex/людину щодо актуального source of truth.
- Production-файли існують у кількох місцях: main folder, Downloads project extract, Netlify deploy export.
- `netlify_deploy` у Downloads має новіший `index.html` за main folder, але може бути export-only версією.
- `netlify.toml` у deploy папці має інший розмір, ніж main config; це може означати різну поведінку Netlify.
- Є 3 варіанти lead function у main folder: `api\lead.js`, `functions\api\lead.js`, `netlify\functions\lead.js`.
- Backup `index.html.pre-optimization.bak` дуже близький за часом до current `index.html`; його не можна видаляти до diff-аудиту.
- Standalone `Downloads\index.html` має generic назву і може бути випадково взятий як production-файл.
- OneDrive/F-drive містять Solomiya Energy бізнес-документи; їх не варто змішувати з landing codebase.

## 8. Рекомендації для наступного етапу

Не виконувати автоматично; тільки рекомендований план:

- Зробити `D:\solomiya-landing-mvp` єдиним source of truth, якщо ручний diff не покаже, що новіша deploy версія містить потрібні production changes.
- Порівняти вручну:
  - `D:\solomiya-landing-mvp\index.html`
  - `C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy\index.html`
  - `C:\Users\Andriy\Downloads\index.html`
  - `C:\Users\Andriy\Downloads\Solar Landing Lviv\solomiya-landing-mvp\index.html`
- Порівняти вручну `netlify.toml` між main folder і `netlify_deploy`.
- Вирішити, який lead function є production path: `api`, `functions\api`, чи `netlify\functions`.
- Залишити `D:\solomiya-landing-mvp\backup` як local backup до завершення cleanup.
- Перенести або архівувати Downloads-дублікати тільки після ручного підтвердження, що main folder містить найактуальнішу working version.
- Для Claude Code підготувати структуру з чіткими правилами:
  - source root: `D:\solomiya-landing-mvp`
  - docs root: `D:\solomiya-landing-mvp\docs`
  - no-edit list: production HTML, Netlify config, headers, forms, env/secrets
  - compare-only list: Downloads duplicates and deploy exports

