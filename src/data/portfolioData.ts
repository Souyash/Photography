import { PortfolioItem } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'como-vows',
    title: 'Heirloom Vows at Villa Balbianello',
    category: 'weddings',
    location: 'Lake Como, Italy',
    year: '2024',
    aspectRatio: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1400',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=40&w=400',
    story: 'An intimate sunset exchange framed by ancient cypress trees and tranquil alpine waters. Captured with gentle natural light reflecting off the villa stone.',
    client: 'Eleanor & Julian',
    specs: {
      camera: 'Leica M11-P',
      lens: 'Noctilux-M 50mm f/0.95 ASPH',
      settings: 'f/1.2 · 1/1250s · ISO 64'
    },
    featured: true,
    tags: ['Destination Wedding', 'Lake Como', 'Black Tie', 'Golden Hour']
  },
  {
    id: 'editorial-noir',
    title: 'The Architecture of Form',
    category: 'editorial',
    location: 'Milan, Italy',
    year: '2024',
    aspectRatio: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=1400',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=40&w=400',
    story: 'Commissioned fashion editorial exploring high-contrast brutalist shadows and flowing silk drapery for the Autumn Haute Couture capsule.',
    client: 'Atelier Valenti',
    specs: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 80mm f/1.9',
      settings: 'f/2.8 · 1/400s · ISO 100'
    },
    featured: true,
    tags: ['Editorial', 'Haute Couture', 'Studio & Street', 'Vogue Feature']
  },
  {
    id: 'santorini-twilight',
    title: 'Cliffside Golden Slumber',
    category: 'pre-wedding',
    location: 'Oia, Santorini, Greece',
    year: '2024',
    aspectRatio: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=40&w=500',
    story: 'A gentle dawn session along the volcanic caldera. The cool morning mist and early sunbeams sculpted soft pastel tones across the Aegean sea.',
    client: 'Serena & Matteo',
    specs: {
      camera: 'Sony A1',
      lens: 'FE 35mm f/1.4 GM',
      settings: 'f/1.8 · 1/1600s · ISO 100'
    },
    featured: true,
    tags: ['Pre-Wedding', 'Santorini', 'Destination', 'Pastel Light']
  },
  {
    id: 'monaco-gala',
    title: 'Nocturne: Yacht Club Hermès Gala',
    category: 'events',
    location: 'Monte Carlo, Monaco',
    year: '2024',
    aspectRatio: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=85&w=1600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=40&w=500',
    story: 'Low-light ambient documentation of the annual Monaco maritime charity gala. Preserving the luminescence of chandeliers and candlelight.',
    client: 'Fondation de Monaco',
    specs: {
      camera: 'Leica SL3',
      lens: 'Summilux-SL 50mm f/1.4',
      settings: 'f/1.4 · 1/160s · ISO 1600'
    },
    featured: false,
    tags: ['Gala', 'High Society', 'Black Tie', 'Monaco']
  },
  {
    id: 'paris-embrace',
    title: 'Rain Whispers on Pont Alexandre III',
    category: 'pre-wedding',
    location: 'Paris, France',
    year: '2024',
    aspectRatio: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=85&w=1400',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=40&w=400',
    story: 'Spontaneous summer drizzle over the Seine turned the bridge into a mirror of gilded streetlamps and romantic cinematic silhouettes.',
    client: 'Chloe & Arthur',
    specs: {
      camera: 'Leica M11',
      lens: 'Apo-Summicron-M 35mm f/2 ASPH',
      settings: 'f/2.0 · 1/500s · ISO 200'
    },
    featured: true,
    tags: ['Paris', 'Pre-Wedding', 'Rain Session', 'Cinematic']
  },
  {
    id: 'highland-reverie',
    title: 'Ethereal Shadows of Glen Coe',
    category: 'weddings',
    location: 'Scottish Highlands, UK',
    year: '2024',
    aspectRatio: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=85&w=1600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=40&w=500',
    story: 'A stormy, dramatic elopement beneath ancient Scottish peaks. Wind billowing bridal lace against dark basalt volcanic walls.',
    client: 'Isla & Callum',
    specs: {
      camera: 'Fujifilm GFX 100 II',
      lens: 'GF 110mm f/2 R LM WR',
      settings: 'f/2.2 · 1/1000s · ISO 160'
    },
    featured: true,
    tags: ['Elopement', 'Highlands', 'Dramatic Mood', 'Wild Nature']
  },
  {
    id: 'tokyo-neon-fashion',
    title: 'Cyberpunk Silhouette & Silk',
    category: 'editorial',
    location: 'Ginza & Shibuya, Tokyo',
    year: '2024',
    aspectRatio: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1400',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=40&w=400',
    story: 'Midnight portraiture blending Japanese traditional Obi textiles with hyper-modern architectural reflections and wet asphalt neon tones.',
    client: 'Vogue Japan Special Edition',
    specs: {
      camera: 'Sony A1',
      lens: 'FE 85mm f/1.2 GM Prototype',
      settings: 'f/1.2 · 1/320s · ISO 400'
    },
    featured: false,
    tags: ['Editorial', 'Tokyo', 'Midnight Street', 'Avant-Garde']
  },
  {
    id: 'kyoto-sanctuary',
    title: 'Ceremony of the Bamboo Grove',
    category: 'weddings',
    location: 'Kyoto, Japan',
    year: '2024',
    aspectRatio: 'square',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=40&w=400',
    story: 'A serene Shinto shrine blessing under century-old cedar canopies. Dappled jade light filtered softly through silk kimono folds.',
    client: 'Aoi & Kenji',
    specs: {
      camera: 'Leica M11-P',
      lens: 'Summilux-M 35mm f/1.4',
      settings: 'f/1.4 · 1/640s · ISO 100'
    },
    featured: false,
    tags: ['Kyoto', 'Tradition', 'Intimate Wedding', 'Shinto']
  },
  {
    id: 'venice-reflection',
    title: 'Canal Whispers at Dawn',
    category: 'pre-wedding',
    location: 'Grand Canal, Venice, Italy',
    year: '2024',
    aspectRatio: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=85&w=1400',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=40&w=400',
    story: 'Private wooden launch gliding across San Giorgio Maggiore before tourist traffic awakened. Silvery morning mist and timeless elegance.',
    client: 'Gwen & Nicholas',
    specs: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 55mm f/2.5 V',
      settings: 'f/2.8 · 1/800s · ISO 64'
    },
    featured: false,
    tags: ['Venice', 'Pre-Wedding', 'Vintage Wooden Boat', 'Canal']
  },
  {
    id: 'art-biennale-summit',
    title: 'Venice Architecture Biennale Vernissage',
    category: 'events',
    location: 'Giardini della Biennale, Italy',
    year: '2024',
    aspectRatio: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=85&w=1600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=40&w=500',
    story: 'Documenting international architects, patrons, and visionaries interacting with kinetic light pavilions during the private preview evening.',
    client: 'La Biennale di Venezia',
    specs: {
      camera: 'Sony A7R V',
      lens: 'FE 24-70mm f/2.8 GM II',
      settings: 'f/2.8 · 1/250s · ISO 800'
    },
    featured: false,
    tags: ['Biennale', 'Curated Event', 'Architecture', 'Culture']
  },
  {
    id: 'provence-chateau',
    title: 'Lavender Breeze at Château de Tourreau',
    category: 'weddings',
    location: 'Provence, France',
    year: '2023',
    aspectRatio: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=85&w=1400',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=40&w=400',
    story: 'Warm French summer breezes scented with lavender, long candlelit dinner tables in the courtyard, and spontaneous dancing under fairy lights.',
    client: 'Camille & Antoine',
    specs: {
      camera: 'Leica M11',
      lens: 'Noctilux-M 50mm f/1.2',
      settings: 'f/1.4 · 1/1000s · ISO 100'
    },
    featured: true,
    tags: ['Provence', 'Château Wedding', 'Candlelight Dinner', 'Summer']
  },
  {
    id: 'cappadocia-dawn',
    title: 'Constellations of Hot Air Balloons',
    category: 'pre-wedding',
    location: 'Göreme Valley, Cappadocia',
    year: '2023',
    aspectRatio: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=1600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=40&w=500',
    story: 'Perched on a natural rock terrace at 5:30 AM as hundreds of hot air balloons rose simultaneously into the saffron-colored sunrise sky.',
    client: 'Aria & Liam',
    specs: {
      camera: 'Sony A1',
      lens: 'FE 70-200mm f/2.8 GM OSS II',
      settings: 'f/4.0 · 1/1250s · ISO 200'
    },
    featured: false,
    tags: ['Cappadocia', 'Pre-Wedding', 'Sunrise', 'Panoramic']
  }
];

