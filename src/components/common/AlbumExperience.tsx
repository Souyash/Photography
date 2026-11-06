import React, { useState } from 'react';
import { BookOpen, Check, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface AlbumSpread {
  id: string;
  spreadTitle: string;
  leftImg: string;
  rightImg: string;
  caption: string;
}

const ALBUM_SPREADS: AlbumSpread[] = [
  {
    id: 'spread-1',
    spreadTitle: 'The Pre-Ceremony Quietude',
    leftImg: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=85&w=800',
    rightImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=800',
    caption: 'Lay-flat binding allows photographs to traverse the center seam with zero image distortion or gutter loss.',
  },
  {
    id: 'spread-2',
    spreadTitle: 'The Exchange & Caldera Vows',
    leftImg: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=800',
    rightImg: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=800',
    caption: '100% Cotton Rag paper with archival pigment inks rated for 200+ years without fading or discoloration.',
  },
  {
    id: 'spread-3',
    spreadTitle: 'Tempestuous Highland Vows',
    leftImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=85&w=800',
    rightImg: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=85&w=800',
    caption: 'Individually embossed in 24k gold foil with custom couple monogram on genuine Tuscan saddle leather.',
  },
];

const COVER_MATERIALS = [
  { name: 'Tuscan Saddle Leather', hex: '#634832', desc: 'Vegetable-tanned full-grain leather that patinas beautifully with age.' },
  { name: 'Midnight French Velvet', hex: '#161922', desc: 'Plush heritage cotton velvet with deep light-absorbing luster.' },
  { name: 'Natural Belgian Linen', hex: '#A89F91', desc: 'Organic coarse woven linen with tactile, raw understated elegance.' },
  { name: 'Champagne Silk Shantung', hex: '#CBB994', desc: 'Crisp slubbed raw silk with subtle iridescent sheen.' },
];

export const AlbumExperience: React.FC = () => {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [activeMaterial, setActiveMaterial] = useState(0);

  const activeSpread = ALBUM_SPREADS[spreadIndex];

  const handlePrev = () => {
    setSpreadIndex((prev) => (prev - 1 + ALBUM_SPREADS.length) % ALBUM_SPREADS.length);
  };

  const handleNext = () => {
    setSpreadIndex((prev) => (prev + 1) % ALBUM_SPREADS.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>Physical Artifacts</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight">
              Bespoke Heirloom Albums
            </h2>
          </div>

          <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Digital files reside in the cloud; heirloom albums live on your coffee table for children and grandchildren to hold in their hands.
          </p>
        </div>

        {/* 3D-style Layflat Album Simulator */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Virtual Open Book Container */}
          <div className="relative rounded-2xl bg-[#141417] border border-white/10 p-4 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
            {/* Top Spread Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 text-xs">
              <span className="font-serif text-lg text-white">
                {activeSpread.spreadTitle}
              </span>
              <span className="font-mono text-stone-500 text-[11px]">
                Spread {spreadIndex + 1} of {ALBUM_SPREADS.length}
              </span>
            </div>

            {/* The Double Page Spread */}
            <div className="relative grid grid-cols-2 gap-1 sm:gap-2 bg-[#0B0B0C] p-2 sm:p-4 rounded-xl shadow-inner">
              {/* Left Page */}
              <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-l-lg bg-[#18181B] shadow-2xl">
                <img
                  src={activeSpread.leftImg}
                  alt="Left album spread"
                  className="w-full h-full object-cover"
                />
                {/* Book spine gutter shadow */}
                <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />
              </div>

              {/* Right Page */}
              <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-r-lg bg-[#18181B] shadow-2xl">
                <img
                  src={activeSpread.rightImg}
                  alt="Right album spread"
                  className="w-full h-full object-cover"
                />
                {/* Book spine gutter shadow */}
                <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
              </div>

              {/* Center Binding Line */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-black/80 pointer-events-none shadow-xl" />
            </div>

            {/* Spread Caption & Navigation */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone-400 font-light italic max-w-lg text-center sm:text-left">
                "{activeSpread.caption}"
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                  aria-label="Previous spread"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-stone-500">Turn Page</span>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                  aria-label="Next spread"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Materials & Archival Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-white/5">
          {/* Material Swatches (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Curated Cover Swatches
            </span>
            <div className="grid grid-cols-2 gap-3">
              {COVER_MATERIALS.map((mat, idx) => (
                <div
                  key={mat.name}
                  onClick={() => setActiveMaterial(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeMaterial === idx
                      ? 'bg-[#18181B] border-[#D4AF37] shadow-lg'
                      : 'bg-[#121214] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className="w-5 h-5 rounded-full border border-white/30 flex-shrink-0"
                      style={{ backgroundColor: mat.hex }}
                    />
                    <span className="text-xs text-white font-medium">
                      {mat.name}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-400 font-light leading-snug">
                    {mat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Archival Certifications (6 cols) */}
          <div className="lg:col-span-6 space-y-3 bg-[#121214] p-6 rounded-2xl border border-white/10 text-xs">
            <span className="text-xs uppercase tracking-widest text-white font-semibold flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Museum Conservation Specifications
            </span>
            <div className="space-y-2 text-stone-300 font-light">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span><strong>Hahnemühle FineArt Paper</strong>: 100% α-cellulose, acid-free & calcium carbonate buffered for generational longevity.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span><strong>Seamless Layflat Binding</strong>: Allows full panoramic spreads across 28 inches without gutter cut-off.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span><strong>Walnut Presentation Case</strong>: Solid hand-oiled walnut presentation box with magnetic flush seal and ribbon pull included with Collections II & III.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

