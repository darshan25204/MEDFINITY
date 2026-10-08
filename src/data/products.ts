import { Product } from '../types';

export const CATEGORIES: { id: string; label: string; count?: number; icon?: string }[] = [
  { id: 'all', label: 'All Equipment' },
  { id: 'icu-beds', label: 'ICU Beds' },
  { id: 'ward-care', label: 'Ward Care Beds' },
  { id: 'ot-furniture', label: 'Ward & OT Furniture' },
  { id: 'mobility', label: 'Mobility & Wheelchairs' },
  { id: 'respiratory-critical', label: 'Respiratory & ICU Care' },
  { id: 'diagnostics', label: 'Diagnostics & Monitoring' },
  { id: 'instruments-sterilization', label: 'Surgical & Sterilization' },
  { id: 'accessories', label: 'Beds Accessories & Spares' },
  { id: 'home-healthcare', label: 'Healthcare at Home (Rentals)' },
];

export const PRODUCTS: Product[] = [
  // --- ICU BEDS (Page 2) ---
  {
    id: 'medfinity-001',
    code: 'MEDFINITY 001',
    name: 'Motorized ICU Bed 5 Function (Excel Plus)',
    category: 'icu-beds',
    categoryLabel: 'ICU Beds',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: 'Flagship 5-Function ICU Bed with Tuck-Away ABS Rails & Central Locking Castors',
    dimensions: '2150 mm (L) × 965 mm (W) × 485 to 710 mm (H)',
    keySpecs: [
      '4 Heavy-duty actuators with control box & handset',
      'Hydraulically pressed 4-section bed boards in 18 SWG CRCA sheet',
      'Head & Leg bows made of high-quality engineering plastic (set of 2)',
      'Tuck-away type ABS polymer side railings (set of 4)',
      '125 mm castors with central locking mechanism',
      'Epoxy powder coating with 8-tank scratch resistance process'
    ],
    fullSpecs: {
      'Overall Size': '2150 mm × 965 mm × 485 to 710 mm (Height Adjustable)',
      'Actuator System': '4 high-torque medical actuators with remote handset & nurse lockout panel option',
      'Mattress Platform': 'Hydraulically pressed 4-section 18 SWG CRCA sheet with ventilation perforations',
      'Side Railings': 'Tuck-away type ABS polymer split side railings (4 pieces)',
      'Mobility': 'Mobile on 125 mm castors with central locking pedal system',
      'Standard Inclusions': 'IV Pole provision, drainage bag hooks on both sides',
      'Finish': 'Pre-treated 8-tank epoxy powder coating for hospital scratch & disinfectant resistance',
      'Optional Add-ons': 'Nurse control panel, Battery backup, CPR quick release'
    },
    features: [
      'Backrest lifting',
      'Leg rest lifting',
      'Trendelenburg tilt',
      'Reversed Trendelenburg tilt',
      'Electronic height adjustment'
    ],
    popular: true,
    badge: 'Best Seller ICU',
    indicativePrice: 'Sale & Rental Available'
  },
  {
    id: 'medfinity-002',
    code: 'MEDFINITY 002',
    name: 'Motorized ICU Bed 5 Function (Excel)',
    category: 'icu-beds',
    categoryLabel: 'ICU Beds',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: 'High-Performance 5-Function Motorized ICU Bed with ABS Side Rails',
    dimensions: '2150 mm (L) × 965 mm (W) × 485 to 710 mm (H)',
    keySpecs: [
      '4 Actuators with control handset',
      '18 SWG CRCA sheet mattress platform',
      'ABS polymer head & leg bows',
      'Tuck-away ABS side railings (set of 4)',
      '125 mm castors with individual brakes',
      '8-tank anti-corrosion powder coating'
    ],
    fullSpecs: {
      'Overall Size': '2150 mm × 965 mm × 485 to 710 mm',
      'Power / Motors': '4 linear actuators with wired patient controller',
      'Frame': 'High tensile CRCA rectangular steel tubes',
      'Castors': '125 mm swivel wheels with individual brake locks',
      'Optionals': 'Battery backup, Nurse panel'
    },
    features: ['Backrest tilt', 'Knee-rest tilt', 'Trendelenburg', 'Reverse Trendelenburg', 'Variable height'],
    popular: true,
    indicativePrice: 'Enquire for Price'
  },
  {
    id: 'medfinity-003',
    code: 'MEDFINITY 003',
    name: 'Motorized ICU Bed 5 Function (Premium)',
    category: 'icu-beds',
    categoryLabel: 'ICU Beds',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: '5-Function Motorized Bed with Collapsible Aluminium Side Railings',
    dimensions: '2150 mm (L) × 965 mm (W) × 485 to 710 mm (H)',
    keySpecs: [
      '4 Actuators with control box & handset',
      '18 SWG CRCA four section mattress base',
      'Engineering plastic head & foot panels',
      'Aluminium collapsible side railings with auto-lock (set of 2)',
      '125 mm castors with individual brakes',
      'Epoxy scratch-resistant powder coat'
    ],
    features: ['Back Rest Lifting', 'Leg Rest Lifting', 'Trendelenburg', 'Reverse Trendelenburg', 'Height Adjustment'],
    indicativePrice: 'Hospital Purchase / Monthly Rent'
  },
  {
    id: 'medfinity-004',
    code: 'MEDFINITY 004',
    name: 'Manual ICU Bed 5 Function (Deluxe)',
    category: 'icu-beds',
    categoryLabel: 'ICU Beds',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Heavy-Duty 5-Function Mechanical ICU Bed with Foldaway Cranks',
    dimensions: '2150 mm (L) × 965 mm (W) × 485 to 710 mm (H)',
    keySpecs: [
      '5 Smooth manual cranks with fold-away handles',
      '18 SWG CRCA four-section platform',
      'Aluminium collapsible side railings with lock',
      '125 mm diameter castors with brakes',
      'Full Trendelenburg & height manual adjust'
    ],
    features: ['5 Separate Manual Cranks', 'Full ICU Articulation', 'No electricity required'],
    indicativePrice: 'Competitive Dealer Rate'
  },
  {
    id: 'medfinity-005',
    code: 'MEDFINITY 005',
    name: 'Motorized ICU Bed 3 Function (Premium)',
    category: 'icu-beds',
    categoryLabel: 'ICU Beds',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: 'Versatile 3-Function Electric Bed for High-Dependency Units and Recovery',
    dimensions: '2150 mm (L) × 965 mm (W) × 485 to 710 mm (H)',
    keySpecs: [
      '3 Motorized actuators with hand controller',
      'Backrest, leg rest, and vertical height adjustments',
      'Aluminium collapsible safety railings',
      '125 mm castors with brakes',
      '18 SWG CRCA sheet four-section top'
    ],
    features: ['Back Rest Lifting', 'Leg Rest Lifting', 'Height Adjustment (485 - 710 mm)'],
    popular: true,
    badge: 'Popular for Rentals',
    indicativePrice: 'Sale & Monthly Rent Available'
  },
  {
    id: 'medfinity-006',
    code: 'MEDFINITY 006',
    name: 'Manual ICU Bed 3 Function (Deluxe)',
    category: 'icu-beds',
    categoryLabel: 'ICU Beds',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Reliable 3-Crank Mechanical Patient Bed with Aluminium Railings',
    dimensions: '2150 mm (L) × 965 mm (W) × 485 to 710 mm (H)',
    keySpecs: [
      '3 Independent manual screw cranks',
      'Backrest, knee rest, and bed height elevation',
      'Aluminium collapsible side railings',
      '125 mm castors with brakes'
    ],
    features: ['Manual Backrest', 'Manual Legrest', 'Manual Height Control'],
    indicativePrice: 'Affordable Ward & Home Solution'
  },

  // --- WARD CARE BEDS (Page 3) ---
  {
    id: 'medfinity-007',
    code: 'MEDFINITY 007',
    name: 'Motorized Fowler Bed 2 Function (Premium)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: 'Dual Actuator Motorized Ward Bed with Backrest & Knee Rest Controls',
    dimensions: '2050-2100 mm (L) × 900-960 mm (W) × 500 mm (H)',
    keySpecs: [
      '2 Actuators with remote handset',
      '18 SWG CRCA sheet four section top',
      'High-quality engineering plastic head & leg bows',
      'Aluminium collapsible side railings (set of 2)',
      '125 mm dia 4 castors all with brakes'
    ],
    features: ['Back Rest Lifting', 'Leg Rest Lifting', 'Fixed Hospital Height (500 mm)'],
    popular: true,
    badge: 'Home Care Favorite',
    indicativePrice: 'Sale & Monthly Rental'
  },
  {
    id: 'medfinity-008',
    code: 'MEDFINITY 008',
    name: 'Manual Fowler Bed 2 Function (Deluxe)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Sturdy 2-Crank Hospital Fowler Bed for General Wards & Patient Recovery',
    dimensions: '2050-2100 mm (L) × 900-960 mm (W) × 500 mm (H)',
    keySpecs: [
      '2 Smooth manual cranks for back & knee lift',
      '18 SWG CRCA four section bed board',
      'Molded ABS head & foot bows',
      'Provision for IV pole with drainage bag holder',
      '125 mm castors with brakes'
    ],
    features: ['Back Rest Lifting', 'Leg Rest Lifting'],
    indicativePrice: 'Sale / Rental'
  },
  {
    id: 'medfinity-009',
    code: 'MEDFINITY 009',
    name: 'Manual Fowler Bed 2 Function (Wooden Panels)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Warm Wooden Panel Aesthetic Bed for Private Hospital Suites & Home Care',
    dimensions: '2050-2100 mm (L) × 900-960 mm (W) × 500 mm (H)',
    keySpecs: [
      'Aesthetic wooden head & leg boards',
      '2 Smooth manual screw cranks',
      '18 SWG CRCA perforated platform',
      'Aluminium collapsible side railings',
      '125 mm castors with individual brakes'
    ],
    features: ['Homelike Wooden Aesthetics', 'Backrest & Legrest Elevation'],
    indicativePrice: 'Enquire for Price'
  },
  {
    id: 'medfinity-010',
    code: 'MEDFINITY 010',
    name: 'Motorized Semi Fowler Backrest Bed 1 Function (Premium)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: 'Single Actuator Motorized Bed with Push-Button Backrest Elevation',
    dimensions: '2100 mm (L) × 900 mm (W) × 500 mm (H)',
    keySpecs: [
      '1 Linear actuator with ergonomic hand controller',
      '18 SWG CRCA two section bed board',
      'Engineering plastic head & foot bows',
      'Aluminium collapsible safety railings',
      'Epoxy powder coated finish with 8-tank process'
    ],
    features: ['Motorized Backrest Lifting (0° to 75°)', 'Fixed Height 500 mm'],
    indicativePrice: 'Cost-Effective Electric Bed'
  },
  {
    id: 'medfinity-011',
    code: 'MEDFINITY 011',
    name: 'Manual Semi Fowler Backrest Bed 1 Function (Deluxe)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Manual Crank Single-Section Backrest Elevation Bed',
    dimensions: '2100 mm (L) × 900 mm (W) × 500 mm (H)',
    keySpecs: [
      'Single manual crank mechanism',
      'Two section CRCA bed board',
      'Collapsible aluminium side rails',
      '125 mm castors with brakes'
    ],
    features: ['Manual Backrest Lift', 'IV pole provision'],
    indicativePrice: 'Economy & Rental Friendly'
  },
  {
    id: 'medfinity-012',
    code: 'MEDFINITY 012',
    name: 'Manual Semi Fowler Backrest Bed 1 Function (Economy)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Budget-Friendly Semi Fowler Bed for General Wards and Clinics',
    dimensions: '2000 mm (L) × 900 mm (W) × 500 mm (H)',
    keySpecs: [
      '20 SWG CRCA sheet two-section board',
      'Sturdy M.S side rails of KRAFT 144 design',
      '125 mm dia castors with brakes',
      'Epoxy powder coated'
    ],
    features: ['Economy Manual Crank', 'High durability steel frame'],
    indicativePrice: 'Best Bulk Hospital Price'
  },
  {
    id: 'medfinity-013',
    code: 'MEDFINITY 013',
    name: 'Manual Semi Fowler Backrest Bed (Wooden Panels)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Comfortable Single-Function Bed with Polished Wooden Panel Boards',
    dimensions: '2000 mm (L) × 900 mm (W) × 500 mm (H)',
    keySpecs: [
      'Wooden head & foot panels for cozy home interior feel',
      'Manual smooth backrest crank',
      'Epoxy powder coated steel frame',
      'Collapsible side railings'
    ],
    features: ['Backrest Elevation', 'Interior-friendly Wooden Styling'],
    indicativePrice: 'Available on Rent & Sale'
  },
  {
    id: 'medfinity-014',
    code: 'MEDFINITY 014',
    name: 'Electric Semi Fowler Mattress 1 Function (Electric)',
    category: 'ward-care',
    categoryLabel: 'Ward Care Beds',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: 'Convert Any Standard Bed to an Electric Recliner - Portable Backrest System',
    dimensions: 'L 72 in × W 36 in × H 6 in (Mattress size)',
    keySpecs: [
      'Motorized MS frame integrated directly into mattress',
      'Cloth Material: Medical grade waterproof Rexine',
      'Inside Material: High-density waterproof foam',
      'Hand controller for effortless patient elevation'
    ],
    features: ['Portable Electric Backrest', 'Fits existing home beds', 'Easy to clean Rexine'],
    popular: true,
    badge: 'Innovative Home Care',
    indicativePrice: 'Sale & Rental'
  },

  // --- WARD & OT FURNITURE (Pages 4, 5, 6) ---
  {
    id: 'medfinity-015',
    code: 'MEDFINITY 015',
    name: 'Plain Bed Classic',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Classic Heavy Duty Hospital General Ward Plain Bed',
    dimensions: '1900 mm (L) × 900 mm (W) × 560 mm (H)',
    keySpecs: [
      'Heavy duty CRCA steel frame construction',
      'Pre-treated epoxy powder coated',
      'Rubber shoe tips for floor grip and noise dampening',
      'IV pole provisions at 4 corners'
    ],
    features: ['Standard General Ward Bed', 'High durability'],
    indicativePrice: 'Direct Hospital Supply'
  },
  {
    id: 'medfinity-016',
    code: 'MEDFINITY 016',
    name: 'Attendant Bed',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Compact & Sturdy Bed for Patient By-Standers & Nursing Staff',
    dimensions: '1830 mm (L) × 610 mm (W) × 380 mm (H)',
    keySpecs: ['CRCA rectangular tubular frame', 'Sheet steel top with powder coating', 'Compact footprint'],
    features: ['Low profile attendant bed', 'Fits adjacent to patient bed'],
    indicativePrice: 'Sale Price on Request'
  },
  {
    id: 'medfinity-017',
    code: 'MEDFINITY 017',
    name: 'Pediatric Bed Classic',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Dedicated Child Patient Bed with Full-Length Drop-Down Safety Railings',
    dimensions: '1370 mm (L) × 625 mm (W) × 560 mm (H)',
    keySpecs: [
      'Full surround protective side drop railings',
      'CRCA sheet perforated top',
      'Vibrant child-safe non-toxic powder coating',
      'Anti-pinch lock mechanism'
    ],
    features: ['Full Safety Railings', 'Pediatric ward optimized'],
    indicativePrice: 'Enquire for Quote'
  },
  {
    id: 'medfinity-018',
    code: 'MEDFINITY 018',
    name: 'Attendant Bed Cum Chair',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Space-Saving Dual Purpose Attendant Chair that Flattens into a Full Bed',
    dimensions: 'Chair: Compact arm-chair · Bed: 1830 mm flat',
    keySpecs: [
      'Smooth folding pivot mechanism with locking hinges',
      'High density foam with durable Rexine upholstery',
      'Castors for easy room repositioning',
      'Tubular MS powder coated frame'
    ],
    features: ['Chairs by day, Bed by night', 'Saves ward space', 'Ergonomic armrests'],
    popular: true,
    badge: 'Top Selling Ward Item',
    indicativePrice: 'Immediate Stock Available'
  },
  {
    id: 'medfinity-019',
    code: 'MEDFINITY 019',
    name: 'Examination Couch with Storage Cabinets',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Doctor Clinic Examination Couch with Built-In Storage Drawers and Cabinet',
    dimensions: '1830 mm (L) × 575 mm (W) × 850 mm (H)',
    keySpecs: [
      'High grade CRCA cabinet body with slide drawers',
      'Thick cushioned top covered with washable Rexine',
      'In-built paper roll holder & foot step provision'
    ],
    features: ['Integrated 3 drawers + 3 lockable cabinets', 'Ideal for OPD clinics'],
    indicativePrice: 'Best Clinic Setup Offer'
  },
  {
    id: 'medfinity-020',
    code: 'MEDFINITY 020',
    name: 'Examination Couch with Backrest',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Two-Section Clinical Examination Couch with Ratchet-Adjustable Backrest',
    dimensions: '1830 mm (L) × 575 mm (W) × 850 mm (H)',
    keySpecs: [
      'Multi-angle ratchet mechanism for backrest incline',
      'Sturdy MS tubular legs with scratch-resistant coating',
      'High density foam mattress pad'
    ],
    features: ['Adjustable back angle', 'Easy sanitization'],
    indicativePrice: 'Instant Quote'
  },
  {
    id: 'medfinity-021',
    code: 'MEDFINITY 021',
    name: 'Gynaec Examination Couch',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Specialized Gynaecology Examination Couch with Adjustable Lithotomy Leg Crutches',
    dimensions: '1830 mm (L) × 537 mm (W) × 810 mm (H)',
    keySpecs: [
      'Adjustable padded lithotomy leg crutches (padded stirrups)',
      'Stainless steel waste collection basin sliding underneath',
      'Three section upholstered top with backrest lift'
    ],
    features: ['Gynaec lithotomy crutches', 'Sliding SS tray/basin', 'Back tilt'],
    popular: true,
    indicativePrice: 'Specialist Gynaec Pricing'
  },
  {
    id: 'medfinity-022',
    code: 'MEDFINITY 022',
    name: 'Normal Examination Table',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Standard Sturdy Doctor Examination Table for Clinics & Hospitals',
    dimensions: '1830 mm (L) × 575 mm (W) × 850 mm (H)',
    keySpecs: ['Robust CRCA steel construction', 'Pre-treated powder coating', 'Foam top mattress with Rexine cover'],
    features: ['Economical clinical table', 'Foot step adaptable'],
    indicativePrice: 'Available'
  },
  {
    id: 'medfinity-023',
    code: 'MEDFINITY 023',
    name: 'Blood Donation Couch',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Ergonomic Contoured Couch for Blood Banks, Dialysis & Chemotherapy',
    dimensions: 'Ergonomically contoured reclining couch',
    keySpecs: [
      'Adjustable padded donor armrests for phlebotomy',
      'Vasovagal syncope rapid Trendelenburg tilt positioning',
      'Thick contoured anatomical foam for comfort'
    ],
    features: ['Dual phlebotomy armrests', 'Quick recline position', 'Heavy duty base'],
    indicativePrice: 'Quote on Request'
  },
  {
    id: 'medfinity-024',
    code: 'MEDFINITY 024',
    name: 'Motorized Obstetric Labor & Recovery Bed (3 Function)',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Motorized',
    tagline: 'State-of-the-Art LDR (Labor, Delivery & Recovery) Motorized Obstetric Bed',
    dimensions: '2000 mm (L) × 950 mm (W) × 600 to 900 mm (H)',
    keySpecs: [
      '3 High-performance silent medical actuators',
      'Telescopic sliding leg section retracts under main section',
      'Stainless steel waste collection fluid basin',
      'Padded lithotomy leg crutches, hand grips, and IV pole',
      'High density waterproof foam with anti-microbial seamless joints'
    ],
    features: ['LDR all-in-one bed', 'Motorized height & Trendelenburg', 'Sliding leg board'],
    popular: true,
    badge: 'OT & Maternity Grade',
    indicativePrice: 'OT Turnkey Rate'
  },
  {
    id: 'medfinity-025',
    code: 'MEDFINITY 025',
    name: 'Telescopic Obstetric & Gynaec Table - S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Stainless Steel Telescopic Labor Delivery Table with Retractable Leg Section',
    dimensions: '1830 mm (L) × 760 mm (W) × 760 mm (H)',
    keySpecs: [
      'Complete Stainless Steel (S.S 304/202) construction',
      'Retractable lower leg section on smooth bearings',
      'Adjustable lithotomy leg crutches & SS waste bowl'
    ],
    features: ['100% SS Rust-Proof Frame', 'Telescopic sliding frame'],
    indicativePrice: 'Direct Hospital Pricing'
  },
  {
    id: 'medfinity-026',
    code: 'MEDFINITY 026',
    name: 'Simple Gynaec Delivery Table S.S / M.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Standard Hospital Delivery Table with Lithotomy Crutches',
    dimensions: '1830 mm (L) × 760 mm (W) × 760 mm (H)',
    keySpecs: ['Available in Full SS or MS Epoxy coated frame', 'Fixed height with perineal cut-out', 'Padded stirrups included'],
    features: ['Perineal U-cut top', 'Heavy load bearing'],
    indicativePrice: 'Economical Maternity Solution'
  },
  {
    id: 'medfinity-027',
    code: 'MEDFINITY 027',
    name: 'Motorized Gynaec OT Table',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Motorized',
    tagline: 'Advanced Motorized Operation Theatre Table for Gynaecological & General Surgeries',
    dimensions: 'Precision adjustable surgical platform',
    keySpecs: [
      'Multi-function electronic actuator controls',
      'X-Ray permeable radiolucent top for C-arm compatibility',
      'Stainless steel 304 column and base covers',
      'Complete accessories: arm boards, body straps, leg holders'
    ],
    features: ['Motorized Height, Trendelenburg & Lateral Tilt', 'C-Arm Radiolucent Top'],
    popular: true,
    badge: 'Operation Theatre Spec',
    indicativePrice: 'Custom OT Proposal'
  },

  // --- TROLLEYS, STRETCHERS & CRASH CARTS (Page 5) ---
  {
    id: 'medfinity-028',
    code: 'MEDFINITY 028',
    name: 'Trauma Care Recovery Trolley by Screw Mechanism',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Heavy-Duty Emergency Trauma Trolley with Smooth Screw Height Adjustment',
    dimensions: '2050 mm (L) × 650 mm (W) × 650 to 900 mm (H)',
    keySpecs: [
      'Two screw mechanisms with foldaway crank for height and Trendelenburg',
      'Collapsible stainless steel side safety railings',
      '150 mm diameter heavy-duty castors with brakes',
      'Oxygen cylinder holder and telescopic IV pole'
    ],
    features: ['Emergency Trauma Transport', 'Trendelenburg & Tilt', 'Mattress pad included'],
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'medfinity-029',
    code: 'MEDFINITY 029',
    name: 'Hydraulic Trauma Care Recovery Trolley',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Hydraulic',
    tagline: 'Rapid Action Hydraulic Foot-Pedal Trauma Care Stretcher Trolley',
    dimensions: '2100 mm (L) × 690 mm (W) × 600 to 920 mm (H)',
    keySpecs: [
      'Hydraulic pump operated via dual foot pedals on both sides',
      'Gas spring assisted backrest and Trendelenburg tilts',
      'Central locking steering 5th wheel castor for smooth high-speed maneuvering',
      'Drop-down full protection side rails'
    ],
    features: ['Hands-Free Hydraulic Foot Lift', 'Directional 5th wheel steer', 'Instant Trendelenburg'],
    popular: true,
    badge: 'Emergency ICU / ER',
    indicativePrice: 'In Stock'
  },
  {
    id: 'medfinity-030',
    code: 'MEDFINITY 030',
    name: 'Stretcher on Trolley - S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Standard',
    tagline: 'Detachable Stainless Steel Patient Transfer Stretcher on Wheeled Trolley',
    dimensions: '2030 mm (L) × 610 mm (W) × 870 mm (H)',
    keySpecs: [
      'Removable top stretcher canvas/SS sheet with carrying handles',
      'Stainless steel tubular undercarriage',
      '150 mm swivel castors (two with brakes)',
      'Oxygen cylinder cage and IV stand holder'
    ],
    features: ['Detachable stretcher top', 'Rust-proof full SS body'],
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'medfinity-031',
    code: 'MEDFINITY 031',
    name: 'ABS Patient Transfer Trolley',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Lightweight & Ergonomic Molded ABS Patient Recovery Trolley',
    dimensions: '1950 mm (L) × 640 mm (W) × 750 mm (H)',
    keySpecs: ['High-impact engineering ABS top and side rails', 'Integrated gas spring backrest', 'Central brake castor system'],
    features: ['Shock absorbing ABS surface', 'Smooth patient sliding'],
    indicativePrice: 'Available'
  },
  {
    id: 'medfinity-032',
    code: 'MEDFINITY 032',
    name: 'Aluminium Folding Stretcher',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Ultra-Lightweight 2-Fold / 4-Fold Aluminium Emergency Ambulance Stretcher',
    dimensions: 'Open: 2100 × 530 × 120 mm · Folded: 1050 × 170 × 90 mm',
    keySpecs: [
      'High-strength aluminium alloy frame',
      'Waterproof PVC-coated Oxford fabric',
      'Folds lengthwise and crosswise into carrying bag',
      'Weight capacity: 160 kg, Tare weight: only 5.5 kg'
    ],
    features: ['Folds into compact carrying case', 'Essential for ambulances & first aid'],
    popular: true,
    indicativePrice: 'Ready Stock'
  },
  {
    id: 'medfinity-033',
    code: 'MEDFINITY 033',
    name: 'ABS Emergency Trolley',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Modular Molded ABS Emergency Medicine Trolley with Push Handle',
    dimensions: '750 mm (L) × 480 mm (W) × 920 mm (H)',
    keySpecs: [
      'Molded ABS polymer body with raised lip edges to prevent spills',
      'Centralized key lock for all drawers',
      'Slide-out writing shelf and dust bins on side',
      'Defibrillator shelf and IV pole'
    ],
    features: ['Modular color coded drawers', 'Smooth silent castors'],
    popular: true,
    indicativePrice: 'Direct Dealer Quote'
  },
  {
    id: 'medfinity-034',
    code: 'MEDFINITY 034',
    name: 'ABS Anesthesia Trolley',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Specialized Anesthesiology Cart with Multi-Tier Tilt Bins and Lockable Drawers',
    dimensions: '850 mm (L) × 520 mm (W) × 1020 mm (H)',
    keySpecs: [
      'Upper overhead transparent tilt-out organizer bins',
      'Deep drawer sections with removable dividers for ampoules and syringes',
      'Stainless steel guard rails on top work surface',
      'Sharp container and waste container mounts'
    ],
    features: ['Overhead medicine bins', 'Complete OT organization'],
    indicativePrice: 'OT Setup Special'
  },
  {
    id: 'medfinity-035',
    code: 'MEDFINITY 035',
    name: 'Emergency Crash Cart - S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Heavy-Duty 304 Stainless Steel Emergency Resuscitation Crash Cart',
    dimensions: '960 mm (L) × 490 mm (W) × 1540 mm (H)',
    keySpecs: [
      'Full Stainless Steel body with 6 pull-out trays & storage shelves',
      'Cardiac CPR board at back with oxygen cylinder cage',
      'Adjustable 360° rotating defibrillator tray',
      'Locking break-away security seal bar'
    ],
    features: ['Full SS Construction', 'CPR backboard included', 'Defibrillator tray'],
    popular: true,
    badge: 'NABH Hospital Required',
    indicativePrice: 'Ready for Dispatch'
  },
  {
    id: 'medfinity-036',
    code: 'MEDFINITY 036',
    name: 'Baby Trolley (Neonatal Bassinet)',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Transparent Acrylic Tub Neonatal Bassinet Trolley with Trendelenburg Tilt',
    dimensions: '850 mm (L) × 500 mm (W) × 900 mm (H)',
    keySpecs: [
      'Crystal clear medical acrylic baby crib tub',
      'Gas spring / ratchet tilt for head-up reflux prevention',
      'Underneath storage shelf for baby diapers & supplies',
      'Smooth silent rubber swivel wheels'
    ],
    features: ['Clear view crib', 'Reflux tilt adjustment', 'Maternity ward must-have'],
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'medfinity-037',
    code: 'MEDFINITY 037',
    name: 'Waste Carrying Trolley S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Stainless Steel Heavy-Duty Waste Collection Trolley for Hospital Sanitation',
    dimensions: 'Customized ergonomic sizes',
    keySpecs: ['Heavy gauge SS rectangular tubular frame', 'Hinged stainless steel lid', 'Easy clean surface'],
    features: ['Infection control compliant', 'Heavy load rubber wheels'],
    indicativePrice: 'Enquire'
  },
  {
    id: 'medfinity-038',
    code: 'MEDFINITY 038',
    name: 'Bowl Stand Single - S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Single Stainless Steel Basin Stand with 4 Castors',
    dimensions: '840 mm (H) × 355 mm (Dia)',
    keySpecs: ['SS tubular frame', 'Includes one 350 mm SS wash basin', '50 mm castors'],
    features: ['Removable SS basin', 'Mobile operation theatre stand'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'medfinity-039',
    code: 'MEDFINITY 039',
    name: 'Bowl Stand Double - S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Dual Stainless Steel Basin Stand on Smooth Wheeled Base',
    dimensions: '840 mm (H) × 355 mm (Dia each bowl)',
    keySpecs: ['Holds two large SS surgical bowls', 'Stainless steel framework', 'Smooth rolling wheels'],
    features: ['Twin basin capacity', 'Essential for scrubbing & OT'],
    indicativePrice: 'Immediate Dispatch'
  },
  {
    id: 'medfinity-040',
    code: 'MEDFINITY 040',
    name: 'Revolving Stool - S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Doctor & Surgeon Height-Adjustable Revolving Screw Stool',
    dimensions: 'Base 290 mm × Height 425 to 675 mm',
    keySpecs: ['Cushioned or solid SS top seat', 'Threaded screw height adjustment', 'Rubber feet or 50 mm castors'],
    features: ['Smooth 360° spin', 'Height adjustable 425 - 675 mm'],
    indicativePrice: 'Best Price'
  },
  {
    id: 'medfinity-041',
    code: 'MEDFINITY 041',
    name: 'Soiled Linen Trolley Big - S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Stainless Steel Linen Bag Trolley for Hospital Housekeeping',
    dimensions: '790 mm (L) × 560 mm (W) × 1030 mm (H)',
    keySpecs: ['Washable heavy duty canvas/nylon bag', 'Stainless steel tubing frame', 'Push handle with castors'],
    features: ['Hygienic soiled laundry transport', 'Removable canvas bag'],
    indicativePrice: 'Hospital Supply'
  },
  {
    id: 'medfinity-042',
    code: 'MEDFINITY 042',
    name: 'Bed Side Stool with S.S Top',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Heavy MS Tubular Frame Visitor & Bedside Stool with Stainless Steel Seat',
    dimensions: '405 mm (L) × 405 mm (W) × 455 mm (H)',
    keySpecs: ['Pressed stainless steel top', 'MS tubular epoxy powder coated legs', 'Anti-slip rubber feet'],
    features: ['Stackable design', 'Durable and easy to sanitize'],
    indicativePrice: 'Economical'
  },
  {
    id: 'medfinity-043',
    code: 'MEDFINITY 043',
    name: 'Single & Double Step Foot Stool - S.S / M.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Patient Bed Climbing Stool with Ribbed Non-Slip Rubber Mat',
    dimensions: 'Single: 450 × 225 × 225 mm · Double: 450 × 400 × 400 mm',
    keySpecs: ['Non-slip rubber top bordered with aluminium beading', 'Rubber shoe base for zero floor slippage'],
    features: ['Available in Single Step & Double Step', 'Essential beside high hospital beds'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'medfinity-044',
    code: 'MEDFINITY 044',
    name: 'Saline Stand - S.S (IV Pole)',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Stainless Steel 5-Leg Heavy Base IV Infusion Drip Stand with 4 Hooks',
    dimensions: 'Height adjustable 1350 mm to 2400 mm',
    keySpecs: ['Heavy cast iron / SS star base with 5 castors', 'Telescopic stainless steel height rod with knob', '4 stainless steel infusion hooks'],
    features: ['Low center of gravity anti-topple base', 'Smooth telescopic locking'],
    popular: true,
    indicativePrice: 'Ready Stock'
  },
  {
    id: 'medfinity-045',
    code: 'MEDFINITY 045',
    name: 'Dressing Trolley S.S',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Stainless Steel Wound Dressing Trolley with SS Bowl & Waste Bucket',
    dimensions: 'Available in various custom hospital sizes',
    keySpecs: [
      'Two stainless steel shelves with 3-sided guard rails',
      'Swing-out ring holder with SS wash bowl and bucket',
      'Smooth running 100 mm swivel castors'
    ],
    features: ['Includes SS bowl & bucket', 'Railings on all shelves'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'medfinity-046',
    code: 'MEDFINITY 046',
    name: 'Instrument Trolley - S.S (Various Sizes)',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Surgical Instrument Trolley in 304 Stainless Steel - Multiple Dimensions',
    dimensions: 'Available: 16×16×35, 18×18×35, 24×18×35, 27×18×35, 30×20×35, 36×20×35, 42×24×35 inches',
    keySpecs: ['2 or 3 heavy gauge SS shelves with 3-sided guard rails', 'SS tubular frame with diagonal braces', 'Castors with brakes'],
    features: ['7 Standard hospital dimensions', 'Full seamless argon welding'],
    popular: true,
    indicativePrice: 'All Sizes Available'
  },
  {
    id: 'medfinity-049',
    code: 'MEDFINITY 049',
    name: "Mayo's Trolley (S.S)",
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Manual',
    tagline: 'Surgical OT Mayo Instrument Stand with Removable Tray',
    dimensions: '1115 mm (L) × 445 mm (W) × 965 mm (H)',
    keySpecs: [
      'Removable seamless stainless steel instrument tray',
      'Height adjustable via locking screw',
      'Low profile base slides easily under operation tables'
    ],
    features: ['Removable SS tray', 'Effortless OT table positioning'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'medfinity-050',
    code: 'MEDFINITY 050',
    name: 'Laparoscopic Trolley',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Multi-Tier Video Endoscopy & Laparoscopy Tower Cart with Monitor Arm',
    dimensions: '560 mm (L) × 445 mm (W) × 810 to 1270 mm (H)',
    keySpecs: [
      '4 Adjustable heavy duty shelves with safety lips for insufflator & light source',
      'Gas cylinder holder at rear and power strip bracket',
      'VESA standard monitor mounting arm'
    ],
    features: ['Endoscopy & Laparoscopy tower', 'Cable management channel'],
    indicativePrice: 'OT Proposal'
  },
  {
    id: 'medfinity-051',
    code: 'MEDFINITY 051',
    name: 'Bed Side Locker Laminated',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Hospital Patient Bedside Locker with Laminated Wooden Finish',
    dimensions: '380 mm (L) × 380 mm (W) × 820 mm (H)',
    keySpecs: ['Scratch resistant laminate top and drawer', 'Bottom cupboard with ventilated louvers', 'Towel rail and castors'],
    features: ['Single drawer + bottom storage', 'Aesthetic hospital room look'],
    indicativePrice: 'Available'
  },
  {
    id: 'medfinity-052',
    code: 'MEDFINITY 052',
    name: 'Bed Side Locker ABS',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Modern Molded Engineering ABS Bedside Locker with Hidden Towel Hangers',
    dimensions: '475 mm (L) × 475 mm (W) × 820 mm (H)',
    keySpecs: [
      'High-impact rust-free ABS engineering plastic',
      'Integrated dining drawer / slide tray',
      'Foldable dual towel hooks and shoe shelf',
      'Smooth non-marking castors'
    ],
    features: ['100% Rust-proof ABS body', 'Retractable dining board'],
    popular: true,
    indicativePrice: 'Ready Stock'
  },
  {
    id: 'medfinity-053',
    code: 'MEDFINITY 053',
    name: 'Adjustable Bed Side Table - Gas Spring',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Hydraulic',
    tagline: 'One-Touch Gas Spring Pneumatic Overbed Dining Table for Patients',
    dimensions: 'Overbed rectangular laminate table top',
    keySpecs: [
      'Pneumatic gas spring height elevation by pressing lever',
      'Laminated MDF/ABS top with spill barrier edges',
      'Low profile C-shape or H-shape base rolls under hospital beds'
    ],
    features: ['Effortless single touch gas spring height adjust', 'Ideal for bed dining & reading'],
    popular: true,
    badge: 'High Demand',
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'medfinity-054',
    code: 'MEDFINITY 054',
    name: 'Adjustable Bed Side Table with Knob',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Cost-Effective Manual Knob Adjustable Overbed Food Table',
    dimensions: 'Standard overbed dimensions',
    keySpecs: ['Manual tightening knob adjustment', 'Epoxy powder coated frame', 'Swivel wheels'],
    features: ['Economical overbed dining solution', 'Durable wooden top'],
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'medfinity-057',
    code: 'MEDFINITY 057',
    name: 'Bed Side Screen S.S / M.S (3-Fold / 4-Fold)',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Folding Ward Privacy Screen with Washable Curtains',
    dimensions: 'Height: 1675 mm × Width: 2440 mm',
    keySpecs: ['Tubular MS or SS frame with smooth folding hinges', 'Complete with curtains and curtain rings', 'Swivel castors on each panel'],
    features: ['Foldable privacy partition', 'Washable medical curtains'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'medfinity-058',
    code: 'MEDFINITY 058',
    name: 'Oxygen Cylinder Trolley S.S / M.S (10 Ltrs / D-Type)',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'both',
    mechanism: 'Standard',
    tagline: 'Heavy Duty Wheeled Hand Cart for Medical Oxygen Gas Cylinders',
    dimensions: 'Engineered for 10L (B-Type) & Jumbo (D-Type) Cylinders',
    keySpecs: ['Tubular curved frame with safety chain', 'Solid rubber wheels for silent transit', 'Available in SS or Epoxy MS'],
    features: ['Safety retaining chain', 'Easy stair and floor rolling'],
    popular: true,
    indicativePrice: 'Ready Stock'
  },

  // --- MOBILITY & WHEELCHAIRS (Pages 6, 8, 12) ---
  {
    id: 'medfinity-055',
    code: 'MEDFINITY 055',
    name: 'Non Folding Wheel Chair with Commode',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'both',
    mechanism: 'Standard',
    tagline: 'Rigid Frame Sturdy Wheelchair with Removable Commode Pot & Cushion Seat',
    dimensions: 'Standard adult wheelchair size',
    keySpecs: ['Heavy duty rigid chrome frame', 'Slide-out commode bucket with lid', 'Padded vinyl seat with removable center', 'Solid rubber mag wheels'],
    features: ['Bedside toilet assistance', 'Durable non-folding design for long hospital life'],
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'medfinity-056',
    code: 'MEDFINITY 056',
    name: 'Folding Wheel Chair (Chrome Plated)',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Classic Foldable Chrome Steel Wheelchair with Spoke Wheels & Footrests',
    dimensions: 'Standard folding adult dimensions',
    keySpecs: ['Cross-brace folding mechanism for car boot storage', 'Chrome plated steel frame', 'Swing-away footrests and parking handbrakes'],
    features: ['Folds flat in seconds', 'Heavy-duty load capacity (110 kg)'],
    popular: true,
    badge: 'Popular for Daily Care',
    indicativePrice: 'Sale & Monthly Rental'
  },
  {
    id: 'seneca-wheelchair',
    code: 'SENECA WHEELCHAIR',
    name: 'Seneca Lightweight Transit Wheelchair',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Ultra-Lightweight Aluminium Companion-Propelled Transit Wheelchair',
    dimensions: 'Compact folding transit profile',
    keySpecs: ['High-strength aircraft aluminium frame', 'Attendant hand brakes with parking lock', 'Fold-down backrest for tight car trunk fit'],
    features: ['Weighs under 10 kg', 'Attendant handbrakes', 'Easy travel'],
    popular: true,
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'reclining-wheelchair',
    code: 'RECLINING WHEEL CHAIR',
    name: 'High-Back Reclining Wheelchair with Commode',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Full Recline 180° Wheelchair with Headrest Extension and Elevating Leg Rests',
    dimensions: 'Full adult reclining ergonomics',
    keySpecs: [
      'Smooth stepless backrest recline from 90° up to 180° bed angle',
      'Detachable padded high headrest extension',
      'Elevating calf-support footrests with cushions',
      'Integrated commode seat'
    ],
    features: ['Converts to bed position', 'Elevating legrests', 'Head support'],
    popular: true,
    badge: 'Stroke & Paralysis Care',
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'snow-electric-wheelchair',
    code: 'SNOW ELECTRIC WHEEL CHAIR',
    name: 'Snow Electric Motorized Power Wheelchair',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: '360° Smart Joystick Controlled Powered Electric Wheelchair',
    dimensions: 'Motorized compact powerchair',
    keySpecs: [
      'Dual powerful 250W brushless hub motors',
      'Smart 360° precision joystick with speed control & horn',
      'Long-lasting lithium / dry battery with 20 km range per charge',
      'Foldable frame with anti-tip rear wheels'
    ],
    features: ['Effortless joystick drive', 'Electromagnetic auto brakes', 'Foldable'],
    popular: true,
    badge: 'Premium Independence',
    indicativePrice: 'Purchase & Long-Term Rental'
  },
  {
    id: 'stair-lift-wheelchair',
    code: 'STAIR LIFT WHEEL CHAIR',
    name: 'Electric Stair Climbing Wheelchair',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'both',
    mechanism: 'Motorized',
    tagline: 'Powered Tracked Stair Climbing Evacuation Chair for Multistory Access',
    dimensions: 'Heavy duty tracked chassis',
    keySpecs: ['Motorized caterpillar rubber crawler tracks grip stairs firmly', 'Controlled descent and ascent push buttons', 'Safety seatbelts and headrest'],
    features: ['Safe stair transit without carrying', 'Single operator control'],
    indicativePrice: 'Consultation & Demo'
  },
  {
    id: 'commode-va40',
    code: 'VA 40',
    name: 'Folding Commode Chair (Economy)',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Lightweight Foldable Patient Toilet Commode Stool with Removable Pot',
    dimensions: 'Standard height with folding cross frame',
    keySpecs: ['Powder-coated steel folding frame', 'Plastic toilet seat and splash guard lid', 'Removable waste bucket'],
    features: ['Folds flat for storage', 'Anti-slip rubber feet'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'commode-va60',
    code: 'VA 60',
    name: 'Wheeled Commode Chair with Castors',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Mobile Wheeled Commode Chair - Can be Rolled Directly Over Standard Toilets',
    dimensions: 'Height fits over standard western commodes',
    keySpecs: ['Waterproof plastic-coated frame', '4 swivel castors with foot brakes', 'Drop-down armrests for easy bed transfer'],
    features: ['Rolls over western commodes', 'Brakes on wheels for security'],
    indicativePrice: 'Immediate Delivery'
  },
  {
    id: 'walker-mf10',
    code: 'MF 10',
    name: 'Reciprocating Folding Walker',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Flexible Reciprocating Walker that Moves Step-by-Step with the User',
    dimensions: 'Height adjustable 780 to 980 mm',
    keySpecs: ['Lightweight anodized aluminium tubing', 'Switchable between reciprocating (walking) and rigid fixed mode', 'Push-button one-touch fold'],
    features: ['Mimics natural walking gait', 'Comfortable foam hand grips'],
    indicativePrice: 'Budget Friendly'
  },
  {
    id: 'walker-mf50',
    code: 'MF 50',
    name: 'Standard Foldable Aluminium Walker',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Reliable One-Button Folding Walking Frame for Elderly Rehabilitation',
    dimensions: 'Height adjustable in 1-inch increments',
    keySpecs: ['Durable aluminium frame', 'Easy single button folding', 'Slip-resistant rubber ferrule feet'],
    features: ['Height adjustable', 'Lightweight yet holds 100 kg'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'walker-mf90',
    code: 'MF 90',
    name: 'Wheeled Walker with Front Castors',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Two-Wheeled Walker for Smoother Glide Without Lifting the Entire Frame',
    dimensions: 'Standard adjustable height',
    keySpecs: ['5-inch front rubber rolling wheels', 'Rear glide tips for natural stopping', 'Folding frame'],
    features: ['No lifting required', 'Smooth indoor gliding'],
    indicativePrice: 'Available'
  },
  {
    id: 'walker-mf120',
    code: 'MF 120',
    name: 'Four-Wheel Rollator with Seat & Hand Brakes',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'both',
    mechanism: 'Manual',
    tagline: 'Premium Outdoor Rollator with Padded Rest Seat, Backrest & Shopping Basket',
    dimensions: 'Four 6-inch wheels with ergonomic frame',
    keySpecs: ['Bicycle-style squeeze hand brakes with parking lock', 'Comfortable padded flip-up seat with storage pouch', 'Curved backrest support'],
    features: ['Sit and rest whenever tired', 'Dual loop handbrakes'],
    popular: true,
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'commode-raiser',
    code: 'COMMODE RAISER',
    name: 'Raised Toilet Seat Extender (Commode Raiser)',
    category: 'mobility',
    categoryLabel: 'Mobility & Wheelchairs',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Elevates Toilet Seat by 4 Inches for Hip Replacement & Knee Arthritis Patients',
    dimensions: 'Fits standard oval and round western toilet bowls',
    keySpecs: ['Medical grade high density polyethylene', 'Front and rear hygiene cut-outs', 'Locking side clamps secure firmly to commode'],
    features: ['No tools required for fitting', 'Relieves knee bending strain'],
    popular: true,
    indicativePrice: 'Ready Stock'
  },

  // --- RESPIRATORY & CRITICAL CARE (Pages 9, 11, 12) ---
  {
    id: 'oxygen-concentrator-5l-10l',
    code: 'OXYGEN CONCENTRATOR',
    name: 'Medical Grade Oxygen Concentrator (5L & 10L)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'both',
    mechanism: 'Digital',
    tagline: 'Continuous High-Purity (93% ± 3%) Oxygen Supply with In-Built Nebulizer',
    dimensions: 'Portable wheeled cabinet with LCD screen',
    keySpecs: [
      'Flow Rate: 0.5 to 5 LPM / 1 to 10 LPM continuous flow',
      'Oxygen Purity: 93% ± 3% medical standard at all flow levels',
      'Built-in oxygen purity sensor and low flow alarm',
      'Ultra-silent operation (< 43 dB) with low power consumption',
      'Humidifier bottle, nasal cannula, and filter set included'
    ],
    features: ['Continuous 24x7 operation', 'Quiet compressor', 'Low purity alarm', 'Emergency delivery in Bangalore'],
    popular: true,
    badge: 'High Demand Rental',
    indicativePrice: 'Sale & Monthly Rental (Doorstep Delivery)'
  },
  {
    id: 'oxygen-cylinder-set',
    code: 'OXYGEN CYLINDER KIT',
    name: 'Medical Oxygen Cylinder Kit (B-Type & D-Type Jumbo)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'both',
    mechanism: 'Standard',
    tagline: 'Complete Oxygen Cylinder Setup with Medical Regulator, Flowmeter & Mask',
    dimensions: 'B-Type (10L / 1320L gas) or D-Type Jumbo (47L / 7000L gas)',
    keySpecs: [
      'High-pressure seamless carbon steel/aluminium alloy cylinder',
      'FA valve with brass click-stop regulator',
      'Humidifier bottle and transparent flowmeter (0-15 LPM)',
      'Trolley cart included for safe transit'
    ],
    features: ['Emergency backup oxygen', 'Certified hydrostatic tested cylinders', 'Immediate refill support'],
    popular: true,
    indicativePrice: 'Instant Booking'
  },
  {
    id: 'bipap-cpap-machine',
    code: 'BIPAP / CPAP',
    name: 'Auto BiPAP & CPAP Machine (Non-Invasive Ventilator)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'both',
    mechanism: 'Digital',
    tagline: 'Advanced Respiratory Ventilation for Sleep Apnea, COPD & Post-Extubation',
    dimensions: 'Compact bedside medical ventilator with heated humidifier',
    keySpecs: [
      'Modes: CPAP, S (Spontaneous), T (Timed), S/T, APCV',
      'Pressure Range: IPAP 4-30 cmH2O, EPAP 4-25 cmH2O',
      'Integrated heated humidifier prevents airway dryness',
      'Data recording via SD card / Cloud monitoring for physician review'
    ],
    features: ['Includes Full Face / Nasal Mask & Tubing', 'On-site technician titration setup'],
    popular: true,
    badge: 'Critical Home Care',
    indicativePrice: 'Sale & Monthly Rental'
  },
  {
    id: 'multipara-monitor',
    code: 'MULTIPARA MONITOR',
    name: 'Multipara Patient Monitor (5-Para / 7-Para)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'both',
    mechanism: 'Digital',
    tagline: 'High-Resolution Vital Signs Monitor with Audio-Visual Smart Alarms',
    dimensions: '12.1-inch color TFT display with multi-waveform view',
    keySpecs: [
      'Parameters: ECG (3/5 Lead), SpO2 (Pulse Oximetry), NIBP (Non-Invasive BP), Respiration, Temperature',
      'Optional: EtCO2, Dual IBP for advanced ICU/OT monitoring',
      'Rechargeable lithium battery backup (4+ hours)',
      'Audible and visual alarms for arrhythmia and apnea detection'
    ],
    features: ['Essential for ICU & home ICU setup', 'Complete probe cable set included'],
    popular: true,
    badge: 'Hospital & Home ICU',
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'single-jar-suction',
    code: 'SINGLE JAR SUCTION',
    name: 'Electric Phlegm Suction Machine (Single Jar)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'both',
    mechanism: 'Digital',
    tagline: 'Compact High-Vacuum Phlegm & Mucus Suction Unit for Tracheostomy & Home Patients',
    dimensions: 'Portable tabletop suction unit',
    keySpecs: [
      'Pumping rate: ≥ 15 L/min with negative pressure up to -0.075 MPa',
      '1000 ml autoclavable polycarbonate bottle with overflow safety valve',
      'Stepless vacuum adjustment regulator gauge',
      'Oil-free maintenance-free lubrication piston pump'
    ],
    features: ['Essential for tracheostomy care', 'Anti-overflow protection', 'Whisper quiet'],
    popular: true,
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'double-jar-suction',
    code: 'DOUBLE JAR SUCTION',
    name: 'High Vacuum Surgical Suction Machine (Double Jar)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'both',
    mechanism: 'Digital',
    tagline: 'Heavy Duty 2 × 2500ml Surgical Suction Unit for Operation Theatre & Emergency',
    dimensions: 'Wheeled hospital mobile cart unit',
    keySpecs: [
      'High pumping rate: ≥ 20-30 L/min, Max negative pressure ≥ 0.09 MPa',
      'Two 2500 ml glass / polycarbonate jars with automatic overflow cutoff',
      'Foot pedal switch and hand switch dual control',
      'Castors for easy movement across surgery rooms'
    ],
    features: ['Foot pedal control', 'Dual 2.5L capacity', 'Heavy continuous duty'],
    indicativePrice: 'OT Proposal'
  },
  {
    id: 'air-mattress-kit',
    code: 'AIR MATTRESS',
    name: 'Bed Sore Prevention Kit (Bubble & Tubular Cell Air Mattress)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'both',
    mechanism: 'Digital',
    tagline: 'Alternating Pressure Relief Air Mattress with Ultra-Silent Air Pump',
    dimensions: 'Standard single hospital bed size (200 × 90 cm)',
    keySpecs: [
      'Nosor bubble mat or Heavy-Duty Tubular cell mattress',
      'Alternating dual airway cycle redistributes body pressure every 6-10 minutes',
      'Variable pressure dial pump adjusts firmness to patient weight',
      'Waterproof, breathable medical grade PVC / TPU'
    ],
    features: ['Prevents and heals Stage 1-4 decubitus ulcers', '24x7 silent pump'],
    popular: true,
    badge: 'Essential for Bedridden Care',
    indicativePrice: 'Immediate Sale & Rental'
  },
  {
    id: 'infant-radiant-warmer',
    code: 'INFANT WARMER',
    name: 'Infant Radiant Warmer',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: 'Microprocessor Controlled Neonatal Temperature Regulation System',
    dimensions: 'Mobile NICU overhead warming station',
    keySpecs: [
      'Quartz infrared ceramic heating element with parabolic reflector',
      'Skin sensor and manual control modes with LED display',
      'Audio-visual alarms for temp deviation, sensor failure, and power failure',
      'Integrated acrylic bassinet with X-Ray cassette tray'
    ],
    features: ['NICU grade microprocessor warming', 'Adjustable lamp angle'],
    indicativePrice: 'Maternity Hospital Proposal'
  },
  {
    id: 'nebulizer-piston',
    code: 'NEBULIZER',
    name: 'Medical Compressor Nebulizer (Piston & Ultrasonic)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: 'Efficient Medication Aerosolization for Asthma, Bronchitis & Wheezing',
    dimensions: 'Compact home / clinic unit',
    keySpecs: ['Fine MMAD particle size < 3 µm for deep lung penetration', 'Low residual medication chamber', 'Adult and pediatric masks included'],
    features: ['Fast nebulization rate', 'Reliable piston motor'],
    indicativePrice: 'Affordable OTC Supply'
  },
  {
    id: 'ambu-bag-silicone',
    code: 'AMBU BAG',
    name: 'Manual Silicone Resuscitator (Ambu Bag Kit)',
    category: 'respiratory-critical',
    categoryLabel: 'Respiratory & ICU Care',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Autoclavable 100% Medical Grade Silicone Resuscitation Bag with Reservoir',
    dimensions: 'Available in Adult (1500ml), Child (550ml), and Infant (280ml) sizes',
    keySpecs: ['100% Latex-free transparent medical silicone', 'Pressure limiting 60 / 40 cmH2O relief valve', 'Oxygen reservoir bag and tubing'],
    features: ['Autoclavable at 134°C', 'High recoil response'],
    indicativePrice: 'In Stock'
  },

  // --- DIAGNOSTICS & MONITORING (Page 9) ---
  {
    id: 'pulse-oximeter',
    code: 'PULSE OXIMETER',
    name: 'Fingertip OLED Pulse Oximeter',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics & Monitoring',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: 'Instant Blood Oxygen Saturation (SpO2), Pulse Rate & Plethysmograph',
    dimensions: 'Pocket portable with lanyard',
    keySpecs: [
      'Dual-color OLED multi-directional display',
      'Accurate reading even during low perfusion (PI index display)',
      'Auto power-off after 8 seconds idle to conserve battery'
    ],
    features: ['SpO2 + Pulse Rate + Bar Graph', 'Fast 5-second reading'],
    popular: true,
    indicativePrice: 'Ready Stock'
  },
  {
    id: 'sphygmomanometer-dial',
    code: 'BP APPARATUS',
    name: 'Blood Pressure Monitor (Manual Dial Aneroid & Digital)',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics & Monitoring',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Clinical Precision Blood Pressure Apparatus with Stethoscope & Nylon Cuff',
    dimensions: 'Desk, Wall or Handheld options',
    keySpecs: [
      'Heavy-duty non-stop pin manometer gauge or one-touch digital fuzzy logic',
      'Latex-free bladder and precision air release deflation valve',
      'Adult size durable velcro cuff'
    ],
    features: ['Clinical grade calibration', 'Clear contrast dial'],
    indicativePrice: 'Wholesale & Retail'
  },
  {
    id: 'fetal-doppler',
    code: 'FETAL DOPPLER',
    name: 'Pocket Fetal Doppler with LCD Display (AccuSure)',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics & Monitoring',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: 'High Sensitivity 2.5 MHz Ultrasound Fetal Heart Rate (FHR) Detector',
    dimensions: 'Compact handheld with waterproof interchangeable probe',
    keySpecs: ['Real-time FHR digital display with backlight', 'Built-in speaker with volume control and headphone jack', 'Noise reduction filter'],
    features: ['Accurate fetal heartbeat detection from 12th week', 'High acoustic clarity'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'glucometer-kit',
    code: 'GLUCO METER',
    name: 'Digital Blood Glucose Monitoring System Kit',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics & Monitoring',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: 'Fast 5-Second Blood Sugar Tester with Test Strips & Lancing Device',
    dimensions: 'Travel pouch kit',
    keySpecs: ['Tiny 0.5 µL blood sample required', '500 test memory with date/time and 7/14/30 day averages', 'No coding required technology'],
    features: ['Includes meter, 50 strips, lancing pen and lancets'],
    indicativePrice: 'Ready Stock'
  },
  {
    id: 'infrared-thermometer',
    code: 'IR THERMOMETER',
    name: 'Non-Contact Infrared Forehead Thermometer',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics & Monitoring',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: '1-Second Contactless Fever Temperature Scanner with Color Backlight',
    dimensions: 'Ergonomic pistol grip',
    keySpecs: [
      'Measurement distance: 3-5 cm without skin contact',
      'Tri-color fever backlight: Green (Normal), Yellow (Slight Fever), Red (High Fever)',
      '32 memory recall and Body / Object mode switch'
    ],
    features: ['Hygienic no-touch scanning', 'Fever audio alarm'],
    indicativePrice: 'Bulk & Retail Supply'
  },
  {
    id: 'digital-weighing-scale-baby',
    code: 'WEIGHING SCALE',
    name: 'Samso Bloom Digital Baby & Adult Weighing Scale',
    category: 'diagnostics',
    categoryLabel: 'Diagnostics & Monitoring',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: 'Dual Purpose High-Precision Scale with Ergonomic Curved Baby Tray',
    dimensions: 'Tray fits infants; converts to standing adult scale up to 100 kg',
    keySpecs: ['10g infant precision graduation with Tare weight hold function', 'Large backlit LCD screen', 'Safe rounded contour edges'],
    features: ['Tracks infant weight growth accurately', 'Converts to adult scale'],
    indicativePrice: 'In Stock'
  },

  // --- SURGICAL, STERILIZATION & CONSUMABLES (Page 10, 11) ---
  {
    id: 'surgical-instruments-set',
    code: 'SURGICAL INSTRUMENTS',
    name: 'Surgical Hand Instruments Set (Scissors, Artery & Mayo)',
    category: 'instruments-sterilization',
    categoryLabel: 'Surgical & Sterilization',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Surgical Grade German Stainless Steel Mayo Scissors, Artery Forceps & Sponge Holders',
    dimensions: 'Standard surgical lengths (5", 6", 7", 8")',
    keySpecs: [
      'High grade corrosion resistant surgical stainless steel',
      'Tungsten carbide inserts available for long lasting cutting edge',
      'Smooth box joint construction and satin non-reflective finish'
    ],
    features: ['Autoclavable and reusable', 'Precision micro serrations'],
    indicativePrice: 'Single & Kit Packs'
  },
  {
    id: 'stainless-steel-holloware',
    code: 'SS HOLLOWARE',
    name: 'SS Holloware (Kidney Trays, Instrument Trays & Dressing Bins)',
    category: 'instruments-sterilization',
    categoryLabel: 'Surgical & Sterilization',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Heavy Gauge Seamless Stainless Steel Kidney Trays and Instrument Boxes with Lids',
    dimensions: 'Kidney trays (6", 8", 10", 12") · Instrument trays with covers (various sizes)',
    keySpecs: ['100% seamless deep-drawn 304 SS construction without crevices', 'Smooth rolled edges for safety', 'Autoclave safe'],
    features: ['Corrosion proof', 'Essential hospital holloware'],
    popular: true,
    indicativePrice: 'Wholesale Rates'
  },
  {
    id: 'autoclave-sterilizer',
    code: 'AUTOCLAVE',
    name: 'Vertical High-Pressure Steam Autoclave Sterilizer',
    category: 'instruments-sterilization',
    categoryLabel: 'Surgical & Sterilization',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Electric Vertical Steam Sterilizer with Pressure Gauge & Safety Valves',
    dimensions: 'Available in 20L, 35L, 50L capacity',
    keySpecs: ['Heavy stainless steel chamber and lid with silicone gasket', 'Operating pressure: 15-20 PSI at 121°C - 134°C', 'Double safety valve and steam release tap'],
    features: ['Complete sterilization of surgical tools', 'Immersion heater with cord'],
    indicativePrice: 'Hospital Quote'
  },
  {
    id: 'fumigator-fogger',
    code: 'FUMIGATOR & FOGGER',
    name: 'OT Fumigator & ULV Cold Fogger Machine',
    category: 'instruments-sterilization',
    categoryLabel: 'Surgical & Sterilization',
    availability: 'sale',
    mechanism: 'Digital',
    tagline: 'Operation Theatre & Hospital Ward Airborne Decontamination Aerosol Fogger',
    dimensions: 'Stainless steel aerosol generator unit with timer',
    keySpecs: [
      'Produces sub-micron aerosol particles (0.5 to 10 microns) that stay airborne to sanitize walls & air',
      'Covers 20,000 cu. ft. in under 30 minutes',
      'Heavy duty motor with automated shut-off timer'
    ],
    features: ['OT terminal sterilization', 'Disinfectant mist aerosol'],
    popular: true,
    indicativePrice: 'In Stock'
  },
  {
    id: 'bio-hazard-dustbins',
    code: 'BIO-HAZARD BINS',
    name: 'Biomedical Waste Dust Bins with Foot Pedal & Trolley',
    category: 'instruments-sterilization',
    categoryLabel: 'Surgical & Sterilization',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Color-Coded Hospital Waste Segregation Bins (Yellow, Red, Blue, Black)',
    dimensions: 'Available in 15L, 30L, 60L, 120L with or without mobile trolley wheels',
    keySpecs: ['100% Virgin UV stabilized plastic', 'Hands-free foot pedal operated lid', 'Compliant with Biomedical Waste Management Rules'],
    features: ['Color coded segregation', 'Biohazard symbol imprinted'],
    indicativePrice: 'Direct Hospital Pricing'
  },
  {
    id: 'hospital-waiting-chairs',
    code: 'WAITING CHAIRS',
    name: 'Hospital Waiting Lounge Chairs (3-Seater & 4-Seater)',
    category: 'ot-furniture',
    categoryLabel: 'Ward & OT Furniture',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Heavy-Duty Airport / Hospital Waiting Chairs with Stainless Steel Beam',
    dimensions: '3-Seater: 1800 mm (L) · 4-Seater: 2380 mm (L)',
    keySpecs: ['Perforated cold-rolled steel / stainless steel seats with anti-rust coat', 'Die-cast chrome armrests and legs', 'Sturdy steel cross beam'],
    features: ['Heavy patient seating load', 'Easy cleaning and sanitation'],
    indicativePrice: 'Clinic & Hospital Quote'
  },
  {
    id: 'adult-diapers-hygiene',
    code: 'ADULT DIAPERS & UNDERPADS',
    name: 'Adult Diapers & Underpads (Dignity, Seni & Poochie)',
    category: 'instruments-sterilization',
    categoryLabel: 'Surgical & Sterilization',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Super Absorbent Incontinence Adult Diapers, Bed Underpads & Wet Wipes',
    dimensions: 'Sizes Medium, Large, Extra Large (M, L, XL)',
    keySpecs: ['Gel technology with anti-bacterial odour control', 'Diamond embossed underpads prevent bed wetting', 'Aloe vera enriched hypoallergenic wipes'],
    features: ['Bulk hospital cases and individual packs', 'Continuous supply contract'],
    indicativePrice: 'Bulk Supply'
  },

  // --- ACCESSORIES & SPARES (Page 7) ---
  {
    id: 'head-leg-bows',
    code: 'MEDFINITY 059-062',
    name: 'Molded PP Head & Leg Bows (Economy, Premium, Excel Plus)',
    category: 'accessories',
    categoryLabel: 'Beds Accessories & Spares',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Detachable Engineering Plastic Head & Foot Boards for Hospital Beds',
    dimensions: 'Standard hospital bed width lock-in pins',
    keySpecs: ['Approx wt: 5.5 to 9.8 kgs per set', 'Molded engineering polymer with lock release hooks', 'Easy wipe disinfectant surface'],
    features: ['Sets of 2 (Head and Foot)', 'Universal bed fitting'],
    indicativePrice: 'In Stock'
  },
  {
    id: 'tuck-away-side-rails',
    code: 'MEDFINITY 063-067',
    name: 'Bed Side Railings (Tuck-Away ABS / Collapsible Aluminium)',
    category: 'accessories',
    categoryLabel: 'Beds Accessories & Spares',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Replacement Safety Side Rails: ABS Tuck-Away (Set of 4) or Steel/Aluminium (Set of 2)',
    dimensions: 'Standard hospital mounting brackets',
    keySpecs: ['ABS polymer split rails or heavy-duty collapsible aluminium with red release button', 'Built-in angle degree indicators available'],
    features: ['Zero gap patient entrapment protection', 'One hand release'],
    indicativePrice: 'Available'
  },
  {
    id: 'hospital-mattress-foam',
    code: 'MEDFINITY 068-069',
    name: 'Hospital Medical Mattresses (Single & Multi-Fold)',
    category: 'accessories',
    categoryLabel: 'Beds Accessories & Spares',
    availability: 'both',
    mechanism: 'Standard',
    tagline: 'High-Density 4-Section & 2-Section Medical Foam Mattress with Rexine Cover',
    dimensions: 'Standard 4-section bed sizes: 78" × 36" × 4" thick',
    keySpecs: ['Heavy density 32-40 density polyurethane foam', 'Waterproof, fire-retardant Rexine with heavy duty zipper', 'Articulates seamlessly with motorized beds'],
    features: ['Articulates with Fowler & ICU beds', 'Washable cover'],
    popular: true,
    indicativePrice: 'Sale & Rental'
  },
  {
    id: 'castors-central-locking',
    code: 'MEDFINITY 073-076',
    name: 'Hospital Bed Castors (Central Locking & Twin Wheels 125mm)',
    category: 'accessories',
    categoryLabel: 'Beds Accessories & Spares',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Precision Ball Bearing Swivel Castors for ICU Beds and Medical Trolleys',
    dimensions: '125 mm (5 inch) diameter stem / plate mount',
    keySpecs: ['Central locking hex-cam brake linkage or individual pedal brakes', 'Polyurethane non-marking floor friendly tread', 'Dust-cover shielded bearings'],
    features: ['Quiet smooth roll', 'Thread guard protection'],
    indicativePrice: 'Wholesale & Retail'
  },
  {
    id: 'expandable-food-tray',
    code: 'MEDFINITY 072',
    name: 'ABS Expandable Food Tray & Bed Crank',
    category: 'accessories',
    categoryLabel: 'Beds Accessories & Spares',
    availability: 'sale',
    mechanism: 'Standard',
    tagline: 'Bed Rail Mounted Telescopic Eating Tray for In-Bed Patient Dining',
    dimensions: 'Adjusts to fit bed railing widths',
    keySpecs: ['Molded ABS plastic with cup holder indent', 'Clamps securely onto side railings', 'Dishwasher safe and lightweight'],
    features: ['No floor space needed', 'Quick snap-on'],
    indicativePrice: 'In Stock'
  }
];

export const SERVICE_HIGHLIGHTS = [
  {
    title: 'Medical Equipments for Sale & Rental',
    desc: 'Wide inventory of ICU beds, oxygen concentrators, wheelchairs, and monitors available for immediate sale or monthly home healthcare rental.',
    icon: 'Truck'
  },
  {
    title: 'Biomedical Servicing & Repairs',
    desc: 'Experienced technical team for prompt breakdown repair, actuator replacement, calibration, and Annual Maintenance Contracts (AMC).',
    icon: 'Wrench'
  },
  {
    title: 'Turnkey Operation Theatre Setup',
    desc: 'End-to-end OT infrastructure including motorized surgical tables, LED OT lights, anesthesia carts, scrub sinks, and medical gas lines.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Hospital Procurement & Consulting',
    desc: 'Comprehensive ward furnishing, patient comfort accessories, biomedical waste management, and bulk institutional supply.',
    icon: 'Building2'
  }
];

export const RENTAL_POPULAR_PACKS = [
  {
    id: 'icu-at-home',
    title: 'Comprehensive ICU at Home Setup',
    recommendedFor: 'Critical Care, Stroke Recovery, Tracheostomy Patients',
    items: [
      '5-Function or 3-Function Motorized ICU Bed',
      '5-Para Multipara Vital Signs Monitor',
      'Medical Oxygen Concentrator (5L / 10L)',
      'Alternating Pressure Air Mattress',
      'Electric Suction Machine (Single/Double Jar)'
    ],
    startingAt: 'Flexible Monthly Rent',
    badge: 'Doctor Recommended'
  },
  {
    id: 'post-surgery-care',
    title: 'Post-Surgery & Fracture Recovery Pack',
    recommendedFor: 'Hip/Knee Replacement, Spine Surgery, Orthopedic Rehab',
    items: [
      'Motorized 2-Function Fowler Bed with Side Rails',
      'High-Density Waterproof Medical Mattress',
      'Gas-Spring Adjustable Overbed Dining Table',
      'Folding Wheelchair / Commode Chair',
      'Aluminium Reciprocating Walker'
    ],
    startingAt: 'Fast Home Setup',
    badge: 'Most Popular'
  },
  {
    id: 'elderly-respiratory',
    title: 'Senior Respiratory & Mobility Pack',
    recommendedFor: 'COPD, Chronic Bronchitis, Elderly Assisted Living',
    items: [
      'High-Purity 5L Oxygen Concentrator with Nebulizer',
      'Pulse Oximeter & Digital Blood Pressure Monitor',
      'Wheeled Commode Chair (Rolls over WC)',
      '4-Wheel Rollator with Rest Seat & Brakes'
    ],
    startingAt: 'Same-Day Delivery in Bengaluru',
    badge: 'Fast Dispatch'
  }
];
