import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MapPin, Star, Phone, Calendar, CheckCircle, FileText, Users } from 'lucide-react';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';

interface PageProps {
  params: {
    country: string;
    visa: string;
  };
}

export async function generateStaticParams() {
  const paths: any[] = [];
  
  ALL_COUNTRIES.forEach(country => {
    VISA_TYPES.forEach(visa => {
      paths.push({
        country: country.name.toLowerCase().replace(/\s+/g, '-'),
        visa: visa.slug,
      });
    });
  });
  
  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const visaType = VISA_TYPES.find(v => v.slug === params.visa);
  
  if (!visaType) return { title: 'Page Not Found' };
  
  const title = `${countryName} ${visaType.name} Appointments | All Cities Available`;
  const description = `Book ${countryName} ${visaType.name.toLowerCase()} appointments from all major cities. Professional VFS booking service with expert guidance and 98% success rate.`;
  
  return {
    title,
    description,
    keywords: `${countryName} ${visaType.slug} visa appointment, ${countryName} visa booking, VFS appointment ${countryName}`,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default function VisaAppointmentPage({ params }: PageProps) {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const country = ALL_COUNTRIES.find(c => 
    c.name.toLowerCase() === countryName.toLowerCase()
  );
  
  const visaType = VISA_TYPES.find(v => v.slug === params.visa);
  
  if (!country || !visaType) {
    notFound();
  }

  // Group cities by region
  const citiesByRegion = ALL_CITIES.reduce((acc, city) => {
    if (!acc[city.region]) {
      acc[city.region] = [];
    }
    acc[city.region].push(city);
    return acc;
  }, {} as Record<string, typeof ALL_CITIES>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute top-32 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            {/* Flag and Visa Type Info */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="text-7xl animate-bounce-in country-flag">{country.flag}</div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {country.name} {visaType.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-4">
                  Professional Appointment Booking Service
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="badge-primary bg-white/20 text-white border-white/30">
                    Processing: {visaType.processingTime}
                  </div>
                  <div className="badge-success bg-green-500/20 text-green-100 border-green-400/30">
                    Fees from {visaType.fee}
                  </div>
                  {country.isSchengen && (
                    <div className="badge-schengen bg-blue-500/20 text-blue-100 border-blue-400/30">
                      🇪🇺 Schengen Access
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              Book your {country.name} {visaType.name.toLowerCase()} appointment from any major city. 
              Expert guidance, minimal cost, guaranteed slots within 24 hours.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="#cities" 
                className="btn-primary bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Choose Your City
              </a>
              <a 
                href="https://wa.me/1234567890" 
                className="btn-secondary bg-green-500 hover:bg-green-600 text-white border-green-400"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Support
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="stat-card backdrop-blur-sm bg-white/10 border-white/20">
                <Clock className="w-6 h-6 text-white mb-2 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">24h</div>
                <div className="text-white/80 text-sm">Booking Time</div>
              </div>
              <div className="stat-card backdrop-blur-sm bg-white/10 border-white/20">
                <CheckCircle className="w-6 h-6 text-white mb-2 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
              <div className="stat-card backdrop-blur-sm bg-white/10 border-white/20">
                <Users className="w-6 h-6 text-white mb-2 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-white/80 text-sm">Cities</div>
              </div>
              <div className="stat-card backdrop-blur-sm bg-white/10 border-white/20">
                <FileText className="w-6 h-6 text-white mb-2 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="breadcrumb animate-fade-in">
          <Link href="/" className="breadcrumb-item">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href={`/${params.country}`} className="breadcrumb-item">{country.name}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="text-gray-900 font-medium">{visaType.name}</span>
        </nav>

        {/* Cities Section */}
        <section id="cities" className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your City
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select your city to book {country.name} {visaType.name.toLowerCase()} appointment 
              with professional assistance and guaranteed slots
            </p>
          </div>

          {Object.entries(citiesByRegion).map(([region, cities], regionIndex) => (
            <div 
              key={region} 
              className="mb-16 animate-fade-in" 
              style={{animationDelay: `${regionIndex * 0.2}s`}}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {region}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city, index) => (
                  <Link
                    key={city.id}
                    href={`/${params.country}/${params.visa}-visa-appointment/${city.slug}`}
                    className="group animate-scale-in"
                    style={{animationDelay: `${(regionIndex * 0.2) + (index * 0.1)}s`}}
                  >
                    <div className="country-card group-hover:shadow-glow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {city.name}
                          </h4>
                          <p className="text-gray-600 text-sm">{city.region}</p>
                        </div>
                        <div className="text-blue-500 group-hover:text-blue-600 transition-colors duration-300">
                          <MapPin className="w-6 h-6" />
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
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
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Booking Time:</span>
                          <span className="font-semibold text-blue-600">Within 24h</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="text-blue-600 group-hover:text-blue-700 font-semibold transition-colors duration-300">
                          Book {visaType.name} Appointment
                          <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to book your {country.name} {visaType.name.toLowerCase()} appointment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Choose City',
                description: 'Select your preferred city from the available options above',
                icon: <MapPin className="w-8 h-8" />
              },
              {
                step: 2,
                title: 'Contact Us',
                description: 'Reach out via WhatsApp or fill our booking form with details',
                icon: <Phone className="w-8 h-8" />
              },
              {
                step: 3,
                title: 'Document Check',
                description: 'Our experts will review your documents and guide you',
                icon: <FileText className="w-8 h-8" />
              },
              {
                step: 4,
                title: 'Get Appointment',
                description: 'Receive confirmed appointment slot within 24 hours',
                icon: <Calendar className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="text-center animate-fade-in" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative mb-6">
                  <div className="feature-icon bg-gradient-to-br from-blue-500 to-purple-600 mx-auto">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your {country.name} {visaType.name}?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Choose your city above or contact our experts for personalized guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cities" className="btn-secondary bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white">
              <MapPin className="w-5 h-5 mr-2" />
              Choose City Above
            </a>
            <a href="https://wa.me/1234567890" className="btn-primary bg-green-500 hover:bg-green-600 border-green-400">
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Support
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
