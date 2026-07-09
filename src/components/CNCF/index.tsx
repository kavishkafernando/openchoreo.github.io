import type { ReactNode } from 'react';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';

/**
 * CNCF Component
 * Displays OpenChoreo's CNCF sandbox project status as a thin bordered strip.
 */
export default function CNCF(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <ThemedImage
            alt="CNCF Logo"
            className={styles.logo}
            sources={{
              light: useBaseUrl('/img/logos/cncf-color.svg'),
              dark: useBaseUrl('/img/logos/cncf-white.svg'),
            }}
          />
          <p className={styles.text}>
            OpenChoreo is a{' '}
            <a href="https://www.cncf.io/" target="_blank" rel="noopener noreferrer">
              CNCF (Cloud Native Computing Foundation)
            </a>{' '}
            sandbox project.
          </p>
          <span className={styles.divider} aria-hidden="true" />
          <p className={styles.madeWith}>
            Made with ❤️ at{' '}
            <a href="https://wso2.com/open-source/" target="_blank" rel="noopener noreferrer">
              WSO2
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}