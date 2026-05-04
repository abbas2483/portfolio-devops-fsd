export const HERO_CONTENT = "Building reliable systems from containers to cloud. Aspiring DevOps Engineer | Cloud & Infrastructure Specialist. Passionate about automating deployments, orchestrating containers with Kubernetes, and managing scalable cloud infrastructure on AWS.";

export const ABOUT_TEXT = "I'm an aspiring DevOps Engineer with a strong foundation in cloud infrastructure, containerization, and automation. Currently pursuing B.Tech in Cloud Computing & Information Security at Sandip University, Nashik (CGPA: 8.18). As a System Administrator Intern at Konsola Infotech Pvt. Ltd., I perform server configuration, monitoring, and maintenance on Linux (RHEL) environments, ensuring high availability of critical services. I have hands-on experience deploying microservices on AWS EC2 with Kubernetes bootstrapped via kubeadm, and practical exposure to CI/CD pipelines via Jenkins. I work with Docker and Docker Compose for containerization, NGINX as a reverse proxy, and Python and Shell Scripting for automation. For me, DevOps is about precision and repeatability — creating systems that let developers ship confidently and teams operate without friction.";

export const SKILLS = [
  // Cloud
  { name: 'AWS EC2', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 75 },
  { name: 'AWS S3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 70 },
  { name: 'AWS IAM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 65 },
  { name: 'Oracle Cloud (OCI)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'cloud', level: 60 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 80 },
  { name: 'Docker Compose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 75 },
  { name: 'Kubernetes (kubeadm)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 70 },
  { name: 'DockerHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 70 },

  // Infrastructure
  { name: 'Linux (RHEL)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'infrastructure', level: 80 },
  { name: 'Shell Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'infrastructure', level: 75 },
  { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'infrastructure', level: 70 },
  { name: 'NGINX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'infrastructure', level: 70 },

  // DevOps / Automation
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 65 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 80 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 80 },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'devops', level: 85 },

  // Development
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 65 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 55 },

  // Databases
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 55 },
];

export const PROJECTS = [
  {
    title: 'Kubernetes Microservices Deployment on AWS EC2',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed a containerized microservices application on a Kubernetes cluster bootstrapped with kubeadm on AWS EC2, managing frontend, backend, and database services via Deployments and Services. Automated deployments with YAML manifests, achieving consistent and repeatable environment provisioning across stages.',
    technologies: ['Kubernetes', 'Docker', 'AWS EC2', 'Linux', 'Node.js', 'MongoDB', 'Nginx', 'YAML'],
    category: 'devops',
    githubLink: 'https://github.com/pawanpatil2108',
    websiteLink: '',
  },
  {
    title: 'Microservices-Based App Deployment Using Docker',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Architected a multi-container microservices setup using Docker Compose, improving service isolation and simplifying multi-service orchestration. Configured NGINX as a reverse proxy to route traffic between services, enhancing request handling and inter-service communication.',
    technologies: ['Docker', 'Docker Compose', 'NGINX', 'Reverse Proxy', 'Linux'],
    category: 'devops',
    githubLink: 'https://github.com/pawanpatil2108',
    websiteLink: '',
  },
];

export const CONTACT = {
  address: 'Nashik, Maharashtra, India',
  phoneNo: '+91 7888072108',
  email: 'patilpawan2108@gmail.com',
  social: {
    github: 'https://github.com/pawanpatil2108',
    linkedin: 'https://linkedin.com/in/pawanpatil2108',
    twitter: '',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
