import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Layers3, Gauge } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const principles = [
    {
      title: 'Strategy Before Style',
      content: 'Every build starts with the user, the business goal, and a clear definition of success.',
      icon: <Target className="w-7 h-7" />
    },
    {
      title: 'Systems, Not Screens',
      content: 'Reusable components, responsive behavior, and accessibility turn a visual idea into a durable product.',
      icon: <Layers3 className="w-7 h-7" />
    },
    {
      title: 'Ship, Measure, Improve',
      content: 'I test performance and usability, launch with purpose, and improve the experience using real feedback.',
      icon: <Gauge className="w-7 h-7" />
    }
  ];

  return (
    <section id="process" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-center neon-text"
        >
          BUILD PROTOCOL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A practical process for turning ambitious concepts into clear, usable digital experiences.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
              className="bg-black/70 border border-gray-800 rounded-xl p-7 relative overflow-hidden hover:border-[var(--neon-blue)]/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 flex items-center justify-center text-[var(--neon-blue)] mb-6">
                {principle.icon}
              </div>
              <span className="text-xs tracking-[0.2em] text-[var(--neon-blue)]">0{index + 1}</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3">{principle.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
