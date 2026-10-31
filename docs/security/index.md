---
sidebar_position: 1
---

# Security

Bank8 inherits the [Sentin8 security model](https://sentin8.dev/docs/security)
by construction - every service runs the platform's 8-step
authorization pipeline, connects to PostgreSQL through
certificate-only identity, and stores every table behind FORCE RLS on
`env_id`. No bank8 service can weaken any of it by configuration.

## The vertical's own invariants

1. **Double-entry, provable** - posting batches are balance-validated
   per denomination *before* any write; audit + outbox inserts share
   the posting transaction (an unauditable posting never commits).
2. **Consent-checked data sharing** - every FDX provider call passes
   the consent middleware (valid, unexpired, scope-covered) plus CSDF
   minimization. There is no bypass path.
3. **Secret references only** - provider tokens, OAuth client secrets,
   and webhook signing keys live in `secrets://` references; no PAN,
   PIN, CVV, or clear payment credentials exist in any application
   table.
4. **Holder scoping** - customer-held records add holder-scoped RLS
   (`customer_id`); `bank8:holder:view-all` is an M2M-only scope.
5. **Idempotent money movement** - postings and instructions are
   idempotent per `(env_id, idempotency_key)`; terminal states never
   regress.
6. **Separation of duty** - Compliance detects; Reporting files. Risk
   measures; the ledger records. No service both detects and files.
7. **Extension code never touches the commit** - tenant hooks run as
   sandboxed WASM on Sentin8:Func (fuel + memory + epoch deadline, WASI
   rejected, imports allowlisted), invoked around the ledger's atomic
   commit. A hook moves money only by re-entering the posting pipeline
   through the certificate-bound proxy-back endpoint - so unbalanced
   batches are still rejected and idempotency still dedupes.

## Open banking between institutions

FDX consent is modeled as open banking between **independent
organizations** - the only inter-org contract is OAuth at the
provider's authorization server (Sentin8:Auth or a third-party AS).
There are no cross-tenant database reads: the provider keeps the grant;
the recipient keeps its own registry.

Read the platform's five pillars at
[sentin8.dev/docs/security](https://sentin8.dev/docs/security) -
post-quantum TLS (X25519MLKEM768 + ML-DSA-65), one identity plane,
live Shield authorization, mandatory tenant isolation, and
certificate-only workload identity.