import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#0a0c10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
             <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-accent uppercase bg-brand-accent/10 rounded-full w-fit border border-brand-accent/20">
               Get in touch
             </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight font-display">
              Increase Quality by <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-purple">
                Talking
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> With AI
            </h2>
            <p className="text-lg text-slate-400 mb-12">
              Converso helps brands turn real-time conversations into hires using personalized, two-way messaging at scale.
            </p>
            
            <div className="relative">
                {/* Chat Bubble Simulation */}
                <div className="bg-[#161b22] p-4 rounded-2xl rounded-tl-none shadow-xl border border-white/5 max-w-sm mb-4 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">AI</div>
                        <span className="text-xs font-bold text-white">AI Recruiter</span>
                    </div>
                    <p className="text-sm text-slate-300">Hi Alex! 👋 Our new engineering role just dropped. Want me to add you to the shortlist?</p>
                </div>

                 <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-xl max-w-sm ml-auto transform hover:scale-105 transition-transform duration-300 text-brand-dark">
                    <div className="flex items-center gap-2 mb-2 justify-end">
                         <span className="text-xs font-bold text-slate-900">Alex Morgan</span>
                        <div className="w-6 h-6 bg-slate-200 rounded-full overflow-hidden">
                             <img src="https://ui-avatars.com/api/?name=Alex+M&background=000&color=fff" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <p className="text-sm text-slate-800 font-medium">Yes please! I've been waiting for this. Add it now 🙌</p>
                </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#161b22] rounded-3xl p-8 md:p-10 shadow-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Reach candidates at the right time</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@company.com" 
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white placeholder-slate-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label htmlFor="fname" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">First Name</label>
                        <input 
                            type="text" 
                            id="fname" 
                            className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white placeholder-slate-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none"
                        />
                    </div>
                     <div>
                        <label htmlFor="lname" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Last Name</label>
                        <input 
                            type="text" 
                            id="lname" 
                            className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white placeholder-slate-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">How can we help?</label>
                    <textarea 
                        id="message" 
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-white/10 text-white placeholder-slate-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none resize-none"
                    ></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2">
                   <Mail size={18} /> Send Message
                </button>
                
                <p className="text-center text-xs text-slate-500 mt-4">
                    By clicking send you agree to our <a href="#" className="underline hover:text-white">Terms</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}