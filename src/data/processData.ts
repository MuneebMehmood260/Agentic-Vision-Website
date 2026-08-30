import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Alignment & Ambition',
    description: 'We dig deep into your brand, target audience, competitive moat, and core business objectives to define the project parameters.',
    timeline: 'Days 1–3',
    keyActivities: [
      'Discovery interview & stakeholder objective workshop',
      'Audience psychology & competitor landscape mapping',
      'Technical architecture audit & asset inventory',
      'Scope finalization, deliverables breakdown & milestone roadmap'
    ],
    clientTouchpoints: '1x 45-min kickoff workshop + shared collaborative Notion roadmap',
    deliverables: [
      'Project Brief & Technical Scope Document',
      'Moodboard & Strategic Alignment Deck',
      'Project Timeline & Delivery Schedule'
    ],
    icon: 'Compass'
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'Creative & Technical Architecture',
    description: 'We develop the creative narrative, visual system, AI model pipeline, and engineering blueprints before generating a single pixel.',
    timeline: 'Days 4–7',
    keyActivities: [
      'Creative direction manifesto & visual tone exploration',
      'AI model selection, prompt matrix & custom LoRA planning',
      'Information architecture, wireframing & interaction choreography',
      'Color science & typography system definition'
    ],
    clientTouchpoints: 'Creative direction presentation & interactive prototype walkthrough',
    deliverables: [
      'Creative Direction Manifesto & Color/Type Guidelines',
      'Figma Interactive Wireframe Prototype',
      'Technical Pipeline Blueprint & Model Specification'
    ],
    icon: 'Layers'
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'High-Fidelity Production',
    description: 'We produce the visuals, cinematic video sequences, bespoke copy, and production-grade code with rapid iterative velocity.',
    timeline: 'Days 8–18',
    keyActivities: [
      'Generative image synthesis, upscaling & photorealistic staging',
      'Neural video generation, temporal stabilization & cinematic grading',
      'Frontend engineering (React/Next.js/Tailwind) & component assembly',
      'Audio design, voice synthesis & spatial scoring'
    ],
    clientTouchpoints: 'Asynchronous Loom progress updates + live staging review links',
    deliverables: [
      'High-Resolution 8K Visual Assets & Key Art',
      'Cinematic Commercial Cuts & Video Deliverables',
      'Live Staging Web Application / Interface Build'
    ],
    icon: 'Cpu'
  },
  {
    number: '04',
    title: 'REFINE',
    subtitle: 'Micro-Polish & Performance QA',
    description: 'We review, stress-test, and polish every transition, typography baseline, shader interaction, and conversion funnel detail.',
    timeline: 'Days 19–23',
    keyActivities: [
      'Cross-device responsive testing across 12+ viewports',
      'Performance audit targeting 95+ Core Web Vitals and sub-500ms loads',
      'Client feedback consolidation & surgical iteration rounds',
      'WCAG AA accessibility validation & keyboard navigation testing'
    ],
    clientTouchpoints: 'Polishing review session & final approval sign-off',
    deliverables: [
      'Consolidated Revision Passes',
      'Lighthouse 95+ Performance Audit Report',
      'Security & Cross-Browser Validation Checklist'
    ],
    icon: 'Sliders'
  },
  {
    number: '05',
    title: 'DELIVER',
    subtitle: 'Global Launch & Asset Handover',
    description: 'We launch the live experience to global edge infrastructure, transfer full asset libraries, and provide documentation for ongoing scale.',
    timeline: 'Days 24–28',
    keyActivities: [
      'Production domain DNS configuration & global edge CDN deployment',
      'Master asset vault transfer (4K/8K media, source code, Figma files)',
      'CMS / admin handover training & custom video walk-throughs',
      'Post-launch 30-day monitoring & conversion analytics tracking'
    ],
    clientTouchpoints: 'Final handover call + 30 days dedicated post-launch studio support',
    deliverables: [
      'Deployed Live Production URL & Source Code Repository',
      'Full Master 8K Asset Library (Google Drive / S3 Vault)',
      'Documentation Runbook & Video Handover Guides'
    ],
    icon: 'Rocket'
  }
];
