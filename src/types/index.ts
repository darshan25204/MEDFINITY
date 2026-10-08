export type AvailabilityType = 'sale' | 'rental' | 'both';

export type ProductCategory = 
  | 'all'
  | 'icu-beds'
  | 'ward-care'
  | 'ot-furniture'
  | 'mobility'
  | 'respiratory-critical'
  | 'diagnostics'
  | 'instruments-sterilization'
  | 'accessories'
  | 'home-healthcare';

export interface Product {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  availability: AvailabilityType;
  mechanism?: 'Motorized' | 'Manual' | 'Hydraulic' | 'Digital' | 'Standard';
  tagline?: string;
  dimensions?: string;
  keySpecs: string[];
  fullSpecs?: Record<string, string>;
  features: string[];
  popular?: boolean;
  indicativePrice?: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  intent: 'Purchase' | 'Rental' | 'Both' | 'Consultation';
  notes?: string;
}

export interface ClientEnquiry {
  clientType: 'Hospital / Nursing Home' | 'Clinic' | 'Home Care / Patient' | 'Dealer / Distributor' | 'Individual';
  name: string;
  phone: string;
  email: string;
  organization: string;
  city: string;
  address: string;
  deliveryNeeded: boolean;
  rentalDuration?: string;
  additionalNotes: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
}
