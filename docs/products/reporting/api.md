---
title: "Bank8:Reporting - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Bank8-dev/bank8-reporting/edit/main/docs/openapi.json
---
Sentin8 Bank8:Reporting - regulatory filing calendar, generation, packaging, submission.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**25 endpoints** across 5 groups.

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

GET /v1/admin/overview - the data endpoint behind the overview page: obligation/run/submission counts for the tenant env.

Gate: `bank8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `target_env_id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | obligation/run/submission counts | - |
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


## meta

### `GET /v1/health`

`GET /v1/health` - service health payload.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Liveness (version, build) | - |


## internal

### `POST /v1/internal/calendar/schedules/run`

`POST /v1/internal/calendar/schedules/run` - Cron fires this daily. Marks due obligations and creates their filing runs - idempotent per (obligation, period): the unique index is the dedupe floor, so a re-fired calendar never double-creates (reporting DESIGN.md §5/§8). Cron owns timing; this owns correctness. The ``sentin8:cron`` workload is granted ``bank8:reporting:runs:write`` in this service's registration (the ledger-storage precedent), so the same Shield gate every human mutation passes also gates the scheduled fire - no bypass.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Filing-calendar due check completed | - |

### `POST /v1/internal/steps/execute`

`POST /v1/internal/steps/execute` - Flow proxy-back for filing workflow steps (DESIGN.md §4; the proxy-back contract is one of the narrow internal-API exceptions - the steps are already event-triggered, the proxy-back is their data access). The env rides the step input (Flow records it at workflow creation); the dispatch owns the guarded state transitions.

**Request body** (`application/json`):


**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Step executed | - |


## handlers

### `GET /v1/obligations`

`GET /v1/obligations` - list filing obligations for the tenant env.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `ObligationResponse`[] |

### `GET /v1/runs`

`GET /v1/runs` - list filing runs, optionally by status.

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `status` | path | yes | string,null |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `RunResponse`[] |

### `GET /v1/runs/{id}`

`GET /v1/runs/&#123;id&#125;` - filing run detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `RunResponse` |

### `POST /v1/runs/{id}/regenerate`

`POST /v1/runs/&#123;id&#125;/regenerate` - reset a non-submitted run to draft (guarded: terminal states never regress; corrections are amendments).

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `RunResponse` |
| 409 |  | - |

### `GET /v1/submissions`

`GET /v1/submissions` - list submissions for the tenant env.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | -[] |

