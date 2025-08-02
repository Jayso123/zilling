import React from 'react';
import { Code2, Database, Cloud, Cpu, Shield, Zap } from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'React', category: 'Frontend', icon: Code2, color: 'text-cyan-400' },
    { name: 'Node.js', category: 'Backend', icon: Database, color: 'text-green-400' },
    { name: 'Python', category: 'AI/ML', icon: Cpu, color: 'text-yellow-400' },
    { name: 'AWS', category: 'Cloud', icon: Cloud, color: 'text-orange-400' },
    { name: 'Docker', category: 'DevOps', icon: Shield, color: 'text-blue-400' },
    { name: 'GraphQL', category: 'API', icon: Zap, color: 'text-purple-400' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Powered by Modern Tech
          </h2>
          <p className="text-gray-400 text-lg">
            We use cutting-edge technologies to build scalable, secure, and performant solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="interactive group relative p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`inline-flex p-3 rounded-lg bg-gray-700/50 mb-4 group-hover:bg-gray-600/50 transition-colors ${tech.color}`}>
                  <tech.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;