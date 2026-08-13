export const HERO_CONTENT =
  'Building products end-to-end — from polished full-stack experiences to the systems that keep them running. Full-Stack Developer | DevOps & Cloud Engineer.';

export const ABOUT_TEXT =
  "I'm a Full-Stack Developer with a growing focus on DevOps, cloud infrastructure, and the systems behind modern applications. I enjoy building products with React, Next.js, Node.js, and modern databases, but I'm equally interested in what happens beyond the application layer — containers, Linux, networking, deployment, CI/CD, and servers. DevOps especially clicked with me because the underlying systems and core computing concepts simply make more sense to me; understanding how software actually reaches and runs on a machine is what keeps me curious.";

export const SKILLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 75 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'development', level: 75 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'development', level: 80 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'development', level: 75 },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'development', level: 70 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'development', level: 75 },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'development', level: 65 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 60 },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 55 },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud', level: 50 },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'cloud', level: 70 },
  { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', category: 'cloud', level: 65 },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 60 },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'infrastructure', level: 70 },
  { name: 'Networking', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'infrastructure', level: 60 },
  { name: 'Server Management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'infrastructure', level: 65 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'devops', level: 55 },
  { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', category: 'devops', level: 60 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 80 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 80 },
  { name: 'Deployment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'devops', level: 70 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 70 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 65 },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'database', level: 70 },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', category: 'database', level: 70 },
];

export const SKILL_CATEGORIES = [
  { id: 'development', title: 'Full-Stack Development', skills: ['React', 'Next.js', 'JavaScript', 'Node.js', 'Express.js', 'Tailwind CSS', 'C++', 'Python'] },
  { id: 'cloud', title: 'Cloud & Deployment', skills: ['AWS', 'Azure', 'Vercel', 'Netlify'] },
  { id: 'containers', title: 'Containers', skills: ['Docker'] },
  { id: 'os', title: 'Operating Systems', skills: [{ name: 'Linux', level: 70 }, { name: 'Windows', level: 85 }] },
  { id: 'devops', title: 'DevOps & Automation', skills: ['Jenkins', 'CI/CD', 'Git', 'GitHub', 'Deployment', 'Server Management'] },
  { id: 'networking', title: 'Networking & Infrastructure', skills: ['Networking', 'Server Management', 'Docker', 'Linux'] },
  { id: 'database', title: 'Databases & Backend Services', skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase'] },
  { id: 'softskills', title: 'Professional Strengths', skills: [{ name: 'Project Coordination', level: 75 }, { name: 'Team Collaboration', level: 80 }, { name: 'Client Communication', level: 70 }, { name: 'Requirement Management', level: 75 }, { name: 'Problem Solving', level: 80 }] },
] as const;

export const PROJECTS = [
  {
    title: 'CargoShift Website',
    image: null,
    description: 'A full-stack logistics platform built for managing logistics workflows, live tracking, and user interactions. The project involved building the web experience, integrating payment functionality, and improving the overall user flow for a production-oriented application.',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase', 'Razorpay'],
    category: 'fullstack',
    githubLink: null,
    websiteLink: null,
  },
  {
    title: 'Apurv FMCG Website',
    image: null,
    description: 'An end-to-end FMCG ordering web application with secure authentication, dynamic cart functionality, responsive UI, and payment integration. The project covered requirements, development, testing, and final deployment.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Razorpay'],
    category: 'fullstack',
    githubLink: null,
    websiteLink: null,
  },
  {
    title: 'Two-Tier Flask Application Containerization',
    image: null,
    description: 'Containerized a two-tier Flask application to understand how application services and their dependencies can be packaged, connected, and run consistently using Docker.',
    technologies: ['Docker', 'Flask', 'Python', 'Linux'],
    category: 'devops',
    githubLink: null,
    websiteLink: null,
  },
  {
    title: 'Portfolio CI Pipeline with Jenkins',
    image: null,
    description: 'Built a Jenkins-based CI workflow for a portfolio application to explore automated builds and deployment-oriented development workflows.',
    technologies: ['Jenkins', 'Git', 'CI/CD', 'Next.js'],
    category: 'devops',
    githubLink: null,
    websiteLink: null,
  },
];

export const CONTACT = {
  address: 'Crossing Republik, Ghaziabad, India',
  phoneNo: '+91 8756585368',
  email: 'sayedabbasraza38@gmail.com',
  portfolio: 'https://www.abbasraza.in',
  social: {
    github: 'https://github.com/abbas2483',
    linkedin: 'https://www.linkedin.com/in/sayed-abbas-raza-469402253/',
    twitter: 'https://x.com/Abbasraza66',
  },
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter((skill) => skill.category === 'cloud'),
  containers: SKILLS.filter((skill) => skill.category === 'containers'),
  infrastructure: SKILLS.filter((skill) => skill.category === 'infrastructure'),
  devops: SKILLS.filter((skill) => skill.category === 'devops'),
  development: SKILLS.filter((skill) => skill.category === 'development'),
  database: SKILLS.filter((skill) => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter((project) => project.category === 'devops'),
  fullstack: PROJECTS.filter((project) => project.category === 'fullstack'),
};
