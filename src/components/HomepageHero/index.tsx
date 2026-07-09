import type { ReactNode } from "react";
import React, { useState, useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Button from "@site/src/components/common/Button";
import styles from "./styles.module.css";

function formatStarCount(count: number): string {
  if (count < 1000) {
    return String(count);
  }
  if (count < 1_000_000) {
    const value = count / 1000;
    return `${value % 1 === 0 ? value : value.toFixed(1)}k`;
  }
  const value = count / 1_000_000;
  return `${value % 1 === 0 ? value : value.toFixed(1)}m`;
}

function GitHubStarButton() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/repos/openchoreo/openchoreo")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.stargazers_count != null) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // fail silently
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <a
      href="https://github.com/openchoreo/openchoreo"
      className={styles.githubStarButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
      </svg>
      Star
      {stars !== null && (
        <span className={styles.githubStarCount}>{formatStarCount(stars)}</span>
      )}
    </a>
  );
}

/**
 * Homepage Hero Component
 * This is the hero section at the top of the homepage
 */
export default function HomepageHero(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.hero}>
      <div className="container">
        {/* Logo that changes with theme */}
        <ThemedImage
          alt="OpenChoreo Logo"
          className={styles.heroLogo}
          sources={{
            light: useBaseUrl("/img/openchoreo-logo.svg"),
            dark: useBaseUrl("/img/openchoreo-logo-dark.svg"),
          }}
        />

        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>

        <h2 className={styles.heroTagline}>
          The Open-Source Internal Developer Platform
        </h2>
        <h4 className={styles.heroSubtitle}>
          A unified Kubernetes platform for your engineering teams and AI agents to build, run, observe and govern applications, AI workloads and infrastructure resources
        </h4>

        {/* Call-to-action buttons */}
        <div className={styles.heroButtons}>
          <GitHubStarButton />
          <Button
            className={styles.heroButton}
            to="https://openchoreo.dev/docs/getting-started/quick-start-guide/"
          >
            Try in 5 minutes
          </Button>
        </div>
      </div>
    </section>
  );
}