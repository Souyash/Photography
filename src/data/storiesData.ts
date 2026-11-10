import { StorySpread } from '../types';

export const FEATURED_STORIES: StorySpread[] = [
  {
    id: 'story-lake-como',
    title: 'Echoes of the Lario',
    subtitle: 'The 3-Day Wedding of Isabella & Alexander',
    category: 'Lake Como, Italy',
    location: 'Villa Balbiano & Villa d’Este',
    date: 'September 2024',
    quote: 'From the private Riva wooden boat arrivals to dinner under chandeliers suspended in ancient olive groves, every frame felt like an Italian neo-realist cinema still.',
    quoteAuthor: 'Isabella & Alexander, Bride & Groom',
    narrative: [
      'Set against the emerald water of Lake Como, Isabella and Alexander envisioned a three-day celebration blending Old World aristocratic charm with effortless modern glamour.',
      'Our coverage commenced with a sunset welcome regatta aboard antique Riva boats, capturing the golden ripples and windblown cashmere of guests laughing across the lake.',
      'The wedding ceremony at Villa Balbiano honored natural light: soft filtered afternoon sunshine cascading through baroque balustrades and centuries-old cypress trees.',
      'By midnight, 150 bespoke taper candles transformed the lakefront greenhouse into an ethereal haven for dinner and after-hours swing dancing.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200',
    palette: ['#1C2321', '#A48248', '#CBB994', '#EAE6E1'],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1000',
        caption: 'The exchange of bespoke vows atop Villa Balbiano terrace.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=85&w=1200',
        caption: 'Sunset cruise aboard the restored 1968 Riva Aquarama.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1000',
        caption: 'Table setting details with hand-lettered parchment and olive branches.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=85&w=1200',
        caption: 'First dance illuminated purely by 200 beeswax taper candles.',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'story-kyoto-zen',
    title: 'The Silent Canopy',
    subtitle: 'Ceremony of Tranquility in Arashiyama',
    category: 'Kyoto, Japan',
    location: 'Tenryu-ji & Private Cedar Estate',
    date: 'May 2024',
    quote: 'Sabyasachi’s intuitive command of quiet, reverent moments produced portraits that evoke our ancestors while celebrating our modern journey.',
    quoteAuthor: 'Hana & Kenji, Kyoto',
    narrative: [
      'Nestled deep inside the Arashiyama bamboo sanctuary, Hana and Kenji celebrated an intimate wedding steeped in traditional Japanese heritage and contemporary minimalism.',
      'We operated exclusively with silent electronic shutters and ultra-fast prime lenses to preserve the sanctity of the Shinto ritual and water cleansing ceremonies.',
      'Morning dew upon ancient moss gardens created an incandescent glow, softening contrast and rendering skin tones with remarkable lifelike delicacy.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1200',
    palette: ['#1A2218', '#384B34', '#C2A676', '#EDEBE6'],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1000',
        caption: 'Handcrafted silk kimono details woven by fifth-generation Nishijin artisans.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=85&w=1200',
        caption: 'Passing beneath the bamboo archways at early dawn light.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1200',
        caption: 'Traditional tea exchange ceremony overlooking the dry stone garden.',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'story-paris-couture',
    title: 'L’Ombre et La Lumière',
    subtitle: 'Editorial Campaign for Maison Saint-Honoré',
    category: 'Paris Haute Couture',
    location: 'Palais Royal & Rue Vivienne, Paris',
    date: 'July 2024',
    quote: 'A breathtaking masterclass in dynamic architectural framing, deep contrast, and sensual couture silhouettes.',
    quoteAuthor: 'Claire Duchamp, Fashion Director',
    narrative: [
      'Commissioned for the Fall/Winter capsule, our goal was to dismantle stiff fashion poses in favor of cinematic street motion.',
      'Using the colonnades of Palais Royal and dramatic evening downpours, we juxtaposed sculptural black crepe dresses against rain-drenched neoclassical granite.',
      'Published across 14 pages in European luxury print, the campaign set record engagement for the fashion house.'
    ],
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=1200',
    palette: ['#0A0A0B', '#3E3C38', '#C4A458', '#F5F5F7'],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=1000',
        caption: 'Architectural silhouette at the Palais Royal colonnade.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1000',
        caption: 'Close-up texture study featuring natural window reflection.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=85&w=1200',
        caption: 'Evening stroll across the Seine with custom couture trench.',
        aspectRatio: 'landscape'
      }
    ]
  }
];

