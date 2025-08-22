import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, MapPin, Star, Search } from 'lucide-react';
import { ALL_COUNTRIES } from '@/data/constants';

export const metadata: Metadata = {
  title: 'All Countries - Visa Appointment Services | VFS Portal',
  description: 'Browse all available countries for visa appointment booking. Professional VFS services for European, American, Asian and other global destinations.',
  keywords: 'visa appointments, all countries, VFS booking, visa services, global destinations',
  openGraph: {
    title: 'All Countries - Visa Appointment Services',
    description: 'Professional visa appointment booking services for all major destinations worldwide',
    type: 'website',
  },
};

export default function CountriesPage() {
  const europeanCountries = ALL_COUNTRIES.filter(c => c.continent === 'Europe');
  const otherCountries = ALL_COUNTRIES.filter(c => c.continent !== 'Europe');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            All Countries
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Professional visa appointment booking services for all major destinations worldwide
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="stat-card">
              <div className="text-3xl font-bold text-white mb-2">{ALL_COUNTRIES.length}+</div>
              <div className="text-gray-200 text-sm">Countries</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-200 text-sm">Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-200 text-sm">Cities</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-200 text-sm">Booking Time</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="breadcrumb mb-12">
          <Link href="/" className="breadcrumb-item hover:text-mustard-600">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="text-gray-900 font-medium">Countries</span>
        </nav>

        {/* European Countries */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              European Countries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schengen and other European destinations with streamlined visa processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {europeanCountries.map((country, index) => (
              <Link
                key={country.code}
                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="country-card">
                  <div className="text-center">
                    <div className="text-4xl mb-4 country-flag group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-mustard-600 transition-colors duration-300">
                      {country.name}
                    </h3>
                    {country.isSchengen && (
                      <span className="badge-primary mb-3">
                        Schengen
                      </span>
                    )}
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="w-3 h-3 text-mustard-600" />
                        <span>50+ Cities</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="w-3 h-3 text-mustard-500 fill-current" />
                        <span>98% Success</span>
                      </div>
                    </div>
                    <div className="text-mustard-600 group-hover:text-mustard-700 font-medium text-sm">
                      View Services →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Other Countries */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Americas, Asia, and other global destinations for work, study, and travel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherCountries.map((country, index) => (
              <Link
                key={country.code}
                href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group animate-fade-in"
                style={{animationDelay: `${(index + europeanCountries.length) * 0.1}s`}}
              >
                <div className="country-card">
                  <div className="text-center">
                    <div className="text-4xl mb-4 country-flag group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-mustard-600 transition-colors duration-300">
                      {country.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="w-3 h-3 text-mustard-600" />
                        <span>Major Cities</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="w-3 h-3 text-mustard-500 fill-current" />
                        <span>Expert Support</span>
                      </div>
                    </div>
                    <div className="text-mustard-600 group-hover:text-mustard-700 font-medium text-sm">
                      View Services →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-charcoal rounded-3xl p-8 text-center text-white mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't See Your Destination?
          </h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            We're constantly adding new countries and destinations. Contact us for special requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              <Search className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <a
              href="https://wa.me/1234567890"
              className="btn-secondary"
            >
              WhatsApp Support
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
