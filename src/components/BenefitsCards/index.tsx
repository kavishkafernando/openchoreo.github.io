import type { ReactNode } from 'react';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import SectionHeader from '@site/src/components/common/SectionHeader';
import styles from './styles.module.css';

type Benefit = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;
  imageAlt?: string;
};

const ARCHITECTURE_IMAGE = '/img/homepage/openchoreo-architecture-diagram.svg';
const ARCHITECTURE_IMAGE_ALT = 'OpenChoreo high-level architecture diagram';

const benefits: Benefit[] = [
  {
    title: 'Developers ship without waiting on platform teams',
    description:
      'Higher-level abstractions and golden paths give developers self-service access to build, deploy, and operate without managing Kubernetes complexity.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'One developer portal, CLI, MCPs and API for everything',
    description:
      'A Backstage-powered portal, CLI, REST API, and MCP servers all expose the same platform capabilities, so your team works the way they want without getting a different experience each time.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
   image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'Your platform standards, enforced automatically',
    description:
      'Declarative APIs for environments, component types, gateways, pipelines, and workflows mean best practices are built in, not documented and hoped for.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'Observability that speaks your language',
    description:
      'Unified logs, metrics, and traces mapped to the application model, so developers debug services, not namespaces.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'Git as the system of record',
    description:
      'Platform and application state can be managed entirely through GitOps; versioned, auditable, and reproducible with CLI and portal when you need to act outside of Git.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'Multi-tenant self-service at any scale',
    description:
      'RBAC, tenancy boundaries, and least-privilege access ensure every team can move fast without stepping on each other.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'AI that works inside your guardrails',
    description:
      'MCP servers and skills let compatible AI agents drive delivery and operations, following the same golden paths as your team.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'Built-in intelligence from day one',
    description:
      'SRE and FinOps agents run continuously to surface root cause analysis, remediation actions, and cost optimisations, no separate AI layer required.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
  {
    title: 'Scales as you grow, without re-architecting',
    description:
      'Vendor-agnostic control, data, build, and observability planes enable multi-cluster, multi-cloud Kubernetes deployments: on the cloud, on-premises or even in air-gapped environments.',
    ctaLabel: 'Learn more',
    ctaHref: '#',
    image: ARCHITECTURE_IMAGE,
    imageAlt: ARCHITECTURE_IMAGE_ALT,
  },
];

/**
 * BenefitsCards Component ("What you get with OpenChoreo")
 * Left: a compact, fixed-height list of titles — click one to make it
 * active. Right: a card with the active item's title, description and CTA
 * stacked above its image (not overlaid on top of it).
 */
export default function BenefitsCards(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);
  const { withBaseUrl } = useBaseUrlUtils();
  const activeBenefit = benefits[activeIndex];

  return (
    <section className={styles.section}>
      <div className='container'>
        <SectionHeader title='Everything you need to run an internal developer platform'>
          <p>
            Not a collection of tools to integrate. A complete, modular
            foundation that&apos;s ready to use from day one.
          </p>
        </SectionHeader>

        <div className={styles.layout}>
          <ul className={styles.list}>
            {benefits.map((benefit, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={benefit.title} className={styles.listItem}>
                  <button
                    type='button'
                    className={clsx(
                      styles.itemButton,
                      isActive && styles.itemButtonActive,
                    )}
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.itemIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.itemTitle}>{benefit.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className={styles.mediaColumn}>
            <div className={styles.mediaSticky}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaText}>
                  <p className={styles.mediaDescription}>
                    {activeBenefit.description}
                  </p>
                  <a href={activeBenefit.ctaHref} className={styles.mediaCta}>
                    {activeBenefit.ctaLabel}
                    <span aria-hidden='true'>&#8594;</span>
                  </a>
                </div>

                <div className={styles.mediaImageWrap}>
                  {activeBenefit.image ? (
                    <img
                      src={withBaseUrl(activeBenefit.image)}
                      alt={activeBenefit.imageAlt ?? activeBenefit.title}
                      className={styles.mediaImage}
                      loading='lazy'
                      decoding='async'
                    />
                  ) : (
                    <div className={styles.mediaPlaceholder} aria-hidden='true'>
                      <div className={styles.placeholderGrid} />
                      <div className={styles.placeholderGlow} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
