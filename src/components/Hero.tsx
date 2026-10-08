import React from 'react';
import { BusinessConfig } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Search, MessageCircle, ShieldCheck, Truck, RefreshCw, FileCheck2, ArrowRight } from 'lucide-react';

interface HeroProps {
  businessConfig: BusinessConfig;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  businessConfig,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  onOpenCart
}) => {
  const whatsappHeroUrl = getWhatsAppUrl(
    businessConfig.whatsappNumber,
    `Hello ${businessConfig.name},\nI am looking for medical equipment (Hospital setup / Home healthcare rental). Please assist me with availability and quotation.`
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 text-white pt-12 pb-16 px-4 sm:px-6">
      {/* Background architectural grid and ambient glow */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill / Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-sky-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Bengaluru Authorized Dealer · Sale, Rental & Servicing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              One Stop Solution for All Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-300">Hospital & Home</span> Healthcare Needs
            </h1>

            {/* Tagline & Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Connecting trust and supply with motorized ICU beds, ward care furniture, patient mobility aids, oxygen concentrators, and Operation Theatre setups.
            </p>

            {/* Interactive Search Bar */}
            <div className="pt-2">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search products by name or code (e.g., '001', 'ICU Bed', 'Oxygen', 'Wheelchair')..."
                  className="w-full pl-11 pr-28 py-3.5 bg-white text-slate-900 rounded-xl font-medium text-sm placeholder:text-slate-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                {searchQuery ? (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-2.5 py-1 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-md"
                  >
                    Clear
                  </button>
                ) : (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 px-2 py-1 bg-slate-100 rounded">
                    Instant Filter
                  </span>
                )}
              </div>
            </div>

            {/* Quick Filter Segmented Controls */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs text-slate-400 font-medium mr-1">Quick Browse:</span>
              {[
                { id: 'all', label: 'All Catalog' },
                { id: 'icu-beds', label: 'ICU Beds' },
                { id: 'home-healthcare', label: 'Home Rentals' },
                { id: 'mobility', label: 'Wheelchairs' },
                { id: 'respiratory-critical', label: 'Oxygen & ICU' },
                { id: 'ot-furniture', label: 'Ward Furniture' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => onCategorySelect(btn.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    selectedCategory === btn.id
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Instant WhatsApp Enquiry</span>
              </a>

              <a
                href="#rentals"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/20"
              >
                <span>Healthcare at Home Rentals</span>
                <ArrowRight className="w-4 h-4 text-sky-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Trust Cards & Quick Quote Advantage */}
          <div className="lg:col-span-5 space-y-4">
            {/* Feature Bento Card 1: Sale, Rental & Servicing */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-300 tracking-wider uppercase">
                  Dealer Guarantee
                </span>
                <span className="text-xs text-emerald-300 font-mono">Bengaluru Hub</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                Sale, Rental & Biomedical Servicing Under One Roof
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a complete 50-bed ward setup, emergency operation theatre instruments, or monthly home care ICU beds for an ailing loved one, MEDFINITY delivers with transparent pricing.
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Same-Day City Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Tested Equipment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <RefreshCw className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Doorstep AMC & Servicing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <FileCheck2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>No Login · Fast RFQ</span>
                </div>
              </div>
            </div>

            {/* Quick Hospital Quote Action Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-900/80 to-emerald-950/80 border border-sky-400/20 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-white">Need a Multi-Item Hospital Quote?</div>
                <div className="text-[11px] text-slate-300">
                  Add multiple items to cart & request an official quote slip on WhatsApp or Email.
                </div>
              </div>
              <button
                onClick={onOpenCart}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white text-slate-900 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                View Quote Basket
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
