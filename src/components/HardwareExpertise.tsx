import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Cpu,
  HardDrive,
  Gauge,
  Wrench,
  Layers,
  Fan,
  MemoryStick,
  Zap,
  Terminal,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const HardwareExpertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'PC ASSEMBLY',
      description:
        'Custom-built high-performance desktop rigs engineered from the ground up — from component selection to thermal management and cable architecture.',
      points: [
        'Component sourcing and compatibility validation',
        'Precision assembly with airflow-optimized layouts',
        'Custom liquid and air cooling solutions',
        'Stress testing and burn-in validation',
      ],
      link: '/hardware/pc-assembly',
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'SYSTEM BUILDING',
      description:
        'Full system configuration including storage architecture, partition management, and multi-OS environments tailored for demanding professional workloads.',
      points: [
        'Storage tiering: NVMe, SSD, and HDD strategies',
        'Partition management and dual-boot configurations',
        'RAID arrays for redundancy and throughput',
        'Driver provisioning and firmware tuning',
      ],
      link: '/hardware/system-building',
    },
    {
      icon: <Gauge className="w-10 h-10" />,
      title: 'PERFORMANCE OPTIMIZATION',
      description:
        'Operating system environments tuned for heavy rendering, compilation, and data processing — squeezing every drop of performance from your hardware.',
      points: [
        'OS environment tuning for render and processing workloads',
        'CPU core parking, power plans, and scheduler tuning',
        'Memory allocation and swap optimization',
        'Background service and telemetry reduction',
      ],
      link: '/hardware/performance-optimization',
    },
  ];

  const specs = [
    { icon: <Cpu className="w-6 h-6" />, label: 'CPU Tuning', value: 'Core affinity & priority scheduling' },
    { icon: <MemoryStick className="w-6 h-6" />, label: 'Memory', value: 'XMP profiles & swap optimization' },
    { icon: <HardDrive className="w-6 h-6" />, label: 'Storage', value: 'Partition & RAID architecture' },
    { icon: <Fan className="w-6 h-6" />, label: 'Thermals', value: 'Fan curves & thermal headroom' },
    { icon: <Terminal className="w-6 h-6" />, label: 'OS Kernel', value: 'Service & telemetry stripping' },
    { icon: <ShieldCheck className="w-6 h-6" />, label: 'Stability', value: 'Stress tests & burn-in validation' },
  ];

  return (
    <section
      id="hardware"
      className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/40 to-black relative overflow-hidden"
      ref={ref}
    >
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(var(--neon-blue)_1px,transparent_1px),linear-gradient(90deg,var(--neon-blue)_1px,transparent_1px)] bg-[size:50px_50px] opacity-5" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--neon-red)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-[var(--neon-blue)]/30 rounded-full bg-black/50 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-[var(--neon-blue)]" />
            <span className="text-xs font-medium text-gray-400 tracking-wider">HARDWARE DIVISION</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 neon-text">HARDWARE EXPERTISE</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond the browser — physical systems engineered for maximum throughput,
            from silicon to operating system
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-6 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-[var(--neon-blue)]/50 transition-all duration-300 h-full flex flex-col"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-[var(--neon-blue)] mb-5"
              >
                {pillar.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--neon-blue)] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {pillar.description}
              </p>

              {/* Points */}
              <ul className="space-y-2.5 mt-auto">
                {pillar.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start gap-2 text-sm text-gray-300">
                    <Zap className="w-4 h-4 text-[var(--neon-blue)] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href={pillar.link}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--neon-blue)] hover:gap-2.5 transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--neon-blue)]/5 to-[var(--neon-red)]/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spec Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl"
        >
          <h3 className="text-lg font-bold mb-6 text-[var(--neon-blue)] flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            <span>&gt; SYSTEM SPEC MATRIX</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                className="flex items-center gap-4 p-4 bg-black/50 border border-gray-800 rounded-lg hover:border-[var(--neon-blue)]/40 transition-colors"
              >
                <div className="text-[var(--neon-blue)] shrink-0">{spec.icon}</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                    {spec.label}
                  </div>
                  <div className="text-sm text-gray-300">{spec.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareExpertise;
