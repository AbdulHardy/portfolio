import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, TrendingUp, Database, Brain, PieChart } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Built a machine learning model to predict customer churn with 94% accuracy, helping reduce customer attrition by 23%.',
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'Tableau'],
      icon: Brain,
      metrics: '94% Accuracy',
    },
    {
      title: 'Sales Analytics Dashboard',
      description: 'Developed an interactive dashboard tracking $50M+ in sales across 12 regions, enabling real-time decision making.',
      tags: ['Power BI', 'SQL', 'DAX', 'Azure'],
      icon: TrendingUp,
      metrics: '$50M+ Tracked',
    },
    {
      title: 'ETL Pipeline Automation',
      description: 'Designed and implemented automated data pipelines processing 10TB+ data daily, reducing processing time by 70%.',
      tags: ['Apache Airflow', 'Python', 'AWS', 'Snowflake'],
      icon: Database,
      metrics: '70% Faster',
    },
    {
      title: 'Market Segmentation Analysis',
      description: 'Performed clustering analysis to identify 5 distinct customer segments, driving targeted marketing strategies.',
      tags: ['R', 'K-Means', 'ggplot2', 'Looker'],
      icon: PieChart,
      metrics: '5 Segments',
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
          <div className="data-line w-20" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metric Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium">{project.metrics}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-secondary/50 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
