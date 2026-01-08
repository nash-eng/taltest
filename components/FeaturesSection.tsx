import React, { useRef, useState } from 'react';
import { Brain, Globe, Calendar, MessageSquare, PenTool, BarChart3 } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-white relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-display tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Intelligence</span> Layer <br />
          For Your Hiring Stack.
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl font-light">
          We don't just replace steps. We replace the entire manual workload with intelligent agents that never sleep.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[350px]">
          
          {/* Card 1: Summaries (Large) */}
          <BentoCard className="md:col-span-6 lg:col-span-8 group overflow-hidden bg-white border-slate-100 shadow-xl shadow-slate-200/50">
             <div className="flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-4">
                   <div className="p-3 bg-brand-lavender rounded-xl text-brand-primary border border-purple-100">
                      <Brain size={24} />
                   </div>
                   <span className="text-xs font-mono text-brand-primary bg-brand-lavender px-2 py-1 rounded border border-purple-100">ANALYSIS</span>
                </div>
                <div className="mb-6">
                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Cognitive Summaries</h3>
                   <p className="text-slate-500 text-sm max-w-md">Agents read thousands of resumes instantly, extracting not just keywords, but context and achievements.</p>
                </div>
                
                {/* Visual UI Mockup */}
                <div className="flex-1 relative mt-4">
                  <div className="absolute top-0 left-0 w-full h-full bg-slate-50 border border-slate-200 rounded-tl-xl border-b-0 border-r-0 shadow-lg p-6 transition-transform duration-500 group-hover:-translate-y-2">
                     <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                        <div className="space-y-2 w-full">
                           <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                           <div className="h-3 bg-slate-100 rounded w-1/4"></div>
                        </div>
                     </div>
                     <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg border border-purple-100 shadow-sm">
                           <div className="text-xs font-bold text-brand-primary mb-1 flex items-center gap-2">
                             <SparklesIcon /> AI INSIGHT
                           </div>
                           <p className="text-xs text-slate-600 leading-relaxed">Candidate demonstrates exceptional growth trajectory. Promoted 3x in 2 years at high-growth startup.</p>
                        </div>
                        <div className="h-2 bg-slate-200 rounded w-full"></div>
                        <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                        <div className="h-2 bg-slate-200 rounded w-4/6"></div>
                     </div>
                  </div>
                </div>
             </div>
          </BentoCard>

          {/* Card 2: Global Sourcing (Medium) */}
          <BentoCard className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-brand-lavender to-white border-purple-100">
             <div className="flex flex-col h-full relative z-10">
                <div className="p-3 bg-white rounded-xl text-brand-secondary w-fit border border-pink-100 mb-4 shadow-sm">
                   <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Global Sourcing</h3>
                <p className="text-slate-600 text-sm mb-6">Access talent from 150+ countries. The agent handles timezones and languages.</p>
                
                {/* Map Visual */}
                <div className="flex-1 rounded-xl overflow-hidden relative border border-white/50 bg-white/50">
                   <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" 
                    alt="Global Map" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 hover:opacity-30 transition-all duration-700"
                   />
                   {/* Pins */}
                   <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-secondary rounded-full animate-ping"></div>
                   <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-secondary rounded-full border-2 border-white"></div>
                   
                   <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-brand-primary rounded-full animate-ping delay-300"></div>
                   <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-brand-primary rounded-full border-2 border-white"></div>
                </div>
             </div>
          </BentoCard>

          {/* Card 3: Scheduling (Small) */}
          <BentoCard className="md:col-span-3 lg:col-span-4 bg-white border-slate-100">
             <div className="flex flex-col h-full relative z-10">
                 <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-orange-50 rounded-lg text-orange-500 border border-orange-100">
                        <Calendar size={20} />
                    </div>
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1">Auto-Scheduling</h3>
                 <p className="text-slate-500 text-xs mb-4">Zero email ping-pong.</p>
                 
                 <div className="flex-1 bg-slate-50 rounded-lg p-2 overflow-hidden relative border border-slate-100">
                    <div className="grid grid-cols-3 gap-1 h-full opacity-60">
                       {[...Array(9)].map((_, i) => (
                           <div key={i} className={`rounded-sm transition-colors duration-300 ${i === 4 ? 'bg-orange-400' : 'bg-white border border-slate-200'}`}></div>
                       ))}
                    </div>
                    {/* Floating Confirm Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-white shadow-xl rounded-full px-3 py-1 flex items-center gap-1 border border-slate-100">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-[10px] font-bold text-slate-800">Booked</span>
                       </div>
                    </div>
                 </div>
             </div>
          </BentoCard>

          {/* Card 4: Interviews (Large) */}
          <BentoCard className="md:col-span-3 lg:col-span-4 bg-white border-slate-100">
              <div className="flex flex-col h-full relative z-10">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-500 w-fit mb-4 border border-blue-100">
                   <MessageSquare size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Video Screen</h3>
                <p className="text-slate-500 text-xs mb-4">AI-conducted interviews.</p>
                
                <div className="flex-1 rounded-lg overflow-hidden relative bg-slate-900 border border-slate-100">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                        alt="Video Interview" 
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20"></div>
                       <div className="w-8 h-8 rounded-full bg-red-500 backdrop-blur-md flex items-center justify-center shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-[1px]"></div>
                       </div>
                    </div>
                </div>
             </div>
          </BentoCard>

          {/* Card 5: Transcription (Wide) */}
          <BentoCard className="md:col-span-6 lg:col-span-4 bg-white border-slate-100">
             <div className="flex flex-col h-full relative z-10">
                 <div className="flex items-center justify-between mb-4">
                     <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500 border border-emerald-100">
                       <PenTool size={24} />
                    </div>
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Transcription</h3>
                 <p className="text-slate-500 text-sm mb-4">Real-time analysis & flagging.</p>
                 
                 <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-100 text-xs font-mono text-slate-500 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none"></div>
                    <p className="mb-2"><span className="text-brand-primary font-bold">Speaker 1:</span> Tell me about your experience with React.</p>
                    <p className="mb-2"><span className="text-slate-800 font-bold">Candidate:</span> I've led two major migrations...</p>
                    <div className="mt-2 p-2 bg-white border border-emerald-200 rounded text-emerald-600 flex items-center gap-2 shadow-sm">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
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
      className={`relative rounded-3xl p-6 md:p-8 hover:border-purple-200 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

function SparklesIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  );
}