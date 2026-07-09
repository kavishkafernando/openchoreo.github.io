import type { ReactNode } from "react";
import React, { useState } from "react";
import clsx from "clsx";
import SectionHeader from "@site/src/components/common/SectionHeader";
import styles from "./styles.modules.css";

type ComparisonRow = {
  before: string;
  after: string;
};

type Role = {
  label: string;
  rows: ComparisonRow[];
};

const roles: Role[] = [
  {
    label: "Platform Engineers",
    rows: [
      {
        before: "Writing custom platform glue and scripts",
        after: "A complete delivery platform, pre-assembled",
      },
      {
        before: "Chasing teams for compliance",
        after: "Organization-wide guardrails, enforced by default",
      },
      {
        before: "Choosing between control and developer speed",
        after: "Central governance with full self-service",
      },
      {
        before: "Integrations that lock you into one vendor",
        after: "Seamless extension of your existing tech stack",
      },
      {
        before: "AI agents with unconstrained platform access",
        after: "RBAC-constrained MCP servers with safe, scoped access",
      },
      {
        before: "Manually reviewing every deployment action",
        after: "Agents that build, trigger, and promote — within your rules",
      },
    ],
  },
  {
    label: "Developers",
    rows: [
      {
        before: "Waiting on platform teams to unblock you",
        after: "Self-service workflows from day one",
      },
      {
        before: "Learning Kubernetes to deploy your app",
        after: "Developer-friendly abstractions that stay out of your way",
      },
      {
        before: "Inconsistent pipelines across projects",
        after: "Golden paths that work the same everywhere",
      },
      {
        before: "Provisioning databases and infra via tickets",
        after: "Self-service infrastructure across any environment",
      },
      {
        before: "Switching tools to check logs or promote releases",
        after:
          "Your AI assistant (Claude Code, Cursor, Gemini CLI) does it from your editor",
      },
      {
        before: "Digging through dashboards to understand production",
        after: "Ask your running services questions in plain English",
      },
    ],
  },
  {
    label: "Architects",
    rows: [
      {
        before: "Architecture diagrams that go stale",
        after: "Live cell-based diagrams that reflect actual service relationships",
      },
      {
        before: "Standards enforced by documentation and hope",
        after: "Programmable ComponentTypes and golden paths",
      },
      {
        before: "Bespoke scripts for multi-cluster topologies",
        after: "Declarative multi-environment, multi-cluster design",
      },
      {
        before: "Complexity shifted left onto developers",
        after: "Complexity absorbed by the platform, intent stays visible",
      },
      {
        before: "Manual architecture reviews for drift",
        after: "Architect Agent for governance and drift detection",
      },
      {
        before: "Decisions tied to proprietary tooling",
        after: "Kubernetes-native CRDs and CNCF stack that age well",
      },
    ],
  },
  {
    label: "DevOps / SREs",
    rows: [
      {
        before: "Correlating logs, metrics, and traces across tools",
        after: "Unified observability mapped to the application model",
      },
      {
        before: "Manual root cause analysis during incidents",
        after: "SRE Agent that triages the moment an alert fires",
      },
      {
        before: "Drowning in alerts developers can't own",
        after: "Self-service alerting that reduces noise without losing visibility",
      },
      {
        before: "Opaque promotion history",
        after: "Full auditability via native GitOps — Git is the record",
      },
      {
        before: "Blast radius spanning your entire cluster",
        after:
          "Multi-plane architecture with isolated, independently scalable concerns",
      },
      {
        before: "Rebuilding your toolchain to adopt the platform",
        after: "Bring your existing CI, observability, and GitOps — or use the defaults",
      },
    ],
  },
  {
    label: "CIOs / CTOs",
    rows: [
      {
        before: "Platform sprawl across multiple vendor tools",
        after: "One unified platform with a single operating model",
      },
      {
        before: "Vendor lock-in baked into your architecture",
        after: "Open standards — CNCF, Kubernetes-native, Apache 2.0",
      },
      {
        before: "Security and compliance as a retrofit",
        after: "Guardrails and governance built in from day one",
      },
      {
        before: "Slow delivery waiting on platform bottlenecks",
        after: "Self-service velocity that scales with your teams",
      },
      {
        before: "AI initiatives blocked by governance gaps",
        after: "Agents that operate autonomously within your guardrails",
      },
      {
        before: "A dedicated team to run FinOps and SRE functions",
        after: "Built-in FinOps and SRE agents that run continuously",
      },
    ],
  },
];

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

// TODO: replace with real, attributed quotes from named platform engineers.
const testimonials: Testimonial[] = [
  {
    quote: "Placeholder quote about OpenChoreo goes here.",
    name: "Name Surname",
    title: "Title, Company",
  },
  {
    quote: "Placeholder quote about OpenChoreo goes here.",
    name: "Name Surname",
    title: "Title, Company",
  },
  {
    quote: "Placeholder quote about OpenChoreo goes here.",
    name: "Name Surname",
    title: "Title, Company",
  },
];

/**
 * BuiltForEveryRole Component ("Built for Every Role on Your Team")
 * Role tabs switch a row-by-row before/after comparison table. A shared
 * testimonial strip renders underneath, independent of the active role.
 */
export default function PersonaValues(): ReactNode {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const activeRole = roles[activeRoleIndex];

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="Built for Every Role on Your Team" />

        <div className={styles.tabs} role="tablist">
          {roles.map((role, index) => {
            const isActive = index === activeRoleIndex;
            return (
              <button
                key={role.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={clsx(styles.tab, isActive && styles.tabActive)}
                onClick={() => setActiveRoleIndex(index)}
              >
                {role.label}
              </button>
            );
          })}
        </div>

<div className={styles.table}>
  {activeRole.rows.map((row) => (
    <div className={styles.tableRow} role="row" key={row.before}>
      <span className={styles.beforeCell} role="cell">
        <span className={styles.beforeBadge} aria-hidden="true">
          &#10005;
        </span>
        <span className={styles.beforeText}>{row.before}</span>
      </span>
      <span className={styles.afterCell} role="cell">
        <span className={styles.afterBadge} aria-hidden="true">
          &#10003;
        </span>
        <span className={styles.afterText}>{row.after}</span>
      </span>
    </div>
  ))}
</div>

        <div className={styles.testimonials}>
          <span className={styles.testimonialsLabel}>
            Trusted by platform engineers
          </span>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div className={styles.testimonialCard} key={testimonial.name}>
                <p className={styles.testimonialQuote}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialAvatar} aria-hidden="true" />
                  <span className={styles.testimonialMeta}>
                    <strong>{testimonial.name}</strong>
                    <span className={styles.testimonialTitle}>
                      {testimonial.title}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}