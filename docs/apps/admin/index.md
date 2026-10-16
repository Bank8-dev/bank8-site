---
sidebar_position: 4
---

# Bank8 Admin - staff dashboard

The staff administration surface: instance overview, ledger product
activation/override, FDX provider administration - rendered as Remote
UI (RFW) definitions in Sentin8:Dash with zero compile-time coupling.

## What it demonstrates

- **RFW-native administration** - the app's admin pages ship with the
  vertical; Dash renders whatever the services' `GET /v1/admin/ui/{page}`
  endpoints describe (POST alias routes for mutations, Material Icons
  code points).
- **Vertical admin scopes** - runtime-registered at enrollment
  (`vertical-registry.json` `admin_scopes`), never hardcoded in the
  platform.
- **Operational posture** - the same RLS, Shield, and audit discipline
  as every other surface.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/admin/) - the maintainer's README in the consolidated reference section.

