import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="h-20 flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 text-left"
          >
            {/* <span className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 pt-3 px-3 pb-2 shadow-[0_0_20px_rgba(6,182,212,0.15)]"> */}
            <img
              src="/LOGO.png"
              alt="Zilling"
              className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
            />
            {/* </span> */}
          </button>

          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918799253030"
                className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-colors"
              >
                Book Strategy Call
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 text-gray-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-5">
            <div className="rounded-2xl border border-white/10 bg-gray-900/95 p-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    currentPage === item.id
                      ? "bg-cyan-500/15 text-cyan-300"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://wa.me/918799253030"
                className="block w-full text-center mt-1 px-4 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-colors"
              >
                Book Strategy Call
              </a>
              <a
                href="https://wa.me/918799253030"
                className="block w-full text-center mt-1 px-4 py-3 rounded-lg border border-white/15 text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                WhatsApp: +91 8799253030
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
