import React from "react";
import { ArrowRight, Bot, Code2, Globe, Phone, Smartphone, Sparkles } from "lucide-react";

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Globe,
      title: "AI-Powered Web Development",
      description:
        "High-performance websites and web apps built to convert, scale, and integrate with your AI stack.",
      features: ["React/Next.js", "Analytics & SEO", "CMS / CRM Integration", "Cloud Deployment"],
      price: "Starting at ₹35,000",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Tailored software systems designed around your exact operations, workflows, and growth goals.",
      features: ["Business Portals", "Admin Dashboards", "ERP/CRM Integrations", "Scalable Architecture"],
      price: "Starting at ₹75,000",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Bot,
      title: "Business Process Automation",
      description:
        "Automate repetitive workflows across operations, support, and sales with practical AI automation.",
      features: ["Workflow Mapping", "Data Sync", "Approval Flows", "Automation Monitoring"],
      price: "Starting at ₹40,000",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Phone,
      title: "AI Call Agents",
      description:
        "Deploy voice agents that answer calls, qualify leads, and schedule follow-ups around the clock.",
      features: ["Human-like Voice", "Call Routing", "Multi-language", "CRM Logging"],
      price: "Starting at ₹60,000",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile apps with AI-assisted experiences and robust backend integrations.",
      features: ["iOS & Android", "React Native", "Notifications", "Offline-First UX"],
      price: "Starting at ₹90,000",
      gradient: "from-orange-500 to-rose-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-5">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-medium">Core Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            End-to-end AI implementation services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Transparent starting prices in INR so you can plan your next AI project with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-gray-900/60 p-7 hover:border-cyan-400/40 transition-colors"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-5`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
              <p className="text-cyan-300 font-semibold mb-6">{service.price}</p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <button
                    key={feature}
                    type="button"
                    onClick={() => onNavigate?.("contact")}
                    className="text-left text-sm text-gray-300 hover:text-cyan-200 transition-colors"
                  >
                    • {feature}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium"
                >
                  Discuss this service
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate?.("pricing")}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  View full pricing
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
