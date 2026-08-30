import React, { useState } from 'react';
import { Sparkles, UserCheck, ShieldCheck, Target, ArrowRight, Check, X } from 'lucide-react';
import { playSound } from '../utils/sound';

interface WhyUsSectionProps {
  onHover?: (text?: string) => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onHover }) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'matrix'>('cards');

  const pillars = [
    {
      id: 'ai-first',
      title: 'AI-FIRST',
      badge: 'SPEED & POWER',
      icon: Sparkles,
      color: 'text-violet-400',
      borderColor: 'border-violet-500/30',
      description:
        'Modern AI tools, custom LoRA checkpoints, and automated neural workflows are leveraged to accelerate creative production by 10x.'
    },
    {
      id: 'human-direction',
      title: 'HUMAN DIRECTION',
      badge: 'ART & INTENT',
      icon: UserCheck,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      description:
        'AI is ruthlessly guided by creative strategy, directorial taste, typography rules, design thinking, and deliberate human decision-making.'
    },
    {
      id: 'premium-quality',
      title: 'PREMIUM QUALITY',
      badge: 'ZERO AI SLOP',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      description:
        'Every visual, video frame, and line of code undergoes surgical refinement for immaculate presentation comparable to Apple, Tesla, or Stripe.'
    },
    {
      id: 'business-focused',
      title: 'BUSINESS FOCUSED',
      badge: 'CONVERSION & ROI',
      icon: Target,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      description:
        'The goal is not simply to make something visually striking — every asset and interaction is engineered to serve a measurable business outcome.'
    }
  ];

  const comparisonRows = [
    {
      dimension: 'Turnaround Time',
      traditional: '8–16 Weeks',
      freelanceAi: '1–2 Days (Raw output)',
      agenticVision: '1–3 Weeks (Mastered)'
    },
    {
      dimension: 'Visual Fidelity',
      traditional: 'High (Dependent on budget)',
      freelanceAi: 'Uncanny AI artifacts & flaws',
      agenticVision: '8K Photorealism & Pristine Color'
    },
    {
      dimension: 'Brand Consistency',
      traditional: 'Manual & slow',
      freelanceAi: 'Random styles across shots',
      agenticVision: 'Custom LoRA & Style Embedding'
    },
    {
      dimension: 'Engineering Quality',
      traditional: 'Separated agency handoff',
      freelanceAi: 'No code or generic templates',
      agenticVision: 'Production Next.js / TypeScript'
    },
    {
      dimension: 'Cost Efficiency',
      traditional: '$$$ ($50k–$250k+)',
      freelanceAi: '$ (Low conversion)',
      agenticVision: '$$ (70%–80% Cost Reduction)'
    }
  ];

  return (
    <section className="relative py-28 bg-[#0A0A0B] border-t border-white/[0.08] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span className="font-mono text-xs text-violet-300 font-medium uppercase tracking-wider">
              STUDIO PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            NOT JUST CREATION.
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-indigo-200 to-white bg-clip-text text-transparent">
              STRATEGIC CREATION.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-medium leading-relaxed">
            Agentic Vision fuses <strong className="text-white">AI + Design + Technology + Strategy</strong> into a unified high-velocity creative studio.
          </p>

          {/* Toggle between Core Pillars and Agency Comparison */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => {
                playSound('switch');
                setActiveTab('cards');
              }}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.('PILLARS');
              }}
              onMouseLeave={() => onHover?.()}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-zinc-800 text-violet-300 border border-violet-500/40 shadow-sm'
                  : 'bg-zinc-950 text-zinc-500 hover:text-zinc-300 border border-white/5'
              }`}
            >
              CORE PILLARS
            </button>
            <button
              onClick={() => {
                playSound('switch');
                setActiveTab('matrix');
              }}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.('MATRIX');
              }}
              onMouseLeave={() => onHover?.()}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-zinc-800 text-violet-300 border border-violet-500/40 shadow-sm'
                  : 'bg-zinc-950 text-zinc-500 hover:text-zinc-300 border border-white/5'
              }`}
            >
              STUDIO ADVANTAGE MATRIX
            </button>
          </div>
        </div>

        {activeTab === 'cards' ? (
          /* 4 Feature Blocks Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => {
                    playSound('hover');
                    onHover?.(pillar.title);
                  }}
                  onMouseLeave={() => onHover?.()}
                  className="group relative rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-violet-500/40 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-zinc-900 border border-white/10 ${pillar.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 uppercase tracking-widest font-semibold">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-extrabold text-white mb-3 group-hover:text-violet-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Engineered for commercial impact</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Studio Advantage Matrix */
          <div className="rounded-2xl bg-zinc-950 border border-white/10 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-zinc-900/60 font-mono text-xs text-zinc-400">
                    <th className="p-4 sm:p-6 uppercase">Dimension</th>
                    <th className="p-4 sm:p-6 uppercase text-zinc-500">Traditional Agency</th>
                    <th className="p-4 sm:p-6 uppercase text-zinc-500">Pure AI Prompting</th>
                    <th className="p-4 sm:p-6 uppercase text-violet-300 bg-violet-950/30">AGENTIC VISION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                      <td className="p-4 sm:p-6 font-display font-semibold text-white">
                        {row.dimension}
                      </td>
                      <td className="p-4 sm:p-6 text-zinc-400">{row.traditional}</td>
                      <td className="p-4 sm:p-6 text-zinc-400">{row.freelanceAi}</td>
                      <td className="p-4 sm:p-6 text-violet-300 font-semibold bg-violet-950/20 font-mono">
                        {row.agenticVision}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
