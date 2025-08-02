import React from "react";
import {
  Globe,
  Bot,
  Phone,
  Smartphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// import ServicesPage from "../pages/ServicesPage";

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Cutting-edge web applications with modern frameworks, responsive design, and lightning-fast performance.",
      features: [
        "React/Next.js",
        "TypeScript",
        "Cloud Deployment",
        "SEO Optimized",
      ],
      gradient: "from-cyan-500 to-blue-500",
      delay: "0s",
    },
    {
      icon: Bot,
      title: "AI Automations",
      description:
        "Intelligent automation solutions that streamline workflows and boost productivity with machine learning.",
      features: [
        "Process Automation",
        "ML Integration",
        "Data Analytics",
        "Custom AI Models",
      ],
      gradient: "from-purple-500 to-pink-500",
      delay: "0.2s",
    },
    {
      icon: Phone,
      title: "AI Call Agents",
      description:
        "Advanced conversational AI agents that handle customer interactions with human-like intelligence.",
      features: [
        "Natural Language",
        "24/7 Availability",
        "Multi-language",
        "CRM Integration",
      ],
      gradient: "from-green-500 to-cyan-500",
      delay: "0.4s",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      features: [
        "iOS & Android",
        "React Native",
        "Push Notifications",
        "Offline Support",
      ],
      gradient: "from-orange-500 to-red-500",
      delay: "0.6s",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              Our Services
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            What We Build
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we deliver innovative solutions that
            transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="interactive group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: service.delay }}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                  <button className="interactive flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-2 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                
              </div>

              {/* 3D floating element */}
              <div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full opacity-60 animate-pulse`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
