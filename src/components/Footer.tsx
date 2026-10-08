import React from 'react';
import { MedfinityLogo } from './MedfinityLogo';
import { BusinessConfig } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  businessConfig: BusinessConfig;
  onSelectCategory: (cat: string) => void;
  onOpenConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  businessConfig,
  onSelectCategory,
  onOpenConfig
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappFooterUrl = getWhatsAppUrl(
    businessConfig.whatsappNumber,
    `Hello ${businessConfig.name},\nI would like to inquire about medical equipment supplies and pricing.`
  );

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Lockup & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <MedfinityLogo size="md" light={true} showTagline={true} />
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your dependable partner in hospital infrastructure and home patient care. Supplying motorized ICU beds, Operation Theatre tables, patient mobility aids, and respiratory equipment across Bengaluru and pan-India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenConfig}
                className="text-[11px] text-slate-400 hover:text-sky-300 underline underline-offset-4"
              >
                Config WhatsApp Hotline
              </button>
            </div>
          </div>

          {/* Col 3: Key Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Equipment Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('icu-beds')}
                  className="hover:text-white transition-colors text-left"
                >
                  Motorized ICU Beds (5 & 3 Function)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('ward-care')}
                  className="hover:text-white transition-colors text-left"
                >
                  Fowler & Semi-Fowler Beds
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('home-healthcare')}
                  className="hover:text-white transition-colors text-left"
                >
                  Healthcare at Home Rentals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('mobility')}
                  className="hover:text-white transition-colors text-left"
                >
                  Wheelchairs & Walkers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('ot-furniture')}
                  className="hover:text-white transition-colors text-left"
                >
                  OT Tables, Stretchers & Trolleys
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Dealer Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Turnkey Operation Theatre Setup
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Biomedical Servicing & AMC
                </a>
              </li>
              <li>
                <a href="#rentals" className="hover:text-white transition-colors">
                  Oxygen Concentrator Rental (5L/10L)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  NABH Biomedical Waste Bins
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  Hospital Bed Spares & Castors
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Bangalore Office
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span># 72/D, Ground Floor, 1st Cross, Hampinagar / Vijayanagar, Bangalore - 560 104</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-white font-medium">{businessConfig.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{businessConfig.primaryEmail}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} MEDFINITY Surgical Equipment. All rights reserved. Connecting trust and supply.
          </div>

          <div className="flex items-center gap-4">
            <span>Quality · Reliability · Commitment</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
