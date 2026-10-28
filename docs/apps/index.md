---
sidebar_position: 1
---

# The bank8 apps

Three Flutter experiences - customer, staff, and
admin - every one thin by design: all backend access rides the
Sentin8:BFF proxy, and no token ever reaches a client bundle.
(The recipient app - the former eFintech - moved to the OpenFin8
vertical as [eOpenCA](https://openfin8.dev/docs/apps/openfin8-eopenca/).)

| App | Who it serves |
|---|---|
| [eBank](/docs/apps/ebank) | retail & business customers |
| [eTeller](/docs/apps/eteller) | staff terminal - teller operations |
| [eTeller](/docs/apps/eteller) | branch staff |
| [Bank8 Admin](/docs/apps/admin) | staff administration (RFW in Dash) |

## eBank - customer banking

Account opening, balances and transactions, internal transfers,
external payment history, statements, notifications - and the
customer side of FDX consent review and revocation. Also carries a
small staff admin surface (instance overview, ledger product
activation, FDX provider administration).

- Bootstrap is fail-closed: unknown host or missing runtime context
  renders the error scaffold, never a guessed config.
- Every backend read is a `DataState<T>` hook over a typed BFF client.
- Customer provisioning is idempotent (`ensureLedgerCustomer` -
  replays tolerated as 409).
- Transfer command shape: one `POST /v1/postings` with
  `idempotency_key` - retries safe by construction.

## eTeller - the staff terminal

Teller operations: customer search, account servicing, posting
overrides - behind the same Shield authorization as every app; a
teller's live role resolution decides access, not an embedded claim.

## Bank8 Admin - staff dashboard

Instance overview, ledger product activation, FDX provider
administration - rendered as RFW definitions in Sentin8:Dash with
zero compile-time coupling to the platform's admin host.

## Deep dive

Each app's reference section carries its full docs trio: [eBank](/docs/reference/ebank/),
[eTeller](/docs/reference/eteller/),
[Admin](/docs/reference/admin/).