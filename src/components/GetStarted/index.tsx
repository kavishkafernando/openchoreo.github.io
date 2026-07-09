import type { ReactNode } from "react";
import React, { useState } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import SectionHeader from "@site/src/components/common/SectionHeader";
import styles from "./styles.module.css";

const INSTALL_COMMAND = "openchoreo install";

type TerminalLine = {
  type: "prompt" | "success" | "sub" | "plain";
  text: string;
};

const terminalLines: TerminalLine[] = [
  { type: "prompt", text: "openchoreo install" },
  { type: "success", text: "Checking prerequisites" },
  { type: "success", text: "Creating namespace" },
  { type: "success", text: "Installing OpenChoreo" },
  { type: "sub", text: "Control Plane" },
  { type: "sub", text: "Developer Portal" },
  { type: "sub", text: "Observability" },
  { type: "sub", text: "Gateway & Ingress" },
  { type: "sub", text: "AI Assistant" },
  { type: "success", text: "Installation complete!" },
];

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const ClusterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const BrowserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 8h18" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="6" cy="6" r="0.6" fill="currentColor" />
    <circle cx="8.4" cy="6" r="0.6" fill="currentColor" />
  </svg>
);

type CardLink = {
  label: string;
  href: string;
};

type StartCard = {
  title: string;
  description: string;
  links: CardLink[];
  icon: ReactNode;
};

// TODO: "In your environment" and "Open playground" are placeholders ("#") —
// swap in the real doc/playground URLs before shipping.
const cards: StartCard[] = [
  {
    title: "Quick start",
    description: "Run OpenChoreo locally with a single command.",
    links: [{ label: "Quick start guide", href: "/docs/getting-started/quick-start-guide/" }],
    icon: <LightningIcon />,
  },
  {
    title: "Install on your cluster",
    description: "Set up OpenChoreo on your own Kubernetes cluster.",
    links: [
      { label: "In your environment", href: "#" },
      {
        label: "Locally on k3d",
        href: "/docs/next/getting-started/try-it-out/on-k3d-locally/",
      },
    ],
    icon: <ClusterIcon />,
  },
  {
    title: "Try it in your browser",
    description: "No install needed, explore a live OpenChoreo environment in minutes.",
    links: [{ label: "Open playground", href: "#" }],
    icon: <BrowserIcon />,
  },
];

function Terminal() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, button just won't confirm.
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalChrome}>
        <span className={styles.terminalTab}>Install</span>
        <button type="button" className={styles.copyButton} onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className={styles.terminalBody}>
        <code>
          {terminalLines.map((line, index) => {
            if (line.type === "prompt") {
              return (
                <div key={index} className={styles.line}>
                  <span className={styles.prompt}>$</span> {line.text}
                </div>
              );
            }
            if (line.type === "success") {
              return (
                <div key={index} className={clsx(styles.line, styles.success)}>
                  &#10003; {line.text}
                </div>
              );
            }
            return (
              <div key={index} className={clsx(styles.line, styles.sub)}>
                - {line.text}
              </div>
            );
          })}
          <div className={styles.line}>
            Open{" "}
            <span className={styles.highlight}>http://localhost:8080</span> in
            your browser.
          </div>
        </code>
      </pre>
    </div>
  );
}

function StartCardItem({ card }: { card: StartCard }) {
  const withBaseUrl = useBaseUrl;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIconBox}>{card.icon}</span>
        <h3 className={styles.cardTitle}>{card.title}</h3>
      </div>
      <p className={styles.cardDescription}>{card.description}</p>
      <div className={styles.cardLinks}>
        {card.links.map((link) => (
          <Link
            key={link.label}
            to={link.href === "#" ? link.href : withBaseUrl(link.href)}
            className={styles.cardLink}
          >
            {link.label}
            <span aria-hidden="true">&#8594;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * GetStarted Component ("Get Started with OpenChoreo")
 * A black terminal panel on the left showing the install output, with a
 * vertical stack of three cards on the right pointing to the quick start
 * guide, cluster install options, and the browser playground — modeled
 * after agentgateway.dev's getting-started section.
 */
export default function GetStarted(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader title="Get Started with OpenChoreo">
        </SectionHeader>

        <div className={styles.layout}>
          <Terminal />

          <div className={styles.grid}>
            {cards.map((card) => (
              <StartCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}