import React from 'react';
import ServicePage from '../components/ServicePage';
import { Wrench } from 'lucide-react';

const PCAssembly = () => {
  return (
    <ServicePage
      title="PC ASSEMBLY"
      subtitle="Custom-Built High-Performance Desktops"
      heroImage="https://images.unsplash.com/photo-1587202372775-e8643a6e7247?auto=format&fit=crop&q=80&w=1600"
      icon={<Wrench className="w-8 h-8" />}
      color="rgb(34, 211, 238)"
      description="Every build starts with a purpose. Whether you need a workstation for 3D rendering, a rig for competitive gaming, or a silent studio machine for audio production, each system is assembled from carefully selected components with precision and intent. From the motherboard standoffs to the final cable management, no detail is overlooked. The result is a machine that doesn't just run — it performs at its absolute peak, thermally balanced and built to last."
      features={[
        'Component sourcing and compatibility validation across all major vendors',
        'Airflow-optimized case layouts with intake, exhaust, and positive-pressure strategies',
        'Custom liquid cooling loops and high-performance air cooler installation',
        'Professional cable management for aesthetics and airflow efficiency',
        'BIOS configuration including XMP, PBO, and undervolting for thermal headroom',
        'Post-assembly stress testing with Cinebench, Prime95, and FurMark burn-in validation',
      ]}
      benefits={[
        { title: 'Tailored Performance', description: 'Every component is selected to match your exact workload — no wasted budget, no bottlenecks.' },
        { title: 'Thermal Reliability', description: 'Optimized cooling keeps your system running at peak clocks under sustained loads without throttling.' },
        { title: 'Clean Aesthetics', description: 'Professional cable management and build aesthetics that look as good as they perform.' },
        { title: 'Longevity', description: 'Quality components and proper assembly techniques extend the life of your investment.' },
        { title: 'Future Upgradability', description: 'Builds are planned with upgrade paths in mind — PSU headroom, case space, and chipset flexibility.' },
        { title: 'Validated Stability', description: 'Every rig passes burn-in stress tests before delivery, so you can trust it under real workloads.' },
      ]}
      process={[
        { step: '01', title: 'Requirements Consultation', description: 'We discuss your workload, budget, and performance goals to define the ideal system specification.' },
        { step: '02', title: 'Component Selection', description: 'A complete parts list is sourced and validated for compatibility, performance, and value — with alternatives offered.' },
        { step: '03', title: 'Assembly & Cooling', description: 'Components are installed with precision, cooling solutions are mounted, and cable management is completed.' },
        { step: '04', title: 'BIOS Tuning & Burn-In', description: 'XMP/PBO profiles are applied, voltages are tuned, and the system undergoes stress testing for stability validation.' },
      ]}
    />
  );
};

export default PCAssembly;
