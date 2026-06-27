import React from 'react';
import ValuePage from '../components/ValuePage';
import { Target } from 'lucide-react';

const Precision = () => {
  return (
    <ValuePage
      title="PRECISION"
      subtitle="Pixel-Perfect Design Execution"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
      icon={<Target className="w-8 h-8" />}
      color="rgb(249, 115, 22)"
      description="Precision is our obsession. Every pixel, every interaction, every animation is meticulously crafted to create flawless digital experiences. We measure twice and cut once, ensuring that every element serves a purpose and every design decision is intentional. The result? Interfaces that feel intuitive, perform beautifully, and leave nothing to chance."
      benefits={[
        "Pixel-perfect implementations across all devices and browsers",
        "Consistent brand representation at every touchpoint",
        "Reduced development iterations through detailed planning",
        "Optimized user flows that minimize friction and maximize conversions",
        "Clean, maintainable code that stands the test of time",
        "Attention to micro-interactions that subtly enhance user experience"
      ]}
      approach="Our precision methodology starts with comprehensive design systems created before a single line of code is written. We develop detailed style guides, component libraries, and interaction specifications that serve as our blueprint. Every design undergoes multiple rounds of review, testing across devices, and refinement. Our QA process catches issues at the microscopic level—from subpixel rendering to timing of animations. We believe that excellence lies in the details our competitors overlook."
    />
  );
};

export default Precision;
