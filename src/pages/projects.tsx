/** Projects page — grid layout with project cards */

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { PROJECTS } from '@/lib/constants';
import { useI18n } from '@/lib/i18n';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const { t } = useI18n();

  return (
    <>
      <SEOHead
        title={t.projects.title}
        description={t.projects.seoDescription}
        path="/projects/"
      />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.projects.title}</h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project, idx) => {
            const translated = t.projectsData[idx];
            return (
              <motion.article
                key={project.title}
                variants={item}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/5"
              >
                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-medium rounded-full bg-foreground text-background">
                    {t.projects.featured}
                  </span>
                )}

                <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors">
                  {translated?.title || project.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {translated?.description || project.description}
                </p>

                {/* Tech stack tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t.projects.demo}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    {t.projects.source}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
