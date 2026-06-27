import React from 'react';
import ValuePage from '../components/ValuePage';
import { Shield } from 'lucide-react';

const Security = () => {
  return (
    <ValuePage
      title="SECURITY"
      subtitle="Fortress-Level Protection"
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1600"
      icon={<Shield className="w-8 h-8" />}
      color="rgb(99, 102, 241)"
      description="Security is woven into everything we build—never added as an afterthought. We architect systems that protect your data, your users, and your reputation. In an era of increasing cyber threats, we stand as guardians of your digital fortress. From encryption to access controls, penetration testing to compliance, we've got you covered."
      benefits={[
        "Enterprise-grade encryption for all sensitive data",
        "OWASP Top 10 vulnerability protection built into every application",
        "Regular security audits and penetration testing",
        "GDPR, CCPA, and industry-specific compliance readiness",
        "Secure authentication with multi-factor support",
        "Real-time threat monitoring and incident response protocols"
      ]}
      approach="Security isn't a feature—it's a foundation. Every line of code we write follows secure coding practices. Every architecture decision considers attack vectors and defense strategies. We conduct automated security scanning in our CI/CD pipelines, regular manual penetration tests by third-party experts, and ongoing vulnerability monitoring. Our team includes certified security professionals who stay current on the latest threats and countermeasures. With Alkebulan, your users' data is guarded like our own."
    />
  );
};

export default Security;
