import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import HardwareExpertise from './components/HardwareExpertise';
import PCAssembly from './pages/PCAssembly';
import SystemBuilding from './pages/SystemBuilding';
import PerformanceOptimization from './pages/PerformanceOptimization';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberneticSystems from './pages/CyberneticSystems';
import NeuralInterface from './pages/NeuralInterface';
import QuantumWeb from './pages/QuantumWeb';
import DigitalFortress from './pages/DigitalFortress';
import DataNexus from './pages/DataNexus';
import CloudCommand from './pages/CloudCommand';
import WebArchitecture from './pages/WebArchitecture';
import AIIntegration from './pages/AIIntegration';
import UIDesign from './pages/UIDesign';
import DataSystems from './pages/DataSystems';
import MobileSystems from './pages/MobileSystems';
import CloudDeployment from './pages/CloudDeployment';
import Innovation from './pages/Innovation';
import Precision from './pages/Precision';
import Speed from './pages/Speed';
import Security from './pages/Security';
import ChatWidget from './components/ChatWidget';
import EthiopianCalendar from './components/EthiopianCalendar';

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Skills />
    <HardwareExpertise />
    <Projects />
    <Testimonials />
    <Contact />
    <EthiopianCalendar />
    <Footer />
  </>
);

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Section links on the homepage are handled by Navigation.
    if (pathname === '/' && hash) return;

    const resetScroll = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
    };
    resetScroll();

    // Browsers may restore the previous position just after React paints.
    const frame = window.requestAnimationFrame(resetScroll);
    const timer = window.setTimeout(resetScroll, 100);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/cybernetic-systems" element={<CyberneticSystems />} />
          <Route path="/projects/neural-interface" element={<NeuralInterface />} />
          <Route path="/projects/quantum-web" element={<QuantumWeb />} />
          <Route path="/projects/digital-fortress" element={<DigitalFortress />} />
          <Route path="/projects/data-nexus" element={<DataNexus />} />
          <Route path="/projects/cloud-command" element={<CloudCommand />} />
          <Route path="/services/web-architecture" element={<WebArchitecture />} />
          <Route path="/services/ai-integration" element={<AIIntegration />} />
          <Route path="/services/ui-design" element={<UIDesign />} />
          <Route path="/services/data-systems" element={<DataSystems />} />
          <Route path="/services/mobile-systems" element={<MobileSystems />} />
          <Route path="/services/cloud-deployment" element={<CloudDeployment />} />
          <Route path="/values/innovation" element={<Innovation />} />
          <Route path="/values/precision" element={<Precision />} />
          <Route path="/values/speed" element={<Speed />} />
          <Route path="/values/security" element={<Security />} />
          <Route path="/hardware/pc-assembly" element={<PCAssembly />} />
          <Route path="/hardware/system-building" element={<SystemBuilding />} />
          <Route path="/hardware/performance-optimization" element={<PerformanceOptimization />} />
        </Routes>
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
