import React from 'react';
import { Sparkles, ArrowRight, Search, Mic, Command, Radio, Send, Paperclip } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      
      {/* Abstract Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-purple/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-brand-accent/5 rounded-full blur-[80px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              Agentic Recruiting Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 font-display text-balance leading-[1.1]">
            Build your team with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-accent animate-shimmer bg-[length:200%_auto]">
              Intelligent Agents.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            The first AI that autonomously sources, screens, and schedules. 
            Simply explain <span className="text-white font-medium">who you need</span>, and let the agents execute the rest.
          </p>

          {/* Professional Floating UI */}
          <div className="w-full max-w-4xl perspective-1000 group">
            <div className="relative bg-[#161b22] border border-white/10 rounded-2xl shadow-2xl transition-all duration-700 transform hover:rotate-x-2 hover:scale-[1.01] shadow-black/50 overflow-hidden">
              
              {/* Header */}
              <div className="h-14 border-b border-white/5 bg-[#0d1117] flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Recruiting Agent</div>
                    <div className="text-xs text-brand-accent flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                      Active
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-slate-500">
                  <Search size={18} />
                  <div className="w-px h-4 bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-8 flex flex-col gap-8 text-left h-[450px] overflow-y-auto relative bg-[#0d1117]/50">
                 
                 {/* Message 1 (Hiring Manager) */}
                 <div className="flex gap-4 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">HM</div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs text-slate-400 font-medium">Hiring Manager <span className="text-slate-600 ml-2">10:42 AM</span></div>
                      <div className="bg-[#1f2937] text-slate-200 p-4 rounded-2xl rounded-tl-none border border-white/5 text-sm leading-relaxed shadow-sm">
                        I need a Senior Product Designer for the Fintech team. Ideally someone who has scaled a design system before and has 5+ years of experience.
                      </div>
                    </div>
                 </div>

                 {/* Message 2 (AI Agent) */}
                 <div className="flex gap-4 max-w-[90%] self-end flex-row-reverse animate-fade-in-up delay-300">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                      <Sparkles size={14} />
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <div className="text-xs text-slate-400 font-medium">AI Recruiter <span className="text-slate-600 ml-2">10:42 AM</span></div>
                      <div className="bg-brand-primary/10 text-slate-100 p-5 rounded-2xl rounded-tr-none border border-brand-primary/20 w-full shadow-sm">
                        <div className="flex items-center gap-2 mb-3 text-brand-primary text-sm font-semibold">
                           <Search size={14} />
                           <span>Sourcing Candidates...</span>
                        </div>
                        
                        <div className="space-y-3 bg-[#0d1117] rounded-xl p-1 border border-white/5">
                           {/* Candidate Card 1 */}
                           <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/card">
                              <div className="flex items-center gap-3">
                                 <img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" alt="SJ" className="w-8 h-8 rounded-full" />
                                 <div>
                                    <div className="text-sm font-bold text-white">Sarah Jenkins</div>
                                    <div className="text-xs text-slate-400">Ex-Stripe • 6 YOE • Design Systems</div>
                                 </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-brand-accent text-xs font-bold px-2 py-1 bg-brand-accent/10 rounded border border-brand-accent/20">98% Match</span>
                                <ArrowRight size={14} className="text-slate-500 group-hover/card:text-white transition-colors"/>
                              </div>
                           </div>

                           {/* Candidate Card 2 */}
                           <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/card border-t border-white/5">
                              <div className="flex items-center gap-3">
                                 <img src="https://ui-avatars.com/api/?name=David+C&background=random" alt="DC" className="w-8 h-8 rounded-full" />
                                 <div>
                                    <div className="text-sm font-bold text-white">David Chen</div>
                                    <div className="text-xs text-slate-400">Ex-Robinhood • 5 YOE • Fintech</div>
                                 </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-brand-accent text-xs font-bold px-2 py-1 bg-brand-accent/10 rounded border border-brand-accent/20">94% Match</span>
                                <ArrowRight size={14} className="text-slate-500 group-hover/card:text-white transition-colors"/>
                              </div>
                           </div>
                        </div>
                        
                        <div className="mt-4 flex gap-3">
                          <button className="text-xs bg-white text-brand-dark px-4 py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg">Schedule Interviews</button>
                          <button className="text-xs bg-white/5 text-white px-4 py-2 rounded-lg font-bold hover:bg-white/10 transition-colors border border-white/10">View All Matches</button>
                        </div>
                      </div>
                    </div>
                 </div>

              </div>

              {/* Input Area */}
              <div className="bg-[#0d1117] p-4 border-t border-white/5">
                 <div className="relative flex items-center bg-[#161b22] rounded-xl border border-white/10 px-4 py-3 focus-within:border-brand-primary/50 transition-colors">
                    <button className="text-slate-400 hover:text-white mr-3">
                       <Paperclip size={18} />
                    </button>
                    <input 
                      type="text" 
                      className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-500 text-sm"
                      placeholder="Reply to agent..."
                    />
                    <button className="text-slate-400 hover:text-brand-primary ml-3">
                       <Mic size={18} />
                    </button>
                     <button className="ml-3 p-2 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20">
                       <ArrowRight size={16} />
                    </button>
                 </div>
              </div>

            </div>
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale mix-blend-screen">
             <span className="text-xl font-bold font-display tracking-widest uppercase">Acme Corp</span>
             <span className="text-xl font-bold font-display tracking-widest uppercase">GlobalBank</span>
             <span className="text-xl font-bold font-display tracking-widest uppercase">Stark Ind</span>
             <span className="text-xl font-bold font-display tracking-widest uppercase">Umbrella</span>
             <span className="text-xl font-bold font-display tracking-widest uppercase">Cyberdyne</span>
          </div>

        </div>
      </div>
    </section>
  );
}