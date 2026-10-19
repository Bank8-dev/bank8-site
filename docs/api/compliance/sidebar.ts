import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/compliance/bank-8-compliance",
      },
      items: [
        {
          type: "doc",
          id: "api/compliance/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/compliance/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/compliance/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/compliance/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/compliance/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/compliance/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/compliance/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
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
          id: "api/compliance/admin-overview",
          label: "`GET /v1/admin/overview`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "handlers",
      items: [
        {
          type: "doc",
          id: "api/compliance/list-alerts",
          label: "`GET /v1/alerts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/open-case",
          label: "`POST /v1/alerts/{id}/case`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/update-alert-status",
          label: "`POST /v1/alerts/{id}/status`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/get-case",
          label: "`GET /v1/cases/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/conclude-case",
          label: "`POST /v1/cases/{id}/conclude`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/dismiss-case",
          label: "`POST /v1/cases/{id}/dismiss`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/get-case-evidence",
          label: "`GET /v1/cases/{id}/evidence`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/list-beneficial-owners",
          label: "`GET /v1/customers/{id}/beneficial-owners`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/disclose-beneficial-owner",
          label: "`POST /v1/customers/{id}/beneficial-owners`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/list-kyc",
          label: "`GET /v1/customers/{id}/kyc`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/create-kyc",
          label: "`POST /v1/customers/{id}/kyc`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/record-pep-determination",
          label: "`POST /v1/customers/{id}/pep`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/upsert-risk-profile",
          label: "`POST /v1/customers/{id}/risk-profile`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/list-rules",
          label: "`GET /v1/rules`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "meta",
      items: [
        {
          type: "doc",
          id: "api/compliance/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
