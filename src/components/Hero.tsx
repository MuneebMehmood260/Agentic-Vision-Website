import React from 'react';
import { ArrowRight, Sparkles, Film, Cpu, Layout, Play, Activity } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { playSound } from '../utils/sound';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
  onHover?: (text?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices, onHover }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Interactive Generative Canvas */}
      <HeroCanvas />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      {/* Subtle floating ambient light rings */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center">
        {/* Micro-Copy Credibility Statement */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 mb-8 backdrop-blur-md shadow-lg"
          onMouseEnter={() => {
            playSound('hover');
            onHover?.('STUDIO');
          }}
          onMouseLeave={() => onHover?.()}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
          <span className="font-mono text-[11px] sm:text-xs text-zinc-300 font-medium tracking-wider uppercase">
            AI CREATIVE STUDIO • DIGITAL EXPERIENCES • AUTOMATION
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-white leading-[1.04] max-w-5xl mb-6">
          <span>YOUR VISION.</span>
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-100 to-violet-300 bg-clip-text text-transparent text-glow">
            ENGINEERED WITH AI.
          </span>
        </h1>

        {/* Alternative Supporting Message */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal max-w-2xl sm:max-w-3xl leading-relaxed mb-8">
          AI-powered content, cinematic visuals, websites, and digital experiences built for brands that want to stand out.
        </p>

        {/* Dynamic Micro-Copy Ticker */}
        <div className="flex items-center gap-2 sm:gap-4 font-mono text-[11px] sm:text-xs text-violet-300/90 tracking-widest uppercase mb-10 bg-violet-950/30 border border-violet-500/20 px-4 py-1 rounded-full">
          <span>CREATE</span>
          <span className="text-zinc-600">•</span>
          <span>VISUALIZE</span>
          <span className="text-zinc-600">•</span>
          <span>BUILD</span>
          <span className="text-zinc-600">•</span>
          <span>AUTOMATE</span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
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
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-500 hover:bg-violet-400 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              playSound('click');
              onExploreServices();
            }}
            onMouseEnter={() => {
              playSound('hover');
              onHover?.('SERVICES');
            }}
            onMouseLeave={() => onHover?.()}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-white/25 font-medium text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 backdrop-blur-md cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span>Explore Services</span>
          </button>
        </div>

        {/* Interactive Floating Telemetry Highlights */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          {[
            {
              icon: Film,
              label: 'Cinematic Motion',
              val: '4K Temporal AI',
              sub: 'Runway / Kling Workflows'
            },
            {
              icon: Sparkles,
              label: 'Visual Synthesis',
              val: '8K Photorealism',
              sub: 'Zero AI Slop Guarantee'
            },
            {
              icon: Layout,
              label: 'Web Platforms',
              val: '< 450ms Speed',
              sub: 'Next.js & WebGL Systems'
            },
            {
              icon: Cpu,
              label: 'Automation Core',
              val: 'Multi-Agent',
              sub: 'Autonomous Pipelines'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  playSound('hover');
                  onHover?.(item.label.toUpperCase());
                }}
                onMouseLeave={() => onHover?.()}
                className="p-3.5 sm:p-4 rounded-xl bg-zinc-950/70 border border-white/[0.08] hover:border-violet-500/30 hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/10 group-hover:border-violet-500/40 text-violet-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <Activity className="w-3.5 h-3.5 text-zinc-600 group-hover:text-violet-400 transition-colors" />
                </div>
                <div className="text-xs text-zinc-400 font-mono tracking-tight mb-0.5">{item.label}</div>
                <div className="text-sm font-semibold text-white font-display">{item.val}</div>
                <div className="text-[10px] text-zinc-500 font-mono mt-1 truncate">{item.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
