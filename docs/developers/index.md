---
sidebar_position: 1
---

# Developers — building on bank8

## The single-repo story

Clone any bank8 service and build — the platform SDK and the bank8 SDK
arrive as pinned git dependencies, and committed `.sqlx` caches mean
no live database is needed to compile:

```bash
git clone https://github.com/Bank8-dev/bank8-ledger.git
cd bank8-ledger
cargo build
cargo test     # offline
```

## The vertical lifecycle

```bash
make infra-up        # platform TLS-only PG 18 + Valkey (the tree's single compose)
sentin8-cli db bootstrap
vertical init        # creates the bank8 database + per-service schemas
vertical enroll      # registers services, scopes, admin UIs, triggers, ident maps
make start           # captain spawns the fleet (platform + bank8 services)
```

No migration code exists — greenfield: schema changes rewrite the init
SQL and re-run `vertical init`.

## Make targets (group folder)

| Target | Role |
|---|---|
| `make build` | all six services (release) |
| `make build-debug` | dev-profile iteration |
| `make test` | rust + flutter tests |
| `make seed` | register listings + registry |
| `make status` | fleet status (`KEY=<ip:port>`) |
| `make upgrade-instance-debug KEY=…` | rolling single-instance upgrade |

## Integration surface

- **Rust**: the `bank8` facade (see the [SDK page](/docs/sdk/))
- **Flutter**: `Bff8ApiClient` through the platform's Flutter package
  (see [samples](/docs/samples))
- **Events**: subscribe to `bank8:{service}:{resource}:{operation}`
  through Sentin8:Bus (declarative triggers at enrollment)

## E2E

`bank8-e2e` drives the real user flows through the browser + BFF
proxy only — sign-up, org/env creation, teller provisioning, customer
journeys, FDX consent — never direct SQL or backend calls.

## Deep dive

Every service's full docs live in its [reference section](/docs/reference/) —
harvested from the public repositories at build time.