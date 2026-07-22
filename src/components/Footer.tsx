import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'AI Integration',
    'Cloud Solutions',
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Cpu className="w-8 h-8 text-[var(--neon-blue)]" />
              <span className="text-xl font-bold neon-text">ALKEBULAN</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Forging the future of web experiences with cutting-edge technology
              and stunning design.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/belayneh50', label: 'GitHub' },
                { icon: <Mail className="w-5 h-5" />, href: 'mailto:belayneh.metaferya50@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  whileHover={{ scale: 1.2, color: 'var(--neon-blue)' }}
                  className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[var(--neon-blue)]" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <a href="mailto:belayneh.metaferya50@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[var(--neon-blue)] transition-colors text-sm">
                <Mail className="w-4 h-4 text-[var(--neon-blue)]" />
                <span>belayneh.metaferya50@gmail.com</span>
              </a>
              <a href="tel:+251929011773" className="flex items-center gap-3 text-gray-400 hover:text-[var(--neon-blue)] transition-colors text-sm">
                <Phone className="w-4 h-4 text-[var(--neon-blue)]" />
                <span>+251 929 011 773</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Alkebulan Web Design. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Available for remote and Addis Ababa-based projects.</p>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-1 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-red)] to-[var(--neon-blue)]"
      />
    </footer>
  );
};

export default Footer;
