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

// 30 Schengen + European Countries
export const EUROPEAN_COUNTRIES: Country[] = [
  // Major Schengen Countries
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'france'
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'germany'
  },
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'italy'
  },
  {
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'spain'
  },
  {
    code: 'NL',
    name: 'Netherlands',
    flag: '🇳🇱',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'netherlands'
  },
  {
    code: 'CH',
    name: 'Switzerland',
    flag: '🇨🇭',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'switzerland'
  },
  {
    code: 'AT',
    name: 'Austria',
    flag: '🇦🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'austria'
  },
  {
    code: 'BE',
    name: 'Belgium',
    flag: '🇧🇪',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'belgium'
  },
  {
    code: 'PT',
    name: 'Portugal',
    flag: '🇵🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'portugal'
  },
  {
    code: 'GR',
    name: 'Greece',
    flag: '🇬🇷',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'greece'
  },
  // Central & Eastern European Countries
  {
    code: 'CZ',
    name: 'Czech Republic',
    flag: '🇨🇿',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'czech-republic'
  },
  {
    code: 'HU',
    name: 'Hungary',
    flag: '🇭🇺',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'hungary'
  },
  {
    code: 'PL',
    name: 'Poland',
    flag: '🇵🇱',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'poland'
  },
  {
    code: 'SK',
    name: 'Slovakia',
    flag: '🇸🇰',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'slovakia'
  },
  {
    code: 'SI',
    name: 'Slovenia',
    flag: '🇸🇮',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'slovenia'
  },
  {
    code: 'HR',
    name: 'Croatia',
    flag: '🇭🇷',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'croatia'
  },
  {
    code: 'EE',
    name: 'Estonia',
    flag: '🇪🇪',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'estonia'
  },
  {
    code: 'LV',
    name: 'Latvia',
    flag: '🇱🇻',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'latvia'
  },
  {
    code: 'LT',
    name: 'Lithuania',
    flag: '🇱🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'lithuania'
  },
  {
    code: 'MT',
    name: 'Malta',
    flag: '🇲🇹',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'malta'
  },
  // Nordic Countries
  {
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'sweden'
  },
  {
    code: 'NO',
    name: 'Norway',
    flag: '🇳🇴',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'norway'
  },
  {
    code: 'DK',
    name: 'Denmark',
    flag: '🇩🇰',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'denmark'
  },
  {
    code: 'FI',
    name: 'Finland',
    flag: '🇫🇮',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'finland'
  },
  {
    code: 'IS',
    name: 'Iceland',
    flag: '🇮🇸',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'iceland'
  },
  // Other European Countries
  {
    code: 'LU',
    name: 'Luxembourg',
    flag: '🇱🇺',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'luxembourg'
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    flag: '🇱🇮',
    continent: 'Europe',
    isSchengen: true,
    visaTypes: VISA_TYPES,
    slug: 'liechtenstein'
  },
  {
    code: 'CY',
    name: 'Cyprus',
    flag: '🇨🇾',
    continent: 'Europe',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'cyprus'
  },
  {
    code: 'IE',
    name: 'Ireland',
    flag: '🇮🇪',
    continent: 'Europe',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'ireland'
  },
  {
    code: 'RO',
    name: 'Romania',
    flag: '🇷🇴',
    continent: 'Europe',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'romania'
  }
];

// 5 Other Major Destinations
export const OTHER_COUNTRIES: Country[] = [
  {
    code: 'US',
    name: 'USA',
    flag: '🇺🇸',
    continent: 'North America',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'usa'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    continent: 'Europe',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'uk'
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    continent: 'North America',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'canada'
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    continent: 'Oceania',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'australia'
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '🇳🇿',
    continent: 'Oceania',
    isSchengen: false,
    visaTypes: VISA_TYPES,
    slug: 'new-zealand'
  }
];

// Top 25 Indian Cities
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

// Top 10 Pakistani Cities
export const PAKISTAN_CITIES: City[] = [
  { id: 'karachi', name: 'Karachi', slug: 'karachi', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'lahore', name: 'Lahore', slug: 'lahore', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'islamabad', name: 'Islamabad', slug: 'islamabad', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'rawalpindi', name: 'Rawalpindi', slug: 'rawalpindi', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'faisalabad', name: 'Faisalabad', slug: 'faisalabad', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'multan', name: 'Multan', slug: 'multan', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'peshawar', name: 'Peshawar', slug: 'peshawar', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'quetta', name: 'Quetta', slug: 'quetta', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'sialkot', name: 'Sialkot', slug: 'sialkot', country: 'PK', region: 'Pakistan', isActive: true },
  { id: 'gujranwala', name: 'Gujranwala', slug: 'gujranwala', country: 'PK', region: 'Pakistan', isActive: true }
];

// Gulf Countries - All Major Cities
export const GULF_CITIES: City[] = [
  // UAE
  { id: 'dubai', name: 'Dubai', slug: 'dubai', country: 'AE', region: 'UAE', isActive: true },
  { id: 'abudhabi', name: 'Abu Dhabi', slug: 'abudhabi', country: 'AE', region: 'UAE', isActive: true },
  { id: 'sharjah', name: 'Sharjah', slug: 'sharjah', country: 'AE', region: 'UAE', isActive: true },
  { id: 'ajman', name: 'Ajman', slug: 'ajman', country: 'AE', region: 'UAE', isActive: true },
  { id: 'ras-al-khaimah', name: 'Ras Al Khaimah', slug: 'ras-al-khaimah', country: 'AE', region: 'UAE', isActive: true },
  // Saudi Arabia
  { id: 'riyadh', name: 'Riyadh', slug: 'riyadh', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'jeddah', name: 'Jeddah', slug: 'jeddah', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'dammam', name: 'Dammam', slug: 'dammam', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'khobar', name: 'Al Khobar', slug: 'khobar', country: 'SA', region: 'Saudi Arabia', isActive: true },
  { id: 'medina', name: 'Medina', slug: 'medina', country: 'SA', region: 'Saudi Arabia', isActive: true },
  // Qatar
  { id: 'doha', name: 'Doha', slug: 'doha', country: 'QA', region: 'Qatar', isActive: true },
  { id: 'al-rayyan', name: 'Al Rayyan', slug: 'al-rayyan', country: 'QA', region: 'Qatar', isActive: true },
  // Kuwait
  { id: 'kuwait', name: 'Kuwait City', slug: 'kuwait', country: 'KW', region: 'Kuwait', isActive: true },
  { id: 'hawally', name: 'Hawally', slug: 'hawally', country: 'KW', region: 'Kuwait', isActive: true },
  // Bahrain
  { id: 'manama', name: 'Manama', slug: 'manama', country: 'BH', region: 'Bahrain', isActive: true },
  { id: 'muharraq', name: 'Muharraq', slug: 'muharraq', country: 'BH', region: 'Bahrain', isActive: true },
  // Oman
  { id: 'muscat', name: 'Muscat', slug: 'muscat', country: 'OM', region: 'Oman', isActive: true },
  { id: 'salalah', name: 'Salalah', slug: 'salalah', country: 'OM', region: 'Oman', isActive: true }
];

// Nepal - All Major Cities
export const NEPAL_CITIES: City[] = [
  { id: 'kathmandu', name: 'Kathmandu', slug: 'kathmandu', country: 'NP', region: 'Nepal', isActive: true },
  { id: 'pokhara', name: 'Pokhara', slug: 'pokhara', country: 'NP', region: 'Nepal', isActive: true },
  { id: 'lalitpur', name: 'Lalitpur', slug: 'lalitpur', country: 'NP', region: 'Nepal', isActive: true },
  { id: 'bhaktapur', name: 'Bhaktapur', slug: 'bhaktapur', country: 'NP', region: 'Nepal', isActive: true },
  { id: 'biratnagar', name: 'Biratnagar', slug: 'biratnagar', country: 'NP', region: 'Nepal', isActive: true }
];

// Bangladesh - All Major Cities  
export const BANGLADESH_CITIES: City[] = [
  { id: 'dhaka', name: 'Dhaka', slug: 'dhaka', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'chittagong', name: 'Chittagong', slug: 'chittagong', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'sylhet', name: 'Sylhet', slug: 'sylhet', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'khulna', name: 'Khulna', slug: 'khulna', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'rajshahi', name: 'Rajshahi', slug: 'rajshahi', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'barisal', name: 'Barisal', slug: 'barisal', country: 'BD', region: 'Bangladesh', isActive: true }
];

// Combined Arrays
export const ALL_CITIES = [
  ...INDIAN_CITIES, 
  ...PAKISTAN_CITIES, 
  ...GULF_CITIES, 
  ...NEPAL_CITIES, 
  ...BANGLADESH_CITIES
];

export const ALL_COUNTRIES = [...EUROPEAN_COUNTRIES, ...OTHER_COUNTRIES];

// Helper functions
export const getCountryBySlug = (slug: string) => {
  return ALL_COUNTRIES.find(country => country.slug === slug);
};

export const getCityBySlug = (slug: string) => {
  return ALL_CITIES.find(city => city.slug === slug);
};

export const getVisaTypeBySlug = (slug: string) => {
  return VISA_TYPES.find(visa => visa.slug === slug);
};

// Popular combinations for homepage
export const POPULAR_DESTINATIONS = [
  { country: 'france', visa: 'visit', cities: ['delhi', 'mumbai', 'bangalore'] },
  { country: 'germany', visa: 'work', cities: ['delhi', 'bangalore', 'hyderabad'] },
  { country: 'usa', visa: 'visit', cities: ['mumbai', 'delhi', 'chennai'] },
  { country: 'uk', visa: 'study', cities: ['delhi', 'mumbai', 'pune'] },
  { country: 'canada', visa: 'work', cities: ['delhi', 'bangalore', 'mumbai'] },
  { country: 'australia', visa: 'study', cities: ['mumbai', 'delhi', 'hyderabad'] }
];

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  number: '+971501234567', // UAE number for international reach
  message: 'Hi! I need help with visa appointment booking. Can you assist me?'
};

// Business Information
export const BUSINESS_INFO = {
  name: 'VFS Global Appointment Services',
  tagline: 'Professional Visa Appointment Booking',
  email: 'info@vfsappointments.com',
  phone: '+971-50-123-4567',
  address: 'Dubai, UAE'
};
