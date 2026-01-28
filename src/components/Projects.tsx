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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      
      {/* Floating glass shapes */}
      <motion.div 
        className="absolute top-40 left-10 w-16 h-16 rounded-xl bg-primary/5 backdrop-blur-xl border border-primary/10 rotate-45"
        animate={{ y: [0, -15, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="section-container relative z-10" ref={ref}>
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

        {/* Projects Grid with enhanced glassmorphism */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 group hover:border-primary/40 hover:-translate-y-2 transition-all duration-500"
              whileHover={{ boxShadow: '0 0 60px hsl(190 95% 50% / 0.2)' }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              {/* Header */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl bg-card/50 backdrop-blur-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-card/50 backdrop-blur-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="relative z-10 text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metric Badge with glassmorphism */}
              <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-medium">{project.metrics}</span>
              </div>

              {/* Tags with glassmorphism */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-card/50 backdrop-blur-xl border border-border/50 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/30 backdrop-blur-xl border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card/50 transition-all duration-300"
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
