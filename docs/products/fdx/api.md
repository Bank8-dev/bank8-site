---
title: "Bank8:FDX - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Bank8-dev/bank8-fdx/edit/main/docs/openapi.json
---
Sentin8 Bank8:FDX - open banking, FDX v6.5 provider/recipient.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**87 endpoints** across 6 groups.

## fdx

### `GET /fdx/consents/callback`

`GET /fdx/consents/callback` - OAuth callback from Auth after consent. Per the FDX design §4.3: 5. External provider redirects to Auth callback 6. Auth validates state, nonce, JARM 7. Auth exchanges code for tokens 8. FDX creates consent record (active), enqueues data retrieval For now (dev), this activates the consent and redirects back to the eFintech app. In production, this would exchange the code for tokens at Auth, store the token grants, and enqueue data retrieval.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts`

`GET /fdx/v6/accounts` - search customer accounts (proxies to Ledger). The incoming Bearer (the bank's own customer token OR a delegated recipient token - both carry the provider customer as `sub`) is forwarded to Ledger, so RLS scopes the rows to the consenting customer either way (fdx DESIGN.md §1 - the consent grant keys on the token subject).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts/{id}`

`GET /fdx/v6/accounts/&#123;accountId&#125;` - account detail (proxies to Ledger).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts/{id}/payment-networks`

`GET /fdx/v6/accounts/&#123;accountId&#125;/payment-networks` - payment network info.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts/{id}/payment-networks/{paymentNetworkId}`

`GET /fdx/v6/accounts/&#123;accountId&#125;/payment-networks/&#123;paymentNetworkId&#125;` the payment network(s) for this `bankId`/`identifier` pair (; proxy to Ledger's payment-networks read, filtered to the requested id).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts/{id}/payment-networks/{paymentNetworkId}/revocation`

`GET /fdx/v6/accounts/&#123;accountId&#125;/payment-networks/&#123;paymentNetworkId&#125;/revocation` - revocation lifecycle events for the identifier.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `PUT /fdx/v6/accounts/{id}/payment-networks/{paymentNetworkId}/revocation`

`PUT /fdx/v6/accounts/&#123;accountId&#125;/payment-networks/&#123;paymentNetworkId&#125;/revocation` - revoke the payment network identifier (; persists the revocation record and answers 204 No Content per spec).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts/{id}/statements`

`GET /fdx/v6/accounts/&#123;accountId&#125;/statements` - list statements (proxy to Ledger).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts/{id}/statements/{statementId}`

`GET /fdx/v6/accounts/&#123;accountId&#125;/statements/&#123;statementId&#125;` - statement download. The Ledger statement object lives in Sentin8:Storage at `buckets/statements/objects/&#123;envId&#125;/&#123;accountId&#125;/&#123;statementId&#125;.pdf`; this handler mints a short-lived read URL via the Storage link API and answers 302 Found with the `Location` header (spec: statement image may be served inline or via redirect; §5.0a signed URLs).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/accounts/{id}/transactions`

`GET /fdx/v6/accounts/&#123;accountId&#125;/transactions` - transactions (proxies to Ledger; no hardcoded empty results).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/availability`

`GET /fdx/v6/availability` - provider availability status.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/capability`

`GET /fdx/v6/capability` - provider capability metadata.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/certification-metrics`

`GET /fdx/v6/certification-metrics` - certification metrics (design §10: counts over the tables this service already owns - `data_call*` rows in `audit_events` plus consent granted/revoked transitions - behind a short bounded cache; the rollup table + evidence admin page are the follow-on). The literal-zero stub is gone: these are real counters now.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/consents/{id}`

`GET /fdx/v6/consents/&#123;consentId&#125;` - consent grant introspection.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/customers`

`GET /fdx/v6/customers` - list customers (proxy to Ledger).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/customers/current`

`GET /fdx/v6/customers/current` - current customer (proxy to Ledger).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/notification-subscriptions`

`GET /fdx/v6/notification-subscriptions` - list subscriptions.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/notification-subscriptions`

`POST /fdx/v6/notification-subscriptions` - create a subscription /. The per-subscription HMAC secret is generated here and stored as a sentin8-secrets:// reference - never plaintext.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/notification-subscriptions/{subscriptionId}`

`GET /fdx/v6/notification-subscriptions/&#123;subscriptionId&#125;` - detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `DELETE /fdx/v6/notification-subscriptions/{subscriptionId}`

`DELETE /fdx/v6/notification-subscriptions/&#123;subscriptionId&#125;` - delete a subscription (; soft delete + release the secret reference).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/notifications`

`GET /fdx/v6/notifications` - notification feed (polling alternative to webhook delivery; ).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/notifications`

`POST /fdx/v6/notifications` - inbound notification ingest ( ``fdx:notifications:publish``). Records the notification, queues it for delivery to matching subscriptions, and emits the Bus event the delivery consumer reacts to.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/operation-support`

`GET /fdx/v6/operation-support` - explicit machine-readable statement of which FDX families this provider implements vs reserves (§3.1); pairs with the middleware 501s so clients can preflight.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/payees`

`GET /fdx/v6/payees` - payee search/list (proxy to Bank8:Payments `GET /v1/payees`).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/payees`

`POST /fdx/v6/payees` - create a payee (proxy to Bank8:Payments).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `PUT /fdx/v6/payees/{payeeId}`

`PUT /fdx/v6/payees/&#123;payeeId&#125;` - update a payee (proxy to Bank8:Payments).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/payment-initiation-parties`

`POST /fdx/v6/payment-initiation-parties` - register a payment initiation party.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/payment-initiation-parties/{partyId}`

`GET /fdx/v6/payment-initiation-parties/&#123;paymentInitiationPartyId&#125;` party detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/payment-initiation-parties/{partyId}/payment-methods`

`POST /fdx/v6/payment-initiation-parties/&#123;partyId&#125;/payment-methods` register a payment method for the party.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `DELETE /fdx/v6/payment-initiation-parties/{partyId}/payment-methods/{regId}`

`DELETE /fdx/v6/payment-initiation-parties/&#123;partyId&#125;/payment-methods/&#123;regId&#125;` - revoke a party payment method.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/payments`

`POST /fdx/v6/payments` - payment initiation (proxy to Payments).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/payments/{paymentId}`

`GET /fdx/v6/payments/&#123;paymentId&#125;` - payment status read (proxy to Bank8:Payments `GET /v1/payments/&#123;id&#125;`).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/recurring-payments`

`GET /fdx/v6/recurring-payments` - search recurring payments (; proxies the payments scheduled-payments list).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/recurring-payments`

`POST /fdx/v6/recurring-payments` - create a recurring payment (; backed by Bank8:Payments `scheduled_payments`).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/recurring-payments/{recurringPaymentId}`

`GET /fdx/v6/recurring-payments/&#123;recurringPaymentId&#125;` - detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/recurring-payments/{recurringPaymentId}/payments`

`GET /fdx/v6/recurring-payments/&#123;recurringPaymentId&#125;/payments` - the executed occurrences (; proxies payments for the source schedule).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/transfers`

`POST /fdx/v6/transfers` - account transfer initiation (proxy to Payments).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/transfers/{transferId}`

`GET /fdx/v6/transfers/&#123;transferId&#125;` - transfer status read (proxy to Bank8:Payments).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `DELETE /fdx/v6/transfers/{transferId}`

`DELETE /fdx/v6/transfers/&#123;transferId&#125;` - cancel a transfer (spec `cancelTransfer`; proxies Bank8:Payments cancel where the scheme allows).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `PATCH /fdx/v6/transfers/{transferId}`

`PATCH /fdx/v6/transfers/&#123;transferId&#125;` - update a transfer (amount/due date where the scheme allows; proxies Bank8:Payments).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /v1/admin/audit`

`GET /v1/admin/audit` - audit trail (admin).

Gate: `fdx:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of audit entries | -[] |
| 403 | Missing `fdx:admin` scope | - |

### `GET /v1/admin/consents`

`GET /v1/admin/consents` - consent overview (admin).

Gate: `fdx:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `customer_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of all consents | `ConsentResponse`[] |
| 403 | Missing `fdx:admin` scope | - |

### `GET /v1/admin/provider-profile`

`GET /v1/admin/provider-profile` - get provider profile.

Gate: `fdx:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Provider profile | - |
| 403 | Missing `fdx:admin` scope | - |

### `PUT /v1/admin/provider-profile`

`PUT /v1/admin/provider-profile` - update provider profile.

Gate: `fdx:admin`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fdx_version` | string | yes |  |
| `issuer_url` | string | yes |  |
| `provider_name` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Provider profile updated | - |
| 403 | Missing `fdx:admin` scope | - |

### `GET /v1/admin/recipients`

`GET /v1/admin/recipients` - list registered data recipients.

Gate: `fdx:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of recipients | -[] |
| 403 | Missing `fdx:admin` scope | - |

### `POST /v1/admin/recipients/{id}/activate`

`POST /v1/admin/recipients/&#123;id&#125;/activate` - activate a data recipient.

Gate: `fdx:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recipient activated | - |
| 403 | Missing `fdx:admin` scope | - |
| 404 | Recipient not found | - |

### `POST /v1/admin/recipients/{id}/suspend`

`POST /v1/admin/recipients/&#123;id&#125;/suspend` - suspend a data recipient.

Gate: `fdx:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recipient suspended | - |
| 403 | Missing `fdx:admin` scope | - |
| 404 | Recipient not found | - |

### `GET /v1/recipient/accounts`

`GET /v1/recipient/accounts` - list consented accounts for the recipient. If `consent_id` is provided, returns only the accounts the customer selected during the provider's consent screen (per FDX UX Guidelines §3.1.6 "Select Accounts"). The account IDs are stored in consent_resources and used to filter the Ledger account list. If no consent_id is provided, returns all accounts (backward compat).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /v1/recipient/accounts/{id}/transactions`

`GET /v1/recipient/accounts/&#123;id&#125;/transactions` - recipient transaction history.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /v1/recipient/consents`

`GET /v1/recipient/consents` - list active consents for the recipient. Returns `&#123;"consents": [...]&#125;` (wrapped) so the eFintech app's FdxConsentsHook can parse `response.data['consents']`.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `customer_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of recipient consents | - |
| 403 | Missing `fdx:read` scope | - |

### `POST /v1/recipient/consents/start`

`POST /v1/recipient/consents/start` - start consent authorization. The two-ledger recipient flow (fdx DESIGN.md §1 + §4 consent-flow sequence): the recipient-side fdx instance writes its OWN registry (a `pending` row in `recipient_consents`, in the recipient tenant), ensures its per-provider OAuth client exists at the provider's authorization server (DCR, cached in `fdx.recipients`), and pushes a PAR request whose `state` carries `"<consent handle>\|<app origin>"`. The AS's authorize screen runs the ceremony; the browser redirect comes back to THIS instance's `/fdx/consents/callback` (the registered redirect_uri), which activates the row and exchanges the code. The provider's grant row is seeded by the provider's OWN auth-family consumer from ``sentin8:auth:grant:created`` - never by this side.

Gate: `fdx:read`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_redirect_uri` | string,null | no | The app frontend URL to redirect back to after consent (passed by BFF from the TLS hostname). Encoded into the OAuth `state` so it survives the PAR/authorize/callback round-trip. |
| `customer_id` | string | yes |  |
| `provider_id` | string | yes |  |
| `redirect_url` | string,null | no |  |
| `scopes` | string[] | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Consent started with authorization URL | - |
| 403 | Missing `fdx:read` scope | - |

### `GET /v1/recipient/consents/{id}`

`GET /v1/recipient/consents/&#123;id&#125;` - get a specific recipient consent.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recipient consent detail | `ConsentResponse` |
| 403 | Missing `fdx:read` scope | - |
| 404 | Consent not found | - |

### `POST /v1/recipient/consents/{id}/refresh`

`POST /v1/recipient/consents/&#123;id&#125;/refresh` - trigger data refresh.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Consent refreshed | - |
| 403 | Missing `fdx:read` scope | - |
| 404 | Consent not found | - |

### `POST /v1/recipient/consents/{id}/revoke`

`POST /v1/recipient/consents/&#123;id&#125;/revoke` - revoke a recipient consent.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Consent revoked | `ConsentResponse` |
| 403 | Missing `fdx:read` scope | - |

### `GET /v1/recipient/notifications`

`GET /v1/recipient/notifications` - notification feed for the recipient.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /v1/recipient/providers`

`GET /v1/recipient/providers` - list FDX data providers from the `provider_profiles` registry. Provider profiles are auto-registered when an environment's `is_fdx_provider` flag is turned on (see Sys `update_env`), with the env's auth domain used as the issuer URL. The table has no RLS, so the catalog is visible cross-org - any recipient can discover and connect to any active provider. No static seed data is required. Response shape matches the eFintech recipient catalog contract: `&#123; "providers": [&#123; id, name, supportedDataClusters, status, ... &#125;] &#125;`, where each card reads `name`, `supportedDataClusters`, and `status`.

Gate: `fdx:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of FDX data providers | - |
| 403 | Missing `fdx:read` scope | - |

### `GET /v1/recipient/providers/{id}`

`GET /v1/recipient/providers/&#123;id&#125;` - get a specific FDX data provider.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | FDX data provider detail | - |
| 403 | Missing `fdx:read` scope | - |
| 404 | Provider not found | - |


## consent

### `PUT /fdx/v6/consents/{id}/lifecycle`

`PUT /fdx/v6/consents/&#123;consentId&#125;/lifecycle` - set the consent duration model.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /fdx/v6/consents/{id}/revocation`

`GET /fdx/v6/consents/&#123;consentId&#125;/revocation` - the revocation record (reason/initiator/timestamp; ).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `PUT /fdx/v6/consents/{id}/revocation`

`PUT /fdx/v6/consents/&#123;consentId&#125;/revocation` - the FDX RevocationRequest (reason/initiator/otherReason). Existing handler `handlers::revoke_fdx_consent` is extended here: the revocation row is persisted and a CONSENT_REVOKED notification is queued.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /fdx/v6/consents/{id}/revoke`

`POST /fdx/v6/consents/&#123;consentId&#125;/revoke` - POST alias of the PUT revocation surface (fdx DESIGN.md §4): the recipient-side fdx instance calls this with the delegated provider token after revoking its own registry row, so a fintech-initiated revocation lands on the provider's grant ledger and takes effect on the next data call. The delegated token's `sub` IS the grant's customer - the same subject the bank's own dashboard revokes for.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Revoked via the POST alias (delegates to the PUT revocation surface) | - |
| 403 | Delegated subject must be the grant's customer | - |

### `GET /v1/auth/consent/accounts`

`GET /v1/auth/consent/accounts` - data endpoint for account selection. Returns the customer's accounts at this Data Provider. Called by the RFW page's data fetch (proxied by Sentin8:Auth with a short-lived JWT). Fetches accounts from Bank8:Ledger.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /v1/auth/consent/approve`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /v1/auth/consent/deny`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /v1/auth/consent/ui`

`GET /v1/auth/consent/ui` - return RFW consent page definition. Returns a JSON RFW definition that auth-ui renders. The definition includes: - Scope list with FDX-specific descriptions and Material Icons code points - Account selection DataTable (checkboxes, nickname, type, masked number, balance) - "Authorize" button (POST to /v1/auth/consent/approve) - "Deny" button (POST to /v1/auth/consent/deny) - Data endpoint declaration for account fetch (/v1/auth/consent/accounts)

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /v1/consents`

`GET /v1/consents` - list consents.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /v1/consents`

`POST /v1/consents` - create a consent grant.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `GET /v1/consents/{id}`

`GET /v1/consents/&#123;id&#125;` - consent detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

### `POST /v1/consents/{id}/revoke`

`POST /v1/consents/&#123;id&#125;/revoke` - revoke a consent.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |


## policy

### `GET /v1/admin/attributes`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Principal attributes of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/attributes`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute stored | - |
| 400 | Invalid attribute definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/attributes`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy sets of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/disable`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets disabled | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/enforce`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to enforce mode | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/shadow`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Sets switched to shadow mode | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The policy set | - |
| 403 | Caller lacks the admin scope | - |
| 404 | Unknown policy set name | - |

### `PUT /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set stored | - |
| 400 | Invalid policy set definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/policy-sets/{name}`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Policy set deleted | - |
| 403 | Caller lacks the admin scope | - |

### `POST /v1/admin/policy-sets/{name}/test`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `name` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dry-run decision trace | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations`

Gate: `sentin8:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | ReBAC relations of this service | -[] |
| 403 | Caller lacks the admin scope | - |

### `PUT /v1/admin/relations`

Gate: `sentin8:admin`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation stored | - |
| 400 | Invalid relation definition | - |
| 403 | Caller lacks the admin scope | - |

### `DELETE /v1/admin/relations`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Relation deleted | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/relations/check`

Gate: `sentin8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `subject` | query | yes | string |
| `relation` | query | yes | string |
| `object` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | The check verdict | - |
| 403 | Caller lacks the admin scope | - |


## admin-ui

### `GET /v1/admin/ui/{page}`

GET /v1/admin/ui/&#123;page&#125; - return RFW definition for the requested admin page.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |


## meta

### `GET /v1/health`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |


## internal

### `POST /v1/internal/steps/execute`

`POST /v1/internal/steps/execute` - Flow proxy-back for FDX domain steps.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the FDX consent/scope gate | - |

