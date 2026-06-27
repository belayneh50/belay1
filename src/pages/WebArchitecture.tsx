import React from 'react';
import ServicePage from '../components/ServicePage';
import { Globe, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const WebArchitecture = () => {
  return (
    <ServicePage
      title="WEB ARCHITECTURE"
      subtitle="Full-Stack Development Solutions"
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
      icon={<Globe className="w-8 h-8" />}
      color="rgb(34, 211, 238)"
      description="Our Web Architecture service delivers comprehensive full-stack web applications built with cutting-edge technologies and scalable infrastructure. We engineer robust, high-performance systems from the ground up, focusing on clean architecture patterns, maintainable code, and seamless user experiences. Whether you need a simple marketing site or a complex enterprise application, we build with scale in mind."
      features={[
        "Modern React, Vue, and Angular frontend development",
        "Node.js, Python, and Go backend API services",
        "PostgreSQL, MongoDB, and Redis database architecture",
        "RESTful and GraphQL API design and implementation",
        "Server-side rendering for SEO optimization",
        "Real-time WebSocket integration for live features",
        "Microservices architecture for massive scale",
        "Progressive Web App (PWA) development",
        "Comprehensive testing and quality assurance",
        "CI/CD pipeline setup and DevOps integration"
      ]}
      benefits={[
        {
          title: "Scalable Foundation",
          description: "Architecture designed to grow with your business without costly rebuilds."
        },
        {
          title: "Optimal Performance",
          description: "Lightning-fast load times and smooth interactions that keep users engaged."
        },
        {
          title: "Maintainable Code",
          description: "Clean, documented code that's easy to update and extend over time."
        },
        {
          title: "SEO Ready",
          description: "Search engine optimized structure for maximum organic visibility."
        },
        {
          title: "Secure by Default",
          description: "Security best practices built in from day one."
        },
        {
          title: "Future Proof",
          description: "Modern tech stack that won't become obsolete anytime soon."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Discovery & Planning",
          description: "We analyze your requirements, define technical specifications, and create a detailed roadmap for development."
        },
        {
          step: "2",
          title: "Architecture Design",
          description: "Our team designs the system architecture, data models, and API contracts before a single line of code is written."
        },
        {
          step: "3",
          title: "Iterative Development",
          description: "We build in sprints with regular demos, incorporating your feedback throughout the process."
        },
        {
          step: "4",
          title: "Quality Assurance",
          description: "Rigorous testing including unit tests, integration tests, and performance optimization."
        },
        {
          step: "5",
          title: "Launch & Support",
          description: "Smooth deployment to production with ongoing maintenance and feature updates."
        }
      ]}
    />
  );
};

export default WebArchitecture;
