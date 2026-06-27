import React from 'react';
import ServicePage from '../components/ServicePage';
import { Database, Zap, Activity, Users, TrendingUp } from 'lucide-react';

const DataSystems = () => {
  return (
    <ServicePage
      title="DATA SYSTEMS"
      subtitle="Robust Database Solutions"
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cb8f91b?auto=format&fit=crop&q=80&w=1600"
      icon={<Database className="w-8 h-8" />}
      color="rgb(34, 197, 94)"
      description="Our Data Systems service delivers robust database solutions with real-time synchronization and advanced analytics. We architect data infrastructure that handles massive scale while remaining fast and reliable. From traditional relational databases to modern distributed systems, we ensure your data works for you."
      features={[
        "PostgreSQL, MySQL, and SQL Server optimization",
        "MongoDB, Cassandra, and NoSQL solutions",
        "Redis and in-memory caching systems",
        "Data warehouse and lake architecture",
        "Real-time data streaming pipelines",
        "ETL/ELT data integration processes",
        "Database migration and modernization",
        "Backup and disaster recovery planning",
        "Performance monitoring and optimization",
        "Data governance and compliance"
      ]}
      benefits={[
        {
          title: "Lightning Queries",
          description: "Optimized databases that return results in milliseconds, not seconds."
        },
        {
          title: "Zero Data Loss",
          description: "Redundant backup systems ensure your data is always safe."
        },
        {
          title: "Real-Time Sync",
          description: "Changes propagate instantly across all systems and regions."
        },
        {
          title: "Unlimited Scale",
          description: "Architecture that grows seamlessly with your data volume."
        },
        {
          title: "Compliance Ready",
          description: "Meet regulatory requirements for data handling and privacy."
        },
        {
          title: "Unified View",
          description: "All your data accessible from a single, organized system."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Data Audit",
          description: "We assess your current data landscape and identify optimization opportunities."
        },
        {
          step: "2",
          title: "Architecture Design",
          description: "Our team designs the optimal data architecture for your specific needs."
        },
        {
          step: "3",
          title: "Implementation",
          description: "We set up databases, pipelines, and synchronization systems."
        },
        {
          step: "4",
          title: "Migration",
          description: "Careful data migration with minimal downtime and zero data loss."
        },
        {
          step: "5",
          title: "Operations",
          description: "Ongoing monitoring, optimization, and support for your data systems."
        }
      ]}
    />
  );
};

export default DataSystems;
