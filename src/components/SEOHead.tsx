/** SEO Head component — renders meta tags, Open Graph, and JSON-LD */

import Head from 'next/head';
import { SITE_CONFIG } from '@/lib/constants';
import { getPageTitle, getCanonicalUrl, type SEOProps } from '@/lib/seo';

interface Props extends SEOProps {
  jsonLd?: Record<string, unknown>;
}

export default function SEOHead({ title, description, path, image, type = 'website', publishedTime, tags, jsonLd }: Props) {
  const pageTitle = getPageTitle(title);
  const pageDescription = description || SITE_CONFIG.description;
  const canonicalUrl = getCanonicalUrl(path);
  const ogImage = image || `${SITE_CONFIG.url}/images/og-default.jpg`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={SITE_CONFIG.author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {tags?.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
