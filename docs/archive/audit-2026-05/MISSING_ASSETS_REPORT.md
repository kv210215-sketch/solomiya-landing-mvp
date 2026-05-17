# Missing Assets Report — Solomiya Energy Landing MVP

**Date:** 2026-05-17  
**Auditor action:** Search → not found → **production placeholders created**

---

## 1. Assets referenced by `index.html`

| Asset | Path in HTML | Pre-audit | Post-audit |
|-------|--------------|-----------|------------|
| Favicon (ICO) | `/favicon.ico` | ❌ Missing | ✅ `favicon.ico` (766 B, generated) |
| Favicon (SVG) | `/favicon.svg` | ❌ Missing | ✅ `favicon.svg` (393 B, brand placeholder) |
| Apple touch icon | `/apple-touch-icon.png` | ❌ Missing | ✅ 180×180 PNG (~41 KB) |
| OG image | `/og-image.jpg` | ❌ Missing | ✅ 1200×630 JPEG (~79 KB) |
| Theme color meta | `#C9A961` | ✅ In HTML only | — |

---

## 2. Additional production assets checked

| Asset | Referenced? | Pre-audit | Post-audit |
|-------|-------------|-----------|------------|
| `manifest.json` | Not in HTML | ❌ | ✅ Created at repo root |
| `robots.txt` | Yes (standard) | ✅ Present | — |
| `sitemap.xml` | Yes | ✅ Present | — |
| Social preview (other names) | — | ❌ Not found | Covered by `og-image.jpg` |

---

## 3. Search locations (nothing found)

| Location | Result |
|----------|--------|
| Project root | No image files before audit |
| `assets/` | Only `.gitkeep` |
| `backups/` | Only `.gitkeep` |
| `backup/` | Only `index.html*.bak` |
| `C:\Users\Andriy\Downloads\` | No `.ico/.svg/.png/.jpg` matching favicon/og names |
| `C:\Users\Andriy\Downloads\Solar Landing Lviv\` | No image assets |
| `C:\Users\Andriy\Downloads\solomiya_netlify\` | No image assets |

**Conclusion:** Brand image files were never committed to this repository. HTML meta tags pointed to URLs that would 404 on deploy.

---

## 4. Placeholder specifications (created files)

### `favicon.svg`
- Dark background `#0A0A0A`, gold border/text `#C9A961`, letter **S**
- Vector, scalable — suitable until final logo SVG is supplied

### `favicon.ico`
- 32×32 generated from same brand colors
- Replace with designer-exported multi-size ICO when available

### `apple-touch-icon.png`
- 180×180 PNG, gold **S** mark on dark background
- **Action:** Replace with official logo (transparent or brand background)

### `og-image.jpg`
- 1200×630 JPEG, optimized ~79 KB
- Dark premium layout with Solomiya Energy branding text
- **Action:** Replace with marketing-designed OG (photo + headline) for better CTR

### `manifest.json`
- PWA-lite manifest with `theme_color` `#C9A961`, icons pointing to SVG + apple-touch
- **Optional:** Add to `index.html`: `<link rel="manifest" href="/manifest.json">`

---

## 5. Performance notes

| File | Size | Target |
|------|------|--------|
| `favicon.ico` | 766 B | ✅ |
| `favicon.svg` | 393 B | ✅ |
| `apple-touch-icon.png` | ~41 KB | ✅ (< 50 KB) |
| `og-image.jpg` | ~79 KB | ✅ (< 200 KB recommended) |

Initial AI-generated sources were 1.2–1.6 MB each; **compressed/resized during audit** before commit.

---

## 6. Still missing (by design / future work)

| Item | Priority | Notes |
|------|----------|-------|
| Final brand logo pack | High | Designer SVG + ICO + PNG set |
| `manifest.json` `<link>` in HTML | Low | File exists, not wired |
| WebP variants for OG | Low | Optional performance win |
| `site.webmanifest` alias | Low | Not required if using `manifest.json` |
| Real product/installation photos in OG | Medium | Marketing asset |

---

## 7. Safe commit list for new assets

```
favicon.svg
favicon.ico
apple-touch-icon.png
og-image.jpg
manifest.json
```

**Do not commit:** `C:\Users\Andriy\.cursor\projects\...\assets\` copies (staging only).

---

*Placeholders unblock deploy and social previews; schedule brand replacement before major ad campaigns.*
