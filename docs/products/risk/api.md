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

**6 endpoints**.

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

