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
      </body>
    </html>
  )
}
