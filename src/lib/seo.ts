/** SEO utility — generates meta tag props for each page */

import { SITE_CONFIG } from './constants';

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
}

/** Build full page title */
export function getPageTitle(title?: string): string {
  if (!title) return SITE_CONFIG.title;
  return `${title} — ${SITE_CONFIG.name}`;
}

/** Build canonical URL */
export function getCanonicalUrl(path?: string): string {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  if (!path) return base;
  return `${base}${path}`;
}

/** Generate JSON-LD structured data for a person */
export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    jobTitle: 'Full-Stack Developer',
    sameAs: Object.values(SITE_CONFIG.socials),
  };
}

/** Generate JSON-LD structured data for a blog post */
export function getArticleJsonLd(props: {
  title: string;
  description: string;
  url: string;
  publishedTime: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    url: props.url,
    datePublished: props.publishedTime,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
    },
  };
}
