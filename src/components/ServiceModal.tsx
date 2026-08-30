import React from 'react';
import { X, CheckCircle2, Clock, Sparkles, ArrowRight, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { playSound } from '../utils/sound';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: (serviceName: string) => void;
  onHover?: (text?: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestService,
  onHover
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0A0A0B] border border-white/15 p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.8)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('click');
            onClose();
          }}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Block */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-violet-400 text-xs font-bold px-2.5 py-1 rounded-md bg-violet-950/60 border border-violet-500/30">
            SERVICE {service.number}
          </span>
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
            {service.category}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-3">
          {service.title}
        </h2>
        <p className="text-zinc-300 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-2xl">
          {service.tagline}
        </p>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 p-5 rounded-xl bg-zinc-950/80 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase">Typical Turnaround</div>
              <div className="text-sm font-semibold text-zinc-200">{service.timeline}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase">Production Guarantee</div>
              <div className="text-sm font-semibold text-zinc-200">100% Bespoke • Zero AI Slop</div>
            </div>
          </div>
        </div>

        {/* Deliverables & Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-violet-400" />
              <h3 className="font-display font-bold text-sm tracking-wider uppercase text-zinc-200">
                Core Deliverables
              </h3>
            </div>
            <div className="flex flex-col gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <h3 className="font-display font-bold text-sm tracking-wider uppercase text-zinc-200">
                Technical Stack & Capabilities
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-xs text-zinc-400">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Work Previews */}
        <div className="mb-10">
          <h3 className="font-display font-bold text-sm tracking-wider uppercase text-zinc-200 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span>Sample Output Previews</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.sampleOutputs.map((sample, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-zinc-950 border border-white/10 hover:border-violet-500/40 transition-all"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
                </div>
                <div className="p-4 relative">
                  <h4 className="font-display font-bold text-sm text-white mb-1">{sample.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{sample.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="text-xs font-mono text-zinc-400 text-center sm:text-left">
            Ready to integrate {service.title} into your next launch?
          </div>
          <button
            onClick={() => {
              playSound('click');
              onRequestService(service.title);
            }}
            onMouseEnter={() => {
              playSound('hover');
              onHover?.('BOOK');
            }}
            onMouseLeave={() => onHover?.()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all cursor-pointer"
          >
            <span>Request {service.title} Project</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
