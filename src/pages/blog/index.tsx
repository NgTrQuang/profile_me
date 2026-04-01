/** Blog listing page — shows all posts with tags and reading time */

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { getAllPosts, type PostMeta } from '@/lib/markdown';
import { useI18n } from '@/lib/i18n';

interface BlogPageProps {
  posts: PostMeta[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default function BlogPage({ posts }: BlogPageProps) {
  const { t, locale } = useI18n();

  return (
    <>
      <SEOHead
        title={t.blog.title}
        description={t.blog.seoDescription}
        path="/blog/"
      />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{t.blog.title}</h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            {t.blog.subtitle}
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <p className="mt-12 text-muted-foreground">{t.blog.noPosts}</p>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-12 space-y-1"
          >
            {posts.map((post) => (
              <motion.article key={post.slug} variants={item}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-4 -mx-4 rounded-xl hover:bg-accent transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-medium group-hover:text-foreground transition-colors truncate">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {post.description}
                    </p>
                    {/* Tags */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-md bg-muted text-muted-foreground"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
