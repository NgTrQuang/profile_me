/** Dynamic blog post page — renders markdown content with syntax highlighting */

import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { getPostSlugs, getBilingualPostBySlug, type BilingualPost } from '@/lib/markdown';
import { getArticleJsonLd, getCanonicalUrl } from '@/lib/seo';
import { useI18n } from '@/lib/i18n';

interface PostPageProps {
  bilingual: BilingualPost;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const bilingual = await getBilingualPostBySlug(slug);

  if (!bilingual) {
    return { notFound: true };
  }

  return { props: { bilingual } };
};

export default function PostPage({ bilingual }: PostPageProps) {
  const { t, locale, setLocale } = useI18n();
  const post = locale === 'vi' ? bilingual.vi : bilingual.en;
  const hasViTranslation = bilingual.vi.content !== bilingual.en.content;

  const jsonLd = getArticleJsonLd({
    title: post.title,
    description: post.description,
    url: getCanonicalUrl(`/blog/${post.slug}/`),
    publishedTime: post.date,
  });

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}/`}
        type="article"
        publishedTime={post.date}
        tags={post.tags}
        jsonLd={jsonLd}
      />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.blog.backToBlog}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Language switch — only shown when VI translation exists */}
        {hasViTranslation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="mt-6 flex items-center gap-2 text-sm"
          >
            <span className="text-muted-foreground">
              {locale === 'vi' ? 'Ngôn ngữ:' : 'Language:'}
            </span>
            <button
              onClick={() => setLocale('en')}
              className={`px-2 py-0.5 rounded-md text-xs font-medium transition-colors ${
                locale !== 'vi'
                  ? 'bg-accent text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale('vi')}
              className={`px-2 py-0.5 rounded-md text-xs font-medium transition-colors ${
                locale === 'vi'
                  ? 'bg-accent text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              VI
            </button>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose mt-12 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}
