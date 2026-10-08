import React, { useState } from 'react';
import { MedfinityLogo } from './MedfinityLogo';
import { BusinessConfig } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { ShoppingBag, MessageCircle, Phone, Settings, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  businessConfig: BusinessConfig;
  cartCount: number;
  onOpenCart: () => void;
  onOpenConfig: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  businessConfig,
  cartCount,
  onOpenCart,
  onOpenConfig,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const quickWhatsAppUrl = getWhatsAppUrl(
    businessConfig.whatsappNumber,
    `Hello ${businessConfig.name},\nI am looking for hospital/home healthcare medical equipment in Bengaluru. Please share your catalog and rental/sale details.`
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Utility Ribbon */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-[11px] py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <span className="inline-flex items-center gap-1 text-sky-300 font-medium shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Bengaluru Direct Stock
            </span>
            <span className="text-slate-400 hidden md:inline">|</span>
            <span className="text-slate-300 truncate hidden md:inline">
              Sale, Rental & Servicing of Hospital ICU Beds, OT Furniture & Diagnostics
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-medium">
            <a
              href={`tel:${businessConfig.whatsappNumber}`}
              className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{businessConfig.phoneDisplay}</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">·</span>
            <button
              onClick={onOpenConfig}
              className="hidden sm:inline-flex items-center gap-1 text-sky-300 hover:text-sky-200 transition-colors"
              title="Configure WhatsApp & Contact"
            >
              <Settings className="w-3 h-3" />
              <span>Config Phone</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav Links) — Zone 3 (Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Zone 1: Single Brand Wordmark Element */}
        <a href="#" className="flex items-center shrink-0">
          <MedfinityLogo size="md" />
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#catalog"
            className={`transition-colors hover:text-sky-700 ${
              activeSection === 'catalog' ? 'text-sky-700 font-semibold' : ''
            }`}
          >
            Product Catalog
          </a>
          <a
            href="#rentals"
            className={`transition-colors hover:text-sky-700 ${
              activeSection === 'rentals' ? 'text-sky-700 font-semibold' : ''
            }`}
          >
            Healthcare at Home
          </a>
          <a
            href="#services"
            className={`transition-colors hover:text-sky-700 ${
              activeSection === 'services' ? 'text-sky-700 font-semibold' : ''
            }`}
          >
            OT Setup & AMC
          </a>
          <a
            href="#about"
            className={`transition-colors hover:text-sky-700 ${
              activeSection === 'about' ? 'text-sky-700 font-semibold' : ''
            }`}
          >
            About Dealer
          </a>
          <a
            href="#contact"
            className={`transition-colors hover:text-sky-700 ${
              activeSection === 'contact' ? 'text-sky-700 font-semibold' : ''
            }`}
          >
            Location & Contact
          </a>
        </nav>

        {/* Zone 3: Primary Actions (WhatsApp hotline & Quote Cart) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Quick WhatsApp Inquiry */}
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs whitespace-nowrap"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span className="hidden sm:inline">WhatsApp Enquiry</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Quote Cart Button with Badge */}
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-sky-900 hover:bg-sky-800 text-white transition-colors shadow-xs whitespace-nowrap"
            aria-label="View Quote Cart"
          >
            <ShoppingBag className="w-4 h-4 text-sky-200" />
            <span className="hidden md:inline">Quote Basket</span>
            <span className="flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-[11px] font-bold rounded-full bg-emerald-500 text-white leading-none">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 animate-fade-in shadow-lg">
          <a
            href="#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Product Catalog (80+ Items)
          </a>
          <a
            href="#rentals"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Healthcare at Home & Rentals
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            OT Setup & AMC Servicing
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            About MEDFINITY
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Showroom Location & Contact
          </a>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfig();
              }}
              className="text-xs text-sky-700 font-medium inline-flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              Configure WhatsApp Number
            </button>
            <span className="text-xs text-slate-400">Bengaluru, KA</span>
          </div>
        </div>
      )}
    </header>
  );
};
