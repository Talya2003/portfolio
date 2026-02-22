export const siteConfig = {
  name: "PLACEHOLDER_NAME",
  title: "PLACEHOLDER_TITLE",
  location: "PLACEHOLDER_LOCATION",
  email: "PLACEHOLDER_EMAIL",
  github: "PLACEHOLDER_GITHUB_URL",
  linkedin: "PLACEHOLDER_LINKEDIN_URL",
  headline: "PLACEHOLDER_HEADLINE",
  subheadline: "PLACEHOLDER_SUBHEADLINE",
};

export const projects = [
  {
    id: "edge-observability-platform",
    title: "Edge Observability Platform",
    subtitle: "Unified telemetry pipeline",
    description: "Cut mean-time-to-detection by 42% with a real-time, multi-tenant observability layer.",
    overview:
      "Built a centralized platform that ingests logs, metrics, and traces from edge services and standardizes them into a single queryable view for SRE teams.",
    problem:
      "Teams had fragmented tooling across regions, causing inconsistent alerting and slow incident response when traffic spiked.",
    architecture:
      "Event-driven ingestion with a Kafka backbone, OpenTelemetry collectors at the edge, and a query service backed by columnar storage.",
    implementation:
      "Delivered schema governance, tenant isolation, and automated dashboards while integrating with existing on-call workflows.",
    challenges:
      "Balancing latency requirements with cost constraints across multiple regions while migrating legacy log shippers.",
    results:
      "Reduced alert noise by 35%, improved query performance by 2.3x, and standardized KPIs across five product lines.",
    techStack: ["React", "Node", "GCP", "PostgreSQL"],
    category: "INFRASTRUCTURE",
    metrics: [
      { label: "MTTD", value: "-42%" },
      { label: "Alert Noise", value: "-35%" },
      { label: "Query Speed", value: "2.3x" },
      { label: "Regions", value: "6" },
    ],
    links: [{ label: "GitHub", url: "https://github.com" }],
    year: "2024",
    role: "Staff Engineer",
    duration: "8 months",
    team: "7 engineers",
  },
  {
    id: "finops-automation-suite",
    title: "FinOps Automation Suite",
    subtitle: "Cost governance at scale",
    description: "Automated budgeting and anomaly detection that saved 18% in monthly cloud spend.",
    overview:
      "Designed a rules-driven platform to enforce cost policies, forecast usage, and surface real-time anomalies for finance and engineering.",
    problem:
      "Cloud spend was growing unpredictably, with limited attribution to teams and no consistent policy enforcement.",
    architecture:
      "Policy engine with scheduled evaluations, data warehouse ingestion, and a notification layer wired into Slack and email.",
    implementation:
      "Implemented tag enforcement, budget guardrails, and a forecasting model that aligned with quarterly planning cycles.",
    challenges:
      "Normalizing billing data from multiple providers while ensuring policy actions were safe and reversible.",
    results:
      "Achieved 18% cost reduction, 92% tag coverage, and eliminated blind spots for shared infrastructure.",
    techStack: ["React", "Node", "GCP", "PostgreSQL"],
    category: "PLATFORM",
    metrics: [
      { label: "Spend", value: "-18%" },
      { label: "Tag Coverage", value: "92%" },
      { label: "Forecast Accuracy", value: "+21%" },
      { label: "Teams", value: "14" },
    ],
    links: [{ label: "GitHub", url: "https://github.com" }],
    year: "2023",
    role: "Lead Engineer",
    duration: "6 months",
    team: "5 engineers",
  },
  {
    id: "incident-response-copilot",
    title: "Incident Response Copilot",
    subtitle: "Guided remediation workflows",
    description: "Shortened time-to-mitigation by 31% with automated runbooks and context capture.",
    overview:
      "Created a workflow hub that collects telemetry, suggests runbooks, and documents actions during major incidents.",
    problem:
      "Incident knowledge was scattered across wikis and chat logs, slowing down remediation and postmortem quality.",
    architecture:
      "Service orchestrator with integrations into monitoring, ticketing, and knowledge systems plus a real-time audit log.",
    implementation:
      "Delivered templated runbooks, integrations for timeline capture, and post-incident reporting automation.",
    challenges:
      "Maintaining reliability under peak incident load while rolling out incremental integrations.",
    results:
      "Cut time-to-mitigation by 31%, improved postmortem completion rates to 96%, and increased on-call confidence.",
    techStack: ["React", "Node", "GCP", "PostgreSQL"],
    category: "RELIABILITY",
    metrics: [
      { label: "TTM", value: "-31%" },
      { label: "Runbooks", value: "48" },
      { label: "Postmortems", value: "96%" },
      { label: "Teams", value: "9" },
    ],
    links: [{ label: "GitHub", url: "https://github.com" }],
    year: "2022",
    role: "Senior Engineer",
    duration: "5 months",
    team: "4 engineers",
  },
];

export const experiences = [
  {
    company: "Company",
    role: "Role",
    period: "2021 ? 2024",
    description:
      "Led platform initiatives focused on reliability, cost optimization, and observability for high-traffic services.",
    highlights: [
      "Built a multi-region telemetry pipeline to unify logs, metrics, and traces.",
      "Introduced FinOps automation that reduced spend while improving accountability.",
      "Mentored senior engineers and established design review standards.",
    ],
  },
  {
    company: "Company",
    role: "Role",
    period: "2018 ? 2021",
    description:
      "Delivered internal tooling and developer experience improvements across CI/CD and infrastructure provisioning.",
    highlights: [
      "Created self-service deployment workflows that cut release time in half.",
      "Standardized infrastructure templates and automated security checks.",
      "Partnered with product teams to align platform roadmaps with business goals.",
    ],
  },
  {
    company: "Company",
    role: "Role",
    period: "2015 ? 2018",
    description:
      "Built distributed systems for data processing and analytics in a fast-paced environment.",
    highlights: [
      "Scaled ingestion services to handle 10x traffic growth.",
      "Implemented monitoring and alerting for mission-critical workflows.",
      "Contributed to architecture reviews and incident response playbooks.",
    ],
  },
];

export const principles = [
  {
    title: "Design for operational clarity",
    description:
      "Make systems observable by default so teams can understand behavior and recover quickly.",
  },
  {
    title: "Automate repeatable decisions",
    description:
      "Codify policies and guardrails to reduce manual toil and improve consistency.",
  },
  {
    title: "Bias toward measurable outcomes",
    description:
      "Define success metrics early and iterate based on what improves reliability and velocity.",
  },
  {
    title: "Build for the next engineer",
    description:
      "Create clear interfaces, documentation, and scalable patterns for long-term sustainability.",
  },
];

export const techStack = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go"] },
  { category: "Infrastructure", items: ["GCP", "AWS", "Kubernetes", "Terraform"] },
  { category: "Data", items: ["PostgreSQL", "BigQuery", "Redis", "Kafka"] },
  { category: "Tooling", items: ["GitHub Actions", "Grafana", "Datadog", "Jira"] },
];
