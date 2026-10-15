---
sidebar_position: 7
---

# Bank8:Compliance — AML/CTF

KYC/CDD, beneficial ownership, PEP classification, sanctions screening,
transaction monitoring, and the alert/case lifecycle — **detection
only**; filings go through Reporting (separation of duty is
structural, not procedural).

## Use cases

- **Customer due diligence** — KYC/CDD levels, beneficial ownership
  chains, PEP classification at onboarding and on review.
- **Sanctions screening** — customers and counterparties screened on
  onboarding and continuously; hits become alerts.
- **Transaction monitoring** — the embedded worker consumes
  ledger/payments events; suspicious patterns raise alerts
  (`bank8:compliance:suspicious:detected` → Reporting's queue).
- **Case management** — alerts investigate into cases; dispositions are
  auditable, terminal states immutable.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Customers | KYC/CDD, BO, PEP | `bank8:compliance:customers:*` |
| Screening | sanctions runs, hits | `bank8:compliance:screening:*` |
| Monitoring | rules, alerts | `bank8:compliance:alerts:*` |
| Cases | case lifecycle | `bank8:compliance:cases:*` |

## Deep dive

[Compliance reference](/docs/reference/compliance/) — harvested from
`Bank8-dev/bank8-compliance`.