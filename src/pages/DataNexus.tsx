import React from 'react';
import ProjectPage from '../components/ProjectPage';
import { Database, Zap, Gauge, Users, TrendingUp, RefreshCw, GitBranch } from 'lucide-react';

const DataNexus = () => {
  return (
    <ProjectPage
      title="DATA NEXUS"
      subtitle="Real-Time Analytics Platform"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
      icon={<Database className="w-8 h-8" />}
      description="Data Nexus is our real-time analytics platform that transforms how organizations process and act on data. With streaming data pipelines, sub-millisecond query responses, and intelligent caching layers, Data Nexus enables real-time decision making at any scale. From IoT sensor networks to financial trading systems, we deliver the infrastructure that keeps your data flowing, processed, and ready for action the moment it matters."
      features={[
        "Real-time data streaming with Apache Kafka and Kinesis",
        "Sub-second query responses with columnar storage",
        "Data lake and data warehouse unified architecture",
        "Change Data Capture (CDC) for real-time sync",
        "Intelligent data partitioning and indexing",
        "Schema evolution with backward compatibility",
        "Data quality monitoring and validation pipelines",
        "Event sourcing and CQRS implementation",
        "Time-series optimization for temporal data",
        "Zero-ETL integration with popular data sources"
      ]}
      benefits={[
        {
          title: "Real-Time Insights",
          description: "Make decisions on live data, not yesterday's reports.",
          icon: <RefreshCw className="w-6 h-6" />
        },
        {
          title: "Massive Scale",
          description: "Handle petabytes of data without performance degradation.",
          icon: <Database className="w-6 h-6" />
        },
        {
          title: "Data Consistency",
          description: "Ensure data integrity across all systems with ACID transactions.",
          icon: <GitBranch className="w-6 h-6" />
        },
        {
          title: "Lower Latency",
          description: "Sub-millisecond responses for time-critical applications.",
          icon: <Zap className="w-6 h-6" />
        },
        {
          title: "Cost Efficiency",
          description: "Pay only for queries run with serverless architecture options.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Team Productivity",
          description: "Self-service analytics without waiting for engineering tickets.",
          icon: <Users className="w-6 h-6" />
        }
      ]}
      technologies={[
        "Apache Kafka", "Apache Flink", "Apache Spark", "ClickHouse",
        "Apache Druid", "TimescaleDB", "PostgreSQL", "Redis",
        "Apache Iceberg", "dbt", "Airflow", "Snowflake",
        "BigQuery", "Redshift", "AWS Kinesis", "Debezium"
      ]}
      useCases={[
        "Financial Services: Real-time fraud detection and trading signals",
        "E-commerce: Live inventory and dynamic pricing",
        "Gaming: Player behavior tracking and matchmaking",
        "IoT Manufacturing: Sensor data and predictive maintenance",
        "Telecom: Network monitoring and traffic analysis",
        "AdTech: Real-time bidding and attribution",
        "Logistics: Fleet tracking and route optimization",
        "Media: Live audience analytics and content recommendations"
      ]}
    />
  );
};

export default DataNexus;
