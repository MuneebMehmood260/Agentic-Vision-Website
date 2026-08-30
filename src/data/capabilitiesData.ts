import { CapabilityCategory } from '../types';

export const capabilitiesData: CapabilityCategory[] = [
  {
    id: 'creative',
    title: 'CREATIVE',
    description: 'High-conviction art direction, narrative design, and visual storytelling that commands respect.',
    skills: [
      {
        name: 'Art Direction & Mood Choreography',
        description: 'Bespoke aesthetic systems, color science profiles, and visual guidelines tailored to elevate brand prestige.',
        featured: true
      },
      {
        name: 'Visual Design & Editorial Layouts',
        description: 'Unapologetic typography, mathematical grid systems, and high-impact graphic design.',
        featured: true
      },
      {
        name: 'Content Creation & Narrative Copy',
        description: 'High-converting ad scripts, manifesto copy, and organic social hooks engineered for retention.',
        featured: false
      },
      {
        name: 'Storytelling & Commercial Arcs',
        description: 'Scripting and visual pacing that turns complex technical concepts into cinematic emotional moments.',
        featured: false
      },
      {
        name: 'Campaign Concepts & Key-Art',
        description: '360-degree launch concepts designed to scale across digital billboards, web hero headers, and social feeds.',
        featured: false
      }
    ]
  },
  {
    id: 'ai',
    title: 'AI & GENERATIVE SYNTHESIS',
    description: 'Directing the most capable generative models with surgical prompt craft and custom model architectures.',
    skills: [
      {
        name: 'Image Generation & LoRA Fine-Tuning',
        description: 'Bespoke weight checkpoints trained on your brand assets to ensure 100% material and face consistency.',
        featured: true
      },
      {
        name: 'Video Generation & Camera Physics',
        description: 'Temporal video synthesis with precise camera trajectory control, cinematic lighting, and frame coherence.',
        featured: true
      },
      {
        name: 'Prompt Engineering & Context Optimization',
        description: 'Multi-modal prompt architectures with deterministic output structures and automated quality checks.',
        featured: false
      },
      {
        name: 'AI Workflows & Pipeline Engineering',
        description: 'ComfyUI nodes, ControlNet spatial conditioning, and custom Python automation scripts.',
        featured: false
      },
      {
        name: 'Autonomous Agent Orchestration',
        description: 'Multi-agent LLM systems with tool calling, memory stores, and real-time execution graphs.',
        featured: false
      }
    ]
  },
  {
    id: 'digital',
    title: 'DIGITAL & WEB ENGINEERING',
    description: 'Production-ready frontend and full-stack software built for speed, responsiveness, and scale.',
    skills: [
      {
        name: 'UI/UX Design Systems',
        description: 'Atomic tokenized component systems in Figma & code with comprehensive state modeling.',
        featured: true
      },
      {
        name: 'Website Development (Next.js & React)',
        description: 'Sub-second load times, edge SSR, flawless responsive layouts, and 95+ Core Web Vitals.',
        featured: true
      },
      {
        name: 'Web Applications & SaaS Platforms',
        description: 'Complex interactive interfaces, real-time WebSockets, state stores, and data-dense dashboards.',
        featured: false
      },
      {
        name: 'Interactive Experiences & WebGL',
        description: 'Three.js 3D product visualizers, interactive canvas shaders, and scroll-linked animations.',
        featured: false
      },
      {
        name: 'Responsive & Touch Engineering',
        description: 'Fluid typography, 44px+ touch targets, zero horizontal overflow, and native mobile parity.',
        featured: false
      }
    ]
  },
  {
    id: 'business',
    title: 'BUSINESS & STRATEGY',
    description: 'Creative work aligned with customer acquisition, investor confidence, and tangible ROI.',
    skills: [
      {
        name: 'Digital Strategy & Market Positioning',
        description: 'Identifying blue-ocean market whitespace and articulating distinctive brand moats.',
        featured: true
      },
      {
        name: 'Marketing Creative & Ad Variant Testing',
        description: 'Systematic creative matrix testing to discover scalable high-converting ad angles.',
        featured: true
      },
      {
        name: 'Conversion-Focused UX Architecture',
        description: 'Removing purchase friction, optimizing checkout funnels, and maximizing lead capture rates.',
        featured: false
      },
      {
        name: 'Workflow & Cost Optimization',
        description: 'Replacing bloated agency fees and 3-month cycle times with agile, AI-accelerated studio delivery.',
        featured: false
      }
    ]
  }
];
