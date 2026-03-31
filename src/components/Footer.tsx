import React from "react";
import LOGO from "../assets/LOGO.png";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={LOGO} alt="Zilling" className="h-16 w-auto object-contain mb-4" />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Zilling is an AI solutions agency helping teams automate workflows,
              deploy intelligent assistants, and build products that scale.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => onNavigate?.("services")} className="hover:text-cyan-300">AI Web Development</button></li>
              <li><button onClick={() => onNavigate?.("services")} className="hover:text-cyan-300">Custom Software</button></li>
              <li><button onClick={() => onNavigate?.("services")} className="hover:text-cyan-300">Process Automation</button></li>
              <li><button onClick={() => onNavigate?.("services")} className="hover:text-cyan-300">AI Call Agents</button></li>
              <li><button onClick={() => onNavigate?.("services")} className="hover:text-cyan-300">Mobile Apps</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => onNavigate?.("about")} className="hover:text-cyan-300">About</button></li>
              <li><button onClick={() => onNavigate?.("pricing")} className="hover:text-cyan-300">Pricing</button></li>
              <li><button onClick={() => onNavigate?.("portfolio")} className="hover:text-cyan-300">Portfolio</button></li>
              <li><button onClick={() => onNavigate?.("contact")} className="hover:text-cyan-300">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>© {year} Zilling. All rights reserved.</p>
          <p>AI-first product and automation partner.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
