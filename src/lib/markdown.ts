/** Markdown parsing utilities for blog posts */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

/** Blog post frontmatter shape */
export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  hasViTranslation?: boolean;
}

/** Full blog post with HTML content */
export interface Post extends PostMeta {
  content: string;
}

/** Bilingual post meta — both locales bundled for static export */
export interface BilingualPostMeta {
  en: PostMeta;
  vi: PostMeta;
}

/** Bilingual post — both locales bundled for static export */
export interface BilingualPost {
  en: Post;
  vi: Post;
}

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

/** Calculate estimated reading time */
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

/** Resolve the file path for a slug + locale, falling back to 'en' */
function resolveFilePath(slug: string, locale: string): string | null {
  const localePath = path.join(POSTS_DIR, `${slug}.${locale}.md`);
  if (fs.existsSync(localePath)) return localePath;
  const enPath = path.join(POSTS_DIR, `${slug}.en.md`);
  if (fs.existsSync(enPath)) return enPath;
  return null;
}

/** Get all unique post slugs from *.en.md files (source of truth) */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.en.md'))
    .map((file) => file.replace(/\.en\.md$/, ''));
}

/** Get metadata for all posts, sorted by date descending */
export function getAllPosts(locale = 'en'): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostMeta(slug, locale))
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

/** Get metadata for a single post */
export function getPostMeta(slug: string, locale = 'en'): PostMeta | null {
  const filePath = resolveFilePath(slug, locale);
  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const hasViTranslation = fs.existsSync(path.join(POSTS_DIR, `${slug}.vi.md`));

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    hasViTranslation,
  };
}

/** Get metadata for all posts in both locales — for static export */
export function getAllBilingualPosts(): BilingualPostMeta[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => {
      const en = getPostMeta(slug, 'en');
      const vi = getPostMeta(slug, 'vi') ?? en!;
      if (!en) return null;
      return { en, vi };
    })
    .filter((p): p is BilingualPostMeta => p !== null)
    .sort((a, b) => new Date(b.en.date).getTime() - new Date(a.en.date).getTime());
}

/** Get a full post in both locales — for static export */
export async function getBilingualPostBySlug(slug: string): Promise<BilingualPost | null> {
  const en = await getPostBySlug(slug, 'en');
  if (!en) return null;
  const vi = await getPostBySlug(slug, 'vi') ?? en;
  return { en, vi };
}

/** Get a full post with parsed HTML content */
export async function getPostBySlug(slug: string, locale = 'en'): Promise<Post | null> {
  const filePath = resolveFilePath(slug, locale);
  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const hasViTranslation = fs.existsSync(path.join(POSTS_DIR, `${slug}.vi.md`));

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    hasViTranslation,
    content: processedContent.toString(),
  };
}
