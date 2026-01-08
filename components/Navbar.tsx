import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav 
        className={`transition-all duration-500 ease-in-out border ${
          isScrolled 
            ? 'bg-brand-dark/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50 py-3 px-6 rounded-full w-full max-w-5xl' 
            : 'bg-transparent border-transparent py-4 px-4 w-full max-w-7xl'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]">
              <Bot size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display">
              AI Trials
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#features" text="Features" />
            <NavLink href="#impact" text="Impact" />
            <NavLink href="#benefits" text="Benefits" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="group relative px-6 py-2 rounded-full overflow-hidden bg-white text-brand-dark font-semibold text-sm transition-transform active:scale-95">
              <span className="relative z-10 flex items-center gap-1 group-hover:gap-2 transition-all">
                Get Started <ArrowUpRight size={16} />
              </span>
              <div className="absolute inset-0 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-brand-primary">Features</a>
          <a href="#impact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-brand-primary">Impact</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-brand-primary">Pricing</a>
          <button className="px-8 py-3 bg-brand-primary rounded-full text-white text-xl font-bold">
            Get Started
          </button>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white">
            <X size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <a 
      href={href} 
      className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
    >
      {text}
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-1/2"></span>
    </a>
  );
}