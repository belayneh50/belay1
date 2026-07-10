import React from 'react';
import ServicePage from '../components/ServicePage';
import { Gauge } from 'lucide-react';

const PerformanceOptimization = () => {
  return (
    <ServicePage
      title="PERFORMANCE OPTIMIZATION"
      subtitle="OS Tuning for Heavy Rendering & Processing"
      heroImage="https://images.unsplash.com/photo-1620712948389-7c0fc8a7c4a1?auto=format&fit=crop&q=80&w=1600"
      icon={<Gauge className="w-8 h-8" />}
      color="rgb(34, 211, 238)"
      description="Hardware is only half the equation. An untuned operating system can waste 20-30% of your machine's potential through unnecessary background services, suboptimal power plans, and unconfigured scheduler settings. Performance optimization is the art of stripping away everything that doesn't serve your workload and configuring what remains for maximum throughput. Whether you're rendering 4K video, compiling large codebases, training ML models, or running real-time audio processing, every CPU cycle, every megabyte of RAM, and every storage I/O operation is accounted for and directed where it matters most."
      features={[
        'OS environment tuning for render engines, DAWs, IDEs, and data processing pipelines',
        'CPU core parking configuration and priority scheduling for workload-specific core allocation',
        'Power plan customization including high-performance profiles and idle state management',
        'Memory allocation tuning, swap/pagefile optimization, and working set management',
        'Background service and telemetry reduction — stripping Windows bloat and Linux daemons alike',
        'GPU optimization including driver tuning, hardware acceleration, and CUDA/OpenCL configuration',
      ]}
      benefits={[
        { title: 'Maximum Throughput', description: 'Workloads complete faster when the OS is not competing for resources — renders finish sooner, compiles run quicker.' },
        { title: 'Lower Latency', description: 'Audio and real-time processing benefit from reduced DPC latency and eliminated background interference.' },
        { title: 'Sustained Performance', description: 'Thermal and power tuning prevents throttling, keeping your system at peak clocks for the full duration of long jobs.' },
        { title: 'Resource Efficiency', description: 'Stripped services and optimized memory mean more RAM and CPU available for the work that actually matters.' },
        { title: 'Predictable Behavior', description: 'Tuned systems produce consistent benchmark results — no mysterious slowdowns or background spikes.' },
        { title: 'Tailored Workloads', description: 'Each optimization profile is built around your specific software stack — Blender, Premiere, DaVinci, JetBrains, PyTorch, and more.' },
      ]}
      process={[
        { step: '01', title: 'Workload Analysis', description: 'We profile your primary applications and workloads to identify bottlenecks and optimization opportunities.' },
        { step: '02', title: 'OS Stripping & Service Tuning', description: 'Unnecessary services, telemetry, and background processes are disabled; essential services are configured for minimal overhead.' },
        { step: '03', title: 'Resource Allocation', description: 'CPU affinity, power plans, memory management, and GPU settings are tuned for your specific workload profile.' },
        { step: '04', title: 'Benchmark & Validate', description: 'Before-and-after benchmarks confirm measurable improvements, and the configuration is documented for reproducibility.' },
      ]}
    />
  );
};

export default PerformanceOptimization;
