import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Cpu, Palette, Database, Smartphone, Cloud } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'WEB ARCHITECTURE',
      description: 'Full-stack web applications built with cutting-edge technologies and scalable infrastructure.',
      color: 'from-cyan-500 to-blue-500',
      link: '/services/web-architecture'
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'AI INTEGRATION',
      description: 'Machine learning and AI-powered solutions that transform user experiences.',
      color: 'from-purple-500 to-pink-500',
      link: '/services/ai-integration'
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'UI/UX DESIGN',
      description: 'Futuristic interface designs that captivate and engage users.',
      color: 'from-orange-500 to-red-500',
      link: '/services/ui-design'
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'DATA SYSTEMS',
      description: 'Robust database solutions with real-time synchronization and analytics.',
      color: 'from-green-500 to-teal-500',
      link: '/services/data-systems'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'MOBILE SYSTEMS',
      description: 'Cross-platform mobile applications with native performance.',
      color: 'from-indigo-500 to-purple-500',
      link: '/services/mobile-systems'
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'CLOUD DEPLOYMENT',
      description: 'Scalable cloud infrastructure with auto-scaling and CDN integration.',
      color: 'from-blue-500 to-cyan-500',
      link: '/services/cloud-deployment'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black relative" ref={ref}>
      {/* Background Grid Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(var(--neon-blue)_1px,transparent_1px),linear-gradient(90deg,var(--neon-blue)_1px,transparent_1px)] bg-[size:50px_50px] opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-center neon-text"
        >
          SERVICE MODULES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Advanced digital solutions engineered for maximum impact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="block group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg blur-xl"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />

                <div className="relative p-6 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-[var(--neon-blue)]/50 transition-all duration-300 h-full flex flex-col cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-[var(--neon-blue)] mb-4"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--neon-blue)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium group-hover:opacity-100 transition-opacity text-[var(--neon-blue)]">
                    <span>ACTIVATE MODULE</span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
