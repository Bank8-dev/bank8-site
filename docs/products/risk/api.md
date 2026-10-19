---
title: "Bank8:Risk - API (OpenAPI)"
sidebar_label: "API (OpenAPI)"
mdx:
  format: md
custom_edit_url: https://github.com/Bank8-dev/bank8-risk/edit/main/docs/openapi.json
---
Sentin8 Bank8:Risk - prudential risk measurement: capital, liquidity, credit (ECL), limits, stress.

> Generated from the service’s OpenAPI 3.1 spec (`docs/openapi.json`,
> served live at `GET /openapi.json`) - the source of truth is the
> service’s own `#[utoipa::path]` annotations.

**24 endpoints** across 4 groups.

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

GET /v1/admin/overview - the data endpoint behind the overview page: limit/breach counts for the tenant env.

Gate: `bank8:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `target_env_id` | query | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | limit/breach counts | - |
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

### `GET /v1/exposures`

`GET /v1/exposures` - list measured exposures, optionally by dimension.

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `dimension` | path | yes | string,null |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `ExposureResponse`[] |

### `GET /v1/limits`

`GET /v1/limits` - list configured limits with breach state.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `LimitResponse`[] |

### `POST /v1/limits`

`POST /v1/limits` - upsert a limit threshold (admin-scoped; idempotent per (env, limit_type)). The limit_type must be one of the schema's CHECK values.

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `limit_type` | string | yes |  |
| `threshold` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |
| 422 |  | - |

### `GET /v1/limits/{id}`

`GET /v1/limits/&#123;id&#125;` - limit detail with breach history.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |

### `POST /v1/stress/run`

`POST /v1/stress/run` - run a scenario's shocks against a point-in-time snapshot (on-demand full recompute; never touches the incremental hot path). Idempotent per (scenario, snapshot ref).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `scenario_id` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |

### `POST /v1/stress/scenarios`

`POST /v1/stress/scenarios` - author a declarative scenario (admin-scoped). Idempotent per (env, name): re-authoring a scenario updates its assumptions in place (registry data, not code).

**Request body** (`application/json`):

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assumptions` | - | yes |  |
| `name` | string | yes |  |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | - |


## meta

### `GET /v1/health`

`GET /v1/health` - service health payload.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Liveness (version, build) | - |

