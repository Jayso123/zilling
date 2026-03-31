import React from "react";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code,
  Code2,
  Database,
  Globe,
  Phone,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Globe,
      title: "AI-Powered Web Development",
      description:
        "Design and development of conversion-focused web platforms with integrated AI experiences.",
      features: ["Modern Frontend", "API Integrations", "SEO + Analytics", "Scale-ready Infrastructure"],
      bestFor: "B2B websites, internal dashboards, customer portals",
      price: "Starting at ₹35,000",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "Purpose-built software tailored to your business process, data model, and growth roadmap.",
      features: ["Internal Tools", "Role-based Access", "Workflow Modules", "Long-term Maintainability"],
      bestFor: "Teams outgrowing spreadsheets and off-the-shelf tools",
      price: "Starting at ₹75,000",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Bot,
      title: "Business Process Automation",
      description:
        "Automation systems that remove manual work across operations, sales, and support workflows.",
      features: ["Workflow Design", "Agentic Automations", "Data Syncing", "Monitoring & Alerts"],
      bestFor: "Teams managing repetitive tickets, follow-ups, and data operations",
      price: "Starting at ₹40,000",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Phone,
      title: "AI Call Agents",
      description:
        "Deploy voice-first assistants for inbound support, lead qualification, and appointment booking.",
      features: ["Natural Conversations", "Fallback Routing", "CRM Notes", "Multilingual Flows"],
      bestFor: "Service teams with high inbound call volumes",
      price: "Starting at ₹60,000",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Cross-platform mobile products built with robust backend integrations and reliable performance.",
      features: ["iOS & Android", "Secure Authentication", "Push Workflows", "Offline Support"],
      bestFor: "Businesses launching customer-facing or field-operation apps",
      price: "Starting at ₹90,000",
      gradient: "from-orange-500 to-rose-500",
    },
  ];

  const additionalServices = [
    {
      icon: Code,
      title: "MVP Development",
      description: "Fast launch of early product versions for validation and investor demos.",
      price: "From ₹55,000",
    },
    {
      icon: Database,
      title: "Data & Knowledge Systems",
      description: "Structured data layers for reporting, retrieval, and AI enablement.",
      price: "From ₹35,000",
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Migration and modernization for reliability and scale.",
      price: "From ₹45,000",
    },
    {
      icon: Zap,
      title: "API Engineering",
      description: "Secure API layers for reliable internal and external integrations.",
      price: "From ₹25,000",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:38px_38px] opacity-25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-medium">Services</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI services built for real business outcomes</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Clear INR pricing, practical execution, and a service mix designed for growing teams.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-7">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-cyan-400/40 transition-colors">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-5`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <p className="text-cyan-300 font-semibold mb-5">{service.price}</p>

              <div className="grid grid-cols-2 gap-2 mb-5">
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

              <div className="rounded-lg bg-gray-950/60 border border-white/10 px-4 py-3 mb-5">
                <p className="text-xs uppercase tracking-wide text-gray-500">Best for</p>
                <p className="text-sm text-gray-300 mt-1">{service.bestFor}</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium"
                >
                  Get implementation plan
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate?.("pricing")}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Pricing details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Supporting capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                role="button"
                tabIndex={0}
                onClick={() => onNavigate?.("contact")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onNavigate?.("contact");
                  }
                }}
                className="rounded-xl border border-white/10 bg-white/5 p-5 cursor-pointer hover:border-cyan-400/40 transition-colors"
              >
                <div className="inline-flex p-2.5 rounded-lg bg-cyan-500/15 text-cyan-300 mb-3">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                <p className="text-sm text-cyan-300">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
