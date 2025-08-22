import { Country, City, VisaType } from '@/types';

export const VISA_TYPES: VisaType[] = [
  {
    id: 'visit',
    name: 'Visit/Tourist Visa',
    slug: 'visit',
    description: 'For tourism, visiting family/friends, or short-term stays',
    processingTime: '15-20 working days',
    fee: 'From €80'
  },
  {
    id: 'work',
    name: 'Work Permit',
    slug: 'work',
    description: 'For employment opportunities and work permits',
    processingTime: '20-30 working days',
    fee: 'From €140'
  },
  {
    id: 'study',
    name: 'Study Visa',
    slug: 'study',
    description: 'For academic purposes and educational programs',
    processingTime: '15-25 working days',
    fee: 'From €99'
  }
];

export const EUROPEAN_COUNTRIES: Country[] = [
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'NL',
    name: 'Netherlands',
    flag: '🇳🇱',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  }
];

export const OTHER_COUNTRIES: Country[] = [
  {
    code: 'US',
    name: 'USA',
    flag: '🇺🇸',
    continent: 'North America',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    continent: 'Europe',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    continent: 'North America',
    isSchengen: false,
    visaTypes: VISA_TYPES
  }
];

export const INDIAN_CITIES: City[] = [
  { id: 'delhi', name: 'Delhi', slug: 'delhi', country: 'IN', region: 'North', isActive: true },
  { id: 'mumbai', name: 'Mumbai', slug: 'mumbai', country: 'IN', region: 'West', isActive: true },
  { id: 'bangalore', name: 'Bangalore', slug: 'bangalore', country: 'IN', region: 'South', isActive: true },
  { id: 'hyderabad', name: 'Hyderabad', slug: 'hyderabad', country: 'IN', region: 'South', isActive: true },
  { id: 'chennai', name: 'Chennai', slug: 'chennai', country: 'IN', region: 'South', isActive: true },
  { id: 'kolkata', name: 'Kolkata', slug: 'kolkata', country: 'IN', region: 'East', isActive: true },
  { id: 'pune', name: 'Pune', slug: 'pune', country: 'IN', region: 'West', isActive: true },
  { id: 'ahmedabad', name: 'Ahmedabad', slug: 'ahmedabad', country: 'IN', region: 'West', isActive: true }
];

export const GULF_CITIES: City[] = [
  { id: 'dubai', name: 'Dubai', slug: 'dubai', country: 'AE', region: 'UAE', isActive: true },
  { id: 'abudhabi', name: 'Abu Dhabi', slug: 'abudhabi', country: 'AE', region: 'UAE', isActive: true },
  { id: 'riyadh', name: 'Riyadh', slug: 'riyadh', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'doha', name: 'Doha', slug: 'doha', country: 'QA', region: 'Qatar', isActive: true }
];

export const ALL_CITIES = [...INDIAN_CITIES, ...GULF_CITIES];
export const ALL_COUNTRIES = [...EUROPEAN_COUNTRIES, ...OTHER_COUNTRIES];
