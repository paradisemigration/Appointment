import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  ALL_COUNTRIES, 
  ALL_CITIES, 
  VISA_TYPES, 
  getCountryBySlug, 
  getCityBySlug, 
  getVisaTypeBySlug,
  BUSINESS_INFO 
} from '@/data/constants';
import MobileHeader from '@/components/MobileHeader';
import AppointmentPageClient from '@/components/AppointmentPageClient';

interface PageProps {
  params: {
    slug: string;
  };
}

// Parse the slug to extract country, visa, and city
function parseSlug(slug: string) {
  // Expected format: country-visa-appointment-city
  const parts = slug.split('-');
  if (parts.length < 4 || parts[parts.length - 2] !== 'appointment') {
    return null;
  }

  // Find appointment index
  const appointmentIndex = parts.findIndex(part => part === 'appointment');
  if (appointmentIndex === -1) return null;

  // Extract parts
  const countryParts = parts.slice(0, appointmentIndex - 1);
  const visaPart = parts[appointmentIndex - 1];
  const cityParts = parts.slice(appointmentIndex + 1);

  const countrySlug = countryParts.join('-');
  const visaSlug = visaPart;
  const citySlug = cityParts.join('-');

  return { countrySlug, visaSlug, citySlug };
}

export default function AppointmentPage({ params }: PageProps) {
  const parsed = parseSlug(params.slug);
  
  if (!parsed) {
    notFound();
  }

  const country = getCountryBySlug(parsed.countrySlug);
  const visa = getVisaTypeBySlug(parsed.visaSlug);
  const city = getCityBySlug(parsed.citySlug);

  if (!country || !visa || !city) {
    notFound();
  }

  // Generate page title
  const pageTitle = `${country.name} ${visa.name} Appointment from ${city.name}`;

  return (
    <>
      {/* Header */}
      <MobileHeader />

      <div className="min-h-screen" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: 'var(--light-bg)', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <a href="/" style={{ color: 'var(--primary-color)' }}>Home</a> / 
              <a href="/countries" style={{ color: 'var(--primary-color)', margin: '0 0.5rem' }}>Countries</a> / 
              <span style={{ margin: '0 0.5rem' }}>{country.name}</span> / 
              <span style={{ margin: '0 0.5rem' }}>{visa.name}</span> / 
              <span style={{ margin: '0 0.5rem' }}>{city.name}</span>
            </div>
          </nav>

          {/* Client-side Interactive Content */}
          <AppointmentPageClient 
            country={country}
            visa={visa}
            city={city}
            pageTitle={pageTitle}
          />

          {/* Detailed Content Section - Server-side */}
          <div className="grid grid-2" style={{ marginBottom: '3rem', gap: '2rem' }}>
            {/* Main Content */}
            <div>
              <div className="card">
                <h2 style={{ color: 'var(--primary-color)' }}>Complete Guide to {pageTitle}</h2>
                
                <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>📋 Visa Application Process</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Getting your {visa.name} for {country.name} from {city.name} involves several important steps that we handle professionally:
                </p>
                
                <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  <li><strong>Document Preparation:</strong> We review all your documents to ensure they meet the embassy requirements.</li>
                  <li><strong>Application Form:</strong> Complete the visa application form with accurate information.</li>
                  <li><strong>Appointment Booking:</strong> We secure the earliest available appointment slot at the VFS center.</li>
                  <li><strong>Biometric Submission:</strong> Attend your appointment for biometric data collection.</li>
                  <li><strong>Processing & Tracking:</strong> Monitor your application status until visa approval.</li>
                </ol>

                <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>📄 Required Documents</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  For {visa.name} application to {country.name}, you typically need:
                </p>
                
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  <li>Valid passport with at least 6 months validity</li>
                  <li>Completed visa application form</li>
                  <li>Recent passport-size photographs</li>
                  <li>Travel insurance coverage</li>
                  <li>Proof of accommodation</li>
                  <li>Flight reservation</li>
                  <li>Bank statements (last 3 months)</li>
                  <li>Employment certificate or NOC</li>
                  <li>Additional documents based on visa type</li>
                </ul>

                <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>💰 Fees and Processing Time</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  The visa fees and processing times for {country.name} {visa.name} are:
                </p>
                
                <div style={{ backgroundColor: 'var(--light-bg)', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                  <p style={{ color: 'var(--text-secondary)' }}><strong>Embassy Fee:</strong> {visa.fee}</p>
                  <p style={{ color: 'var(--text-secondary)' }}><strong>Our Service Fee:</strong> Competitive rates</p>
                  <p style={{ color: 'var(--text-secondary)' }}><strong>Processing Time:</strong> {visa.processingTime}</p>
                  <p style={{ color: 'var(--text-secondary)' }}><strong>Express Service:</strong> Available on request</p>
                </div>

                <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>🏢 VFS Center in {city.name}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  The VFS Global center in {city.name} handles visa applications for {country.name}. Our team ensures you get the earliest available appointment slot and provides complete guidance throughout the process.
                </p>

                <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>✅ Why Choose Our Service?</h3>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  <li><strong>98% Success Rate:</strong> Proven track record with thousands of successful applications</li>
                  <li><strong>Expert Guidance:</strong> Certified visa consultants with years of experience</li>
                  <li><strong>Fast Processing:</strong> Get your appointment within 24 hours</li>
                  <li><strong>24/7 Support:</strong> WhatsApp and email support throughout the process</li>
                  <li><strong>Transparent Pricing:</strong> No hidden charges, clear fee structure</li>
                  <li><strong>Document Review:</strong> Free review of your documents before submission</li>
                </ul>

                <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>📞 Contact Information</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  For immediate assistance with your {pageTitle}, contact us:
                </p>
                
                <div style={{ backgroundColor: '#e7f3ff', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                  <p style={{ color: 'var(--primary-color)' }}><strong>WhatsApp:</strong> {BUSINESS_INFO.phone}</p>
                  <p style={{ color: 'var(--primary-color)' }}><strong>Email:</strong> {BUSINESS_INFO.email}</p>
                  <p style={{ color: 'var(--primary-color)' }}><strong>Office:</strong> {BUSINESS_INFO.address}</p>
                  <p style={{ color: 'var(--primary-color)' }}><strong>Working Hours:</strong> 24/7 Available</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Quick Booking Card */}
              <div className="card" style={{ position: 'sticky', top: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                  Quick Booking
                </h3>
                
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{country.flag}</div>
                  <h4 style={{ color: 'var(--primary-color)' }}>{country.name}</h4>
                  <p style={{ color: 'var(--text-muted)' }}>{visa.name} from {city.name}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Processing Time:</span>
                    <strong style={{ color: 'var(--primary-color)' }}>{visa.processingTime}</strong>
                  </div>
                  <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Service Fee:</span>
                    <strong style={{ color: 'var(--primary-color)' }}>{visa.fee}</strong>
                  </div>
                  <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Success Rate:</span>
                    <strong style={{ color: 'var(--success-color)' }}>98%</strong>
                  </div>
                </div>

                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Use the booking button above to get started with your appointment.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="card">
                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                  Why Trust Us?
                </h3>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>⭐</div>
                    <h4 style={{ color: 'var(--primary-color)' }}>10,000+ Happy Clients</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Trusted worldwide</p>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>🛡️</div>
                    <h4 style={{ color: 'var(--primary-color)' }}>98% Success Rate</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Proven results</p>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '32px', marginBottom: '0.5rem' }}>⚡</div>
                    <h4 style={{ color: 'var(--primary-color)' }}>24 Hour Service</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Fast processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="text-center">
            <p>&copy; 2024 {BUSINESS_INFO.name}. All rights reserved.</p>
            <p style={{ marginTop: '10px', opacity: 0.8 }}>
              Professional visa appointment booking services | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

// Generate metadata for SEO - Now in Server Component
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseSlug(params.slug);
  
  if (!parsed) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }

  const country = getCountryBySlug(parsed.countrySlug);
  const visa = getVisaTypeBySlug(parsed.visaSlug);
  const city = getCityBySlug(parsed.citySlug);

  if (!country || !visa || !city) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }

  const pageTitle = `${country.name} ${visa.name} Appointment from ${city.name}`;
  const description = `Book your ${country.name} ${visa.name} appointment from ${city.name}. Fast, reliable visa appointment booking service with 98% success rate. Expert guidance and 24/7 support.`;

  return {
    title: pageTitle,
    description,
    keywords: [
      `${country.name} visa appointment`,
      `${visa.name} ${country.name}`,
      `VFS appointment ${city.name}`,
      `visa booking ${country.name}`,
      `${country.name} visa from ${city.name}`,
      'visa appointment booking',
      'VFS Global appointment'
    ].join(', '),
    openGraph: {
      title: pageTitle,
      description,
      url: `/${params.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
    alternates: {
      canonical: `/${params.slug}`,
    },
  };
}
