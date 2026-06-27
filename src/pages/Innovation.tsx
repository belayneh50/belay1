import React from 'react';
import ValuePage from '../components/ValuePage';
import { User } from 'lucide-react';

const Innovation = () => {
  return (
    <ValuePage
      title="INNOVATION"
      subtitle="Pushing Digital Boundaries"
      heroImage="https://images.unsplash.com/photo-1535378917049-ec9c8c02c27c?auto=format&fit=crop&q=80&w=1600"
      icon={<User className="w-8 h-8" />}
      color="rgb(34, 211, 238)"
      description="Innovation is the heartbeat of Alkebulan Web Design. We don't just follow trends—we create them. Every project we undertake is an opportunity to explore new possibilities, experiment with emerging technologies, and deliver solutions that haven't been seen before. Our commitment to innovation means your digital presence will always stand apart from the crowd."
      benefits={[
        "Early access to cutting-edge web technologies and frameworks",
        "Unique, never-before-seen digital experiences for your users",
        "Competitive advantage through technological leadership",
        "Future-proof solutions that evolve with the digital landscape",
        "Custom solutions tailored to your specific needs—never cookie-cutter",
        "Continuous exploration of AI, VR, and immersive web technologies"
      ]}
      approach="We foster a culture of relentless experimentation and learning. Our team dedicates time each week to exploring new technologies, building prototypes, and pushing the limits of what's possible. We attend global tech conferences, contribute to open-source projects, and maintain partnerships with leading technology companies. When we propose a solution, you can be certain it's been tested, refined, and optimized. We don't just build websites—we engineer digital experiences that inspire awe and drive engagement."
    />
  );
};

export default Innovation;
