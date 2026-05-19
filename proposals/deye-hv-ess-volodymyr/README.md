# Solomiya Energy · Commercial Proposal
### Deye HV ESS — Володимир, м. Берестин

A4-vertical, premium PDF-ready proposal. Black · Ivory · Champagne Gold.

---

## 1. Файл

- `index.html` — самодостатній документ. Жодних білдів, жодних залежностей,
  крім Google Fonts (Cormorant Garamond + Inter).

## 2. Експорт у PDF

Найкращий результат — Chromium-based браузер (Chrome / Edge / Brave / Arc):

1. Відкрити `index.html` у Chrome.
2. `Ctrl + P` (або `⌘ + P`).
3. Параметри друку:
   - **Destination:** *Save as PDF*
   - **Paper size:** *A4*
   - **Margins:** *None*
   - **Scale:** *Default (100%)*
   - **Options → Background graphics:** ✅ **увімкнути** (інакше зникне золото та темний фон)
4. *Save → `Solomiya-Energy_Deye-HV-ESS_Volodymyr.pdf`*

CLI-варіант (опційно, якщо встановлений Chromium / Chrome headless):

```bash
chromium --headless --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf-no-header \
  --print-to-pdf="./Solomiya-Energy_Deye-HV-ESS_Volodymyr.pdf" \
  "file://$(pwd)/proposals/deye-hv-ess-volodymyr/index.html"
```

## 3. Структура (5 сторінок)

| #  | Сторінка             | Зміст                                                                          |
|----|----------------------|--------------------------------------------------------------------------------|
| 01 | **Cover**            | Brand mark · документ № · заголовок · замовник · інвестиція · контакти         |
| 02 | **Про рішення**      | Концепція · призначення · 3 ключові KPI (30 кВт / 61.44 кВт·год / HV 3Φ)       |
| 03 | **Склад обладнання** | Преміальна BOM-таблиця · нотатки · TOTAL-блок                                  |
| 04 | **Тех. характ. + переваги** | 10-параметрова spec-grid · бейджі · 6 advantage-карток                  |
| 05 | **Інвестиція**       | Hero TOTAL `$13 060 USD` · умови · підписи · корпоративний футер               |

## 4. Дизайн-система

### Палітра

| Token         | HEX        | Призначення                          |
|---------------|------------|--------------------------------------|
| `--ink`       | `#0A0A0A`  | Onyx — основа cover                  |
| `--ink-2`     | `#111111`  | Фон сторінки                         |
| `--ink-3`     | `#161616`  | Картки, акценти                      |
| `--ivory`     | `#F4F1EA`  | Основний текст                       |
| `--gold`      | `#C9A961`  | Champagne — основний акцент          |
| `--gold-soft` | `#8B7A4A`  | Приглушене золото                    |
| `--gold-line` | `rgba(201,169,97,.35)` | Тонкі золоті лінії       |
| `--line`      | `#2A2A2A`  | Сірі хвилеподібні лінії              |
| `--mute`      | `#8A8780`  | Вторинний текст                      |

### Типографіка

- **Display / Headings:** [`Cormorant Garamond`](https://fonts.google.com/specimen/Cormorant+Garamond) 300/400/500 — luxury serif (рівень Tesla Energy брошур та high-end real estate).
- **Body / UI:** [`Inter`](https://fonts.google.com/specimen/Inter) 200/300/400/500 — clean corporate sans, чудово рендериться на A4.
- **Numerals:** Cormorant у `--gold` для усіх грошових та KPI-чисел — це той самий прийом, що Huawei / Sungrow застосовують у тендерній документації.

### Layout-принципи

- Поля сторінки: **22 мм / 20 мм / 18 мм / 20 мм** — премʼєральний "люфт".
- Cornered L-marks по кутах сторінки (1 px gold).
- Hairlines: завжди `1px` з `--gold-line`, не 2px.
- Жодних shadow / glow всередині сторінки — тільки на frame документа.
- Заголовки секцій: римська цифра золотом + serif H2 + золотий italic-фрагмент.
- TOTAL: великий serif numeral (96pt) з знаком `$` у золоті — fokal point всього КП.

## 5. Brand tokens (для перенесення на сайт)

```css
:root{
  --se-ink: #0A0A0A;
  --se-ivory: #F4F1EA;
  --se-gold: #C9A961;
  --se-gold-soft: #8B7A4A;
  --se-font-display: "Cormorant Garamond", serif;
  --se-font-ui: "Inter", system-ui, sans-serif;
}
```

## 6. Варіації

Документ легко переробити під іншого клієнта:

1. Замінити `Володимир` / `м. Берестин` на cover (page 1) та signature (page 5).
2. Оновити № документу: `SE·2026·ESS·017`.
3. Оновити BOM-таблицю (page 3) — структура `[№][обладнання+SKU][к-сть][ціна][сума]`.
4. Оновити hero TOTAL (page 5).

Решта (брендинг, переваги, тех-секція) — багаторазові.
