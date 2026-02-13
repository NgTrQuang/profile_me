/** About page — bio, skills grid, tech stack badges, experience timeline */

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { SKILLS, EXPERIENCES, SITE_CONFIG } from '@/lib/constants';

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
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn more about ${SITE_CONFIG.name} — skills, experience, and background.`}
        path="/about/"
      />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 space-y-20">
        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h1>
          <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a full-stack developer with 5+ years of experience building modern web
              applications. I specialize in React, TypeScript, and Node.js, with a passion for
              creating fast, accessible, and beautifully designed digital experiences.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring open-source projects,
              writing technical blog posts, or experimenting with new technologies. I believe
              in clean code, thoughtful architecture, and continuous learning.
            </p>
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
            Skills & Technologies
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
            Tech Stack
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
            Experience
          </motion.h2>
          <div className="mt-8 space-y-0">
            {EXPERIENCES.map((exp, index) => (
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
