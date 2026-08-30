import React from 'react';
import { Sparkles, Code2, Palette, Cpu, Check } from 'lucide-react';
import { techCategories } from '../data/techData';
import { playSound } from '../utils/sound';

interface TechStackSectionProps {
  onHover?: (text?: string) => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ onHover }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section className="relative py-28 bg-[#0A0A0B] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="font-mono text-xs text-violet-400 tracking-widest uppercase font-semibold">
                PRODUCTION INFRASTRUCTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              THE TECHNOLOGY BEHIND THE VISION
            </h2>
          </div>
          <p className="text-zinc-400 font-medium text-base sm:text-lg max-w-md">
            Directing world-class neural models and software toolchains.
          </p>
        </div>

        {/* 4 Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.(category.name);
              }}
              onMouseLeave={() => onHover?.()}
              className="rounded-2xl bg-zinc-950/80 border border-white/10 p-7 sm:p-8 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  {category.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3 rounded-xl bg-zinc-900/70 border border-white/5 hover:border-violet-500/30 transition-colors"
                    >
                      <div className="font-display font-semibold text-xs sm:text-sm text-white truncate">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 truncate mt-0.5">
                        {item.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Production Stack Standard</span>
                <span className="text-violet-400 font-semibold">Validated 2026</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
