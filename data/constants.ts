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
  },
  {
    code: 'CH',
    name: 'Switzerland',
    flag: '🇨🇭',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'AT',
    name: 'Austria',
    flag: '🇦🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'BE',
    name: 'Belgium',
    flag: '🇧🇪',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'PT',
    name: 'Portugal',
    flag: '🇵🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'GR',
    name: 'Greece',
    flag: '🇬🇷',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    flag: '🇨🇿',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'HU',
    name: 'Hungary',
    flag: '🇭🇺',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'PL',
    name: 'Poland',
    flag: '🇵🇱',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'NO',
    name: 'Norway',
    flag: '🇳🇴',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'DK',
    name: 'Denmark',
    flag: '🇩🇰',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES
  },
  {
    code: 'FI',
    name: 'Finland',
    flag: '🇫🇮',
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
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    continent: 'Oceania',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '🇳🇿',
    continent: 'Oceania',
    isSchengen: false,
    visaTypes: VISA_TYPES
  }
];

export const INDIAN_CITIES: City[] = [
  { id: 'delhi', name: 'Delhi', slug: 'delhi', country: 'IN', region: 'North India', isActive: true },
  { id: 'mumbai', name: 'Mumbai', slug: 'mumbai', country: 'IN', region: 'West India', isActive: true },
  { id: 'bangalore', name: 'Bangalore', slug: 'bangalore', country: 'IN', region: 'South India', isActive: true },
  { id: 'hyderabad', name: 'Hyderabad', slug: 'hyderabad', country: 'IN', region: 'South India', isActive: true },
  { id: 'chennai', name: 'Chennai', slug: 'chennai', country: 'IN', region: 'South India', isActive: true },
  { id: 'kolkata', name: 'Kolkata', slug: 'kolkata', country: 'IN', region: 'East India', isActive: true },
  { id: 'pune', name: 'Pune', slug: 'pune', country: 'IN', region: 'West India', isActive: true },
  { id: 'ahmedabad', name: 'Ahmedabad', slug: 'ahmedabad', country: 'IN', region: 'West India', isActive: true },
  { id: 'jaipur', name: 'Jaipur', slug: 'jaipur', country: 'IN', region: 'North India', isActive: true },
  { id: 'lucknow', name: 'Lucknow', slug: 'lucknow', country: 'IN', region: 'North India', isActive: true },
  { id: 'kanpur', name: 'Kanpur', slug: 'kanpur', country: 'IN', region: 'North India', isActive: true },
  { id: 'nagpur', name: 'Nagpur', slug: 'nagpur', country: 'IN', region: 'Central India', isActive: true },
  { id: 'indore', name: 'Indore', slug: 'indore', country: 'IN', region: 'Central India', isActive: true },
  { id: 'thane', name: 'Thane', slug: 'thane', country: 'IN', region: 'West India', isActive: true },
  { id: 'bhopal', name: 'Bhopal', slug: 'bhopal', country: 'IN', region: 'Central India', isActive: true },
  { id: 'visakhapatnam', name: 'Visakhapatnam', slug: 'visakhapatnam', country: 'IN', region: 'South India', isActive: true },
  { id: 'pimpri', name: 'Pimpri-Chinchwad', slug: 'pimpri', country: 'IN', region: 'West India', isActive: true },
  { id: 'patna', name: 'Patna', slug: 'patna', country: 'IN', region: 'East India', isActive: true },
  { id: 'vadodara', name: 'Vadodara', slug: 'vadodara', country: 'IN', region: 'West India', isActive: true },
  { id: 'ludhiana', name: 'Ludhiana', slug: 'ludhiana', country: 'IN', region: 'North India', isActive: true },
  { id: 'agra', name: 'Agra', slug: 'agra', country: 'IN', region: 'North India', isActive: true },
  { id: 'nashik', name: 'Nashik', slug: 'nashik', country: 'IN', region: 'West India', isActive: true },
  { id: 'faridabad', name: 'Faridabad', slug: 'faridabad', country: 'IN', region: 'North India', isActive: true },
  { id: 'meerut', name: 'Meerut', slug: 'meerut', country: 'IN', region: 'North India', isActive: true },
  { id: 'rajkot', name: 'Rajkot', slug: 'rajkot', country: 'IN', region: 'West India', isActive: true }
];

export const GULF_CITIES: City[] = [
  { id: 'dubai', name: 'Dubai', slug: 'dubai', country: 'AE', region: 'UAE', isActive: true },
  { id: 'abudhabi', name: 'Abu Dhabi', slug: 'abudhabi', country: 'AE', region: 'UAE', isActive: true },
  { id: 'sharjah', name: 'Sharjah', slug: 'sharjah', country: 'AE', region: 'UAE', isActive: true },
  { id: 'riyadh', name: 'Riyadh', slug: 'riyadh', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'jeddah', name: 'Jeddah', slug: 'jeddah', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'dammam', name: 'Dammam', slug: 'dammam', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'doha', name: 'Doha', slug: 'doha', country: 'QA', region: 'Qatar', isActive: true },
  { id: 'kuwait', name: 'Kuwait City', slug: 'kuwait', country: 'KW', region: 'Kuwait', isActive: true },
  { id: 'manama', name: 'Manama', slug: 'manama', country: 'BH', region: 'Bahrain', isActive: true },
  { id: 'muscat', name: 'Muscat', slug: 'muscat', country: 'OM', region: 'Oman', isActive: true }
];

export const PAKISTAN_CITIES: City[] = [
  { id: 'karachi', name: 'Karachi', slug: 'karachi', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'lahore', name: 'Lahore', slug: 'lahore', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'islamabad', name: 'Islamabad', slug: 'islamabad', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'rawalpindi', name: 'Rawalpindi', slug: 'rawalpindi', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'faisalabad', name: 'Faisalabad', slug: 'faisalabad', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'multan', name: 'Multan', slug: 'multan', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'peshawar', name: 'Peshawar', slug: 'peshawar', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'quetta', name: 'Quetta', slug: 'quetta', country: 'PK', region: 'Pakistan', isActive: true }
];

export const OTHER_CITIES: City[] = [
  { id: 'kathmandu', name: 'Kathmandu', slug: 'kathmandu', country: 'NP', region: 'Nepal', isActive: true },
  { id: 'dhaka', name: 'Dhaka', slug: 'dhaka', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'chittagong', name: 'Chittagong', slug: 'chittagong', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'colombo', name: 'Colombo', slug: 'colombo', country: 'LK', region: 'Sri Lanka', isActive: true }
];

export const ALL_CITIES = [...INDIAN_CITIES, ...GULF_CITIES, ...PAKISTAN_CITIES, ...OTHER_CITIES];
export const ALL_COUNTRIES = [...EUROPEAN_COUNTRIES, ...OTHER_COUNTRIES];
