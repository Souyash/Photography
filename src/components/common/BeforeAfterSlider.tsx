import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

interface ComparisonPair {
  id: string;
  title: string;
  category: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  technique: string;
}

const COMPARISON_PAIRS: ComparisonPair[] = [
  {
    id: 'como-sunset',
    title: 'Sunset Luminescence at Lake Como',
    category: 'Color Chemistry & Dynamic Range',
    location: 'Villa Balbiano, Italy',
    beforeImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=70&w=1200&sat=-50&con=10', // Desaturated / flatter look simulating flat RAW
    afterImg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=90&w=1200', // Rich master grade
    technique: 'Custom analog Portra 400 curve, restored highlight rolloff, skin tone luminosity balancing, and micro-contrast sculpting.',
  },
  {
    id: 'milan-editorial',
    title: 'High Contrast Haute Couture',
    category: 'Monochrome & Spatial Depth',
    location: 'Milano Fashion Week',
    beforeImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=70&w=1200&sat=-60&con=5', // Flat raw capture
    afterImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=90&w=1200',
    technique: 'Deep shadow isolation, silk textile grain enhancement, architectural horizon calibration, and 16-bit tonal grading.',
  },
  {
    id: 'highland-mist',
    title: 'Atmospheric Drama in Glen Coe',
    category: 'Volumetric Mist & Wind',
    location: 'Scottish Highlands',
    beforeImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=70&w=1200&sat=-40&con=0',
    afterImg: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=90&w=1200',
    technique: 'Volumetric haze enhancement, emerald moss tone separation, and fine bridal lace recovery against tempestuous basalt rocks.',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = COMPARISON_PAIRS[activePairIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>The Alchemy of Post-Production</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight">
              Color Science & Archival Grading
            </h2>
          </div>

          <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Drag the central divider to inspect the transformation from raw sensor capture to our handcrafted fine-art master signature.
          </p>
        </div>

        {/* Preset Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {COMPARISON_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                setActivePairIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 ${
                idx === activePairIndex
                  ? 'bg-[#18181B] border border-[#D4AF37] text-[#D4AF37] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                  : 'bg-white/5 text-stone-400 hover:text-white border border-white/5'
              }`}
            >
              <span>{pair.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="relative rounded-2xl overflow-hidden bg-[#121214] border border-white/10 shadow-2xl">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/10] sm:aspect-[21/9] max-h-[580px] overflow-hidden select-none cursor-ew-resize"
          >
            {/* Background Image: Master Color Grade */}
            <img
              src={activePair.afterImg}
              alt="Aurelia Master Grade"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Foreground Image: Unprocessed Flat RAW (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activePair.beforeImg}
                alt="Unprocessed Sensor RAW"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                }}
              />
            </div>

            {/* Split Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.7)] pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Center Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A0A0B] border-2 border-[#D4AF37] shadow-2xl flex items-center justify-center text-[#D4AF37] hover:scale-110 transition-transform">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Badge Labels */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-stone-300">
                Unprocessed RAW
              </span>
            </div>

            <div className="absolute top-4 right-4 pointer-events-none">
              <span className="px-3 py-1.5 rounded-md bg-black/70 backdrop-blur-md border border-[#D4AF37]/50 text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Aurelia Master Grade
              </span>
            </div>

            {/* Touch & Drag Prompt */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none bg-black/70 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-stone-300 font-mono">
              ◄ Drag or Swipe to Compare ►
            </div>
          </div>

          {/* Technique Summary Footer */}
          <div className="p-6 sm:p-8 bg-[#141417] border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-3xl">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37]">
                {activePair.category} · {activePair.location}
              </span>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {activePair.technique}
              </p>
            </div>

            <div className="flex-shrink-0 text-right">
              <span className="text-[11px] font-mono text-stone-400 block">
                Deliverable Format:
              </span>
              <span className="text-xs text-white font-medium">
                16-Bit ProPhoto RGB & Archival DNG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

