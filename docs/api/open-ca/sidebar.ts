import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/open-ca/bank-8-open-ca",
      },
      items: [
        {
          type: "doc",
          id: "api/open-ca/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/open-ca/policy-check-relation",
          label: "policy_check_relation",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "open-banking",
      items: [
        {
          type: "doc",
          id: "api/open-ca/list-admin-audit",
          label: "`GET /v1/admin/audit` - audit trail (admin).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/list-all-consents",
          label: "`GET /v1/admin/consents` - consent overview (admin).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/get-provider-profile",
          label: "`GET /v1/admin/provider-profile` - get provider profile.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/update-provider-profile",
          label: "`PUT /v1/admin/provider-profile` - update provider profile.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/open-ca/list-recipients",
          label: "`GET /v1/admin/recipients` - list registered data recipients.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/activate-recipient",
          label: "`POST /v1/admin/recipients/{id}/activate` - activate a data recipient.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/suspend-recipient",
          label: "`POST /v1/admin/recipients/{id}/suspend` - suspend a data recipient.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/list-recipient-accounts",
          label: "`GET /v1/recipient/accounts` - list consented accounts for the recipient.\nIf `consent_id` is provided, returns only the accounts the customer\nselected during the provider's consent screen (per FDX UX Guidelines\n§3.1.6 'Select Accounts'). The account IDs are stored in\nconsent_resources and used to filter the Ledger account list.\nIf no consent_id is provided, returns all accounts (backward compat).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/get-recipient-account-transactions",
          label: "`GET /v1/recipient/accounts/{id}/transactions` - recipient transaction history.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/list-recipient-consents",
          label: "`GET /v1/recipient/consents` - list active consents for the recipient.\nReturns `{'consents': [...]}` (wrapped) so the eFintech app's\nFdxConsentsHook can parse `response.data['consents']`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/start-consent",
          label: "`POST /v1/recipient/consents/start` - start consent authorization.\nThe two-ledger recipient flow (bank8-open-ca DESIGN.md §1 + §4 consent-flow\nsequence): the recipient-side open-banking instance writes its OWN registry\n(a `pending` row in `recipient_consents`, in the recipient tenant),\nensures its per-provider OAuth client exists at the provider's\nauthorization server (DCR, cached in `open_ca.recipients`), and pushes a\nPAR request whose `state` carries `'<consent handle>|<app origin>'`.\nThe AS's authorize screen runs the ceremony; the browser redirect\ncomes back to THIS instance's `/fdx/consents/callback` (the\nregistered redirect_uri), which activates the row and exchanges the\ncode. The provider's grant row is seeded by the provider's OWN\nauth-family consumer from `sentin8:auth:grant:created` - never by\nthis side.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/get-recipient-consent",
          label: "`GET /v1/recipient/consents/{id}` - get a specific recipient consent.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/refresh-consent",
          label: "`POST /v1/recipient/consents/{id}/refresh` - trigger data refresh.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/revoke-recipient-consent",
          label: "`POST /v1/recipient/consents/{id}/revoke` - revoke a recipient consent.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/list-notifications",
          label: "`GET /v1/recipient/notifications` - notification feed for the recipient.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/list-recipient-providers",
          label: "`GET /v1/recipient/providers` - list FDX data providers from the\n`provider_profiles` registry.\nProvider profiles are auto-registered when an environment's\n`is_fdx_provider` flag is turned on (see Sys `update_env`), with the\nenv's auth domain used as the issuer URL. The table has no RLS, so the\ncatalog is visible cross-org - any recipient can discover and connect to\nany active provider. No static seed data is required.\nResponse shape matches the eFintech recipient catalog contract:\n`{ 'providers': [{ id, name, supportedDataClusters, status, ... }] }`,\nwhere each card reads `name`, `supportedDataClusters`, and `status`.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/get-recipient-provider",
          label: "`GET /v1/recipient/providers/{id}` - get a specific FDX data provider.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-ui",
      items: [
        {
          type: "doc",
          id: "api/open-ca/get-admin-ui",
          label: "GET /v1/admin/ui/{page} - return RFW definition for the requested admin page.",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "consent",
      items: [
        {
          type: "doc",
          id: "api/open-ca/auth-consent-accounts",
          label: "`GET /v1/auth/consent/accounts` - data endpoint for account selection.\nReturns the customer's accounts at this Data Provider. Called by the\nRFW page's data fetch (proxied by Sentin8:Auth with a short-lived JWT).\nFetches accounts from Bank8:Ledger.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/auth-consent-approve",
          label: "auth_consent_approve",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/auth-consent-deny",
          label: "auth_consent_deny",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/auth-consent-ui",
          label: "`GET /v1/auth/consent/ui` - return RFW consent page definition.\nReturns a JSON RFW definition that auth-ui renders. The definition\nincludes:\n- Scope list with FDX-specific descriptions and Material Icons code points\n- Account selection DataTable (checkboxes, nickname, type, masked number, balance)\n- 'Authorize' button (POST to /v1/auth/consent/approve)\n- 'Deny' button (POST to /v1/auth/consent/deny)\n- Data endpoint declaration for account fetch (/v1/auth/consent/accounts)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/list-consents",
          label: "`GET /v1/consents` - list consents.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/create-consent",
          label: "`POST /v1/consents` - create a consent grant.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/open-ca/get-consent",
          label: "`GET /v1/consents/{id}` - consent detail.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/open-ca/revoke-consent",
          label: "`POST /v1/consents/{id}/revoke` - revoke a consent.",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "meta",
      items: [
        {
          type: "doc",
          id: "api/open-ca/health",
          label: "health",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "internal",
      items: [
        {
          type: "doc",
          id: "api/open-ca/execute-step",
          label: "`POST /v1/internal/steps/execute` - Flow proxy-back for FDX domain steps.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
