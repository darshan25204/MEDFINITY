export interface BusinessConfig {
  name: string;
  tagline: string;
  slogan: string;
  phoneDisplay: string;
  whatsappNumber: string; // international digits without plus (e.g., 919741567940)
  primaryEmail: string;
  accountsEmail: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  googleMapsUrl: string;
  workingHours: string;
  emergencySupport: string;
  catalogDownloadUrl?: string;
}

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  name: 'MEDFINITY Surgical Equipment',
  tagline: 'Connecting trust and supply',
  slogan: 'One Stop Solution for all your Hospital Needs · Healthcare at Home',
  phoneDisplay: '+91 97415 67940',
  whatsappNumber: '919741567940',
  primaryEmail: 'medfinitysurgical@gmail.com',
  accountsEmail: 'accounts@medfinityindia.com',
  address: "No. 72/D, Ground Floor, 1st C Cross, 7th 'A' Main Road, Hampinagar / Vijayanagar",
  city: 'Bengaluru',
  state: 'Karnataka',
  pincode: '560104',
  googleMapsUrl: 'https://maps.google.com/?q=Hampinagar+Vijayanagar+Bangalore+560104',
  workingHours: 'Mon - Sat: 9:00 AM - 8:30 PM',
  emergencySupport: '24/7 Emergency Rental & Oxygen Support'
};

const STORAGE_KEY = 'medfinity_business_config';

export function getBusinessConfig(): BusinessConfig {
  if (typeof window === 'undefined') return DEFAULT_BUSINESS_CONFIG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_BUSINESS_CONFIG, ...JSON.parse(saved) };
    }
  } catch {
    // fallback
  }
  return DEFAULT_BUSINESS_CONFIG;
}

export function saveBusinessConfig(config: Partial<BusinessConfig>): BusinessConfig {
  const current = getBusinessConfig();
  const updated = { ...current, ...config };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // ignore
  }
  return updated;
}
