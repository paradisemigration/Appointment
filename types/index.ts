export interface Country {
  code: string;
  name: string;
  flag: string;
  continent: string;
  isSchengen: boolean;
  visaTypes: VisaType[];
}

export interface VisaType {
  id: string;
  name: string;
  slug: string;
  description: string;
  processingTime: string;
  fee: string;
}

export interface City {
  id: string;
  name: string;
  slug: string;
  country: string;
  region: string;
  isActive: boolean;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  visaType: string;
  preferredDate: string;
  documents?: string;
  message?: string;
}

export interface VisaPageContent {
  country: string;
  city: string;
  visaType: string;
  title: string;
  description: string;
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  processingTime: string;
  fees: string;
  applicationSteps: string[];
  tips: string[];
}
