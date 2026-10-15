---
sidebar_position: 1
---

# bank8 Rust SDK

The unified namespace facade: every bank8 crate imports through
`bank8::{service}::{…}` — the typed integration surface for every
bank8 API, consumed as a pinned git tag.

```rust
use bank8::ledger::contracts::Account;
use bank8::payments::client::PaymentsClient;
```

## What's in the facade

| Import path | Role |
|---|---|
| `bank8::ledger::{contracts,client}` | accounts, postings, balances, products, config library |
| `bank8::payments::{contracts,client}` | instructions, schemes, mandates |
| `bank8::fdx::{contracts,client}` | consents, providers, recipients, notifications |
| `bank8::reporting::{contracts,client}` | jurisdictions, filings |
| `bank8::risk::{contracts,client}` | limits, capital, ECL |
| `bank8::compliance::{contracts,client}` | alerts, cases, screening |

Contract crates carry the wire types (DTOs) shared by services and
SDK consumers; clients are typed over the platform's BFF proxy routes.

## Conventions

- The platform arrives via `sentin8::*` only (the pinned platform SDK
  tag); the vertical never links platform service crates directly.
- Scopes: `bank8:{service}:{resource}:{action}`, runtime-registered
  at enrollment.
- Events: `bank8:{service}:{resource}:{operation}` over the platform's
  local-outbox → Bus producer path.

## Deep dive

[bank8-sdk reference](/docs/reference/sdk/) — harvested from
`Bank8-dev/bank8-sdk`.