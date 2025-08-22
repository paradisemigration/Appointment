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
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'KR',
    name: 'South Korea',
    flag: '🇰🇷',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'HK',
    name: 'Hong Kong',
    flag: '🇭🇰',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'TH',
    name: 'Thailand',
    flag: '🇹🇭',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    continent: 'Asia',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    continent: 'South America',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    continent: 'North America',
    isSchengen: false,
    visaTypes: VISA_TYPES
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    continent: 'Africa',
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

export const SOUTH_ASIAN_CITIES: City[] = [
  { id: 'kathmandu', name: 'Kathmandu', slug: 'kathmandu', country: 'NP', region: 'Nepal', isActive: true },
  { id: 'pokhara', name: 'Pokhara', slug: 'pokhara', country: 'NP', region: 'Nepal', isActive: true },
  { id: 'dhaka', name: 'Dhaka', slug: 'dhaka', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'chittagong', name: 'Chittagong', slug: 'chittagong', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'sylhet', name: 'Sylhet', slug: 'sylhet', country: 'BD', region: 'Bangladesh', isActive: true },
  { id: 'colombo', name: 'Colombo', slug: 'colombo', country: 'LK', region: 'Sri Lanka', isActive: true },
  { id: 'kandy', name: 'Kandy', slug: 'kandy', country: 'LK', region: 'Sri Lanka', isActive: true },
  { id: 'galle', name: 'Galle', slug: 'galle', country: 'LK', region: 'Sri Lanka', isActive: true }
];

export const SOUTHEAST_ASIAN_CITIES: City[] = [
  { id: 'bangkok', name: 'Bangkok', slug: 'bangkok', country: 'TH', region: 'Thailand', isActive: true },
  { id: 'phuket', name: 'Phuket', slug: 'phuket', country: 'TH', region: 'Thailand', isActive: true },
  { id: 'chiang-mai', name: 'Chiang Mai', slug: 'chiang-mai', country: 'TH', region: 'Thailand', isActive: true },
  { id: 'kuala-lumpur', name: 'Kuala Lumpur', slug: 'kuala-lumpur', country: 'MY', region: 'Malaysia', isActive: true },
  { id: 'penang', name: 'Penang', slug: 'penang', country: 'MY', region: 'Malaysia', isActive: true },
  { id: 'johor-bahru', name: 'Johor Bahru', slug: 'johor-bahru', country: 'MY', region: 'Malaysia', isActive: true },
  { id: 'singapore', name: 'Singapore', slug: 'singapore', country: 'SG', region: 'Singapore', isActive: true },
  { id: 'jakarta', name: 'Jakarta', slug: 'jakarta', country: 'ID', region: 'Indonesia', isActive: true },
  { id: 'bali', name: 'Bali', slug: 'bali', country: 'ID', region: 'Indonesia', isActive: true },
  { id: 'surabaya', name: 'Surabaya', slug: 'surabaya', country: 'ID', region: 'Indonesia', isActive: true },
  { id: 'manila', name: 'Manila', slug: 'manila', country: 'PH', region: 'Philippines', isActive: true },
  { id: 'cebu', name: 'Cebu', slug: 'cebu', country: 'PH', region: 'Philippines', isActive: true },
  { id: 'davao', name: 'Davao', slug: 'davao', country: 'PH', region: 'Philippines', isActive: true },
  { id: 'ho-chi-minh', name: 'Ho Chi Minh City', slug: 'ho-chi-minh', country: 'VN', region: 'Vietnam', isActive: true },
  { id: 'hanoi', name: 'Hanoi', slug: 'hanoi', country: 'VN', region: 'Vietnam', isActive: true },
  { id: 'da-nang', name: 'Da Nang', slug: 'da-nang', country: 'VN', region: 'Vietnam', isActive: true }
];

export const EAST_ASIAN_CITIES: City[] = [
  { id: 'beijing', name: 'Beijing', slug: 'beijing', country: 'CN', region: 'China', isActive: true },
  { id: 'shanghai', name: 'Shanghai', slug: 'shanghai', country: 'CN', region: 'China', isActive: true },
  { id: 'guangzhou', name: 'Guangzhou', slug: 'guangzhou', country: 'CN', region: 'China', isActive: true },
  { id: 'shenzhen', name: 'Shenzhen', slug: 'shenzhen', country: 'CN', region: 'China', isActive: true },
  { id: 'hong-kong', name: 'Hong Kong', slug: 'hong-kong', country: 'HK', region: 'Hong Kong', isActive: true },
  { id: 'tokyo', name: 'Tokyo', slug: 'tokyo', country: 'JP', region: 'Japan', isActive: true },
  { id: 'osaka', name: 'Osaka', slug: 'osaka', country: 'JP', region: 'Japan', isActive: true },
  { id: 'kyoto', name: 'Kyoto', slug: 'kyoto', country: 'JP', region: 'Japan', isActive: true },
  { id: 'seoul', name: 'Seoul', slug: 'seoul', country: 'KR', region: 'South Korea', isActive: true },
  { id: 'busan', name: 'Busan', slug: 'busan', country: 'KR', region: 'South Korea', isActive: true },
  { id: 'incheon', name: 'Incheon', slug: 'incheon', country: 'KR', region: 'South Korea', isActive: true }
];

export const OTHER_GLOBAL_CITIES: City[] = [
  { id: 'new-york', name: 'New York', slug: 'new-york', country: 'US', region: 'USA', isActive: true },
  { id: 'los-angeles', name: 'Los Angeles', slug: 'los-angeles', country: 'US', region: 'USA', isActive: true },
  { id: 'chicago', name: 'Chicago', slug: 'chicago', country: 'US', region: 'USA', isActive: true },
  { id: 'london', name: 'London', slug: 'london', country: 'GB', region: 'UK', isActive: true },
  { id: 'manchester', name: 'Manchester', slug: 'manchester', country: 'GB', region: 'UK', isActive: true },
  { id: 'birmingham', name: 'Birmingham', slug: 'birmingham', country: 'GB', region: 'UK', isActive: true },
  { id: 'toronto', name: 'Toronto', slug: 'toronto', country: 'CA', region: 'Canada', isActive: true },
  { id: 'vancouver', name: 'Vancouver', slug: 'vancouver', country: 'CA', region: 'Canada', isActive: true },
  { id: 'montreal', name: 'Montreal', slug: 'montreal', country: 'CA', region: 'Canada', isActive: true },
  { id: 'sydney', name: 'Sydney', slug: 'sydney', country: 'AU', region: 'Australia', isActive: true },
  { id: 'melbourne', name: 'Melbourne', slug: 'melbourne', country: 'AU', region: 'Australia', isActive: true },
  { id: 'brisbane', name: 'Brisbane', slug: 'brisbane', country: 'AU', region: 'Australia', isActive: true },
  { id: 'auckland', name: 'Auckland', slug: 'auckland', country: 'NZ', region: 'New Zealand', isActive: true }
];

export const ALL_CITIES = [...INDIAN_CITIES, ...GULF_CITIES, ...PAKISTAN_CITIES, ...SOUTH_ASIAN_CITIES, ...SOUTHEAST_ASIAN_CITIES, ...EAST_ASIAN_CITIES, ...OTHER_GLOBAL_CITIES];
export const ALL_COUNTRIES = [...EUROPEAN_COUNTRIES, ...OTHER_COUNTRIES];
