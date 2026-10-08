import React, { useState } from 'react';
import { BusinessConfig, DEFAULT_BUSINESS_CONFIG, saveBusinessConfig } from '../config/business';
import { Settings, Check, RotateCcw, MessageCircle, Phone, Mail, MapPin, X } from 'lucide-react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
  onUpdate: (newConfig: BusinessConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdate
}) => {
  const [formData, setFormData] = useState<BusinessConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveBusinessConfig(formData);
    onUpdate(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData({ ...DEFAULT_BUSINESS_CONFIG });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-sky-900 to-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg">
              <Settings className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <h2 className="text-base font-semibold">Dealer Contact & WhatsApp Settings</h2>
              <p className="text-xs text-sky-200">Configure phone & recipient numbers for all enquiries</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Highlight: WhatsApp Number Configuration */}
          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-xl">
            <label className="block text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Business WhatsApp Number (Enquiry Recipient)
            </label>
            <p className="text-xs text-emerald-800 mb-2">
              All "Enquire Now" and Quote submissions will immediately redirect to this WhatsApp number.
            </p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-2 bg-emerald-100/90 text-emerald-900 text-sm font-semibold rounded-lg border border-emerald-300">
                +
              </span>
              <input
                type="text"
                required
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value.replace(/\D/g, '') })}
                placeholder="e.g. 919741567940"
                className="flex-1 px-3.5 py-2 text-sm bg-white border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              />
            </div>
            <p className="text-[11px] text-emerald-700 mt-1.5">
              Include country code without '+' (e.g., 91 for India + 9741567940).
            </p>
          </div>

          {/* Display Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              Public Phone Display
            </label>
            <input
              type="text"
              value={formData.phoneDisplay}
              onChange={(e) => setFormData({ ...formData, phoneDisplay: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Email addresses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                Inquiry Email
              </label>
              <input
                type="email"
                value={formData.primaryEmail}
                onChange={(e) => setFormData({ ...formData, primaryEmail: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                Accounts Email
              </label>
              <input
                type="email"
                value={formData.accountsEmail}
                onChange={(e) => setFormData({ ...formData, accountsEmail: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              Office / Showroom Address
            </label>
            <textarea
              rows={2}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            />
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset to Brochure Defaults
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-lg text-white transition-colors shadow-sm ${
                  savedSuccess ? 'bg-emerald-600' : 'bg-sky-600 hover:bg-sky-700'
                }`}
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    Saved Successfully!
                  </>
                ) : (
                  'Save Settings'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
