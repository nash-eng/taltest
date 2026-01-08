import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "VP of People",
    company: "Stryke",
    image: "https://ui-avatars.com/api/?name=Elena+R&background=fce7f3&color=db2777",
    content: "I was skeptical about AI in recruiting, but this is different. It's not just keyword matching; the agents actually understand nuance. We hired our lead engineer in 4 days.",
    stars: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder",
    company: "Nexus AI",
    image: "https://ui-avatars.com/api/?name=Marcus+C&background=e0e7ff&color=4338ca",
    content: "The autonomous scheduling alone saved us 20 hours a week. It feels like we doubled our recruiting team overnight without adding headcount.",
    stars: 5
  },
  {
    id: 3,
    name: "Sarah Miller",
    role: "Head of Talent",
    company: "Loom",
    image: "https://ui-avatars.com/api/?name=Sarah+M&background=dcfce7&color=15803d",
    content: "Finally, a tool that respects the candidate experience. The conversational interface is so natural that candidates often thank the bot.",
    stars: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "FinStack",
    image: "https://ui-avatars.com/api/?name=David+P&background=ffedd5&color=c2410c",
    content: "The technical screening is surprisingly accurate. It filters out the noise so I only interview people who can actually code.",
    stars: 4
  },
  {
    id: 5,
    name: "Jessica Alverez",
    role: "Recruiting Ops",
    company: "Canva",
    image: "https://ui-avatars.com/api/?name=Jessica+A&background=f3e8ff&color=7c3aed",
    content: "We replaced 4 different tools with this one platform. The sourcing engine finds hidden gems that LinkedIn Recruiter missed.",
    stars: 5
  },
  {
    id: 6,
    name: "Tom Wambsgans",
    role: "Director of HR",
    company: "Waystar",
    image: "https://ui-avatars.com/api/?name=Tom+W&background=f1f5f9&color=475569",
    content: "Implementation was seamless. We were running live campaigns within 24 hours. The ROI has been immediate and undeniable.",
    stars: 5
  }
];

export default function ReviewSection() {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display mb-6 tracking-tight">
            Loved by the world's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">fastest growing teams.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join 500+ companies that have automated their hiring stack.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="break-inside-avoid bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={`${i < review.stars ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-200'}`} 
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative">
                <Quote size={24} className="absolute -top-2 -left-2 text-brand-primary/10 transform -scale-x-100" />
                <p className="text-slate-700 text-sm leading-relaxed mb-6 relative z-10 pl-2">
                  "{review.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full border border-slate-100" />
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    {review.name}
                    {/* Verified Badge */}
                    <CheckCircle size={10} className="text-brand-primary fill-white" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {review.role}, <span className="text-brand-secondary">{review.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
            <button className="px-6 py-3 rounded-full bg-slate-50 text-slate-600 font-semibold text-sm border border-slate-200 hover:bg-white hover:border-brand-primary hover:text-brand-primary transition-colors shadow-sm">
                Read 200+ more reviews on G2
            </button>
        </div>

      </div>
    </section>
  );
}