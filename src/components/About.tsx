import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, LineChart, Brain, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Database, title: 'Data Engineering', description: 'Building robust data pipelines and ETL processes' },
    { icon: LineChart, title: 'Statistical Analysis', description: 'Advanced statistical modeling and hypothesis testing' },
    { icon: Brain, title: 'Machine Learning', description: 'Predictive models and pattern recognition' },
    { icon: Sparkles, title: 'Data Visualization', description: 'Creating compelling visual narratives' },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate About
            <span className="gradient-text"> Data Science</span>
          </h2>
          <div className="data-line w-20" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Data Analyst with a passion for uncovering hidden patterns 
              and transforming complex datasets into clear, actionable insights. With a 
              strong foundation in statistics, programming, and business intelligence, 
              I bridge the gap between raw data and strategic decision-making.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving, 
              ensuring that every analysis tells a compelling story that drives real 
              business impact. I thrive on challenges that require both analytical 
              rigor and innovative thinking.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'San Francisco, CA' },
                { label: 'Experience', value: '5+ Years' },
                { label: 'Degree', value: 'M.S. Data Science' },
                { label: 'Focus', value: 'Business Analytics' },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-lg bg-secondary/30"
                >
                  <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                  <div className="font-semibold">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
