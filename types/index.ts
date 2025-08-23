export interface Country {
  code: string;
  name: string;
  flag: string;
  continent: string;
  isSchengen: boolean;
  visaTypes: VisaType[];
  slug: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  country: string;
  region: string;
  isActive: boolean;
}

export interface VisaType {
  id: string;
  name: string;
  slug: string;
  description: string;
  processingTime: string;
  fee: string;
}

export interface VisaPageContent {
  title: string;
  description: string;
  content: string;
  wordCount: number;
  seoKeywords: string[];
  structuredData: any;
}

export interface AppointmentBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  visaType: string;
  city: string;
  preferredDate?: string;
  alternateDate?: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  country?: string;
  visaType?: string;
  message: string;
  urgency?: string;
  source?: string;
}

export interface WhatsAppConfig {
  number: string;
  message: string;
  quickMessages?: string[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: string;
  processingTime: string;
}

export interface PopularDestination {
  country: string;
  visa: string;
  cities: string[];
  popularity: number;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  openGraph?: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    title: string;
    description: string;
    image?: string;
  };
  structuredData?: any;
}

export interface PageMetadata {
  country: Country;
  visa: VisaType;
  city: City;
  pageTitle: string;
  seoData: SEOData;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  icon?: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  city: string;
  visaType: string;
  rating: number;
  comment: string;
  date: Date;
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  priority: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  estimatedTime?: string;
}

export interface VFSCenter {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  phone?: string;
  email?: string;
  workingHours: {
    [key: string]: string;
  };
  services: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Document {
  id: string;
  name: string;
  description: string;
  mandatory: boolean;
  category: string;
  visaTypes: string[];
  countries?: string[];
  format?: string;
  examples?: string[];
}

export interface EligibilityCriteria {
  category: string;
  requirements: {
    title: string;
    description: string;
    mandatory: boolean;
  }[];
}

export interface FeeStructure {
  category: string;
  embassyFee: string;
  serviceFee?: string;
  vfsFee?: string;
  additionalFees?: {
    name: string;
    amount: string;
    description: string;
  }[];
}

export interface ApplicationStatus {
  id: string;
  bookingId: string;
  status: string;
  description: string;
  timestamp: Date;
  nextSteps?: string[];
}

export interface Newsletter {
  email: string;
  preferences: {
    visaUpdates: boolean;
    promotions: boolean;
    tips: boolean;
  };
  subscribedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: string;
  featured: boolean;
  seoData: SEOData;
}

export interface TravelTip {
  id: string;
  title: string;
  description: string;
  category: string;
  countries?: string[];
  visaTypes?: string[];
  priority: number;
}

export interface CountryGuide {
  country: string;
  overview: string;
  visaRequirements: string;
  entryRequirements: string;
  culturalTips: string[];
  travelTips: string[];
  emergencyContacts: {
    embassy: string;
    police: string;
    medical: string;
  };
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface SearchFilters {
  country?: string;
  visaType?: string;
  city?: string;
  urgency?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  conversionRate: number;
  popularCountries: string[];
  popularCities: string[];
  popularVisaTypes: string[];
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  whatsapp: boolean;
  push: boolean;
}

export interface UserPreferences {
  language: string;
  currency: string;
  timezone: string;
  notifications: NotificationSettings;
}
