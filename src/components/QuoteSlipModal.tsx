import React from 'react';
import { CartItem, ClientEnquiry } from '../types';
import { BusinessConfig } from '../config/business';
import { MedfinityLogo } from './MedfinityLogo';
import { X, Printer, Download, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

interface QuoteSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  client: ClientEnquiry;
  businessConfig: BusinessConfig;
}

export const QuoteSlipModal: React.FC<QuoteSlipModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  client,
  businessConfig
}) => {
  if (!isOpen) return null;

  const quoteId = `MF-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[95vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              Official Quotation Request Slip
            </span>
            <span className="text-xs text-slate-400 font-mono">({quoteId})</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Quotation Content */}
        <div id="printable-quotation-slip" className="p-8 overflow-y-auto space-y-6 text-slate-800 bg-white">
          
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b-2 border-slate-900">
            <div>
              <MedfinityLogo size="lg" showTagline={true} />
              <div className="text-xs text-slate-600 mt-2 space-y-0.5 max-w-sm">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{businessConfig.address}, {businessConfig.city} - {businessConfig.pincode}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Phone / WhatsApp: {businessConfig.phoneDisplay}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{businessConfig.primaryEmail} / {businessConfig.accountsEmail}</span>
                </p>
              </div>
            </div>

            <div className="text-right sm:self-start bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                Quotation Request
              </div>
              <div className="text-sm font-mono font-bold text-slate-900 mt-1">
                {quoteId}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Date: {currentDate}
              </div>
              <div className="text-[10px] text-emerald-700 font-semibold mt-1">
                STATUS: PENDING DEALER CONFIRMATION
              </div>
            </div>
          </div>

          {/* Client Details Block */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-semibold text-slate-500 uppercase tracking-wider block text-[10px] mb-1">
                Client Information:
              </span>
              <p className="font-bold text-slate-900 text-sm">{client.name || 'Healthcare Professional'}</p>
              {client.organization && <p className="text-slate-700 font-medium">{client.organization}</p>}
              <p className="text-slate-600">Category: {client.clientType}</p>
              <p className="text-slate-600">Phone: {client.phone}</p>
            </div>

            <div>
              <span className="font-semibold text-slate-500 uppercase tracking-wider block text-[10px] mb-1">
                Delivery & Requirements:
              </span>
              <p className="text-slate-700"><span className="font-medium">Destination:</span> {client.city || 'Bengaluru, Karnataka'}</p>
              {client.address && <p className="text-slate-600"><span className="font-medium">Address:</span> {client.address}</p>}
              <p className="text-slate-600"><span className="font-medium">Preferred Contact:</span> {client.preferredContact}</p>
            </div>
          </div>

          {/* Itemized Table */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Requested Medical Equipment & Machinery
            </h4>
            
            <table className="w-full text-xs text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                  <th className="p-2.5 border-r border-slate-200 text-center w-10">#</th>
                  <th className="p-2.5 border-r border-slate-200 w-32">Model Code</th>
                  <th className="p-2.5 border-r border-slate-200">Description / Specifications</th>
                  <th className="p-2.5 border-r border-slate-200 text-center w-28">Intent</th>
                  <th className="p-2.5 text-center w-20">Qty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cartItems.map((item, idx) => (
                  <tr key={item.product.id} className="hover:bg-slate-50/50">
                    <td className="p-2.5 border-r border-slate-200 text-center font-mono text-slate-500">
                      {idx + 1}
                    </td>
                    <td className="p-2.5 border-r border-slate-200 font-mono font-bold text-sky-900">
                      {item.product.code}
                    </td>
                    <td className="p-2.5 border-r border-slate-200">
                      <div className="font-semibold text-slate-900">{item.product.name}</div>
                      <div className="text-[11px] text-slate-500">{item.product.categoryLabel}</div>
                      {item.product.dimensions && (
                        <div className="text-[10px] text-slate-400">Size: {item.product.dimensions}</div>
                      )}
                    </td>
                    <td className="p-2.5 border-r border-slate-200 text-center font-medium text-slate-700">
                      {item.intent}
                    </td>
                    <td className="p-2.5 text-center font-bold text-slate-900 tabular-nums">
                      {item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Client Notes if any */}
          {client.additionalNotes && (
            <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200 text-xs">
              <span className="font-bold text-amber-900">Client Note:</span>
              <p className="text-amber-800 mt-0.5">{client.additionalNotes}</p>
            </div>
          )}

          {/* Commercial & Dealer Terms */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] text-slate-500">
            <div>
              <h5 className="font-bold text-slate-800 mb-1">Terms & Conditions:</h5>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Prices quoted upon request are subject to GST & delivery charges.</li>
                <li>Rental equipment includes doorstep demonstration and sanitized installation.</li>
                <li>Hospital ICU beds feature 18 SWG CRCA construction with standard warranty.</li>
              </ul>
            </div>

            <div className="flex flex-col justify-end text-right">
              <div className="pt-6 border-b border-slate-300 w-44 ml-auto" />
              <span className="text-xs font-semibold text-slate-800 mt-1">MEDFINITY Authorized Signatory</span>
              <span className="text-[10px] text-slate-400">Connecting trust and supply</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
