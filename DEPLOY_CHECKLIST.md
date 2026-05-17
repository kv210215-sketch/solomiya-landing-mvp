# Deployment Checklist — Solomiya Energy Landing

**Platform:** Cloudflare Pages (recommended)  
**Last updated:** 2026-05-13

---

## Pre-Deploy (do before uploading)

- [ ] Create `og-image.jpg` (1200 × 630 px) — solar panels photo with brand overlay
- [ ] Create `favicon.ico` (32×32 and 16×16 combined)
- [ ] Create `favicon.svg` (scalable brand icon)
- [ ] Create `apple-touch-icon.png` (180×180 px)
- [ ] Decide on `www` vs non-`www` domain and make canonical consistent throughout
- [ ] Register Telegram bot via @BotFather and save token securely
- [ ] Find your Telegram chat ID (see README Step 1b)

---

## Deploy Steps — Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. Drag the entire `solomiya-landing-mvp/` folder (includes `functions/`, `_headers`, `robots.txt`, `sitemap.xml`)
3. After first deploy, open **Settings → Environment variables → Production** and add:
   - `TELEGRAM_BOT_TOKEN` = `<your bot token from BotFather>`
   - `TELEGRAM_CHAT_ID` = `<your chat ID>`
   - `ALLOWED_ORIGIN` = `https://www.solomiya-energy.com`
4. **Deployments → … → Retry deployment** so the function picks up env vars
5. Connect custom domain under **Custom domains** tab
6. Confirm SSL certificate is issued (usually < 2 min)

---

## Smoke Tests (run immediately after deploy)

- [ ] Page loads at `https://www.solomiya-energy.com/`
- [ ] H1 "Зупиніть рахунки за електрику" visible above the fold
- [ ] No horizontal scroll at 390px viewport width
- [ ] Urgency strip shows correct current month (not "травні" if it's not May)
- [ ] Tap/click phone number `+38 067 555 40 00` → opens dialer
- [ ] Click "Розрахунок" in nav → smoothly scrolls to form
- [ ] Submit form with empty phone → shows inline validation error
- [ ] Submit form with invalid phone (e.g. "123") → shows format error message
- [ ] Submit form with valid phone → button shows "Відправляємо…"
- [ ] Telegram message arrives within ~2 seconds
- [ ] Form switches to success screen after Telegram delivery
- [ ] On mobile (≤720px): sticky CTA bar appears after scrolling ~500px
- [ ] Floating call button appears on desktop after scrolling ~400px
- [ ] Nav hides on scroll down, reappears on scroll up
- [ ] `https://www.solomiya-energy.com/robots.txt` returns correct content
- [ ] `https://www.solomiya-energy.com/sitemap.xml` returns valid XML
- [ ] `https://www.solomiya-energy.com/api/lead` returns 405 on GET (not 404)

---

## Test Lead (curl)

```bash
curl -X POST https://www.solomiya-energy.com/api/lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "phone": "+380675554000",
    "type": "Будинок",
    "time": "Якнайшвидше",
    "power": "5-10 кВт",
    "page": "https://www.solomiya-energy.com/",
    "ts": "2026-05-13T10:00:00.000Z"
  }'
```
Expected response: `{"success":true}`  
Expected Telegram: message in target chat with all fields.

---

## Post-Deploy (before paid traffic)

- [ ] Install GA4 — add tracking snippet to `<head>` in `index.html`
- [ ] Install Meta Pixel (if running Facebook/Instagram ads)
- [ ] Submit sitemap to Google Search Console: `https://www.solomiya-energy.com/sitemap.xml`
- [ ] Verify site in Google Search Console (DNS TXT record or HTML file method)
- [ ] Lock `ALLOWED_ORIGIN` env var to `https://www.solomiya-energy.com` (should already be set)
- [ ] Create `/privacy-policy` page (required by Meta Ads and GDPR)
- [ ] Replace placeholder footer links (`Про нас`, `Наші роботи`, `Блог`) with real pages or remove them
- [ ] Add real installation photos to the Cases/Benefits sections
- [ ] Consider Cloudflare Turnstile for rate limiting if running broad ads
- [ ] Test on real mobile devices (iPhone Safari, Android Chrome)
- [ ] Run Lighthouse audit: target LCP < 2.5s, CLS < 0.1, TBT < 200ms

---

## Rollback

If something breaks after deploy:

1. **Cloudflare Pages rollback:** Deployments tab → find last working deployment → click **… → Set as production deployment**. Takes ~10 seconds.
2. **Env var issues only:** Update env vars in Settings → Environment variables → Retry deployment (no code change needed).
3. **Function error:** Check **Functions** tab in CF Pages dashboard for logs. Common issues: missing env vars, Telegram API down (check https://api.telegram.org/), invalid `TELEGRAM_CHAT_ID` format.
4. **Emergency fallback:** Replace `functions/api/lead.js` with a version that returns `{"success":true}` without calling Telegram — form will still show success screen and you won't lose the UI, but leads won't be delivered. Fix Telegram config, then redeploy real function.

---

## Environment Variables Reference

| Variable | Required | Example | Notes |
|----------|----------|---------|-------|
| `TELEGRAM_BOT_TOKEN` | Yes | `7891234567:AAHxxx...` | From @BotFather `/newbot` |
| `TELEGRAM_CHAT_ID` | Yes | `123456789` or `-1001234567890` | Personal: positive int. Group/channel: negative |
| `ALLOWED_ORIGIN` | Recommended | `https://www.solomiya-energy.com` | Use `*` only for initial testing |
