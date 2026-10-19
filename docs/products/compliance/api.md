---
title: "Bank8:Compliance - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Bank8-dev/bank8-compliance/edit/main/docs/openapi.json
---
Sentin8 Bank8:Compliance - AML/CTF: KYC/CDD, sanctions screening, transaction monitoring, alert/case lifecycle.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**32 endpoints** across 4 groups.

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

### `GET /v1/admin/overview`

GET /v1/admin/overview - the data endpoint behind the overview page: alert/case counts for the tenant env.

Gate: `bank8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `target_env_id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | alert/case counts | - |
| 403 | Caller lacks the admin scope | - |

### `GET /v1/admin/ui/{page}`

GET /v1/admin/ui/&#123;page&#125; - return the RFW definition for the requested admin page.

Gate: `bank8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `page` | path | yes | string |
| `target_env_id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | RFW page definition | - |
| 403 | Caller lacks the admin scope | - |


## handlers

### `GET /v1/alerts`

`GET /v1/alerts` - list alerts, optionally by status.

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `status` | path | yes | string,null |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `AlertResponse`[] |

### `POST /v1/alerts/{id}/case`

`POST /v1/alerts/&#123;id&#125;/case` - escalate an alert to a case with an audited actor claim (the assignee). The alert transitions to `escalated` in the same transaction.

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |

### `POST /v1/alerts/{id}/status`

`POST /v1/alerts/&#123;id&#125;/status` - queue operation on an alert (claim / review / close) with an audited actor: the caller's verified identity drives the journal entry; the transition is guarded against terminal states (closed alerts never reopen - a new detection raises a new alert).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |
| 409 |  | - |

### `GET /v1/cases/{id}`

`GET /v1/cases/&#123;id&#125;` - case detail with its alert.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |

### `POST /v1/cases/{id}/conclude`

`POST /v1/cases/&#123;id&#125;/conclude` - conclude a case as reportable: the report kind lands in `suspicious_activities` and ``bank8:compliance:suspicious:detected`` is emitted exactly once - Reporting files it through its own durable consume (detection here, filing there - the single-filing-executor rule, DESIGN.md §8).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `report_kind` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |

### `POST /v1/cases/{id}/dismiss`

`POST /v1/cases/&#123;id&#125;/dismiss` - dismiss a case as not reportable: the recorded reason lands in the case row and NO suspicious activity is emitted - Reporting never sees a dismissed case (a dismissed case is terminal; a new detection opens a new case).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |
| 409 |  | - |
| 422 |  | - |

### `GET /v1/cases/{id}/evidence`

`GET /v1/cases/&#123;id&#125;/evidence` - the case's investigation evidence: the originating alert, every sanctions screen against its subject, and the customer's risk profile (when resolved). Read-only - evidence is the input to the conclude/dismiss decision, never mutated by it.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |

### `GET /v1/customers/{id}/beneficial-owners`

`GET /v1/customers/&#123;id&#125;/beneficial-owners` - list the customer's disclosed beneficial owners (references only).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `BeneficialOwnerResponse`[] |

### `POST /v1/customers/{id}/beneficial-owners`

`POST /v1/customers/&#123;id&#125;/beneficial-owners` - disclose a beneficial owner against a KYC record (idempotent per (kyc, identity_ref) - re-disclosing the same owner converges to the same row).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `identity_ref` | string | yes |  |
| `kyc_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `BeneficialOwnerResponse` |

### `GET /v1/customers/{id}/kyc`

`GET /v1/customers/&#123;id&#125;/kyc` - list a customer's KYC records.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `KycResponse`[] |

### `POST /v1/customers/{id}/kyc`

`POST /v1/customers/&#123;id&#125;/kyc` - create a KYC record for a customer.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `KycResponse` |

### `POST /v1/customers/{id}/pep`

`POST /v1/customers/&#123;id&#125;/pep` - record a PEP (politically exposed person) determination. One live determination per KYC record - a re-determination updates it in place (the latest determination is authoritative; history rides the audit journal).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `is_pep` | boolean | yes |  |
| `kyc_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |

### `POST /v1/customers/{id}/risk-profile`

`POST /v1/customers/&#123;id&#125;/risk-profile` - upsert the customer's AML risk rating (low/medium/high) with a recorded rationale. The rating drives monitoring intensity; a PEP determination forces at least `high` (a PEP can never sit below it).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rating` | string | yes |  |
| `rationale` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |
| 422 |  | - |

### `GET /v1/rules`

`GET /v1/rules` - list the tenant's monitoring rules (thresholds derive from the jurisdiction registry - reporting's return-template definitions - materialized at env-init; never code).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `MonitoringRuleResponse`[] |


## meta

### `GET /v1/health`

`GET /v1/health` - service health payload.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Liveness (version, build) | - |

