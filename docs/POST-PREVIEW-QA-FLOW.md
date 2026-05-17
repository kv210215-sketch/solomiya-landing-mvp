# Post-Preview QA Flow

Date: 2026-05-17

## Order After Preview URL Exists

1. Desktop Chrome smoke.
2. iPhone Safari smoke.
3. Android Chrome smoke.
4. Lighthouse Mobile.
5. Lighthouse Desktop.
6. Record findings.
7. Decide whether missing assets block production.
8. Decide whether production approval can be requested.

## Lighthouse Execution Order

1. Run Mobile Lighthouse with default throttling.
2. Record Performance, Accessibility, Best Practices, SEO.
3. Record FCP, LCP, CLS, TBT, Speed Index, INP if available.
4. Run Desktop Lighthouse.
5. Repeat Mobile once if variance is high.
6. Do not optimize from one noisy run.

## Real Device QA Order

1. iPhone Safari first.
2. Android Chrome second.
3. Desktop Chrome third.

## iPhone First Checks

- Sticky CTA bottom safe-area.
- Sticky CTA overlap with footer/final CTA.
- No horizontal scroll.
- Urgency ticker containment.
- Smooth scroll to contact.
- Form fields visible and tappable.
- Do not submit form.

## Production Advancement Rule

Production release candidate is stable only after:

- Preview deploy passes.
- iPhone safe-area passes.
- Lighthouse has no severe LCP/CLS/TBT regression.
- Missing assets are fixed or formally accepted.
- Human explicitly approves production deploy.

