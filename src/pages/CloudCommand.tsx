import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { Cloud, Zap, Gauge, Users, TrendingUp, Server, Globe } from 'lucide-react';

const CloudCommand = () => {
  return (
    <ProjectPage
      title="CLOUD COMMAND"
      subtitle="Multi-Cloud Management Platform"
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600"
      icon={<Cloud className="w-8 h-8" />}
      description="Cloud Command is our multi-cloud management platform that gives you total control over your cloud infrastructure. Unify management across AWS, Azure, GCP, and private clouds with a single pane of glass. Auto-scaling, cost optimization, security compliance, and infrastructure-as-code all come together in a platform designed for modern DevOps teams who refuse to be locked into a single vendor."
      features={[
        "Unified management console for AWS, Azure, GCP, and private clouds",
        "Infrastructure as Code with Terraform and Pulumi support",
        "Auto-scaling policies with predictive capacity planning",
        "Cost optimization with resource right-sizing recommendations",
        "Multi-region deployment with one-click provisioning",
        "Container orchestration with Kubernetes multi-cluster management",
        "CI/CD pipeline integration for GitOps workflows",
        "Real-time cost tracking and budget alerting",
        "Disaster recovery and multi-region failover",
        "Service mesh integration for microservices networking"
      ]}
      benefits={[
        {
          title: "Cost Savings",
          description: "Reduce cloud spend by up to 40% with intelligent optimization.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Vendor Freedom",
          description: "Avoid lock-in with portable infrastructure across providers.",
          icon: <Globe className="w-6 h-6" />
        },
        {
          title: "Developer Velocity",
          description: "Self-service infrastructure speeds up development cycles.",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Operational Excellence",
          description: "Automated operations reduce human error and toil.",
          icon: <Gauge className="w-6 h-6" />
        },
        {
          title: "High Availability",
          description: "Multi-cloud redundancy ensures 99.99% uptime SLA.",
          icon: <Server className="w-6 h-6" />
        },
        {
          title: "Team Collaboration",
          description: "Shared visibility improves communication between teams.",
          icon: <Users className="w-6 h-6" />
        }
      ]}
      technologies={[
        "Terraform", "Pulumi", "Kubernetes", "Docker", "Helm",
        "ArgoCD", "Flux", "AWS", "Azure", "Google Cloud",
        "Cloudflare", "Vault", "Consul", "Prometheus", "Grafana"
      ]}
      useCases={[
        "Startups: Scale from prototype to production without hiring DevOps",
        "Enterprises: Manage hybrid and multi-cloud environments",
        "SaaS: Deploy globally distributed applications",
        "Fintech: Meet regulatory requirements with proper governance",
        "Gaming: Handle global player bases with low-latency deployments",
        "E-commerce: Scale for traffic spikes during sales events",
        "Healthcare: Ensure HIPAA compliance across cloud environments",
        "Media: Global content delivery with edge computing"
      ]}
    />
  );
};

export default CloudCommand;
