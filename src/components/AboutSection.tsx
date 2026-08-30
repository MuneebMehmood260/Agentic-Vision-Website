import React from 'react';
import { ArrowRight, Sparkles, Check, Flame, Shield, Zap } from 'lucide-react';
import { playSound } from '../utils/sound';

interface AboutSectionProps {
  onStartProject: () => void;
  onHover?: (text?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject, onHover }) => {
  const values = [
    {
      icon: Shield,
      title: 'Zero AI Slop',
      description: 'We reject generic AI clichés, uncanny plastic textures, and hallucinations. Every asset is art-directed and mastered.'
    },
    {
      icon: Zap,
      title: 'Hyper-Velocity Delivery',
      description: 'We compress 3-month agency timelines into 10–14 days without cutting corners on architectural or visual fidelity.'
    },
    {
      icon: Flame,
      title: 'Direct Senior Craft',
      description: 'You work directly with lead creative engineers and directors — no account managers, no junior handoffs, no bloated overhead.'
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#0A0A0B] border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-violet-400" />
          <span className="font-mono text-xs text-violet-400 tracking-widest uppercase font-semibold">
            ABOUT AGENTIC VISION
          </span>
        </div>

        {/* Big Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-8">
              WE TURN IDEAS INTO EXPERIENCES.
            </h2>
            <div className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Agentic Vision is an AI-powered creative and digital studio focused on helping businesses transform ideas into compelling content, cinematic visuals and modern digital experiences.
              </p>
              <p className="text-zinc-400">
                We combine creative thinking, artificial intelligence, design and web technology to create work that looks exceptional and delivers real value.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <button
                onClick={() => {
                  playSound('click');
                  onStartProject();
                }}
                onMouseEnter={() => {
                  playSound('hover');
                  onHover?.('TALK');
                }}
                onMouseLeave={() => onHover?.()}
                className="px-6 py-3 rounded-full bg-zinc-900 border border-white/10 hover:border-violet-400/50 hover:bg-zinc-800 text-white text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Initiate Studio Dialogue</span>
                <ArrowRight className="w-4 h-4 text-violet-400" />
              </button>
              <span className="text-xs font-mono text-zinc-500">
                Global Operations • Remote & San Francisco
              </span>
            </div>
          </div>

          {/* Right Core Manifesto Cards */}
          <div className="lg:col-span-5 space-y-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-violet-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-zinc-900 text-violet-400 border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-white">{val.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
