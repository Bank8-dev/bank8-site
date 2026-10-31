---
sidebar_position: 3
---

# Bank8:Payments - payment orchestration

Money movement over every rail: instructions, ISO 20022 scheme flows,
cards, mandates, rules - with an embedded async re-drive worker for
at-fault settlement recovery. Payments orchestrates; **Bank8:Ledger is
the only writer of money positions** (never shadow-written here).

## Use cases

### Rails & schemes
- **ISO 20022 flows** - pain/pacs message families per scheme; each
  instruction is a durable record with its own lifecycle.
- **Cards** - authorization capture flows over card networks.
- **Mandates** - recurring payment mandates with their own state
  machine (draft → active → suspended → cancelled).

### Orchestration discipline
- **Step execution in Sentin8:Flow** - multi-leg scheme flows run as
  durable workflows; each step calls back for its data; failures
  retry, compensate, or park.
- **Idempotency everywhere** - instructions are idempotent per key;
  terminal states never regress (guarded updates).
- **Re-drive worker** - at-fault settlements re-drive automatically
  (embedded SSE consumer over Bus events).

### Extensible instruction logic
- **Hooks as WASM** - instruction logics compose `BasicStep` hooks
  whose code runs as sandboxed WASM modules on Sentin8:Func (see
  [Extending Bank8](/docs/extensibility)); the orchestrator stays out
  of the sandbox and out of the blast radius.
- **Zero-downtime logic releases** - ship a new hook with plain
  uploads: `upload → validate → activate` on Func supersedes the
  running module without a payments restart; per-step
  `wasmModuleId` bindings point at the new version.
- **Bulk migration** - `POST /v1/logics/{id}/migrate-wasm` walks an
  instruction logic's inline hooks and turns them into Func modules
  automatically (per-step results reported).

### Cross-vertical consumers
- **Hotel8 commerce** - property POS/settlement flows delegate here.
- **Bill8 settlement** - billing payments settle through the same
  orchestration.

## API surface (90 endpoints, selected)

| Family | Endpoints | Scope |
|---|---|---|
| Instructions | `POST /v1/instructions`, status, cancel, re-drive | `bank8:payments:instructions:*` |
| Schemes | scheme flows, network configs | `bank8:payments:schemes:*` |
| Cards | authorizations, captures | `bank8:payments:cards:*` |
| Mandates | `GET/POST /v1/mandates`, lifecycle | `bank8:payments:mandates:*` |
| Rules | routing/validation rules | `bank8:payments:rules:*` |
| Logics (hooks) | `GET/POST /v1/logics`, `POST /v1/logics/{id}/migrate-wasm` (inline hooks → Func WASM) | `bank8:payments:logics:*` |

## Events (the vertical's busiest emitter)

`bank8:payments:instruction:completed` drives ledger statement
regeneration and downstream consumers (risk measurement, compliance
monitoring) through declarative triggers.

## Full documentation

The complete detail lives in this product's sub-pages:

- [Architecture (DDD)](design) - the full document, harvested from the unit's repository at build time.
- [Business rules (BRD)](business) - the full document, harvested from the unit's repository at build time.
- [Security](security) - the full document, harvested from the unit's repository at build time.
- [Overview (repo README)](/docs/reference/payments/) - the maintainer's README in the consolidated reference section.

