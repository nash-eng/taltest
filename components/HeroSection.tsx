import React from 'react';
import { Sparkles, ArrowRight, Search, Mic, Paperclip, CheckCircle, Bot } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-10 overflow-hidden bg-white">
      
      {/* Light Theme Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-purple-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-blue-200/40 rounded-full blur-[80px] animate-pulse-slow mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Brand Logo / Badge */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-100 bg-purple-50 text-brand-primary text-sm font-semibold tracking-wide shadow-sm">
               <Sparkles size={14} className="fill-current" />
               A Hiring Platform Built for the AI Era
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 font-display text-balance leading-[1.1]">
            Build your team with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Intelligent Agents.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            The first AI that autonomously sources, screens, and schedules. 
            Simply explain <span className="text-slate-900 font-semibold">who you need</span>, and let the agents execute the rest.
          </p>
          
          <div className="flex items-center gap-4 mb-16">
             <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl shadow-xl shadow-purple-600/20 hover:bg-purple-700 transition-all hover:-translate-y-1">
                Request A Demo
             </button>
          </div>

          {/* Professional Floating UI (Light Mode) */}
          <div className="w-full max-w-4xl perspective-1000 group">
            <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-purple-900/10 transition-all duration-700 transform hover:rotate-x-1 hover:scale-[1.005] overflow-hidden">
              
              {/* Header */}
              <div className="h-16 border-b border-slate-100 bg-white/50 backdrop-blur-md flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-lavender flex items-center justify-center text-brand-primary border border-purple-100">
                    <Bot />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">TalentBot</div>
                    <div className="text-xs text-green-500 font-medium flex items-center gap-1">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                       Online
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                   <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-8 flex flex-col gap-8 text-left h-[450px] overflow-y-auto relative bg-slate-50/50">
                 
                 {/* Message 1 (Hiring Manager) */}
                 <div className="flex gap-4 max-w-[80%]">
                    <img src="https://ui-avatars.com/api/?name=Jane+C&background=f3e8ff&color=7c3aed" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <div className="flex flex-col gap-1">
                      <div className="bg-white text-slate-700 p-5 rounded-2xl rounded-tl-none border border-slate-200 shadow-md shadow-slate-200/50 text-sm leading-relaxed">
                        <span className="block font-bold text-slate-900 mb-1">Jane Cooper</span>
                        I need a Senior Product Designer for the Fintech team. Ideally someone who has scaled a design system before and has 5+ years of experience.
                      </div>
                      <span className="text-xs text-slate-400 ml-2">10:42 AM</span>
                    </div>
                 </div>

                 {/* Message 2 (AI Agent) */}
                 <div className="flex gap-4 max-w-[90%] self-end flex-row-reverse animate-fade-in-up delay-300">
                    <div className="w-10 h-10 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 border-2 border-white">
                      <Sparkles size={18} fill="currentColor" />
                    </div>
                    <div className="flex flex-col gap-1 items-end w-full">
                      <div className="bg-white p-2 rounded-2xl rounded-tr-none border border-purple-200 shadow-xl shadow-purple-900/5 w-full">
                        <div className="p-4 bg-brand-lavender/30 rounded-xl mb-2 border border-purple-100/50">
                           <div className="flex items-center gap-2 mb-3 text-brand-primary text-sm font-bold">
                              <Search size={16} />
                              <span>Sourcing Candidates...</span>
                           </div>
                           <div className="h-1.5 w-full bg-purple-100 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-primary w-2/3 animate-shimmer"></div>
                           </div>
                        </div>
                        
                        <div className="space-y-3 p-2">
                           {/* Candidate Card 1 - Stronger definition */}
                           <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-brand-primary/30 shadow-sm hover:shadow-md transition-all cursor-pointer group/card">
                              <div className="flex items-center gap-4">
                                 <div className="relative">
                                    <img src="https://ui-avatars.com/api/?name=Robert+Fox&background=ffedd5&color=c2410c" alt="RF" className="w-10 h-10 rounded-full border border-slate-100" />
                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                       <CheckCircle size={12} className="text-brand-primary fill-white" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="text-sm font-bold text-slate-900">Robert Fox</div>
                                    <div className="text-xs text-slate-500">Ex-Stripe • 6 YOE</div>
                                 </div>
                              </div>
                              <span className="text-white text-xs font-bold px-3 py-1 bg-brand-secondary rounded-full shadow-lg shadow-brand-secondary/30">92% Match</span>
                           </div>

                           {/* Candidate Card 2 */}
                           <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-brand-primary/30 shadow-sm hover:shadow-md transition-all cursor-pointer group/card">
                              <div className="flex items-center gap-4">
                                 <div className="relative">
                                    <img src="https://ui-avatars.com/api/?name=Esther+H&background=dbeafe&color=1d4ed8" alt="EH" className="w-10 h-10 rounded-full border border-slate-100" />
                                 </div>
                                 <div>
                                    <div className="text-sm font-bold text-slate-900">Esther Howard</div>
                                    <div className="text-xs text-slate-500">Ex-Airbnb • 5 YOE</div>
                                 </div>
                              </div>
                              <span className="text-brand-primary text-xs font-bold px-3 py-1 bg-purple-100 rounded-full border border-purple-200">88% Match</span>
                           </div>
                        </div>
                        
                        <div className="mt-4 flex gap-3 px-2 pb-2">
                          <button className="text-xs bg-slate-900 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg">Schedule Interviews</button>
                          <button className="text-xs bg-white text-slate-600 px-4 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm">View All Matches</button>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 mr-2">10:43 AM</span>
                    </div>
                 </div>

              </div>

              {/* Input Area */}
              <div className="bg-white p-4 border-t border-slate-100">
                 <div className="relative flex items-center bg-slate-50 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-brand-primary/50 focus-within:bg-white focus-within:shadow-md transition-all">
                    <button className="text-slate-400 hover:text-slate-600 mr-3">
                       <Paperclip size={20} />
                    </button>
                    <input 
                      type="text" 
                      className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 text-sm font-medium"
                      placeholder="Reply to TalentBot..."
                    />
                    <button className="ml-3 p-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20">
                       <ArrowRight size={18} />
                    </button>
                 </div>
              </div>

            </div>
          </div>
          
          {/* Logos */}
          <div className="mt-20 w-full">
             <p className="text-sm text-slate-400 font-semibold uppercase tracking-widest mb-8">Trusted by Hiring Teams at</p>
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale mix-blend-multiply">
                <h3 className="text-2xl font-bold font-display text-slate-800">Acme Corp</h3>
                <h3 className="text-2xl font-bold font-display text-slate-800">GlobalBank</h3>
                <h3 className="text-2xl font-bold font-display text-slate-800">Stark Ind</h3>
                <h3 className="text-2xl font-bold font-display text-slate-800">Umbrella</h3>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}