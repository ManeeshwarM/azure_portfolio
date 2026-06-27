export const PROJECTS = [
  {
    id: 1, title: "Multi-Cloud CI/CD Platform", category: "CI/CD",
    status: "Production", region: "AWS · Azure · GCP",
    stack: ["Jenkins", "GitLab CI", "ArgoCD", "Kubernetes", "Trivy"],
    metrics: [
      { label: "Deploy Speed", value: "↑50%", color: "#107c10" },
      { label: "Failed Releases", value: "↓28%", color: "#107c10" },
      { label: "Critical CVEs", value: "0", color: "#107c10" }
    ],
    desc: "End-to-end CI/CD platform spanning 3 cloud providers with SAST/DAST security gates and GitOps reconciliation via ArgoCD. Standardized reusable templates across regulated enterprise workloads.",
    icon: "🔄", tier: "Premium",
  },
  {
    id: 2, title: "Predictive Infra Monitoring", category: "Observability",
    status: "Production", region: "AWS · Azure",
    stack: ["Python", "Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
    metrics: [
      { label: "Forecast Accuracy", value: "87%", color: "#0078d4" },
      { label: "Outages Prevented", value: "6+/qtr", color: "#107c10" },
      { label: "Annual Savings", value: "$15K", color: "#107c10" }
    ],
    desc: "Ensemble ML models forecast Kubernetes node saturation and Jenkins queue congestion 4–8 hours in advance, triggering automated preemptive scaling across AWS, Azure, and GCP.",
    icon: "🧠", tier: "Premium",
  },
  {
    id: 3, title: "Zero-Trust Security Layer", category: "Security",
    status: "Production", region: "AWS · Azure",
    stack: ["Istio", "HashiCorp Vault", "Trivy", "Snyk", "OPA Gatekeeper"],
    metrics: [
      { label: "CVE Remediation", value: "↑57%", color: "#107c10" },
      { label: "Audit Prep Time", value: "↓65%", color: "#107c10" },
      { label: "Compliance", value: "SOC 2", color: "#0078d4" }
    ],
    desc: "mTLS enforcement across all inter-pod traffic, dynamic secrets injection from Vault, OPA policy gates blocking non-compliant images with automated compliance reporting.",
    icon: "🔐", tier: "Premium",
  },
  {
    id: 4, title: "Multi-Region DR Architecture", category: "Infrastructure",
    status: "Production", region: "AWS · Azure · GCP",
    stack: ["Terraform", "EKS", "AKS", "Route53", "HPA"],
    metrics: [
      { label: "Uptime SLA", value: "99.97%", color: "#0078d4" },
      { label: "Provisioning Time", value: "↓60%", color: "#107c10" },
      { label: "Production Workloads", value: "20+", color: "#0078d4" }
    ],
    desc: "Active-active multi-region architecture with automatic failover, Pod Disruption Budgets, HPA autoscaling, and cross-region data replication using Terraform IaC.",
    icon: "🌐", tier: "Standard",
  },
  {
    id: 5, title: "Enterprise Artifact Lifecycle", category: "CI/CD",
    status: "Production", region: "AWS · Azure",
    stack: ["JFrog Artifactory", "Nexus", "ECR", "Helm", "Docker Registry"],
    metrics: [
      { label: "Deploy Cycles", value: "↓45%", color: "#107c10" },
      { label: "Failed Releases", value: "↓28%", color: "#107c10" },
      { label: "Client Environments", value: "150+", color: "#0078d4" }
    ],
    desc: "Centralized artifact management with automated promotion gates, version tagging, image signing, and retention policies across all cloud registries.",
    icon: "📦", tier: "Standard",
  },
  {
    id: 6, title: "Infrastructure Cost Intelligence", category: "FinOps",
    status: "Production", region: "AWS · Azure",
    stack: ["Grafana", "CloudWatch", "Azure Monitor", "Python", "Terraform"],
    metrics: [
      { label: "Cost Recovered Q1", value: "$200K", color: "#107c10" },
      { label: "Operating Cost", value: "↓35%", color: "#107c10" },
      { label: "Outages Prevented", value: "6+/qtr", color: "#107c10" }
    ],
    desc: "Real-time cost anomaly detection fused with infrastructure telemetry. Right-sizing recommendations fed back into Terraform modules with automated stakeholder reports.",
    icon: "💰", tier: "Standard",
  },
  {
    id: 7, title: "Self-Healing Microservices Platform", category: "Platform",
    status: "Production", region: "AWS · Azure",
    stack: ["Flux CD", "Kubernetes", "Python", "Bash", "EKS"],
    metrics: [
      { label: "Platform Failures", value: "↓25%", color: "#107c10" },
      { label: "Hours Saved/Dev/Wk", value: "8", color: "#107c10" },
      { label: "Engineering Teams", value: "30+", color: "#0078d4" }
    ],
    desc: "GitOps reconciliation continuously detects and corrects cluster state drift. Custom diagnostic scripts auto-remediate Linux node failures and OOM events across 30+ teams.",
    icon: "🔧", tier: "Standard",
  },
  {
    id: 8, title: "Unified Observability Stack", category: "Observability",
    status: "Production", region: "AWS · Azure · GCP",
    stack: ["ELK Stack", "Prometheus", "Grafana", "Jaeger", "Alert Manager"],
    metrics: [
      { label: "False Alert Pages", value: "↓42%", color: "#107c10" },
      { label: "MTTD Improvement", value: "↓46%", color: "#107c10" },
      { label: "P99 Visibility", value: "3x", color: "#0078d4" }
    ],
    desc: "Correlated Alert Manager rules eliminating alert storms. Distributed tracing via Jaeger, custom recording rules, and unified dashboards across 50+ production services.",
    icon: "📊", tier: "Premium",
  },
  {
    id: 9, title: "Cloud Migration Acceleration Engine", category: "Infrastructure",
    status: "Completed", region: "AWS · Azure · GCP",
    stack: ["Terraform", "Terragrunt", "Ansible", "Docker", "ArgoCD"],
    metrics: [
      { label: "Provisioning Time", value: "↓50%", color: "#107c10" },
      { label: "Operating Cost", value: "↓35%", color: "#107c10" },
      { label: "Data Loss", value: "Zero", color: "#107c10" }
    ],
    desc: "Modular IaC templates for compute/networking aligned with Well-Architected principles. Containerized legacy apps and established ArgoCD GitOps delivery across all client environments.",
    icon: "🚀", tier: "Standard",
  },
  {
    id: 10, title: "Canary Deployment Orchestrator", category: "CI/CD",
    status: "Production", region: "AWS · Azure",
    stack: ["GitLab CI", "Kubernetes", "Istio", "Helm", "Python"],
    metrics: [
      { label: "Rollback Incidents", value: "↓28%", color: "#107c10" },
      { label: "Deployment Type", value: "Zero-downtime", color: "#0078d4" },
      { label: "Traffic Routing", value: "Canary+B/G", color: "#0078d4" }
    ],
    desc: "Intelligent rollback logic triggered on failed health checks, canary traffic routing with Istio weight controls, and automated smoke-test gates before full prod traffic shift.",
    icon: "🎯", tier: "Standard",
  },
  {
    id: 11, title: "Compliance-as-Code Pipeline", category: "Security",
    status: "Production", region: "AWS · Azure",
    stack: ["Terraform", "Ansible", "Puppet", "GitLab CI", "AWS Config"],
    metrics: [
      { label: "Drift Incidents", value: "↓40%", color: "#107c10" },
      { label: "Manual Effort/Wk", value: "↓15hrs", color: "#107c10" },
      { label: "Compliance Mode", value: "Continuous", color: "#0078d4" }
    ],
    desc: "Compliance baselines encoded into GitLab CI stages for continuous drift detection and auto-remediation across 50+ Linux servers with full audit trail and automated reporting.",
    icon: "📋", tier: "Standard",
  },
  {
    id: 12, title: "Developer Self-Service Platform", category: "Platform",
    status: "Production", region: "AWS · Azure · GCP",
    stack: ["GitHub Actions", "ArgoCD", "Helm", "Confluence", "Jira"],
    metrics: [
      { label: "Repeat Failures", value: "↓38%", color: "#107c10" },
      { label: "MTTR Improvement", value: "↓35%", color: "#107c10" },
      { label: "Eng Hours Saved/Wk", value: "8+", color: "#107c10" }
    ],
    desc: "Self-service GitOps tooling enabling teams to ship independently. Confluence runbooks, CI/CD standards for all service layers, and Jira-tracked improvement action items.",
    icon: "🛠", tier: "Standard",
  },
];

export const SKILLS_DATA = {
  "CI/CD & Pipelines": {
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "CircleCI", "Bitbucket"],
    icon: "⚡", color: "#0078d4"
  },
  "Cloud Platforms": {
    items: ["AWS EC2/EKS/S3", "Azure AKS/ARM", "GCP GKE", "CloudFormation", "Lambda"],
    icon: "☁️", color: "#ff9900"
  },
  "Containers & Orchestration": {
    items: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Flux CD", "Istio"],
    icon: "🐳", color: "#326ce5"
  },
  "IaC & Config Mgmt": {
    items: ["Terraform", "Terragrunt", "Ansible", "Puppet", "Pulumi", "ARM Templates"],
    icon: "🏗", color: "#7b42bc"
  },
  "Observability": {
    items: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Datadog", "Jaeger"],
    icon: "📡", color: "#e6522c"
  },
  "Security & DevSecOps": {
    items: ["HashiCorp Vault", "Trivy", "Snyk", "SAST/DAST", "RBAC", "OPA Gatekeeper"],
    icon: "🔒", color: "#d13438"
  },
  "Languages & Scripting": {
    items: ["Python", "Bash", "Groovy", "Go", "PowerShell", "SQL", "YAML"],
    icon: "💻", color: "#107c10"
  },
};

export const EXPERIENCE = [
  {
    company: "University of Houston",
    role: "Graduate Teaching Assistant — Prof. Karthik Rajan",
    period: "Aug 2025 – May 2026",
    location: "Houston, TX",
    logo: "UH",
    color: "#c8102e",
    kpis: ["Cloud Computing", "AI for Engineers", "Graduate Cohort", "AWS & Python"],
    bullets: [
      "Served as Teaching Assistant for Intro to Cloud Computing, supporting instruction on core cloud concepts including IaaS, PaaS, and SaaS models, AWS core services, containerization with Docker and Kubernetes, and cloud-native architecture patterns. Held weekly office hours and assisted students in designing and deploying cloud infrastructure projects on AWS.",
      "Assisted in delivering AI for Engineers, helping students understand applied machine learning concepts including supervised and unsupervised learning, neural networks, and model evaluation. Supported lab sessions focused on building and deploying AI/ML models using Python, scikit-learn, and TensorFlow, bridging theoretical foundations with practical engineering applications.",
      "Graded assignments, projects, and exams across both courses for a combined cohort of graduate engineering students, providing detailed written feedback to reinforce conceptual understanding and improve implementation quality. Collaborated closely with Prof. Karthik Rajan to align course materials with current industry practices in cloud infrastructure and AI-driven systems.",
    ],
  },
  {
    company: "Motorola Solutions Pvt. Ltd.",
    role: "Software Engineer — DevOps & Site Reliability Engineering",
    period: "Mar 2022 – Jul 2024",
    location: "Bangalore, India",
    logo: "MS",
    color: "#0078d4",
    kpis: ["14 microservices", "GitHub Actions", "LitmusChaos", "Observability"],
    bullets: [
      "Developed and shipped internal portal UI enhancements using Vue.js, building reusable component libraries and improving the responsiveness and usability of enterprise-facing dashboards consumed by cross-functional teams across globally distributed operations.",
      "Owned end-to-end development and operational management of 14 distributed microservices, handling feature development, dependency management, deployment coordination, and inter-service communication to ensure reliability and consistency across production environments.",
      "Led the migration of CI/CD pipelines from Azure Pipelines (azure.yml) to GitHub Actions as part of a platform-wide transition from Azure to GitHub, rewriting pipeline configurations, resolving environment compatibility issues, and standardizing deployment workflows across all microservices to improve build reliability and team velocity.",
      "Resolved Twistlock container security scan violations across Docker images by remediating vulnerable dependencies, updating base images, and enforcing container compliance policies within CI pipelines. Maintained and debugged cron job schedules for automated background tasks, ensuring reliable execution of time-sensitive operational workflows.",
      "Managed Azure infrastructure tasks including provisioning and maintaining Azure Key Vaults for secrets and credential management, configuring service principal access controls, and supporting containerized workloads via Docker across Azure-hosted environments throughout the platform migration lifecycle.",
      "Transitioned into a Site Reliability Engineering role with a focus on chaos engineering, designing and executing fault injection experiments using LitmusChaos to validate microservice resilience under simulated failure conditions — including pod crashes, network latency injection, and resource exhaustion — improving system fault tolerance and recovery behavior across distributed services.",
      "Built and maintained Prometheus and Grafana observability dashboards to monitor real-time service health, resource utilization, and system performance metrics. Configured alerting rules and used dashboard insights to validate chaos experiment outcomes, identify reliability gaps, and ensure SLO compliance across production microservices.",
    ],
  },
];

export const CERTS = [
  { name: "DevOps Engineer Expert", code: "AZ-400", vendor: "Microsoft Azure", color: "#0078d4", bg: "#e6f3fb" },
  { name: "Azure Administrator Associate", code: "AZ-104", vendor: "Microsoft Azure", color: "#0078d4", bg: "#e6f3fb" },
  { name: "Solutions Architect Associate", code: "SAA-C03", vendor: "Amazon Web Services", color: "#ff9900", bg: "#fff4e6" },
  { name: "Cloud Practitioner", code: "CLF-C02", vendor: "Amazon Web Services", color: "#ff9900", bg: "#fff4e6" },
];

export const NAV_ITEMS = [
  { id: "overview",       label: "Overview",       icon: "⊞" },
  { id: "about",          label: "About Me",       icon: "👤" },
  { id: "projects",       label: "Projects",        icon: "⬡" },
  { id: "skills",         label: "Skills & Tools",  icon: "◈" },
  { id: "experience",     label: "Experience",      icon: "◉" },
  { id: "certifications", label: "Certifications",  icon: "◎" },
  { id: "contact",        label: "Contact",         icon: "✉" },
];
