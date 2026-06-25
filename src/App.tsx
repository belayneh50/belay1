import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
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

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
