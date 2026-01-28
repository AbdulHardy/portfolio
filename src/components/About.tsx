import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, LineChart, Brain, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

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
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Glassmorphism Background Elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
      
      <div className="section-container relative z-10" ref={ref}>
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

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 blur-xl opacity-50 animate-pulse" />
              
              {/* Photo container with glassmorphism */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 bg-card/50 backdrop-blur-xl">
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-xl border border-primary/30 shadow-lg"
              >
                <span className="text-sm font-medium gradient-text">Fresher</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm an aspiring Data Analyst with a passion for uncovering hidden patterns 
              and transforming complex datasets into clear, actionable insights. With a 
              strong foundation in statistics, programming, and business intelligence, 
              I'm eager to bridge the gap between raw data and strategic decision-making.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines technical skills with creative problem-solving, 
              ensuring that every analysis tells a compelling story. I'm excited to 
              take on challenges that require both analytical rigor and innovative thinking.
            </p>

            {/* Quick Facts with glassmorphism */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Bangalore, India' },
                { label: 'Experience', value: 'Fresher' },
                { label: 'Degree', value: 'B.S. Data Science' },
                { label: 'Focus', value: 'Business Analytics' },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid with enhanced glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/50 group hover:border-primary/40 hover:bg-card/50 transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
