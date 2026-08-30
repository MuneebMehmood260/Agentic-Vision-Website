import React, { useState } from 'react';
import {
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Palette,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Share2,
  Check
} from 'lucide-react';
import { CaseStudy } from '../types';
import { playSound } from '../utils/sound';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onSelectNextProject: (nextProject: CaseStudy) => void;
  allProjects: CaseStudy[];
  onHover?: (text?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectNextProject,
  allProjects,
  onHover
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isCopiedShare, setIsCopiedShare] = useState(false);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    playSound('click');
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopiedShare(true);
    playSound('success');
    setTimeout(() => setIsCopiedShare(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-40 bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-white/10 px-5 sm:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-violet-400 text-xs uppercase tracking-widest font-bold">
            CASE STUDY
          </span>
          <span className="text-zinc-500">•</span>
          <span className="font-display font-semibold text-sm sm:text-base text-zinc-200 truncate max-w-[200px] sm:max-w-md">
            {project.title}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleShare}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-zinc-900 border border-white/10 hover:border-white/30 text-xs font-mono text-zinc-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Copy Case Study Link"
          >
            {isCopiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-violet-400" />}
            <span className="hidden sm:inline">{isCopiedShare ? 'Copied' : 'Share'}</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Case Study Document Container */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-16 text-left">
        {/* Project Hero Banner */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-mono">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-mono">
              {project.year}
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 text-xs font-mono">
              {project.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mb-8">
            {project.shortDesc}
          </p>

          {/* Master Media Cover */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl mb-10">
            <img
              src={project.coverImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-950/90 border border-white/10">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="p-3">
                <div className="text-[11px] font-mono text-zinc-400 uppercase mb-1">{stat.label}</div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-violet-300">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 01 — THE CHALLENGE */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-violet-400 font-bold text-sm">01</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              THE CHALLENGE
            </h2>
          </div>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
            {project.challenge}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.challengeDetails.map((detail, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-950/60 border border-white/5 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                <span className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 02 — THE IDEA */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-violet-400 font-bold text-sm">02</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              THE IDEA & STRATEGY
            </h2>
          </div>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
            {project.idea}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.ideaDetails.map((detail, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — CREATIVE DIRECTION */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-violet-400 font-bold text-sm">03</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              CREATIVE DIRECTION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-violet-400" />
                <h3 className="font-display font-semibold text-sm text-zinc-200 uppercase">Atmosphere & Mood</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {project.creativeDirection.mood}
              </p>
              <div className="text-xs font-mono text-zinc-500">
                Typography: <span className="text-zinc-300">{project.creativeDirection.typography}</span>
              </div>
            </div>

            {/* Color Palette Swatches */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10">
              <h3 className="font-display font-semibold text-sm text-zinc-200 uppercase mb-3">
                Curated Color Profile (Click to copy hex)
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {project.creativeDirection.palette.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCopyColor(color.hex)}
                    className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-violet-400/50 flex items-center gap-3 transition-colors text-left group cursor-pointer"
                  >
                    <span
                      className="w-6 h-6 rounded-md border border-white/20 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="truncate">
                      <div className="text-xs font-medium text-zinc-200 truncate">{color.name}</div>
                      <div className="text-[10px] font-mono text-zinc-500 group-hover:text-violet-300">
                        {copiedHex === color.hex ? 'COPIED!' : color.hex}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-zinc-500 uppercase mr-2">Visual Motifs:</span>
            {project.creativeDirection.visualMotifs.map((motif, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
              >
                {motif}
              </span>
            ))}
          </div>
        </section>

        {/* 04 — EXECUTION */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-violet-400 font-bold text-sm">04</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              EXECUTION & PIPELINE
            </h2>
          </div>

          <div className="space-y-4">
            {project.execution.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
                    <span className="font-mono text-violet-400 text-xs">Step {idx + 1}.</span>
                    <span>{step.step}</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {step.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-white/10 text-[11px] font-mono text-violet-300/90"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — FINAL RESULT */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-violet-400 font-bold text-sm">05</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              FINAL RESULT & IMPACT
            </h2>
          </div>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
            {project.finalResult.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.finalResult.metrics.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-zinc-950 border border-violet-500/30 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-violet-400" />
                  <span className="text-xs font-mono text-zinc-400 uppercase">{metric.label}</span>
                </div>
                <div className="text-3xl font-display font-extrabold text-white mb-2">{metric.value}</div>
                <div className="text-xs text-zinc-400">{metric.detail}</div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-zinc-950 border border-white/10">
            <h3 className="font-display font-semibold text-sm text-zinc-200 uppercase mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-violet-400" />
              <span>Shipped Deliverables</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.finalResult.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — TECHNOLOGIES / TOOLS */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-violet-400 font-bold text-sm">06</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              TECHNOLOGIES & ARCHITECTURE
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-zinc-950 border border-white/10 text-sm font-mono text-zinc-200 flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 07 — GALLERY & COMPARISON */}
        <section className="mb-16 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-violet-400 font-bold text-sm">07</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              INTERACTIVE GALLERY
            </h2>
          </div>

          <div className="space-y-8">
            {project.gallery.map((item, idx) => {
              if (item.type === 'comparison' && item.beforeUrl && item.afterUrl) {
                return (
                  <div key={idx} className="space-y-2">
                    <div className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                      <span>{item.caption}</span>
                      <span className="flex items-center gap-1 text-violet-400">
                        <SlidersHorizontal className="w-3 h-3" />
                        <span>Drag slider to compare</span>
                      </span>
                    </div>
                    {/* Interactive Before/After Split Slider */}
                    <div className="relative h-[320px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/15 select-none">
                      {/* After Image (Full background) */}
                      <img
                        src={item.afterUrl}
                        alt="Rendered Output"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Before Image (Clipped) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPos}%` }}
                      >
                        <img
                          src={item.beforeUrl}
                          alt="Initial Wireframe"
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover max-w-none"
                          style={{ width: '100%' }}
                        />
                        <div className="absolute top-4 left-4 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-zinc-300">
                          WIREFRAME / BASE
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-violet-950/80 border border-violet-500/40 px-2.5 py-1 rounded text-[10px] font-mono text-violet-300">
                        FINAL SYNTHESIS
                      </div>

                      {/* Divider Line */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-violet-400 shadow-[0_0_15px_rgba(139,92,246,1)] cursor-ew-resize flex items-center justify-center"
                        style={{ left: `${sliderPos}%` }}
                      >
                        <div className="w-6 h-6 rounded-full bg-violet-400 text-white flex items-center justify-center text-[10px] font-bold shadow-lg">
                          ↔
                        </div>
                      </div>

                      {/* Range Input Overlay */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPos}
                        onChange={(e) => setSliderPos(Number(e.target.value))}
                        className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div key={idx} className="space-y-2">
                  <div className="rounded-2xl overflow-hidden border border-white/15 bg-zinc-950">
                    <img
                      src={item.url}
                      alt={item.caption}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto max-h-[500px] object-cover"
                    />
                  </div>
                  <p className="text-xs font-mono text-zinc-400">{item.caption}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 08 — NEXT PROJECT */}
        <section className="pt-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-violet-400 font-bold text-sm">08</span>
            <span className="text-zinc-500">/</span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              NEXT PROJECT
            </h2>
          </div>

          <button
            onClick={() => {
              playSound('open');
              onSelectNextProject(nextProject);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => {
              playSound('hover');
              onHover?.('NEXT');
            }}
            onMouseLeave={() => onHover?.()}
            className="w-full group p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 hover:border-violet-500/40 hover:bg-zinc-900 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 cursor-pointer text-left shadow-xl"
          >
            <div>
              <span className="font-mono text-xs text-violet-400 uppercase tracking-widest block mb-1">
                {nextProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-violet-300 transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-sm text-zinc-400 max-w-lg mt-1">{nextProject.shortDesc}</p>
            </div>

            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500 text-zinc-200 font-semibold text-sm transition-all shrink-0">
              <span>View Case Study</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </section>
      </div>
    </div>
  );
};
