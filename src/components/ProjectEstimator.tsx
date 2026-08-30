import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, Layers, Sliders, ShieldCheck } from 'lucide-react';
import { playSound } from '../utils/sound';

interface ProjectEstimatorProps {
  onApplyToInquiry: (service: string, budget: string, details: string) => void;
  onHover?: (text?: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyToInquiry, onHover }) => {
  const [selectedService, setSelectedService] = useState('AI Video');
  const [timelineSpeed, setTimelineSpeed] = useState<'Standard (2–3 Wks)' | 'Rush Launch (7–10 Days)' | 'Comprehensive (4+ Wks)'>('Standard (2–3 Wks)');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    '4K Cinematic Color Grading',
    'Omnichannel Social Cuts (9:16 & 1:1)'
  ]);

  const serviceOptions = [
    { name: 'AI Video', base: 2200, desc: 'Cinematic commercials & motion loops' },
    { name: 'AI Image', base: 1400, desc: '8K Photorealism & spatial product renders' },
    { name: 'AI Content', base: 900, desc: 'Marketing campaigns & narrative copy' },
    { name: 'Website', base: 2800, desc: 'Next.js high-performance digital flagship' },
    { name: 'Web App', base: 3800, desc: 'SaaS interfaces & telemetry dashboards' },
    { name: 'AI Automation', base: 1900, desc: 'Autonomous multi-agent pipelines' }
  ];

  const availableAddons: { [key: string]: { name: string; price: number; desc: string }[] } = {
    'AI Video': [
      { name: '4K Cinematic Color Grading', price: 400, desc: 'Kodak film emulation' },
      { name: 'Omnichannel Social Cuts (9:16 & 1:1)', price: 500, desc: 'Platform-tailored edits' },
      { name: 'Custom Spatial Sound & Foley Score', price: 600, desc: 'Synthesized audio mastering' }
    ],
    'AI Image': [
      { name: 'Custom Brand LoRA Model Checkpoint', price: 700, desc: '100% material consistency' },
      { name: '8K Master Print Upscaling', price: 350, desc: 'Ultra-resolution mastering' },
      { name: '360° Lifestyle Scene Variations', price: 500, desc: 'Multi-environment staging' }
    ],
    'AI Content': [
      { name: 'Brand Voice Neural Embedding', price: 400, desc: 'Custom style persona' },
      { name: '90-Day Omnichannel Content Engine', price: 600, desc: 'Structured editorial deck' },
      { name: 'Ad Variant Copy Testing Matrix', price: 450, desc: 'High-converting hook scripts' }
    ],
    'Website': [
      { name: 'Interactive WebGL / 3D Shaders', price: 900, desc: '60fps canvas visualizer' },
      { name: 'Sub-Second Edge CMS Integration', price: 600, desc: 'Headless content engine' },
      { name: 'Conversion Optimization & Heatmaps', price: 450, desc: 'Funnel analytics setup' }
    ],
    'Web App': [
      { name: 'Real-time WebSocket Data Telemetry', price: 1100, desc: 'Sub-10ms streaming updates' },
      { name: 'CMD+K Keyboard Command Palette', price: 500, desc: 'Power-user workflow' },
      { name: 'Role-Based Access Control (RBAC)', price: 700, desc: 'Enterprise security auth' }
    ],
    'AI Automation': [
      { name: 'Multi-Model LLM Routing Engine', price: 650, desc: 'Cost/latency optimization' },
      { name: 'Interactive Slack Approval Bot', price: 500, desc: '1-click human-in-the-loop' },
      { name: 'Custom Enterprise API Connectors', price: 800, desc: 'Bi-directional sync' }
    ]
  };

  const toggleAddon = (addonName: string) => {
    playSound('click');
    if (selectedAddons.includes(addonName)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addonName));
    } else {
      setSelectedAddons([...selectedAddons, addonName]);
    }
  };

  const currentServiceObj = serviceOptions.find((s) => s.name === selectedService) || serviceOptions[0];
  const currentAddonsList = availableAddons[selectedService] || [];

  const addonsTotal = currentAddonsList
    .filter((a) => selectedAddons.includes(a.name))
    .reduce((sum, item) => sum + item.price, 0);

  const speedMultiplier = timelineSpeed === 'Rush Launch (7–10 Days)' ? 1.3 : timelineSpeed === 'Comprehensive (4+ Wks)' ? 1.2 : 1.0;
  const rawTotal = Math.round((currentServiceObj.base + addonsTotal) * speedMultiplier);

  const getBudgetTier = (val: number) => {
    if (val < 1000) return '$500–$1,000';
    if (val < 2500) return '$1,000–$2,500';
    if (val < 5000) return '$2,500–$5,000';
    return '$5,000+';
  };

  const budgetTier = getBudgetTier(rawTotal);

  const handleApply = () => {
    playSound('success');
    const briefText = `Configured Scope: ${selectedService} (${timelineSpeed}). Selected Add-ons: ${
      selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Base package'
    }. Estimated budget guideline: ~$${rawTotal.toLocaleString()} (${budgetTier}).`;

    onApplyToInquiry(selectedService, budgetTier, briefText);
  };

  return (
    <section className="relative py-24 bg-[#0A0A0B] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 mb-3">
            <Calculator className="w-3.5 h-3.5 text-violet-400" />
            <span className="font-mono text-xs text-violet-300 font-medium uppercase tracking-wider">
              INTERACTIVE SCOPE CONFIGURATOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            ESTIMATE YOUR PROJECT SCOPE
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Configure deliverables, options, and timelines with transparent guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-3xl bg-zinc-950/90 border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Left Configuration Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Service */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-violet-950 border border-violet-500/30 text-violet-300 flex items-center justify-center text-[10px] font-bold">1</span>
                <span>Select Primary Core Focus</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {serviceOptions.map((srv) => {
                  const isSelected = selectedService === srv.name;
                  return (
                    <button
                      key={srv.name}
                      onClick={() => {
                        playSound('switch');
                        setSelectedService(srv.name);
                        setSelectedAddons([]);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-900 border-violet-400/60 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                          : 'bg-zinc-950 border-white/5 hover:border-white/20 text-zinc-400'
                      }`}
                    >
                      <div className={`font-display font-bold text-xs sm:text-sm ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                        {srv.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 truncate mt-0.5">
                        from ${srv.base}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline Speed */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-violet-950 border border-violet-500/30 text-violet-300 flex items-center justify-center text-[10px] font-bold">2</span>
                <span>Target Timeline</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {(['Standard (2–3 Wks)', 'Rush Launch (7–10 Days)', 'Comprehensive (4+ Wks)'] as const).map((timeline) => {
                  const isSelected = timelineSpeed === timeline;
                  return (
                    <button
                      key={timeline}
                      onClick={() => {
                        playSound('switch');
                        setTimelineSpeed(timeline);
                      }}
                      className={`p-3 rounded-xl border text-center text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-900 border-violet-400/60 text-violet-300 font-semibold'
                          : 'bg-zinc-950 border-white/5 hover:border-white/20 text-zinc-400'
                      }`}
                    >
                      {timeline}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-violet-950 border border-violet-500/30 text-violet-300 flex items-center justify-center text-[10px] font-bold">3</span>
                <span>Specialized Scope Add-ons</span>
              </div>
              <div className="space-y-2">
                {currentAddonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.name);
                  return (
                    <div
                      key={addon.name}
                      onClick={() => toggleAddon(addon.name)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-zinc-900 border-violet-500/40 text-white'
                          : 'bg-zinc-950/60 border-white/5 hover:border-white/15 text-zinc-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-violet-500 border-violet-500 text-white' : 'border-zinc-700 bg-zinc-900'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-display text-xs sm:text-sm font-semibold">{addon.name}</div>
                          <div className="text-[11px] text-zinc-500 font-mono">{addon.desc}</div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-zinc-300 font-semibold">+${addon.price}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary & Action Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-white/10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Scope Estimate
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300 text-[10px] font-mono font-bold">
                  {selectedService}
                </span>
              </div>

              <div className="mb-6">
                <div className="text-xs font-mono text-zinc-400 uppercase">Estimated Budget Tier</div>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                  {budgetTier}
                </div>
                <div className="text-xs font-mono text-violet-400 mt-1">
                  Est. Base Total: ~${rawTotal.toLocaleString()}
                </div>
              </div>

              <div className="space-y-2 mb-8 text-xs text-zinc-300">
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-500">Timeline:</span>
                  <span className="font-mono font-medium text-white">{timelineSpeed}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-500">Active Add-ons:</span>
                  <span className="font-mono font-medium text-white">{selectedAddons.length} selected</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-zinc-500">Master Deliverables:</span>
                  <span className="font-mono text-emerald-400">8K/4K + Full IP Rights</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={handleApply}
                onMouseEnter={() => {
                  playSound('hover');
                  onHover?.('AUTOFILL');
                }}
                onMouseLeave={() => onHover?.()}
                className="w-full py-4 rounded-xl bg-violet-500 hover:bg-violet-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all cursor-pointer"
              >
                <span>Populate Contact Inquiry →</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <div className="text-[10px] font-mono text-zinc-500 text-center mt-3">
                Auto-populates inquiry form below with your custom scope.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
