import React, { useState } from 'react';
import { CartItem, ClientEnquiry } from '../types';
import { BusinessConfig } from '../config/business';
import { formatCartWhatsAppMessage, getEmailQuoteUrl, getWhatsAppUrl } from '../utils/whatsapp';
import { X, Trash2, MessageCircle, Mail, Printer, ArrowRight, Building2, User, Phone, MapPin, CheckCircle2, Copy } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onUpdateIntent: (productId: string, intent: 'Purchase' | 'Rental' | 'Both') => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  businessConfig: BusinessConfig;
  onOpenPrintSlip: (client: ClientEnquiry) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onUpdateIntent,
  onRemoveItem,
  onClearCart,
  businessConfig,
  onOpenPrintSlip
}) => {
  const [client, setClient] = useState<ClientEnquiry>({
    clientType: 'Hospital / Nursing Home',
    name: '',
    phone: '',
    email: '',
    organization: '',
    city: 'Bengaluru',
    address: '',
    deliveryNeeded: true,
    additionalNotes: '',
    preferredContact: 'WhatsApp'
  });

  const [copiedNotification, setCopiedNotification] = useState(false);
  const [formErrors, setFormErrors] = useState<string | null>(null);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    if (!client.phone || client.phone.trim().length < 8) {
      setFormErrors('Please enter a valid contact phone number.');
      return false;
    }
    setFormErrors(null);
    return true;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateForm()) return;
    const message = formatCartWhatsAppMessage(cartItems, client, businessConfig.name);
    const url = getWhatsAppUrl(businessConfig.whatsappNumber, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = () => {
    if (!validateForm()) return;
    const url = getEmailQuoteUrl(cartItems, client, businessConfig.primaryEmail);
    window.location.href = url;
  };

  const handleCopySummary = () => {
    const message = formatCartWhatsAppMessage(cartItems, client, businessConfig.name);
    navigator.clipboard.writeText(message);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handlePrint = () => {
    if (!validateForm()) return;
    onOpenPrintSlip(client);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold">Quote Request Basket</h2>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500 text-white">
                {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
              </span>
            </div>
            <p className="text-xs text-slate-300">
              No login needed · Instant WhatsApp & Email Quotations
            </p>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-rose-300 hover:text-rose-100 px-2 py-1 transition-colors"
                title="Clear all items"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-800">Your Quote Basket is Empty</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Explore our catalog of ICU beds, patient monitors, wheelchairs, and oxygen equipment. Click "+ Add Quote" to build your quotation.
              </p>
              <button
                onClick={onClose}
                className="mt-2 inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-900 text-white hover:bg-sky-800 transition-colors"
              >
                Browse Equipment Catalog
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                  <span>Selected Equipment</span>
                  <span className="text-[11px] text-slate-400 font-normal">Adjust quantity & intent</span>
                </h3>

                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="p-3.5 space-y-2 hover:bg-slate-50/70 transition-colors">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-100 text-sky-800">
                              {item.product.code}
                            </span>
                            <span className="text-[11px] text-slate-500">{item.product.categoryLabel}</span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">
                            {item.product.name}
                          </h4>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1 text-xs">
                        {/* Requirement Mode Pills */}
                        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-md">
                          {(['Purchase', 'Rental', 'Both'] as const).map((mode) => (
                            <button
                              key={mode}
                              onClick={() => onUpdateIntent(item.product.id, mode)}
                              className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                                item.intent === mode
                                  ? 'bg-white text-sky-900 shadow-xs font-bold'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-slate-200 rounded-md overflow-hidden bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="px-2.5 py-0.5 font-bold text-slate-900 text-xs tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-slate-600 hover:bg-slate-100 font-bold text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Easy Request Form */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Client & Delivery Details
                  </h3>
                  <span className="text-[11px] text-emerald-700 font-medium">⚡ No Login Required</span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
                  {/* Client Type */}
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">I am enquiring for:</label>
                    <select
                      value={client.clientType}
                      onChange={(e) => setClient({ ...client, clientType: e.target.value as any })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                      <option value="Hospital / Nursing Home">Hospital / Nursing Home Procurement</option>
                      <option value="Clinic">Doctor Clinic / Diagnostic Center</option>
                      <option value="Home Care / Patient">Home Healthcare / Patient Family</option>
                      <option value="Dealer / Distributor">Sub-Dealer / Medical Reseller</option>
                      <option value="Individual">Individual Purchase</option>
                    </select>
                  </div>

                  {/* Name and Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1 flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-400" />
                        Full Name / Contact Person *
                      </label>
                      <input
                        type="text"
                        required
                        value={client.name}
                        onChange={(e) => setClient({ ...client, name: e.target.value })}
                        placeholder="e.g. Dr. Ramesh / Ramesh Kumar"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-600 font-semibold mb-1 flex items-center gap-1">
                        <Phone className="w-3 h-3 text-slate-400" />
                        WhatsApp / Mobile No. *
                      </label>
                      <input
                        type="tel"
                        required
                        value={client.phone}
                        onChange={(e) => setClient({ ...client, phone: e.target.value })}
                        placeholder="e.g. 98450 XXXXX"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Organization (Hospital / Clinic name) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-600 font-semibold mb-1 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-slate-400" />
                        Facility / Hospital Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={client.organization}
                        onChange={(e) => setClient({ ...client, organization: e.target.value })}
                        placeholder="e.g. LifeCare Hospital"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-600 font-semibold mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        Delivery Location / Area
                      </label>
                      <input
                        type="text"
                        value={client.city}
                        onChange={(e) => setClient({ ...client, city: e.target.value })}
                        placeholder="e.g. Bengaluru / Vijayanagar / Pan-India"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Additional notes */}
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">
                      Specific Requirements / Questions
                    </label>
                    <textarea
                      rows={2}
                      value={client.additionalNotes}
                      onChange={(e) => setClient({ ...client, additionalNotes: e.target.value })}
                      placeholder="e.g. Need delivery by tomorrow, need rental quote for 2 months, or require installation demo..."
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-500 resize-none text-xs"
                    />
                  </div>

                  {formErrors && (
                    <div className="p-2 bg-rose-50 text-rose-700 text-xs rounded border border-rose-200">
                      {formErrors}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2.5 shrink-0">
            {/* Primary Action 1: Enquire via WhatsApp */}
            <button
              onClick={handleWhatsAppSubmit}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Enquire Now on WhatsApp ({cartItems.length} Items)</span>
            </button>

            {/* Secondary Actions Row */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleEmailSubmit}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-900 hover:bg-sky-800 text-white text-xs font-semibold transition-colors"
                title="Send official RFQ by Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Email</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                title="Print or save PDF quote summary"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Print / PDF Quote</span>
              </button>
            </div>

            {/* Copy summary link */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 pt-0.5">
              <span>Recipient: +{businessConfig.whatsappNumber}</span>
              <button
                onClick={handleCopySummary}
                className="hover:text-slate-800 inline-flex items-center gap-1 font-medium"
              >
                <Copy className="w-3 h-3" />
                {copiedNotification ? <span className="text-emerald-600 font-semibold">✓ Copied RFQ text!</span> : 'Copy RFQ Text'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
