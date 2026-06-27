import React from 'react';
import ServicePage from '../components/ServicePage';
import { Cloud, Zap, Server, Users, TrendingUp } from 'lucide-react';

const CloudDeployment = () => {
  return (
    <ServicePage
      title="CLOUD DEPLOYMENT"
      subtitle="Scalable Cloud Infrastructure"
      heroImage="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600"
      icon={<Cloud className="w-8 h-8" />}
      color="rgb(59, 130, 246)"
      description="Our Cloud Deployment service provides scalable cloud infrastructure with auto-scaling and global CDN integration. We architect and deploy on AWS, Azure, and GCP with best-practice security, monitoring, and automation. Your infrastructure adapts to demand automatically, handling traffic spikes without breaking a sweat."
      features={[
        "AWS, Azure, and Google Cloud deployment",
        "Kubernetes container orchestration",
        "Docker containerization",
        "Infrastructure as Code (Terraform)",
        "CI/CD pipeline automation",
        "Auto-scaling and load balancing",
        "CDN and edge caching",
        "Monitoring and alerting systems",
        "Disaster recovery planning",
        "Cost optimization and analysis"
      ]}
      benefits={[
        {
          title: "Auto-Scaling",
          description: "Infrastructure that grows and shrinks automatically with demand."
        },
        {
          title: "High Availability",
          description: "Multi-region deployment ensures your app stays online."
        },
        {
          title: "Global Performance",
          description: "CDN delivers content fast to users anywhere in the world."
        },
        {
          title: "Cost Efficiency",
          description: "Pay only for what you use with optimized resource allocation."
        },
        {
          title: "Security First",
          description: "Enterprise-grade security with encryption and compliance."
        },
        {
          title: "Rapid Deployment",
          description: "Automated pipelines deploy updates in minutes, not hours."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Assessment & Planning",
          description: "We analyze your needs and design the optimal cloud architecture."
        },
        {
          step: "2",
          title: "Infrastructure Setup",
          description: "Our team provisions cloud resources with Infrastructure as Code."
        },
        {
          step: "3",
          title: "CI/CD Configuration",
          description: "We automate build, test, and deployment pipelines."
        },
        {
          step: "4",
          title: "Migration & Launch",
          description: "Smooth migration from existing systems with zero downtime."
        },
        {
          step: "5",
          title: "Operations & Support",
          description: "Ongoing monitoring, optimization, and 24/7 support."
        }
      ]}
    />
  );
};

export default CloudDeployment;
