import React, { useState, useEffect } from 'react';
import { Users, Filter, Video, UserCheck, Award, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ImpactSection() {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 5;

  // Animation Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        // Pause at the end before restarting
        if (prev >= totalSteps + 2) return 1; 
        return prev + 1;
      });
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Sourcing",
      count: "5,000",
      sub: "Applications",
      icon: <Users size={20} />,
      description: "Aggregated from 15+ channels instantly.",
      trend: null
    },
    {
      id: 2,
      title: "AI Filter",
      count: "1,923",
      sub: "Qualified",
      icon: <Filter size={20} />,
      description: "Resume parsing & basic criteria matching.",
      trend: "-62%"
    },
    {
      id: 3,
      title: "Assessments",
      count: "476",
      sub: "Verified",
      icon: <CheckCircle2 size={20} />,
      description: "Technical skills & cognitive tests passed.",
      trend: "-75%"
    },
    {
      id: 4,
      title: "AI Video",
      count: "58",
      sub: "Finalists",
      icon: <Video size={20} />,
      description: "Soft skills & behavioral analysis.",
      trend: "-88%"
    },
    {
      id: 5,
      title: "Hired",
      count: "07",
      sub: "Hires Made",
      icon: <Award size={20} />,
      description: "Top 0.14% Talent Selected.",
      trend: "Goal"
    }
  ];

  return (
    <section id="impact" className="py-16 bg-brand-bg relative overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Zap size={12} fill="currentColor" />
              Automated Funnel
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-6">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Filtering Engine</span>
           </h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">
             Watch how our agents process thousands of applications to find your perfect match, completely autonomously.
           </p>
           
           {/* Animation Progress Indicator */}
           <div className="mt-8 flex justify-center gap-2">
              {steps.map((s) => (
                <div 
                  key={s.id} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStep >= s.id ? 'w-8 bg-brand-primary' : 'w-2 bg-slate-200'
                  }`}
                ></div>
              ))}
           </div>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative min-h-[400px]">
           
           {/* Active Line (Animated) - Desktop Only */}
           <div className="hidden lg:block absolute top-[100px] left-[10%] w-[80%] h-0.5 -z-10 bg-slate-200">
              <div 
                 className="h-full bg-brand-primary transition-all duration-1000 ease-out relative shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                 style={{ width: `${Math.min(((Math.min(activeStep, 5) - 1) / (totalSteps - 1)) * 100, 100)}%` }}
              >
                  {/* Glowing Tip */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(124,58,237,1)] translate-x-1/2"></div>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              
              {steps.map((step, index) => {
                const isActive = activeStep >= step.id;
                const isCurrent = activeStep === step.id;
                const isFuture = activeStep < step.id;
                const isLast = index === steps.length - 1;
                
                return (
                  <div 
                    key={step.id} 
                    className={`relative flex flex-col items-center transition-all duration-700 ease-out transform
                      ${isFuture ? 'opacity-60 scale-95 grayscale' : 'opacity-100 scale-100 grayscale-0'}
                    `}
                  >
                     
                     {/* Connector Icon */}
                     <div className={`
                        w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 mb-8 transition-all duration-500 bg-white
                        ${isActive 
                          ? step.id === 5 
                            ? 'border-brand-secondary text-brand-secondary shadow-lg shadow-pink-500/30 scale-110' 
                            : 'border-brand-primary text-brand-primary shadow-lg shadow-purple-500/30'
                          : 'border-slate-200 text-slate-300 shadow-sm'
                        }
                     `}>
                        {step.icon}
                     </div>

                     {/* Card Content - Increased Shadow and Border */}
                     <div className={`
                        w-full max-w-[240px] bg-white border p-6 rounded-2xl relative transition-all duration-500
                        ${isActive 
                           ? 'border-purple-200 shadow-xl shadow-purple-900/10 translate-y-0 ring-1 ring-purple-100' 
                           : 'border-slate-200 shadow-md translate-y-4'
                        }
                     `}>
                        
                        {/* Connecting Line for Mobile */}
                        {!isLast && (
                            <div className={`lg:hidden absolute top-full left-1/2 w-0.5 h-8 -translate-x-1/2 z-0 transition-colors duration-1000 delay-500
                                ${activeStep > step.id ? 'bg-brand-primary' : 'bg-slate-200'}
                            `}></div>
                        )}

                        {/* Trend Badge */}
                        {step.trend && (
                           <div className={`absolute top-4 right-4 text-[10px] font-bold px-1.5 py-0.5 rounded border transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                              ${step.id === 5 
                                ? 'text-white bg-brand-secondary border-brand-secondary' 
                                : 'text-red-500 bg-red-50 border-red-100'
                              }
                           `}>
                              {step.trend}
                           </div>
                        )}

                        <div className={`text-[10px] font-mono mb-4 uppercase tracking-widest transition-colors ${isActive ? 'text-slate-400' : 'text-slate-300'}`}>
                          Step 0{step.id}
                        </div>
                        
                        <div className="mb-4">
                           <div className={`text-3xl font-bold font-display transition-colors ${isActive ? 'text-slate-900' : 'text-slate-300'}`}>
                             {step.count}
                           </div>
                           <div className={`text-xs font-medium uppercase transition-colors ${isActive ? 'text-brand-primary' : 'text-slate-400'}`}>
                             {step.sub}
                           </div>
                        </div>
                        
                        <div className={`h-px w-full mb-4 transition-colors ${isActive ? 'bg-slate-100' : 'bg-transparent'}`}></div>
                        
                        <p className={`text-xs leading-relaxed transition-colors ${isActive ? 'text-slate-500' : 'text-slate-300'}`}>
                           {step.description}
                        </p>
                        
                        {/* Hired Celebration Effect */}
                        {step.id === 5 && isActive && (
                           <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                              <div className="absolute top-0 left-0 w-full h-full bg-brand-secondary/5 animate-pulse"></div>
                           </div>
                        )}
                     </div>
                  </div>
                );
              })}

           </div>
           
        </div>
      </div>
    </section>
  );
}