import React, { useState } from 'react';
import { BusinessConfig } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Navigation, ExternalLink } from 'lucide-react';

interface AboutContactSectionProps {
  businessConfig: BusinessConfig;
}

export const AboutContactSection: React.FC<AboutContactSectionProps> = ({
  businessConfig
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Equipment Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*NEW WEBSITE INQUIRY - MEDFINITY*
• Name: ${form.name}
• Contact: ${form.phone}
${form.email ? `• Email: ${form.email}\n` : ''}• Purpose: ${form.subject}
• Message: "${form.message}"

Please get back to me with information.`;
    
    const url = getWhatsAppUrl(businessConfig.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div id="about" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Bengaluru Showroom & Distribution Center</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connecting Trust and Supply Across Healthcare
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            MEDFINITY Surgical Equipment is a dedicated medical device dealer and hospital supplier headquartered in Vijayanagar / Hampinagar, Bangalore. Built on three steadfast pillars: <strong>Quality</strong>, <strong>Reliability</strong>, and <strong>Commitment</strong>.
          </p>
        </div>

        {/* Contact & Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Dealer Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Dealer Headquarters & Customer Experience Center
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                
                {/* Address Block */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-700 font-bold uppercase tracking-wider text-[11px]">
                    <MapPin className="w-4 h-4" />
                    <span>Office Address</span>
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    # 72/D, Ground Floor, 1st C Cross, 7th 'A' Main Road, Hampinagar / Vijayanagar, Bengaluru, Karnataka - 560 104
                  </p>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 font-semibold transition-colors pt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-[11px]">
                    <Phone className="w-4 h-4" />
                    <span>Direct Dealer Hotlines</span>
                  </div>
                  <p className="text-slate-900 font-bold text-sm">
                    {businessConfig.phoneDisplay}
                  </p>
                  <p className="text-slate-500">
                    Direct calls & instant WhatsApp messaging available for hospital quotes and emergency oxygen rentals.
                  </p>
                  <div className="text-[11px] text-emerald-700 font-semibold">
                    ✓ Immediate WhatsApp Response
                  </div>
                </div>

                {/* Emails */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <Mail className="w-4 h-4" />
                    <span>Official Email Inquiries</span>
                  </div>
                  <p className="text-slate-800 font-medium">
                    <a href={`mailto:${businessConfig.primaryEmail}`} className="hover:text-sky-700">
                      {businessConfig.primaryEmail}
                    </a>
                  </p>
                  <p className="text-slate-800 font-medium">
                    <a href={`mailto:${businessConfig.accountsEmail}`} className="hover:text-sky-700">
                      {businessConfig.accountsEmail}
                    </a>
                  </p>
                </div>

                {/* Working Hours */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <Clock className="w-4 h-4" />
                    <span>Business Hours</span>
                  </div>
                  <p className="text-slate-800 font-medium">
                    {businessConfig.workingHours}
                  </p>
                  <p className="text-slate-500">
                    {businessConfig.emergencySupport}
                  </p>
                </div>

              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 text-sky-800">
                  <CheckCircle className="w-4 h-4 text-sky-600" />
                  QUALITY ASSURED
                </span>
                <span className="flex items-center gap-1.5 text-emerald-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  RELIABLE SUPPLY
                </span>
                <span className="flex items-center gap-1.5 text-indigo-800">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  PROMPT COMMITMENT
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Quick Inquiry / Callback Request
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Send a message directly to our WhatsApp or email team.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Inquiry Category
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-900"
                  >
                    <option value="ICU Bed Purchase or Rental">ICU Bed Purchase or Rental</option>
                    <option value="Home Healthcare Oxygen Equipment">Home Healthcare Oxygen Equipment</option>
                    <option value="Operation Theatre (OT) Setup">Operation Theatre (OT) Setup</option>
                    <option value="Biomedical Equipment Servicing / AMC">Biomedical Equipment Servicing / AMC</option>
                    <option value="Bulk Hospital Ward Supplies">Bulk Hospital Ward Supplies</option>
                    <option value="Sub-Dealer Distribution Inquiry">Sub-Dealer Distribution Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Message / Equipment Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what equipment you need, quantity, or patient conditions..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 text-slate-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Send Directly on WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-700 font-medium">
                    ✓ Opening WhatsApp conversation...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
