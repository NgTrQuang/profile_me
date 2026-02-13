/** Contact page — email, social links, and copy button */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Copy, Check } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { SITE_CONFIG } from '@/lib/constants';
import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard API not available */
    }
  };

  const socials = [
    { name: 'GitHub', href: SITE_CONFIG.socials.github, icon: Github },
    { name: 'LinkedIn', href: SITE_CONFIG.socials.linkedin, icon: Linkedin },
    { name: 'Twitter', href: SITE_CONFIG.socials.twitter, icon: Twitter },
  ];

  return (
    <>
      <SEOHead
        title={t.contact.title}
        description={t.contact.seoDescription.replace('{name}', SITE_CONFIG.name)}
        path="/contact/"
      />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.contact.title}</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Email section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {t.contact.emailLabel}
          </h2>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-lg font-medium hover:text-muted-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              {SITE_CONFIG.email}
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border hover:bg-accent transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  {t.contact.copied}
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  {t.contact.copy}
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {t.contact.socialLabel}
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:bg-accent hover:border-foreground/20 transition-all w-fit"
              >
                <social.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
