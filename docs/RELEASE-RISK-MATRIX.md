# Release Risk Matrix

Date: 2026-05-17

## Blockers

| Risk | Status | Required Action |
|---|---|---|
| iPhone Safari safe-area not verified | Open | Test real iPhone before production deploy. |
| Preview Lighthouse not run | Open | Run Mobile and Desktop Lighthouse on preview URL. |
| Preview deploy not validated | Open | Create and test preview before production. |

## Medium Risk

| Risk | Status | Handling |
|---|---|---|
| Missing `og-image.jpg` | Open | Fix in asset task or accept preview limitation. |
| Missing favicon files | Open | Fix in asset task or accept preview limitation. |
| Google Fonts affect LCP/FCP | Known | Measure in Lighthouse before optimizing. |
| Inline CSS/JS limits caching | Known | Defer extraction to parity-tested Phase 2/3. |
| Sticky CTA overlap possible | Open | Verify on real iPhone and Android. |

## Low Risk

| Risk | Status | Handling |
|---|---|---|
| Scroll handler performance patch | Low | Already smoke-tested locally; verify on preview. |
| Mobile overflow patch | Low | Locally contained at page level; verify on real devices. |
| Continuous animations | Low/Medium | Reduced-motion support exists; measure before changing. |

## Safe To Ignore For Preview

| Item | Why |
|---|---|
| No production `<img>` lazy loading | No content images exist in source page. |
| `body.scrollWidth` larger than viewport | Ticker is clipped; `documentElement` remained contained in smoke tests. |
| Single-file architecture | Known and stable; extraction is riskier before preview validation. |

## Do Not Mix Into This Release

- Framework migration.
- CSS/JS extraction.
- Form/API hardening.
- Netlify routing changes.
- CSP tightening.
- Deploy/export copy merge.

