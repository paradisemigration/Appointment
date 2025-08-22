'use client';

import { useState } from 'react';
import { Clock, FileText, Users, MapPin, Calendar, CheckCircle, AlertCircle, Phone } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-4xl">{country.flag}</div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                {content.title}
              </h1>
              <p className="text-xl text-primary-100">
                Professional VFS appointment booking service
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <Clock className="h-6 w-6 mb-2" />
              <div className="text-sm text-primary-100">Processing Time</div>
              <div className="font-semibold">{content.processingTime}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <FileText className="h-6 w-6 mb-2" />
              <div className="text-sm text-primary-100">Visa Fees</div>
              <div className="font-semibold">{content.fees}</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Users className="h-6 w-6 mb-2" />
              <div className="text-sm text-primary-100">Success Rate</div>
              <div className="font-semibold">98%</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="flex border-b border-gray-200">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'requirements', label: 'Requirements' },
                  { id: 'documents', label: 'Documents' },
                  { id: 'process', label: 'Process' },
                  { id: 'tips', label: 'Tips' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {visaType.name} for {country.name}
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {content.description}
                      </p>
                      <div className="prose prose-lg text-gray-700">
                        {seoContent.split('\n').map((paragraph, index) => (
                          <p key={index} className="mb-4">{paragraph.trim()}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                    <ul className="space-y-3">
                      {content.eligibilityCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">
                          Ensure all documents are recent and properly formatted
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {content.requiredDocuments.map((document, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <FileText className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{document}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Application Process</h3>
                    <div className="space-y-6">
                      {content.applicationSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'tips' && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Tips</h3>
                    <ul className="space-y-3">
                      {content.tips.map((tip, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="card sticky top-6 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Book Your Appointment
                </h3>
                <p className="text-gray-600">
                  Get guaranteed slots with professional assistance
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Service Fee:</span>
                  <span className="font-semibold text-green-600">Minimal Cost</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Booking Time:</span>
                  <span className="font-semibold">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-semibold text-green-600">98%</span>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full btn-primary mb-4"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment Now
              </button>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Phone className="h-4 w-4" />
                <span>24/7 WhatsApp Support</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Country:</span>
                  <span className="font-medium">{country.flag} {country.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-medium">{city.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Visa Type:</span>
                  <span className="font-medium">{visaType.name}</span>
                </div>
                {country.isSchengen && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Schengen:</span>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Yes
                    </span>
                  </div>
                )}
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
