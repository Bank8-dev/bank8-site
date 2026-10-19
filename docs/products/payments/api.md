---
title: "Bank8:Payments - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Bank8-dev/bank8-payments/edit/main/docs/openapi.json
---
Sentin8 Bank8:Payments - payment orchestration, delegates to Sentin8:Flow.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**242 endpoints** across 7 groups.

## payments

### `GET /v1/3ds-records`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/account-links`

`GET /v1/account-links` - list account links.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/account-links`

`POST /v1/account-links` - create an account link.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/account-links/{id}`

`GET /v1/account-links/&#123;id&#125;` - get an account link.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/account-ranges`

`GET /v1/account-ranges` - list account ranges.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/account-ranges`

`POST /v1/account-ranges` - create an account range.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/aggregations`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/allowed-endpoints`

`GET /v1/allowed-endpoints` - scope→endpoint map for this service (helps clients pick the right token scope per endpoint; ).

Gate: `bank8:payments:users:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Allowed endpoints (scope → endpoint map) | `AllowedEndpointResponse`[] |
| 403 | Missing `bank8:payments:users:read` scope | - |

### `GET /v1/app/dashboard-versions`

`GET /v1/app/dashboard-versions` - list dashboard versions (app-scoped).

Gate: `bank8:payments:app:dashboards:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dashboard versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:app:dashboards:read` scope | - |

### `POST /v1/app/dashboard-versions`

`POST /v1/app/dashboard-versions` - create a dashboard version.

Gate: `bank8:payments:app:dashboards:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Dashboard version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:app:dashboards:write` scope | - |

### `POST /v1/app/dashboard-versions/validate`

`POST /v1/app/`dashboard-versions:validate`` - validate a dashboard version.

Gate: `bank8:payments:app:dashboards:read`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Validation result | - |
| 403 | Missing `bank8:payments:app:dashboards:read` scope | - |

### `GET /v1/app/template-presets`

`GET /v1/app/template-presets` - list presets for a template.

Gate: `bank8:payments:app:templates:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `template_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Presets | `TemplatePresetResponse`[] |
| 403 | Missing `bank8:payments:app:templates:read` scope | - |

### `POST /v1/app/template-presets`

`POST /v1/app/template-presets` - create a reusable payment-initiation preset for a template.

Gate: `bank8:payments:app:templates:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | yes |  |
| `preset_values` | `Value` | no |  |
| `template_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Preset created | `TemplatePresetResponse` |
| 403 | Missing `bank8:payments:app:templates:write` scope | - |

### `DELETE /v1/app/template-presets/{id}`

`DELETE /v1/app/template-presets/&#123;id&#125;` - delete a preset.

Gate: `bank8:payments:app:templates:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Preset deleted | - |
| 403 | Missing `bank8:payments:app:templates:write` scope | - |
| 404 | Not found | - |

### `GET /v1/app/template-versions`

`GET /v1/app/template-versions` - list template versions (app-scoped).

Gate: `bank8:payments:app:templates:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Template versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:app:templates:read` scope | - |

### `POST /v1/app/template-versions`

`POST /v1/app/template-versions` - create a template version (app-scoped).

Gate: `bank8:payments:app:templates:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | string | no |  |
| `template_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Template version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:app:templates:write` scope | - |

### `POST /v1/app/template-versions/validate`

`POST /v1/app/`template-versions:validate`` - validate a template version payload without creating it.

Gate: `bank8:payments:app:templates:read`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | string | no |  |
| `template_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Validation result | - |
| 403 | Missing `bank8:payments:app:templates:read` scope | - |

### `GET /v1/audit`

`GET /v1/audit` - query audit events (Story ). Returns a paginated list of audit events with filters by action, target resource type, and date range. Requires ``payments:admin`` scope.

Gate: `bank8:payments:audit:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `action` | query | no | string |
| `target_resource_type` | query | no | string |
| `page_size` | query | no | integer |
| `page_token` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of audit events | `AuditEventResponse`[] |
| 403 | Missing `bank8:payments:audit:read` scope | - |

### `GET /v1/business-day-definitions`

`GET /v1/business-day-definitions` - list business day definitions.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/business-day-definitions`

`POST /v1/business-day-definitions` - create a business day definition.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/calendars`

`GET /v1/calendars` - list calendars.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/calendars`

`POST /v1/calendars` - create a calendar.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/card-products`

`GET /v1/card-products` - list card products.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/card-products`

`POST /v1/card-products` - create a card product.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/card-products/{id}`

`GET /v1/card-products/&#123;id&#125;` - get a card product.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/card-tokens`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/cardholders`

`GET /v1/cardholders` - list cardholders. .7: holder callers see only their own cardholders (forced here; RLS is the backstop). Staff/sys/M2M see all active cardholders in the env.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/cardholders`

`POST /v1/cardholders` - create a cardholder. .7: `customer_id` is a Ledger customer id (by value; existence is the caller's contract - Ledger owns customer validation via its public API; no cross-schema FK).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/cardholders/{id}`

`GET /v1/cardholders/&#123;id&#125;` - get a cardholder. .7: holder callers can only fetch their own cardholders.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/cards`

`GET /v1/cards` - list cards.

Gate: `bank8:payments:cards:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of cards | `CardResponse`[] |
| 403 | Missing `bank8:payments:cards:read` scope | - |

### `POST /v1/cards`

`POST /v1/cards` - create a card. Gated by `FeatureGate::Cards`. The PAN is obfuscated with the placeholder `CardEncryption` before being stored in `encrypted_pan`.

Gate: `bank8:payments:cards:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_product_id` | string,null | no |  |
| `card_type` | string,null | no |  |
| `cardholder_id` | string | yes |  |
| `expiry_date` | string,null | no |  |
| `pan` | string,null | no | Full PAN. Only the last 4 digits are stored in `pan_last_digits`; the full PAN is obfuscated via `cards::CardEncryption` and stored in the `encrypted_pan` column. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card created | `CardResponse` |
| 403 | Missing `bank8:payments:cards:write` scope | - |

### `PUT /v1/cards/3ds-records/{id}`

`PUT /v1/cards/3ds-records/&#123;id&#125;` - update 3DS authentication state (; also fixes the list route path to /v1/cards/3ds-records).

Gate: `bank8:payments:3ds-records:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authentication_status` | string,null | no | pending \| frictionless \| challenged \| authenticated \| failed \| declined |
| `risk_score` | string,null | no |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | 3DS record updated | - |
| 403 | Missing `bank8:payments:3ds-records:write` scope | - |
| 404 | Record not found | - |

### `GET /v1/cards/card-order-batches`

`GET /v1/cards/card-order-batches` - list order batches.

Gate: `bank8:payments:card-orders:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Order batches | `CardOrderBatchResponse`[] |
| 403 | Missing `bank8:payments:card-orders:read` scope | - |

### `POST /v1/cards/card-order-batches`

`POST /v1/cards/card-order-batches` - group card orders into a manufacturing batch.

Gate: `bank8:payments:card-orders:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `order_ids` | string[] | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Order batch created | `CardOrderBatchResponse` |
| 400 | Empty order list | - |
| 403 | Missing `bank8:payments:card-orders:write` scope | - |

### `GET /v1/cards/card-orders`

`GET /v1/cards/card-orders` - list card orders (business ``card_orders:read``; `:batchGet` semantics via id list param).

Gate: `bank8:payments:card-orders:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card orders | `CardOrderResponse`[] |
| 403 | Missing `bank8:payments:card-orders:read` scope | - |

### `POST /v1/cards/card-orders`

`POST /v1/cards/card-orders` - create a card order (manufacturing / personalisation bureau).

Gate: `bank8:payments:card-orders:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_id` | string | yes |  |
| `shipping_address` | `Value` | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card order created | `CardOrderResponse` |
| 403 | Missing `bank8:payments:card-orders:write` scope | - |
| 404 | Card not found | - |

### `GET /v1/cards/card-tokens/{id}`

`GET /v1/cards/card-tokens/&#123;id&#125;` - fetch a card token's lifecycle state (; `tokens/&#123;token_id&#125;` business shape).

Gate: `bank8:payments:cards:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card token | - |
| 403 | Missing `bank8:payments:cards:read` scope | - |
| 404 | Token not found | - |

### `PUT /v1/cards/card-tokens/{id}`

`PUT /v1/cards/card-tokens/&#123;id&#125;` - card token lifecycle write (MDES; ).

Gate: `bank8:payments:card-tokens:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | string,null | no | PENDING_CREATION \| INACTIVE \| ACTIVE \| SUSPENDED |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Token updated | - |
| 403 | Missing `bank8:payments:card-tokens:write` scope | - |
| 404 | Token not found | - |

### `PUT /v1/cards/cardholders/{id}`

`PUT /v1/cards/cardholders/&#123;id&#125;` - update a cardholder. **CLOSED status cascades: all the cardholder's cards transition to DISABLED** (business rule; done in the same transaction).

Gate: `bank8:payments:cardholders:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | string,null | no | INACTIVE \| ACTIVE \| SUSPENDED \| CLOSED (CLOSED cascades to cards). |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Cardholder updated (cascade applied when closing) | - |
| 403 | Missing `bank8:payments:cardholders:write` scope | - |
| 404 | Cardholder not found | - |

### `GET /v1/cards/cardholders/{id}/cards`

`GET /v1/cards/cardholders/&#123;id&#125;/cards` - list a cardholder's cards.

Gate: `bank8:payments:cards:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Cards for the cardholder | - |
| 403 | Missing `bank8:payments:cards:read` scope | - |

### `GET /v1/cards/issuance`

`GET /v1/cards/issuance` - issuance list (business ``issuance:read``).

Gate: `bank8:payments:issuance:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Issued cards | `CardResponse`[] |
| 403 | Missing `bank8:payments:issuance:read` scope | - |

### `POST /v1/cards/issuance/issue`

`POST /v1/cards/`issuance:issue`` - issue a card (delegates to the existing card-issuing handler; the business route shape).

Gate: `bank8:payments:issuance:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `card_product_id` | string,null | no |  |
| `card_type` | string,null | no |  |
| `cardholder_id` | string | yes |  |
| `expiry_date` | string,null | no |  |
| `pan` | string,null | no | Full PAN. Only the last 4 digits are stored in `pan_last_digits`; the full PAN is obfuscated via `cards::CardEncryption` and stored in the `encrypted_pan` column. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card issued | `CardResponse` |
| 403 | Missing `bank8:payments:issuance:write` scope | - |

### `POST /v1/cards/issuance/{id}/get-details`

`POST /v1/cards/issuance/&#123;id&#125;:getDetails` - fetch the encrypted card details (ECDH P-256 session; client-side decrypt only, §4.12).

Gate: `bank8:payments:issuance:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Encrypted card details (opaque envelope) | - |
| 403 | Missing `bank8:payments:issuance:read` scope | - |
| 404 | Card not found | - |

### `POST /v1/cards/issuance/{id}/get-pin`

`POST /v1/cards/issuance/&#123;id&#125;:getPIN` - fetch the encrypted PIN block.

Gate: `bank8:payments:issuance:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Encrypted PIN envelope | - |
| 403 | Missing `bank8:payments:issuance:read` scope | - |
| 404 | Card not found | - |

### `POST /v1/cards/issuance/{id}/replace`

`POST /v1/cards/issuance/&#123;id&#125;:replace` - replace a card (delegates to the existing replace handler; business route shape).

Gate: `bank8:payments:issuance:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card replaced | - |
| 403 | Missing `bank8:payments:issuance:write` scope | - |
| 404 | Card not found | - |

### `POST /v1/cards/issuance/{id}/reset-lvt`

`POST /v1/cards/issuance/&#123;id&#125;:resetLVT` - reset the Limited Value Tracker (contactless accumulator; ).

Gate: `bank8:payments:issuance:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | LVT reset | - |
| 403 | Missing `bank8:payments:issuance:write` scope | - |
| 404 | Card not found | - |

### `POST /v1/cards/issuance/{id}/reset-pin-attempts`

`POST /v1/cards/issuance/&#123;id&#125;:resetPINAttempts` - reset the PIN try counter.

Gate: `bank8:payments:issuance:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | PIN attempts reset | - |
| 403 | Missing `bank8:payments:issuance:write` scope | - |
| 404 | Card not found | - |

### `POST /v1/cards/issuance/{id}/update-pin`

`POST /v1/cards/issuance/&#123;id&#125;:updatePIN` - update the card PIN (hashes the new PIN server-side; never stored in clear, §4.12).

Gate: `bank8:payments:issuance:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `new_pin_hash` | string | yes | Pre-hashed PIN block from the encrypted session (server never sees the clear PIN). |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | PIN updated | - |
| 403 | Missing `bank8:payments:issuance:write` scope | - |
| 404 | Card not found | - |

### `GET /v1/cards/products/{id}`

`GET /v1/cards/products/&#123;id&#125;` - card product with issuing/expiry plan and card profile.

Gate: `bank8:payments:cards:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card product | `CardProductPlanResponse` |
| 403 | Missing `bank8:payments:cards:read` scope | - |
| 404 | Card product not found | - |

### `PUT /v1/cards/products/{id}`

`PUT /v1/cards/products/&#123;id&#125;` - update issuing/expiry plan on a card product.

Gate: `bank8:payments:cards:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry_plan` | null \\| `Value` | no |  |
| `issuing_plan` | null \\| `Value` | no |  |
| `profile_id` | string,null | no |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card product updated | `CardProductPlanResponse` |
| 403 | Missing `bank8:payments:cards:write` scope | - |
| 404 | Card product not found | - |

### `GET /v1/cards/products/{id}/account-ranges`

`GET /v1/cards/products/&#123;id&#125;/account-ranges` - list BIN account ranges attached to a card product.

Gate: `bank8:payments:cards:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account ranges | `AccountRangeResponse`[] |
| 403 | Missing `bank8:payments:cards:read` scope | - |

### `POST /v1/cards/products/{id}/add-account-ranges`

`POST /v1/cards/products/&#123;id&#125;:addAccountRanges` - attach BIN account ranges to a card product.

Gate: `bank8:payments:cards:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_ranges` | string[] | yes |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account ranges added | - |
| 403 | Missing `bank8:payments:cards:write` scope | - |
| 404 | Card product not found | - |

### `POST /v1/cards/products/{id}/remove-account-ranges`

`POST /v1/cards/products/&#123;id&#125;:removeAccountRanges` - detach BIN account ranges.

Gate: `bank8:payments:cards:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_ranges` | string[] | yes |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account ranges removed | - |
| 403 | Missing `bank8:payments:cards:write` scope | - |
| 404 | Card product not found | - |

### `POST /v1/cards/sessions/initiate`

`POST /v1/cards/`sessions:initiate`` - initiate an encrypted card session (client key exchange; delegates to the existing session handler).

Gate: `bank8:payments:issuance:write`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Session created (public key + token) | - |
| 403 | Missing `bank8:payments:issuance:write` scope | - |

### `GET /v1/cards/{id}`

`GET /v1/cards/&#123;id&#125;` - get a card.

Gate: `bank8:payments:cards:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card detail | `CardResponse` |
| 403 | Missing `bank8:payments:cards:read` scope | - |
| 404 | Card not found | - |

### `PATCH /v1/cards/{id}`

`PATCH /v1/cards/&#123;id&#125;` - update a card (status / expiry). When `status` is provided it is validated against the card state machine (`cards::validate_card_transition`) before being applied.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/cards/{id}/activate`

`POST /v1/cards/&#123;id&#125;/activate` - pending_creation/inactive → active.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/cards/{id}/encrypted-session`

Create a new encrypted card session. Inserts a row in `card_sessions` (defined by migration `14-payments.sql`) with `status = 'active'` and returns the session id together with a short-lived session token (a UUID) and the placeholder public key the client should use to encrypt the sensitive payload. The session expires after 5 minutes by default.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/cards/{id}/freeze`

`POST /v1/cards/&#123;id&#125;/freeze` - active → suspended.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/cards/{id}/pin/change`

Change a card PIN. Verifies `old_pin_hash` against the stored `pin_hash`; on success the stored hash is replaced with `new_pin_hash` and `pin_attempts` is reset. On failure `pin_attempts` is incremented (same policy as `verify_pin`).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/cards/{id}/pin/verify`

Verify a card PIN. `pin_hash` is the (already hashed) PIN the client sent, encrypted with the session public key. Payments never stores or sees the clear PIN. The stored `pin_hash` column on `cards` is compared against the provided value; on mismatch `pin_attempts` is incremented and the card is suspended when it reaches 3.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `PUT /v1/cards/{id}/profile`

`PUT /v1/cards/&#123;id&#125;/profile` - set the Card Profile (chip behaviour / scheme approval: Mastercard CPV/CNS, Visa DPS; ).

Gate: `bank8:payments:cards:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `profile_id` | string | yes | Card Profile id (chip behaviour / scheme approval). |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Card profile set | - |
| 403 | Missing `bank8:payments:cards:write` scope | - |
| 404 | Card not found | - |

### `POST /v1/cards/{id}/replace`

`POST /v1/cards/&#123;id&#125;/replace` - create a replacement card, disable the old.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/cards/{id}/unfreeze`

`POST /v1/cards/&#123;id&#125;/unfreeze` - suspended → active.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/config-packs`

`GET /v1/config-packs` - list installed payment config packs (; the pack contents are versioned resources: rules/rule-sets/parameter-values).

Gate: `bank8:payments:rules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Config packs (summary of versioned resources) | - |
| 403 | Missing `bank8:payments:rules:read` scope | - |

### `GET /v1/core-versions`

`GET /v1/core-versions` - list core versions.

Gate: `bank8:payments:cores:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Core versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:cores:read` scope | - |

### `GET /v1/cores`

`GET /v1/cores` - list cores (Story ).

Gate: `bank8:payments:cores:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of cores | `CoreResponse`[] |
| 403 | Missing `bank8:payments:cores:read` scope | - |

### `POST /v1/cores`

`POST /v1/cores` - create a core (Story ).

Gate: `bank8:payments:cores:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | string,null | no |  |
| `name` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Core created | `CoreResponse` |
| 403 | Missing `bank8:payments:cores:write` scope | - |

### `GET /v1/cores/{id}`

`GET /v1/cores/&#123;id&#125;` - get a core (Story ).

Gate: `bank8:payments:cores:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Core detail | `CoreResponse` |
| 403 | Missing `bank8:payments:cores:read` scope | - |
| 404 | Core not found | - |

### `DELETE /v1/cores/{id}`

`DELETE /v1/cores/&#123;id&#125;` - soft delete a core (Story ).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `PATCH /v1/cores/{id}`

`PATCH /v1/cores/&#123;id&#125;` - update a core (Story ).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `PUT /v1/cores/{id}/balance-endpoint`

`PUT /v1/cores/&#123;id&#125;/balance-endpoint` - switch the CBS balance endpoint between online (live query) and offline (cached) modes.

Gate: `bank8:payments:cores:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `mode` | string | yes | online \| offline |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Balance endpoint mode updated | - |
| 400 | Invalid mode | - |
| 403 | Missing `bank8:payments:cores:write` scope | - |
| 404 | Core not found | - |

### `POST /v1/cores/{id}/versions`

`POST /v1/core-versions` - create a core version.

Gate: `bank8:payments:cores:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `core_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Core version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:cores:write` scope | - |

### `GET /v1/dashboards`

`GET /v1/dashboards` - list dashboards.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/dashboards`

`POST /v1/dashboards` - create a dashboard.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/dashboards/{id}`

`GET /v1/dashboards/&#123;id&#125;` - get a dashboard.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/dashboards/{id}/publish`

`POST /v1/dashboards/&#123;id&#125;/publish` - publish the latest draft version.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/dashboards/{id}/versions`

`POST /v1/dashboards/&#123;id&#125;/versions` - create a new dashboard version.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/files`

`GET /v1/files` - list uploaded files.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/files`

`POST /v1/files` - register an uploaded file.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/files/{id}`

`GET /v1/files/&#123;id&#125;` - file detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/files/{id}/submit`

`POST /v1/files/&#123;id&#125;/submit` - submit an uploaded file for debatch + processing (inbound flow).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/instruction-batches`

`GET /v1/instruction-batches` - list instruction batches.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/instruction-file-specification-versions`

`GET /v1/instruction-file-specification-versions` - spec versions (non-v1beta alias route).

Gate: `bank8:payments:files:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Spec versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:files:read` scope | - |

### `POST /v1/instruction-file-specification-versions`

`POST /v1/instruction-file-specification-versions` - create a spec version (non-v1beta alias route).

Gate: `bank8:payments:files:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schema` | `Value` | no | The specification payload (validated against the schema before creation). |
| `specification_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Spec version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:files:write` scope | - |

### `POST /v1/instruction-file-specification-versions/validate`

`POST /v1beta/instruction-file-specification-versions` - create a file specification version.

Gate: `bank8:payments:files:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schema` | `Value` | no | The specification payload (validated against the schema before creation). |
| `specification_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Specification version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:files:write` scope | - |

### `GET /v1/instruction-file-specifications`

`GET /v1/instruction-file-specifications` - list specifications.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/instruction-file-specifications`

`POST /v1/instruction-file-specifications` - create a specification.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/instruction-files`

`GET /v1/instruction-files` - list instruction files.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/instruction-files`

`POST /v1/instruction-files` - create an instruction file.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/instruction-files/{id}/initiate`

`POST /v1beta/`instruction-file-specification-versions:validate`` - validate a specification version payload without creating it (active-version semantics; the design's `:validate` convention).

Gate: `bank8:payments:files:read`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schema` | `Value` | no | The specification payload (validated against the schema before creation). |
| `specification_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Validation result | - |
| 400 | Invalid specification | - |
| 403 | Missing `bank8:payments:files:read` scope | - |

### `GET /v1/instructions`

`GET /v1/instructions` - list instructions.

Gate: `bank8:payments:instructions:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `state` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of instructions | `InstructionResponse`[] |
| 403 | Missing `bank8:payments:instructions:read` scope | - |

### `POST /v1/instructions`

`POST /v1/instructions` - create and initiate an instruction. Delegates workflow execution to Flow.

Gate: `bank8:payments:instructions:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction created | `InstructionResponse` |
| 403 | Missing `bank8:payments:instructions:write` scope | - |

### `POST /v1/instructions/bulk-retry`

`POST /v1/instructions:bulkRetry` - bulk retry errored instructions (Sentin8 Jobs pattern).

Gate: `bank8:payments:instructions:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instruction_ids` | string[] | no | Empty = retry all errored instructions in the env. |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Bulk retry results | - |
| 403 | Missing `bank8:payments:instructions:write` scope | - |

### `GET /v1/instructions/{id}`

`GET /v1/instructions/&#123;id&#125;` - instruction detail.

Gate: `bank8:payments:instructions:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction detail | `InstructionResponse` |
| 403 | Missing `bank8:payments:instructions:read` scope | - |
| 404 | Instruction not found | - |

### `PUT /v1/instructions/{id}`

`PUT /v1/instructions/&#123;id&#125;` - update an instruction (status updates including cancel - the business convention; no `/cancel` subpath).

Gate: `bank8:payments:instructions:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `output` | null \\| `Value` | no |  |
| `reason` | string,null | no |  |
| `state` | string,null | no | Target state: `cancelled` \| `pending` \| `processing`. |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction updated | `InstructionResponse` |
| 403 | Missing `bank8:payments:instructions:write` scope | - |
| 404 | Instruction not found | - |
| 409 | State transition conflict | - |

### `POST /v1/instructions/{id}/cancel`

`POST /v1/instructions/&#123;id&#125;/cancel` - any state → cancelled (Story ).

Gate: `bank8:payments:instructions:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction cancelled | `InstructionResponse` |
| 403 | Missing `bank8:payments:instructions:write` scope | - |
| 409 | State transition conflict | - |

### `POST /v1/instructions/{id}/cancel-async`

`POST /v1/instructions/&#123;id&#125;:process` - process the instruction now (business route shape; wraps the state-machine step).

Gate: `bank8:payments:instructions:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction advanced | - |
| 403 | Missing `bank8:payments:instructions:write` scope | - |
| 404 | Instruction not found | - |

### `POST /v1/instructions/{id}/process`

`POST /v1/`instructions:process`` - process an instruction against its logic (moves it to processing; the worker continues the workflow).

Gate: `bank8:payments:instructions:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction processing | - |
| 403 | Missing `bank8:payments:instructions:write` scope | - |
| 404 | Instruction not found | - |
| 409 | State transition conflict | - |

### `POST /v1/instructions/{id}/repair`

`POST /v1/instructions/&#123;id&#125;/repair` - rewind the instruction to a step and re-process via Flow (Story ).

Gate: `bank8:payments:instructions:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | - | no | Optional updated input for the instruction. |
| `rewind_to` | integer | no | Step index to rewind to (0 = restart from beginning). |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction repaired | `InstructionResponse` |
| 403 | Missing `bank8:payments:instructions:write` scope | - |
| 404 | Instruction not found | - |

### `POST /v1/instructions/{id}/retry`

`POST /v1/instructions/&#123;id&#125;/retry` - failed → pending (Story ).

Gate: `bank8:payments:instructions:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction retried | `InstructionResponse` |
| 403 | Missing `bank8:payments:instructions:write` scope | - |
| 409 | State transition conflict | - |

### `GET /v1/integration-versions`

`GET /v1/integration-versions` - list integration versions.

Gate: `bank8:payments:integrations:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Integration versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:integrations:read` scope | - |

### `POST /v1/integration-versions`

`POST /v1/integration-versions` - create an integration version.

Gate: `bank8:payments:integrations:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `integration_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Integration version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:integrations:write` scope | - |

### `POST /v1/integration-versions/{id}/retry`

`POST /v1/integration-versions/&#123;id&#125;:retry` - retry a failed integration version (business convention; ).

Gate: `bank8:payments:integrations:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Version retried | - |
| 403 | Missing `bank8:payments:integrations:write` scope | - |
| 404 | Not found | - |

### `GET /v1/integrations`

`GET /v1/integrations` - list integrations (Story ).

Gate: `bank8:payments:integrations:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of integrations | `IntegrationResponse`[] |
| 403 | Missing `bank8:payments:integrations:read` scope | - |

### `POST /v1/integrations`

`POST /v1/integrations` - create an integration (Story ).

Gate: `bank8:payments:integrations:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_config` | - | no |  |
| `config` | - | no |  |
| `integration_kind` | string | no |  |
| `name` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Integration created | `IntegrationResponse` |
| 403 | Missing `bank8:payments:integrations:write` scope | - |

### `POST /v1/integrations/callback/{token}`

`POST /v1/`integrations:callback`/&#123;token&#125;` - the HTTPAsyncStep contract (§4.4): an integration calls back with the response payload after an arbitrary delay; the waiting instruction resumes its workflow.

Gate: `bank8:payments:integrations:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `token` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Callback accepted; instruction resumed | - |
| 403 | Missing `bank8:payments:integrations:write` scope | - |
| 404 | Unknown or expired callback token | - |

### `GET /v1/integrations/payment-initiation-apps`

`GET /v1/integrations/payment-initiation-apps` - list registered initiation apps.

Gate: `bank8:payments:integrations:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Initiation apps | `InitiationAppResponse`[] |
| 403 | Missing `bank8:payments:integrations:read` scope | - |

### `POST /v1/integrations/payment-initiation-apps`

`POST /v1/integrations/payment-initiation-apps` - register a payment-initiation app.

Gate: `bank8:payments:integrations:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_type` | string | no | payment_initiation \| payment_app |
| `config` | `Value` | no |  |
| `name` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | App registered | `InitiationAppResponse` |
| 403 | Missing `bank8:payments:integrations:write` scope | - |

### `GET /v1/integrations/{id}`

`GET /v1/integrations/&#123;id&#125;` - get an integration (Story ).

Gate: `bank8:payments:integrations:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Integration detail | `IntegrationResponse` |
| 403 | Missing `bank8:payments:integrations:read` scope | - |
| 404 | Integration not found | - |

### `DELETE /v1/integrations/{id}`

`DELETE /v1/integrations/&#123;id&#125;` - soft delete an integration (Story ).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `PATCH /v1/integrations/{id}`

`PATCH /v1/integrations/&#123;id&#125;` - update an integration (Story ).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/logics`

`GET /v1/logics` - list logics.

Gate: `bank8:payments:logics:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Logics list | - |
| 403 | Missing `bank8:payments:logics:read` scope | - |

### `POST /v1/logics`

`POST /v1/logics` - create a logic.

Gate: `bank8:payments:logics:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | yes |  |
| `steps` | - | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Logic created | `LogicResponse` |
| 403 | Missing `bank8:payments:logics:write` scope | - |

### `GET /v1/logics/{id}`

`GET /v1/logics/&#123;id&#125;` - logic detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/logics/{id}/migrate-wasm`

`POST /v1/logics/&#123;id&#125;/migrate-wasm` - migrate an instruction logic's inline hooks to Func WASM modules (Story ). Loads the logic, walks its steps, and for every `BasicStep` whose `config.hook` is set and `config.wasmModuleId` is absent, creates a Func module from the step's config and uploads it via `func_client`. Returns the list of created module ids (and any per-step errors).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/mandates`

`GET /v1/mandates` - list mandates.

Gate: `bank8:payments:mandates:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of mandates | `MandateResponse`[] |
| 403 | Missing `bank8:payments:mandates:read` scope | - |

### `POST /v1/mandates`

`POST /v1/mandates` - create a mandate.

Gate: `bank8:payments:mandates:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount_limit` | string,null | no |  |
| `creditor_account` | string,null | no |  |
| `creditor_name` | string,null | no |  |
| `currency` | string,null | no |  |
| `debtor_account` | string,null | no |  |
| `debtor_name` | string,null | no |  |
| `effective_from` | string,null | no |  |
| `effective_to` | string,null | no |  |
| `scheme_creditor_id` | string,null | no |  |
| `scheme_mandate_id` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Mandate created | `MandateResponse` |
| 403 | Missing `bank8:payments:mandates:write` scope | - |

### `GET /v1/mandates/{id}`

`GET /v1/mandates/&#123;id&#125;` - get a mandate.

Gate: `bank8:payments:mandates:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Mandate detail | `MandateResponse` |
| 403 | Missing `bank8:payments:mandates:read` scope | - |
| 404 | Mandate not found | - |

### `PATCH /v1/mandates/{id}`

`PATCH /v1/mandates/&#123;id&#125;` - update a mandate.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/manual-decisions`

`GET /v1/manual-decisions` - list manual decisions.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/manual-decisions/{id}`

`GET /v1/manual-decisions/&#123;id&#125;` - manual decision detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/manual-decisions/{id}/submit`

`POST /v1/manual-decisions/&#123;id&#125;/submit` - submit a manual decision. Records the submitter, the decision payload, and marks the decision as `submitting`. The downstream task system picks up the row from there.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/membership-directories`

`GET /v1/membership-directories` - list membership directories.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/membership-directories`

`POST /v1/membership-directories` - create a membership directory.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/membership-directories/{id}`

`GET /v1/membership-directories/&#123;id&#125;` - get a membership directory.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/membership-directory-records/search`

`POST /v1/`membership-directory-records:search`` - registry-validated membership directory search (BIC reachability, account resolution).

Gate: `bank8:payments:membership-directories:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Directory records matching the filters | - |
| 400 | Invalid search filters | - |
| 403 | Missing `bank8:payments:membership-directories:read` scope | - |

### `GET /v1/membership-directory-versions`

`GET /v1/membership-directory-versions` - list directory versions.

Gate: `bank8:payments:membership-directories:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Directory versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:membership-directories:read` scope | - |

### `POST /v1/membership-directory-versions`

`POST /v1/membership-directory-versions` - create a directory version.

Gate: `bank8:payments:membership-directories:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `directory_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Directory version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:membership-directories:write` scope | - |

### `GET /v1/metrics`

`GET /v1/metrics` - Prometheus/OpenMetrics text format (Story ). Exports instruction counts, payment counts, and processing latency. Requires ``bank8:payments:metrics:read`` scope.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/on-us/routing`

`GET /v1/on-us/routing` - B8 On-Us routing table: routes instructions to another B8 member bank without leaving the platform.

Gate: `bank8:payments:instructions:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | On-Us routing entries | - |
| 403 | Missing `bank8:payments:instructions:read` scope | - |

### `GET /v1/openmetrics/federate`

`GET /v1/openmetrics/federate` - federation scrape endpoint.

Gate: `bank8:payments:openmetrics:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Federation metrics | - |
| 403 | Missing `bank8:payments:openmetrics:read` scope | - |

### `GET /v1/openmetrics/metrics`

`GET /v1/openmetrics/metrics` - OpenMetrics-format metrics (; delegates to the shared Prometheus handler).

Gate: `bank8:payments:openmetrics:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OpenMetrics metrics | - |
| 403 | Missing `bank8:payments:openmetrics:read` scope | - |

### `GET /v1/parameter-values`

`GET /v1/parameter-values` - list parameter values.

Gate: `bank8:payments:parameters:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Parameter values | `ParameterValueResponse`[] |
| 403 | Missing `bank8:payments:parameters:read` scope | - |

### `POST /v1/parameter-values`

`POST /v1/parameter-values` - create a parameter value.

Gate: `bank8:payments:parameters:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parameter_id` | string | yes |  |
| `value` | `Value` | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Parameter value created | `ParameterValueResponse` |
| 403 | Missing `bank8:payments:parameters:write` scope | - |

### `PUT /v1/parameter-values/{id}`

`PUT /v1/parameter-values/&#123;id&#125;` - update (or unset via empty body) a parameter value.

Gate: `bank8:payments:parameters:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | null \\| `Value` | no |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Parameter value updated (or unset) | - |
| 403 | Missing `bank8:payments:parameters:write` scope | - |
| 404 | Not found | - |

### `GET /v1/parameters`

`GET /v1/parameters` - list parameters.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/parameters`

`POST /v1/parameters` - create a parameter.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/parameters/{id}`

`GET /v1/parameters/&#123;id&#125;` - get a parameter.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `DELETE /v1/parameters/{id}`

`DELETE /v1/parameters/&#123;id&#125;` - soft delete a parameter. Sets `status = 'deleted'` so the row is retained for audit but excluded from `resolve_parameter` and `list_parameters`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `PATCH /v1/parameters/{id}`

`PATCH /v1/parameters/&#123;id&#125;` - update a parameter.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/payees`

`GET /v1/payees` - list/search payees.

Gate: `bank8:payments:payments:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payees | `PayeeResponse`[] |
| 403 | Missing `bank8:payments:payments:read` scope | - |

### `POST /v1/payees`

`POST /v1/payees` - create a payee (external payment target).

Gate: `bank8:payments:payments:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_identifier` | string,null | no |  |
| `metadata` | `Value` | no |  |
| `name` | string | yes |  |
| `payee_type` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payee created | `PayeeResponse` |
| 403 | Missing `bank8:payments:payments:write` scope | - |

### `POST /v1/payees/search`

`POST /v1/`payees:search`` - registry-validated payee search.

Gate: `bank8:payments:payments:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Matching payees | `PayeeResponse`[] |
| 400 | Invalid search filters | - |

### `GET /v1/payees/{id}`

`GET /v1/payees/&#123;id&#125;` - payee detail.

Gate: `bank8:payments:payments:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payee | `PayeeResponse` |
| 404 | Not found | - |

### `PUT /v1/payees/{id}`

`PUT /v1/payees/&#123;id&#125;` - update payee.

Gate: `bank8:payments:payments:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_identifier` | string,null | no |  |
| `metadata` | null \\| `Value` | no |  |
| `name` | string,null | no |  |
| `status` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payee updated | `PayeeResponse` |
| 404 | Not found | - |

### `DELETE /v1/payees/{id}`

`DELETE /v1/payees/&#123;id&#125;` - remove a payee (soft-delete via status).

Gate: `bank8:payments:payments:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payee removed | - |
| 403 | Missing `bank8:payments:payments:write` scope | - |
| 404 | Payee not found | - |

### `GET /v1/payment-instruments`

`GET /v1/payment-instruments` - list payment instruments.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/payment-instruments`

`POST /v1/payment-instruments` - create a payment instrument.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/payment-instruments/{id}`

`GET /v1/payment-instruments/&#123;id&#125;` - get a payment instrument.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `DELETE /v1/payment-instruments/{id}`

`DELETE /v1/payment-instruments/&#123;id&#125;` - deactivate a payment instrument.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `PATCH /v1/payment-instruments/{id}`

`PATCH /v1/payment-instruments/&#123;id&#125;` - update a payment instrument.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/payment-statuses`

`GET /v1/payment-statuses` - the full processing-status model exposed to clients (; the per-type amount context keys are returned with each).

Gate: `bank8:payments:payments:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Processing status model | `StatusModelEntry`[] |
| 403 | Missing `bank8:payments:payments:read` scope | - |

### `GET /v1/payments`

`GET /v1/payments` - list payments.

Gate: `bank8:payments:payments:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of payments | `PaymentResponse`[] |
| 403 | Missing `bank8:payments:payments:read` scope | - |

### `GET /v1/payments/{id}`

`GET /v1/payments/&#123;id&#125;` - payment detail.

Gate: `bank8:payments:payments:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payment detail | `PaymentResponse` |
| 403 | Missing `bank8:payments:payments:read` scope | - |
| 404 | Payment not found | - |

### `POST /v1/records/search`

`POST /v1/records/search` - generic membership-directory record search (registry-validated; delegates to the directory search).

Gate: `bank8:payments:membership-directories:read`

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Search results | - |
| 400 | Invalid search operators (registry) | - |
| 403 | Missing `bank8:payments:membership-directories:read` scope | - |

### `GET /v1/roles`

`GET /v1/roles` - read view of the roles configured for this environment (roles live in Sentin8:Auth; this is a projection for admin UIs).

Gate: `bank8:payments:users:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Roles (projection from Sentin8:Auth) | `RoleViewResponse`[] |
| 403 | Missing `bank8:payments:users:read` scope | - |

### `GET /v1/rule-set-versions`

`GET /v1/rule-set-versions` - list rule set versions.

Gate: `bank8:payments:rules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule set versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:rules:read` scope | - |

### `POST /v1/rule-set-versions`

`POST /v1/rule-set-versions` - create a rule set version.

Gate: `bank8:payments:rules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rule_set_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule set version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:rules:write` scope | - |

### `POST /v1/rule-set-versions/{id}/retry`

`POST /v1/rule-set-versions/&#123;id&#125;/retry` - retry a failed rule set version publish.

Gate: `bank8:payments:rules:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Retry accepted | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:rules:write` scope | - |
| 404 | Version not found | - |

### `GET /v1/rule-sets`

`GET /v1/rule-sets` - list rule sets.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/rule-sets`

`POST /v1/rule-sets` - create a rule set (Story ).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/rule-versions`

`GET /v1/rule-versions` - list rule versions (with `:batchGet` semantics).

Gate: `bank8:payments:rules:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `rule_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule versions | `ResourceVersionResponse`[] |
| 403 | Missing `bank8:payments:rules:read` scope | - |

### `POST /v1/rule-versions`

`POST /v1/rule-versions` - create a rule version.

Gate: `bank8:payments:rules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `parent_id` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule version created | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:rules:write` scope | - |

### `POST /v1/rule-versions/{id}/retry`

`POST /v1/rule-versions/&#123;id&#125;/retry` - retry a failed rule version publish (; delegates to the shared retry_version helper).

Gate: `bank8:payments:rules:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Retry accepted | `ResourceVersionResponse` |
| 403 | Missing `bank8:payments:rules:write` scope | - |
| 404 | Version not found | - |

### `GET /v1/rules`

`GET /v1/rules` - list rules.

Gate: `bank8:payments:rules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of rules | `RuleResponse`[] |
| 403 | Missing `bank8:payments:rules:read` scope | - |

### `POST /v1/rules`

`POST /v1/rules` - create a rule.

Gate: `bank8:payments:rules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | string | yes |  |
| `expected_parameters` | - | no |  |
| `expression` | string | yes |  |
| `name` | string | yes |  |
| `rule_type` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule created | `RuleResponse` |
| 403 | Missing `bank8:payments:rules:write` scope | - |

### `POST /v1/rules/attach-to-instrument`

`POST /v1/rules:attachToInstrument` - attach a decision rule to a payment instrument (; the rule still applies per-instruction at runtime).

Gate: `bank8:payments:rules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instrument_id` | string | yes | payment_instrument resource this rule applies to (card or account id). |
| `instrument_type` | string | no | card \| account |
| `rule_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule attached | - |
| 403 | Missing `bank8:payments:rules:write` scope | - |
| 404 | Rule not found | - |

### `POST /v1/rules/detach-from-instrument`

`POST /v1/rules:detachFromInstrument` - detach a rule from an instrument

Gate: `bank8:payments:rules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `instrument_id` | string | yes |  |
| `rule_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule detached | - |
| 403 | Missing `bank8:payments:rules:write` scope | - |

### `POST /v1/rules/{id}/publish`

`POST /v1/rules/&#123;id&#125;/publish` - publish a new rule version (Story ).

Gate: `bank8:payments:rules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expected_parameters` | - | no |  |
| `implementation` | string | yes |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Rule version published | `RuleVersionResponse` |
| 403 | Missing `bank8:payments:rules:write` scope | - |

### `POST /v1/sandbox/cards/simulate`

`POST /v1/sandbox/`cards:simulate`` - simulate a card transaction.

Gate: `bank8:payments:sandbox:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string,null | no |  |
| `card_id` | string,null | no |  |
| `currency` | string,null | no |  |
| `instruction_id` | string,null | no |  |
| `outcome` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Simulated card result | `SandboxSimulationResponse` |
| 403 | Sandbox feature disabled | - |

### `POST /v1/sandbox/credit-transfers/simulate`

`POST /v1/sandbox/`credit-transfers:simulate`` - simulate an SEPA credit transfer.

Gate: `bank8:payments:sandbox:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string,null | no |  |
| `card_id` | string,null | no |  |
| `currency` | string,null | no |  |
| `instruction_id` | string,null | no |  |
| `outcome` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Simulated credit transfer | `SandboxSimulationResponse` |
| 403 | Sandbox feature disabled | - |

### `POST /v1/sandbox/fedwire/simulate`

`POST /v1/sandbox/`fedwire:simulate`` - simulate a FedWire payment.

Gate: `bank8:payments:sandbox:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string,null | no |  |
| `card_id` | string,null | no |  |
| `currency` | string,null | no |  |
| `instruction_id` | string,null | no |  |
| `outcome` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Simulated FedWire payment | `SandboxSimulationResponse` |
| 403 | Sandbox feature disabled | - |

### `POST /v1/sandbox/instructions/{id}/resume`

`POST /v1/sandbox/instructions/&#123;id&#125;:resume` - fast-forward a stuck instruction through its state machine.

Gate: `bank8:payments:sandbox:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Instruction advanced | - |
| 403 | Sandbox feature disabled | - |
| 404 | Instruction not found | - |

### `POST /v1/sandbox/scheduled-payments/{id}/fast-forward`

`POST /v1/sandbox/scheduled-payments/&#123;id&#125;:fastForward` - execute the next scheduled occurrence immediately (+ ).

Gate: `bank8:payments:sandbox:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Next occurrence executed | - |
| 403 | Sandbox feature disabled | - |
| 404 | Scheduled payment not found | - |

### `POST /v1/sandbox/swift-agi/simulate`

`POST /v1/sandbox/`swift-agi:simulate`` - simulate a SWIFT AGI payment

Gate: `bank8:payments:sandbox:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | string,null | no |  |
| `card_id` | string,null | no |  |
| `currency` | string,null | no |  |
| `instruction_id` | string,null | no |  |
| `outcome` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Simulated SWIFT AGI payment | `SandboxSimulationResponse` |
| 403 | Sandbox feature disabled | - |

### `GET /v1/tasks`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/tasks/{id}`

`GET /v1/tasks/&#123;id&#125;` - task detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/tasks/{id}/approve`

`POST /v1/tasks/&#123;id&#125;/approve` - approve a task (advances approval stages).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/tasks/{id}/claim`

`POST /v1/tasks/&#123;id&#125;/claim` - claim a task.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/tasks/{id}/reject`

`POST /v1/tasks/&#123;id&#125;/reject` - reject a task.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/templates`

`GET /v1/templates` - list templates.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/templates`

`POST /v1/templates` - create a template.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/templates/{id}`

`GET /v1/templates/&#123;id&#125;` - get a template.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/templates/{id}/publish`

`POST /v1/templates/&#123;id&#125;/publish` - publish the latest draft version of a template. Marks the latest draft version as `published` and sets it as the template's `active_version_id`.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `POST /v1/templates/{id}/versions`

`POST /v1/templates/&#123;id&#125;/versions` - create a new template version.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |

### `GET /v1/users`

`GET /v1/users` - list users visible to this environment (read view; identities stay in Sentin8:Auth - this is a projection).

Gate: `bank8:payments:users:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Users | `PlatformUserResponse`[] |
| 403 | Missing `bank8:payments:users:read` scope | - |

### `GET /v1beta/scheduled-payments`

`GET /v1beta/scheduled-payments` - list scheduled payments.

Gate: `bank8:payments:scheduled-payments:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Scheduled payments | `ScheduledPaymentResponse`[] |
| 403 | Missing `bank8:payments:scheduled-payments:read` scope | - |

### `POST /v1beta/scheduled-payments`

`POST /v1beta/scheduled-payments` - create a scheduled payment.

Gate: `bank8:payments:scheduled-payments:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | string | yes |  |
| `amount` | string | yes |  |
| `currency` | string | yes |  |
| `payee_id` | string,null | no |  |
| `recurrence_rule` | string,null | no | RFC 5545 RRULE (e.g. FREQ=MONTHLY) - Sentin8:Cron is UTC-only. |
| `schedule_type` | string | yes | standing_order \| direct_debit \| future_dated |
| `start_at` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Scheduled payment created | `ScheduledPaymentResponse` |
| 403 | Missing `bank8:payments:scheduled-payments:write` scope | - |

### `GET /v1beta/scheduled-payments/{id}`

`GET /v1beta/scheduled-payments/&#123;id&#125;` - fetch one scheduled payment.

Gate: `bank8:payments:scheduled-payments:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Scheduled payment | `ScheduledPaymentResponse` |
| 403 | Missing `bank8:payments:scheduled-payments:read` scope | - |
| 404 | Not found | - |

### `DELETE /v1beta/scheduled-payments/{id}`

`DELETE /v1beta/scheduled-payments/&#123;id&#125;` - cancel a scheduled payment.

Gate: `bank8:payments:scheduled-payments:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Cancelled | - |
| 403 | Missing `bank8:payments:scheduled-payments:write` scope | - |
| 404 | Not found | - |

### `POST /v1beta/scheduled-payments/{id}/fast-forward`

`POST /v1beta/scheduled-payments/&#123;id&#125;:fastForward` - execute the next occurrence immediately (; non-sandbox).

Gate: `bank8:payments:scheduled-payments:write`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Next occurrence executed | - |
| 403 | Missing `bank8:payments:scheduled-payments:write` scope | - |
| 404 | Not found | - |


## account-links

### `DELETE /v1/account-links/{id}`

`DELETE /v1/account-links/&#123;id&#125;` - deactivate an account link.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account link deactivated | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the bank8 scope | - |


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


## payments-admin

### `GET /v1/admin/calendars`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin calendars rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/cards`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin cards rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/cores`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin cores rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/decisions`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin decisions rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/directories`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin directories rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/files`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin files rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/instructions`

`GET /v1/admin/instructions` - recent instructions (admin view).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recent instructions (admin view) | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/integrations`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin integrations rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/mandates`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin mandates rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/overview`

`GET /v1/admin/overview` - counts for the overview dashboard.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin overview counts | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/parameters`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin parameters rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/payments`

`GET /v1/admin/payments` - recent payments (admin view).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recent payments (admin view) | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/rules`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Admin rules rows (latest 50) | - |
| 401 | Not authenticated | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/settings`

`GET /v1/admin/settings` - service settings view.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Service settings | - |
| 403 | Caller lacks the payments admin scope | - |

### `GET /v1/admin/simulator`

`GET /v1/admin/simulator` - simulator availability (sandbox gate).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Simulator state | - |
| 403 | Caller lacks the payments admin scope | - |


## admin-ui

### `GET /v1/admin/ui/{page}`

GET /v1/admin/ui/&#123;page&#125; - return RFW definition for the requested admin page.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |


## meta

### `GET /v1/health`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |
| 403 | Missing the payments scope gate | - |


## payments-internal

### `GET /v1/internal/account-links/{id}`

`GET /v1/internal/account-links/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `POST /v1/internal/authorisations/expire`

`POST /v1/internal/authorisations/expire` - Sentin8:Cron proxy-back for the daily Authorisation Expiry run . Scans authorisation instructions past their scheme expiry TTL (7d default / 30d pre-auth / 14d mass-transit / 1h AFD, measured from `transmission_date_time`), emits the caad.008 AdministrativeInitiation with `ALTERNATE_MESSAGE_REASON_AUTOMATED_AUTHORISATION_EXPIRY` (party `VP`), records the Release posting to Bank8:Ledger, and moves the payment to `PAYMENT_STATUS_EXPIRED`.

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch_size` | integer | no | Max instructions to expire in one run. |
| `env_id` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Expiry run result | `ExpiryRunResult` |
| 403 | Missing service scope | - |

### `GET /v1/internal/calendars/{id}`

`GET /v1/internal/calendars/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/cardholders/{id}`

`GET /v1/internal/cardholders/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/cards/{id}`

`GET /v1/internal/cards/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `POST /v1/internal/files/debatch`

Execute the `debatch_file` step: split the file's records into chunked instruction batches (design §10). The step is idempotent on ``file_id:chunk_index`` - a workflow retry re-enters here and the terminal-file guard makes completed work a no-op.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/instructions/{id}`

`GET /v1/internal/instructions/&#123;id&#125;` - internal instruction lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `PATCH /v1/internal/instructions/{id}`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/integrations/{id}`

`GET /v1/internal/integrations/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/mandates/{id}`

`GET /v1/internal/mandates/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/manual-decisions/{id}`

`GET /v1/internal/manual-decisions/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/parameters/{id}`

`GET /v1/internal/parameters/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/payment-instruments/{id}`

`GET /v1/internal/payment-instruments/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/payments/{id}`

`GET /v1/internal/payments/&#123;id&#125;` - internal payment lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `GET /v1/internal/rules/{id}`

`GET /v1/internal/rules/&#123;id&#125;` - internal lookup.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `POST /v1/internal/schedules/trigger`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

### `POST /v1/internal/steps/execute`

`POST /v1/internal/steps/execute` - Flow proxy-back for Payments domain steps.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | OK | - |
| 401 | Not authenticated | - |

