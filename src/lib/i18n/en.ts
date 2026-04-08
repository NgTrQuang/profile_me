/** English translations */

import { a } from 'framer-motion/client';
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
    bio1: 'Full-Stack Software Engineer with a focus on backend and systems development, experienced in building scalable web applications and handling real-time data. Participated in the development of IoT device monitoring and control systems, implementing device-server communication via MQTT (EMQX).',
    bio2: 'Experienced in designing RESTful APIs with Node.js (Express), system organization and performance optimization, and possesses frontend expertise with ReactJS for end-to-end product development.',
    bio3: 'Technical thinking focused on problem analysis, designing efficient systems that balance performance, scalability, and maintainability. Aimed at building sustainable solutions aligned with the long-term development goals of the product and the business.',
    bio4: 'Willing to learn and adapt to new technologies, especially Java in a production environment.',
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
      description: [
        'Develop and operate a support system for remote monitoring and control of IoT devices (electricity, water).',
        'Design and build a RESTful API using Node.js (Express), processing data and synchronizing device status.',
        'Implement real-time communication via MQTT (EMQX).',
        'Design database and priority levels for maintenance system.',
        'Configure production environment using Nginx and PM2.'
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Freelancer',
      period: 'Dec 2023 — Dec 2024',
      description: [
        'Develop full-stack e-commerce systems on demand, including product management and order processing.',
        'Build RESTful APIs with Node.js (Express), handle business logic, and integrate with MongoDB databases.',
        'Design responsive interfaces using ReactJS and TailwindCSS.',
        'Customize the system to meet various functional and architectural requirements.',
      ],
    },
    {
      title: 'Collaborator',
      company: 'Besoft Co., Ltd',
      period: 'Sep 2023 — Dec 2023',
      description: [
        'Assisting in processing and standardizing documents as required by the project.',
        'Working in a team environment, adhering to established procedures.',
      ],
    },
  ],

  // Projects data
  projectsData: [
    {
      title: 'IoT Monitoring & Control System',
      description:
        'Contributed to building a backend system for monitoring and controlling IoT devices (electricity and water meters). Worked with MQTT (EMQX) for real-time communication between devices and servers, and designed APIs to process and synchronize device data. Focused on handling real-time data flow and system reliability. (Details cannot be shared due to confidentiality).',
    },
    {
      title: 'Dynamic Card Creator',
      description:
        'Developed a web application for creating personalized cards directly in the browser, focusing on a flexible and reusable component-based architecture. Designed dynamic data handling to allow users to configure content and render it across multiple templates. Emphasized maintainability and extensibility in frontend system design.',
    },
    {
      title: 'The Weather Point',
      description:
        'Built a real-time weather application that aggregates and presents weather, air quality, and location data. Focused on asynchronous data flow handling, real-time updates, and efficient state management. Designed the system to ensure responsive UI and smooth user experience when working with continuously changing data.',
    },
    {
      title: 'Portfolio Website',
      description:
        'Developed a personal portfolio using Next.js and TypeScript with a focus on performance, SEO, and scalability. Designed a modular frontend architecture supporting multi-language content, markdown-based blogging, and theming. Structured for long-term maintainability and extensibility.',
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
