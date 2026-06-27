import React from 'react';
import ServicePage from '../components/ServicePage';
import { Cpu, Zap, Brain, Users, TrendingUp } from 'lucide-react';

const AIIntegration = () => {
  return (
    <ServicePage
      title="AI INTEGRATION"
      subtitle="Machine Learning & AI Solutions"
      heroImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600"
      icon={<Cpu className="w-8 h-8" />}
      color="rgb(168, 85, 247)"
      description="Our AI Integration service brings the power of machine learning and artificial intelligence to your applications. We implement intelligent features that learn, adapt, and automate - from natural language processing and computer vision to predictive analytics and recommendation systems. Transform your user experience with AI that understands and anticipates needs."
      features={[
        "Custom machine learning model development",
        "Natural Language Processing (NLP) integration",
        "Computer Vision and image recognition",
        "Predictive analytics and forecasting",
        "Intelligent recommendation engines",
        "Chatbot and virtual assistant development",
        "Sentiment analysis and text classification",
        "Anomaly detection systems",
        "AI-powered search and discovery",
        "Automated decision-making workflows"
      ]}
      benefits={[
        {
          title: "Intelligent Automation",
          description: "Automate repetitive tasks and decisions with AI that learns from experience."
        },
        {
          title: "Enhanced UX",
          description: "Personalized experiences that adapt to each user's preferences and behavior."
        },
        {
          title: "Data-Driven Insights",
          description: "Uncover patterns and predictions hidden in your data."
        },
        {
          title: "Competitive Edge",
          description: "Stay ahead with cutting-edge AI capabilities your competitors lack."
        },
        {
          title: "Scalable Intelligence",
          description: "AI systems that improve as they process more data."
        },
        {
          title: "24/7 Availability",
          description: "AI-powered support and operations that never sleep."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Use Case Analysis",
          description: "We identify high-impact opportunities for AI in your business and define success metrics."
        },
        {
          step: "2",
          title: "Data Assessment",
          description: "Our team evaluates your data assets and designs preprocessing pipelines."
        },
        {
          step: "3",
          title: "Model Development",
          description: "We train, validate, and optimize custom AI models for your specific use case."
        },
        {
          step: "4",
          title: "Integration",
          description: "Seamless incorporation into your existing applications and workflows."
        },
        {
          step: "5",
          title: "Monitoring & Improvement",
          description: "Continuous performance tracking and model refinement over time."
        }
      ]}
    />
  );
};

export default AIIntegration;
