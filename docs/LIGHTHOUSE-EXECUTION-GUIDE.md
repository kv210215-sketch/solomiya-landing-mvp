# Lighthouse Execution Guide

Date: 2026-05-17

## When To Run

Run Lighthouse only after a preview deploy URL exists.

Do not run against production until preview passes.

## Required Runs

- Mobile Lighthouse with default throttling.
- Desktop Lighthouse.
- Repeat Mobile once if results vary sharply.

## Capture These Scores

- Performance
- Accessibility
- Best Practices
- SEO

## Capture These Metrics

- FCP
- LCP
- CLS
- TBT
- Speed Index
- INP if available

## Mobile Performance Checklist

- LCP is acceptable for a text-led hero.
- TBT is not severely elevated.
- Animations do not trigger severe CPU warnings.
- Google Fonts are the expected external dependency.
- No unexpected large image requests appear.

## Desktop Performance Checklist

- No console errors.
- No large unused assets.
- No severe render-blocking surprises beyond known inline CSS/fonts.
- Scroll and CTA behavior remain smooth.

## CLS Checklist

- CLS should stay low.
- Watch font swap shifts.
- Watch sticky CTA/floating call overlays.
- Confirm no layout shift when urgency ticker animates.

## LCP Checklist

- Identify the LCP element.
- Confirm whether LCP is text-based.
- If LCP is delayed, check Google Fonts and inline CSS parse time first.
- Do not optimize immediately from a single run.

## Accessibility Checklist

- Check color contrast warnings.
- Check form labels and required input state.
- Check button/link accessible names.
- Check tap target warnings on mobile.

## SEO Checklist

- Title present.
- Meta description present.
- Canonical present.
- Robots and sitemap reachable.
- OG/Twitter image warnings documented.

## Best Practices Checklist

- No console errors.
- HTTPS on preview.
- No mixed content.
- No obvious CSP/security regression.

## Stop Conditions

Stop release advancement if:

- Mobile Performance is severely degraded.
- CLS is high.
- LCP is unexpectedly image/asset-blocked.
- Console errors appear.
- Form layout is broken.
- Preview page differs from source-of-truth.

