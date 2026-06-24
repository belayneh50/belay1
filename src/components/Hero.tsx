import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronDown, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const about = document.querySelector('#about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Multiple Parallax Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc5950?auto=format&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-800221a30d6e?auto=format&fit=crop&q=80')`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Animated Grid */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-[linear-gradient(var(--neon-blue)_1px,transparent_1px),linear-gradient(90deg,var(--neon-blue)_1px,transparent_1px)] bg-[size:100px_100px]"
      />

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 border border-[var(--neon-blue)]/30 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-40 right-20 w-24 h-24 border border-[var(--neon-red)]/30 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 text-[var(--neon-blue)]"
      >
        <Cpu className="w-16 h-16 opacity-20" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-4"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 360] }}
            transition={{ duration: 1.2, rotate: { delay: 0.5, duration: 2 } }}
            className="mb-8"
          >
            <Terminal className="w-20 h-20 mx-auto text-[var(--neon-blue)]" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="neon-text">ALKEBULAN</span>
            <br />
            <motion.span
              animate={{ textShadow: ['0 0 10px #ff0055', '0 0 30px #ff0055', '0 0 10px #ff0055'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[var(--neon-red)]"
            >
              WEB DESIGN
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-300 max-w-2xl mx-auto"
          >
            THE FUTURE OF DIGITAL EXPERIENCES
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm md:text-base text-gray-500 mb-10 max-w-xl mx-auto"
          >
            Forging Next-Generation Web Solutions with AI Integration,
            Cyberpunk Aesthetics, and Uncompromising Performance
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--neon-blue)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contact = document.querySelector('#contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-lg bg-[var(--neon-blue)] text-black font-bold flex items-center justify-center gap-2 group"
            >
              <Zap className="w-5 h-5" />
              <span>INITIALIZE CONTACT</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--neon-red)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const projects = document.querySelector('#projects');
                if (projects) projects.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-lg border-2 border-[var(--neon-red)] text-[var(--neon-red)] font-bold hover:bg-[var(--neon-red)] hover:text-black transition-all"
            >
              VIEW PROJECTS
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--neon-blue)] cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent" />
    </section>
  );
};

export default Hero;
