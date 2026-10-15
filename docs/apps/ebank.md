---
sidebar_position: 1
---

# eBank — customer banking app

The retail customer experience of bank8: account opening, balance and
transaction viewing, internal transfers, external payment history,
statements, notifications, and the customer side of FDX data sharing
(consent review and revocation) — plus a small staff admin surface.

## What it demonstrates

- **Thin by design** — the app never holds credentials or OAuth
  tokens; every call rides the BFF proxy with the session cookie.
- **Fail-closed bootstrap** — `fetchRuntimeContext()` resolves the
  runtime context from the app's own origin; unknown host = error
  scaffold, never a guess.
- **Hook-based reads** — every backend read is a `DataState<T>` hook
  (`AccountsHook`, `BalancesHook`, `TransactionsHook`,
  `PaymentsHook`, `PayeesHook`; FDX consents/providers/recipients).
- **Idempotent provisioning** — post-sign-in `ensureLedgerCustomer`
  links the authenticated subject to a ledger customer (409-tolerant
  replays).
- **Branding via runtime context** — display-name fallback chain
  (instance → org → slug), colors, logo URLs, theme mode.

## Screens

- Accounts & balances · transactions & statements
- Transfers (single `POST /v1/postings` command shape)
- Payment history & payees
- FDX consent center — review, revoke
- Admin surface — instance dashboard, ledger product activation, FDX
  provider administration

## Deep dive

[eBank reference](/docs/reference/ebank/) — README, DESIGN, BUSINESS
harvested from `Bank8-dev/bank8-ebank`.