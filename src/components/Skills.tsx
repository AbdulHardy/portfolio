import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming & Tools',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 92 },
        { name: 'R', level: 85 },
        { name: 'Excel/VBA', level: 90 },
      ],
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', level: 90 },
        { name: 'Power BI', level: 88 },
        { name: 'Matplotlib/Seaborn', level: 85 },
        { name: 'D3.js', level: 75 },
      ],
    },
    {
      title: 'Analytics & ML',
      skills: [
        { name: 'Statistical Analysis', level: 92 },
        { name: 'Machine Learning', level: 85 },
        { name: 'A/B Testing', level: 88 },
        { name: 'Predictive Modeling', level: 82 },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 80 },
        { name: 'AWS', level: 78 },
        { name: 'Google BigQuery', level: 85 },
      ],
    },
  ];

  const technologies = [
    'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Apache Spark',
    'Airflow', 'Docker', 'Git', 'Jupyter', 'Looker', 'Snowflake', 'dbt'
  ];

  return (
    <section id="skills" className="py-32 relative bg-secondary/20">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &
            <span className="gradient-text"> Technologies</span>
          </h2>
          <div className="data-line w-20 mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
