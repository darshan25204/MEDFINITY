import React, { useState } from 'react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { BusinessConfig } from '../config/business';
import { formatProductWhatsAppMessage, getWhatsAppUrl } from '../utils/whatsapp';
import { X, MessageCircle, Plus, Check, ShieldCheck, Ruler, Wrench, PackageCheck, Share2 } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  businessConfig: BusinessConfig;
  onAddToCart: (product: Product, quantity: number, intent: 'Purchase' | 'Rental' | 'Both') => void;
  isInCart?: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  businessConfig,
  onAddToCart,
  isInCart = false
}) => {
  const [quantity, setQuantity] = useState(1);
  const [intent, setIntent] = useState<'Purchase' | 'Rental' | 'Both'>('Purchase');
  const [copied, setCopied] = useState(false);
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const whatsappMessage = formatProductWhatsAppMessage(
    product,
    `${intent} (${quantity} Unit${quantity > 1 ? 's' : ''})`
  );
  const whatsappUrl = getWhatsAppUrl(businessConfig.whatsappNumber, whatsappMessage);

  const handleAdd = () => {
    onAddToCart(product, quantity, intent);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`${product.name} (${product.code}) - MEDFINITY Surgical Equipment\n${window.location.href}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
              {product.code}
            </span>
            <span className="text-xs text-slate-300 font-medium">
              {product.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Copy share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Column: Product Visual */}
            <div className="md:col-span-5 space-y-3">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                <ProductImage product={product} aspectRatio="4:3" />
              </div>

              {/* Availability Badges */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Availability:</span>
                  <span className="font-semibold text-emerald-700 capitalize">
                    {product.availability === 'both' ? 'Direct Sale & Monthly Rental' : 'Available for Direct Sale'}
                  </span>
                </div>
                {product.dimensions && (
                  <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-200">
                    <span className="text-slate-500 shrink-0">Dimensions:</span>
                    <span className="font-mono text-slate-800 text-right">{product.dimensions}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                  <span className="text-slate-500">Dispatch Location:</span>
                  <span className="font-medium text-slate-800">Bangalore (Same-Day)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title & Brochure Specifications */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 leading-snug">
                  {product.name}
                </h2>
                {product.tagline && (
                  <p className="text-xs text-sky-800 font-medium mt-1">
                    {product.tagline}
                  </p>
                )}
              </div>

              {/* Key Features from brochure */}
              {product.features && product.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Key Articulations & Features
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((feat, i) => (
                      <span key={i} className="text-xs bg-sky-50 text-sky-800 px-2.5 py-1 rounded-md border border-sky-100 font-medium">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Technical Specifications (From Catalog)
                </h4>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-1.5 text-xs">
                  {product.fullSpecs ? (
                    Object.entries(product.fullSpecs).map(([key, val], idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60 last:border-none">
                        <span className="font-medium text-slate-600 sm:w-1/3 shrink-0">{key}:</span>
                        <span className="text-slate-800 sm:w-2/3">{val}</span>
                      </div>
                    ))
                  ) : (
                    product.keySpecs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 py-1">
                        <span className="text-sky-600 font-bold">·</span>
                        <span className="text-slate-700">{spec}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Inclusions & Quality Stamp */}
              <div className="flex items-center gap-3 p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-semibold">Hospital Grade Guarantee:</span> Powder-coated 8-tank process, standard medical warranty, with technician installation available across Bangalore.
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Action Configuration Module */}
          <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Intent Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Enquiry Intent
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-lg border border-slate-200">
                  {(['Purchase', 'Rental', 'Both'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setIntent(mode)}
                      className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                        intent === mode
                          ? 'bg-sky-600 text-white shadow-xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Quantity Required
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-200 bg-white rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 transition-colors font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-xs font-bold text-slate-900 tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500">Unit(s)</span>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              {/* WhatsApp Enquiry Button (Configurable number) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Enquire Now on WhatsApp</span>
              </a>

              {/* Add to Quote Basket */}
              <button
                onClick={handleAdd}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm ${
                  added
                    ? 'bg-emerald-700 text-white'
                    : 'bg-sky-900 hover:bg-sky-800 text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Basket!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Quote Basket</span>
                  </>
                )}
              </button>
            </div>
            {copied && (
              <p className="text-center text-xs text-emerald-600 font-medium animate-fade-in">
                ✓ Product details copied to clipboard!
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
