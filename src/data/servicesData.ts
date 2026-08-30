import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-content',
    number: '01',
    visible: true,
    title: 'AI CONTENT',
    shortDesc: 'Content designed to capture attention and communicate your brand with precision and resonance.',
    tagline: 'High-velocity creative narrative systems engineered for omnichannel impact.',
    iconName: 'Sparkles',
    category: 'Creative Production',
    deliverables: [
      'Social media content engines & weekly editorial decks',
      'High-converting marketing creatives & ad copy frameworks',
      'Promotional launch content & product storytelling',
      'Brand voice synthesizers & narrative guidelines',
      'Omnichannel ad creatives with multi-variant testing sets',
      'AI-assisted content strategy & trend forecasting'
    ],
    capabilities: [
      'Multi-format Copywriting',
      'Social Narrative Design',
      'Campaign Storyboarding',
      'Brand Persona Encoding',
      'A/B Creative Variant Matrices',
      'Localized Internationalization'
    ],
    sampleOutputs: [
      {
        title: 'Omnichannel Brand Launch Matrix',
        desc: '90+ high-engagement social assets and launch narratives crafted across 4 global markets.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Growth Ad Variant Engine',
        desc: 'Dynamic programmatic ad scripts and typography layouts with 3.4x average CTR uplift.',
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80'
      }
    ],
    idealFor: [
      'Direct-to-consumer brands needing high-tempo content',
      'B2B startups scaling organic thought leadership',
      'Marketing teams aiming to 10x creative production without bloat'
    ],
    timeline: '1–2 weeks for initial campaign infrastructure',
    techStack: ['Claude 3.7 Sonnet', 'GPT-4o', 'Custom Narrative Embeddings', 'Figma', 'Airtable']
  },
  {
    id: 'ai-image',
    number: '02',
    visible: true,
    title: 'AI IMAGE',
    shortDesc: 'Photorealistic and cinematic visuals created for modern brands demanding unmatched fidelity.',
    tagline: 'Immaculate art direction, studio lighting setups, and zero generic artifacts.',
    iconName: 'Camera',
    category: 'Visual Synthesis',
    deliverables: [
      'Hyper-realistic product photography & spatial staging',
      'Global advertising visuals & editorial key-art',
      '360° brand campaign visual identities',
      'Cinematic concept art & architectural environment renders',
      'E-commerce product mockups & packaging visualizations',
      'Custom LoRA checkpoint training for brand consistency'
    ],
    capabilities: [
      'Photorealistic Product Rendering',
      'Custom Lighting & Lens Emulation',
      'Brand Asset Consistency (LoRA / ControlNet)',
      'High-Resolution Upscaling (8K+ Print Ready)',
      'Complex Compositional Staging',
      'Color Grading & Texture Pass'
    ],
    sampleOutputs: [
      {
        title: 'Horology Spatial Staging',
        desc: 'Microscopic mechanical timepiece photography with ray-traced refractive glass aesthetics.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Architectural Biophilic Key-Art',
        desc: 'Concept environmental visuals for sustainable sustainable luxury development in Tokyo.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
      }
    ],
    idealFor: [
      'Hardware & consumer brands before physical production',
      'Luxury fashion & cosmetic houses needing bespoke mood imagery',
      'Agencies seeking flawless key visual assets without costly location shoots'
    ],
    timeline: '3–7 days for curated visual packages',
    techStack: ['Midjourney v6.1', 'ComfyUI Custom Workflows', 'FLUX.1 Pro', 'Adobe Photoshop', 'Magnific AI']
  },
  {
    id: 'ai-video',
    number: '03',
    visible: true,
    title: 'AI VIDEO',
    shortDesc: 'High-impact AI-generated commercials, product videos and cinematic campaigns with directorial depth.',
    tagline: 'Cinematic motion, fluid camera physics, and broadcast-ready audio-visual direction.',
    iconName: 'Film',
    category: 'Cinematic Motion',
    deliverables: [
      'Broadcast-grade product commercial spots (15s / 30s / 60s)',
      'Cinematic brand reveal videos & teaser trailers',
      'Social media motion loops & dynamic TikTok/Reels ads',
      'High-concept speculative fiction & future-world sequences',
      'Audio design, spatial foley & generative musical score integration',
      'Multi-angle motion storyboard reels'
    ],
    capabilities: [
      'Camera Trajectory & Lens Control',
      'Consistent Character & Object Motion',
      'Frame-to-Frame Temporal Stabilization',
      'Procedural Color Science & Grading',
      'Synthesized Sound Design & Mixed Score',
      'Format Resizing (9:16, 16:9, 1:1, 4:5)'
    ],
    sampleOutputs: [
      {
        title: 'EV Supercar Manifesto',
        desc: 'A 45-second high-octane cinematic spot featuring aerodynamic neon wind tunnel physics.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Spatial Audio Tech Teaser',
        desc: 'Fluid liquid metal acoustic particles interacting with ambient architectural light.',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    idealFor: [
      'Product launch announcements needing cinematic hype',
      'Brands wanting high-budget commercial aesthetics at 10x agility',
      'Social ad campaigns testing high-volume video hooks'
    ],
    timeline: '1–3 weeks depending on runtime and shot complexity',
    techStack: ['Runway Gen-3 Alpha', 'Kling AI', 'Luma Dream Machine', 'DaVinci Resolve', 'ElevenLabs']
  },
  {
    id: 'website',
    number: '04',
    visible: true,
    title: 'WEBSITE',
    shortDesc: 'High-performance websites designed around your brand and engineered to convert.',
    tagline: 'Pixel-perfect typography, fluid 60fps micro-interactions, and instant sub-second load times.',
    iconName: 'Layout',
    category: 'Digital Flagship',
    deliverables: [
      'Bespoke business flagship websites & digital brand hubs',
      'High-conversion product landing pages & launch pads',
      'Interactive portfolio & editorial showcase experiences',
      'Modern headless e-commerce & storefront integrations',
      '100% responsive fluid layouts across all device viewports',
      'Full SEO infrastructure, OpenGraph architecture & Core Web Vitals'
    ],
    capabilities: [
      'Tailwind CSS & Modern CSS Architecture',
      'Framer Motion & GSAP Orchestration',
      'WebGL & Interactive Canvas Shaders',
      'Sub-Second Global Edge Deployment',
      'Accessible Semantic HTML (WCAG AA)',
      'Conversion Architecture & Heatmap Optimization'
    ],
    sampleOutputs: [
      {
        title: 'Chronos Horology Flagship',
        desc: 'Interactive 3D watch customizer with luxury typography and 98 Lighthouse score.',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Synthetix Bio Landing Experience',
        desc: 'Editorial storytelling platform for next-gen synthetic genomics venture.',
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80'
      }
    ],
    idealFor: [
      'Visionary startups raising Series A/B needing world-class digital presence',
      'Premium lifestyle, luxury, and technology companies',
      'Brands outgrowing generic Webflow or WordPress templates'
    ],
    timeline: '2–4 weeks from wireframe to edge launch',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel / Cloudflare']
  },
  {
    id: 'web-apps',
    number: '05',
    visible: true,
    title: 'WEB APPS',
    shortDesc: 'Modern, scalable web applications, SaaS interfaces, and bespoke internal tools.',
    tagline: 'Complex data density transformed into intuitive, beautiful, and tactile interfaces.',
    iconName: 'Code',
    category: 'Product Engineering',
    deliverables: [
      'SaaS interface design & production frontend engineering',
      'Real-time analytical dashboards & data visualization hubs',
      'Enterprise admin panels & operational command centers',
      'Custom business web applications & client portals',
      'AI-powered interfaces (streaming LLM chats, canvas nodes, tools)',
      'Design systems with reusable tokenized component libraries'
    ],
    capabilities: [
      'Component-Driven Architecture (React / TypeScript)',
      'Real-time State Management & WebSockets',
      'Complex Data Visualizations (D3 / Recharts / Canvas)',
      'Role-Based Access Control (RBAC) & Secure Auth',
      'Keyboard Shortcut Systems & Command Palettes (CMD+K)',
      'Optimistic UI Updates & Offline-First Resilience'
    ],
    sampleOutputs: [
      {
        title: 'Nexus Neural Telemetry Hub',
        desc: 'Real-time multi-agent observability dashboard handling 10k telemetry streams.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Aura Creative Studio SaaS',
        desc: 'Collaborative AI canvas for real-time multiplayer moodboarding and video generation.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      }
    ],
    idealFor: [
      'Founders building tech/AI products needing Tier-1 UI/UX',
      'Enterprises modernizing legacy internal software',
      'Product leaders requiring rapid MVP development without technical debt'
    ],
    timeline: '3–6 weeks for robust functional builds',
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL / Firestore', 'Tailwind CSS']
  },
  {
    id: 'ai-automation',
    number: '06',
    visible: false, // Set to true whenever you are ready to offer AI Agent & Automation services publicly
    title: 'AI AUTOMATION',
    shortDesc: 'Smart workflows and autonomous AI systems that eliminate operational drag and scale output.',
    tagline: 'End-to-end autonomous business infrastructure engineered for reliability and ROI.',
    iconName: 'Cpu',
    category: 'System Architecture',
    deliverables: [
      'Autonomous multi-model AI workflows & pipeline orchestration',
      'Inbound lead qualification & smart triage systems',
      'Automated marketing asset generation & distribution flows',
      'Custom API integrations between enterprise toolchains',
      'Internal knowledge base indexing & retrieval-augmented search (RAG)',
      'Operational cost reduction & productivity automation scripts'
    ],
    capabilities: [
      'Model Context & Prompt Optimization',
      'Webhook & Event-Driven Architecture',
      'Error Handling & Fallback Circuit Breakers',
      'Document Parsing & Multi-Modal Extraction',
      'Automated Quality Assurance Gates',
      'Audit Logging & Latency Analytics'
    ],
    sampleOutputs: [
      {
        title: 'Autonomous Social Distribution Pipeline',
        desc: 'Automated ingestion, clipping, transcript synthesis, and scheduled multi-platform publishing.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Executive Intelligence Briefing Bot',
        desc: 'Daily synthesis of 250+ industry patents and competitor press releases delivered to Slack.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
      }
    ],
    idealFor: [
      'Operations teams drowning in manual repetitive copy/paste tasks',
      'Agencies seeking to scale client deliverables with fixed headcount',
      'Founders wanting autonomous 24/7 business intelligence'
    ],
    timeline: '1–3 weeks for custom deployed pipelines',
    techStack: ['LangChain / LlamaIndex', 'Python', 'Node.js', 'Make / n8n', 'Gemini & Claude APIs', 'Supabase']
  }
];
