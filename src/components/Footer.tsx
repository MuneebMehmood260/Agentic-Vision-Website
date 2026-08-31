import React from 'react';
import { ArrowUp, Instagram, Facebook, Github, MessageCircle, Mail } from 'lucide-react';
import { playSound } from '../utils/sound';
import { STUDIO_CONFIG } from '../config/contact';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onHover?: (text?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onHover }) => {
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/agenticvision01/' },
    { name: 'Github', icon: Github, href: 'https://github.com/MuneebMehmood260' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61593743398342' }
  ];

  return (
    <footer className="relative bg-[#0A0A0B] border-t border-white/[0.08] pt-20 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center">
                <span className="font-display font-bold text-sm text-violet-300">AV</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                AGENTIC VISION
              </span>
            </div>

            <p className="font-display font-medium text-base text-zinc-300">
              Your Vision. Engineered with AI.
            </p>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              AI-powered content, cinematic visuals, websites, web applications, and autonomous digital experiences built for brands that want to stand out.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-zinc-400">
                Operating Globally • Remote & San Francisco
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Navigation
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      playSound('click');
                      onNavigate(link.id);
                    }}
                    onMouseEnter={() => {
                      playSound('hover');
                      onHover?.(link.label.toUpperCase());
                    }}
                    onMouseLeave={() => onHover?.()}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-violet-300 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Connect & Channels
            </div>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => {
                      playSound('hover');
                      onHover?.(social.name.toUpperCase());
                    }}
                    onMouseLeave={() => onHover?.()}
                    className="p-3 rounded-xl bg-zinc-950 border border-white/10 hover:border-violet-400/50 hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-mono"
                  >
                    <Icon className="w-4 h-4 text-violet-400" />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-400 mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 uppercase text-[10px]">WhatsApp:</span>
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{STUDIO_CONFIG.whatsappDisplay}</span>
                </a>
              </div>
              <div className="flex items-center justify-between pt-1.5 border-t border-white/5">
                <span className="text-zinc-500 uppercase text-[10px]">Email:</span>
                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="text-violet-300 hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{STUDIO_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © 2026 Agentic Vision. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>AI Creative Studio</span>
            <span>•</span>
            <span>Digital Experiences</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => {
                playSound('hover');
                onHover?.('TOP');
              }}
              onMouseLeave={() => onHover?.()}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-violet-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
