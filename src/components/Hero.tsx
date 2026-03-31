import React from "react";
import { ArrowRight, Bot, Brain, Workflow } from "lucide-react";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.14),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.14),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="inline-flex items-center px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
              AI Agency for Growth-Stage Businesses
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Build faster with
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {" "}AI systems, apps, and automations
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
              We design and ship practical AI solutions that reduce manual work,
              improve response times, and create better customer experiences across web,
              mobile, and operations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/918799253030"
              className="px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Book Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
              <button
                onClick={() => onNavigate?.("portfolio")}
                className="px-7 py-3.5 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                View Case Studies
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">30-60%</p>
                <p className="text-xs text-gray-400 mt-1">Ops time reduction</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-gray-400 mt-1">AI support coverage</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold text-white">4-8 wks</p>
                <p className="text-xs text-gray-400 mt-1">Pilot delivery window</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gray-900/70 backdrop-blur-sm p-8">
            <h2 className="text-white text-xl font-semibold mb-6">What we help you launch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Workflow Automations</p>
                  <p className="text-sm text-gray-400 mt-1">Lead routing, data updates, ticket triage, and reporting without manual bottlenecks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-300">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">AI Call & Chat Agents</p>
                  <p className="text-sm text-gray-400 mt-1">Always-on assistants for support, qualification, booking, and follow-ups.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-lg bg-purple-500/15 text-purple-300">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">AI-Enabled Platforms</p>
                  <p className="text-sm text-gray-400 mt-1">Web and mobile products with embedded intelligence and measurable business impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

