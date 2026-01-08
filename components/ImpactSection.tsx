import React from 'react';
import { Users, Filter, Video, Award, ArrowRight } from 'lucide-react';

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-brand-dark relative border-y border-white/5 overflow-hidden">
      
      {/* Background Flow Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
         <div className="absolute top-1/2 left-0 w-full h-[100px] bg-brand-primary/5 blur-[50px] -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
              Efficiency <span className="text-brand-accent">Unlocks</span> Scale.
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Traditional recruiting is a bottleneck. We turn it into a high-velocity automated pipeline.
            </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
               
               {/* Step 1 */}
               <div className="group relative">
                  <div className="bg-[#0d1117] border border-white/10 p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/50 shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/20 group-hover:bg-brand-primary transition-colors"></div>
                     <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-slate-400 group-hover:text-brand-primary group-hover:scale-110 transition-all">
                        <Users size={24} />
                     </div>
                     <div className="text-xs font-mono text-brand-primary mb-2">STEP 01</div>
                     <h3 className="text-xl font-bold text-white mb-1">Inbound</h3>
                     <p className="text-sm text-slate-400">10,000+ applications processed instantly.</p>
                  </div>
                  {/* Mobile Arrow */}
                  <div className="md:hidden flex justify-center py-2 text-slate-700"><ArrowRight className="rotate-90" /></div>
                  {/* Desktop Arrow Overlay */}
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-6 h-6 bg-brand-dark border border-slate-700 rounded-full items-center justify-center text-slate-500">
                     <ArrowRight size={12} />
                  </div>
               </div>

               {/* Step 2 */}
               <div className="group relative">
                  <div className="bg-[#0d1117] border border-white/10 p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-2 hover:border-brand-purple/50 shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-brand-purple/20 group-hover:bg-brand-purple transition-colors"></div>
                     <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-slate-400 group-hover:text-brand-purple group-hover:scale-110 transition-all">
                        <Filter size={24} />
                     </div>
                     <div className="text-xs font-mono text-brand-purple mb-2">STEP 02</div>
                     <h3 className="text-xl font-bold text-white mb-1">AI Scoring</h3>
                     <p className="text-sm text-slate-400">Ranked by semantic match & logic.</p>
                  </div>
                   {/* Mobile Arrow */}
                   <div className="md:hidden flex justify-center py-2 text-slate-700"><ArrowRight className="rotate-90" /></div>
                   <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-6 h-6 bg-brand-dark border border-slate-700 rounded-full items-center justify-center text-slate-500">
                     <ArrowRight size={12} />
                  </div>
               </div>

               {/* Step 3 */}
               <div className="group relative">
                  <div className="bg-[#0d1117] border border-white/10 p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors"></div>
                     <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all">
                        <Video size={24} />
                     </div>
                     <div className="text-xs font-mono text-blue-500 mb-2">STEP 03</div>
                     <h3 className="text-xl font-bold text-white mb-1">Screening</h3>
                     <p className="text-sm text-slate-400">Autonomous video interviews.</p>
                  </div>
                   {/* Mobile Arrow */}
                   <div className="md:hidden flex justify-center py-2 text-slate-700"><ArrowRight className="rotate-90" /></div>
                   <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-6 h-6 bg-brand-dark border border-slate-700 rounded-full items-center justify-center text-slate-500">
                     <ArrowRight size={12} />
                  </div>
               </div>

               {/* Step 4 */}
               <div className="group relative">
                  <div className="bg-gradient-to-b from-brand-accent/10 to-[#0d1117] border border-brand-accent/20 p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent shadow-xl shadow-brand-accent/5 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent"></div>
                     <div className="w-12 h-12 rounded-lg bg-brand-accent/20 border border-brand-accent/20 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-all">
                        <Award size={24} />
                     </div>
                     <div className="text-xs font-mono text-brand-accent mb-2">RESULT</div>
                     <h3 className="text-xl font-bold text-white mb-1">Offer Ready</h3>
                     <p className="text-sm text-slate-400">Top 1% candidates presented.</p>
                  </div>
               </div>

            </div>
        </div>

      </div>
    </section>
  );
}