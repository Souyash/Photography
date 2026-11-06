import { ReviewItem, InstagramPost } from '../types';

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    clientNames: 'Genevieve & Marcus Dupont',
    eventType: 'Destination Wedding',
    eventDate: 'September 2024',
    location: 'Ravello, Amalfi Coast, Italy',
    rating: 5,
    quote: 'Looking through our wedding gallery reduced both of our families to tears of pure awe. Every shot feels like a frame from an Oscar-winning Italian film.',
    fullReview: 'Aurelia and her team are true visual poets. When planning our Amalfi celebration, we wanted to avoid the generic staged poses common in wedding photography. Aurelia moved through our weekend with effortless discretion, anticipating raw emotional exchanges between our grandmothers and catching glances between us that we didn’t even know happened. The custom leather album arrived in a walnut keepsake box and is our family’s greatest treasure.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    publication: 'Vogue Weddings Feature'
  },
  {
    id: 'rev-2',
    clientNames: 'Sophia & Harrison Vance',
    eventType: 'Highlands Elopement',
    eventDate: 'August 2024',
    location: 'Isle of Skye, Scotland',
    rating: 5,
    quote: 'They braved torrential gales and mist to capture our vows with breathtaking artistry. Unmatched dedication and calm poise throughout.',
    fullReview: 'When 45-knot winds hit the cliffside at Neist Point, most photographers would have asked us to stay in the car. Instead, the team embraced the tempest, utilizing the howling wind to create the most dramatic, evocative imagery we have ever laid eyes on. Our 48-hour sneak peek went viral among our friends, and the final 500 images are breathtaking works of fine art.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=400',
    publication: 'Junebug Weddings Winner'
  },
  {
    id: 'rev-3',
    clientNames: 'Camille & Antoine Laurent',
    eventType: 'Château Weekend',
    eventDate: 'June 2024',
    location: 'Aix-en-Provence, France',
    rating: 5,
    quote: 'Flawless direction, unobtrusive presence, and an eye for light that turned a warm summer evening into pure golden mythology.',
    fullReview: 'The team’s mastery over color and filmic texture set them in a league of their own. They don’t just take pictures; they sculpt memories out of light and emotion. Guests were constantly complimenting how gracious and seamless their team operated throughout the 3-day festivities.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=400',
    publication: 'Brides Magazine Selection'
  },
  {
    id: 'rev-4',
    clientNames: 'David Chen',
    eventType: 'Editorial Campaign',
    eventDate: 'July 2024',
    location: 'Tokyo & Milan',
    rating: 5,
    quote: 'Delivered commercial campaign visuals that exceeded our luxury brand benchmark. Punctual, visionary, and technically immaculate.',
    fullReview: 'We contracted Aurelia Studio for a high-jewelry and couture editorial series across Milan and Tokyo. The dynamic range and texture of the medium format files were staggering. The post-production grading was delivered well ahead of schedule and adapted seamlessly to our global billboards.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400',
    publication: 'Harper’s Bazaar Accolade'
  }
];

export const PRESS_FEATURES = [
  { name: 'VOGUE', label: 'Featured Wedding of the Year' },
  { name: "HARPER'S BAZAAR", label: 'Top 10 Global Luxury Photographers' },
  { name: 'BRIDES', label: 'Best Destination Storytellers' },
  { name: 'RANGEFINDER', label: 'Grand Master Award in Portraiture' },
  { name: 'JUNEBUG WEDDINGS', label: 'Best of the Best Destination Winner' },
  { name: 'ARCHITECTURAL DIGEST', label: 'Celebrity Estate Feature Coverage' }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
    caption: 'Golden hour at Villa Balbiano with Eleanor & Julian. Shot on Leica M11. #LakeComoWedding',
    likes: 3840,
    comments: 142,
    url: 'https://instagram.com'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600',
    caption: 'Shadow play and high tailoring in Milan. From our latest Autumn editorial. #HauteCouture',
    likes: 4210,
    comments: 98,
    url: 'https://instagram.com'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600',
    caption: 'Quiet dawn above the Aegean caldera before the world woke up. #SantoriniLove',
    likes: 5120,
    comments: 215,
    url: 'https://instagram.com'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600',
    caption: 'A soft Parisian drizzle turns cobblestones into silver mirrors. #ParisEngagement',
    likes: 3670,
    comments: 110,
    url: 'https://instagram.com'
  },
  {
    id: 'ig-5',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600',
    caption: 'Wild gales and ancient mountains of Glen Coe. True wild romance. #HighlandElopement',
    likes: 6490,
    comments: 318,
    url: 'https://instagram.com'
  },
  {
    id: 'ig-6',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600',
    caption: 'Silent morning ritual beneath the Kyoto cedar canopies. Pure reverence. #KyotoCeremony',
    likes: 4890,
    comments: 184,
    url: 'https://instagram.com'
  }
];

