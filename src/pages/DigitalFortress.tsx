import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { Shield, Zap, Gauge, Users, TrendingUp, Lock, Eye } from 'lucide-react';

const DigitalFortress = () => {
  return (
    <ProjectPage
      title="DIGITAL FORTRESS"
      subtitle="Enterprise Security Platform"
      heroImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
      icon={<Shield className="w-8 h-8" />}
      description="Digital Fortress is our enterprise-grade security platform designed to protect your digital assets from sophisticated cyber threats. It combines real-time threat detection, automated incident response, and comprehensive monitoring to create an impenetrable defense system. With military-grade encryption and AI-powered threat intelligence, Digital Fortress safeguards your data, applications, and infrastructure 24/7, ensuring business continuity and regulatory compliance."
      features={[
        "Real-time threat detection with AI-powered anomaly analysis",
        "Zero-trust architecture implementation",
        "End-to-end encryption for data at rest and in transit",
        "Automated incident response and threat containment",
        "Continuous vulnerability scanning and penetration testing",
        "Identity and access management (IAM) integration",
        "Security Information and Event Management (SIEM)",
        "Compliance reporting for GDPR, HIPAA, SOC 2, PCI DSS",
        "DDoS protection with automatic traffic filtering",
        "Multi-factor authentication and biometric verification"
      ]}
      benefits={[
        {
          title: "Data Protection",
          description: "Military-grade encryption ensures your sensitive data remains confidential.",
          icon: <Lock className="w-6 h-6" />
        },
        {
          title: "Threat Prevention",
          description: "Stop attacks before they happen with predictive threat intelligence.",
          icon: <Eye className="w-6 h-6" />
        },
        {
          title: "Regulatory Compliance",
          description: "Meet industry requirements with automated compliance reporting.",
          icon: <Shield className="w-6 h-6" />
        },
        {
          title: "Business Continuity",
          description: "Minimize downtime with rapid incident response and recovery.",
          icon: <Gauge className="w-6 h-6" />
        },
        {
          title: "Cost Reduction",
          description: "Prevent costly breaches that average $4.45M per incident.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Customer Trust",
          description: "Demonstrate commitment to security to build customer confidence.",
          icon: <Users className="w-6 h-6" />
        }
      ]}
      technologies={[
        "Go", "Rust", "Python", "OSSEC", "Wazuh", "Elastic SIEM",
        "HashiCorp Vault", "OpenSSL", "WireGuard", "OAuth 2.0",
        "SAML", "Kubernetes", "Docker", "AWS Security Hub", "CrowdStrike"
      ]}
      useCases={[
        "Financial Services: Protect customer financial data and transactions",
        "Healthcare: HIPAA-compliant patient data protection",
        "Government: Secure sensitive government communications",
        "E-commerce: PCI DSS compliance and fraud prevention",
        "SaaS: Multi-tenant security with data isolation",
        "Startups: Security-first architecture from day one",
        "Enterprise: SOC 2 compliance and audit readiness",
        "Critical Infrastructure: SCADA and OT security"
      ]}
    />
  );
};

export default DigitalFortress;
