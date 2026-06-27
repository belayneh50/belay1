import React from 'react';
import ServicePage from '../components/ServicePage';
import { Smartphone, Zap, Cpu, Users, TrendingUp } from 'lucide-react';

const MobileSystems = () => {
  return (
    <ServicePage
      title="MOBILE SYSTEMS"
      subtitle="Cross-Platform Mobile Development"
      heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600"
      icon={<Smartphone className="w-8 h-8" />}
      color="rgb(99, 102, 241)"
      description="Our Mobile Systems service delivers cross-platform mobile applications with native performance and stunning interfaces. We build apps that feel at home on iOS and Android while sharing code for efficiency. From consumer apps to enterprise solutions, we create mobile experiences users love."
      features={[
        "React Native cross-platform development",
        "Flutter app development",
        "Native iOS (Swift) development",
        "Native Android (Kotlin) development",
        "Progressive Web Apps (PWA)",
        "Offline-first architecture",
        "Push notifications and real-time updates",
        "Location services and maps integration",
        "Camera and media handling",
        "App Store deployment and optimization"
      ]}
      benefits={[
        {
          title: "Maximum Reach",
          description: "One codebase reaches both iOS and Android users simultaneously."
        },
        {
          title: "Native Feel",
          description: "Apps that perform and feel like truly native experiences."
        },
        {
          title: "Faster Time to Market",
          description: "Cross-platform development cuts launch time significantly."
        },
        {
          title: "Offline Capability",
          description: "Apps that work without internet, syncing when connected."
        },
        {
          title: "User Engagement",
          description: "Push notifications keep users coming back regularly."
        },
        {
          title: "Lower Costs",
          description: "Shared codebase means lower development and maintenance costs."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Strategy & Planning",
          description: "We define the mobile strategy, features, and platform requirements."
        },
        {
          step: "2",
          title: "UX Design",
          description: "Our team creates mobile-optimized designs for each platform."
        },
        {
          step: "3",
          title: "Development Sprints",
          description: "Agile development with regular builds for testing and feedback."
        },
        {
          step: "4",
          title: "Quality Assurance",
          description: "Comprehensive testing across devices, OS versions, and scenarios."
        },
        {
          step: "5",
          title: "Launch & Iterate",
          description: "App store submission and ongoing updates based on user feedback."
        }
      ]}
    />
  );
};

export default MobileSystems;
