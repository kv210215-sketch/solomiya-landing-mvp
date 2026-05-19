# Solomiya Energy · Commercial Proposal
### Deye High Voltage ESS — 30 kW / 61.44 kWh

Luxury industrial proposal · A4 vertical · PDF-ready
Visual register: Tesla Energy · Huawei FusionSolar · BYD · Schneider Electric

---

## 1. Файл

- `index.html` — самодостатній документ. Жодних білдів, жодних залежностей,
  крім Google Fonts (Cormorant Garamond + Inter). Працює offline після першого
  завантаження шрифтів.

## 2. Експорт у PDF

Найкращий результат — Chromium-based браузер (Chrome / Edge / Brave / Arc):

1. Відкрити `index.html` у Chrome.
2. `Ctrl + P` (або `⌘ + P`).
3. Параметри друку:
   - **Destination:** *Save as PDF*
   - **Paper size:** *A4*
   - **Margins:** *None*
   - **Scale:** *Default (100%)*
   - **Options → Background graphics:** ✅ **обов'язково увімкнути**
     (інакше зникне золото та темний фон)
4. *Save → `Solomiya-Energy_Deye-HV-ESS_Volodymyr.pdf`*

CLI-варіант (Chromium headless):

```bash
chromium --headless --disable-gpu \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  --print-to-pdf="./Solomiya-Energy_Deye-HV-ESS_Volodymyr.pdf" \
  "file://$(pwd)/proposals/deye-hv-ess-volodymyr/index.html"
```

## 3. Структура (6 сторінок)

| #  | Сторінка                | Зміст                                                                       |
|----|-------------------------|-----------------------------------------------------------------------------|
| 01 | **Cover**               | DEYE HIGH VOLTAGE ESS · 30 kW / 61.44 kWh subtitle · 4 KPI cells · meta     |
| 02 | **Executive Summary**   | Концепція · призначення · 4 KPI-блоки (Power / Capacity / Topology / Investment) |
| 03 | **Bill of Materials**   | Enterprise BOM-таблиця · Qty · Unit · Sum · TOTAL                           |
| 04 | **Technical Specs**     | 16 параметрів у 2 колонки · 6 cert-бейджів                                  |
| 05 | **System Advantages**   | 5 секцій з SVG-іконами:                                                     |
|    |                         | System Advantages · Energy Independence · Scalability ·                     |
|    |                         | Remote Monitoring · LiFePO₄ Safety Technology                               |
| 06 | **Investment + Sign**   | TOTAL hero `$13 060 USD` · інклюзив · умови · підписи · corporate footer    |

## 4. Дизайн-система

### Палітра

| Token            | HEX                          | Призначення                       |
|------------------|------------------------------|-----------------------------------|
| `--ink-0`        | `#050505`                    | Cover deep base                   |
| `--ink-1`        | `#0A0A0A`                    | Page background                   |
| `--ink-2/3/4`    | `#0F` / `#14` / `#1A`        | Card layers                       |
| `--ivory`        | `#F4F1EA`                    | Primary text                      |
| `--ivory-2`      | `#E6E2D7`                    | Body text                         |
| `--gold`         | `#C9A961`                    | Champagne — main accent           |
| `--gold-2`       | `#B89548`                    | Deeper gold                       |
| `--gold-soft`    | `#8B7A4A`                    | Muted gold                        |
| `--gold-line`    | `rgba(201,169,97,.32)`       | Hairlines                         |
| `--gold-line-2`  | `rgba(201,169,97,.18)`       | Inner frames                      |
| `--gold-glow`    | `rgba(201,169,97,.06)`       | Soft backgrounds                  |
| `--mute`         | `#908C84`                    | Secondary text                    |
| `--line`         | `#232323`                    | Internal dividers                 |

### Типографіка

- **Display / Headings:** [`Cormorant Garamond`](https://fonts.google.com/specimen/Cormorant+Garamond) 300/400/500
  — luxury serif (Tesla Energy брошури, high-end real estate, Hermès docs).
- **Body / UI:** [`Inter`](https://fonts.google.com/specimen/Inter) 200/300/400/500
  — clean corporate sans, відмінний рендер на A4.
- **Numerals:** Cormorant у `--gold` для всіх грошових / KPI чисел.
- **Tabular numerals:** `font-feature-settings:"tnum"` для BOM-таблиці.

### Cover headline scale

- `DEYE` — 64pt, weight 300
- `High Voltage` — 64pt, italic, color gold
- `ESS` — 64pt, weight 300, letter-spacing .02em

### TOTAL block scale

- `$` — 48pt Cormorant, gold
- `13 060` — **104pt** Cormorant 300, ivory, tracking −.02em
- `USD` — 14pt Inter, gold, tracking .32em
- Double-frame: 1 px outer gold border + 1 px inner gold-line ornament

### Icon system

5 inline SVG icons (32×32 viewBox, 1 px stroke, `currentColor`=gold):

- factory/building — System Advantages
- sun rays — Energy Independence
- stacked layers — Scalability
- cloud + check — Remote Monitoring
- shield + check — LiFePO₄ Safety

Кожна іконка вписана у 54×54 px квадрат з тонкою золотою рамкою.

### Layout-принципи

- Поля сторінки: **24 / 22 / 22 / 22 mm** — преміальний "люфт".
- Cornered gold L-marks (4 по кутах) — 12×12 mm, 1 px gold.
- Hairlines: завжди `1px` з `--gold-line`. Жодних 2-3 px рамок.
- `page-break-inside: avoid` на TOTAL card, advantage-row, KPI-row, spec-list.
- Two-stage frames: зовнішня лінія gold + внутрішня gold-line — підпис luxury.

## 5. Brand tokens для перенесення на сайт

```css
:root{
  --se-ink: #0A0A0A;
  --se-ivory: #F4F1EA;
  --se-gold: #C9A961;
  --se-gold-soft: #8B7A4A;
  --se-gold-line: rgba(201,169,97,.32);
  --se-font-display: "Cormorant Garamond", serif;
  --se-font-ui: "Inter", system-ui, sans-serif;
}
```

## 6. Варіації під інших клієнтів

Щоб переробити документ під нового замовника:

1. **Cover (page 1):** `Володимир` → нове ім'я, `м. Берестин` → нове місто.
2. **Doc №:** `SE·2026·ESS·017` → новий ID.
3. **BOM (page 3):** оновити рядки `[№][компонент+SKU][Qty][Unit][Sum]`.
4. **TOTAL (page 6):** оновити `13 060` у hero-блоці.
5. **Signature (page 6):** оновити прізвища замовника та виконавця.

Решта (типографіка, advantages, тех-секція) — багаторазові заготовки.

## 7. Print-safety checklist

- [ ] Background graphics увімкнено → темний фон + золото відображаються
- [ ] Paper: A4 · Margins: None · Scale: 100%
- [ ] Жодна секція не розривається між сторінками (`page-break-inside: avoid`)
- [ ] Усі 6 сторінок повністю вміщуються
- [ ] Cover gradient переходить плавно, без бендингу
