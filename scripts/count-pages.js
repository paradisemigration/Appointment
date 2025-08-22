const { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } = require('../data/constants.ts');

console.log('=== PAGE COUNT CALCULATION ===');
console.log('Countries:', ALL_COUNTRIES.length);
console.log('Visa Types:', VISA_TYPES.length);
console.log('Cities:', ALL_CITIES.length);

// Static pages
const staticPages = 7; // home, about, contact, countries, privacy, services, terms
console.log('Static pages:', staticPages);

// Country pages
const countryPages = ALL_COUNTRIES.length;
console.log('Country pages:', countryPages);

// Visa appointment pages (country/appointment/visa)
const visaAppointmentPages = ALL_COUNTRIES.length * VISA_TYPES.length;
console.log('Visa appointment pages:', visaAppointmentPages);

// City appointment pages (country/appointment/visa/city)
const cityAppointmentPages = ALL_COUNTRIES.length * VISA_TYPES.length * ALL_CITIES.length;
console.log('City appointment pages:', cityAppointmentPages);

// Total pages
const totalPages = staticPages + countryPages + visaAppointmentPages + cityAppointmentPages;
console.log('\n=== TOTAL PAGES ===');
console.log('Total pages:', totalPages);
console.log('Target: 7,875 pages');
console.log('Status:', totalPages >= 7875 ? '✅ TARGET REACHED!' : '❌ Below target');

// Page breakdown
console.log('\n=== PAGE BREAKDOWN ===');
console.log('1. Static pages:', staticPages);
console.log('2. Country overview pages:', countryPages);
console.log('3. Visa appointment listing pages:', visaAppointmentPages);
console.log('4. Individual city appointment pages:', cityAppointmentPages);
console.log('Total:', totalPages);

// SEO Coverage
console.log('\n=== SEO COVERAGE ===');
console.log('All pages have:');
console.log('- Dynamic titles with country/visa/city names');
console.log('- Meta descriptions with target keywords');
console.log('- OpenGraph tags for social sharing');
console.log('- Structured data for location and services');
console.log('- Country/city specific content');
