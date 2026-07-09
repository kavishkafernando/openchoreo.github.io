import React, { JSX } from "react";
import styles from "./styles.module.css";
import SectionHeader from "../common/SectionHeader";
import Button from "@site/src/components/common/Button";

type Integration = {
  name: string;
  logo: string;
};

type Category = {
  title: string;
  items: Integration[];
};

const categories: Category[] = [
  {
    title: "Infrastructure",
    items: [
      { name: "Crossplane", logo: "/img/logos/ecosystem-logo-crossplane.webp" },
      { name: "OpenTofu", logo: "/img/logos/ecosystem-logo-opentofu.webp" },
      { name: "Pulumi", logo: "/img/logos/ecosystem-logo-pulumi.webp" },
    ],
  },
  {
    title: "Identity",
    items: [
      { name: "Okta", logo: "/img/logos/ecosystem-logo-okta.webp" },
      { name: "Keycloak", logo: "/img/logos/ecosystem-logo-keycloak.webp" },
      { name: "Ory", logo: "/img/logos/ecosystem-logo-ory.webp" },
    ],
  },
  {
    title: "GitOps and CI",
    items: [
      { name: "Argo", logo: "/img/logos/tech-logo-argo.webp" },
      { name: "Flux", logo: "/img/logos/tech-logo-flux.svg" },
      { name: "GitHub Actions", logo: "/img/logos/ecosystem-logo-githubactions.webp" },
      { name: "Jenkins", logo: "/img/logos/ecosystem-logo-jenkins.webp" },
      { name: "Weave", logo: "/img/logos/ecosystem-logo-weave.webp" },
    ],
  },
  {
    title: "API and AI gateways",
    items: [
      { name: "WSO2", logo: "/img/logos/ecosystem-logo-wso2.webp" },
      { name: "kgateway", logo: "/img/logos/tech-logo-kgateway.svg" },
      { name: "APISIX", logo: "/img/logos/ecosystem-logo-apisix.webp" },
      { name: "agentgateway", logo: "/img/logos/ecosystem-logo-agentgateway.webp" },
      { name: "Envoy", logo: "/img/logos/ecosystem-logo-envoy.webp" },
    ],
  },
  {
    title: "Observability",
    items: [
      { name: "OpenSearch", logo: "/img/logos/tech-logo-opensearch.webp" },
      { name: "Prometheus", logo: "/img/logos/tech-logo-prometheus.webp" },
      { name: "OpenTelemetry", logo: "/img/logos/tech-logo-opentelemetry.svg" },
    ],
  },
  {
    title: "Network and security",
    items: [
      { name: "Cilium", logo: "/img/logos/tech-logo-cilium.webp" },
      { name: "Istio", logo: "/img/logos/ecosystem-logo-istio.webp" },
      { name: "Linkerd", logo: "/img/logos/ecosystem-logo-linkerd.webp" },
    ],
  },
];

export default function Ecosystem(): JSX.Element {
  return (
    <section className={styles.blade}>
      <div className={styles.inner}>
        <SectionHeader title="OpenChoreo Ecosystem: Built to Integrate With Your Stack">
          <p>
            OpenChoreo’s modular architecture lets you integrate, extend, and
            customize your IDP without adhoc glue scripts or re-architecting
            your platform foundations.
          </p>
        </SectionHeader>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category.title} className={styles.category}>
              <span className={styles.categoryTitle}>{category.title}</span>
              <div className={styles.chipRow}>
                {category.items.map((item) => (
                  <span key={item.name} className={styles.chip}>
                    <img
                      src={item.logo}
                      alt=""
                      className={styles.chipLogo}
                      loading="lazy"
                    />
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Button to="/ecosystem/">Explore the Ecosystem</Button>
        </div>
      </div>
    </section>
  );
}