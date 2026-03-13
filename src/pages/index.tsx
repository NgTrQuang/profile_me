/** Home page — hero section with name, tagline, avatar, and CTA buttons */

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FolderOpen, Mail, Download } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { SITE_CONFIG } from '@/lib/constants';
import { getPersonJsonLd } from '@/lib/seo';
import { useI18n } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <SEOHead path="/" jsonLd={getPersonJsonLd()} description={t.home.description} />

      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-border bg-muted">
              <img
                src={SITE_CONFIG.avatar}
                alt={SITE_CONFIG.name}
                width={112}
                height={112}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border border-border bg-card text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t.home.availableForWork}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            {SITE_CONFIG.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 max-w-lg text-lg text-muted-foreground leading-relaxed"
          >
            {t.home.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-2 max-w-md text-sm text-muted-foreground"
          >
            {t.home.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              <FolderOpen className="w-4 h-4" />
              {t.home.viewProjects}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              {t.home.contactMe}
            </Link>
            <a
              href="/files/NGUYENTRIQUANG_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-accent transition-colors"
            >
              <Download className="w-4 h-4" />
              {t.home.downloadCV}
            </a>
          </motion.div>
        </div>

        {/* Decorative gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl" />
        </div>
      </section>
    </>
  );
}
