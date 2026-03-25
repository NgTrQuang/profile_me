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
    tagline: 'Software Engineer',
    description:
      'Full-Stack Software Engineer with experience building scalable web applications and real-time systems using React and Node.js.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    downloadCV: 'Download CV',
  },

  // About page
  about: {
    title: 'About Me',
    seoDescription: 'Learn more about {name} — skills, experience, and background.',
    bio1: 'Full-Stack Software Engineer with experience building scalable web applications and real-time systems using React and Node.js. Experienced in backend architecture, IoT communication, and system deployment.',
    bio2: 'Engineering mindset focused on system thinking, maintainable architecture, and long-term product development. Graduated in Information Technology from Can Tho University (2019–2024, GPA: 2.91/4.00).',
    skillsTitle: 'Skills & Technologies',
    techStackTitle: 'Tech Stack',
    experienceTitle: 'Work Experience',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications',
    interestsTitle: 'Interests',
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
    and: 'Privacy Policy | Terms of Service | Legal Notice',
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

  // Education
  education: {
    university: 'Can Tho University',
    major: 'Information Technology',
    period: '2019 — 2024',
    gpa: 'GPA: 2.91/4.00',
  },

  // Certifications
  certifications: [
    { name: 'English Certificate', level: 'B1' },
    { name: 'Driving License', level: 'B2' },
  ],

  // Interests
  interests: [
    'Exploring open-source projects',
    'Building experimental web applications',
    'Reading books and listening to music',
  ],

  // Experiences
  experiences: [
    {
      title: 'Full-Stack Engineer',
      company: 'HPK Vietnam Tech & Training JSC',
      period: 'Dec 2024 — Present',
      description:
        'Develop and maintain full-stack web applications using React and Node.js. Designed backend architecture and database schemas to support scalable application features. Implemented real-time communication between IoT devices and backend systems using MQTT and EMQX broker. Configured deployment environments using Nginx and PM2 for production services.',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Freelancer',
      period: 'Dec 2023 — Dec 2024',
      description:
        'Developed 2 full-stack e-commerce platforms from scratch, including product management and order processing systems. Built REST APIs using Node.js and Express. Designed responsive frontend using React + TailwindCSS. Integrated MongoDB database architecture.',
    },
    {
      title: 'Collaborator',
      company: 'Besoft Co., Ltd',
      period: 'Sep 2023 — Dec 2023',
      description:
        'Scan and edit documents according to the project\'s requirements. Teamwork spirit, practical work environment.',
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
      title: 'The Weather Point',
      description:
        'The Weather Point app provides real-time weather information, forecasts, air quality index, and location information — completely free, with no API key required.',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with Next.js, TypeScript, and TailwindCSS. Features multi-language support (Vietnamese/English), dark/light theme, blog with markdown, command palette, and SEO optimization.',
    },
    {
      title: 'The evolution of modern systems',
      description:
        'The Evolution of Modern Systems is an informational web project that visually explores how software systems and modern application architectures have evolved over time, presenting key concepts of modern software design and development in an accessible layout. It serves as both an educational resource and a showcase of modern web development patterns.',
    },
    {
      title: 'Financial Asset Statistics Website',
      description:
        'Financial Asset Statistics Website is an interactive web application focused on presenting financial asset data and statistics in a clear and visual format. It helps users explore key financial metrics and trends efficiently through a modern frontend interface, showcasing both information architecture and data visualization techniques.',
    },
    {
      title: 'ChatFlow — Real-Time Chat Application',
      description:
        'A full-stack real-time chat platform enabling instant messaging through public/private rooms and direct messages. The system features authentication, friend management, online presence tracking, and scalable real-time communication infrastructure with persistent storage and caching.',
    },
  ],
};

export default en;
