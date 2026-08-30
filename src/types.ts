export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  category: string;
  visible?: boolean;
  deliverables: string[];
  capabilities: string[];
  sampleOutputs: {
    title: string;
    desc: string;
    image: string;
  }[];
  idealFor: string[];
  timeline: string;
  techStack: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  subcategories: string[];
  coverImage: string;
  previewVideo?: string;
  shortDesc: string;
  year: string;
  stats: { label: string; value: string }[];
  challenge: string;
  challengeDetails: string[];
  idea: string;
  ideaDetails: string[];
  creativeDirection: {
    mood: string;
    palette: { name: string; hex: string }[];
    typography: string;
    visualMotifs: string[];
  };
  execution: {
    step: string;
    description: string;
    toolsUsed: string[];
  }[];
  finalResult: {
    summary: string;
    metrics: { label: string; value: string; detail: string }[];
    deliverables: string[];
  };
  technologies: string[];
  gallery: {
    type: 'image' | 'video' | 'comparison';
    url: string;
    caption: string;
    beforeUrl?: string;
    afterUrl?: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
  keyActivities: string[];
  clientTouchpoints: string;
  deliverables: string[];
  icon: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    featured?: boolean;
  }[];
}

export interface TechCategory {
  name: string;
  icon: string;
  description: string;
  items: {
    name: string;
    role: string;
    category: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  projectDetails: string;
  ndaRequired?: boolean;
}
