---
title: "Getting Started with Next.js: A Complete Guide"
date: "2024-12-15"
description: "Learn how to build modern web applications with Next.js, from project setup to deployment."
tags: ["Next.js", "React", "Web Development"]
---

# Getting Started with Next.js

Next.js has become one of the most popular React frameworks for building modern web applications. In this guide, we'll walk through everything you need to know to get started.

## Why Next.js?

Next.js provides a great developer experience with features like:

- **File-based routing** — No need for a separate router library
- **Server-side rendering** — Better SEO and initial load performance
- **Static site generation** — Pre-render pages at build time
- **API routes** — Build your backend alongside your frontend
- **Image optimization** — Automatic image optimization out of the box

## Setting Up Your Project

Getting started is as simple as running:

```bash
npx create-next-app@latest my-app --typescript --tailwind
cd my-app
npm run dev
```

This creates a new Next.js project with TypeScript and TailwindCSS pre-configured.

## Project Structure

A typical Next.js project looks like this:

```
my-app/
├── src/
│   ├── pages/        # File-based routing
│   ├── components/   # Reusable components
│   ├── styles/       # Global styles
│   └── lib/          # Utility functions
├── public/           # Static assets
├── next.config.js    # Next.js configuration
└── package.json
```

## Creating Your First Page

In Next.js, every file in the `pages` directory becomes a route. Create a new file at `pages/about.tsx`:

```tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Welcome to my website!</p>
    </div>
  );
}
```

This automatically creates a route at `/about`.

## Static Site Generation

For a portfolio site, static generation is perfect. You can export your entire site as static HTML:

```js
// next.config.js
const nextConfig = {
  output: 'export',
};
```

This generates a fully static site that can be deployed anywhere — GitHub Pages, Netlify, or Cloudflare Pages.

## Conclusion

Next.js makes it incredibly easy to build fast, modern web applications. Whether you're building a simple portfolio or a complex web app, Next.js has the tools you need.

Happy coding!
