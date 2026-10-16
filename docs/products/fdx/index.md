---
sidebar_position: 4
---

# Bank8:FDX — open banking data exchange

FDX v6.5 open banking between **independent institutions**: the
consent authority for every provider data call. The provider keeps the
grant; the recipient keeps its own registry; the only inter-org
contract is OAuth at the provider's authorization server — no
cross-tenant database reads exist anywhere.

## Use cases

### The consent lifecycle
- **Grant capture** — the provider-side fdx instance seeds the grant
  from the authorization server's event at code issuance; consent
  handle, provider-customer subject, and selected accounts persist as
  the provider's data-holder obligations (capture, per-request CSDF
  enforcement, revocation, audit).
- **Consent review & revocation** — the customer sees and revokes
  every grant in eBank; revocation is immediate on the provider side.
- **Recipient bookkeeping** — the recipient-side instance (eFinTech)
  keeps its own `recipient_consents` registry: customer, provider,
  scopes, selected accounts, PKCE verifier, token references, status.

### Data sharing with minimization
- **Consent middleware on every call** — valid, unexpired,
  scope-covered; there is no code path to provider data that bypasses
  it.
- **CSDF minimization** — responses are filtered to the consent's data
  scope before leaving the provider.
- **Notifications** — FDX webhooks and event notifications for consent
  and data changes.

## API surface (71 routes, selected)

| Family | Endpoints | Scope |
|---|---|---|
| Consents | `GET/POST /v1/consents`, revoke, resources | `bank8:fdx:consents:*` |
| Providers | provider registry, admin | `bank8:fdx:providers:*` |
| Recipients | recipient registry, recipient consents | `bank8:fdx:recipients:*` |
| Data sharing | consent-checked account/transaction reads | scope per consent |
| Notifications | subscriptions, events | `bank8:fdx:notifications:*` |

## Security posture

- Tokens and client secrets are **secret references** — never stored
  in application tables.
- Third-party authorization servers integrate through the provider
  bank's own integration path — the recipient never writes into the
  provider.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) — the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) — the full document, harvested from the unit's repository at build time.
- [Security](security) — the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/fdx/) — the maintainer's README in the consolidated reference section.

