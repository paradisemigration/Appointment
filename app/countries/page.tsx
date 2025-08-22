import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, MapPin, Clock, Users, Star, Globe, ArrowRight } from 'lucide-react';
import { ALL_COUNTRIES, VISA_TYPES, ALL_CITIES } from '@/data/constants';

export const metadata: Metadata = {
  title: 'All Countries | VFS Appointment Portal',
  description: 'Browse visa appointment services for all 35+ countries including European Schengen countries and global destinations.',
  keywords: 'all countries, visa appointments, Schengen countries, European visas, global destinations',
};

// Extended country data with images
const countryDetails = {
  'France': {
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop',
    capital: 'Paris',
    region: 'Western Europe',
    popularCities: ['Paris', 'Lyon', 'Marseille'],
    description: 'Experience the romance of France with its iconic landmarks, world-class cuisine, and rich cultural heritage.'
  },
  'Germany': {
    image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?w=400&h=300&fit=crop',
    capital: 'Berlin',
    region: 'Central Europe',
    popularCities: ['Berlin', 'Munich', 'Frankfurt'],
    description: 'Discover Germany\'s blend of historic architecture, cutting-edge technology, and vibrant cultural scene.'
  },
  'Italy': {
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop',
    capital: 'Rome',
    region: 'Southern Europe',
    popularCities: ['Rome', 'Milan', 'Venice'],
    description: 'Immerse yourself in Italy\'s art, history, and cuisine in the birthplace of the Renaissance.'
  },
  'Spain': {
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=400&h=300&fit=crop',
    capital: 'Madrid',
    region: 'Southern Europe',
    popularCities: ['Madrid', 'Barcelona', 'Seville'],
    description: 'Explore Spain\'s passionate culture, stunning architecture, and beautiful Mediterranean coastline.'
  },
  'Netherlands': {
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop',
    capital: 'Amsterdam',
    region: 'Western Europe',
    popularCities: ['Amsterdam', 'Rotterdam', 'The Hague'],
    description: 'Experience the Netherlands\' charming canals, tulip fields, and progressive Dutch culture.'
  },
  'USA': {
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop',
    capital: 'Washington D.C.',
    region: 'North America',
    popularCities: ['New York', 'Los Angeles', 'Chicago'],
    description: 'Discover the land of opportunities with diverse landscapes and dynamic cities across America.'
  },
  'United Kingdom': {
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
    capital: 'London',
    region: 'Western Europe',
    popularCities: ['London', 'Edinburgh', 'Manchester'],
    description: 'Explore the UK\'s royal heritage, historic landmarks, and vibrant cultural traditions.'
  },
  'Canada': {
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=300&fit=crop',
    capital: 'Ottawa',
    region: 'North America',
    popularCities: ['Toronto', 'Vancouver', 'Montreal'],
    description: 'Experience Canada\'s breathtaking natural beauty and multicultural urban centers.'
  }
};

// Additional European countries
const additionalCountries = [
  { name: 'Switzerland', flag: '🇨🇭', isSchengen: true, capital: 'Bern' },
  { name: 'Austria', flag: '🇦🇹', isSchengen: true, capital: 'Vienna' },
  { name: 'Belgium', flag: '🇧🇪', isSchengen: true, capital: 'Brussels' },
  { name: 'Portugal', flag: '🇵🇹', isSchengen: true, capital: 'Lisbon' },
  { name: 'Greece', flag: '🇬🇷', isSchengen: true, capital: 'Athens' },
  { name: 'Czech Republic', flag: '🇨🇿', isSchengen: true, capital: 'Prague' },
  { name: 'Hungary', flag: '🇭🇺', isSchengen: true, capital: 'Budapest' },
  { name: 'Poland', flag: '🇵🇱', isSchengen: true, capital: 'Warsaw' },
  { name: 'Sweden', flag: '🇸🇪', isSchengen: true, capital: 'Stockholm' },
  { name: 'Norway', flag: '🇳🇴', isSchengen: true, capital: 'Oslo' },
  { name: 'Denmark', flag: '🇩🇰', isSchengen: true, capital: 'Copenhagen' },
  { name: 'Finland', flag: '🇫🇮', isSchengen: true, capital: 'Helsinki' },
];

const allCountries = [...ALL_COUNTRIES, ...additionalCountries];

export default function CountriesPage() {
  const europeanCountries = allCountries.filter(country => 
    country.continent === 'Europe' || country.isSchengen
  );
  const otherCountries = allCountries.filter(country => 
    country.continent !== 'Europe' && !country.isSchengen
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Countries</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            35+ Countries Covered
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Professional visa appointment booking services for European countries and global destinations
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              🇪🇺 27 Schengen Countries
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              🌍 8+ Global Destinations
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              ⚡ 24-Hour Booking
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">35+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">24h</div>
              <div className="text-gray-600">Booking Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Most requested visa appointment services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {ALL_COUNTRIES.slice(0, 8).map((country) => {
              const details = countryDetails[country.name as keyof typeof countryDetails];
              return (
                <Link
                  key={country.code}
                  href={`/countries/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    {details?.image ? (
                      <img
                        src={details.image}
                        alt={country.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                        <span className="text-6xl">{country.flag}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                      <span className="text-2xl">{country.flag}</span>
                    </div>
                    {country.isSchengen && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                        Schengen Area
                      </span>
                    )}
                    <p className="text-gray-600 text-sm mb-4">
                      {details?.description || `Professional visa appointment booking services for ${country.name}.`}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{details?.capital || 'Multiple cities'}</span>
                      <Clock className="h-4 w-4 ml-4 mr-1" />
                      <span>15-20 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-medium">View Appointments</span>
                      <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* European Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🇪🇺 European Countries
            </h2>
            <p className="text-xl text-gray-600">Schengen and non-Schengen European destinations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {europeanCountries.map((country) => (
              <Link
                key={country.code || country.name}
                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}-visit-visa-appointment-delhi`}
                className="group bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {country.name}
                </h3>
                {country.isSchengen && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    Schengen
                  </span>
                )}
                <div className="text-xs text-gray-500">
                  {(country as any).capital || 'Available'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🌍 Global Destinations
            </h2>
            <p className="text-xl text-gray-600">Popular non-European destinations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCountries.map((country) => {
              const details = countryDetails[country.name as keyof typeof countryDetails];
              return (
                <Link
                  key={country.code}
                  href={`/countries/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-5xl">{country.flag}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {country.name}
                      </h3>
                      <p className="text-gray-500">{details?.region || 'Global Destination'}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {details?.description || `Professional visa services for ${country.name} with expert guidance.`}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>20-30 days</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span>98% success</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visa Types Available</h2>
            <p className="text-xl text-gray-600">Choose the right visa type for your travel purpose</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VISA_TYPES.map((visa) => (
              <div key={visa.id} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">
                  {visa.id === 'visit' ? '🏖️' : visa.id === 'work' ? '💼' : '🎓'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{visa.name}</h3>
                <p className="text-gray-600 mb-4">{visa.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Processing Time:</span>
                    <span className="font-medium">{visa.processingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Starting Fee:</span>
                    <span className="font-medium text-primary-600">{visa.fee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cities We Serve</h2>
            <p className="text-xl text-gray-600">Available in 50+ cities across India, Gulf, Pakistan, and more</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {ALL_CITIES.map((city) => (
              <div key={city.id} className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <div className="font-semibold text-gray-900">{city.name}</div>
                <div className="text-sm text-gray-500">{city.region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Book Your Visa Appointment?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their visa appointment needs.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Globe className="h-5 w-5 mr-2" />
            Start Booking Now
          </Link>
        </div>
      </section>
    </div>
  );
}
