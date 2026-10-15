---
sidebar_position: 4
---

# Bank8 Admin — staff dashboard

The staff administration surface: instance overview, ledger product
activation/override, FDX provider administration — rendered as Remote
UI (RFW) definitions in Sentin8:Dash with zero compile-time coupling.

## What it demonstrates

- **RFW-native administration** — the app's admin pages ship with the
  vertical; Dash renders whatever the services' `GET /v1/admin/ui/{page}`
  endpoints describe (POST alias routes for mutations, Material Icons
  code points).
- **Vertical admin scopes** — runtime-registered at enrollment
  (`vertical-registry.json` `admin_scopes`), never hardcoded in the
  platform.
- **Operational posture** — the same RLS, Shield, and audit discipline
  as every other surface.

## Deep dive

[Admin reference](/docs/reference/admin/) — harvested from
`Bank8-dev/bank8-admin`.