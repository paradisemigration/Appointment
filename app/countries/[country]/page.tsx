import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, Star } from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';

interface PageProps {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  // Generate for all countries including additional European countries
  const additionalCountries = [
    'Switzerland', 'Austria', 'Belgium', 'Portugal', 'Greece',
    'Czech Republic', 'Hungary', 'Poland', 'Sweden', 'Norway',
    'Denmark', 'Finland'
  ];

  const allCountryNames = [
    ...ALL_COUNTRIES.map(c => c.name),
    ...additionalCountries
  ];

  return allCountryNames.map((countryName) => ({
    country: countryName.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const title = `${countryName} Visa Appointments | All Cities & Visa Types`;
  const description = `Book ${countryName} visa appointments from all major cities. Visit, work, and study visa appointments available with professional VFS booking service.`;
  
  return {
    title,
    description,
    keywords: `${countryName} visa appointment, ${countryName} visa booking, VFS appointment ${countryName}`,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default function CountryPage({ params }: PageProps) {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const country = ALL_COUNTRIES.find(c => 
    c.name.toLowerCase() === countryName.toLowerCase()
  );
  
  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-6xl">{country.flag}</div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                {country.name} Visa Appointments
              </h1>
              <p className="text-xl text-primary-100">
                Book your {country.name} visa appointment from any major city
              </p>
            </div>
          </div>

          {country.isSchengen && (
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🇪🇺 Schengen Country - Travel to 26 European countries
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Visa Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Available Visa Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VISA_TYPES.map((visaType) => (
              <div key={visaType.id} className="card text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {visaType.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {visaType.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{visaType.processingTime}</span>
                  </div>
                  <div className="font-medium text-primary-600">
                    {visaType.fee}
                  </div>
                </div>
                <Link 
                  href={`#cities-${visaType.slug}`}
                  className="btn-primary w-full"
                >
                  View Cities
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Cities by Visa Type */}
        {VISA_TYPES.map((visaType) => (
          <section key={visaType.id} id={`cities-${visaType.slug}`} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {country.name} {visaType.name} - Available Cities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_CITIES.map((city) => (
                <Link
                  key={`${visaType.slug}-${city.id}`}
                  href={`/appointment/${country.name.toLowerCase().replace(/\s+/g, '-')}/${visaType.slug}/${city.slug}`}
                  className="group"
                >
                  <div className="card group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {city.name}
                        </h3>
                        <p className="text-sm text-gray-600">{city.region}</p>
                      </div>
                      <MapPin className="h-5 w-5 text-primary-500" />
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <span>Processing:</span>
                        <span className="font-medium">{visaType.processingTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Fees:</span>
                        <span className="font-medium">{visaType.fee}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Success Rate:</span>
                        <span className="flex items-center text-green-600 font-medium">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          98%
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-primary-600 font-medium group-hover:text-primary-700">
                        Book {visaType.name} Appointment →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
