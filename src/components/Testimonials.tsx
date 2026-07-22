import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Connor',
      role: 'CEO, Resistance Tech',
      content: 'Alkebulan Web Design transformed our digital presence with their futuristic approach. The AI integration they built for us increased our conversions by 300%.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Marcus Wright',
      role: 'CTO, Neural Systems Inc',
      content: 'The most innovative web development team I\'ve ever worked with. Their attention to detail and cutting-edge solutions are unmatched in the industry.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1d7c1b6020?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Kyle Reese',
      role: 'Founder, Cyber Defense Corp',
      content: 'Security-focused development with stunning visuals. Alkebulan delivered a fortress-level protected platform that looks incredible.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Dr. Silberman',
      role: 'Head of Innovation, MedTech AI',
      content: 'The machine learning interface they built revolutionized our diagnostic platform. Truly next-generation development.',
      image: 'https://images.unsplash.com/photo-1472099625455-3d86f1e1c4dc?auto=format&fit=crop&q=80&w=200'
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/30 to-black relative" ref={ref}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center neon-text"
        >
          TRANSMISSION LOGS
        </motion.h2>

        <div className="relative">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-[var(--neon-blue)] opacity-20"
          >
            <Quote className="w-24 h-24" />
          </motion.div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[var(--neon-blue)] opacity-50" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[var(--neon-red)] opacity-50" />

              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-[var(--neon-blue)] object-cover"
              />
              <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                "{testimonials[current].content}"
              </p>
              <h4 className="text-xl font-bold text-white">
                {testimonials[current].name}
              </h4>
              <p className="text-[var(--neon-blue)] text-sm">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-3 border border-gray-700 rounded-full hover:border-[var(--neon-blue)] text-gray-400 hover:text-[var(--neon-blue)] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-6 bg-[var(--neon-blue)]'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-3 border border-gray-700 rounded-full hover:border-[var(--neon-blue)] text-gray-400 hover:text-[var(--neon-blue)] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
