/** About page — bio, skills grid, tech stack badges, experience timeline */

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { SKILLS, SITE_CONFIG } from '@/lib/constants';
import { useI18n } from '@/lib/i18n';

/** Stagger animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <SEOHead
        title={t.about.title}
        description={t.about.seoDescription.replace('{name}', SITE_CONFIG.name)}
        path="/about/"
      />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 space-y-20">
        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.about.title}</h1>
          <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
          </div>
        </motion.section>

        {/* Skills Grid */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold tracking-tight"
          >
            {t.about.skillsTitle}
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-xs font-mono font-semibold text-muted-foreground">
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tech Stack Badges */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold tracking-tight"
          >
            {t.about.techStackTitle}
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
              'TailwindCSS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker',
              'AWS', 'Vercel', 'Git', 'GraphQL', 'REST APIs', 'Figma',
            ].map((tech) => (
              <motion.span
                key={tech}
                variants={item}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold tracking-tight"
          >
            {t.about.experienceTitle}
          </motion.h2>
          <div className="mt-8 space-y-0">
            {t.experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 pb-8 last:pb-0 border-l border-border"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-border bg-background" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{exp.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
