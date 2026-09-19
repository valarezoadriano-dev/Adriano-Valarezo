export type ServiceCategory = 
  | 'agroindustria'
  | 'proyectos'
  | 'sostenibilidad'
  | 'consultoria';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  category: ServiceCategory;
  iconName: string;
  triggerQuestion?: string;
  solutionsList?: string[];
  deliverables: string[];
  benefits: string[];
  targetAudience: string;
  estimatedDuration: string;
  pricingModel: string;
  metricsTag: string;
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientOrSector: string;
  location: string;
  year: string;
  category: ServiceCategory;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  highlightMetric: {
    value: string;
    label: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  projectType: string;
  avatarInitials: string;
  source?: 'linkedin' | 'google_sites' | 'direct';
  sourceUrl?: string;
  date?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  company: string;
  message: string;
  contactMethod: 'whatsapp' | 'email' | 'call';
  meetingPreference: 'virtual' | 'presencial' | 'telefonica';
}

export interface AiDiagnosticResult {
  summary: string;
  recommendedService: string;
  keyDeliverables: string[];
  estimatedTimeline: string;
  expectedROI: string;
  nextStepAction: string;
}
