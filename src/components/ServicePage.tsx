import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Zap, Cpu } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  heroImage,
  icon,
  color,
  description,
  features,
  benefits,
  process
}) => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
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
                <span>Back to Home</span>
              </Link>

              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-lg bg-black/80 backdrop-blur-sm flex items-center justify-center border border-[var(--neon-blue)]/30`} style={{ color }}>
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
              &gt; SERVICE OVERVIEW
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
            &gt; KEY FEATURES
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
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-10 text-[var(--neon-blue)]"
          >
            &gt; OUR PROCESS
          </motion.h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-red)] to-[var(--neon-green)] hidden md:block" />

            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Step Number */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-black border-2 border-[var(--neon-blue)] flex items-center justify-center text-sm font-bold text-[var(--neon-blue)]">
                    {index + 1}
                  </div>

                  <div className="p-6 bg-black/80 border border-gray-800 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl font-bold mb-4 neon-text">READY TO START?</h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how our {title.toLowerCase()} services can transform your business.
            </p>
            <Link to="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-[var(--neon-blue)] text-black font-bold inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                <span>INITIATE SERVICE</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
