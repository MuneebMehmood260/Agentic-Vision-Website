import React, { useState } from 'react';
import { ArrowRight, Sparkles, Camera, Film, Layout, Code, Cpu } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { playSound } from '../utils/sound';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onHover?: (text?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onHover }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-violet-400" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-violet-400" />;
      case 'Film':
        return <Film className="w-5 h-5 text-violet-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-violet-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#0A0A0B] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="font-mono text-xs text-violet-400 tracking-widest uppercase font-semibold">
                SERVICES & PRODUCTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              WHAT WE CREATE
            </h2>
          </div>
          <p className="text-zinc-400 font-medium text-base sm:text-lg max-w-md">
            From a single idea to a complete digital experience.
          </p>
        </div>

        {/* Services Grid (Filtered by visibility) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData
            .filter((service) => service.visible !== false)
            .map((service) => {
              const isHovered = hoveredCard === service.id;
              const primarySample = service.sampleOutputs && service.sampleOutputs[0];

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => {
                    setHoveredCard(service.id);
                    playSound('hover');
                    onHover?.('EXPLORE');
                  }}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    onHover?.();
                  }}
                  onClick={() => {
                    playSound('click');
                    onSelectService(service);
                  }}
                  className={`group relative rounded-2xl bg-zinc-950/80 border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isHovered
                      ? 'border-violet-500/50 bg-zinc-900/90 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.18)] -translate-y-1'
                      : 'border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {/* Glow Spotlight */}
                  <div
                    className={`absolute -top-24 -right-24 w-48 h-48 bg-violet-500/10 rounded-full blur-2xl transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Card Content Top */}
                  <div>
                    {/* Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono font-extrabold text-2xl sm:text-3xl text-zinc-600 group-hover:text-violet-400 transition-colors">
                        {service.number}
                      </span>
                      <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-violet-500/40 group-hover:bg-zinc-800 transition-all">
                        {getServiceIcon(service.iconName)}
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 font-normal line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Visual Work Preview Thumbnail Strip */}
                    {primarySample && (
                      <div className="mb-5 overflow-hidden rounded-xl bg-zinc-900/90 border border-white/10 group-hover:border-violet-500/30 transition-all">
                        <div className="relative h-32 sm:h-36 overflow-hidden">
                          <img
                            src={primarySample.image}
                            alt={primarySample.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                          <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                            <span className="text-[11px] font-mono text-zinc-200 font-medium truncate drop-shadow-sm">
                              {primarySample.title}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-violet-300 border border-white/10">
                              Preview
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Deliverables snippet checklist */}
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-white/[0.06]">
                      {service.deliverables.slice(0, 3).map((deliv, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-zinc-300">
                          <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1.5 font-display text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-violet-300 transition-colors">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 text-violet-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
