import React from 'react';
import ServicePage from '../components/ServicePage';
import { Palette, Zap, Eye, Users, TrendingUp } from 'lucide-react';

const UIDesign = () => {
  return (
    <ServicePage
      title="UI/UX DESIGN"
      subtitle="Futuristic Interface Design"
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30db94d?auto=format&fit=crop&q=80&w=1600"
      icon={<Palette className="w-8 h-8" />}
      color="rgb(249, 115, 22)"
      description="Our UI/UX Design service creates captivating, futuristic interfaces that engage users and drive conversions. We combine aesthetic excellence with usability science, crafting digital experiences that are both visually stunning and intuitively functional. Every pixel is purposeful, every interaction meaningful."
      features={[
        "User research and persona development",
        "Information architecture and user flows",
        "Wireframing and rapid prototyping",
        "High-fidelity visual design",
        "Motion design and micro-interactions",
        "Responsive design for all devices",
        "Accessibility compliance (WCAG)",
        "Dark mode and theming systems",
        "Component library and design systems",
        "Usability testing and iteration"
      ]}
      benefits={[
        {
          title: "Higher Conversion",
          description: "Design optimized for user actions that drive business results."
        },
        {
          title: "Brand Differentiation",
          description: "Unique visual identity that sets you apart from competitors."
        },
        {
          title: "User Delight",
          description: "Experiences that users love and remember, driving loyalty."
        },
        {
          title: "Reduced Friction",
          description: "Intuitive flows that minimize user effort and maximize success."
        },
        {
          title: "Faster Development",
          description: "Clear design specs accelerate engineering implementation."
        },
        {
          title: "Scalable System",
          description: "Design systems enable consistent, efficient future growth."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Research & Discovery",
          description: "We study your users, competitors, and goals to inform design decisions."
        },
        {
          step: "2",
          title: "Strategy & Architecture",
          description: "Our team defines the information architecture and key user journeys."
        },
        {
          step: "3",
          title: "Design & Prototyping",
          description: "We create wireframes, high-fidelity designs, and interactive prototypes."
        },
        {
          step: "4",
          title: "Testing & Validation",
          description: "Real user testing confirms our designs work and identifies improvements."
        },
        {
          step: "5",
          title: "Handoff & Support",
          description: "Detailed design documentation and ongoing support during development."
        }
      ]}
    />
  );
};

export default UIDesign;
