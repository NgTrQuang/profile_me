/** Site-wide constants and personal data */

export const SITE_CONFIG = {
  name: 'Nguyen Tri Quang',
  title: 'Nguyen Tri Quang — Software Engineer',
  description:
    'Full-Stack Software Engineer with experience building scalable web applications and real-time systems using React and Node.js.',
  url: 'https://profile-me-delta.vercel.app',
  locale: 'vi_VN',
  author: 'Nguyen Tri Quang',
  email: 'ngtrquangit@gmail.com',
  phone: '0377643961',
  tagline: 'Software Engineer',
  avatar: '/images/ANH_AVATAR.jpg',
  address: '323B, Alley 114, Kien Thi Nhan Street, Nguyet Hoa Ward, Vinh Long Province',
  dob: '12/11/2001',
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
  { name: 'React', icon: 'react' },
  { name: 'JavaScript (ES6+)', icon: 'js' },
  { name: 'TailwindCSS', icon: 'tailwind' },
  { name: 'HTML5/CSS3', icon: 'html' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Express.js', icon: 'express' },
  { name: 'RESTful API', icon: 'api' },
  { name: 'JWT', icon: 'jwt' },
  { name: 'SpringBoot (Java)', icon: 'spring' },
  { name: 'Python', icon: 'python' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'Git', icon: 'git' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Nginx', icon: 'nginx' },
  { name: 'PM2', icon: 'pm2' },
  { name: 'Redis', icon: 'redis' },
  { name: 'MQTT (EMQX)', icon: 'emqx' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Render', icon: 'render' },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Full-Stack Engineer',
    company: 'HPK Vietnam Tech & Training JSC',
    period: 'Dec 2024 — Present',
    description:
      'Develop and maintain full-stack web applications using React and Node.js. Designed backend architecture and database schemas to support scalable application features. Implemented real-time communication between IoT devices and backend systems using MQTT and EMQX broker. Configured deployment environments using Nginx and PM2 for production services. Independently developed and maintained systems from design to deployment.',
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
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built with Next.js, TypeScript, and TailwindCSS. Features multi-language support (Vietnamese/English), dark/light theme, blog with markdown, command palette, and SEO optimization.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    demoUrl: 'https://profile-me-delta.vercel.app',
    githubUrl: 'https://github.com/NgTrQuang/profile_me',
    image: '/images/projects/portfolio.jpg',
    featured: true,
  },
];
