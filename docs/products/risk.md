---
sidebar_position: 6
---

# Bank8:Risk — prudential risk measurement

Exposures, capital (Basel), liquidity (LCR/NSFR), IFRS 9 ECL, limit
monitoring with breach events, and stress scenarios — measurement and
alerting, with an embedded measure worker consuming ledger/payments
events.

## Use cases

- **Limit monitoring** — per-customer/per-product limits; a breach
  emits `bank8:risk:limit:breached` which Compliance consumes into its
  case flow.
- **Capital & liquidity** — Basel capital ratios and LCR/NSFR series
  computed on the posting stream.
- **IFRS 9 ECL** — expected credit loss staging per portfolio.
- **Stress scenarios** — what-if measurement over scenario definitions.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Limits | definitions, monitoring, breaches | `bank8:risk:limits:*` |
| Capital | ratios, series | `bank8:risk:capital:read` |
| Liquidity | LCR/NSFR | `bank8:risk:liquidity:read` |
| ECL | staging, measurements | `bank8:risk:ecl:read` |

## Deep dive

[Risk reference](/docs/reference/risk/) — harvested from
`Bank8-dev/bank8-risk`.