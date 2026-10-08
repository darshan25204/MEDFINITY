import React, { useState } from 'react';
import { Product } from '../types';

interface ProductImageProps {
  product: Product;
  className?: string;
  aspectRatio?: '4:3' | '16:9' | '1:1';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  className = '',
  aspectRatio = '4:3'
}) => {
  const [loadFailed, setLoadFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const aspectClass = {
    '4:3': 'aspect-[4/3]',
    '16:9': 'aspect-[16/9]',
    '1:1': 'aspect-square'
  }[aspectRatio];

  // Primary image path
  const imageSrc = `/images/products/${product.id}.jpg`;

  // Render stylized technical schematic placeholder if image is missing or failed
  const renderFallback = () => {
    const isBed = product.category === 'icu-beds' || product.category === 'ward-care';
    const isMobility = product.category === 'mobility';
    const isRespiratory = product.category === 'respiratory-critical';
    const isOT = product.category === 'ot-furniture';
    const isDiagnostics = product.category === 'diagnostics';

    return (
      <div className={`w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 via-sky-50/50 to-emerald-50/40 border border-slate-200/80`}>
        {/* Subtle background technical grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(#0284c7 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Dynamic Category SVG Icon */}
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-2 text-sky-700">
          {isBed && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-10 h-10 text-sky-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v11m0-4h18m0-7v11M3 14h18M6 10h4a2 2 0 0 1 2 2v2H4v-2a2 2 0 0 1 2-2z" />
            </svg>
          )}
          {isMobility && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-10 h-10 text-emerald-600">
              <circle cx="8" cy="18" r="3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 10h4l2 5h4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          )}
          {isRespiratory && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-10 h-10 text-teal-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3M12 10v11m-4 0h8" />
              <circle cx="12" cy="15" r="2" />
            </svg>
          )}
          {isOT && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-10 h-10 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M7 6v12M17 6v12" />
            </svg>
          )}
          {isDiagnostics && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-10 h-10 text-indigo-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3-7 4 14 3-7h5" />
            </svg>
          )}
          {!isBed && !isMobility && !isRespiratory && !isOT && !isDiagnostics && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-10 h-10 text-slate-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </div>

        {/* Product Code Badge */}
        <div className="relative z-10 font-mono text-[11px] font-semibold text-sky-800 bg-sky-100/90 px-2.5 py-0.5 rounded border border-sky-200">
          {product.code}
        </div>
        <div className="relative z-10 text-xs font-medium text-slate-600 mt-1 text-center line-clamp-1 max-w-[90%]">
          {product.categoryLabel}
        </div>
      </div>
    );
  };

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${aspectClass} ${className}`}>
      {!loadFailed ? (
        <>
          <img
            src={imageSrc}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setLoadFailed(true)}
          />
          {!imageLoaded && renderFallback()}
        </>
      ) : (
        renderFallback()
      )}
    </div>
  );
};
