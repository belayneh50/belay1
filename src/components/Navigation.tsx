import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isHomePage && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, isHomePage]);

  const navItems = [
    { name: 'HOME', href: '/#home' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'SKILLS', href: '/#skills' },
    { name: 'HARDWARE', href: '/#hardware' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'TESTIMONIALS', href: '/#testimonials' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  const scrollToSection = (href: string) => {
    const hash = href.replace('/', '');
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? 'bg-black/90 backdrop-blur-md border-b border-[var(--neon-blue)]/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="block">
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Cpu className="w-8 h-8 text-[var(--neon-blue)]" />
              <span className="text-xl font-bold neon-text">ALKEBULAN</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <motion.span
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-[var(--neon-blue)] transition-colors relative group inline-block"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--neon-blue)] group-hover:w-full transition-all duration-300" />
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-[var(--neon-blue)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-[var(--neon-blue)]/30"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsOpen(false);
                  }}
                >
                  <motion.span
                    className="block w-full text-left px-4 py-3 text-gray-300 hover:text-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/10 rounded-lg transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
