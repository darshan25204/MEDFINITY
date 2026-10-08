import React from 'react';

interface MedfinityLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  light?: boolean;
}

export const MedfinityLogo: React.FC<MedfinityLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  light = false
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const titleSizes = {
    sm: 'text-base leading-none',
    md: 'text-xl leading-tight',
    lg: 'text-2xl leading-tight',
    xl: 'text-3xl leading-tight'
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Emblem matching the official MEDFINITY logo */}
      <div className={`relative shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="medBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0099e5" />
              <stop offset="60%" stopColor="#005a9c" />
              <stop offset="100%" stopColor="#083e74" />
            </linearGradient>
            <linearGradient id="medGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7ec829" />
              <stop offset="60%" stopColor="#3ea125" />
              <stop offset="100%" stopColor="#1e731b" />
            </linearGradient>
            <linearGradient id="swooshGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0072b2" />
              <stop offset="60%" stopColor="#0099e5" />
              <stop offset="85%" stopColor="#5bb324" />
              <stop offset="100%" stopColor="#7ec829" />
            </linearGradient>
          </defs>

          {/* Dynamic swoosh orbit ring */}
          <path
            d="M 22 84 C 18 108, 42 138, 92 138 C 132 138, 154 114, 150 86 C 146 64, 128 50, 106 48 C 122 55, 134 68, 132 86 C 130 106, 110 124, 78 124 C 44 124, 26 104, 30 84 C 32 74, 39 64, 48 56 C 36 62, 24 71, 22 84 Z"
            fill="url(#swooshGrad)"
          />

          {/* Letter "M" in Medical Blue */}
          <path
            d="M 32 42 
               L 47 42 
               L 47 96 
               L 57 96 
               L 72 54 
               L 80 54 
               L 95 96 
               L 105 96 
               L 105 42 
               L 92 42 
               L 92 78 
               L 78 42 
               L 74 42 
               L 60 78 
               L 60 42 
               L 32 42 Z"
            fill="url(#medBlue)"
          />

          {/* Letter "F" with integrated Medical Cross '+' in Medical Green */}
          {/* Main F upright */}
          <path
            d="M 96 42 
               L 142 42 
               L 142 56 
               L 112 56 
               L 112 68 
               L 134 68 
               L 134 82 
               L 112 82 
               L 112 118 
               L 96 118 
               Z"
            fill="url(#medGreen)"
          />

          {/* Embedded White Medical Cross in the upper F */}
          <path
            d="M 124 45 
               H 132 
               V 51 
               H 138 
               V 59 
               H 132 
               V 65 
               H 124 
               V 59 
               H 118 
               V 51 
               H 124 
               Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Subtitle */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight font-sans ${titleSizes[size]}`}>
          <span className={light ? 'text-sky-300' : 'text-[#0a3f6f]'}>MED</span>
          <span className={light ? 'text-emerald-400' : 'text-[#2b8a3e]'}>FINITY</span>
        </div>
        
        <div className={`font-semibold tracking-wide uppercase ${subSizes[size]} ${light ? 'text-slate-300' : 'text-emerald-700'}`}>
          Surgical Equipment
        </div>

        {showTagline && size !== 'sm' && (
          <div className={`font-medium tracking-normal italic ${light ? 'text-slate-400' : 'text-slate-500'} ${size === 'lg' || size === 'xl' ? 'text-xs' : 'text-[10px]'}`}>
            Connecting trust and supply
          </div>
        )}
      </div>
    </div>
  );
};
