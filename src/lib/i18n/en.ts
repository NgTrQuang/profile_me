/** English translations */

import type { Translations } from './vi';

const en: Translations = {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
  },

  // Home page
  home: {
    availableForWork: 'Available for work',
    tagline: 'Building the web, one pixel at a time.',
    description:
      'Full-stack developer specializing in modern web technologies. Building fast, accessible, and beautiful digital experiences.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
  },

  // About page
  about: {
    title: 'About Me',
    seoDescription: 'Learn more about {name} — skills, experience, and background.',
    bio1: "I'm a full-stack developer with 5+ years of experience building modern web applications. I specialize in React, TypeScript, and Node.js, with a passion for creating fast, accessible, and beautifully designed digital experiences.",
    bio2: "When I'm not coding, you'll find me exploring open-source projects, writing technical blog posts, or experimenting with new technologies. I believe in clean code, thoughtful architecture, and continuous learning.",
    skillsTitle: 'Skills & Technologies',
    techStackTitle: 'Tech Stack',
    experienceTitle: 'Experience',
  },

  // Projects page
  projects: {
    title: 'Projects',
    seoDescription: 'A showcase of my recent projects and open-source contributions.',
    subtitle: "A collection of projects I've built — from open-source tools to full-stack applications.",
    featured: 'Featured',
    demo: 'Demo',
    source: 'Source',
  },

  // Blog page
  blog: {
    title: 'Blog',
    seoDescription: 'Thoughts on web development, design, and technology.',
    subtitle: 'Thoughts, tutorials, and insights on web development and design.',
    noPosts: 'No posts yet. Check back soon!',
    backToBlog: 'Back to Blog',
    minRead: 'min read',
  },

  // Contact page
  contact: {
    title: 'Get in Touch',
    seoDescription: "Get in touch with {name}. Let's build something together.",
    subtitle:
      "Have a project in mind, want to collaborate, or just want to say hi? Feel free to reach out. I'm always open to interesting conversations and opportunities.",
    emailLabel: 'Email',
    socialLabel: 'Social',
    copied: 'Copied!',
    copy: 'Copy',
  },

  // Footer
  footer: {
    builtWith: 'Built with',
    and: 'and Next.js.',
  },

  // Command palette
  cmd: {
    placeholder: 'Type a command or search...',
    noResults: 'No results found.',
    navigation: 'Navigation',
    theme: 'Theme',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
  },

  // Theme toggle
  themeToggle: {
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },

  // Language
  lang: {
    switchTo: 'Tiếng Việt',
    label: 'EN',
  },

  // Experiences
  experiences: [
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
  ],

  // Projects data
  projectsData: [
    {
      title: 'Dynamic Card Creator',
      description:
        'Dynamic Card Creator is a web application that supports creating personalized cards directly in your browser using existing information. Users simply choose a suitable template, then fill in and add the necessary information (name, role, contact, description, etc.) to create the card quickly, without needing to install any additional software.',
    },
    {
      title: 'CloudSync Dashboard',
      description:
        'A real-time cloud infrastructure monitoring dashboard with live metrics, alerts, and team collaboration features.',
    },
    {
      title: 'DevFlow',
      description:
        'An open-source developer workflow automation tool that integrates with GitHub, Jira, and Slack.',
    },
    {
      title: 'MarkdownPad',
      description:
        'A minimal, distraction-free markdown editor with live preview, syntax highlighting, and export options.',
    },
    {
      title: 'API Toolkit',
      description:
        'A lightweight REST API testing tool with environment variables, request history, and response visualization.',
    },
    {
      title: 'ColorPalette AI',
      description:
        'An AI-powered color palette generator that creates harmonious color schemes from text descriptions.',
    },
    {
      title: 'TaskZen',
      description:
        'A minimalist task management app with keyboard shortcuts, tags, and natural language date parsing.',
    },
  ],
};

export default en;
