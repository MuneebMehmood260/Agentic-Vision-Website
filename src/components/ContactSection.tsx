import React, { useState } from 'react';
import {
  Sparkles,
  Mail,
  Clock,
  Globe2,
  Shield,
  Copy,
  Check,
  MessageCircle,
  AlertCircle,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { ContactFormData } from '../types';
import { playSound } from '../utils/sound';
import {
  STUDIO_CONFIG,
  getWhatsAppUrl,
  getMailtoUrl
} from '../config/contact';

interface ContactSectionProps {
  formData: ContactFormData;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormData>>;
  onHover?: (text?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  setFormData,
  onHover
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [actionStatus, setActionStatus] = useState<{
    type: 'whatsapp' | 'email' | null;
    message: string;
  }>({ type: null, message: '' });

  // Active public services for project inquiry
  const activeServices = [
    'AI Content Creation',
    'AI Image Generation',
    'AI Video Generation',
    'Website Design & Development',
    'Web App Design & Development',
    'Custom AI / Other Digital Project'
  ];

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service || !formData.service.trim()) {
      newErrors.service = 'Please select a service of interest.';
    }

    if (!formData.projectDetails || !formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide details about your project and goals.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendWhatsApp = () => {
    playSound('click');
    if (!validateForm()) {
      playSound('switch');
      setActionStatus({
        type: null,
        message: 'Please complete all required fields before proceeding.'
      });
      return;
    }

    const whatsappUrl = getWhatsAppUrl(formData);
    setActionStatus({
      type: 'whatsapp',
      message: 'Launching WhatsApp with your pre-filled inquiry... Review and tap send in WhatsApp.'
    });
    playSound('success');

    // Open WhatsApp
    const win = window.open(whatsappUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  };

  const handleSendEmail = () => {
    playSound('click');
    if (!validateForm()) {
      playSound('switch');
      setActionStatus({
        type: null,
        message: 'Please complete all required fields before proceeding.'
      });
      return;
    }

    const mailtoUrl = getMailtoUrl(formData);
    setActionStatus({
      type: 'email',
      message: 'Opening your email application with pre-filled inquiry draft...'
    });
    playSound('success');

    // Open Mail client
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_CONFIG.email);
    setCopiedEmail(true);
    playSound('click');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(STUDIO_CONFIG.whatsappDisplay);
    setCopiedWhatsApp(true);
    playSound('click');
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0A0A0B] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="font-mono text-xs text-violet-400 tracking-widest uppercase font-semibold">
              START A PROJECT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            LET'S CREATE SOMETHING GREAT.
          </h2>
          <p className="text-zinc-400 font-medium text-base sm:text-lg">
            Have a project in mind, need cinematic visuals, or want to build a modern digital experience? Send us your brief via WhatsApp or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Stage */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950/90 border border-white/10 p-6 sm:p-10 shadow-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendWhatsApp();
              }}
              className="space-y-6 text-left"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono text-zinc-400 uppercase">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    {errors.name && (
                      <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Required
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-600 outline-none transition-all ${
                      errors.name
                        ? 'border-rose-500/60 focus:border-rose-400 bg-rose-950/10'
                        : 'border-white/10 focus:border-violet-400/60 focus:bg-zinc-800'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono text-zinc-400 uppercase">
                      Email Address <span className="text-violet-400">*</span>
                    </label>
                    {errors.email && (
                      <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Required
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-600 outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500/60 focus:border-rose-400 bg-rose-950/10'
                        : 'border-white/10 focus:border-violet-400/60 focus:bg-zinc-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Service of Interest */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-mono text-zinc-400 uppercase">
                    Service of Interest <span className="text-violet-400">*</span>
                  </label>
                  {errors.service && (
                    <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Required
                    </span>
                  )}
                </div>
                <select
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white outline-none transition-all cursor-pointer ${
                    errors.service
                      ? 'border-rose-500/60 focus:border-rose-400 bg-rose-950/10'
                      : 'border-white/10 focus:border-violet-400/60 focus:bg-zinc-800'
                  }`}
                >
                  {activeServices.map((srv) => (
                    <option key={srv} value={srv} className="bg-zinc-950 text-white">
                      {srv}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-xs text-rose-400 mt-1.5">{errors.service}</p>
                )}
              </div>

              {/* Row 3: Project Details Textarea */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-mono text-zinc-400 uppercase">
                    Project Details & Goals <span className="text-violet-400">*</span>
                  </label>
                  {errors.projectDetails && (
                    <span className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Required
                    </span>
                  )}
                </div>
                <textarea
                  rows={5}
                  placeholder="Tell us what you're imagining — goals, desired visuals, deliverables, timeline or references..."
                  value={formData.projectDetails}
                  onChange={(e) => {
                    setFormData({ ...formData, projectDetails: e.target.value });
                    if (errors.projectDetails) setErrors({ ...errors, projectDetails: '' });
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none ${
                    errors.projectDetails
                      ? 'border-rose-500/60 focus:border-rose-400 bg-rose-950/10'
                      : 'border-white/10 focus:border-violet-400/60 focus:bg-zinc-800'
                  }`}
                />
                {errors.projectDetails && (
                  <p className="text-xs text-rose-400 mt-1.5">{errors.projectDetails}</p>
                )}
              </div>

              {/* NDA Checkbox */}
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  id="nda"
                  checked={formData.ndaRequired || false}
                  onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                  className="w-4 h-4 rounded bg-zinc-900 border-white/20 text-violet-400 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="nda" className="text-xs text-zinc-400 flex items-center gap-1.5 cursor-pointer">
                  <Shield className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Request standard Mutual Non-Disclosure Agreement (NDA)</span>
                </label>
              </div>

              {/* Action Buttons Section */}
              <div className="space-y-3 pt-2">
                {/* PRIMARY CTA: Send via WhatsApp */}
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  onMouseEnter={() => {
                    playSound('hover');
                    onHover?.('WHATSAPP');
                  }}
                  onMouseLeave={() => onHover?.()}
                  className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] text-zinc-950 font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-200 shadow-[0_0_30px_rgba(16,185,129,0.35)] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-zinc-950 text-zinc-950" />
                  <span>Send via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-1">
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    or
                  </span>
                  <div className="h-[1px] flex-1 bg-white/[0.08]" />
                </div>

                {/* SECONDARY CTA: Send via Email */}
                <button
                  type="button"
                  onClick={handleSendEmail}
                  onMouseEnter={() => {
                    playSound('hover');
                    onHover?.('EMAIL');
                  }}
                  onMouseLeave={() => onHover?.()}
                  className="w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-white/25 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span>Send via Email</span>
                </button>
              </div>

              {/* Status & Guidance Notice */}
              {actionStatus.message && (
                <div
                  className={`p-3.5 rounded-xl border text-xs font-mono flex items-start gap-2.5 animate-in fade-in duration-200 ${
                    actionStatus.type === 'whatsapp'
                      ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
                      : actionStatus.type === 'email'
                      ? 'bg-violet-950/30 border-violet-500/30 text-violet-300'
                      : 'bg-rose-950/30 border-rose-500/30 text-rose-300'
                  }`}
                >
                  <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="flex-1 leading-relaxed">
                    {actionStatus.message}
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Studio Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Direct Studio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10">
              <h3 className="font-display font-bold text-lg text-white mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Direct Studio Desk</span>
              </h3>

              <div className="space-y-5 text-sm text-zinc-300">
                {/* WhatsApp Channel */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-zinc-500 uppercase">WhatsApp (Instant)</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-emerald-400 font-medium flex items-center gap-1"
                      >
                        <span>{STUDIO_CONFIG.whatsappDisplay}</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500" />
                      </a>
                      <button
                        onClick={handleCopyWhatsApp}
                        className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        title="Copy WhatsApp Number"
                      >
                        {copiedWhatsApp ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email Channel */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-zinc-500 uppercase">Direct Email</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${STUDIO_CONFIG.email}`}
                        className="text-white hover:text-violet-300 font-medium"
                      >
                        {STUDIO_CONFIG.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        title="Copy Email"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Response Guarantee */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">Response Time</div>
                    <div className="text-white font-medium mt-0.5">{STUDIO_CONFIG.responseTime}</div>
                  </div>
                </div>

                {/* Global Coverage */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 shrink-0 mt-0.5">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">Timezone Coverage</div>
                    <div className="text-white font-medium mt-0.5">{STUDIO_CONFIG.coverage}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Studio Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-zinc-300">{STUDIO_CONFIG.status}</span>
                </div>
              </div>
            </div>

            {/* Production Quality Callout */}
            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/5 text-xs text-zinc-400 leading-relaxed space-y-2">
              <div className="font-display font-semibold text-zinc-200 uppercase text-[11px] tracking-wider">
                Production Integrity
              </div>
              <p>
                All client source files, prompts, checkpoint models, and code repositories are transferred with 100% intellectual property rights upon project completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

