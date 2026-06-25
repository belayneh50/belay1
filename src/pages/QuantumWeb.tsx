import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { Zap, Shield, Gauge, Users, TrendingUp, ShoppingCart, CreditCard } from 'lucide-react';

const QuantumWeb = () => {
  return (
    <ProjectPage
      title="QUANTUM WEB"
      subtitle="High-Performance E-Commerce Platform"
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600"
      icon={<Zap className="w-8 h-8" />}
      description="Quantum Web is our high-performance e-commerce platform engineered for scale and speed. Built with quantum-inspired optimization algorithms, it delivers lightning-fast page loads, intelligent product discovery, and seamless checkout experiences. Whether you're handling thousands of SKUs or millions of monthly visitors, Quantum Web adapts and scales dynamically to maintain peak performance during traffic surges and seasonal peaks."
      features={[
        "Sub-second page loads with edge caching and CDN optimization",
        "AI-powered product search with natural language understanding",
        "Quantum-inspired recommendation algorithm for higher conversions",
        "Headless commerce architecture for omnichannel selling",
        "Real-time inventory management across multiple warehouses",
        "Flexible pricing engine with dynamic pricing capabilities",
        "Multi-currency and multi-language support out of the box",
        "One-page checkout with 50+ payment gateway integrations",
        "Progressive Web App for mobile-first shopping experience",
        "Advanced fraud detection and prevention systems"
      ]}
      benefits={[
        {
          title: "Higher Conversion Rates",
          description: "Every 100ms improvement in load time increases conversions by up to 7%.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Increased Revenue",
          description: "AI recommendations drive up to 35% of total revenue through cross-selling.",
          icon: <CreditCard className="w-6 h-6" />
        },
        {
          title: "Reduced Cart Abandonment",
          description: "Streamlined checkout flows reduce abandonment by up to 20%.",
          icon: <ShoppingCart className="w-6 h-6" />
        },
        {
          title: "Lower Infrastructure Costs",
          description: "Auto-scaling ensures you only pay for the resources you actually use.",
          icon: <Gauge className="w-6 h-6" />
        },
        {
          title: "Better Customer Experience",
          description: "Personalized shopping experiences increase customer loyalty and LTV.",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Enterprise-Grade Security",
          description: "PCI DSS compliant architecture protects customer data and transactions.",
          icon: <Shield className="w-6 h-6" />
        }
      ]}
      technologies={[
        "Next.js", "React", "TypeScript", "Node.js", "GraphQL",
        "PostgreSQL", "Redis", "Elasticsearch", "Stripe", "PayPal",
        "AWS", "Cloudflare", "Vercel", "Contentful", "Prisma"
      ]}
      useCases={[
        "Retail: Multi-brand storefronts with unified inventory",
        "Fashion: Virtual try-on and size recommendation",
        "Electronics: Configurator tools for custom products",
        "Food & Beverage: Restaurant ordering and delivery",
        "Marketplace: Multi-vendor platforms with commission tracking",
        "Subscription: Recurring billing and subscription management",
        "Wholesale: B2B portals with custom pricing tiers",
        "Digital Products: Secure download delivery for courses and media"
      ]}
    />
  );
};

export default QuantumWeb;
