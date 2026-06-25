import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Zap,
  Shield,
  Gauge,
  Users,
  TrendingUp,
  Cpu,
  Globe,
  Database,
  Cloud,
  Code2,
  ExternalLink
} from 'lucide-react';

interface ProjectPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  benefits: { title: string; description: string; icon: React.ReactNode }[];
  technologies: string[];
  useCases: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  subtitle,
  heroImage,
  icon,
  description,
  features,
  benefits,
  technologies,
  useCases
}) => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />

        {/* Animated Grid */}
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-[linear-gradient(var(--neon-blue)_1px,transparent_1px),linear-gradient(90deg,var(--neon-blue)_1px,transparent_1px)] bg-[size:50px_50px]"
        />

        <div className="relative z-10 h-full flex items-end pb-16 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--neon-blue)] mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-black/80 backdrop-blur-sm flex items-center justify-center text-[var(--neon-blue)] border border-[var(--neon-blue)]/30 neon-border">
                  {icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold neon-text">{title}</h1>
                  <p className="text-xl text-gray-400">{subtitle}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent" />
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-[var(--neon-blue)]">
              &gt; SYSTEM OVERVIEW
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-[var(--neon-blue)]"
          >
            &gt; CORE FEATURES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-black/50 border border-gray-800 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-[var(--neon-green)] mt-0.5 shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-[var(--neon-blue)]"
          >
            &gt; BUSINESS BENEFITS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-[var(--neon-blue)]/50 transition-all"
              >
                <div className="text-[var(--neon-blue)] mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-[var(--neon-blue)]"
          >
            &gt; TECH STACK
          </motion.h2>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: 'var(--neon-blue)' }}
                className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-sm text-gray-300 cursor-default transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-[var(--neon-blue)]"
          >
            &gt; USE CASES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 border-l-2 border-[var(--neon-red)] bg-black/50"
              >
                <p className="text-gray-300">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 neon-text">READY TO DEPLOY?</h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how {title} can transform your digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contact = document.querySelector('#contact');
                  if (contact) {
                    window.location.href = '/#contact';
                  }
                }}
                className="px-8 py-4 rounded-lg bg-[var(--neon-blue)] text-black font-bold flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                <span>INITIATE PROJECT</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/'}
                className="px-8 py-4 rounded-lg border border-gray-700 text-gray-300 hover:border-[var(--neon-blue)] transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>VIEW OTHER PROJECTS</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
