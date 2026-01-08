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
            ? 'bg-white/80 backdrop-blur-xl border-slate-200 shadow-lg shadow-purple-900/5 py-3 px-6 rounded-full w-full max-w-5xl' 
            : 'bg-transparent border-transparent py-4 px-4 w-full max-w-7xl'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-primary/30">
              <Bot size={18} />
            </div>
            <span className={`text-xl font-bold tracking-tight font-display transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              AI Trials
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <NavLink href="#features" text="Features" isScrolled={isScrolled} />
            <NavLink href="#impact" text="Impact" isScrolled={isScrolled} />
            <NavLink href="#benefits" text="Benefits" isScrolled={isScrolled} />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="group relative px-6 py-2 rounded-full overflow-hidden bg-brand-primary text-white font-semibold text-sm transition-transform active:scale-95 shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40">
              <span className="relative z-10 flex items-center gap-1 group-hover:gap-2 transition-all">
                Request a Demo <ArrowUpRight size={16} />
              </span>
              <div className="absolute inset-0 bg-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 hover:text-brand-primary">Features</a>
          <a href="#impact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 hover:text-brand-primary">Impact</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 hover:text-brand-primary">Pricing</a>
          <button className="px-8 py-3 bg-brand-primary rounded-full text-white text-xl font-bold shadow-xl shadow-brand-primary/30">
            Request a Demo
          </button>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900">
            <X size={32} />
          </button>
        </div>
      )}
    </div>
  );
}

function NavLink({ href, text, isScrolled }: { href: string; text: string; isScrolled: boolean }) {
  return (
    <a 
      href={href} 
      className={`px-4 py-2 text-sm font-medium transition-colors relative group ${isScrolled ? 'text-slate-600 hover:text-brand-primary' : 'text-slate-600 hover:text-brand-primary'}`}
    >
      {text}
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-1/2"></span>
    </a>
  );
}