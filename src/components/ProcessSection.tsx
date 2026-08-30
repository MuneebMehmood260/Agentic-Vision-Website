import React, { useState } from 'react';
import { Compass, Layers, Cpu, Sliders, Rocket, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { processData } from '../data/processData';
import { playSound } from '../utils/sound';

interface ProcessSectionProps {
  onHover?: (text?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onHover }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  const currentStep = processData[activeStepIndex];

  return (
    <section id="process" className="relative py-28 bg-[#0A0A0B] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="font-mono text-xs text-violet-400 tracking-widest uppercase font-semibold">
                STUDIO TIMELINE & RIGOR
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              HOW WE BUILD
            </h2>
          </div>
          <p className="text-zinc-400 font-medium text-base sm:text-lg max-w-md">
            A battle-tested 5-stage lifecycle engineered for speed, transparency, and surgical precision.
          </p>
        </div>

        {/* Interactive Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {processData.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => {
                  playSound('switch');
                  setActiveStepIndex(idx);
                }}
                onMouseEnter={() => {
                  playSound('hover');
                  onHover?.(step.title);
                }}
                onMouseLeave={() => onHover?.()}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-zinc-900 border-violet-500/50 shadow-[0_0_25px_rgba(139,92,246,0.2)]'
                    : 'bg-zinc-950/70 border-white/10 hover:border-white/20 hover:bg-zinc-900/50 text-zinc-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-violet-300' : 'text-zinc-600'
                    }`}
                  >
                    STAGE {step.number}
                  </span>
                  <div className={`${isActive ? 'text-violet-400' : 'text-zinc-600'}`}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>
                <div
                  className={`font-display font-bold text-sm sm:text-base ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-[11px] font-mono text-zinc-500 mt-1">{step.timeline}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Feature Stage */}
        <div className="rounded-3xl bg-zinc-950/90 border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-10 items-start justify-between relative z-10">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 font-mono text-xs font-bold">
                  STAGE {currentStep.number} OF 05
                </span>
                <span className="text-zinc-500 font-mono text-xs uppercase">
                  {currentStep.subtitle}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
                {currentStep.title} — {currentStep.subtitle}
              </h3>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                {currentStep.description}
              </p>

              {/* Key Activities */}
              <div className="mb-8">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-zinc-400 mb-3">
                  Core Engineering & Creative Activities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStep.keyActivities.map((act, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-2" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Touchpoint Note */}
              <div className="p-4 rounded-xl bg-zinc-900/90 border border-white/10 flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="text-xs text-zinc-300">
                  <span className="font-semibold text-white">Client Cadence: </span>
                  {currentStep.clientTouchpoints}
                </div>
              </div>
            </div>

            {/* Right Deliverables Panel */}
            <div className="w-full lg:w-96 rounded-2xl bg-zinc-900/90 border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-violet-400" />
                <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                  Timeline & Deliverables
                </span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950 border border-white/5 mb-6 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Duration</span>
                <span className="text-sm font-mono font-bold text-violet-300">{currentStep.timeline}</span>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase">Milestone Outputs:</div>
                {currentStep.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
