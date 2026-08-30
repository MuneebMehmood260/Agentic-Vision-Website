import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { playSound } from '../utils/sound';

interface TrustBarProps {
  onSelectTag?: (tag: string) => void;
  onHover?: (text?: string) => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onSelectTag, onHover }) => {
  const capabilityTags = [
    { name: 'AI CONTENT', id: 'ai-content', badge: 'Campaigns & Copy' },
    { name: 'AI IMAGE', id: 'ai-image', badge: '8K Photorealism' },
    { name: 'AI VIDEO', id: 'ai-video', badge: 'Cinematic Motion' },
    { name: 'WEBSITE', id: 'website', badge: 'High Performance' },
    { name: 'WEB APPS', id: 'web-apps', badge: 'SaaS & Dashboards' }
  ];

  return (
    <section className="relative border-y border-white/[0.08] bg-[#0A0A0B]/90 py-8 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          <p className="font-display font-medium text-sm sm:text-base text-zinc-300">
            Built for brands, creators, startups & ambitious businesses.
          </p>
        </div>
        <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
          <span>INTERACTIVE CAPABILITIES DISPATCH</span>
          <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
        </div>
      </div>

      {/* Smooth Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient fade masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          {[...capabilityTags, ...capabilityTags, ...capabilityTags].map((tag, idx) => (
            <button
              key={`${tag.name}-${idx}`}
              onClick={() => {
                playSound('click');
                onSelectTag?.(tag.id);
              }}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.(tag.name);
              }}
              onMouseLeave={() => onHover?.()}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 hover:border-violet-400/50 hover:bg-zinc-800 transition-all duration-200 group whitespace-nowrap cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-12 transition-transform" />
              <span className="font-display font-bold text-xs sm:text-sm tracking-wide text-zinc-200 group-hover:text-white">
                {tag.name}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 group-hover:text-violet-300/80 bg-zinc-950 px-2 py-0.5 rounded-full border border-white/5">
                {tag.badge}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
