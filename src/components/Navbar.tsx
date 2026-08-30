import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { playSound, setSoundEnabled, getSoundEnabled } from '../utils/sound';

interface NavbarProps {
  onOpenProjectBuilder?: () => void;
  onNavigate?: (sectionId: string) => void;
  onHover?: (text?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectBuilder, onNavigate, onHover }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = !audioActive;
    setAudioActive(newState);
    setSoundEnabled(newState);
    if (newState) {
      setTimeout(() => playSound('switch'), 50);
    }
  };

  const handleNavClick = (sectionId: string) => {
    playSound('click');
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            onMouseEnter={() => {
              playSound('hover');
              onHover?.('AV');
            }}
            onMouseLeave={() => onHover?.()}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-violet-400/60 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-display font-bold text-sm tracking-tighter text-white group-hover:text-violet-300 transition-colors">
                AV
              </span>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-violet-400 rounded-full blur-[1px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-base sm:text-lg text-white leading-none">
                AGENTIC VISION
              </span>
              <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase mt-0.5">
                STUDIO • AI EXPERIENCES
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About' },
              { id: 'process', label: 'Process' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => {
                  playSound('hover');
                  onHover?.();
                }}
                onMouseLeave={() => onHover?.()}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.(audioActive ? 'MUTE' : 'AUDIO');
              }}
              onMouseLeave={() => onHover?.()}
              title={audioActive ? 'Mute Interface Sound' : 'Enable Subtle UI Audio'}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center ${
                audioActive
                  ? 'bg-violet-500/10 border-violet-500/40 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.25)]'
                  : 'bg-zinc-900/60 border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20'
              }`}
            >
              {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Studio Availability Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-[11px] font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Q2/Q3 Available</span>
            </div>

            {/* Primary CTA: Start a Project */}
            <button
              onClick={() => {
                playSound('click');
                if (onOpenProjectBuilder) {
                  onOpenProjectBuilder();
                } else {
                  handleNavClick('contact');
                }
              }}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.('START');
              }}
              onMouseLeave={() => onHover?.()}
              className="relative group overflow-hidden rounded-full p-[1px] font-medium text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity blur-[1px]" />
              <div className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-zinc-950 flex items-center gap-2 text-white font-semibold transition-all duration-300 group-hover:bg-zinc-900">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-violet-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                playSound('switch');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0B]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-all animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            <div className="text-zinc-400 font-mono text-[11px] uppercase tracking-widest px-2 mb-2">
              Navigation Menu
            </div>
            {[
              { id: 'home', label: '01. Home' },
              { id: 'services', label: '02. Services' },
              { id: 'about', label: '03. About Studio' },
              { id: 'process', label: '04. How We Build' },
              { id: 'contact', label: '05. Contact & Inquiries' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-2xl font-display font-bold text-zinc-200 hover:text-violet-300 py-2.5 border-b border-white/[0.06] flex items-center justify-between group transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-violet-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-zinc-300">Available for Q2/Q3 Projects</span>
              </div>
              <button
                onClick={toggleSound}
                className="text-xs font-mono text-violet-400 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/30"
              >
                {audioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{audioActive ? 'Sound On' : 'Sound Off'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                playSound('click');
                if (onOpenProjectBuilder) {
                  onOpenProjectBuilder();
                } else {
                  handleNavClick('contact');
                }
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold text-center text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Start a Project →</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
