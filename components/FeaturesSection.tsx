import React, { useRef, useState } from 'react';
import { Brain, Globe, Calendar, MessageSquare, PenTool } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-brand-dark relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Intelligence</span> Layer <br />
          For Your Hiring Stack.
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl font-light">
          We don't just replace steps. We replace the entire manual workload with intelligent agents that never sleep.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[350px]">
          
          {/* Card 1: Summaries (Large) */}
          <BentoCard className="md:col-span-6 lg:col-span-8 group overflow-hidden">
             <div className="flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-4">
                   <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                      <Brain size={24} />
                   </div>
                   <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">ANALYSIS</span>
                </div>
                <div className="mb-6">
                   <h3 className="text-2xl font-bold text-white mb-2">Cognitive Summaries</h3>
                   <p className="text-slate-400 text-sm max-w-md">Agents read thousands of resumes instantly, extracting not just keywords, but context and achievements.</p>
                </div>
                
                {/* Visual UI Mockup */}
                <div className="flex-1 relative mt-4">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#161b22] border border-white/10 rounded-tl-xl border-b-0 border-r-0 shadow-2xl p-6 transition-transform duration-500 group-hover:-translate-y-2">
                     <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
                        <div className="space-y-2 w-full">
                           <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                           <div className="h-3 bg-slate-800 rounded w-1/4"></div>
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/20">
                           <div className="text-xs font-bold text-brand-primary mb-1">AI INSIGHT</div>
                           <p className="text-xs text-slate-300 leading-relaxed">Candidate demonstrates exceptional growth trajectory. Promoted 3x in 2 years at high-growth startup.</p>
                        </div>
                        <div className="h-2 bg-slate-800 rounded w-full"></div>
                        <div className="h-2 bg-slate-800 rounded w-5/6"></div>
                        <div className="h-2 bg-slate-800 rounded w-4/6"></div>
                     </div>
                  </div>
                </div>
             </div>
          </BentoCard>

          {/* Card 2: Global Sourcing (Medium) */}
          <BentoCard className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-brand-purple/10 to-transparent">
             <div className="flex flex-col h-full relative z-10">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 w-fit border border-purple-500/20 mb-4">
                   <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Sourcing</h3>
                <p className="text-slate-400 text-sm mb-6">Access talent from 150+ countries. The agent handles timezones and languages.</p>
                
                {/* Map Visual */}
                <div className="flex-1 rounded-xl overflow-hidden relative border border-white/5 bg-[#0a0c10]">
                   <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" 
                    alt="Global Map" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                   {/* Pins */}
                   <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-purple rounded-full animate-ping"></div>
                   <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-brand-purple rounded-full animate-ping delay-300"></div>
                   <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-brand-purple rounded-full animate-ping delay-700"></div>
                </div>
             </div>
          </BentoCard>

          {/* Card 3: Scheduling (Small) */}
          <BentoCard className="md:col-span-3 lg:col-span-4">
             <div className="flex flex-col h-full relative z-10">
                 <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-brand-accent/10 rounded-lg text-brand-accent">
                        <Calendar size={20} />
                    </div>
                 </div>
                 <h3 className="text-lg font-bold text-white mb-1">Auto-Scheduling</h3>
                 <p className="text-slate-500 text-xs mb-4">Zero email ping-pong.</p>
                 
                 <div className="flex-1 bg-white rounded-lg p-2 overflow-hidden relative shadow-inner">
                    <div className="grid grid-cols-3 gap-1 h-full opacity-80">
                       {[...Array(9)].map((_, i) => (
                           <div key={i} className={`rounded-sm ${i === 4 ? 'bg-brand-accent' : 'bg-slate-100'}`}></div>
                       ))}
                    </div>
                    {/* Floating Confirm Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-white shadow-lg rounded-full px-3 py-1 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-[10px] font-bold text-slate-800">Booked</span>
                       </div>
                    </div>
                 </div>
             </div>
          </BentoCard>

          {/* Card 4: Interviews (Large) */}
          <BentoCard className="md:col-span-3 lg:col-span-4">
              <div className="flex flex-col h-full relative z-10">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400 w-fit mb-4">
                   <MessageSquare size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Video Screen</h3>
                <p className="text-slate-400 text-xs mb-4">AI-conducted interviews.</p>
                
                <div className="flex-1 rounded-lg overflow-hidden relative bg-black border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                        alt="Video Interview" 
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"></div>
                       <div className="w-6 h-6 rounded-full bg-red-500/80 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-[1px]"></div>
                       </div>
                    </div>
                </div>
             </div>
          </BentoCard>

          {/* Card 5: Transcription (Wide) */}
          <BentoCard className="md:col-span-6 lg:col-span-4">
             <div className="flex flex-col h-full relative z-10">
                 <div className="flex items-center justify-between mb-4">
                     <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400 border border-pink-500/20">
                       <PenTool size={24} />
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">Smart Transcription</h3>
                 <p className="text-slate-400 text-sm mb-4">Real-time analysis & flagging.</p>
                 
                 <div className="flex-1 bg-[#161b22] rounded-lg p-4 border border-white/5 text-xs font-mono text-slate-400 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#161b22] pointer-events-none"></div>
                    <p className="mb-2"><span className="text-pink-400">Speaker 1:</span> Tell me about your experience with React.</p>
                    <p className="mb-2"><span className="text-blue-400">Candidate:</span> I've led two major migrations...</p>
                    <div className="mt-2 p-2 bg-green-500/10 border border-green-500/20 rounded text-green-400 flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                       Verified Skill: React.js
                    </div>
                 </div>
             </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card relative bg-[#0d1117] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors shadow-xl ${className}`}
      style={{ '--mouse-x': `${position.x}px`, '--mouse-y': `${position.y}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}