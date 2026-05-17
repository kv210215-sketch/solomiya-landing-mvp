# Telegram Integration — Solomiya Energy Landing MVP

**Status:** Live and stable on Cloudflare Pages  
**Production URL:** https://solomiya-energy-landing.pages.dev/

---

## Flow

```
Browser form (#mainForm)
        ↓
  POST /api/lead  (JSON)
        ↓
functions/api/lead.js  (Cloudflare Pages Function)
        ↓
  api.telegram.org/bot…/sendMessage
        ↓
  Telegram bot → target chat (e.g. Solomiya Energy Leads)
```

The frontend never sees bot credentials. Tokens exist only in **Cloudflare Pages → Settings → Environment variables**.

---

## Environment variables

| Variable | Required | Where set | Notes |
|----------|----------|-----------|-------|
| `TELEGRAM_BOT_TOKEN` | Yes | Cloudflare Pages → Production env | From [@BotFather](https://t.me/BotFather). Never commit to git. |
| `TELEGRAM_CHAT_ID` | Yes | Cloudflare Pages → Production env | Target chat or group ID (negative for groups/channels). |
| `ALLOWED_ORIGIN` | Optional | Cloudflare Pages → Production env | CORS lock, e.g. `https://solomiya-energy-landing.pages.dev` or your custom domain. Defaults to `*` if unset. |

**Do not change these values** unless you are intentionally rotating a leaked token or moving the bot to a new chat.

Local development: copy `.env.example` to `.env` (gitignored) for local experiments only. Production values stay in Cloudflare.

---

## Active handler

**File:** `functions/api/lead.js`  
**Route:** Cloudflare auto-maps `functions/api/lead.js` → `POST /api/lead`

### Request (JSON)

| Field | Source | Notes |
|-------|--------|-------|
| `name` | `#fname` | **Required by server** (empty string fails validation) |
| `phone` | `#fphone` | Required; validated client-side (`380…` / `0…`) |
| `type` | radio | e.g. `Будинок`, `Бізнес` |
| `time` | select/radio | When to call back |
| `power` | radio | e.g. `5-10 кВт` |
| `page` | `location.href` | Page URL at submit time |
| `ts` | `new Date().toISOString()` | Client timestamp |

### Response

- **200** — `{"success":true}` → form shows success screen  
- **400** — missing/invalid payload (e.g. missing name or phone)  
- **500** — env vars not configured on Cloudflare  
- **502** — Telegram API error  

### Telegram message format

HTML message with: name, phone (clickable `tel:` link), type, callback time, power, page URL, timestamp.

---

## Cloudflare Pages setup

1. **Workers & Pages** → your project → **Settings** → **Environment variables** → **Production**
2. Add `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, and optionally `ALLOWED_ORIGIN`
3. **Deployments** → retry latest deploy so functions pick up env changes
4. Confirm `functions/api/lead.js` is in the deployed repo (Git-connected or uploaded folder)

No build step. Publish directory is project root (static `index.html` + `functions/`).

---

## Testing with curl

Replace the host with your production URL. Use a test phone you recognize.

```bash
curl -sS -X POST "https://solomiya-energy-landing.pages.dev/api/lead" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"QA Test\",\"phone\":\"+380675554000\",\"type\":\"Будинок\",\"time\":\"Якнайшвидше\",\"power\":\"5-10 кВт\",\"page\":\"https://solomiya-energy-landing.pages.dev/\",\"ts\":\"2026-05-18T12:00:00.000Z\"}"
```

**Expected:** HTTP 200 and body `{"success":true}`; message in Telegram within a few seconds.

**Phone-only test (important):** Server requires `name` — empty name returns 400. On the live form, users can submit with phone only only if the client sends a non-empty name or the server rule changes. Do not change this without explicit approval and re-testing.

---

## Troubleshooting

| Symptom | Likely cause | Action |
|---------|--------------|--------|
| `{"success":false,"error":"Server not configured"}` | Missing env vars on Cloudflare | Add vars; redeploy |
| `{"success":false,"error":"Missing name or phone"}` | Empty `name` or `phone` in JSON | Send both fields in tests |
| `502` / Telegram error | Invalid token, wrong chat ID, bot blocked | Verify token in BotFather; bot started in target chat |
| Form error UI, network OK | Non-200 from `/api/lead` | Check Cloudflare **Functions** logs |
| CORS error in browser | `ALLOWED_ORIGIN` mismatch | Align origin with site URL or use `*` temporarily |
| No message but 200 | Wrong `TELEGRAM_CHAT_ID` | Re-check chat ID via `getUpdates` |
| Token leaked | Public exposure | Revoke in BotFather; update env only (no git commit) |

---

## Security rules

- Never put `TELEGRAM_BOT_TOKEN` or `TELEGRAM_CHAT_ID` in `index.html`, README, or git.
- Rotate token via BotFather if exposed; update Cloudflare env only.
- `functions/api/lead.js` escapes HTML in lead fields before sending to Telegram.

---

## Legacy handlers (not production)

| Path | Platform | Status |
|------|----------|--------|
| `netlify/functions/lead.js` | Netlify | Legacy — see `docs/archive/netlify/` |
| `api/lead.js` | Vercel | Legacy |

Do not edit these when fixing production Telegram issues. Fix **`functions/api/lead.js`** only with explicit approval and full QA.
