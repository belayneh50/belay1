import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { User, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    { icon: <User className="w-6 h-6" />, title: 'INNOVATION', desc: 'Pushing boundaries', link: '/values/innovation' },
    { icon: <Target className="w-6 h-6" />, title: 'PRECISION', desc: 'Pixel-perfect design', link: '/values/precision' },
    { icon: <Zap className="w-6 h-6" />, title: 'SPEED', desc: 'Lightning fast delivery', link: '/values/speed' },
    { icon: <Shield className="w-6 h-6" />, title: 'SECURITY', desc: 'Fortress-level protection', link: '/values/security' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)] via-transparent to-[var(--neon-red)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center neon-text"
        >
          IDENTITY PROTOCOL
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-red)] rounded-lg opacity-20 blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc5950?auto=format&fit=crop&q=80&w=800"
                alt="Alkebulan Designer"
                className="relative w-full h-full object-cover rounded-lg neon-border"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[var(--neon-blue)] rounded-full opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[var(--neon-red)] rounded-full opacity-50"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--neon-blue)]">
              ALKEBULAN WEB DESIGN
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A next-generation web design entity forged in the digital fires of innovation.
              We specialize in creating immersive, futuristic web experiences that push the
              boundaries of what's possible in the digital realm.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our mission: to craft digital masterpieces that combine cutting-edge technology
              with stunning visual design. From AI-powered interfaces to neural network integrations,
              we build the future of web experiences.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-4 border border-[var(--neon-blue)]/30 rounded-lg bg-black/50 hover:border-[var(--neon-blue)] transition-all duration-300 group cursor-pointer h-full"
                  >
                    <div className="text-[var(--neon-blue)] mb-2 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
