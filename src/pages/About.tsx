import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Calendar, MapPin, Code, Zap, Award } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: 'Sep 2025 – Present',
      title: 'Full Stack Developer Intern',
      company: 'Adporate Commercials',
      description:
        'Built and integrated full-stack features using React, Node.js, Express, and Supabase. Collaborated with teams to deliver production-ready web applications, implemented testing and secure authentication using JWT and bcrypt.js, and used AI-assisted development tools such as Cursor and GitHub Copilot to accelerate feature delivery.',
      icon: Code,
    },
    {
      year: 'Mar 2025 – Aug 2025',
      title: 'Project Management Intern',
      company: 'Adporate Commercials',
      description: 'Managed project requirements, timelines, and task allocation across teams. Coordinated with clients and developers, monitored progress and testing, and helped ensure projects were delivered according to quality requirements and deadlines.',
      icon: Calendar,
    },
    {
      year: '2022 – 2026',
      title: 'B.Tech in Computer Science',
      company: 'ABES Engineering College',
      description: 'Pursuing a Bachelor of Technology in Computer Science with a focus on software development, systems, cloud, and emerging DevOps practices.',
      icon: MapPin,
    },
  ];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Build End-to-End',
      description: 'I enjoy working across the product lifecycle, from polished interfaces and APIs to deployment and the systems that keep them running.',
    },
    {
      icon: Code,
      title: 'Understand the Systems',
      description: 'Containers, servers, networking, and CI/CD are not an afterthought; they are how an application becomes a dependable product.',
    },
    {
      icon: MapPin,
      title: 'Learn by Building',
      description: 'I prefer understanding how things work internally, then applying that knowledge in real projects and practical experiments.',
    },
  ];

  const certifications = [
    {
      name: 'Programming Essentials In Python Programming',
      issuer: 'Cisco NetAcad • 29/12/2023',
      icon: Award,
    },
    {
      name: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS • 05/02/2025',
      icon: Award,
    },
    {
      name: 'Cloud Computing Fundamentals',
      issuer: 'IBM • 16/08/2025',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="font-mono text-lg mb-6">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 text-neutral-200 leading-relaxed">
                  <Typewriter
                    text="Hello, I'm Sayed Abbas Raza — building products end-to-end."
                    delay={30}
                    className="text-primary-500 font-semibold block mb-4"
                  />
                  <p>
                    I'm a Full-Stack Developer who enjoys building complete products rather than staying confined to a single layer of the stack. My current work revolves around React, Next.js, Node.js, Express, databases, authentication, APIs, and modern deployment platforms.
                  </p>
                  <p>
                    Over time, I found myself increasingly interested in what happens underneath the application itself. Servers, Linux, networking, containers, deployment, and CI/CD started making more sense to me than they initially seemed to. That curiosity is what pulled me toward DevOps and cloud engineering.
                  </p>
                  <p>
                    I'm currently pursuing a B.Tech in Computer Science at ABES Engineering College. Alongside academics, I've worked on real-world web projects and gained professional experience through roles involving full-stack development and project management at Adporate Commercials.
                  </p>
                  <p className="text-primary-500 font-medium">
                    My current technical focus sits at the intersection of application development and infrastructure: building applications with modern full-stack technologies, containerizing them with Docker, working with Linux and servers, understanding networking, and experimenting with CI/CD using tools such as Jenkins.
                  </p>
                  <p>
                    I value learning by building. My goal is to become an engineer who can not only build the application, but also understand how it is deployed, connected, secured, and kept running.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats + Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Status</span>
                    <span className="text-primary-500 font-mono">Open for opportunities and full-time roles</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cloud Platforms</span>
                    <span className="text-primary-500 font-mono">AWS, Azure, Vercel, Netlify</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Projects</span>
                    <span className="text-primary-500 font-mono">2 full-stack + DevOps experiments</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">CGPA</span>
                    <span className="text-primary-500 font-mono">7.9 / 10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Location</span>
                    <span className="text-primary-500 font-mono">Crossing Republik, Ghaziabad</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Primary Focus</span>
                    <span className="text-primary-500 font-mono">Full-Stack Development + DevOps &amp; Cloud</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Full-Stack Web Development',
                    'Modern React & Next.js Applications',
                    'Backend & API Development',
                    'Containerization with Docker',
                    'Linux & Server Management',
                    'Networking & Deployment',
                    'CI/CD & Jenkins',
                    'Cloud & Infrastructure Fundamentals',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => {
                    const IconComponent = cert.icon;
                    return (
                      <div
                        key={cert.name}
                        className="flex items-start space-x-3 p-3 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-primary-500/40 transition-colors"
                      >
                        <IconComponent size={18} className="text-accent-500 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-neutral-200 text-sm font-medium">{cert.name}</div>
                          <div className="text-neutral-400 text-xs">{cert.issuer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Career Timeline
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              My journey through full-stack development, product delivery, and growing infrastructure expertise
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-bg-elevated border border-neutral-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors shadow-card">
                        <div className="font-mono text-accent-500 text-sm mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl text-neutral-200 mb-1">{item.title}</h3>
                        <div className="text-primary-500 font-medium mb-3">{item.company}</div>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Tech Philosophy
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Core principles that guide my approach to DevOps and cloud engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-200 mb-4">{point.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
