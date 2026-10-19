import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/reporting/bank-8-reporting",
      },
      items: [
        {
          type: "doc",
          id: "api/reporting/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/reporting/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/reporting/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/reporting/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/policy-check-relation",
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
          id: "api/reporting/admin-overview",
          label: "`GET /v1/admin/overview`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
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
          id: "api/reporting/health",
          label: "`GET /v1/health`",
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
          id: "api/reporting/calendar-due-check",
          label: "`POST /v1/internal/calendar/schedules/run`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/execute-step",
          label: "`POST /v1/internal/steps/execute`",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "handlers",
      items: [
        {
          type: "doc",
          id: "api/reporting/list-obligations",
          label: "`GET /v1/obligations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/list-runs",
          label: "`GET /v1/runs`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/get-run",
          label: "`GET /v1/runs/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/regenerate-run",
          label: "`POST /v1/runs/{id}/regenerate`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/list-submissions",
          label: "`GET /v1/submissions`",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
