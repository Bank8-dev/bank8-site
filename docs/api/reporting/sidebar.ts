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
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/reporting/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/reporting/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/reporting/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/reporting/policy-check-relation",
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
          id: "api/reporting/admin-overview",
          label: "GET /v1/admin/overview — the data endpoint behind the overview page:\nobligation/run/submission counts for the tenant env.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/get-admin-ui",
          label: "GET /v1/admin/ui/{page} — return the RFW definition for the requested\nadmin page.",
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
          label: "`GET /v1/health` — service health payload.",
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
          label: "`POST /v1/internal/calendar/schedules/run` — Cron fires this daily.\nMarks due obligations and creates their filing runs — idempotent per\n(obligation, period): the unique index is the dedupe floor, so a\nre-fired calendar never double-creates (reporting DESIGN.md §5/§8).\nCron owns timing; this owns correctness. The `sentin8:cron` workload\nis granted `bank8:reporting:runs:write` in this service's registration\n(the ledger-storage precedent), so the same Shield gate every human\nmutation passes also gates the scheduled fire — no bypass.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/execute-step",
          label: "`POST /v1/internal/steps/execute` — Flow proxy-back for filing\nworkflow steps (DESIGN.md §4; the proxy-back contract is one of the\nnarrow internal-API exceptions — the steps are already\nevent-triggered, the proxy-back is their data access). The env rides\nthe step input (Flow records it at workflow creation); the dispatch\nowns the guarded state transitions.",
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
          label: "`GET /v1/obligations` — list filing obligations for the tenant env.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/list-runs",
          label: "`GET /v1/runs` — list filing runs, optionally by status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/get-run",
          label: "`GET /v1/runs/{id}` — filing run detail.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/reporting/regenerate-run",
          label: "`POST /v1/runs/{id}/regenerate` — reset a non-submitted run to draft\n(guarded: terminal states never regress; corrections are amendments).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/reporting/list-submissions",
          label: "`GET /v1/submissions` — list submissions for the tenant env.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
