import React from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

interface PricingPageProps {
  onNavigate?: (page: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const plans = [
    {
      title: "Starter",
      price: "₹45,000",
      subtitle: "one-time project",
      timeline: "2-3 weeks",
      description: "Good for early-stage businesses starting their first AI workflow.",
      features: [
        "1 workflow or lightweight AI feature",
        "Basic integration (1 tool)",
        "Testing + launch support",
        "7 days post-launch support",
      ],
      cta: "Choose Starter",
      highlight: false,
    },
    {
      title: "Growth",
      price: "₹95,000",
      subtitle: "one-time project",
      timeline: "4-6 weeks",
      description: "Most popular for SMBs automating operations and lead handling.",
      features: [
        "Up to 3 workflows",
        "CRM/API integration",
        "Basic analytics dashboard",
        "21 days optimization support",
      ],
      cta: "Choose Growth",
      highlight: true,
    },
    {
      title: "Scale",
      price: "₹1,85,000",
      subtitle: "starting price",
      timeline: "6-10 weeks",
      description: "For teams needing custom software + AI automation together.",
      features: [
        "Custom module or portal",
        "Advanced automation setup",
        "Priority sprint delivery",
        "30 days support + handover",
      ],
      cta: "Book Scale Consultation",
      highlight: false,
    },
  ];

  const serviceBreakdown = [
    {
      service: "AI-Powered Website",
      starter: "₹35k - ₹60k",
      growth: "₹60k - ₹1.2L",
      scale: "₹1.2L+",
    },
    {
      service: "Custom Software Development",
      starter: "₹75k - ₹1.2L",
      growth: "₹1.2L - ₹2.5L",
      scale: "₹2.5L+",
    },
    {
      service: "Business Process Automation",
      starter: "₹40k - ₹70k",
      growth: "₹70k - ₹1.5L",
      scale: "₹1.5L+",
    },
    {
      service: "AI Call Agent Setup",
      starter: "₹60k - ₹90k",
      growth: "₹90k - ₹1.8L",
      scale: "₹1.8L+",
    },
    {
      service: "Mobile App Development",
      starter: "₹90k - ₹1.5L",
      growth: "₹1.5L - ₹3L",
      scale: "₹3L+",
    },
    {
      service: "API Engineering",
      starter: "₹25k - ₹50k",
      growth: "₹50k - ₹95k",
      scale: "₹95k+",
    },
  ];

  const addOns = [
    { item: "AMC / Maintenance", price: "₹8,000 - ₹25,000 / month" },
    { item: "Cloud & DevOps management", price: "₹12,000 - ₹35,000 / month" },
    { item: "AI model monitoring", price: "₹10,000 - ₹30,000 / month" },
    { item: "Dedicated developer", price: "₹55,000 - ₹1,20,000 / month" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-300 text-sm font-medium">Pricing (INR)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Affordable, Indian market-aligned pricing</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Structured pricing similar to professional tech agencies. Final quote depends on scope, integrations, and timeline.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-cyan-400/50 bg-cyan-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h2 className="text-2xl font-semibold text-white mb-1">{plan.title}</h2>
              <p className="text-3xl font-bold text-cyan-300 mb-1">{plan.price}</p>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">{plan.subtitle}</p>
              <p className="text-sm text-gray-400 mb-4">Timeline: {plan.timeline}</p>
              <p className="text-gray-300 mb-5">{plan.description}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-cyan-300 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/918799253030"
                className={`w-full px-5 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                  plan.highlight
                    ? "bg-cyan-500 hover:bg-cyan-400 text-gray-950"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Service-wise pricing breakdown</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid grid-cols-4 px-5 py-4 border-b border-white/10 text-sm font-semibold text-gray-300 bg-white/5">
              <p>Service</p>
              <p>Starter</p>
              <p>Growth</p>
              <p>Scale</p>
            </div>
            {serviceBreakdown.map((item) => (
              <div key={item.service} className="grid grid-cols-4 gap-4 px-5 py-4 border-b border-white/10 last:border-b-0 text-sm">
                <p className="text-gray-200">{item.service}</p>
                <p className="text-gray-300">{item.starter}</p>
                <p className="text-cyan-300">{item.growth}</p>
                <p className="text-gray-300">{item.scale}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">All prices are indicative and exclude GST and third-party usage costs (cloud, telephony, LLM API).</p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Optional add-ons & retainers</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            {addOns.map((addOn) => (
              <div key={addOn.item} className="flex items-center justify-between px-5 py-4 border-b border-white/10 last:border-b-0">
                <p className="text-gray-200">{addOn.item}</p>
                <p className="text-cyan-300 font-semibold">{addOn.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/918799253030"
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold inline-flex items-center gap-2 transition-colors"
            >
              Request Custom Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

