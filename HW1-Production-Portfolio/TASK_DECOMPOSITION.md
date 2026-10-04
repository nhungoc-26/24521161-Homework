```md
# HW1: Production Portfolio

## Project

Nova Studio is a production-style website for a fictional digital creative
studio.

## Goal

Develop and progressively improve the website through accessibility,
keyboard navigation, security, and performance milestones.

## Mandatory Milestones

### M1 — WCAG 2.2 AA Audit

Tasks:

- Audit color contrast.
- Audit semantic landmarks.
- Fix accessibility issues.
- Verify accessible structure.

Commit:
`fix(a11y): contrast & landmarks`

### M2 — Focus Trap Audit

Tasks:

- Audit keyboard navigation.
- Test Tab and Shift + Tab.
- Check focus behavior.
- Prevent keyboard focus traps.

Commit:
`fix(nav): keyboard trap prevention`

### M3 — Strict CSP

Tasks:

- Add a strict Content Security Policy.
- Remove all inline event handlers.
- Verify zero inline handlers.
- Keep JavaScript in an external file.

Commit:
`security: add strict CSP`

### M4 — Lighthouse 100 Audit

Tasks:

- Run Lighthouse.
- Audit performance.
- Optimize assets.
- Re-run Lighthouse.
- Verify the final audit score.

Commit:
`perf: optimize assets`

## Git Strategy

Each milestone must be developed and committed separately.

The project must not be submitted as one monolithic commit.

## Final Verification

- [ ] M1 completed
- [ ] M2 completed
- [ ] M3 completed
- [ ] M4 completed
- [ ] At least 4 milestone commits
- [ ] No inline event handlers
- [ ] Strict CSP configured
- [ ] Lighthouse audit completed
```
