import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Cpu, Code2, Zap, Shield, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Cybernetic Systems",
      description: "AI-powered web applications with real-time data processing and neural network integration",
      icon: <Cpu className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Python", "TensorFlow"],
      link: "/projects/cybernetic-systems"
    },
    {
      title: "Neural Interface",
      description: "Machine learning dashboard with predictive analytics and data visualization",
      icon: <Code2 className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "PyTorch", "D3.js"],
      link: "/projects/neural-interface"
    },
    {
      title: "Quantum Web",
      description: "High-performance e-commerce platform with quantum-inspired algorithms",
      icon: <Zap className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tags: ["TypeScript", "Node.js", "PostgreSQL"],
      link: "/projects/quantum-web"
    },
    {
      title: "Digital Fortress",
      description: "Enterprise security platform with threat detection and response systems",
      icon: <Shield className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Go", "Kubernetes", "Redis"],
      link: "/projects/digital-fortress"
    },
    {
      title: "Data Nexus",
      description: "Real-time analytics platform with streaming data pipelines",
      icon: <Database className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["Apache Kafka", "ClickHouse", "React"],
      link: "/projects/data-nexus"
    },
    {
      title: "Cloud Command",
      description: "Multi-cloud management platform with auto-scaling infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      tags: ["Terraform", "AWS", "Docker"],
      link: "/projects/cloud-command"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black relative" ref={ref}>
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--neon-blue)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--neon-red)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-center neon-text"
        >
          PROJECT ARCHIVES
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Classified digital operations successfully deployed across the network
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="block group relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-black/50 hover:border-[var(--neon-blue)]/50 transition-all duration-500 h-full flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-black/80 backdrop-blur-sm flex items-center justify-center text-[var(--neon-blue)] border border-[var(--neon-blue)]/30">
                      {project.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--neon-blue)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs bg-gray-900 border border-gray-700 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-gray-400 group-hover:text-[var(--neon-blue)] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.span>
                      <span className="text-gray-400 group-hover:text-[var(--neon-blue)] transition-colors">
                        <Github className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-red)]/10" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-all"
          >
            VIEW ALL ARCHIVES
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
