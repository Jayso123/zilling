import React from 'react';
import { ArrowRight, Code, Zap, Smartphone, Bot } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="p-3 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 animate-pulse">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-3 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <Bot className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-3 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-500/30 animate-pulse" style={{ animationDelay: '1s' }}>
            <Smartphone className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-green-500/20 rounded-lg backdrop-blur-sm border border-green-500/30 animate-pulse" style={{ animationDelay: '1.5s' }}>
            <Zap className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          ZILLING
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          Next-Generation IT Solutions
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          We craft cutting-edge digital experiences with AI-powered automation, 
          intelligent call agents, and revolutionary web & mobile applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => onNavigate?.('services')}
            className="interactive group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate?.('portfolio')}
            className="interactive px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* 3D floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-20 animate-spin" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce" />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 transform rotate-45 opacity-20 animate-pulse" />
    </section>
  );
};

export default Hero;