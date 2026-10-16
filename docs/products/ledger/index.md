---
sidebar_position: 2
---

# Bank8:Ledger — the core ledger

The system of record for money positions: accounts, products,
double-entry postings, balances, schedules, and the full configuration
library (parameters, flags, restrictions, calendars, plans,
contracts) that drive them. 91 endpoints, 44 tables, one schema the
service owns exclusively.

## Use cases

### Retail & business banking
- **Account opening** — products compose validation modules (limits,
  overdraft rules, sweeps, tiered rates); parameters resolve through
  the hierarchy (global → product → account) so a product change never
  needs data migration.
- **Transfers** — a transfer is one `POST /v1/postings` call with a
  batch and a single instruction; retries with the same
  `idempotency_key` are safe by construction.
- **Scheduled postings** — due schedules generate posting batches in
  one transaction per batch (recurring fees, sweeps, interest).

### Finance operations
- **Balance truth** — live and end-of-day balances per denomination;
  every posting batch is balance-validated *before* any row is written
  (422 on imbalance, never compensating entries after the fact).
- **Statement generation** — scheduled generation writes documents to
  platform storage; regeneration is a per-account-period workflow.
- **Config library** — flags, restrictions, plans, contract modules:
  the whole product rule set is data, unit-testable without a DB.

## API surface (91 endpoints, selected families)

| Family | Endpoints | Scope |
|---|---|---|
| Accounts | `GET/POST /v1/accounts`, `…/{id}`, `…/balances`, `…/transactions`, `…/statements` | `bank8:ledger:accounts:read/write` |
| Products | `GET/POST /v1/products`, `…/{id}/activate`, versions | `bank8:ledger:products:*` |
| Postings | `POST /v1/postings`, `POST /v1/postings/async`, `GET …/{id}`, republish | `bank8:ledger:postings:read/write` |
| Balances v2 | `GET /v2/balances/{live,end,series}` | `bank8:ledger:balances:read` |
| Schedules | `GET/POST /v1/schedules`, tags, associations | `bank8:ledger:schedules:*` |
| Customers | `GET/POST /v1/customers`, link-auth | `bank8:ledger:customers:write` |
| Parameters | `/v1/parameters`, `viewEffective`, derived values | `bank8:ledger:parameters:*` |

## Invariants

- Money is `rust_decimal` end-to-end; the JSON wire format is a
  string.
- Postings are idempotent per `(env_id, idempotency_key)` — partial
  unique index + ON CONFLICT.
- Audit + outbox inserts propagate errors *inside* the posting
  transaction: a posting whose audit/event write fails never commits.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/ledger/) — the maintainer's README in the consolidated reference section.

