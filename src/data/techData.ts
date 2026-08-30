import { TechCategory } from '../types';

export const techCategories: TechCategory[] = [
  {
    name: 'AI CREATION',
    icon: 'Sparkles',
    description: 'Directing state-of-the-art multi-modal neural architectures for photorealistic images and cinematic motion.',
    items: [
      { name: 'FLUX.1 & SDXL', role: 'High-Res Photorealism', category: 'Generative Image' },
      { name: 'Midjourney v6.1', role: 'Art Direction & Ideation', category: 'Concept Art' },
      { name: 'Runway Gen-3 Alpha', role: '4K Temporal Motion', category: 'Video Synthesis' },
      { name: 'Kling & Luma', role: 'Physical Camera Motion', category: 'Video Engine' },
      { name: 'ComfyUI & ControlNet', role: 'Deterministic Node Workflows', category: 'Pipeline Control' },
      { name: 'Magnific & Topaz', role: 'Neural 8K Upscaling', category: 'Mastering' }
    ]
  },
  {
    name: 'DEVELOPMENT',
    icon: 'Code2',
    description: 'Modern, high-performance web engineering stacks built for edge deployment and instantaneous speed.',
    items: [
      { name: 'React 19 & Next.js', role: 'Modern UI Architecture', category: 'Frontend' },
      { name: 'TypeScript', role: 'Type-Safe Engineering', category: 'Language' },
      { name: 'Tailwind CSS', role: 'Utility-First Styling', category: 'CSS System' },
      { name: 'Framer Motion', role: 'Hardware-Accelerated Motion', category: 'Animations' },
      { name: 'Node.js & Express', role: 'Edge & Backend Services', category: 'Server' },
      { name: 'Three.js / WebGL', role: '3D Real-Time Graphics', category: 'Graphics' }
    ]
  },
  {
    name: 'DESIGN & PROTOTYPING',
    icon: 'Palette',
    description: 'Systematic interface craft, visual choreography, and high-fidelity interaction prototyping.',
    items: [
      { name: 'Figma', role: 'Design Systems & Tokens', category: 'Interface Design' },
      { name: 'DaVinci Resolve Studio', role: 'Color Science & Mastering', category: 'Post-Production' },
      { name: 'Adobe Premiere / AE', role: 'Motion Choreography', category: 'VFX' },
      { name: 'Ableton Live 12', role: 'Synthesized Sound Design', category: 'Audio' },
      { name: 'Spline & Blender', role: '3D Geometry & Textures', category: 'Spatial' },
      { name: 'Rive', role: 'Interactive Vector Runtimes', category: 'Micro-interactions' }
    ]
  },
  {
    name: 'AUTOMATION & AGENTS',
    icon: 'Cpu',
    description: 'Event-driven multi-agent pipelines, API integrations, and autonomous operational infrastructure.',
    items: [
      { name: 'Gemini 2.5 & Claude 3.7', role: 'Multi-Modal Reasoning', category: 'LLMs' },
      { name: 'LangChain & LlamaIndex', role: 'Agent Tool Orchestration', category: 'Agentic Frameworks' },
      { name: 'Python & WebSockets', role: 'High-Throughput Services', category: 'Backend' },
      { name: 'Make & n8n', role: 'Visual API Orchestration', category: 'Integration' },
      { name: 'PostgreSQL & Supabase', role: 'Real-Time Vector Storage', category: 'Database' },
      { name: 'Redis & Queue Workers', role: 'Async Pipeline Workers', category: 'Queues' }
    ]
  }
];
