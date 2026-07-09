import type { ReactNode } from "react";
import React from "react";
import SectionHeader from "@site/src/components/common/SectionHeader";
import styles from "./styles.module.css";

type FlowStep = {
  step: string;
  title: string;
  description: string;
  icon: ReactNode;
};

type Capability = {
  label: string;
  icon: ReactNode;
};

const ClusterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const InstallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ShipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const PortalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 20h8M12 17v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const ChecklistIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 3h6v2H9z" fill="currentColor" />
    <path d="M8.5 13l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GitBranchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6 8v8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6 12c4 0 4-3 8-3" stroke="currentColor" strokeWidth="1.6" fill="none" />
  </svg>
);

const CycleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M18 4v4h-4M6 20v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 18a4 4 0 01-1-7.9A5 5 0 0116 8a4.5 4.5 0 011 8.9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="18" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M15.5 20c.3-2 2-3.5 4-3.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const flowSteps: FlowStep[] = [
  {
    step: "1",
    title: "Bring your Kubernetes cluster(s)",
    description: "Point OpenChoreo at one or more clusters, on any cloud or on-prem.",
    icon: <ClusterIcon />,
  },
  {
    step: "2",
    title: "Install OpenChoreo",
    description: "Install the platform on top of your clusters, no rip and replace.",
    icon: <InstallIcon />,
  },
  {
    step: "3",
    title: "Start shipping",
    description: "Developers and platform teams get a complete IDP, ready on day one.",
    icon: <ShipIcon />,
  },
];

const capabilities: Capability[] = [
  { label: "Internal Developer Portal (UI), CLI and MCP Servers", icon: <PortalIcon /> },
  { label: "Golden Paths and developer self-service", icon: <ChecklistIcon /> },
  { label: "GitOps or ClickOps with AI assistance", icon: <GitBranchIcon /> },
  { label: "CI/CD, Observability, APIs", icon: <CycleIcon /> },
  { label: "Secrets and configuration management", icon: <LockIcon /> },
  { label: "Governance and security by design", icon: <ShieldIcon /> },
  { label: "Multi-cluster/multi-cloud deployments", icon: <CloudIcon /> },
  { label: "AI Agents for SRE and FinOps", icon: <ShipIcon /> },
  { label: "Multi-tenancy and access controls", icon: <UsersIcon /> },
];

/**
 * WhatIsOpenChoreo Component
 * Connected-timeline version: outline circles joined by a dotted line
 * (each circle and connector lives in its own grid column so the line
 * can never overlap a circle), followed by an icon-tile grid of the
 * capabilities included out of the box.
 */
export default function WhatIsOpenChoreo(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="From Kubernetes to a complete IDP in minutes, not months" />

        <div className={styles.timeline}>
          <div className={styles.timelineGrid}>
            {flowSteps.map((flowStep, i) => {
              const nodeColumn = i * 2 + 1;
              return (
                <React.Fragment key={flowStep.title}>
                  <div
                    className={styles.circleCell}
                    style={{ gridColumn: nodeColumn, gridRow: 1 }}
                  >
                    <div className={styles.nodeCircle}>{flowStep.icon}</div>
                  </div>

                  <div
                    className={styles.contentCell}
                    style={{ gridColumn: nodeColumn, gridRow: 2 }}
                  >
                    <h3 className={styles.nodeTitle}>{flowStep.title}</h3>
                    <p className={styles.nodeDescription}>
                      {flowStep.description}
                    </p>
                  </div>

                  {i < flowSteps.length - 1 && (
                    <div
                      className={styles.connector}
                      style={{ gridColumn: nodeColumn + 1, gridRow: 1 }}
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className={styles.capabilitiesSection}>
          <span className={styles.capabilitiesLabel}>
            All included, out of the box
          </span>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((capability) => (
              <div key={capability.label} className={styles.capabilityTile}>
                <span className={styles.capabilityIconBox}>
                  {capability.icon}
                </span>
                <span className={styles.capabilityLabel}>
                  {capability.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}