---
title: "Bank8:Ledger - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Bank8-dev/bank8-ledger/edit/main/docs/openapi.json
---
Sentin8 Bank8:Ledger - core ledger, posting engine, product library.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**91 endpoints**.

## ledger

### `POST /v1/account-migrations`

`POST /v1/account-migrations` - submit a bulk account migration batch
(Data-Loader-style staging; idempotent re-run via `:bulkRetry`).

Gate: `bank8:ledger:accounts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `Value` | yes | Item payload: for account_update: [&#123;account_id, set: &#123;...&#125;&#125;]; for migration: [&#123;account: &#123;...&#125;&#125;] staged rows. |
| `kind` | string | yes | `migration` (account migrations) or `account_update` (update batches). |
| `source_system` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Migration batch created and staged | `BulkBatchResponse` |
| 400 | kind must be 'migration' or 'account_update' | - |
| 403 | Missing bank8:ledger:accounts:write scope | - |

### `GET /v1/account-plan-assocs`

`GET /v1/account-plan-assocs` - list account↔plan associations.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Plan associations | `PlanAssocResponse`[] |
| 403 | Missing bank8:ledger:products:read scope | - |

### `POST /v1/account-plan-assocs`

`POST /v1/account-plan-assocs` - associate an account with a plan.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | string | yes |  |
| `plan_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Associated | `PlanAssocResponse` |
| 403 | Missing bank8:ledger:products:write scope | - |

### `GET /v1/account-schedule-tags`

`GET /v1/account-schedule-tags?account_id=` - list account schedule tags.

Gate: `bank8:ledger:schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account schedule tags | `AccountScheduleTagResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `POST /v1/account-schedule-tags`

`POST /v1/account-schedule-tags` - create/override an account schedule tag.

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | string | no |  |
| `tag_id` | string | yes |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `account_id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account schedule tag upserted | `AccountScheduleTagResponse` |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `GET /v1/account-update-batches`

`GET /v1/account-update-batches` - list bulk batches (either kind).

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `kind` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Bulk batches | `BulkBatchResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `POST /v1/account-update-batches/{id}/bulk-retry`

`POST /v1/account-update-batches/{id}/bulk-retry` - retry failed rows in a
bulk batch (Sentin8 Jobs bulk-operations pattern). Staged rows are applied
account-by-account; already-applied rows are skipped (idempotent).

Gate: `bank8:ledger:accounts:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Retry result | - |
| 403 | Missing bank8:ledger:accounts:write scope | - |
| 404 | Batch not found | - |

### `GET /v1/accounts`

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `customer_id` | query | no | string |
| `product_id` | query | no | string |
| `account_type` | query | no | string |
| `status` | query | no | string |
| `env_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of accounts | `AccountResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `POST /v1/accounts`

`POST /v1/accounts` - create account (v1 legacy).
.5: holder callers can only create accounts owned by
themselves. Server-side defence-in-depth:
- If the caller is a holder (§4.3c - no `holder:view-all` scope) and
they did not supply `customer_id`, we resolve it from their Auth
user id (via `customers`).
- If the caller is a holder and they did supply a `customer_id` that
does not match their own, we return 403 (they cannot create
accounts for someone else).
- If no `customers` row exists for the holder, we return 403
- there is no way to own the account, so creating it would leave an
orphan (the list/get handlers then hide it forever).
- Callers with `holder:view-all` (staff / sys / M2M) are
unrestricted: they can pass any `customer_id` or none (for
internal accounts).

Gate: `bank8:ledger:accounts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_type` | string | yes |  |
| `customer_id` | string,null | no |  |
| `denomination` | string | no |  |
| `nickname` | string,null | no |  |
| `product_id` | string,null | no |  |
| `product_type` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account created | `AccountResponse` |
| 400 | Invalid account type or module validation failed | - |
| 403 | Missing bank8:ledger:accounts:write scope | - |

### `GET /v1/accounts/{id}`

`GET /v1/accounts/{id}` - account detail.
.5: customer-realm callers can only fetch their own accounts
the service layer verifies the account's `customer_id` matches the
caller's customer before returning. RLS is the backstop.

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account detail | `AccountResponse` |
| 403 | Missing bank8:ledger:accounts:read scope | - |
| 404 | Account not found | - |

### `PUT /v1/accounts/{id}`

`PUT /v1/accounts/{id}` - update account (status, nickname).

Gate: `bank8:ledger:accounts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `nickname` | string,null | no |  |
| `status` | string,null | no |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account updated | `AccountResponse` |
| 403 | Missing bank8:ledger:accounts:write scope | - |

### `GET /v1/accounts/{id}/attributes`

`GET /v1/accounts/{id}/attributes` - list account attribute values.

Gate: `bank8:ledger:accounts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account attributes | `AccountAttributeResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `PUT /v1/accounts/{id}/attributes`

`PUT /v1/accounts/{id}/attributes` - upsert account attribute values.

Gate: `bank8:ledger:accounts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_key` | string | yes |  |
| `value` | `Value` | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Attribute upserted | `AccountAttributeResponse` |
| 403 | Missing bank8:ledger:accounts:write scope | - |

### `GET /v1/accounts/{id}/balances`

`GET /v1/accounts/{id}/balances` - live balances.

Gate: `bank8:ledger:balances:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account balances | `BalanceResponse`[] |
| 403 | Missing bank8:ledger:balances:read scope | - |

### `GET /v1/accounts/{id}/devices`

`GET /v1/accounts/{id}/devices` - list attached payment devices.

Gate: `bank8:ledger:accounts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Payment devices | `PaymentDeviceResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `POST /v1/accounts/{id}/devices`

`POST /v1/accounts/{id}/devices` - attach a payment device.

Gate: `bank8:ledger:accounts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `device_token_ref` | string | yes | Secret reference (never raw PAN/token material) - §4.4 secret references. |
| `device_type` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Device attached | `PaymentDeviceResponse` |
| 403 | Missing bank8:ledger:accounts:write scope | - |

### `GET /v1/accounts/{id}/schedules`

`GET /v1/accounts/{id}/schedules` - list schedules for an account.

Gate: `bank8:ledger:schedules:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedules for account | `ScheduleResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `GET /v1/accounts/{id}/statements`

`GET /v1/accounts/{id}/statements` - list statements.

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Account statements | `StatementResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `GET /v1/accounts/{id}/transactions`

`GET /v1/accounts/{id}/transactions` - transaction history.

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |
| `from` | query | no | string |
| `to` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Transaction history | `TransactionResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `GET /v1/adjustments`

`GET /v1/adjustments` - list adjustments (with `:batchGet` variant).

Gate: `bank8:ledger:postings:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Adjustments (newest first) | `AdjustmentResponse`[] |
| 403 | Missing bank8:ledger:postings:read scope | - |

### `POST /v1/adjustments`

`POST /v1/adjustments` - create an adjustment: recompute the account state
for backdated postings/parameter changes by re-running the on-schedule
modules from the effective date and submitting a correction batch.

Gate: `bank8:ledger:postings:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | string | yes |  |
| `effective_date` | string | yes |  |
| `reason` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Adjustment created and applied (correction batch submitted) | `AdjustmentResponse` |
| 400 | Invalid request | - |
| 403 | Missing bank8:ledger:postings:write scope | - |

### `POST /v1/adjustments/bulk-retry`

`POST /v1/adjustments:bulkRetry` - retry failed adjustments (Sentin8 Jobs
pattern).

Gate: `bank8:ledger:postings:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Retried count | - |
| 403 | Missing bank8:ledger:postings:write scope | - |

### `GET /v1/adjustments/{id}`

`GET /v1/adjustments/{id}` - adjustment detail.

Gate: `bank8:ledger:postings:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Adjustment | `AdjustmentResponse` |
| 404 | Not found | - |

### `GET /v1/audit`

`GET /v1/audit` - query audit events.

Gate: `bank8:ledger:audit:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `action` | query | no | string |
| `target_resource_type` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Audit events | `AuditEventResponse`[] |
| 403 | Missing bank8:ledger:audit:read scope | - |

### `GET /v1/audit/action-logs`

`GET /v1/audit/action-logs` - action-filtered audit view (business Audit
API `action_logs`).

Gate: `bank8:ledger:audit:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `action` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Action logs | `AuditEventResponse`[] |
| 403 | Missing bank8:ledger:audit:read scope | - |

### `GET /v1/calendar/bookkeeping-date/{date}`

`GET /v1/calendar/bookkeeping-date/{date}` - bookkeeping date for a day.

Gate: `bank8:ledger:schedules:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `calendar_id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Bookkeeping date | `BookkeepingDateResponse` |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `PUT /v1/calendar/bookkeeping-date/{date}`

`PUT /v1/calendar/bookkeeping-date/{date}` - set the bookkeeping date.

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bookkeeping_date` | string | yes |  |
| `calendar_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Bookkeeping date set | `BookkeepingDateResponse` |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `GET /v1/calendars`

`GET /v1/calendars` - list calendars.

Gate: `bank8:ledger:schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of calendars | `CalendarResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `POST /v1/calendars`

`POST /v1/calendars` - create a calendar.

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | string,null | no |  |
| `name` | string | yes |  |
| `timezone` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Calendar created | `CalendarResponse` |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `GET /v1/calendars/{id}/events`

`GET /v1/calendars/{id}/events` - list calendar events.

Gate: `bank8:ledger:schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Calendar events | `CalendarEventResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `POST /v1/calendars/{id}/events`

`POST /v1/calendars/{id}/events` - add a calendar event.

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | string,null | no |  |
| `event_date` | string | yes |  |
| `event_type` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Event added | `CalendarEventResponse` |
| 400 | Invalid event_type | - |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `GET /v1/calendars/{id}/periods`

`GET /v1/calendars/{id}/periods` - list calendar periods.

Gate: `bank8:ledger:schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Calendar periods | `CalendarPeriodResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `POST /v1/calendars/{id}/periods`

`POST /v1/calendars/{id}/periods` - add a calendar period.

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptor` | string,null | no |  |
| `end_date` | string | yes |  |
| `period_type` | string | no |  |
| `start_date` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Period added | `CalendarPeriodResponse` |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `GET /v1/contract-events`

`GET /v1/contract-events` - contract execution history (audit events with
target_resource_type='contract'/'func_hook').

Gate: `bank8:ledger:audit:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Contract execution events | `AuditEventResponse`[] |
| 403 | Missing bank8:ledger:audit:read scope | - |

### `GET /v1/contract-modules`

`GET /v1/contract-modules` - contract module catalog (Func modules
registered per product; sourced from the products' contract_modules field).

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Contract module catalog | `ContractModuleResponse`[] |
| 403 | Missing bank8:ledger:products:read scope | - |

### `POST /v1/contracts/simulate`

`POST /v1/contracts:simulate` - execute a module hook against synthetic
account state . Calls Sentin8:Func `POST /v1/modules/{id}/execute`
with a mock host-function context; **no persistence occurs** - the raw
hook result is returned for preview/dry-run use.

Gate: `bank8:ledger:postings:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account` | `Value` | no | Synthetic account state - no persistence occurs. |
| `hook` | string | no | Hook name (pre_posting, post_posting, scheduled_event, activation, deactivation). |
| `input` | `Value` | no |  |
| `module_id` | string | yes | Func module id (the hook logic to execute). |
| `parameters` | `Value` | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Simulation result (raw Func hook output) | - |
| 403 | Missing bank8:ledger:postings:write scope | - |
| 503 | Sentin8:Func not configured | - |

### `GET /v1/customers`

`GET /v1/customers` - list/search customers.
Optional `?search=<text>` filters by display_name or email (case-insensitive
substring match). Without a search term, returns all customers in the
caller's org/env (subject to RLS).

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `search` | query | no | string |
| `env_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of customers | `CustomerResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `POST /v1/customers`

`POST /v1/customers` - create a customer.
If the caller is a user token, the `sentin8_auth_user_id` is stamped
from their token claims so that holder-scoped RLS and
`resolve_caller_customer_id` can find the row.

Gate: `bank8:ledger:customers:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | string | yes |  |
| `email` | string,null | no |  |
| `phone` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Customer created | `CustomerResponse` |
| 403 | Missing bank8:ledger:customers:write scope | - |
| 409 | Customer already exists | - |

### `GET /v1/customers/{id}`

`GET /v1/customers/{id}` - customer detail.

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Customer detail | `CustomerResponse` |
| 403 | Missing bank8:ledger:accounts:read scope | - |
| 404 | Customer not found | - |

### `POST /v1/customers/{id}/link-auth`

Gate: `bank8:ledger:customers:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | string,null | no | Optional local display_name stamp (VDC §VDC.2 - the ledger never joins the platform auth schema; the caller supplies the identity fields it already verified). |
| `email` | string,null | no |  |
| `sentin8_auth_user_id` | string | yes |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Customer linked to auth user | `CustomerResponse` |
| 403 | Missing bank8:ledger:customers:write scope | - |
| 409 | Auth user already linked to another customer | - |

### `PUT /v1/customers/{id}/update`

`PUT /v1/customers/{id}/update` - update customer (display name / contact).

Gate: `bank8:ledger:customers:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | string,null | no |  |
| `email` | string,null | no |  |
| `phone` | string,null | no |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Customer updated | `CustomerResponse` |
| 403 | Missing bank8:ledger:customers:write scope | - |
| 404 | Not found | - |

### `GET /v1/derived-parameter-values`

`GET /v1/derived-parameter-values?account_id=` - computed derived values.

Gate: `bank8:ledger:accounts:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `account_id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Derived parameter values | `Value` |
| 400 | account_id required | - |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `GET /v1/dlq`

`GET /v1/dlq` - list dead-letter queue entries (local posting DLQ + Cron schedule DLQ).

Gate: `bank8:ledger:dlq:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | DLQ entries | `DlqResponse`[] |
| 403 | Missing bank8:ledger:dlq:read scope | - |

### `POST /v1/dlq/{id}/republish`

`POST /v1/dlq/{id}/republish` - republish a DLQ entry (local posting or Cron schedule).

Gate: `bank8:ledger:dlq:republish`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | DLQ entry republished | - |
| 403 | Missing bank8:ledger:dlq:republish scope | - |
| 404 | DLQ entry not found | - |

### `GET /v1/global-parameters`

`GET /v1/global-parameters` - list global parameters.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Global parameters | `GlobalParameterResponse`[] |
| 403 | Missing bank8:ledger:products:read scope | - |

### `POST /v1/global-parameters`

`POST /v1/global-parameters` - create/update a global parameter.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | yes |  |
| `shape` | `Value` | no |  |
| `value` | `Value` | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Global parameter upserted | `GlobalParameterResponse` |
| 403 | Missing bank8:ledger:products:write scope | - |

### `GET /v1/global-parameters/{id}`

`GET /v1/global-parameters/{id}` - global parameter detail.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Global parameter | `GlobalParameterResponse` |
| 404 | Not found | - |

### `GET /v1/internal-accounts`

`GET /v1/internal-accounts` - list internal accounts (nickname/product_type
filter). Staff-realm callers may pass the org-validated `?env_id=` override
per tenant-isolation design §10.1 (handled by the shared env resolution).

Gate: `bank8:ledger:accounts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Internal accounts | `InternalAccountResponse`[] |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `POST /v1/internal-accounts`

`POST /v1/internal-accounts` - create an internal account
(counterparty plumbing: cash deposit, clearing, suspense, etc.).

Gate: `bank8:ledger:accounts:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `denomination` | string | no |  |
| `nickname` | string | yes |  |
| `product_type` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Internal account created | `InternalAccountResponse` |
| 403 | Missing bank8:ledger:accounts:write scope | - |
| 409 | Nickname exists | - |

### `GET /v1/internal-accounts/{id}`

`GET /v1/internal-accounts/{id}` - internal account detail.

Gate: `bank8:ledger:accounts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Internal account | `InternalAccountResponse` |
| 404 | Not found | - |

### `GET /v1/jobs`

`GET /v1/jobs` - list jobs.

Gate: `bank8:ledger:jobs:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `schedule_id` | query | no | string |
| `status` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of jobs | `JobResponse`[] |
| 403 | Missing bank8:ledger:jobs:read scope | - |

### `GET /v1/jobs/{id}`

`GET /v1/jobs/{id}` - job detail.

Gate: `bank8:ledger:jobs:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Job detail | `JobResponse` |
| 403 | Missing bank8:ledger:jobs:read scope | - |
| 404 | Job not found | - |

### `POST /v1/jobs/{id}/retry`

`POST /v1/jobs/{id}/retry` - retry a failed job.

Gate: `bank8:ledger:jobs:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Job retried | `JobResponse` |
| 403 | Missing bank8:ledger:jobs:admin scope | - |

### `POST /v1/jobs:batchRepublish`

`POST /v1/jobs:batchRepublish` - override failed jobs (mark as OVERRIDDEN).

Gate: `bank8:ledger:jobs:admin`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ids` | string[] | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Jobs overridden | - |
| 403 | Missing bank8:ledger:jobs:admin scope | - |

### `GET /v1/journal-events`

`GET /v1/journal-events` - query the journal.

Gate: `bank8:ledger:postings:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `resource_type` | query | no | string |
| `resource_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Journal events (newest first) | `JournalEventResponse`[] |
| 403 | Missing bank8:ledger:postings:read scope | - |

### `GET /v1/journal-events/{id}`

`GET /v1/journal-events/{id}` - one journal event.

Gate: `bank8:ledger:postings:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Journal event | `JournalEventResponse` |
| 404 | Not found | - |

### `POST /v1/journal-events/{id}/replay`

`POST /v1/journal-events/{id}/replay` - re-drive a journal event
idempotently . The journal row carries the full operation payload;
posting replays are no-ops thanks to posting idempotency keys. Other
resource kinds re-apply the recorded operation.

Gate: `bank8:ledger:postings:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Replay accepted (result object) | - |
| 404 | Journal event not found | - |

### `GET /v1/plans`

`GET /v1/plans` - list plans.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Plans | `PlanResponse`[] |
| 403 | Missing bank8:ledger:products:read scope | - |

### `POST /v1/plans`

`POST /v1/plans` - create a plan.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `modules` | `Value` | no |  |
| `name` | string | yes |  |
| `parameters` | `Value` | no |  |
| `product_type` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Plan created | `PlanResponse` |
| 403 | Missing bank8:ledger:products:write scope | - |
| 409 | Plan name exists | - |

### `GET /v1/plans/{id}`

`GET /v1/plans/{id}` - plan detail.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Plan | `PlanResponse` |
| 404 | Not found | - |

### `POST /v1/plans/{id}/migrations`

`POST /v1/plans/{id}/migrations` - migrate accounts onto a plan
(PlanMigration): re-associates the from-plan accounts and closes it.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `from_plan_id` | string,null | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Migration completed | - |
| 403 | Missing bank8:ledger:products:write scope | - |

### `GET /v1/post-posting-failures`

`GET /v1/post-posting-failures` - list post-posting hook failures.

Gate: `bank8:ledger:postings:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Post-posting hook failures (DLQ subset) | `Value`[] |
| 403 | Missing bank8:ledger:postings:read scope | - |

### `POST /v1/post-posting-failures/{id}/republish`

`POST /v1/post-posting-failures/{id}/republish` - re-run the post-posting
hook for a committed batch (delegates to Sentin8:Func).

Gate: `bank8:ledger:postings:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Hook re-invoked | - |
| 404 | Failure not found | - |

### `POST /v1/postings`

`POST /v1/postings` - synchronous posting instruction batch.

Gate: `bank8:ledger:postings:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch_id` | string | yes |  |
| `dry_run` | boolean | no |  |
| `idempotency_key` | string,null | no |  |
| `instructions` | `PostingInstruction`[] | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Posting batch processed | `PostingResponse` |
| 400 | Invalid amount or empty instructions | - |
| 403 | Missing bank8:ledger:postings:write scope | - |

### `POST /v1/postings/async`

`POST /v1/postings/async` - async posting via Bus (enqueues to Bus stream).

Gate: `bank8:ledger:postings:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `batch_id` | string | yes |  |
| `idempotency_key` | string,null | no |  |
| `instructions` | `PostingInstruction`[] | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Async posting enqueued | - |
| 400 | Empty instructions | - |
| 403 | Missing bank8:ledger:postings:write scope | - |

### `GET /v1/postings/{id}`

`GET /v1/postings/{id}` - batch status.

Gate: `bank8:ledger:postings:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Posting batch status | `PostingResponse` |
| 403 | Missing bank8:ledger:postings:read scope | - |
| 404 | Posting not found | - |

### `GET /v1/postings/{id}/instructions`

`GET /v1/postings/{id}/instructions` - list instructions in a batch.

Gate: `bank8:ledger:postings:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of posting instructions | - |
| 403 | Missing bank8:ledger:postings:read scope | - |

### `GET /v1/processing-groups`

`GET /v1/processing-groups` - list processing groups.

Gate: `bank8:ledger:schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Processing groups | `ProcessingGroupResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `POST /v1/processing-groups`

`POST /v1/processing-groups` - create/update a processing group.

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eod_cut_off` | string | no |  |
| `grace_period_minutes` | integer | no |  |
| `name` | string | yes |  |
| `paused` | boolean | no |  |
| `utc_offset` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Processing group upserted | `ProcessingGroupResponse` |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `POST /v1/processing-groups/{id}/pause`

`POST /v1/processing-groups/{id}/pause` - pause EOD processing.

Gate: `bank8:ledger:schedules:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Paused | `ProcessingGroupResponse` |

### `POST /v1/processing-groups/{id}/resume`

`POST /v1/processing-groups/{id}/resume` - resume EOD processing.

Gate: `bank8:ledger:schedules:write`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Resumed | `ProcessingGroupResponse` |

### `GET /v1/products`

`GET /v1/products` - list products.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of products | `ProductResponse`[] |
| 403 | Missing bank8:ledger:products:read scope | - |

### `POST /v1/products`

`POST /v1/products` - create a product.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `modules` | - | no |  |
| `name` | string | yes |  |
| `parameters` | - | no |  |
| `product_type` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Product created | `ProductResponse` |
| 403 | Missing bank8:ledger:products:write scope | - |

### `GET /v1/products/{id}`

`GET /v1/products/{id}` - product detail.

Gate: `bank8:ledger:products:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Product detail | `ProductResponse` |
| 403 | Missing bank8:ledger:products:read scope | - |
| 404 | Product not found | - |

### `PUT /v1/products/{id}`

`PUT /v1/products/{id}` - update product.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `modules` | - | no |  |
| `name` | string,null | no |  |
| `parameters` | - | no |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Product updated | `ProductResponse` |
| 403 | Missing bank8:ledger:products:write scope | - |

### `POST /v1/products/{id}/activate`

`POST /v1/products/{id}/activate` - activate a product.
Also accepts `ledger:write` (broad write scope) for end-user app tokens.

Gate: `bank8:ledger:products:publish`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 204 | Product activated | - |
| 403 | Missing bank8:ledger:products:publish scope | - |

### `GET /v1/products/{id}/versions`

`GET /v1/products/{id}/versions` - list product versions.

Gate: `bank8:ledger:products:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of product versions | `ProductVersionResponse`[] |
| 403 | Missing bank8:ledger:products:read scope | - |

### `POST /v1/products/{id}/versions`

`POST /v1/products/{id}/versions` - create a product version.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contract_modules` | - | no |  |
| `expected_parameters` | - | no |  |
| `parameters` | - | no |  |
| `supported_denominations` | string[] | no |  |
| `tside` | string,null | no |  |

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Product version created | `ProductVersionResponse` |
| 403 | Missing bank8:ledger:products:write scope | - |

### `GET /v1/schedule-tags`

`GET /v1/schedule-tags` - list schedule tags.

Gate: `bank8:ledger:schedules:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule tags | `ScheduleTagResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `POST /v1/schedule-tags`

`POST /v1/schedule-tags` - create a schedule tag (activation group).

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | yes |  |
| `status` | string | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Tag created | `ScheduleTagResponse` |
| 403 | Missing bank8:ledger:schedules:write scope | - |
| 409 | Tag name exists | - |

### `POST /v1/schedule-tags/{id}/assocs`

`POST /v1/schedule-tags/{id}/assocs` - attach a tag to a schedule
(tag status ACTIVE/INACTIVE controls the schedule).

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schedule_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Associated | - |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `GET /v1/schedules`

`GET /v1/schedules` - list schedules.

Gate: `bank8:ledger:schedules:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `account_id` | query | no | string |
| `schedule_type` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of schedules | `ScheduleResponse`[] |
| 403 | Missing bank8:ledger:schedules:read scope | - |

### `POST /v1/schedules`

`POST /v1/schedules` - create a schedule, delegating execution to Cron.
Ledger stores a local reference in `schedules` and creates the actual
schedule in Cron via `POST /v1/schedules`. Cron fires the schedule and
proxy-calls Ledger's `POST /v1/internal/schedules/run` to execute the work.

Gate: `bank8:ledger:schedules:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `account_id` | string,null | no |  |
| `cron_expression` | string | yes |  |
| `schedule_type` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule created | `ScheduleResponse` |
| 403 | Missing bank8:ledger:schedules:write scope | - |

### `GET /v1/schedules/{id}`

`GET /v1/schedules/{id}` - schedule detail.

Gate: `bank8:ledger:schedules:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Schedule detail | `ScheduleResponse` |
| 403 | Missing bank8:ledger:schedules:read scope | - |
| 404 | Schedule not found | - |

### `GET /v1/streams`

`GET /v1/streams` - client-facing streaming catalog: the `event_type`
families the ledger emits on the `bus:{envId}:ledger` stream family
(business "Core Streaming API"; topic mapping in design §11).

Gate: `bank8:ledger:accounts:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Emitted event families | - |
| 403 | Missing bank8:ledger:accounts:read scope | - |

### `GET /v1/supervisor-contracts`

`GET /v1/supervisor-contracts` - list supervisor contracts.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Supervisor contracts | `SupervisorContractResponse`[] |
| 403 | Missing bank8:ledger:products:read scope | - |

### `POST /v1/supervisor-contracts`

`POST /v1/supervisor-contracts` - create a cross-account contract.

Gate: `bank8:ledger:products:write`

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `func_module_id` | string | yes |  |
| `member_account_ids` | `Value` | no |  |
| `name` | string | yes |  |
| `parameters` | `Value` | no |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Supervisor contract created | `SupervisorContractResponse` |
| 403 | Missing bank8:ledger:products:write scope | - |
| 409 | Name exists | - |

### `GET /v1/supervisor-contracts/{id}`

`GET /v1/supervisor-contracts/{id}` - supervisor contract detail.

Gate: `bank8:ledger:products:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Supervisor contract | `SupervisorContractResponse` |
| 404 | Not found | - |

### `GET /v2/balances/end`

`GET /v2/balances/end` - end-of-period balances (month buckets by default).

Gate: `bank8:ledger:balances:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | End-of-period balances | `BalanceV2Response`[] |
| 403 | Missing bank8:ledger:balances:read scope | - |

### `GET /v2/balances/live`

`GET /v2/balances/live` - current committed balances per account.

Gate: `bank8:ledger:balances:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Live committed balances | `BalanceV2Response`[] |
| 403 | Missing bank8:ledger:balances:read scope | - |

### `GET /v2/balances/series`

`GET /v2/balances/series` - balance series over a time range (bucket scan).

Gate: `bank8:ledger:balances:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `account_id` | query | no | string |
| `from` | query | no | string |
| `to` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Balance series buckets | `Value`[] |
| 403 | Missing bank8:ledger:balances:read scope | - |

