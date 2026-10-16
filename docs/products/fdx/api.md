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

**14 endpoints**.

## fdx

### `GET /v1/admin/audit`

`GET /v1/admin/audit` - audit trail (admin).

Gate: `fdx:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of audit entries | -[] |
| 403 | Missing fdx:admin scope | - |

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
| 403 | Missing fdx:admin scope | - |

### `GET /v1/admin/provider-profile`

`GET /v1/admin/provider-profile` - get provider profile.

Gate: `fdx:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Provider profile | - |
| 403 | Missing fdx:admin scope | - |

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
| 403 | Missing fdx:admin scope | - |

### `GET /v1/admin/recipients`

`GET /v1/admin/recipients` - list registered data recipients.

Gate: `fdx:admin`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of recipients | -[] |
| 403 | Missing fdx:admin scope | - |

### `POST /v1/admin/recipients/{id}/activate`

`POST /v1/admin/recipients/{id}/activate` - activate a data recipient.

Gate: `fdx:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recipient activated | - |
| 403 | Missing fdx:admin scope | - |
| 404 | Recipient not found | - |

### `POST /v1/admin/recipients/{id}/suspend`

`POST /v1/admin/recipients/{id}/suspend` - suspend a data recipient.

Gate: `fdx:admin`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recipient suspended | - |
| 403 | Missing fdx:admin scope | - |
| 404 | Recipient not found | - |

### `GET /v1/recipient/consents`

`GET /v1/recipient/consents` - list active consents for the recipient.
Returns `{"consents": [...]}` (wrapped) so the eFintech app's
FdxConsentsHook can parse `response.data['consents']`.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `customer_id` | query | no | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of recipient consents | - |
| 403 | Missing fdx:read scope | - |

### `POST /v1/recipient/consents/start`

`POST /v1/recipient/consents/start` - start consent authorization.
The two-ledger recipient flow (fdx DESIGN.md §1 + §4 consent-flow
sequence): the recipient-side fdx instance writes its OWN registry
(a `pending` row in `recipient_consents`, in the recipient tenant),
ensures its per-provider OAuth client exists at the provider's
authorization server (DCR, cached in `fdx.recipients`), and pushes a
PAR request whose `state` carries `"<consent handle>|<app origin>"`.
The AS's authorize screen runs the ceremony; the browser redirect
comes back to THIS instance's `/fdx/consents/callback` (the
registered redirect_uri), which activates the row and exchanges the
code. The provider's grant row is seeded by the provider's OWN
auth-family consumer from `sentin8:auth:grant:created` - never by
this side.

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
| 403 | Missing fdx:read scope | - |

### `GET /v1/recipient/consents/{id}`

`GET /v1/recipient/consents/{id}` - get a specific recipient consent.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Recipient consent detail | `ConsentResponse` |
| 403 | Missing fdx:read scope | - |
| 404 | Consent not found | - |

### `POST /v1/recipient/consents/{id}/refresh`

`POST /v1/recipient/consents/{id}/refresh` - trigger data refresh.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Consent refreshed | - |
| 403 | Missing fdx:read scope | - |
| 404 | Consent not found | - |

### `POST /v1/recipient/consents/{id}/revoke`

`POST /v1/recipient/consents/{id}/revoke` - revoke a recipient consent.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | Consent revoked | `ConsentResponse` |
| 403 | Missing fdx:read scope | - |

### `GET /v1/recipient/providers`

`GET /v1/recipient/providers` - list FDX data providers from the
`provider_profiles` registry.
Provider profiles are auto-registered when an environment's
`is_fdx_provider` flag is turned on (see Sys `update_env`), with the
env's auth domain used as the issuer URL. The table has no RLS, so the
catalog is visible cross-org - any recipient can discover and connect to
any active provider. No static seed data is required.
Response shape matches the eFintech recipient catalog contract:
`{ "providers": [{ id, name, supportedDataClusters, status, ... }] }`,
where each card reads `name`, `supportedDataClusters`, and `status`.

Gate: `fdx:read`

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | List of FDX data providers | - |
| 403 | Missing fdx:read scope | - |

### `GET /v1/recipient/providers/{id}`

`GET /v1/recipient/providers/{id}` - get a specific FDX data provider.

Gate: `fdx:read`

**Parameters**:

| Name | In | Required | Type |
| --- | --- | --- | --- |
| `id` | path | yes | string |

**Responses**:

| Status | Description | Body |
| --- | --- | --- |
| 200 | FDX data provider detail | - |
| 403 | Missing fdx:read scope | - |
| 404 | Provider not found | - |

