---
sidebar_position: 1
---

# Samples

First calls against a running bank8 deployment — through the BFF
proxy, from cURL and Dart.

## 1. Open an account (customer app flow)

```bash
curl -c jar.txt https://bff.{env}.{org}.example.com/v1/sign-in \
  -H 'content-type: application/json' \
  -d '{"email": "you@example.com", "password": "…"}'

curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/ledger/v1/accounts \
  -H 'content-type: application/json' \
  -d '{
    "product_id": "<product>",
    "customer_id": "<customer>",
    "denomination": "USD",
    "idempotency_key": "open-acct-001"
  }'
```

## 2. Post a transfer

```bash
curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/ledger/v1/postings \
  -H 'content-type: application/json' \
  -d '{
    "batch_id": "b-001",
    "idempotency_key": "b-001",
    "instructions": [{
      "type": "transfer",
      "from_account_id": "<acct-a>",
      "to_account_id": "<acct-b>",
      "amount": "10.00",
      "denomination": "USD",
      "value_date": "2026-10-15"
    }]
  }'
```

The batch is balance-validated before any write — an unbalanced batch
is 422, never a compensating entry. Retries with the same
`idempotency_key` are safe.

## 3. Grant an FDX consent (open banking)

```bash
curl -b jar.txt \
  https://bff.{env}.{org}.example.com/proxy/fdx/v1/consents \
  -H 'content-type: application/json' \
  -d '{
    "provider_id": "<provider>",
    "scopes": ["accounts.basic", "accounts.transactions"],
    "selected_account_ids": ["<acct-a>"]
  }'
```

Every subsequent provider data call passes the consent middleware and
CSDF minimization — the customer can revoke at any time in eBank.

## 4. From Dart (the eBank pattern)

```dart
final ctx = await fetchRuntimeContext();
final bff = Bff8ApiClient(origin: ctx.origin);

// transfer command shape: one call, safe retries
await bff.post('ledger', '/v1/postings', body: {
  'batch_id': 'b-001',
  'idempotency_key': 'b-001',
  'instructions': [transferInstruction],
});
```

## 5. From Rust (vertical consumer)

```rust
use bank8::ledger::client::LedgerClient;

let balances = ledger_client
    .account_balances(&account_id)
    .await?;
```

The client rides the platform's certificate-presenting transport — no
token configuration, no static secret to leak.