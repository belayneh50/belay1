import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { Cpu, Zap, Shield, Gauge, Users, TrendingUp } from 'lucide-react';

const CyberneticSystems = () => {
  return (
    <ProjectPage
      title="CYBERNETIC SYSTEMS"
      subtitle="AI-Powered Web Applications"
      heroImage="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1600"
      icon={<Cpu className="w-8 h-8" />}
      description="Cybernetic Systems represents our flagship AI integration service, delivering intelligent web applications that learn, adapt, and evolve. We combine cutting-edge machine learning algorithms with responsive web interfaces to create systems that understand user behavior, predict needs, and automate complex workflows. Our cybernetic approach creates a seamless feedback loop between human users and digital systems, resulting in applications that become smarter with every interaction."
      features={[
        "Real-time machine learning model integration for predictive analytics",
        "Natural language processing for intelligent search and chatbots",
        "Computer vision capabilities for image recognition and processing",
        "Automated decision-making workflows based on user behavior",
        "Self-optimizing algorithms that improve performance over time",
        "Neural network-powered recommendation engines",
        "Intelligent data preprocessing and feature extraction",
        "Custom AI model training for domain-specific applications",
        "Edge AI deployment for low-latency processing",
        "Explainable AI for transparent decision-making"
      ]}
      benefits={[
        {
          title: "Enhanced Decision Making",
          description: "AI-powered insights help businesses make data-driven decisions in real-time, reducing human error and bias.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Operational Efficiency",
          description: "Automate repetitive tasks and workflows, freeing your team to focus on high-value strategic work.",
          icon: <Gauge className="w-6 h-6" />
        },
        {
          title: "Competitive Advantage",
          description: "Stay ahead of competitors with intelligent systems that adapt to market changes faster.",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Scalable Intelligence",
          description: "Systems that grow smarter as your data volume increases, without additional development costs.",
          icon: <Cpu className="w-6 h-6" />
        },
        {
          title: "Improved User Experience",
          description: "Personalized experiences that anticipate user needs and preferences automatically.",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Reduced Risk",
          description: "Anomaly detection and predictive maintenance prevent issues before they occur.",
          icon: <Shield className="w-6 h-6" />
        }
      ]}
      technologies={[
        "TensorFlow", "PyTorch", "OpenAI API", "Python", "FastAPI",
        "React", "Next.js", "WebGL", "WebSockets", "PostgreSQL",
        "Redis", "Docker", "Kubernetes", "AWS SageMaker", "MLflow"
      ]}
      useCases={[
        "E-commerce: Personalized product recommendations and dynamic pricing",
        "Healthcare: Diagnostics assistance and patient monitoring",
        "Finance: Fraud detection and automated trading systems",
        "Manufacturing: Predictive maintenance and quality control",
        "Customer Service: Intelligent chatbots and ticket routing",
        "Marketing: Customer segmentation and campaign optimization",
        "Logistics: Route optimization and demand forecasting",
        "Education: Adaptive learning platforms and assessment systems"
      ]}
    />
  );
};

export default CyberneticSystems;
