import React from "react";
import { Brain, Cloud, Code2, Database, Shield, Workflow } from "lucide-react";

const TechStack: React.FC = () => {
  const technologies = [
    { name: "React + TypeScript", category: "Frontend", icon: Code2, color: "text-cyan-300" },
    { name: "Node + Python", category: "Backend", icon: Database, color: "text-green-300" },
    { name: "LLM Orchestration", category: "AI Layer", icon: Brain, color: "text-purple-300" },
    { name: "AWS / Cloud", category: "Infrastructure", icon: Cloud, color: "text-blue-300" },
    { name: "Security Controls", category: "Compliance", icon: Shield, color: "text-orange-300" },
    { name: "Workflow Engines", category: "Automation", icon: Workflow, color: "text-emerald-300" },
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built on a modern, secure stack</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Every delivery is designed for production reliability, observability, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors"
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-gray-800 mb-3 ${tech.color}`}>
                <tech.icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-white text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-400">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
