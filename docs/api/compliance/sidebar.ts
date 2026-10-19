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
          label: "policy_list_attributes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-put-attribute",
          label: "policy_put_attribute",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/compliance/policy-delete-attribute",
          label: "policy_delete_attribute",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/compliance/policy-list-sets",
          label: "policy_list_sets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-mode-disable",
          label: "policy_mode_disable",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-mode-enforce",
          label: "policy_mode_enforce",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-mode-shadow",
          label: "policy_mode_shadow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-get-set",
          label: "policy_get_set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-put-set",
          label: "policy_put_set",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/compliance/policy-delete-set",
          label: "policy_delete_set",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/compliance/policy-test-set",
          label: "policy_test_set",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/policy-list-relations",
          label: "policy_list_relations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/policy-put-relation",
          label: "policy_put_relation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/compliance/policy-delete-relation",
          label: "policy_delete_relation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/compliance/policy-check-relation",
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
          id: "api/compliance/admin-overview",
          label: "GET /v1/admin/overview — the data endpoint behind the overview page:\nalert/case counts for the tenant env.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/get-admin-ui",
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
          id: "api/compliance/list-alerts",
          label: "`GET /v1/alerts` — list alerts, optionally by status.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/open-case",
          label: "`POST /v1/alerts/{id}/case` — escalate an alert to a case with an\naudited actor claim (the assignee). The alert transitions to\n`escalated` in the same transaction.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/update-alert-status",
          label: "`POST /v1/alerts/{id}/status` — queue operation on an alert (claim /\nreview / close) with an audited actor: the caller's verified identity\ndrives the journal entry; the transition is guarded against terminal\nstates (closed alerts never reopen — a new detection raises a new\nalert).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/get-case",
          label: "`GET /v1/cases/{id}` — case detail with its alert.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/conclude-case",
          label: "`POST /v1/cases/{id}/conclude` — conclude a case as reportable: the\nreport kind lands in `suspicious_activities` and\n`bank8:compliance:suspicious:detected` is emitted exactly once —\nReporting files it through its own durable consume (detection here,\nfiling there — the single-filing-executor rule, DESIGN.md §8).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/dismiss-case",
          label: "`POST /v1/cases/{id}/dismiss` — dismiss a case as not reportable:\nthe recorded reason lands in the case row and NO suspicious activity\nis emitted — Reporting never sees a dismissed case (a dismissed\ncase is terminal; a new detection opens a new case).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/get-case-evidence",
          label: "`GET /v1/cases/{id}/evidence` — the case's investigation evidence:\nthe originating alert, every sanctions screen against its subject,\nand the customer's risk profile (when resolved). Read-only —\nevidence is the input to the conclude/dismiss decision, never\nmutated by it.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/list-beneficial-owners",
          label: "`GET /v1/customers/{id}/beneficial-owners` — list the customer's\ndisclosed beneficial owners (references only).",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/disclose-beneficial-owner",
          label: "`POST /v1/customers/{id}/beneficial-owners` — disclose a beneficial\nowner against a KYC record (idempotent per (kyc, identity_ref) —\nre-disclosing the same owner converges to the same row).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/list-kyc",
          label: "`GET /v1/customers/{id}/kyc` — list a customer's KYC records.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/compliance/create-kyc",
          label: "`POST /v1/customers/{id}/kyc` — create a KYC record for a customer.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/record-pep-determination",
          label: "`POST /v1/customers/{id}/pep` — record a PEP (politically exposed\nperson) determination. One live determination per KYC record — a\nre-determination updates it in place (the latest determination is\nauthoritative; history rides the audit journal).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/upsert-risk-profile",
          label: "`POST /v1/customers/{id}/risk-profile` — upsert the customer's AML\nrisk rating (low/medium/high) with a recorded rationale. The rating\ndrives monitoring intensity; a PEP determination forces at least\n`high` (a PEP can never sit below it).",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/compliance/list-rules",
          label: "`GET /v1/rules` — list the tenant's monitoring rules (thresholds\nderive from the jurisdiction registry — reporting's return-template\ndefinitions — materialized at env-init; never code).",
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
          label: "`GET /v1/health` — service health payload.",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
