import React from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

interface PortfolioPageProps {
  onNavigate?: (page: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const projects = [
    {
      title: "E-Commerce AI Assistant",
      category: "Web + AI",
      description: "Automated customer query handling and recommendation workflows for an online retail business.",
      impact: "42% faster support resolution",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "LLM APIs", "Stripe"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "AI Voice Support System",
      category: "AI Call Agent",
      description: "Voice assistant flow for inbound calls with fallback escalation and CRM note generation.",
      impact: "31% reduction in missed opportunities",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Speech Recognition", "Twilio", "NLP", "CRM APIs"],
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      title: "Operations Automation Suite",
      category: "Process Automation",
      description: "Internal automation layer for ticket triage, reporting, and SLA alerts across teams.",
      impact: "58% less manual operations time",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Workflow Engine", "PostgreSQL", "Dashboards"],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Restaurant Mobile Booking App",
      category: "Mobile App",
      description: "Cross-platform mobile booking and queue management experience with real-time updates.",
      impact: "2.3x increase in repeat bookings",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Maps API", "Push Notifications"],
      gradient: "from-orange-500 to-rose-500",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Active Clients" },
    { number: "24/7", label: "Automation Coverage" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-medium">Case Studies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Work that delivers measurable impact</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A selection of projects where we combined AI, engineering, and product strategy.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-white">{stat.number}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-400/40 transition-colors">
              <div className="relative h-56">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-45`} />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/35 border border-white/20 text-xs text-white">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-3 mb-4">
                  <p className="text-sm text-cyan-200">Impact: {project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate?.("contact")}
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium"
                >
                  Discuss similar project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Planning a new AI initiative?</h2>
          <p className="text-gray-300 mb-6">Let&apos;s define your pilot scope, success metrics, and delivery roadmap.</p>
          <a
            href="https://wa.me/918799253030"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-colors inline-flex items-center gap-2"
          >
            Book Discovery Session
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

