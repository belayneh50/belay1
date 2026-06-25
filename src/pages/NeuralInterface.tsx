import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { Code2, Zap, Shield, Gauge, Users, TrendingUp, BarChart3 } from 'lucide-react';

const NeuralInterface = () => {
  return (
    <ProjectPage
      title="NEURAL INTERFACE"
      subtitle="Machine Learning Dashboards"
      heroImage="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600"
      icon={<Code2 className="w-8 h-8" />}
      description="Neural Interface delivers powerful machine learning dashboards that visualize complex data patterns and provide predictive analytics at a glance. We transform raw data into actionable insights through intuitive interfaces that combine real-time monitoring with advanced statistical modeling. Our dashboards serve as the central nervous system of your data infrastructure, processing information from multiple sources and presenting it in formats that drive quick, informed decisions."
      features={[
        "Real-time data visualization with D3.js and custom WebGL charts",
        "Interactive dashboards with drill-down capabilities",
        "Automated report generation and scheduled analytics",
        "Multi-source data integration and ETL pipelines",
        "Predictive modeling with confidence intervals",
        "Anomaly detection with immediate alerts",
        "Custom KPI tracking and benchmark comparisons",
        "Collaborative annotation and insight sharing",
        "Mobile-responsive design for on-the-go access",
        "Role-based access control for sensitive data"
      ]}
      benefits={[
        {
          title: "Data Democratization",
          description: "Make complex data accessible to all stakeholders regardless of technical expertise.",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Faster Insights",
          description: "Reduce time-to-insight from days to seconds with automated analysis pipelines.",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Better Decisions",
          description: "Visual representations help identify patterns and trends that tables hide.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Predictive Power",
          description: "See trends before they happen with ML-powered forecasting models.",
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          title: "Complete Visibility",
          description: "Monitor all systems from a single pane of glass with unified dashboards.",
          icon: <Gauge className="w-6 h-6" />
        },
        {
          title: "Data Security",
          description: "Enterprise-grade security ensures your insights stay protected.",
          icon: <Shield className="w-6 h-6" />
        }
      ]}
      technologies={[
        "React", "D3.js", "Three.js", "Plotly", "Apache Kafka",
        "Apache Spark", "Python", "Scikit-learn", "TensorFlow.js",
        "PostgreSQL", "ClickHouse", "Grafana", "WebSocket", "REST API"
      ]}
      useCases={[
        "Business Intelligence: Executive dashboards for KPI tracking",
        "IoT Monitoring: Real-time sensor data visualization",
        "Financial Analysis: Market trends and portfolio performance",
        "Healthcare: Patient monitoring and clinical analytics",
        "Supply Chain: Inventory and logistics optimization",
        "Marketing: Campaign performance and attribution modeling",
        "HR Analytics: Workforce metrics and talent insights",
        "DevOps: System health and performance monitoring"
      ]}
    />
  );
};

export default NeuralInterface;
