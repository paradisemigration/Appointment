import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'VFS Global Appointment Services - Professional Visa Booking',
    template: '%s | VFS Global Appointments'
  },
  description: 'Professional visa appointment booking services for 35+ countries. Fast, reliable, and affordable VFS Global appointment booking with 98% success rate. Book your visa appointment today!',
  keywords: [
    'VFS Global appointment',
    'visa appointment booking',
    'Schengen visa appointment',
    'visa services',
    'VFS appointment booking',
    'European visa appointment',
    'USA visa appointment',
    'UK visa appointment',
    'Canada visa appointment',
    'Australia visa appointment',
    'visa application services',
    'professional visa booking'
  ],
  authors: [{ name: 'VFS Global Appointment Services' }],
  creator: 'VFS Global Appointment Services',
  publisher: 'VFS Global Appointment Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vfsappointments.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vfsappointments.com',
    title: 'VFS Global Appointment Services - Professional Visa Booking',
    description: 'Professional visa appointment booking services for 35+ countries. Fast, reliable, and affordable VFS Global appointment booking with 98% success rate.',
    siteName: 'VFS Global Appointments',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VFS Global Appointment Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VFS Global Appointment Services - Professional Visa Booking',
    description: 'Professional visa appointment booking services for 35+ countries. Fast, reliable, and affordable VFS Global appointment booking with 98% success rate.',
    images: ['/og-image.jpg'],
    creator: '@vfsappointments',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2c3e50" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VFS Appointments" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2c3e50" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VFS Global Appointment Services",
              "url": "https://vfsappointments.com",
              "logo": "https://vfsappointments.com/logo.png",
              "description": "Professional visa appointment booking services for 35+ countries worldwide",
              "telephone": "+971-50-123-4567",
              "email": "info@vfsappointments.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "UAE"
              },
              "sameAs": [
                "https://www.facebook.com/vfsappointments",
                "https://www.twitter.com/vfsappointments",
                "https://www.linkedin.com/company/vfsappointments"
              ],
              "serviceType": "Visa Appointment Booking Services",
              "areaServed": ["India", "Pakistan", "UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain", "Nepal", "Bangladesh"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Visa Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Schengen Visa Appointment",
                      "description": "Professional Schengen visa appointment booking services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "USA Visa Appointment",
                      "description": "Professional USA visa appointment booking services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "UK Visa Appointment",
                      "description": "Professional UK visa appointment booking services"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
        {/* WhatsApp Chat Widget */}
        <div 
          id="whatsapp-widget"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            backgroundColor: '#25d366',
            borderRadius: '50px',
            padding: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={() => {
            const message = encodeURIComponent('Hi! I need help with visa appointment booking. Can you assist me?');
            window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        </div>
        
        {/* Cookie Consent */}
        <div id="cookie-consent" style={{ display: 'none' }}>
          <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '15px',
            textAlign: 'center',
            zIndex: 999
          }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
              We use cookies to enhance your experience and provide personalized services. 
              <a href="/privacy" style={{ color: '#3498db', textDecoration: 'underline' }}>Learn more</a>
            </p>
            <button 
              onClick={() => {
                document.getElementById('cookie-consent')!.style.display = 'none';
                localStorage.setItem('cookie-consent', 'accepted');
              }}
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Accept
            </button>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Show cookie consent if not already accepted
              if (!localStorage.getItem('cookie-consent')) {
                document.getElementById('cookie-consent').style.display = 'block';
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
