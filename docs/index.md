---
sidebar_position: 1
---

# Bank8 - the finance vertical

Bank8 is banking, payments, and open banking composed on the Sentin8
platform: six Rust services that own the bank8 database, a unified Rust
SDK facade, and four Flutter apps. It contains **no platform
infrastructure of its own** - identity, events, storage, scheduling,
workflows, and supervision are consumed from the platform, so every
service inherits the authorization pipeline and audit posture.

```mermaid
graph TD
    subgraph apps["Flutter apps"]
        EB["ebank (customer)"]
        EF["efintech (FDX recipient)"]
        ET["eteller (staff)"]
        AD["admin (staff)"]
    end
    subgraph vertical["bank8 vertical"]
        LEDGER["Bank8:Ledger"]
        PAY["Bank8:Payments"]
        FDX["Bank8:OpenCA"]
        RPT["Bank8:Reporting"]
        RSK["Bank8:Risk"]
        CMP["Bank8:Compliance"]
    end
    EB & EF & ET & AD -->|"via Sentin8:BFF"| vertical
    PAY -->|"postings"| LEDGER
    FDX -->|"consent-checked reads"| LEDGER & PAY
    CMP -->|"suspicious:detected"| RPT
    RSK -->|"limit:breached"| CMP
```

## The products

| Product | Role |
|---|---|
| [Ledger](/docs/products/ledger) | core ledger - accounts, products, postings, balances |
| [Payments](/docs/products/payments) | orchestration over ISO 20022 schemes, cards, mandates |
| [Open Banking (CA)](/docs/products/open-ca) | open banking - consent-checked data sharing |
| [Reporting](/docs/products/reporting) | regulatory filings - calendar, generation, submission |
| [Risk](/docs/products/risk) | prudential risk - capital, liquidity, limits, ECL |
| [Compliance](/docs/products/compliance) | AML/CTF - KYC, screening, monitoring, cases |

## Security

Bank8 inherits the platform's five pillars - post-quantum TLS, one
identity plane, live Shield authorization, FORCE-RLS tenant isolation,
certificate-only workload identity - and adds its own invariants:
double-entry balance validation before any write, consent middleware on
every FDX call, and secret references only (no PAN/PIN/CVV anywhere).
Read the [security page](/docs/security).

## Who builds on bank8

Other verticals delegate their money movement here: hotel8's property
commerce and bill8's billing settlement both ride
[Bank8:Payments](/docs/products/payments).