import React from 'react';
import { BusinessConfig } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Wrench, ShieldCheck, Activity, Building, PhoneCall, MessageCircle, CheckCircle } from 'lucide-react';

interface ServicesSectionProps {
  businessConfig: BusinessConfig;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  businessConfig
}) => {
  const amcWhatsAppUrl = getWhatsAppUrl(
    businessConfig.whatsappNumber,
    `Hello ${businessConfig.name},\nWe require Biomedical Equipment Servicing / AMC / OT Setup consultation for our hospital/clinic.\nPlease connect us with your biomedical engineer.`
  );

  return (
    <section id="services" className="py-16 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-300">
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey Hospital Solutions & Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Complete Hospital Setup, Maintenance & Biomedical AMC
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            From single-doctor nursing homes to 200-bed multispecialty hospitals, MEDFINITY provides end-to-end procurement, routine preventive maintenance, and emergency breakdown repairs.
          </p>
        </div>

        {/* 4 Pillars Grid (Directly from Business Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Medical Equipment for Rental & Sales</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Extensive ready inventory of 5-Function ICU motorized beds, semi-Fowler beds, 5L/10L oxygen concentrators, and patient monitors.
            </p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Zero downtime replacement</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Bulk hospital fleet discount</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Servicing of All Medical Equipment</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              On-site biomedical technician visits for actuator replacement, hydraulic pump reconditioning, electronic handset repairs, and calibration.
            </p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Annual Maintenance Contracts (AMC)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Genuine OEM medical spares</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Operation Theatre (OT) Setup</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Turnkey OT design and furnishing including motorized C-Arm surgical tables, laparoscopic tower carts, anesthesia trolleys, and scrub stations.
            </p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Surgical holloware & autoclave kits</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>NABH & safety code compliance</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Hospital Ward & Facility Furnishing</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Complete general ward packages: plain beds, attendant couches, bedside lockers, overbed dining tables, privacy screens, and color-coded bins.
            </p>
            <ul className="text-xs text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Custom hospital powder coat colours</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>Waiting room airport beam chairs</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Consulting Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-900 to-emerald-950 border border-sky-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Planning a New Clinic or Upgrading Hospital Beds in Bengaluru?
            </h4>
            <p className="text-xs text-slate-300">
              Speak directly with our senior medical dealer representative for site inspections, floor planning, and custom institution quotations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={amcWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Request Site Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
