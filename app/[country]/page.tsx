import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, Star, Globe, Users, Calendar, CheckCircle } from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';

interface PageProps {
  params: {
    country: string;
  };
}

// Disable static generation for now to ensure dynamic routing works
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const title = `${countryName} Visa Appointments | Professional VFS Booking Service`;
  const description = `Book ${countryName} visa appointments from all major cities. Visit, work, and study visa services with expert guidance and 98% success rate.`;
  
  return {
    title,
    description,
    keywords: `${countryName} visa appointment, ${countryName} visa booking, VFS appointment ${countryName}, professional visa services`,
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

  const popularCities = ALL_CITIES.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"}></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-300/15 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            {/* Country Flag and Info */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="text-8xl animate-scale-in country-flag">{country.flag}</div>
              <div className="text-left">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-in-right">
                  {country.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                  Visa Appointment Services
                </p>
                {country.isSchengen && (
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-white font-medium mt-4 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
                    <Globe className="w-4 h-4 mr-2" />
                    Schengen Country - Access to 26 EU Countries
                  </div>
                )}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
              Professional visa appointment booking for {country.name} with expert guidance, 
              minimal cost, and guaranteed slots from all major cities
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="stat-card">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-100 text-sm">Success Rate</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-blue-100 text-sm">Booking Time</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100 text-sm">Cities Covered</div>
              </div>
              <div className="stat-card">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="breadcrumb animate-fade-in">
          <Link href="/" className="breadcrumb-item hover:text-blue-600">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="text-gray-900 font-medium">{country.name}</span>
        </nav>

        {/* Visa Types Section */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Visa Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the visa category that matches your travel purpose to {country.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VISA_TYPES.map((visaType, index) => (
              <Link
                key={visaType.id}
                href={`/${params.country}/${visaType.slug}-visa-appointment`}
                className="group animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="card-feature group-hover:shadow-glow transition-all duration-500">
                  <div className="text-center">
                    {/* Visa Type Icon */}
                    <div className="feature-icon mx-auto mb-6">
                      {visaType.slug === 'visit' && <Globe className="w-8 h-8" />}
                      {visaType.slug === 'work' && <Users className="w-8 h-8" />}
                      {visaType.slug === 'study' && <Calendar className="w-8 h-8" />}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {visaType.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {visaType.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Processing Time:</span>
                        <span className="font-semibold text-gray-900">{visaType.processingTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Fees From:</span>
                        <span className="font-semibold text-green-600">{visaType.fee}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Success Rate:</span>
                        <span className="flex items-center font-semibold text-green-600">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          98%
                        </span>
                      </div>
                    </div>

                    <div className="btn-primary w-full group-hover:shadow-lg">
                      View Available Cities
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Cities Section */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Cities for {country.name} Visa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick access to visa appointment booking from these major cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCities.map((city, index) => (
              <div key={city.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="country-card">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {city.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{city.region}</p>
                    </div>
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>

                  <div className="space-y-3 mb-6">
                    {VISA_TYPES.map(visa => (
                      <Link
                        key={visa.id}
                        href={`/${params.country}/appointment/${visa.slug}/${city.slug}`}
                        className="block p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900 group-hover:text-blue-600">
                            {visa.name}
                          </span>
                          <span className="text-xs text-gray-500 group-hover:text-blue-500">
                            Book Now →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-gray-600 mb-6">Need appointments from other cities?</p>
            <Link 
              href={`/${params.country}/visit-visa-appointment`}
              className="btn-outline"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View All Cities
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our {country.name} Visa Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance and professional support for your {country.name} visa application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Quick Processing',
                description: 'Appointments booked within 24 hours with minimal waiting time',
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: '98% Success Rate',
                description: 'Proven track record with expert document review and guidance',
                gradient: 'from-green-500 to-teal-600'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 WhatsApp support from visa experts and consultants',
                gradient: 'from-orange-500 to-red-600'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'All Cities Covered',
                description: 'Service available from 50+ major cities across India and Gulf',
                gradient: 'from-purple-500 to-pink-600'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`feature-icon bg-gradient-to-br ${feature.gradient} mx-auto mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your {country.name} Visa Appointment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our professional visa appointment booking service today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${params.country}/appointment/visit`} className="btn-secondary">
              <Globe className="w-5 h-5 mr-2" />
              Book Visit Visa
            </Link>
            <Link href={`/${params.country}/appointment/work`} className="btn-secondary">
              <Users className="w-5 h-5 mr-2" />
              Book Work Visa
            </Link>
            <Link href={`/${params.country}/appointment/study`} className="btn-secondary">
              <Calendar className="w-5 h-5 mr-2" />
              Book Study Visa
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
