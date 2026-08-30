import { CaseStudy } from '../types';

export const projectsData: CaseStudy[] = [
  {
    id: 'ai-product-campaign',
    title: 'AURA SPATIAL OPTICS',
    client: 'Aura Hardware Lab (Case Study)',
    category: 'AI Video + AI Image',
    subcategories: ['Spatial Hardware', 'Product Renders', 'Commercial Spot'],
    coverImage: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'A multi-angle cinematic visual suite and 4K macro commercial for a next-generation augmented reality headset.',
    year: '2026',
    stats: [
      { label: 'Production Time', value: '11 Days' },
      { label: 'Cost Reduction', value: '78%' },
      { label: 'Assets Generated', value: '140+ 8K Visuals' },
      { label: 'Engagement Rate', value: '+340%' }
    ],
    challenge: 'Aura Hardware needed to unveil their flagship spatial optics headset 6 months before physical manufacturing completed. Traditional 3D studios quoted $220k and 14 weeks. They required photorealistic material rendering of micro-etched titanium, optical polarized glass, and weightless ambient ergonomics that felt physical and premium.',
    challengeDetails: [
      'Zero physical manufacturing samples were available for photography shoots.',
      'Strict optical realism requirements for lens refraction, dispersion, and polarized tinting.',
      'Need for 40+ distinct lifestyle contextual scenes across architectural settings in Tokyo, Zurich, and New York.',
      'Extremely compressed 2-week launch deadline prior to venture capital partner showcase.'
    ],
    idea: 'Engineered an end-to-end generative pipeline using custom LoRA checkpoint fine-tuning trained on Aura’s early CAD specifications, paired with physical ray-tracing light probes to achieve broadcast-grade spatial realism without physical cameras.',
    ideaDetails: [
      'Synthesized hyper-detailed macro textures mimicking aerospace-grade magnesium-aluminum alloys.',
      'Developed custom lighting scripts to simulate golden-hour natural photon scattering through multi-layered prism lenses.',
      'Constructed a unified cinematic color grade unifying still photography, 3D volumetric particles, and 30-second motion loops.'
    ],
    creativeDirection: {
      mood: 'Monolithic minimalism, weightless precision, quiet luxury, technological transcendence.',
      palette: [
        { name: 'Obsidian Matte', hex: '#0B0D12' },
        { name: 'Titanium Fog', hex: '#8B949E' },
        { name: 'Electric Cyan', hex: '#06B6D4' },
        { name: 'Photon Amber', hex: '#F59E0B' }
      ],
      typography: 'Geometric display sans-serif paired with tight, high-contrast monospace technical callouts.',
      visualMotifs: ['Refractive glass prisms', 'Sub-millimeter bevel reflections', 'Weightless orbital arcs', 'Clean architectural shadows']
    },
    execution: [
      {
        step: 'CAD & Surface Extraction',
        description: 'Converted STEP engineering models into high-density reference matrices and edge-weight maps.',
        toolsUsed: ['Rhino 3D', 'Blender', 'Custom Edge Extractor']
      },
      {
        step: 'Model Training & Checkpoint Tuning',
        description: 'Trained bespoke FLUX & SDXL LoRA weights at 1024px with 400 curated synthetic material passes.',
        toolsUsed: ['ComfyUI', 'RunPod GPU Cluster', 'Kohya_ss']
      },
      {
        step: 'Spatial Scene Generation & Lens Physics',
        description: 'Orchestrated multi-prompt compositional staging with ControlNet depth passes to guarantee 100% geometric accuracy.',
        toolsUsed: ['Midjourney v6.1', 'ControlNet Depth', 'Magnific AI 8K Upscaler']
      },
      {
        step: 'Cinematic Motion Synthesis & Sound',
        description: 'Generated 4K temporal motion passes, camera orbit trajectories, spatial foley sound effects, and master color grade.',
        toolsUsed: ['Runway Gen-3 Alpha', 'DaVinci Resolve Studio', 'ElevenLabs Spatial Audio']
      }
    ],
    finalResult: {
      summary: 'Delivered an immaculate, broadcast-ready launch campaign comprising a 60s 4K hero trailer, 8 product cutdowns, 45 high-res lifestyle ads, and an interactive 360 web viewer in just 11 business days.',
      metrics: [
        { label: 'CTR on Social Ads', value: '4.82%', detail: '3.1x benchmark for consumer tech pre-orders' },
        { label: 'Pre-order Conversions', value: '$2.4M', detail: 'Reached initial target in 72 hours' },
        { label: 'Press Feature Pickup', value: '42 Outlets', detail: 'Covered by Wired, TechCrunch, FastCompany' }
      ],
      deliverables: [
        '60s 4K Master Cinematic Commercial',
        '8x 15s Platform-Optimized Social Cutdowns (9:16 & 1:1)',
        '45x 8K Photorealistic Product & Lifestyle Key Visuals',
        'Complete Brand Asset Guidelines & Color Science Profile'
      ]
    },
    technologies: ['FLUX.1 Pro', 'Runway Gen-3', 'ComfyUI', 'Magnific AI', 'DaVinci Resolve', 'ElevenLabs'],
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80',
        caption: 'Master key-art: Macro optical prism reflections and titanium chassis.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
        caption: 'Lifestyle staging: Urban penthouse setting in Tokyo with natural volumetric light.'
      },
      {
        type: 'comparison',
        url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80',
        beforeUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1000&q=80',
        afterUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80',
        caption: 'Pipeline transition: Initial geometry wireframe vs final synthesized photorealistic render.'
      }
    ]
  },
  {
    id: 'premium-ecommerce-experience',
    title: 'KRONOS ATELIER HOROLOGY',
    client: 'Kronos Atelier (Case Study)',
    category: 'Website + Web Development',
    subcategories: ['Luxury Flagship', 'WebGL Customizer', 'Headless Commerce'],
    coverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'A bespoke luxury digital storefront featuring real-time 3D mechanical watch configuration and sub-second page transitions.',
    year: '2026',
    stats: [
      { label: 'Page Load Speed', value: '0.42s' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Configurator Time', value: '4.8 min avg' },
      { label: 'AOV Increase', value: '+46%' }
    ],
    challenge: 'Kronos manufactures limited-edition mechanical timepieces priced at $18,000–$45,000. Their previous web platform suffered from sluggish load times (4.2s), clunky static photos, and lacked the tactile luxury feel required to sell five-figure watches online without in-person boutique visits.',
    challengeDetails: [
      'High bounce rate from ultra-high-net-worth mobile visitors on slow cellular connections.',
      'Inability for buyers to preview custom guilloché dials, bespoke alligator straps, and rotor engravings.',
      'Complex inventory synchronization with private concierge client management systems.'
    ],
    idea: 'Built an ultra-fast Next.js flagship combining smooth 60fps micro-interactions, an interactive WebGL timepiece customizer, editorial typography, and high-fidelity AI-enhanced mechanical macro imagery.',
    ideaDetails: [
      'Optimized shader pipelines allowing seamless real-time rendering of sapphire crystal anti-reflective coating on mobile browsers.',
      'Crafted custom fluid page transitions using Framer Motion layout animations.',
      'Engineered an instant boutique reservation and private checkout concierge flow.'
    ],
    creativeDirection: {
      mood: 'Geneva craftsmanship, Swiss minimalism, understated heritage, modern digital velocity.',
      palette: [
        { name: 'Midnight Charcoal', hex: '#0D0E12' },
        { name: 'Warm Platinum', hex: '#E2E4E9' },
        { name: 'Rose Gold Accent', hex: '#E0A98B' },
        { name: 'Emerald Dial', hex: '#0F3E36' }
      ],
      typography: 'Editorial high-contrast serif display paired with clean, architectural grotesque body sans.',
      visualMotifs: ['Golden ratio grids', 'Tourbillon movement details', 'Tactile brushed metals', 'Subtle haptic feedback']
    },
    execution: [
      {
        step: 'Architecture & UI/UX Design System',
        description: 'Designed a 40+ screen design system with tokenized typography, spatial grid, and interactive watch components.',
        toolsUsed: ['Figma', 'Design Tokens', 'Tailwind CSS']
      },
      {
        step: 'WebGL Customizer & Shader Development',
        description: 'Authored custom GLSL shaders for anisotropic brushed steel, domed sapphire reflections, and metallic dial sunbursts.',
        toolsUsed: ['Three.js', 'React Three Fiber', 'GLSL']
      },
      {
        step: 'Full-Stack Performance Engineering',
        description: 'Implemented Next.js App Router with edge SSR, incremental static regeneration, and Shopify Storefront API.',
        toolsUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify GraphQL']
      },
      {
        step: 'Animation Choreography & QA',
        description: 'Synchronized scroll-driven parallax storytelling, magnetic navigation elements, and fluid cart drawers.',
        toolsUsed: ['Framer Motion', 'Lighthouse CI', 'Vercel Edge']
      }
    ],
    finalResult: {
      summary: 'Launched a world-class digital flagship that won Site of the Day honors and increased direct digital bespoke inquiries by 310% within the first 60 days of deployment.',
      metrics: [
        { label: 'Mobile Bounce Rate', value: '18.4%', detail: 'Down from 62.1% on legacy platform' },
        { label: 'Average Order Value', value: '$24,800', detail: '+46% higher with custom configurator' },
        { label: 'Global Page Speed', value: '420ms', detail: 'Top 1% of global luxury e-commerce' }
      ],
      deliverables: [
        'Production Next.js / TypeScript E-commerce Web Application',
        'Interactive 3D Real-Time Watch Configurator (Desktop & Mobile)',
        'Custom CMS Integration & Concierge Client Portal',
        'Full Brand Digital Styleguide & UI Component System'
      ]
    },
    technologies: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion'],
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
        caption: 'Desktop flagship hero: Dynamic timepiece customizer with real-time lighting.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
        caption: 'Macro watch movement showcase: 60fps scroll-driven gear mechanics.'
      }
    ]
  },
  {
    id: 'ai-brand-launch',
    title: 'SYNTHETIX BIO-SYSTEMS',
    client: 'Synthetix Genomics (Case Study)',
    category: 'Content + Video',
    subcategories: ['Brand Narrative', 'Generative Science', 'Launch Keynote'],
    coverImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'A comprehensive brand identity launch, scientific storytelling video suite, and generative bio-visual system.',
    year: '2026',
    stats: [
      { label: 'Brand Reach', value: '1.2M+' },
      { label: 'Series A Raised', value: '$28M' },
      { label: 'Video Completion', value: '74%' },
      { label: 'Production Turnaround', value: '14 Days' }
    ],
    challenge: 'Synthetix Bio developed an enzyme synthesis platform that converts atmospheric carbon into durable biopolymers. The science was groundbreaking, but their existing pitch and marketing relied on dense academic whitepapers that failed to captivate tier-1 venture funds and commercial partners.',
    challengeDetails: [
      'Complex molecular biology concepts needed to be communicated clearly in under 90 seconds.',
      'Requirement for visually arresting molecular animations that retained rigorous biochemical accuracy.',
      'Launch coincided with an international climate tech summit keynote presentation.'
    ],
    idea: 'Created a cinematic narrative campaign entitled "Code That Grows". We married generative AI visual rendering of protein folded nanostructures with human-directed motion storytelling and a clean, high-conviction manifesto website.',
    ideaDetails: [
      'Engineered procedural bio-particle visual systems mimicking cellular mitosis and atmospheric capture.',
      'Scripted and scored a 90-second launch keynote film with custom synthesized ambient audio.',
      'Designed a companion investor deck and digital brand platform optimized for venture roadshows.'
    ],
    creativeDirection: {
      mood: 'Organic intelligence, photosynthetic luminescence, climate optimism, high-scientific precision.',
      palette: [
        { name: 'Deep Biosphere', hex: '#081014' },
        { name: 'Chlorophyll Neon', hex: '#10B981' },
        { name: 'Atmospheric Teal', hex: '#14B8A6' },
        { name: 'Clean Lumens', hex: '#F0FDF4' }
      ],
      typography: 'Clean technical grotesque paired with geometric tabular numerals.',
      visualMotifs: ['Cellular membrane flows', 'Carbon lattice matrices', 'Photosynthetic light rays', 'Clean scientific data gauges']
    },
    execution: [
      {
        step: 'Narrative Strategy & Storyboarding',
        description: 'Distilled 80-page scientific papers into a concise 4-act narrative arc with emotional resonance.',
        toolsUsed: ['Claude 3.7', 'Figma Storyboards', 'Miro']
      },
      {
        step: 'Generative Cellular Visual Synthesis',
        description: 'Prompt-engineered bespoke molecular simulation visuals using specialized scientific checkpoints.',
        toolsUsed: ['Midjourney v6', 'ComfyUI ControlNet', 'FLUX.1']
      },
      {
        step: 'Keynote Film Production & Sound Design',
        description: 'Edited 90-second 4K keynote film with synchronized procedural bio-motion and immersive binaural sound.',
        toolsUsed: ['Runway Gen-3', 'Adobe Premiere Pro', 'ElevenLabs Voice Synthesis']
      },
      {
        step: 'Digital Brand Hub Deployment',
        description: 'Built and deployed interactive manifesto landing experience with live carbon calculation widgets.',
        toolsUsed: ['Next.js', 'Tailwind CSS', 'Framer Motion']
      }
    ],
    finalResult: {
      summary: 'The campaign debuted at the Global Tech Summit, driving immediate viral coverage and helping Synthetix close their oversubscribed $28M Series A financing within 3 weeks of public launch.',
      metrics: [
        { label: 'Keynote Video Views', value: '1.2M+', detail: 'Organic views across X, LinkedIn, YouTube' },
        { label: 'Partner Inbound Leads', value: '180+ Enterprise', detail: 'From Fortune 500 chemical and apparel firms' },
        { label: 'Keynote Film Retention', value: '74%', detail: 'Top percentile for B2B tech reveals' }
      ],
      deliverables: [
        '90s 4K "Code That Grows" Launch Keynote Film',
        '10x 15s Organic Social Thought-Leadership Clips',
        'Full Interactive Brand Identity Guide & Asset Vault',
        'Interactive Series A Investor Portal'
      ]
    },
    technologies: ['Runway Gen-3', 'FLUX.1 Pro', 'Midjourney', 'Next.js', 'Tailwind CSS', 'ElevenLabs'],
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1000&q=80',
        caption: 'Micro-cellular synthesis: Generative protein lattice visual.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        caption: 'Brand identity key-art: Bioluminescent atmospheric particle flow.'
      }
    ]
  },
  {
    id: 'business-dashboard',
    title: 'NEXUS NEURAL TELEMETRY',
    client: 'Nexus Cloud Analytics (Case Study)',
    category: 'Web App',
    subcategories: ['Enterprise SaaS', 'Observability', 'Real-time Canvas'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'A high-density operational telemetry suite and multi-agent AI pipeline monitor handling 50k events/sec.',
    year: '2026',
    stats: [
      { label: 'Render Latency', value: '< 8ms' },
      { label: 'Events Streamed', value: '50k / sec' },
      { label: 'Triage Time', value: '-65%' },
      { label: 'User Satisfaction', value: '4.9/5' }
    ],
    challenge: 'Nexus operates enterprise AI cluster infrastructure. Engineers were managing 14 disparate terminal windows and fragmented Grafana dashboards, resulting in severe alert fatigue, slow incident triage, and poor visibility into multi-agent GPU memory leaks.',
    challengeDetails: [
      'Extreme real-time data throughput (50,000 telemetry events per second per cluster).',
      'Need for sub-10ms UI render latency without frame drops or memory leaks.',
      'Complex multi-level hierarchy: Clusters > Nodes > Pods > LLM Token Queues > GPU Thermal States.'
    ],
    idea: 'Architected a unified, keyboard-first command dashboard combining high-performance WebGL time-series charts, interactive neural topology graphs, and an integrated natural language incident copilot.',
    ideaDetails: [
      'Built custom virtualized grid viewports rendering thousands of telemetry nodes without DOM thrashing.',
      'Engineered an ultra-fast CMD+K command palette enabling engineers to jump between clusters in under 2 keystrokes.',
      'Embedded a streaming agent debugger capable of stepping backwards in time through execution logs.'
    ],
    creativeDirection: {
      mood: 'Mission control precision, low visual noise, dark-mode ergonomics, high information density.',
      palette: [
        { name: 'Void Black', hex: '#050608' },
        { name: 'Slate Rail', hex: '#1E232E' },
        { name: 'Telemetry Blue', hex: '#3B82F6' },
        { name: 'Alert Crimson', hex: '#EF4444' }
      ],
      typography: 'Ultra-legible monospace numbers with geometric sans headers and tight tabular alignment.',
      visualMotifs: ['Status pulses', 'Latency heatmaps', 'Directed acyclic graph trees', 'Clean divider matrices']
    },
    execution: [
      {
        step: 'Data Flow & State Architecture',
        description: 'Designed WebWorker data buffer pipelines to process raw WebSockets off the main browser thread.',
        toolsUsed: ['TypeScript', 'RxJS', 'WebSockets', 'Web Workers']
      },
      {
        step: 'Component Design & Command Palette',
        description: 'Created a comprehensive dark-mode SaaS component system with custom data tables and metric sparklines.',
        toolsUsed: ['React 19', 'Tailwind CSS', 'Lucide Icons']
      },
      {
        step: 'Data Visualization & GPU Acceleration',
        description: 'Implemented hardware-accelerated Canvas charts capable of 60fps panning across 1M historical data points.',
        toolsUsed: ['HTML5 Canvas API', 'D3.js', 'WebGL Shaders']
      },
      {
        step: 'Integration & Load Testing',
        description: 'Simulated 100k event/sec stress tests and verified zero frame-rate degradation across all viewports.',
        toolsUsed: ['Playwright', 'Chrome DevTools Performance Profiler']
      }
    ],
    finalResult: {
      summary: 'Rolled out to 4,500 enterprise engineers at Fortune 500 enterprises, reducing mean-time-to-resolution (MTTR) on production AI outages from 42 minutes to 14 minutes.',
      metrics: [
        { label: 'Incident Triage Time', value: '14.2 min', detail: '65% reduction in outage duration' },
        { label: 'Daily Active Usage', value: '94%', detail: 'Among Tier-3 SREs and ML Platform engineers' },
        { label: 'UI Frame Rate', value: '60 FPS stable', detail: 'Zero UI freezes even during peak burst traffic' }
      ],
      deliverables: [
        'Complete React / TypeScript Enterprise Dashboard Application',
        'Custom High-Throughput Canvas Charting Engine',
        'Command Palette (CMD+K) Navigation System',
        'Comprehensive Component Library & Storybook Documentation'
      ]
    },
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Canvas API', 'WebSockets', 'D3.js'],
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        caption: 'Telemetry command center: Real-time agent cluster health and token bandwidth.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        caption: 'Topology explorer: Interactive directed graph of microservices and latency.'
      }
    ]
  },
  {
    id: 'cinematic-commercial',
    title: 'VECTRA HYPER-ELECTRIC GT',
    client: 'Vectra Motors (Case Study)',
    category: 'AI Video',
    subcategories: ['Automotive Commercial', 'Cinematic Direction', 'Sound Design'],
    coverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'A 45-second high-octane cinematic spot showcasing aerodynamics, neon night drives, and zero-emission raw power.',
    year: '2026',
    stats: [
      { label: 'Views in 48h', value: '3.8M' },
      { label: 'Production Cost', value: '$24k vs $350k' },
      { label: 'Render Fidelity', value: '4K DCI' },
      { label: 'Social Engagement', value: '9.4%' }
    ],
    challenge: 'Vectra Motors required a Super Bowl-caliber teaser spot for their ultra-luxury electric GT supercar. Traditional live-action shooting would require closing public highways in Iceland and renting specialized camera chase cranes at a cost exceeding $350,000.',
    challengeDetails: [
      'Extreme dynamic range required for nighttime neon reflections, headlight beam volumetric fog, and wet asphalt physics.',
      'High-speed motion coherence: Wheels spinning at 150mph without AI morphing or uncanny visual artifacts.',
      'Requirement for complex camera maneuvers: FPV drone flythroughs, low-slung front bumper tracks, and orbital drone sweeps.'
    ],
    idea: 'Directed a virtual cinematic spot utilizing neural camera tracking, multi-prompt temporal keyframing, and custom automotive material loras. Combined with orchestral hybrid synth sound design and authentic tire traction acoustics.',
    ideaDetails: [
      'Trained custom ControlNet optical flow conditioning passes to keep vehicle proportions mathematically consistent across high-speed maneuvers.',
      'Designed an atmospheric night environment set across neon-lit alpine tunnels and wet midnight coastal switchbacks.',
      'Layered 42 individual sound design tracks (electric motor whine, acoustic tire squeal, atmospheric wind gusts).'
    ],
    creativeDirection: {
      mood: 'Adrenaline, aerodynamic speed, sleek nocturnal luxury, electric future power.',
      palette: [
        { name: 'Midnight Asphalt', hex: '#090A0D' },
        { name: 'Electric Cobalt', hex: '#2563EB' },
        { name: 'Neon Violet', hex: '#8B5CF6' },
        { name: 'Pure White Beam', hex: '#FFFFFF' }
      ],
      typography: 'Bold, wide display sans with expanded letter tracking.',
      visualMotifs: ['Aerodynamic air streamlines', 'Brake caliper glow', 'Wet street reflections', 'Speed-blur light streaks']
    },
    execution: [
      {
        step: 'Storyboarding & Shot List Architecture',
        description: 'Choreographed 18 individual cinematic camera movements with focal lengths matching 35mm anamorphic glass.',
        toolsUsed: ['Figma', 'Midjourney v6.1', 'Storyboard Suite']
      },
      {
        step: 'Neural Video Generation & Camera Paths',
        description: 'Synthesized high-speed automotive movement using temporal seed locking and camera motion controllers.',
        toolsUsed: ['Runway Gen-3', 'Kling 1.5', 'Luma Dream Machine']
      },
      {
        step: 'Temporal Inpainting & Artifact Cleanup',
        description: 'Refined wheel spokes, emblem geometry, and windshield reflections frame-by-frame.',
        toolsUsed: ['After Effects', 'Topaz Video AI 4K', 'ComfyUI']
      },
      {
        step: 'Audio Mastering & Color Science',
        description: 'Produced 5.1 spatial surround sound mix and applied Kodak 2383 cinematic film print emulation.',
        toolsUsed: ['DaVinci Resolve', 'Ableton Live 12', 'Custom Sound Library']
      }
    ],
    finalResult: {
      summary: 'The commercial launched across YouTube and X, generating 3.8M organic views in 48 hours and being hailed by automotive journalists as a watershed moment in commercial generative production.',
      metrics: [
        { label: 'Organic Video Views', value: '3.8M', detail: 'Over 85,000 shares across social media' },
        { label: 'VIP Waitlist Registrations', value: '14,200', detail: 'Sold out 1st year manufacturing allocation' },
        { label: 'Budget Savings', value: '93%', detail: 'Executed at 7% of traditional production cost' }
      ],
      deliverables: [
        '45s 4K Master Commercial Spot (16:9 DCI)',
        '3x 15s High-Energy Social Cuts (9:16 Instagram Reels / TikTok)',
        '30x 8K Desktop & Mobile High-Res Wallpapers',
        'Broadcast-Ready Audio Stems & Instrumental Score'
      ]
    },
    technologies: ['Runway Gen-3', 'Kling AI', 'Topaz Video AI', 'DaVinci Resolve', 'Ableton Live'],
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
        caption: 'Alpine night switchback: Aerodynamic air intake glow.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        caption: 'Wind tunnel aerodynamic visual: Particle physics analysis.'
      }
    ]
  },
  {
    id: 'ai-automation-engine',
    title: 'AUTONOMOUS MARKETING PIPELINE',
    client: 'Apex Global Media (Case Study)',
    category: 'AI Automation',
    subcategories: ['Omnichannel Ingestion', 'Smart Clipping', 'Workflow Engine'],
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    shortDesc: 'An autonomous multi-agent content engine that transcribes, clips, formats, and publishes 120+ assets weekly.',
    year: '2026',
    stats: [
      { label: 'Assets Weekly', value: '120+' },
      { label: 'Human Hours Saved', value: '160 hrs/mo' },
      { label: 'Cost Per Asset', value: '$1.40 vs $45' },
      { label: 'Publishing Uptime', value: '99.98%' }
    ],
    challenge: 'Apex Global Media manages 6 podcast shows and produces 15 hours of video weekly. Their 8-person editorial team spent 35 hours every week manually cutting clips, typing subtitles, writing captions, resizing for TikTok/LinkedIn/YouTube, and uploading.',
    challengeDetails: [
      'High burnout rate and repetitive stress among creative editors.',
      '24-to-48-hour lag time between recording a podcast and releasing social clips, losing trending news cycles.',
      'Inconsistent brand typography and formatting across different junior contractor handoffs.'
    ],
    idea: 'Engineered an autonomous end-to-end multi-modal pipeline that detects high-hook viral segments, generates smart animated captions, scores clip virality, creates customized thumbnails, and queues posts directly to social APIs.',
    ideaDetails: [
      'Trained an LLM agent on 500 historical top-performing viral video transcripts to accurately identify narrative hooks.',
      'Implemented automated active-speaker framing that re-centers two-person interviews into vertical 9:16 format with zero manual keyframing.',
      'Integrated an automated Slack approval channel where editors can approve or tweak captions in 1 click.'
    ],
    creativeDirection: {
      mood: 'Unstoppable velocity, clean systems architecture, modern automation, surgical precision.',
      palette: [
        { name: 'Dark Terminal', hex: '#0B0C10' },
        { name: 'Neon Lime', hex: '#84CC16' },
        { name: 'Signal Orange', hex: '#F97316' },
        { name: 'Code Light', hex: '#F8FAFC' }
      ],
      typography: 'High-visibility sans with bold typographic contrast and clear status badges.',
      visualMotifs: ['Node connection graphs', 'Real-time throughput streams', 'Smart bounding boxes', 'Automated QA indicators']
    },
    execution: [
      {
        step: 'Audio Ingestion & Diarization',
        description: 'Built automated S3 bucket listeners that split audio channels, run Whisper transcription, and separate speakers.',
        toolsUsed: ['Python', 'OpenAI Whisper API', 'AWS Lambda']
      },
      {
        step: 'Hook Detection & Viral Scoring Agent',
        description: 'Evaluated transcript chunks with Claude 3.7 Sonnet against a virality scoring matrix to select top 30-60s moments.',
        toolsUsed: ['Claude 3.7 API', 'LangChain', 'Node.js']
      },
      {
        step: 'Video Reframing & Kinetic Typography',
        description: 'Auto-reframed 16:9 footage into 9:16 using computer vision face tracking and rendered word-by-word highlighted captions.',
        toolsUsed: ['FFmpeg', 'OpenCV', 'Remotion React Video']
      },
      {
        step: 'Slack Approval Bot & Multi-Platform Dispatch',
        description: 'Sent interactive preview cards to Slack. Once approved, scheduled directly to TikTok, YouTube Shorts, and LinkedIn.',
        toolsUsed: ['Slack Bolt SDK', 'YouTube Data API', 'TikTok Content Posting API']
      }
    ],
    finalResult: {
      summary: 'The autonomous pipeline reduced production turnaround from 36 hours down to 12 minutes, saving 160 human hours per month and increasing total social impressions across their podcast network by 280%.',
      metrics: [
        { label: 'Turnaround Time', value: '12 Minutes', detail: 'From raw file drop to publish-ready queue' },
        { label: 'Cost Savings', value: '$84,000 / yr', detail: 'Eliminated reliance on outsourced clipping agencies' },
        { label: 'Weekly Audience Reach', value: '4.2M views', detail: '+280% increase in short-form organic discovery' }
      ],
      deliverables: [
        'Fully Deployed Autonomous Cloud Ingestion Pipeline',
        'Custom Slack Approval Bot & Admin Dashboard',
        'Dynamic Remotion React Template Generator',
        'Full System Architecture Documentation & Failover Runbook'
      ]
    },
    technologies: ['Node.js', 'Python', 'Claude 3.7', 'FFmpeg', 'Remotion', 'Slack API', 'Supabase'],
    gallery: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
        caption: 'Pipeline architecture: High-speed multi-agent event processing and rendering.'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
        caption: 'Real-time webhook dispatcher: Automated caption synchronization.'
      }
    ]
  }
];
