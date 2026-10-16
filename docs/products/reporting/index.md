---
sidebar_position: 5
---

# Bank8:Reporting - regulatory reporting

The vertical's single filing executor: jurisdiction registry, filing
calendar, generation and packaging (XBRL/CSV), submission and amendment,
AML/CTF filings. Compliance and Risk **detect**; Reporting is the only
service that talks to regulators.

## Use cases

- **Filing calendar** - per-jurisdiction obligations schedule
  themselves (declarative cron schedules); due filings generate,
  package, and submit without operator babysitting.
- **Generation** - filings assemble from ledger/payments/compliance
  data through generation profiles (XBRL, CSV) into platform storage.
- **Amendments** - a rejected or corrected filing amends through the
  same auditable lifecycle.

## API surface (selected)

| Family | Endpoints | Scope |
|---|---|---|
| Jurisdictions | registry CRUD | `bank8:reporting:jurisdictions:*` |
| Calendar | filings due, schedules | `bank8:reporting:calendar:*` |
| Filings | generate, package, submit, amend | `bank8:reporting:filings:*` |

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/reporting/) - the maintainer's README in the consolidated reference section.

