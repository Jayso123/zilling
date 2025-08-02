import React from "react";
import { Code, Heart } from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ZILLING
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses with cutting-edge technology solutions.
              From AI automation to mobile apps, we build the future.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate?.("services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Automations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  AI Call Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("services")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Mobile Apps
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate?.("about")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("portfolio")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.("contact")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Zilling. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-400 text-sm mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> by Zilling
            Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
