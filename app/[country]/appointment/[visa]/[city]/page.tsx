import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import VisaAppointmentPage from '@/components/VisaAppointmentPage';
import { generateSEOContent } from '@/lib/contentGenerator';
import { ALL_COUNTRIES, ALL_CITIES, VISA_TYPES } from '@/data/constants';

interface PageProps {
  params: {
    country: string;
    visa: string;
    city: string;
  };
}

// Disable static generation for now to ensure dynamic routing works
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const cityName = params.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const visaType = VISA_TYPES.find(v => v.slug === params.visa);
  
  if (!visaType) return { title: 'Page Not Found' };
  
  const title = `${countryName} ${visaType.name} Appointment in ${cityName} | Professional VFS Booking`;
  const description = `Book ${countryName} ${visaType.name.toLowerCase()} appointment in ${cityName}. Expert guidance, minimal cost, and guaranteed slots within 24 hours.`;
  
  return {
    title,
    description,
    keywords: `${countryName} visa appointment ${cityName}, ${countryName} visa booking, VFS appointment ${cityName}`,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default function CityAppointmentPage({ params }: PageProps) {
  const countryName = params.country.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const cityName = params.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const country = ALL_COUNTRIES.find(c => 
    c.name.toLowerCase() === countryName.toLowerCase()
  );
  
  const city = ALL_CITIES.find(c => 
    c.slug === params.city || c.name.toLowerCase() === cityName.toLowerCase()
  );
  
  const visaType = VISA_TYPES.find(v => v.slug === params.visa);
  
  if (!country || !city || !visaType) {
    notFound();
  }

  // Generate content for the page
  const content = generateSEOContent(country, city, visaType);

  return (
    <VisaAppointmentPage
      country={country}
      city={city}
      visaType={visaType}
      content={content}
    />
  );
}
