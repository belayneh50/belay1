import React from 'react';
import ServicePage from '../components/ServicePage';
import { Layers } from 'lucide-react';

const SystemBuilding = () => {
  return (
    <ServicePage
      title="SYSTEM BUILDING"
      subtitle="Storage, Partitions & Multi-OS Environments"
      heroImage="https://images.unsplash.com/photo-1597856482760-9c1f6c1c7c1c?auto=format&fit=crop&q=80&w=1600"
      icon={<Layers className="w-8 h-8" />}
      color="rgb(34, 211, 238)"
      description="A great rig is only as good as its software foundation. System building goes beyond hardware assembly — it encompasses the full storage architecture, partition strategy, and operating system configuration that determines how your machine behaves under real workloads. From NVMe boot drives to RAID storage arrays, from dual-boot Linux-Windows setups to driver provisioning, every layer is configured for speed, reliability, and flexibility. The goal is a system that boots fast, stores smart, and never gets in your way."
      features={[
        'Storage tiering strategies: NVMe for OS, SSD for active projects, HDD for archival',
        'Partition management including resizing, merging, and secure partition schemes',
        'Dual-boot and multi-boot configurations across Windows, Linux, and macOS environments',
        'RAID 0, 1, and 10 array setup for throughput or redundancy depending on workload needs',
        'Driver provisioning and firmware updates for chipset, GPU, networking, and peripherals',
        'Clean OS installation with bloatware removal and essential utility provisioning',
      ]}
      benefits={[
        { title: 'Optimal Storage Speed', description: 'Tiered storage ensures your OS boots in seconds while active projects load instantly from fast SSDs.' },
        { title: 'Data Redundancy', description: 'RAID configurations protect your work against drive failure, giving you peace of mind on critical projects.' },
        { title: 'Multi-OS Flexibility', description: 'Dual-boot setups let you switch between Windows and Linux without compromising either environment.' },
        { title: 'Clean Foundations', description: 'Bloatware-free installations mean no background processes eating your CPU cycles or RAM.' },
        { title: 'Organized Partitions', description: 'Thoughtful partition schemes keep your data organized and make backups and restores straightforward.' },
        { title: 'Driver Confidence', description: 'Every driver is sourced from official vendors and validated — no mystery downloads or auto-installer bloat.' },
      ]}
      process={[
        { step: '01', title: 'Storage Architecture Planning', description: 'We assess your storage needs — capacity, speed, redundancy — and design a tiering and partition strategy.' },
        { step: '02', title: 'OS Installation & Partitioning', description: 'Clean OS installs are performed with carefully planned partition layouts and bootloader configuration for multi-boot if needed.' },
        { step: '03', title: 'Driver & Firmware Provisioning', description: 'All drivers and firmware are installed from official sources, with BIOS updates applied for maximum stability.' },
        { step: '04', title: 'Validation & Handoff', description: 'Storage benchmarks confirm expected throughput, and the system is documented for your reference and future maintenance.' },
      ]}
    />
  );
};

export default SystemBuilding;
