import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const process = [
    {
      title: "Discovery & Audit",
      description: "We map your current workflows, customer journey, and technical constraints.",
    },
    {
      title: "AI Solution Blueprint",
      description: "We define architecture, integrations, milestones, and measurable success metrics.",
    },
    {
      title: "Build & Deploy",
      description: "Our team ships in sprints with weekly demos and transparent progress updates.",
    },
    {
      title: "Optimize & Scale",
      description: "We monitor outcomes, retrain where needed, and scale what performs best.",
    },
  ];

  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How we deliver outcomes</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              A practical engagement model built to move from idea to measurable impact quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-white text-lg font-semibold">Need an AI roadmap for your business?</p>
              <p className="text-gray-300 mt-1">Get a focused strategy session with recommendations you can act on immediately.</p>
            </div>
            <a
              href="https://wa.me/918799253030"
              className="px-6 py-3 rounded-lg bg-cyan-500 text-gray-950 font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-gray-300">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Clear scope before build</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Weekly delivery visibility</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Performance-focused implementation</span>
          </div>
        </div>
      </section>

      <TechStack />
    </div>
  );
};

export default HomePage;

