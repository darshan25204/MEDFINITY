import React, { useState } from 'react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { BusinessConfig } from '../config/business';
import { formatProductWhatsAppMessage, getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, Plus, Check, Eye, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  businessConfig: BusinessConfig;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  isInCart?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  businessConfig,
  onAddToCart,
  onViewDetails,
  isInCart = false
}) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  // WhatsApp enquiry URL for this specific product
  const enquiryMessage = formatProductWhatsAppMessage(product, 'Price & Availability Quote');
  const whatsappUrl = getWhatsAppUrl(businessConfig.whatsappNumber, enquiryMessage);

  return (
    <div 
      className="group relative flex flex-col bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      {/* Top Image Container */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative cursor-pointer overflow-hidden bg-slate-100"
      >
        <ProductImage product={product} aspectRatio="4:3" />
        
        {/* Availability / Tag badge */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          <span className={`px-2 py-0.5 text-[11px] font-semibold rounded shadow-xs ${
            product.availability === 'both' 
              ? 'bg-emerald-600 text-white' 
              : 'bg-sky-700 text-white'
          }`}>
            {product.availability === 'both' ? 'Sale & Rental' : 'Direct Sale'}
          </span>
          {product.badge && (
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-amber-500 text-white shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Model Code Chip */}
        <div className="absolute bottom-2.5 right-2.5 z-10 bg-slate-900/85 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[11px] font-mono font-medium">
          {product.code}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-4 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Unboxed Metadata (Section 1.A Zero-Pill Discipline) */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{product.mechanism || 'Standard'}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-sm font-bold text-slate-900 line-clamp-2 hover:text-sky-700 cursor-pointer transition-colors leading-snug"
          >
            {product.name}
          </h3>

          {/* Tagline / Subtitle */}
          {product.tagline && (
            <p className="text-xs text-slate-500 line-clamp-1 italic">
              {product.tagline}
            </p>
          )}

          {/* Key Specs Highlights */}
          <ul className="pt-1 space-y-1 text-xs text-slate-600">
            {product.keySpecs.slice(0, 2).map((spec, idx) => (
              <li key={idx} className="line-clamp-1 flex items-start gap-1.5">
                <span className="text-sky-600 font-bold shrink-0">·</span>
                <span className="truncate">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Action Module */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium">Pricing / Terms:</span>
            <span className="font-semibold text-slate-900 tabular-nums">
              {product.indicativePrice || 'Official Quote on Request'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {/* WhatsApp Enquire Now Button (Pre-filled specific message) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white border border-emerald-300 hover:border-emerald-600 transition-colors"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">WhatsApp</span>
            </a>

            {/* Add to Quote Button */}
            <button
              onClick={handleAdd}
              className={`inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-semibold rounded-lg transition-colors border ${
                justAdded
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : isInCart
                  ? 'bg-sky-50 text-sky-800 border-sky-300 hover:bg-sky-100'
                  : 'bg-sky-900 text-white border-sky-900 hover:bg-sky-800'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : isInCart ? (
                <>
                  <Check className="w-3.5 h-3.5 text-sky-600" />
                  <span>In Basket</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add Quote</span>
                </>
              )}
            </button>
          </div>

          {/* Subtle View Full Specs link */}
          <button
            onClick={() => onViewDetails(product)}
            className="w-full text-center text-[11px] text-slate-500 hover:text-sky-700 font-medium inline-flex items-center justify-center gap-0.5 transition-colors"
          >
            <span>View Technical Specifications</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
