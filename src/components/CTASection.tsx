import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { playSound } from '../utils/sound';

interface CTASectionProps {
  onStartProject: () => void;
  onTalk: () => void;
  onHover?: (text?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject, onTalk, onHover }) => {
  return (
    <section className="relative py-32 bg-[#0A0A0B] border-t border-white/[0.08] overflow-hidden">
      {/* Cinematic Ambient Glow & Gradients */}
      <div className="absolute inset-0 bg-radial-bottom-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        {/* Top Micro-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span className="font-mono text-xs text-zinc-300 font-semibold uppercase tracking-wider">
            ACCEPTING NEW CLIENTS • Q2/Q3 2026
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05] mb-6">
          HAVE AN IDEA?
          <br />
          <span className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent">
            LET'S BUILD IT.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us what you're imagining. We'll help turn it into something real.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => {
              playSound('click');
              onStartProject();
            }}
            onMouseEnter={() => {
              playSound('hover');
              onHover?.('LAUNCH');
            }}
            onMouseLeave={() => onHover?.()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-500 hover:bg-violet-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <button
            onClick={() => {
              playSound('click');
              onTalk();
            }}
            onMouseEnter={() => {
              playSound('hover');
              onHover?.('TALK');
            }}
            onMouseLeave={() => onHover?.()}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-white/30 font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer backdrop-blur-md"
          >
            <MessageCircle className="w-4 h-4 text-violet-400" />
            <span>Let's Talk</span>
          </button>
        </div>
      </div>
    </section>
  );
};
