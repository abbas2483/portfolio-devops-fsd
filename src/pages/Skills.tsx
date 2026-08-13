import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Cloud, Container, Code, Database, Terminal as TerminalIcon, Server } from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '../data/portfolio';

export const Skills = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  const focusTerminalInput = () => {
    requestAnimationFrame(() => terminalInputRef.current?.focus());
  };

  const categoryVisuals = {
    development: { icon: Code, color: 'text-green-500' },
    cloud: { icon: Cloud, color: 'text-blue-500' },
    containers: { icon: Container, color: 'text-blue-400' },
    os: { icon: TerminalIcon, color: 'text-purple-500' },
    devops: { icon: Code, color: 'text-green-500' },
    networking: { icon: Server, color: 'text-orange-500' },
    database: { icon: Database, color: 'text-red-500' },
    softskills: { icon: Database, color: 'text-pink-500' },
  };

  const categories = SKILL_CATEGORIES.map((category) => ({
    ...category,
    ...categoryVisuals[category.id],
    skills: category.skills.map((skill) =>
      typeof skill === 'string'
        ? SKILLS.find((item) => item.name === skill)!
        : skill,
    ),
  }));

  const commands = {
    help: [
      'Available commands:',
      '  ls <category>     - List skills in a category',
      '  levels            - Show proficiency levels',
      '  clear             - Clear terminal',
      '  help              - Show this help',
    ],
    levels: [
      'Proficiency Levels:',
      '  Beginner  (< 50%)  - Basic understanding',
      '  Intermediate (60%) - Practical experience',
      '  Advanced   (75%)   - Production usage',
      '  Expert     (85%+)  - Deep expertise',
    ],
    clear: () => setTerminalOutput([]),
    default: (input: string) => [
      `Command not found: ${input}`,
      'Type "help" for available commands.',
    ],
  };

  const executeCommand = (input: string) => {
    setIsProcessing(true);
    const cmd = input.toLowerCase().trim();
    const args = cmd.split(' ');
    const mainCmd = args[0];

    setTimeout(() => {
      let output: string[] = [];

      switch (mainCmd) {
        case 'help':
          output = commands.help;
          break;
        case 'levels':
          output = commands.levels;
          break;
        case 'clear':
          commands.clear();
          setCurrentInput('');
          setIsProcessing(false);
          focusTerminalInput();
          return;
        case 'ls':
          const categoryId = args[1];
          const found = categories.find((c) => c.id === categoryId);
          if (categoryId && found) {
            output = [
              `${found.title}:`,
              ...found.skills.map((s) => `  ${s.name} (${s.level}%)`),
            ];
          } else {
            output = [
              'Available categories:',
              ...categories.map((c) => `  ${c.id} - ${c.title}`),
            ];
          }
          break;
        default:
          output = commands.default(cmd);
      }

      setTerminalOutput((prev) => [...prev, `$ ${input}`, ...output, '']);
      setCurrentInput('');
      setIsProcessing(false);
      focusTerminalInput();
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim() && !isProcessing) {
      executeCommand(currentInput);
    }
  };

  return (
    <div className="min-h-screen bg-bg-page flex flex-col">
      {/* Terminal Header */}
      <TerminalHeader
        command="skills --stack fullstack,devops,cloud"
        description="Exploring full-stack development, DevOps, cloud, and infrastructure skills"
      />

      {/* Skills Categories */}
      <section className="order-2 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Technical Expertise
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Full-stack development backed by practical cloud, deployment, infrastructure, and automation experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden"
                >
                  {/* Category Header */}
                  <div className="bg-bg-elevated border-b border-neutral-700 p-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-neutral-800 ${category.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="font-mono text-xl font-semibold text-primary-500">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.4,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-bg-elevated border border-neutral-700 p-4 rounded-lg hover:border-primary-500/50 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="font-mono font-medium text-neutral-200">
                              {skill.name}
                            </span>
                          </div>

                          {/* Proficiency Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-neutral-400">Proficiency</span>
                              <span className="text-primary-500 font-mono">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-neutral-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                  duration: 0.8,
                                }}
                                viewport={{ once: true }}
                                className="h-2 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="order-1 py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Interactive Skill Explorer
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Use terminal commands to explore my skills in detail
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-bg-elevated border border-neutral-700 rounded-xl overflow-hidden shadow-card">
              {/* Terminal Header */}
              <div className="bg-bg-surface border-b border-neutral-700 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-primary-500" />
                </div>
                <span className="font-mono text-sm text-neutral-400">abbas@portfolio:~$</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm bg-bg-page h-96 overflow-y-auto">
                {terminalOutput.length === 0 && (
                  <div className="text-neutral-400">
                    <Typewriter
                      text="Welcome to Abbas's Skills Explorer. Type 'help' to see available commands."
                      delay={30}
                      className="block"
                    />
                    <div className="mt-4">
                      <span className="text-accent-500">$</span>
                      <span className="text-neutral-400 ml-2">ready for input...</span>
                    </div>
                  </div>
                )}

                {terminalOutput.map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      line.startsWith('$')
                        ? 'text-accent-500'
                        : line.includes('Command not found')
                        ? 'text-red-500'
                        : 'text-neutral-200'
                    }`}
                  >
                    {line}
                  </div>
                ))}

                {isProcessing && (
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-500">$</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                )}

                {/* Input Line */}
                <div className="flex items-center">
                  <span className="text-accent-500 mr-2">$</span>
                  <input
                    ref={terminalInputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-transparent text-primary-500 outline-none placeholder-neutral-600 font-mono"
                    placeholder={isProcessing ? 'processing...' : 'enter command...'}
                    disabled={isProcessing}
                  />
                  {!isProcessing && (
                    <div className="w-2 h-5 bg-primary-500 animate-pulse ml-1" />
                  )}
                </div>
              </div>
            </div>

            {/* Quick Commands */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { cmd: 'help', desc: 'Show commands' },
                { cmd: 'ls cloud', desc: 'Cloud skills' },
                { cmd: 'ls development', desc: 'Full-stack skills' },
                { cmd: 'levels', desc: 'Proficiency guide' },
              ].map((item) => (
                <button
                  key={item.cmd}
                  onClick={() => {
                    setCurrentInput(item.cmd);
                    focusTerminalInput();
                  }}
                  className="p-3 bg-bg-elevated border border-neutral-700 rounded-lg text-left hover:border-primary-500/50 transition-colors group"
                >
                  <div className="font-mono text-sm text-primary-500 group-hover:text-primary-400">
                    $ {item.cmd}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">{item.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
