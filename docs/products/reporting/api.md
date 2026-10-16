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

**5 endpoints**.

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

`GET /v1/runs/{id}` - filing run detail.

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 |  | `RunResponse` |

### `POST /v1/runs/{id}/regenerate`

`POST /v1/runs/{id}/regenerate` - reset a non-submitted run to draft
(guarded: terminal states never regress; corrections are amendments).

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

