import React from 'react';
import { Check } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    "Conversational Hiring Interface",
    "Agentic AI handles each stage",
    "Explains WHO & WHY clearly",
    "Apply to offer in minutes",
    "Full ATS Integration",
    "Bias Reduction Algorithms"
  ];

  return (
    <section id="benefits" className="py-20 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f1115] rounded-3xl p-8 md:p-16 relative overflow-hidden border border-white/10">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white font-display">
                The Revolution in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">Recruiting is Here.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Stop sifting through resumes. Start building your dream team with the power of autonomous agents.
              </p>
              <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg">
                Start Your Free Trial
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center">
                    <Check size={14} className="text-brand-accent" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}