/** Site-wide constants and personal data */

export const SITE_CONFIG = {
  name: 'Nguyễn Trí Quãng',
  title: 'ntquang@it — Full-Stack Developer',
  description:
    'Full-stack developer specializing in modern web technologies. Building fast, accessible, and beautiful digital experiences.',
  url: 'https://profile-me-delta.vercel.app',
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
  { name: 'Java', icon: 'java' },
  { name: 'Spring Boot', icon: 'spring' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Oracle', icon: 'oracle' },
  { name: 'Git', icon: 'git' },
  { name: 'Redis', icon: 'redis' },
  { name: "EMQX", icon: "emqx" },
  { name: 'C/C++', icon: 'c/c-plus-plus' },
  // { name: 'Docker', icon: 'docker' },
  // { name: 'AWS', icon: 'aws' },
  // { name: 'GraphQL', icon: 'graphql' },
  // { name: 'Figma', icon: 'figma' },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Full-Stack Engineer & Tester',
    company: 'HPK Viet Nam Co., Jsc.',
    period: '2024 — Present',
    description:
      'Full-stack developer specializing in modern web technologies. Creating fast, accessible, and visually appealing digital experiences. Integrated IoT projects for convenient remote control from anywhere.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'Freelancer',
    period: '2024',
    description:
      'Built and shipped 2 products from scratch using React, TailwindCSS, Node.js, and MongoDB. Implemented CI/CD pipelines and automated testing.',
  },
  {
    title: 'Collaborator',
    company: 'Besoft Co.',
    period: '2023 — 2024',
    description:
      'Scan and edit documents as required by the project, helping to compile all project-related documents.',
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
    title: 'Dynamic Card Creator',
    description:
      'Dynamic Card Creator is a web application that supports creating personalized cards directly in your browser using existing information. Users simply choose a suitable template, then fill in and add the necessary information (name, role, contact, description, etc.) to create the card quickly, without needing to install any additional software.',
    techStack: ['React', 'JavaScript', 'TailwindCSS', 'Vite'],
    demoUrl: 'https://dynamic-card-creator.onrender.com',
    githubUrl: 'https://github.com/NgTrQuang/dynamic-card-creator',
    image: '/images/projects/dynamic-card-creator.jpg',
    featured: true,
  },
  {
    title: 'The Weather Point',
    description:
      'The Weather Point app provides real-time weather information, forecasts, air quality index, and location information — completely free, with no API key required.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'WebSocket', 'D3.js'],
    demoUrl: 'https://the-weather-point.vercel.app',
    githubUrl: 'https://github.com/NgTrQuang/the-weather-point',
    image: '/images/projects/the-weather-point.jpg',
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
