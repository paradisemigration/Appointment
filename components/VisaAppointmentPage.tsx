'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, FileText, Users, MapPin, Calendar, CheckCircle, AlertCircle, Phone, Star, Globe, ArrowRight, ChevronRight } from 'lucide-react';
import { Country, City, VisaType, VisaPageContent } from '@/types';
import BookingModal from './BookingModal';
import { generateSEOContent } from '@/lib/contentGenerator';

interface VisaAppointmentPageProps {
  country: Country;
  city: City;
  visaType: VisaType;
  content: VisaPageContent;
}

export default function VisaAppointmentPage({ 
  country, 
  city, 
  visaType, 
  content 
}: VisaAppointmentPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const seoContent = generateSEOContent(country.name, city.name, visaType);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"}></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-300/15 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-blue-200 mb-8 animate-fade-in">
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-300">{country.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${country.name.toLowerCase().replace(/\s+/g, '-')}/${visaType.slug}-visa-appointment`} className="hover:text-white transition-colors duration-300">{visaType.name}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{city.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="animate-slide-in-left">
              {/* Country Flag & Title */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-6xl animate-bounce-in country-flag">{country.flag}</div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {content.title}
                  </h1>
                  <p className="text-xl text-blue-100">
                    Professional VFS appointment booking service
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Clock className="w-5 h-5" />, label: 'Processing', value: content.processingTime },
                  { icon: <FileText className="w-5 h-5" />, label: 'Fees', value: content.fees },
                  { icon: <CheckCircle className="w-5 h-5" />, label: 'Success Rate', value: '98%' },
                  { icon: <Users className="w-5 h-5" />, label: 'Support', value: '24/7' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 animate-scale-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-blue-200">{item.icon}</div>
                    <div>
                      <div className="text-sm text-blue-200">{item.label}</div>
                      <div className="font-semibold text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Appointment Now
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <a 
                  href="https://wa.me/1234567890"
                  className="group bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  WhatsApp Support
                </a>
              </div>

              {/* Trust Indicators */}
              {country.isSchengen && (
                <div className="flex flex-wrap gap-3 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full text-blue-100 font-medium">
                    <Globe className="w-4 h-4 mr-2" />
                    Schengen Country - Access to 26 EU Countries
                  </div>
                  <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-4 py-2 rounded-full text-green-100 font-medium">
                    <Star className="w-4 h-4 mr-2" />
                    Verified Service Provider
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Quick Booking Card */}
            <div className="animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Quick Booking
                  </h3>
                  <p className="text-blue-100">
                    Get confirmed appointment within 24 hours
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-blue-200">Service Fee:</span>
                    <span className="font-semibold text-green-300">Minimal Cost</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-blue-200">Booking Time:</span>
                    <span className="font-semibold text-white">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <span className="text-blue-200">Success Rate:</span>
                    <span className="flex items-center font-semibold text-green-300">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      98%
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4"
                >
                  Book Now
                </button>

                <div className="text-center text-blue-200 text-sm">
                  <Phone className="w-4 h-4 inline mr-2" />
                  24/7 WhatsApp Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 mb-8 overflow-hidden">
              <div className="flex border-b border-gray-200 overflow-x-auto">
                {[
                  { id: 'overview', label: 'Overview', icon: <Globe className="w-4 h-4" /> },
                  { id: 'requirements', label: 'Requirements', icon: <CheckCircle className="w-4 h-4" /> },
                  { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" /> },
                  { id: 'process', label: 'Process', icon: <Calendar className="w-4 h-4" /> },
                  { id: 'tips', label: 'Tips', icon: <Star className="w-4 h-4" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        {visaType.name} for {country.name} from {city.name}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {content.description}
                      </p>
                      
                      {/* Key Benefits */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {[
                          'Expert document review',
                          'Guaranteed appointment slots',
                          '98% success rate',
                          '24/7 WhatsApp support',
                          'Minimal processing fees',
                          'Quick turnaround time'
                        ].map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="prose prose-lg text-gray-700 max-w-none">
                        {seoContent.split('\n').map((paragraph, index) => (
                          paragraph.trim() && (
                            <p key={index} className="mb-4 leading-relaxed">
                              {paragraph.trim()}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h3>
                    <div className="grid gap-4">
                      {content.eligibilityCriteria.map((criteria, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl border border-green-200">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{criteria}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">
                          Ensure all documents are recent and properly formatted
                        </span>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      {content.requiredDocuments.map((document, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                          <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{document}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
                    <div className="space-y-6">
                      {content.applicationSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'tips' && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Expert Tips</h3>
                    <div className="grid gap-4">
                      {content.tips.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                          <Star className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info Card */}
            <div className="card-elevated sticky top-6 mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Information</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Country:
                  </span>
                  <span className="font-semibold">{country.flag} {country.name}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    City:
                  </span>
                  <span className="font-semibold">{city.name}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Visa Type:
                  </span>
                  <span className="font-semibold">{visaType.name}</span>
                </div>
                {country.isSchengen && (
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-600 flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      Schengen:
                    </span>
                    <span className="badge-primary">
                      Yes
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full btn-primary mb-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </button>
                <a 
                  href="https://wa.me/1234567890"
                  className="w-full btn-secondary flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        preSelectedCountry={country.name}
        preSelectedCity={city.name}
        preSelectedVisa={visaType.slug}
      />
    </div>
  );
}
