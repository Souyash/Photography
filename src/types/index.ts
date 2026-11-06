export type Category = 
  | 'all'
  | 'weddings'
  | 'pre-wedding'
  | 'editorial'
  | 'events';

export interface CameraSpecs {
  camera: string;
  lens: string;
  settings: string; // e.g. "f/1.4 · 1/800s · ISO 100"
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'weddings' | 'pre-wedding' | 'editorial' | 'events';
  location: string;
  year: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  imageUrl: string;
  thumbnailUrl: string;
  story: string;
  client: string;
  specs: CameraSpecs;
  featured?: boolean;
  tags: string[];
}

export interface StorySpread {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  date: string;
  quote: string;
  quoteAuthor: string;
  narrative: string[];
  coverImage: string;
  galleryImages: {
    url: string;
    caption: string;
    aspectRatio: 'landscape' | 'portrait';
  }[];
  palette: string[]; // e.g. hex colors of the shoot
}

export interface PackageAddon {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface InvestmentPackage {
  id: string;
  tier: string;
  name: string;
  subtitle: string;
  price: number;
  featured?: boolean;
  tagline: string;
  deliverables: string[];
  highlight: string;
  idealFor: string;
}

export interface ReviewItem {
  id: string;
  clientNames: string;
  eventType: string;
  eventDate: string;
  location: string;
  rating: number;
  quote: string;
  fullReview: string;
  thumbnailUrl: string;
  publication?: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  url: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  selectedPackage: string;
  guestCount: string;
  budgetRange: string;
  vision: string;
  referral: string;
}

