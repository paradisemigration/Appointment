import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import VisaAppointmentPage from '@/components/VisaAppointmentPage';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';
import { generateVisaPageContent } from '@/lib/contentGenerator';

interface PageProps {
  params: {
    country: string;
    visa: string;
    city: string;
  };
}

export async function generateStaticParams() {
  const paths: any[] = [];

  // Generate paths for all combinations
  ALL_COUNTRIES.forEach(country => {
    VISA_TYPES.forEach(visa => {
      ALL_CITIES.forEach(city => {
        paths.push({
          country: country.name.toLowerCase().replace(/\s+/g, '-'),
          visa: visa.slug,
          city: city.slug,
        });
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const cityName = params.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const visaType = VISA_TYPES.find(v => v.slug === params.visa);
  
  if (!visaType) return { title: 'Page Not Found' };
  
  const title = `${countryName} ${visaType.name} Appointment from ${cityName} | Professional VFS Booking`;
  const description = `Book your ${countryName} ${visaType.name.toLowerCase()} appointment from ${cityName}. Expert guidance, minimal cost, guaranteed slots within 24 hours. 98% success rate.`;
  
  return {
    title,
    description,
    keywords: `${countryName} visa appointment ${cityName}, ${cityName} visa booking, VFS appointment ${countryName}, ${visaType.name} ${countryName}`,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default function CityAppointmentPage({ params }: PageProps) {
  // Validate parameters
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const cityName = params.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const country = ALL_COUNTRIES.find(c => 
    c.name.toLowerCase() === countryName.toLowerCase()
  );
  
  const city = ALL_CITIES.find(c => 
    c.name.toLowerCase() === cityName.toLowerCase()
  );
  
  const visaType = VISA_TYPES.find(v => v.slug === params.visa);
  
  if (!country || !city || !visaType) {
    notFound();
  }
  
  // Generate page content
  const pageContent = generateVisaPageContent(country.name, city.name, visaType);
  
  return (
    <VisaAppointmentPage 
      country={country}
      city={city}
      visaType={visaType}
      content={pageContent}
    />
  );
}
