# Preview Deploy Execution

Date: 2026-05-17
Scope: execution order only. Do not deploy from this document without explicit human approval.

## Preconditions

- Selective commit has been created locally.
- `git status` has no unexpected staged files.
- No `.env`, backups, archives, deploy/export copy, API/functions, Netlify config, or secrets are included.
- Missing asset limitation is accepted or fixed in a separate approved asset task.

## Preview Deploy Execution Order

1. Confirm current branch and latest commit:

```powershell
git status
git log -1 --oneline
```

2. Confirm protected areas are unchanged:

```powershell
git diff HEAD~1..HEAD -- netlify.toml _headers api functions netlify robots.txt sitemap.xml
```

3. Create preview deploy only after explicit approval.

4. Record preview URL.

5. Open preview URL on desktop Chrome.

6. Open preview URL on iPhone Safari.

7. Open preview URL on Android Chrome.

8. Do not promote to production during preview validation.

## Preview Smoke Order

1. Confirm page loads.
2. Confirm correct title and landing page.
3. Confirm no console errors.
4. Confirm no horizontal overflow.
5. Confirm sticky CTA appears on mobile after scroll.
6. Confirm form is visible.
7. Do not submit the form.
8. Confirm robots and sitemap are reachable.
9. Confirm missing asset behavior is documented.

## Stop Conditions

- Wrong page appears.
- Console errors appear.
- Horizontal overflow appears.
- Sticky CTA overlaps important content.
- Form layout is broken.
- `/api/lead` route appears affected.

