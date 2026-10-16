---
sidebar_position: 3
---

# eTeller — staff terminal

The branch staff experience: customer search, account servicing,
posting operations — behind the same live Shield authorization as every
app. A teller's access is decided per request against roles resolved
live from the identity plane; a demotion takes effect on the next
request, not at token expiry.

## What it demonstrates

- **Role-based teller operations** — the terminal's capabilities expand
  and contract with the signed-in staff member's live role set.
- **Same BFF discipline** — no direct service clients, tokens
  server-side, CSRF on every mutation.
- **Audited actions** — every posting override and servicing action
  lands in the platform's audit journal before the response returns.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/eteller/) — the maintainer's README in the consolidated reference section.

