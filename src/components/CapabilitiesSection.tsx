import React, { useState } from 'react';
import { Sparkles, Palette, Cpu, Layout, TrendingUp, CheckCircle2 } from 'lucide-react';
import { capabilitiesData } from '../data/capabilitiesData';
import { playSound } from '../utils/sound';

interface CapabilitiesSectionProps {
  onHover?: (text?: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onHover }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('creative');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'creative':
        return <Palette className="w-4 h-4" />;
      case 'ai':
        return <Cpu className="w-4 h-4" />;
      case 'digital':
        return <Layout className="w-4 h-4" />;
      case 'business':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const activeCategory =
    capabilitiesData.find((cat) => cat.id === activeCategoryId) || capabilitiesData[0];

  return (
    <section className="relative py-28 bg-[#0A0A0B] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="font-mono text-xs text-violet-400 tracking-widest uppercase font-semibold">
                CAPABILITIES MATRIX
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              FULL-SPECTRUM MASTERY
            </h2>
          </div>
          <p className="text-zinc-400 font-medium text-base sm:text-lg max-w-md">
            Four specialized domains unified under a single studio standard.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {capabilitiesData.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playSound('switch');
                  setActiveCategoryId(cat.id);
                }}
                onMouseEnter={() => {
                  playSound('hover');
                  onHover?.(cat.title);
                }}
                onMouseLeave={() => onHover?.()}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-zinc-900 border-violet-500/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                    : 'bg-zinc-950/70 border-white/10 hover:border-white/20 text-zinc-400'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={isActive ? 'text-violet-400' : 'text-zinc-500'}>
                    {getCategoryIcon(cat.id)}
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base">
                    {cat.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Grid */}
        <div className="rounded-3xl bg-zinc-950/90 border border-white/10 p-6 sm:p-10">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              {activeCategory.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-violet-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-bold text-sm sm:text-base text-white">
                      {skill.name}
                    </h4>
                    {skill.featured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20 uppercase">
                        Core
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                  <span>Production standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
