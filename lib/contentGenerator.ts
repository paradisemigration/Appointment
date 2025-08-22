import { VisaPageContent, VisaType } from '@/types';

export function generateVisaPageContent(
  country: string, 
  city: string, 
  visaType: VisaType
): VisaPageContent {
  const visaTypeName = visaType.name;
  const isSchengen = ['France', 'Germany', 'Italy', 'Spain', 'Netherlands'].includes(country);
  
  const baseContent: VisaPageContent = {
    country,
    city,
    visaType: visaType.slug,
    title: `${country} ${visaTypeName} Appointment from ${city}`,
    description: `Complete guide to booking your ${country} ${visaTypeName.toLowerCase()} appointment from ${city}. Get expert assistance with VFS appointment booking, document preparation, and visa application process.`,
    
    eligibilityCriteria: [
      `Valid passport with at least 6 months validity`,
      `Proof of accommodation in ${country}`,
      `Financial documents showing sufficient funds`,
      `Travel insurance coverage`,
      `No criminal record certificate`,
      `Medical examination (if required)`
    ],
    
    requiredDocuments: [
      'Completed visa application form',
      'Recent passport-size photographs',
      'Valid passport with previous visas',
      'Flight itinerary or booking confirmation',
      'Hotel reservations or invitation letter',
      'Bank statements (last 3-6 months)',
      'Employment letter or business registration',
      'Travel insurance policy',
      'Cover letter explaining purpose of visit'
    ],
    
    processingTime: visaType.processingTime,
    fees: visaType.fee,
    
    applicationSteps: [
      'Check eligibility and gather required documents',
      'Fill out the visa application form online',
      'Book appointment through VFS Global website',
      'Pay visa fees and service charges',
      'Attend biometric appointment at VFS center',
      'Submit application and supporting documents',
      'Track application status online',
      'Collect passport with visa decision'
    ],
    
    tips: [
      'Book your appointment well in advance, especially during peak seasons',
      'Ensure all documents are complete and properly formatted',
      'Arrive at the VFS center 15 minutes before your appointment',
      'Keep copies of all submitted documents for your records',
      'Check visa processing times and plan your travel accordingly',
      'Consider using our professional booking service for guaranteed slots'
    ]
  };

  // Customize content based on visa type
  if (visaType.slug === 'work') {
    baseContent.requiredDocuments.push(
      'Job offer letter from employer',
      'Work permit approval',
      'Educational qualifications',
      'Professional experience certificates'
    );
    
    baseContent.eligibilityCriteria.push(
      `Valid job offer from ${country} employer`,
      'Relevant professional qualifications',
      'Language proficiency certificates (if required)'
    );
  }
  
  if (visaType.slug === 'study') {
    baseContent.requiredDocuments.push(
      'Letter of acceptance from educational institution',
      'Academic transcripts and certificates',
      'Language proficiency test results',
      'Proof of tuition fee payment'
    );
    
    baseContent.eligibilityCriteria.push(
      `Admission to recognized educational institution in ${country}`,
      'Academic qualifications meeting course requirements',
      'Sufficient funds for tuition and living expenses'
    );
  }
  
  if (isSchengen) {
    baseContent.eligibilityCriteria.push(
      'Schengen travel insurance with minimum €30,000 coverage'
    );
    
    baseContent.tips.push(
      'Schengen visa allows travel to 26 European countries',
      'Apply to the country where you will spend the most time'
    );
  }

  return baseContent;
}

export function generateSEOContent(country: string, city: string, visaType: VisaType): string {
  return `
    Looking to book a ${country} ${visaType.name.toLowerCase()} appointment from ${city}? 
    Our professional VFS appointment booking service makes the process simple and hassle-free.
    
    With over 10,000 successful bookings and a 98% success rate, we're your trusted partner 
    for visa services. Get guaranteed appointment slots with minimal cost and 24/7 support.
    
    Why choose our service:
    - Fast appointment booking within 24 hours
    - Expert guidance throughout the process  
    - Transparent pricing with no hidden fees
    - WhatsApp support for instant assistance
    - High success rate with professional handling
    
    Book your ${country} ${visaType.name.toLowerCase()} appointment from ${city} today and 
    take the first step towards your international journey.
  `;
}
