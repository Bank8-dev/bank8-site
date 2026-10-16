---
sidebar_position: 6
---

# Bank8:Risk - prudential risk measurement

Exposures, capital (Basel), liquidity (LCR/NSFR), IFRS 9 ECL, limit
monitoring with breach events, and stress scenarios - measurement and
alerting, with an embedded measure worker consuming ledger/payments
events.

## Use cases

- **Limit monitoring** - per-customer/per-product limits; a breach
  emits `bank8:risk:limit:breached` which Compliance consumes into its
  case flow.
- **Capital & liquidity** - Basel capital ratios and LCR/NSFR series
  computed on the posting stream.
- **IFRS 9 ECL** - expected credit loss staging per portfolio.
- **Stress scenarios** - what-if measurement over scenario definitions.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Limits | definitions, monitoring, breaches | `bank8:risk:limits:*` |
| Capital | ratios, series | `bank8:risk:capital:read` |
| Liquidity | LCR/NSFR | `bank8:risk:liquidity:read` |
| ECL | staging, measurements | `bank8:risk:ecl:read` |

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/risk/) - the maintainer's README in the consolidated reference section.

