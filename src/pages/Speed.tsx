import React from 'react';
import ValuePage from '../components/ValuePage';
import { Zap } from 'lucide-react';

const Speed = () => {
  return (
    <ValuePage
      title="SPEED"
      subtitle="Lightning-Fast Delivery"
      heroImage="https://images.unsplash.com/photo-1515777086800-8139c27c349f?auto=format&fit=crop&q=80&w=1600"
      icon={<Zap className="w-8 h-8" />}
      color="rgb(34, 197, 94)"
      description="Speed isn't just about how fast your website loads—though we obsess over that too. It's about rapid ideation, swift execution, and agile responses to changing requirements. We've built processes that eliminate bottlenecks without sacrificing quality. Time-to-market matters, and we've mastered the art of delivering excellence at velocity."
      benefits={[
        "Websites that load in under 2 seconds, boosting SEO and user retention",
        "Rapid prototyping gets your ideas visible and testable quickly",
        "Agile methodology keeps you informed and in control at every stage",
        "Fast iteration cycles based on real user feedback",
        "Shorter project timelines without compromising quality",
        "Quick turnarounds on updates, fixes, and feature requests"
      ]}
      approach="We've engineered our workflow for maximum efficiency without sacrificing quality. Our component libraries and design systems accelerate development. Our CI/CD pipelines automate testing and deployment. We sprint in focused two-week cycles with regular deliverables, keeping you involved and informed. But speed never means cutting corners—our performance budgets ensure your site loads fast, and our quality gates catch issues before they reach production. We move fast and fix things properly."
    />
  );
};

export default Speed;
