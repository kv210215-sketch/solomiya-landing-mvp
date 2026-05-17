# Solomiya Energy — Landing MVP

**Project:** Solomiya Energy · Сонячні електростанції під ключ, Львів і область
**MVP build date:** 2025-05-04
**Status:** Ready to publish · Lead form wired to `/api/lead` (Telegram)

---

## Contacts

- **Phone:** +38 067 555 40 00 — `tel:+380675554000`
- **Email:** andriy555solar@gmail.com
- **Service area:** Львів та Львівська область
- **Legal:** ТОВ «Соломія енергозбереження» · ЄДРПОУ 40446535

---

## Folder layout

```
solomiya-landing-mvp/
├── index.html                       ← single-file production build (all CSS/JS inlined)
├── functions/
│   └── api/
│       └── lead.js                  ← Cloudflare Pages Function (POST /api/lead)
├── api/
│   └── lead.js                      ← Vercel Serverless Function (POST /api/lead)
├── netlify/
│   └── functions/
│       └── lead.js                  ← Netlify Function
├── netlify.toml                     ← Netlify routing: /api/lead → /.netlify/functions/lead
└── README.md
```

You only need ONE of the three function files — pick the platform you're deploying to. The others are harmless leftovers but you can delete them for cleanliness.

---

## Step 1 — Get Telegram credentials

### 1a. Create a bot
1. Open [@BotFather](https://t.me/BotFather) in Telegram
2. Send `/newbot`
3. Pick a display name (e.g. "Solomiya Leads")
4. Pick a username ending in `_bot` (e.g. `solomiya_leads_bot`)
5. BotFather replies with your **bot token** — looks like `7891234567:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
6. **Save it securely.** Treat it like a password.

### 1b. Get your chat ID

**Option 1 — personal chat (simplest):**
1. Open your new bot's profile → click **Start**
2. Send any message (e.g. "hi")
3. In a browser, open: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
4. Find `"chat":{"id": 123456789, ...}` in the JSON. That number is your `TELEGRAM_CHAT_ID`.

**Option 2 — group / channel:**
1. Add the bot to the group/channel as admin
2. Send a message in the group
3. Hit the same `getUpdates` URL
4. Group IDs are negative (e.g. `-1001234567890`)

---

## Step 2 — Deploy (pick one)

### A. Cloudflare Pages (recommended — fastest, free, generous limits)

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Drag this entire `solomiya-landing-mvp/` folder
3. After deploy, open **Settings → Environment variables** → **Production**
4. Add three vars:
   - `TELEGRAM_BOT_TOKEN` = `7891234567:AAH...`
   - `TELEGRAM_CHAT_ID` = `123456789`
   - `ALLOWED_ORIGIN` = `https://your-domain.com` (or `*` to allow all — fine for MVP)
5. Trigger a redeploy (Deployments → ⋯ → Retry deployment) so functions pick up env vars
6. Test: `curl -X POST https://your-site.pages.dev/api/lead -H "Content-Type: application/json" -d '{"name":"Test","phone":"+380675554000","type":"Дім","time":"asap"}'`

Cloudflare auto-routes `functions/api/lead.js` → `/api/lead`. No build config needed.

### B. Vercel

1. https://vercel.com → **Add New** → **Project** → **Import** → **Upload folder**
2. Drag `solomiya-landing-mvp/`
3. After deploy: **Settings → Environment Variables** → add the same three (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `ALLOWED_ORIGIN`)
4. Redeploy
5. Vercel routes `api/lead.js` → `/api/lead` automatically

### C. Netlify

1. https://app.netlify.com/drop → drop the folder
2. Site settings → **Environment variables** → add the three
3. **Trigger deploy → Clear cache and deploy site** (so functions get the env vars)
4. The `netlify.toml` redirect makes `/api/lead` work the same as on other platforms

### D. Static-only (no Telegram backend yet)
Drop only `index.html` to any static host (Tilda T123 HTML block, GitHub Pages, your own server). Form will still submit and show a thank-you screen, but **leads will not be delivered** — `fetch /api/lead` fails silently and the UI falls back to thank-you. Use this only as a placeholder.

---

## Step 3 — Connect a custom domain

After deploy, all three platforms have a "Custom domains" / "Domains" tab in site settings. Point your DNS A/CNAME record there as instructed. SSL is automatic.

---

## Step 4 — Verify after publish

### Smoke tests
- [ ] Page opens at the public URL
- [ ] H1 "Сонячна електростанція під ключ у Львові" visible
- [ ] No horizontal scroll on mobile (test 360 / 390 / 414 px)
- [ ] Tap phone link → opens dialer
- [ ] Tap email link → opens mail
- [ ] Click "Отримати розрахунок" in nav → scrolls to form, focuses phone input
- [ ] Submit a test lead with your real phone number
- [ ] Telegram message arrives in target chat within ~2 seconds

### Test lead payload
```bash
curl -X POST https://YOUR-SITE/api/lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "phone": "+380 67 555 40 00",
    "type": "Дім",
    "time": "Якнайшвидше",
    "power": "unknown",
    "page": "https://YOUR-SITE/",
    "ts": "2025-05-04T12:00:00Z"
  }'
```
Expected: `{"success":true}` + a Telegram message.

---

## Lead payload fields

The frontend POSTs this JSON to `/api/lead`:

| Field   | Source                          | Example                           |
|---------|---------------------------------|-----------------------------------|
| `name`  | "Імʼя" input                    | `"Андрій"`                        |
| `phone` | "Телефон" input (auto-formatted)| `"+380 67 555 40 00"`             |
| `type`  | radio (Дім / Бізнес)            | `"Дім"`                           |
| `time`  | radio (Якнайшвидше / Сьогодні / Завтра) | `"Якнайшвидше"`           |
| `power` | (reserved for future use)       | `"unknown"`                       |
| `page`  | `location.href`                 | `"https://solomiya.com/"`         |
| `ts`    | ISO timestamp                   | `"2025-05-04T12:34:56.789Z"`      |
| `ua`    | User agent                      | `"Mozilla/5.0 ..."`               |

Telegram message is HTML-formatted with all fields, plus a clickable `tel:` link on the phone number.

---

## Security checklist

- ✅ Bot token NEVER appears in `index.html` or any frontend code
- ✅ Token & chat ID stored only in hosting provider's environment variables panel
- ✅ Server validates `name` and `phone` are present (returns 400 otherwise)
- ✅ HTML escaping prevents Telegram-side injection
- ✅ CORS origin can be locked to your domain via `ALLOWED_ORIGIN` env var (recommended after launch)
- ⚠️ No rate-limiting yet — if you start getting spam, add Cloudflare Turnstile or hCaptcha
- ⚠️ No bot-trap honeypot field yet — easy to add if needed

### If your token leaks
1. Open BotFather → `/revoke` → pick the bot → confirm
2. BotFather issues a fresh token
3. Update `TELEGRAM_BOT_TOKEN` in your hosting env vars
4. Redeploy

---

## Future channels (next steps)

The same `/api/lead` endpoint can fan out to multiple destinations. Edit the chosen `lead.js` to also:

- **Email backup** (Resend, Postmark, SendGrid — all have free tiers)
- **Google Sheets** — create a Service Account, share a sheet with it, append a row via the Sheets API
- **CRM** — POST to your CRM's lead-create endpoint (HubSpot, Pipedrive, Bitrix24…)
- **Slack / Discord** — same pattern as Telegram (incoming-webhook URL stored as env var)

Just say which channel and I'll wire it up.

---

## Pre-launch checklist before paid traffic

- [ ] Telegram delivery tested end-to-end with a real phone
- [ ] Custom domain attached + HTTPS green
- [ ] GA4 property created and tag added to `<head>`
- [ ] Meta Pixel installed (if Facebook/Instagram ads)
- [ ] `ALLOWED_ORIGIN` env var locked to your real domain (not `*`)
- [ ] Real product photos replacing the placeholder SVG icons
- [ ] Real installation photos in the Cases section
- [ ] Privacy policy page linked from footer (required by Meta and Google)
- [ ] Bot anti-spam (Turnstile / honeypot) if running broad ads
---

## Source of Truth

Official source-of-truth workspace:

`D:\solomiya-landing-mvp`

Deploy/export copy:

`C:\Users\Andriy\Downloads\solomiya_netlify\netlify_deploy`

The deploy/export copy is not the production source. It is read-only reference only and must not be edited, merged, or used as the main workspace.

## Project Structure

Key folders:

- `ai` - AI session startup instructions.
- `assets` - reserved for project assets.
- `backup` - existing backup files; do not touch without permission.
- `backups` - reserved for future non-private backups.
- `docs` - governance, audit, and workflow documentation.
- `scripts` - reserved for future non-destructive scripts.
- `api`, `functions`, `netlify/functions` - production/API function areas; do not edit without explicit permission.

Key governance files:

- `project-rules.md`
- `project-todo.md`
- `CHANGELOG.md`
- `.aiignore`
- `.gitignore`
- `.env.example`

## AI Workflow

Before Claude Code, Codex, VS Code, Cursor, or any AI agent starts work, read:

- `ai/ai-session-start.md`
- `docs/PROJECT-GOVERNANCE.md`
- `docs/SAFE-WORKFLOW.md`
- `docs/DO-NOT-TOUCH.md`
- `docs/README-AI-WORKFLOW.md`
- `project-rules.md`

All AI agents must work only in `D:\solomiya-landing-mvp`, make small PR-style changes, preserve production stability, and update docs after important changes.

## Safety Rules

- Do not change `index.html` without explicit permission.
- Do not change forms or lead capture logic without explicit permission.
- Do not change `netlify.toml`, `_headers`, redirects, API/functions, or Netlify settings without explicit permission.
- Do not merge deploy/export copy.
- Do not delete or move backups.
- Do not commit secrets.
- Do not run deploy, npm install, migrations, or `git push` without explicit permission.

## Deploy Notes

This workspace contains source and deployment support files, but deploy operations require a separate explicit task.

Before any deploy-related work:

- confirm actual Netlify production state;
- confirm whether production is the landing site or the brief/form page;
- review `docs/SOURCE-OF-TRUTH-ANALYSIS.md`;
- verify `.env` values outside git;
- test forms after authorized form/API/function changes.

## Important Docs

- `docs/FOUND-PROJECT-FILES.md`
- `docs/SOURCE-OF-TRUTH-ANALYSIS.md`
- `docs/PROJECT-GOVERNANCE.md`
- `docs/SAFE-WORKFLOW.md`
- `docs/DO-NOT-TOUCH.md`
- `docs/README-AI-WORKFLOW.md`
- `docs/GIT-SNAPSHOT-PLAN.md`
- `docs/WORKSPACE-SETUP.md`
- `docs/AI-READY-STRUCTURE-REPORT.md`
