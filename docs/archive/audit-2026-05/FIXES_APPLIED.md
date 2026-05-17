# Fixes Applied — Solomiya Energy Landing

**Applied:** 2026-05-13

---

## Critical Bug Fixes

### 1. Form error handling (`index.html` — JS section)
**Before:** Used `.finally()` — showed success screen even when API call failed or network was down.  
**After:** Proper `.then()` + `.catch()` chain. On success → hides form, shows success div. On failure → shows `#formApiError` with fallback phone number, re-enables submit button.

### 2. Phone validation (`index.html` — JS section)
**Before:** Only checked `if (!phone)` — accepted any non-empty string.  
**After:** `isValidPhone()` validates Ukrainian format: `+380XXXXXXXXX` or `0XXXXXXXXX` (10 digits after `0`). Shows specific error message for empty vs. invalid format.

### 3. Form error display (`index.html` — HTML + CSS)
**Before:** No error UI for API failures.  
**After:** Added `#formApiError` div with `role="alert" aria-live="assertive"`, styled with danger color border, includes fallback phone link.

### 4. Phone input error state (`index.html` — CSS)
**Before:** No visual feedback on invalid phone field.  
**After:** `.field-input.error` class adds `border-color: var(--danger)`. Applied/removed on validation.

### 5. Timestamp format (`index.html` — JS)
**Before:** `new Date().toLocaleString('uk-UA')` — locale string, hard to parse server-side.  
**After:** `new Date().toISOString()` — standard ISO 8601 format.

---

## Security Fixes

### 6. Honeypot spam protection (`index.html`)
**Before:** No bot protection.  
**After:** Added visually/pointer hidden `#fwebsite` input. If populated by a bot, form submission is silently cancelled.

### 7. Security headers (`_headers`)
**New file.** Cloudflare Pages `_headers` file adds:
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy` — locks down allowed sources

---

## SEO Fixes

### 8. Twitter Card image (`index.html` — `<head>`)
**Before:** Missing `twitter:image` and `twitter:image:alt` — Twitter would show a card without preview image.  
**After:** Both tags added.

### 9. OG image alt & dimensions (`index.html` — `<head>`)
**Before:** Missing `og:image:width`, `og:image:height`, `og:image:alt`.  
**After:** All three added (1200×630, descriptive alt text).

### 10. Favicon meta tags (`index.html` — `<head>`)
**Before:** No `<link rel="icon">` — browser shows blank tab icon.  
**After:** Added `favicon.ico`, `favicon.svg`, and `apple-touch-icon` link tags.

### 11. Theme color (`index.html` — `<head>`)
**Before:** Missing `<meta name="theme-color">` — mobile browser chrome showed default colour.  
**After:** Set to `#C9A961` (brand gold).

### 12. Twitter site handle (`index.html` — `<head>`)
**Added:** `<meta name="twitter:site" content="@solomiyaenergy">`.

### 13. `robots.txt` (`robots.txt`)
**New file.** Allows all crawlers, references sitemap URL.

### 14. `sitemap.xml` (`sitemap.xml`)
**New file.** Single-page sitemap with `lastmod`, `changefreq`, `priority`, and `hreflang:uk`.

---

## Accessibility Fixes

### 15. Nested `<nav>` removed (`index.html`)
**Before:** `<nav class="top">` contained `<nav class="nav-links">` — invalid nested landmark.  
**After:** Inner element changed to `<div role="list" aria-label="Розділи сторінки">` with `role="listitem"` on each link.

### 16. FAQ `<details>` incorrect ARIA roles removed (`index.html`)
**Before:** `div.faq-list` had `role="list"`, each `details.faq-item` had `role="listitem"` — conflicts with native `details` semantics.  
**After:** Both incorrect roles removed. Native `<details>`/`<summary>` semantics handle accessibility correctly on their own.

---

## Performance Fixes

### 17. Google Fonts non-render-blocking (`index.html` — `<head>`)
**Before:** `<link rel="stylesheet" href="https://fonts.googleapis.com/...">` — render-blocking, delays LCP.  
**After:** `rel="preload"` + `onload` swap pattern with `<noscript>` fallback — fonts load asynchronously, page renders immediately with system fonts.

### 18. Merged scroll event listeners (`index.html` — JS)
**Before:** Three separate `window.addEventListener('scroll', ...)` handlers — three callbacks per scroll event.  
**After:** Single merged scroll handler covers sticky CTA, floating call button, and nav hide logic.

---

## Content / Data Fixes

### 19. Dynamic urgency month (`index.html`)
**Before:** Hardcoded "травні" (May) in urgency strip and urgency box — would be wrong for 11 months of the year.  
**After:** JS reads `new Date().getMonth()` and sets all `.urgency-month` spans to the correct Ukrainian locative month name.

### 20. Privacy policy link (`index.html`)
**Before:** `href="#"` — broken link.  
**After:** `href="/privacy-policy"` — points to the correct page (page itself still needs to be created).
