import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: '2024',
      credentialId: 'ABC123XYZ',
    },
    {
      title: 'AWS Certified Data Analytics - Specialty',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-DA-789',
    },
    {
      title: 'Microsoft Certified: Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'MS-AZ-456',
    },
    {
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2023',
      credentialId: 'TBL-DS-321',
    },
    {
      title: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      date: '2023',
      credentialId: 'IBM-DS-654',
    },
    {
      title: 'DataCamp Data Scientist with Python',
      issuer: 'DataCamp',
      date: '2022',
      credentialId: 'DC-DSP-987',
    },
  ];

  return (
    <section id="certifications" className="py-32 relative bg-secondary/20">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional
            <span className="gradient-text"> Certifications</span>
          </h2>
          <div className="data-line w-20 mx-auto" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                <button className="flex items-center gap-1 text-sm text-primary hover:underline">
                  Verify
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
