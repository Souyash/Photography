import React from 'react';
import { Camera, Zap, Wind } from 'lucide-react';

interface GearItem {
  category: string;
  name: string;
  role: string;
  badge: string;
}

const GEAR_ITEMS: GearItem[] = [
  {
    category: 'Camera Bodies',
    name: 'Nikon Z8 & Z9 Dual Stacked Sensors',
    role: '45.7 Megapixel stacked CMOS with zero rolling shutter and silent electronic operation for sacred ceremonies.',
    badge: 'Primary Flagships',
  },
  {
    category: 'Portrait Primes',
    name: 'NIKKOR Z 85mm f/1.2 S & 50mm f/1.2 S',
    role: 'Ultra-fast aperture glass providing creamy, three-dimensional subject isolation and ethereal natural bokeh.',
    badge: 'Master Optics',
  },
  {
    category: 'Documentary Zooms',
    name: 'NIKKOR Z 70-200mm f/2.8 VR S & 24-70mm f/2.8',
    role: 'Weather-sealed workhorses for capturing candid emotions from across the ballroom without intrusion.',
    badge: 'Unobtrusive Reach',
  },
  {
    category: 'Analog Heritage',
    name: 'Leica M11 & Medium Format 120mm Film',
    role: 'Kodak Portra 400 and Ilford HP5 hand-developed rolls for irreproducible vintage grain and soul.',
    badge: 'Pure Film Soul',
  },
  {
    category: 'Aerial Cinematography',
    name: 'DJI Mavic 3 Pro Cine (Triple Hasselblad Lens)',
    role: 'Licensed 5.1K ProRes aerial captures of Italian villas, sea cliffs, and mountain estates.',
    badge: 'Licensed Drone Suite',
  },
  {
    category: 'Lighting Craft',
    name: 'Profoto B10X Plus & AirTTL Wireless Units',
    role: 'Gentle, sculptural fill light designed to match the warmth and flicker of candlelight and sunset.',
    badge: 'Golden Hour Harmony',
  },
];

export const GearToolkit: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>Behind the Lens</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight">
              Sabyasachi's Optical Toolkit
            </h2>
          </div>

          <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Every camera, lens, and analog film roll in Sabyasachi’s kit is chosen to render lifelike skin tones, handle extreme low light, and preserve high-fidelity memory.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEAR_ITEMS.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-[#121214] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#151518] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                    {item.category}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#D4AF37] transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
                  {item.role}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-stone-500 font-mono">
                <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Calibrated & Color Profiled</span>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Redundancy Bar */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#141417] via-[#161619] to-[#141417] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2 text-stone-300">
            <Zap className="w-4 h-4 text-[#D4AF37]" />
            <span>Dual Dual-Card Slot Redundancy (Instant in-camera backup to separate CFexpress media)</span>
          </div>
          <div className="flex items-center gap-2 text-stone-300">
            <Wind className="w-4 h-4 text-[#D4AF37]" />
            <span>Weather-Sealed Magnesium Alloy construction rated for rain, sub-zero snow & desert gales</span>
          </div>
        </div>
      </div>
    </section>
  );
};
