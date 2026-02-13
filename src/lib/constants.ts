/** Site-wide constants and personal data */

export const SITE_CONFIG = {
  name: 'Nguyễn Trí Quãng',
  title: 'ntquang@it — Full-Stack Developer',
  description:
    'Full-stack developer specializing in modern web technologies. Building fast, accessible, and beautiful digital experiences.',
  url: 'https://johndoe.dev',
  locale: 'en_US',
  author: 'ntquang@it',
  email: 'ngtrquangit@gmail.com',
  tagline: 'Building the web, one pixel at a time.',
  avatar: '/images/ANH_AVATAR.jpg',
  socials: {
    github: 'https://github.com/NgTrQuang',
    linkedin: 'https://linkedin.com/in/NgTrQuang',
    twitter: 'https://x.com/NgTrQuang',
  },
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export interface Skill {
  name: string;
  icon: string;
}

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: 'ts' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'node' },
  { name: 'TailwindCSS', icon: 'tailwind' },
  { name: 'Python', icon: 'python' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'AWS', icon: 'aws' },
  { name: 'GraphQL', icon: 'graphql' },
  { name: 'Figma', icon: 'figma' },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2023 — Present',
    description:
      'Leading the frontend architecture for a SaaS platform serving 100k+ users. Migrated legacy codebase to Next.js, improving performance by 40%.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2021 — 2023',
    description:
      'Built and shipped 3 products from scratch using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and automated testing.',
  },
  {
    title: 'Frontend Developer',
    company: 'WebAgency Co.',
    period: '2019 — 2021',
    description:
      'Developed responsive web applications for 20+ clients. Specialized in performance optimization and accessibility.',
  },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'CloudSync Dashboard',
    description:
      'A real-time cloud infrastructure monitoring dashboard with live metrics, alerts, and team collaboration features.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'WebSocket', 'D3.js'],
    demoUrl: 'https://cloudsync-demo.vercel.app',
    githubUrl: 'https://github.com/johndoe/cloudsync',
    image: '/images/projects/cloudsync.jpg',
    featured: true,
  },
  {
    title: 'DevFlow',
    description:
      'An open-source developer workflow automation tool that integrates with GitHub, Jira, and Slack.',
    techStack: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://devflow.dev',
    githubUrl: 'https://github.com/johndoe/devflow',
    image: '/images/projects/devflow.jpg',
    featured: true,
  },
  {
    title: 'MarkdownPad',
    description:
      'A minimal, distraction-free markdown editor with live preview, syntax highlighting, and export options.',
    techStack: ['React', 'TypeScript', 'CodeMirror', 'TailwindCSS'],
    demoUrl: 'https://markdownpad.app',
    githubUrl: 'https://github.com/johndoe/markdownpad',
    image: '/images/projects/markdownpad.jpg',
    featured: true,
  },
  {
    title: 'API Toolkit',
    description:
      'A lightweight REST API testing tool with environment variables, request history, and response visualization.',
    techStack: ['TypeScript', 'Electron', 'React', 'SQLite'],
    demoUrl: 'https://api-toolkit.dev',
    githubUrl: 'https://github.com/johndoe/api-toolkit',
    image: '/images/projects/api-toolkit.jpg',
    featured: false,
  },
  {
    title: 'ColorPalette AI',
    description:
      'An AI-powered color palette generator that creates harmonious color schemes from text descriptions.',
    techStack: ['Python', 'FastAPI', 'React', 'OpenAI API'],
    demoUrl: 'https://colorpalette-ai.vercel.app',
    githubUrl: 'https://github.com/johndoe/colorpalette-ai',
    image: '/images/projects/colorpalette.jpg',
    featured: false,
  },
  {
    title: 'TaskZen',
    description:
      'A minimalist task management app with keyboard shortcuts, tags, and natural language date parsing.',
    techStack: ['Next.js', 'Prisma', 'TailwindCSS', 'Vercel'],
    demoUrl: 'https://taskzen.app',
    githubUrl: 'https://github.com/johndoe/taskzen',
    image: '/images/projects/taskzen.jpg',
    featured: false,
  },
];
