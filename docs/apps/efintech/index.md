---
sidebar_position: 2
---

# eFinTech - FDX recipient app

The fintech side of open banking: a registered FDX data recipient
consuming consented provider data. This app demonstrates the full
recipient flow - client registration, consent initiation, callback
activation, and consented reads through Bank8:FDX.

## What it demonstrates

- **Recipient registry bookkeeping** - the fintech's own view of its
  customers' consents (provider, scopes, selected accounts, PKCE
  verifier, token references, status).
- **OAuth as the only inter-org contract** - the recipient never reads
  the provider's database; it calls consent-scoped APIs and honors the
  provider's authorization server.
- **Data minimization in practice** - reads surface only what the
  consent covers (CSDF-filtered by the provider).

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/efintech/) - the maintainer's README in the consolidated reference section.

