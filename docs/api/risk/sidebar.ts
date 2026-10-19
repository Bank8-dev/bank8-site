import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/risk/bank-8-risk",
      },
      items: [
        {
          type: "doc",
          id: "api/risk/policy-list-attributes",
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/risk/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/risk/policy-check-relation",
          label: "policy_check_relation",
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
          id: "api/risk/admin-overview",
          label: "GET /v1/admin/overview — the data endpoint behind the overview page:\nlimit/breach counts for the tenant env.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/get-admin-ui",
          label: "GET /v1/admin/ui/{page} — return the RFW definition for the requested\nadmin page.",
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
          id: "api/risk/list-exposures",
          label: "`GET /v1/exposures` — list measured exposures, optionally by dimension.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/list-limits",
          label: "`GET /v1/limits` — list configured limits with breach state.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/upsert-limit",
          label: "`POST /v1/limits` — upsert a limit threshold (admin-scoped;\nidempotent per (env, limit_type)). The limit_type must be one of the\nschema's CHECK values.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/get-limit",
          label: "`GET /v1/limits/{id}` — limit detail with breach history.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/risk/run-stress",
          label: "`POST /v1/stress/run` — run a scenario's shocks against a\npoint-in-time snapshot (on-demand full recompute; never touches the\nincremental hot path). Idempotent per (scenario, snapshot ref).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/risk/create-scenario",
          label: "`POST /v1/stress/scenarios` — author a declarative scenario\n(admin-scoped). Idempotent per (env, name): re-authoring a scenario\nupdates its assumptions in place (registry data, not code).",
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
          id: "api/risk/health",
          label: "`GET /v1/health` — service health payload.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
