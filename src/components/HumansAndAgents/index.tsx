import type { ReactNode } from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import SectionHeader from '@site/src/components/common/SectionHeader';
import styles from './styles.module.css';
import Button from "@site/src/components/common/Button";

type Agent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

// Reuses existing homepage assets (already used in WhatIsOpenChoreo) since
// they match these agents semantically — no new images needed.
const agents: Agent[] = [
  {
    title: 'SRE Agent',
    description:
      'Monitors alerts, analyzes logs, metrics, and traces, and surfaces root-cause reports with remediation actions waiting for human approval.',
    image: '/img/homepage/rca-agent.png',
    imageAlt:
      'AI root cause analysis view showing built-in agent assistance for incident investigation',
  },
  {
    title: 'FinOps Agent',
    description:
      'Works with platform telemetry to surface cost insights and flag over-provisioned resources continuously, without a separate AI layer.',
    image: '/img/homepage/finops-agent.png',
    imageAlt:
      'FinOps Agent view showing cost optimization based on budget alerts',
  },
  {
    title: 'Platform Assistant',
    description:
      'An AI chat assistant built into the developer portal. Ask questions about failing builds, investigate log lines, and query live platform and observability data, all without switching tabs.',
    image: '/img/homepage/ai-for-developers.jpg',
    imageAlt:
      'Self-service actions view showing guardrailed AI-assisted platform operations',
  },
  {
    title: 'Use your coding agent',
    description:
      'Connect Claude Code, Cursor, Gemini CLI, Codex CLI, or any MCP-compatible agent. Pair with platform skills from the ecosystem to get it working.',
    image: '/img/homepage/ai-for-platform-engineers.jpg',
    imageAlt:
      'Platform view exposing deeper operational capabilities and interfaces used by MCP and skills',
  },
];

const GearIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='1.6' />
    <path
      d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinecap='round'
    />
  </svg>
);

// TODO: replace "#" with the real migration and AI docs URLs.
const migrationCallout = {
  title: 'Already running on Kubernetes?',
  description:
    "OpenChoreo's migration skills assess your existing setup, estimate what can be automatically migrated, generate a migration plan, and carry it out — with an agent doing the heavy lifting.",
  ctaLabel: 'Learn about migration',
  ctaHref: '#',
};

const ShieldIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinejoin='round'
    />
  </svg>
);

const ScopeIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='12' cy='12' r='8' stroke='currentColor' strokeWidth='1.6' />
    <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='1.6' />
    <circle cx='12' cy='12' r='0.8' fill='currentColor' />
  </svg>
);

const AuditIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='5'
      y='4'
      width='14'
      height='17'
      rx='1.5'
      stroke='currentColor'
      strokeWidth='1.6'
    />
    <path d='M9 3h6v2H9z' fill='currentColor' />
    <path
      d='M8.5 12l2 2 4-4'
      stroke='currentColor'
      strokeWidth='1.6'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const trustCta = { label: 'Learn about AI', href: '#' };

type TrustPoint = {
  title: string;
  description: string;
  icon: ReactNode;
};

const trustPoints: TrustPoint[] = [
  {
    title: 'Same rules as your team',
    description:
      'Every agent action runs under your existing RBAC policies. No raw cluster access, no bypassed guardrails. Every action is logged and auditable.',
    icon: <ShieldIcon />,
  },
  {
    title: 'Scoped by default',
    description:
      'Agents only see what their role allows - project boundaries, environment restrictions, and tenancy rules all apply.',
    icon: <ScopeIcon />,
  },
  {
    title: 'Every action is auditable',
    description:
      'Every agent operation is logged with full context; who triggered it, what it did, and when.',
    icon: <AuditIcon />,
  },
];

/**
 * HumansAndAgents Component ("An IDP for Humans and Agents")
 * Agents list uses the OpsLevel "single pane of glass" pattern: click a
 * title to expand its description in place, image swaps to match. Below
 * that, a migration callout and a three-point trust strip.
 */
export default function HumansAndAgents(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const { withBaseUrl } = useBaseUrlUtils();
  const activeAgent = agents[activeIndex];

  return (
    <section className={styles.section}>
      <div className='container'>
        <SectionHeader title='An IDP for Humans and Agents'>
          <p>
            Connect your own agents or use the built-in ones with the same
            guardrails your team already trusts.
          </p>
        </SectionHeader>

        <div className={styles.layout}>
          <ul className={styles.list}>
            {agents.map((agent, index) => {
              const isActive = index === activeIndex;

              return (
                <li key={agent.title} className={styles.listItem}>
                  <button
                    type='button'
                    className={clsx(
                      styles.itemButton,
                      isActive && styles.itemButtonActive,
                    )}
                    aria-expanded={isActive}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.itemTitle}>{agent.title}</span>
                    {isActive && (
                      <span className={styles.itemDescription}>
                        {agent.description}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className={styles.mediaColumn}>
            <div className={styles.mediaSticky}>
              <div className={styles.mediaFrame}>
                <img
                  src={withBaseUrl(activeAgent.image)}
                  alt={activeAgent.imageAlt}
                  className={styles.mediaImage}
                  loading='lazy'
                  decoding='async'
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.migrationCallout}>
          <span className={styles.migrationIconBox} aria-hidden='true'>
            <GearIcon />
          </span>
          <div>
            <h3 className={styles.migrationTitle}>{migrationCallout.title}</h3>
            <p className={styles.migrationDescription}>
              {migrationCallout.description}
            </p>
            <a href={migrationCallout.ctaHref} className={styles.migrationCta}>
              {migrationCallout.ctaLabel}
              <span aria-hidden='true'>&#8594;</span>
            </a>
          </div>
        </div>

        <div className={styles.trustGrid}>
          {trustPoints.map((point) => (
            <div key={point.title} className={styles.trustItem}>
              <div className={styles.trustHeader}>
                <span className={styles.trustIconBox}>{point.icon}</span>
                <h4 className={styles.trustTitle}>{point.title}</h4>
              </div>
              <p className={styles.trustDescription}>{point.description}</p>
            </div>
          ))}
        </div>

         <div className={styles.actions}>
          <Button to="/ecosystem/">Learn about AI</Button>
        </div>
      </div>
    </section>
  );
}
