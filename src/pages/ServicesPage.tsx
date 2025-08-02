import React from 'react';
import { Globe, Bot, Phone, Smartphone, ArrowRight, Sparkles, Code, Database, Cloud, Zap } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Cutting-edge web applications with modern frameworks, responsive design, and lightning-fast performance.',
      features: ['React/Next.js', 'TypeScript', 'Cloud Deployment', 'SEO Optimized'],
      gradient: 'from-cyan-500 to-blue-500',
      price: 'Starting from $2,999',
      timeline: '2-4 weeks'
    },
    {
      icon: Bot,
      title: 'AI Automations',
      description: 'Intelligent automation solutions that streamline workflows and boost productivity with machine learning.',
      features: ['Process Automation', 'ML Integration', 'Data Analytics', 'Custom AI Models'],
      gradient: 'from-purple-500 to-pink-500',
      price: 'Starting from $4,999',
      timeline: '3-6 weeks'
    },
    {
      icon: Phone,
      title: 'AI Call Agents',
      description: 'Advanced conversational AI agents that handle customer interactions with human-like intelligence.',
      features: ['Natural Language', '24/7 Availability', 'Multi-language', 'CRM Integration'],
      gradient: 'from-green-500 to-cyan-500',
      price: 'Starting from $3,999',
      timeline: '2-5 weeks'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Push Notifications', 'Offline Support'],
      gradient: 'from-orange-500 to-red-500',
      price: 'Starting from $5,999',
      timeline: '4-8 weeks'
    }
  ];

  const additionalServices = [
    { icon: Code, title: 'Custom Software', description: 'Tailored software solutions for your unique business needs' },
    { icon: Database, title: 'Database Design', description: 'Scalable and secure database architecture' },
    { icon: Cloud, title: 'Cloud Migration', description: 'Seamless transition to cloud infrastructure' },
    { icon: Zap, title: 'API Development', description: 'Robust APIs for seamless integrations' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Our Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Transform Your Business
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            From cutting-edge web applications to intelligent AI solutions, we deliver technology that drives growth and innovation.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="interactive group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-xl mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-cyan-400 font-semibold">{service.price}</p>
                      <p className="text-gray-500 text-sm">{service.timeline}</p>
                    </div>
                  </div>

                  <button className="interactive w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Additional Services
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive solutions for all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="interactive group p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-3 bg-cyan-500/20 rounded-lg mb-4 inline-block">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;