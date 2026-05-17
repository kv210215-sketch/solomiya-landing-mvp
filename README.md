# Solomiya Energy — Landing MVP

**Project:** Solomiya Energy · Сонячні електростанції під ключ, Львів і область  
**Status:** **Live** · Lead form → `/api/lead` → Telegram  
**Production:** https://solomiya-energy-landing.pages.dev/ (Cloudflare Pages)

---

## Contacts

- **Phone:** +38 067 555 40 00 — `tel:+380675554000`
- **Email:** andriy555solar@gmail.com
- **Service area:** Львів та Львівська область
- **Legal:** ТОВ «Соломія енергозбереження» · ЄДРПОУ 40446535

---

## Production architecture

```
index.html  →  POST /api/lead  →  functions/api/lead.js  →  Telegram
```

| Topic | Document |
|-------|----------|
| Architecture | [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) |
| Telegram / env / testing | [`docs/TELEGRAM-INTEGRATION.md`](docs/TELEGRAM-INTEGRATION.md) |
| Protected files | [`docs/DO-NOT-TOUCH.md`](docs/DO-NOT-TOUCH.md) |

**Do not change** `index.html` form submit logic, `fetch('/api/lead')`, or `functions/api/lead.js` without explicit approval and full QA.

---

## Folder layout (production-relevant)

```
solomiya-landing-mvp/
├── index.html                 ← single-file landing (CSS/JS inlined)
├── functions/api/lead.js      ← Cloudflare Pages Function (ACTIVE)
├── _headers                   ← security / CSP
├── robots.txt, sitemap.xml
├── favicon.*, og-image.jpg, apple-touch-icon.png, manifest.json
├── api/lead.js                ← legacy (Vercel) — not used
├── netlify/                   ← legacy (Netlify) — see docs/archive/netlify/
└── docs/
```

---

## Cloudflare Pages (current deployment)

### 1. Telegram credentials (one-time)

1. Create a bot via [@BotFather](https://t.me/BotFather) → save **bot token** securely.
2. Start the bot in your target chat; get **chat ID** via `getUpdates` (see [`docs/TELEGRAM-INTEGRATION.md`](docs/TELEGRAM-INTEGRATION.md)).

### 2. Deploy / update site

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → your project.
2. Connect this GitHub repo **or** upload the project folder.
3. **Settings → Environment variables → Production:**
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `ALLOWED_ORIGIN` (optional; e.g. `https://solomiya-energy-landing.pages.dev`)
4. Redeploy after env changes so `functions/api/lead.js` picks them up.

Cloudflare routes `functions/api/lead.js` → `/api/lead` automatically. No build command required.

### 3. Smoke test

```bash
curl -sS -X POST "https://solomiya-energy-landing.pages.dev/api/lead" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"+380675554000","type":"Будинок","time":"Якнайшвидше","power":"5-10 кВт","page":"https://solomiya-energy-landing.pages.dev/","ts":"2026-05-18T12:00:00.000Z"}'
```

Expected: `{"success":true}` and a Telegram message within a few seconds.

### 4. Custom domain

In Cloudflare Pages → **Custom domains**, attach your domain (e.g. `www.solomiya-energy.com`). Update `ALLOWED_ORIGIN` if you lock CORS.

---

## Legacy platforms (not production)

| Platform | Files | Notes |
|----------|-------|-------|
| **Netlify** | `netlify.toml`, `netlify/functions/lead.js` | Archived — [`docs/archive/netlify/README.md`](docs/archive/netlify/README.md) |
| **Vercel** | `api/lead.js` | Not used |

Do not deploy to Netlify for this project unless explicitly replatforming.

---

## Lead payload fields

| Field | Source |
|-------|--------|
| `name` | `#fname` (server requires non-empty) |
| `phone` | `#fphone` (required) |
| `type` | radio |
| `time` | callback preference |
| `power` | radio |
| `page` | `location.href` |
| `ts` | ISO timestamp |

---

## Security

- Bot token and chat ID **only** in Cloudflare env — never in git or `index.html`.
- If token leaks: BotFather `/revoke` → update Cloudflare env → redeploy.
- See [`docs/TELEGRAM-INTEGRATION.md`](docs/TELEGRAM-INTEGRATION.md) for troubleshooting.

---

## Source of truth & AI workflow

- **Repo path:** `D:\solomiya-landing-mvp`
- **GitHub:** `kv210215-sketch/solomiya-landing-mvp`
- Before agent work: `ai/ai-session-start.md`, `project-rules.md`, `docs/DO-NOT-TOUCH.md`, `docs/ARCHITECTURE.md`

---

## Important docs

- `docs/ARCHITECTURE.md` — production stack
- `docs/TELEGRAM-INTEGRATION.md` — bot flow and env
- `docs/PROJECT-GOVERNANCE.md` — governance
- `docs/archive/` — superseded audit and Netlify guides
