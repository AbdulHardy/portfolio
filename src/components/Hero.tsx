import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
  const stats = [
    { value: 10, suffix: '+', label: 'Projects Completed' },
    { value: 1, suffix: '', label: 'Years Learning' },
    { value: 5, suffix: '+', label: 'Certifications' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Background Effects with Glassmorphism */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Multiple glow layers */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'var(--gradient-glow)' }} />
      
      {/* Glassmorphism orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-primary/10 backdrop-blur-3xl border border-primary/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-32 left-20 w-24 h-24 rounded-full bg-primary/5 backdrop-blur-3xl border border-primary/10"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      
      {/* Floating Data Points */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Badge with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/40 backdrop-blur-xl border border-primary/30 mb-8 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Open to opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Transforming Data into
            <span className="gradient-text block">Actionable Insights</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mb-8"
          >
            Aspiring Data Analyst based in Bangalore with a passion for statistical analysis, 
            machine learning, and data visualization. Ready to help businesses make 
            data-driven decisions that drive growth and innovation.
          </motion.p>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 glow-effect shadow-lg"
              style={{ background: 'var(--gradient-primary)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-border/50 font-semibold text-foreground bg-card/30 backdrop-blur-xl hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-16"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 rounded-xl bg-card/40 backdrop-blur-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Stats with glassmorphism cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 max-w-lg"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-number text-3xl md:text-4xl font-bold text-primary mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
