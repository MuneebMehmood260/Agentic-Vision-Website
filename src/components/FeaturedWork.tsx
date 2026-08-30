import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, Play } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { CaseStudy } from '../types';
import { playSound } from '../utils/sound';

interface FeaturedWorkProps {
  onSelectProject: (project: CaseStudy) => void;
  onHover?: (text?: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject, onHover }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'AI Video',
    'AI Image',
    'Website',
    'Web App',
    'AI Automation'
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="work" className="relative py-28 bg-[#0A0A0B] border-t border-white/[0.08]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/[0.08] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="font-mono text-xs text-violet-400 tracking-widest uppercase font-semibold">
                PORTFOLIO & CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-zinc-400 font-medium text-base sm:text-lg max-w-md">
            Ideas transformed into digital experiences.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 text-xs font-mono text-zinc-500 border border-white/5 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSound('switch');
                setActiveFilter(cat);
              }}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.(cat.toUpperCase());
              }}
              onMouseLeave={() => onHover?.()}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-violet-500 text-white font-semibold shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => {
                playSound('open');
                onSelectProject(project);
              }}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.('VIEW');
              }}
              onMouseLeave={() => onHover?.()}
              className="group relative rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-violet-500/40 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl"
            >
              {/* Media Preview Stage */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-violet-300 font-medium">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400">
                    {project.year}
                  </span>
                </div>

                {/* Action Hover Indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-3 h-3 text-violet-400 fill-violet-400" />
                  <span>View Case Study</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-full bg-zinc-900 border border-white/10 group-hover:border-violet-400/50 group-hover:bg-violet-500 group-hover:text-white text-zinc-400 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Subcategory Pills & Stats */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.subcategories.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-white/5"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  {project.stats[0] && (
                    <div className="font-mono text-xs text-violet-400">
                      {project.stats[0].label}: <span className="font-bold text-white">{project.stats[0].value}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
