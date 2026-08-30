import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Mail,
  Clock,
  Globe2,
  Shield,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import { ContactFormData } from '../types';
import { playSound } from '../utils/sound';

/**
 * DIRECT STUDIO CONTACT CONFIGURATION:
 * Update the studio email and support channels here as needed.
 */
export const STUDIO_CONTACT_EMAIL = 'hello@agenticvision.studio';

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
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Active public services for project inquiry
  const activeServices = [
    'AI Content Creation',
    'AI Image Generation',
    'AI Video Generation',
    'Website Design & Development',
    'Web App Design & Development',
    'Custom AI / Other Digital Project'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    playSound('click');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playSound('success');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_CONTACT_EMAIL);
    setCopiedEmail(true);
    playSound('click');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service || 'Creative Project'}`);
    const body = encodeURIComponent(
      `Hi Agentic Vision,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.projectDetails}\n\nNDA Requested: ${formData.ndaRequired ? 'Yes' : 'No'}`
    );
    window.location.href = `mailto:${STUDIO_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
            Have a project in mind, need cinematic visuals, or want to build a modern digital experience? Send us your brief.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form Stage */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950/90 border border-white/10 p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                    Inquiry Summary Prepared
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been recorded. You can also open your email client directly below to send it to our desk immediately.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 text-left text-xs font-mono text-zinc-400 space-y-2 max-w-md mx-auto">
                  <div><span className="text-zinc-500">Contact:</span> <span className="text-white">{formData.name} ({formData.email})</span></div>
                  <div><span className="text-zinc-500">Service:</span> <span className="text-white">{formData.service}</span></div>
                  {formData.projectDetails && (
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-zinc-500">Brief:</span>
                      <p className="text-zinc-300 font-sans text-xs mt-1 leading-relaxed line-clamp-3">{formData.projectDetails}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleMailto}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-violet-500 hover:bg-violet-400 text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      playSound('click');
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Edit Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-violet-400/60 focus:bg-zinc-800 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-violet-400/60 focus:bg-zinc-800 text-sm text-white placeholder-zinc-600 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Service of Interest */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                    Service of Interest *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-violet-400/60 focus:bg-zinc-800 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    {activeServices.map((srv) => (
                      <option key={srv} value={srv} className="bg-zinc-950 text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 3: Project Details Textarea */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                    Project Details & Goals
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what you're imagining — goals, desired visuals, deliverables, references..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 focus:border-violet-400/60 focus:bg-zinc-800 text-sm text-white placeholder-zinc-600 outline-none transition-all resize-none"
                  />
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

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => {
                    playSound('hover');
                    onHover?.('SEND');
                  }}
                  onMouseLeave={() => onHover?.()}
                  className="w-full py-4 rounded-xl bg-violet-500 hover:bg-violet-400 disabled:opacity-50 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.4)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Preparing Inquiry...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Direct Studio Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10">
              <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Direct Studio Desk</span>
              </h3>

              <div className="space-y-4 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-violet-400 shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="text-xs font-mono text-zinc-500 uppercase">Direct Email</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${STUDIO_CONTACT_EMAIL}`}
                        className="text-white hover:text-violet-300 font-medium"
                      >
                        {STUDIO_CONTACT_EMAIL}
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

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">Response Time</div>
                    <div className="text-white font-medium mt-0.5">Under 12 Hours (Guaranteed)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">Timezone Coverage</div>
                    <div className="text-white font-medium mt-0.5">Global / Americas, EMEA, APAC</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs font-mono text-zinc-500 uppercase mb-2">Studio Status</div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-zinc-300">Accepting select client projects for Q2/Q3 2026</span>
                </div>
              </div>
            </div>

            {/* Quality Commitment Callout */}
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
