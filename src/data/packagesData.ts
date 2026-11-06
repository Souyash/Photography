import { InvestmentPackage, PackageAddon } from '../types';

export const INVESTMENT_PACKAGES: InvestmentPackage[] = [
  {
    id: 'silver-half-day',
    tier: 'Collection I',
    name: 'The Intimate Heirloom',
    subtitle: 'Elopements, Private Ceremonies & Editorial Portraits',
    price: 3800,
    tagline: 'Focused, poetic documentation crafted for quiet romances and intimate gatherings.',
    highlight: '6 Hours Coverage · Single Lead Artist',
    idealFor: 'Intimate civil weddings, luxury elopements, or editorial portrait commissions (up to 40 guests).',
    deliverables: [
      'Up to 6 hours continuous coverage by Principal Artist',
      '350+ individually color-graded, high-resolution master photographs',
      'Full personal printing rights and private client proofing suite',
      'Curated 48-hour "First Look" sneak peek (25+ images)',
      'High-speed digital delivery with 10-year cloud vault preservation',
      'Location and styling consultation prior to event'
    ]
  },
  {
    id: 'gold-full-day',
    tier: 'Collection II',
    name: 'The Grand Celebration',
    subtitle: 'Complete Full-Day Wedding Day Narrative',
    price: 6800,
    featured: true,
    tagline: 'Our signature full-immersion experience capturing morning preparations through midnight dancing.',
    highlight: '10 Hours Coverage · Two Master Photographers · Drone Suite',
    idealFor: 'Full-scale luxury weddings requiring complete, multi-angle documentary storytelling (80–250 guests).',
    deliverables: [
      'Up to 10 hours comprehensive dual-photographer coverage',
      'Principal Artist accompanied by seasoned Senior Associate',
      '650+ meticulously graded signature images with fine-art retouching',
      'Licensed 4K aerial drone perspective captures (venue permitting)',
      'Complimentary 90-minute sunset engagement session included',
      'Handcrafted 12x12" Italian leather heirloom album (30 archival spreads)',
      'Curated 48-hour expedited highlight delivery for family & press',
      'White-glove online guest gallery with integrated fine art print store'
    ]
  },
  {
    id: 'platinum-destination',
    tier: 'Collection III',
    name: 'The Multi-Day Odyssey',
    subtitle: 'Worldwide Destination Weddings & Weekend Celebrations',
    price: 11500,
    tagline: 'Uncompromising couture storytelling for multi-day weekend festivities across the globe.',
    highlight: '3-Day Immersion · Two Artists + Assistant · Full Analog Film Coverage',
    idealFor: 'Multi-day destination weddings (Lake Como, Amalfi Coast, Provence, Kyoto, St. Moritz, Aspen).',
    deliverables: [
      'Complete 3-day coverage (Welcome Cocktail, Wedding Day, & Post-Wedding Brunch/Boat Tour)',
      'Full coverage team: Principal, Second Lead, and Lighting/Logistics Technician',
      '1,000+ hand-curated and cinema-graded photographs',
      'Authentic Medium Format 120mm & 35mm Analog Film integration (Kodak Portra / Ilford)',
      'Full drone aerial cinematography & still suite',
      'Two bespoke 14x14" French velvet or Tuscan leather master heirloom albums',
      'Two companion 8x8" parent keepsake albums',
      'All travel & logistics coordination included worldwide'
    ]
  },
  {
    id: 'custom-editorial',
    tier: 'Bespoke Atelier',
    name: 'Editorial & Commercial',
    subtitle: 'Fashion Lookbooks, High-Jewelry & Private Galas',
    price: 4500,
    tagline: 'High-concept creative direction, moodboard generation, and cinematic commercial production.',
    highlight: 'Day Rate or Campaign Scope · Commercial Usage Rights',
    idealFor: 'Fashion houses, luxury hotel brands, private galas, and architectural commissions.',
    deliverables: [
      'Full Day Production (8 Hours) with high-end strobe/continuous lighting kit',
      'Creative direction, treatment decks, and shot-list curation',
      'Medium format 100MP files for massive billboards and print campaigns',
      'Full worldwide commercial licensing and copyright clearance',
      'Colorist-calibrated color profiles matching brand guidelines',
      'On-set tethered monitoring station for art directors and clients'
    ]
  }
];

export const PACKAGE_ADDONS: PackageAddon[] = [
  {
    id: 'analog-film',
    name: 'Authentic 35mm & 120mm Film Coverage',
    description: 'Add vintage organic character with 8 hand-developed rolls of Kodak Portra 400 & Ilford HP5.',
    price: 650
  },
  {
    id: 'drone-aerial',
    name: 'Licensed 4K Aerial Drone Coverage',
    description: 'Architectural perspectives of your venue, landscape reveals, and dramatic couple portraits.',
    price: 550
  },
  {
    id: 'extra-hours',
    name: 'Overtime Coverage (Per Hour)',
    description: 'Extend the celebration into late night after-party hours with two photographers active.',
    price: 450
  },
  {
    id: 'parent-albums',
    name: 'Pair of Fine Art Parent Albums (8x8")',
    description: 'Handcrafted matching duplicate albums in linen or Italian buckram for parents.',
    price: 800
  },
  {
    id: 'rush-delivery',
    name: 'White-Glove 7-Day Fast Delivery',
    description: 'Bypass standard queue to receive your complete finalized master gallery in just 7 days.',
    price: 900
  }
];

