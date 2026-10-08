import React from 'react';
import { RENTAL_POPULAR_PACKS } from '../data/products';
import { BusinessConfig } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Home, HeartPulse, ShieldCheck, Clock, CheckCircle2, MessageCircle, Truck } from 'lucide-react';

interface RentalServiceSectionProps {
  businessConfig: BusinessConfig;
}

export const RentalServiceSection: React.FC<RentalServiceSectionProps> = ({
  businessConfig
}) => {
  return (
    <section id="rentals" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
            <span>Healthcare at Home · Bangalore Doorstep Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital Grade Recovery at the Comfort of Your Home
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Avoid prolonged, expensive hospital ICU stays. MEDFINITY supplies thoroughly sanitized, tested, and doctor-approved critical care equipment on monthly & weekly rental basis across Bengaluru.
          </p>
        </div>

        {/* 4-Step Rental Process Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0 text-sm">
              1
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Select Equipment</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Choose motorized beds, oxygen units, or monitors from our catalog.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm">
              2
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">1-Click WhatsApp Enquiry</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Confirm patient needs, duration, and doctor recommendation with our team.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center shrink-0 text-sm">
              3
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">Doorstep Setup & Demo</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Our trained biomedical technician delivers and demonstrates operation to family.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center shrink-0 text-sm">
              4
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900">24/7 Support & Return</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Flexible extension or prompt equipment pickup when recovery is complete.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Home Healthcare Rental Packages */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Popular Home Healthcare Rental Packages
            </h3>
            <span className="text-xs text-slate-500 font-medium">Ready Stock in Vijayanagar Hub</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RENTAL_POPULAR_PACKS.map((pack) => {
              const packWhatsAppUrl = getWhatsAppUrl(
                businessConfig.whatsappNumber,
                `Hello ${businessConfig.name},\nI would like to enquire about renting the *${pack.title}* package for home patient care.\nPlease share availability, monthly rental charges, deposit, and delivery details for Bengaluru.`
              );

              return (
                <div
                  key={pack.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all p-6 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {pack.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-700">{pack.startingAt}</span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900">{pack.title}</h4>
                      <p className="text-xs text-sky-800 font-medium mt-1">
                        Best for: {pack.recommendedFor}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        Included Equipment in Setup:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {pack.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={packWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-white/20" />
                      <span>Book Package on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
