import React from "react";
import { Award, CheckCircle2, Code, Sparkles, Target, Users, Zap } from "lucide-react";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Code,
      title: "Engineering Quality",
      description: "We build maintainable systems that perform under real production load.",
    },
    {
      icon: Users,
      title: "Business Partnership",
      description: "We align with your business goals, not just technical specifications.",
    },
    {
      icon: Target,
      title: "Outcome Focus",
      description: "Every implementation is tied to measurable KPIs and adoption metrics.",
    },
    {
      icon: Zap,
      title: "Execution Speed",
      description: "Lean workflows and rapid iterations from discovery to deployment.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-medium">About Zilling</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Your AI implementation partner</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are a product-minded AI agency helping organizations turn automation ideas into reliable systems.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">How we work</h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              Since 2025, we&apos;ve helped teams modernize customer interactions and internal operations using AI. Our process is designed to deliver quickly while keeping architecture clean and scalable.
            </p>
            <p className="text-gray-400 leading-relaxed mb-7">
              We combine consulting clarity with engineering execution, so your roadmap and implementation stay tightly connected.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Structured discovery before development</p>
              <p className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Weekly sprint demos and transparent updates</p>
              <p className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> Post-launch optimization and support</p>
            </div>
            <div className="mt-7 flex items-center gap-5 text-gray-300">
              <div className="inline-flex items-center gap-2"><Award className="w-5 h-5 text-amber-300" /> Trusted delivery team</div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Team collaboration"
              className="rounded-2xl border border-white/10"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-500/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
                <div className="inline-flex p-3 rounded-lg bg-cyan-500/15 text-cyan-300 mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate?.("contact")}
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-colors"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
