import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 bg-brand-lavender/30 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Content (Condensed Revolution CTA) */}
          <div className="lg:w-1/2 flex flex-col justify-center">
             <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-secondary uppercase bg-pink-100 rounded-full w-fit border border-pink-200 shadow-sm">
               Start Hiring Now
             </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight font-display">
              The Revolution in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Recruiting is Here.
              </span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Stop sifting through resumes. Start building your dream team with the power of autonomous agents that source, screen, and schedule for you.
            </p>
            
            <div className="relative">
                {/* Chat Bubble Simulation */}
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-xl shadow-slate-200/50 border border-slate-200 max-w-sm mb-4 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white text-[10px] font-bold">AI</div>
                        <span className="text-xs font-bold text-slate-900">AI Recruiter</span>
                    </div>
                    <p className="text-sm text-slate-600">Hi Alex! 👋 Our new engineering role just dropped. Want me to add you to the shortlist?</p>
                </div>

                 <div className="bg-slate-900 p-4 rounded-2xl rounded-tr-none shadow-xl shadow-slate-900/20 max-w-sm ml-auto transform hover:scale-105 transition-transform duration-300 border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 justify-end">
                         <span className="text-xs font-bold text-white">Alex Morgan</span>
                        <div className="w-6 h-6 bg-slate-700 rounded-full overflow-hidden border border-white/20">
                             <img src="https://ui-avatars.com/api/?name=Alex+M&background=000&color=fff" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <p className="text-sm text-slate-200 font-medium">Yes please! I've been waiting for this. Add it now 🙌</p>
                </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-900/10 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Demo</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@company.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label htmlFor="fname" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">First Name</label>
                        <input 
                            type="text" 
                            id="fname" 
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none"
                        />
                    </div>
                     <div>
                        <label htmlFor="lname" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Last Name</label>
                        <input 
                            type="text" 
                            id="lname" 
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">How can we help?</label>
                    <textarea 
                        id="message" 
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none resize-none"
                    ></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2">
                   <Mail size={18} /> Get Access
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                    By clicking send you agree to our <a href="#" className="underline hover:text-brand-primary">Terms</a> and <a href="#" className="underline hover:text-brand-primary">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}