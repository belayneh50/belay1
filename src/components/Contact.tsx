import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Loader, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setErrorMessage('Transmission failed. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = `w-full bg-black/50 backdrop-blur-sm border-2 border-gray-800 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon-blue)] focus:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all duration-300`;

  return (
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[var(--neon-blue)]/5 to-[var(--neon-red)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-center neon-text"
        >
          INITIALIZE CONTACT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          Establish a secure communication channel with our network
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 rounded-t-lg border border-gray-800 border-b-0">
            <Terminal className="w-4 h-4 text-[var(--neon-blue)]" />
            <span className="text-sm text-gray-400">secure_transmission.exe</span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-b-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm text-gray-400 mb-2">
                  <span className="text-[var(--neon-blue)]">&gt;</span> DESIGNATION
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                  disabled={status === 'loading'}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm text-gray-400 mb-2">
                  <span className="text-[var(--neon-blue)]">&gt;</span> COMM PROTOCOL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                  disabled={status === 'loading'}
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-sm text-gray-400 mb-2">
                <span className="text-[var(--neon-blue)]">&gt;</span> SUBJECT LINE
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project inquiry / Collaboration / Other"
                value={formData.subject}
                onChange={handleChange}
                className={inputClasses}
                required
                disabled={status === 'loading'}
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label className="block text-sm text-gray-400 mb-2">
                <span className="text-[var(--neon-blue)]">&gt;</span> TRANSMISSION DATA
              </label>
              <textarea
                name="message"
                placeholder="Describe your project or inquiry..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={inputClasses}
                required
                disabled={status === 'loading'}
              />
            </motion.div>

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Transmission successful! We'll respond within 24 hours.</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
              disabled={status === 'loading'}
              className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                status === 'loading'
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[var(--neon-blue)] to-cyan-400 text-black hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  <span>PROCESSING...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>TRANSMIT MESSAGE</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Or connect directly:</p>
          <div className="flex justify-center gap-6 text-gray-400">
            <motion.a
              href="mailto:belayneh.metaferya50@gmail.com"
              whileHover={{ color: 'var(--neon-blue)' }}
              className="hover:text-[var(--neon-blue)] transition-colors"
            >
              belayneh.metaferya50@gmail.com
            </motion.a>
            <span className="text-gray-700">|</span>
            <motion.span whileHover={{ color: 'var(--neon-blue)' }} className="hover:text-[var(--neon-blue)] transition-colors cursor-pointer">
              +251 929 011 773
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
