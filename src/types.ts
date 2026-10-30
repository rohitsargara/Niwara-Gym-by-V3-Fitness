export interface Program {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  schedule: string;
  suitableFor: string;
  image: string;
  intensity: 'Medium' | 'High' | 'Custom';
}

export interface GymFacility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  tag: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  period: string;
  badge?: string;
  popular?: boolean;
  pricingLabel: string;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'interiors' | 'equipment' | 'training' | 'community';
  image: string;
  caption: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  preferredPlan: string;
  message: string;
}
