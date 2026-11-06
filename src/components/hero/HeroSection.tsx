import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play, Pause, ChevronLeft, ChevronRight, MapPin, Compass } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { Category } from '../../types';

interface HeroSlide {
  id: string;
  headline: string;
  subhead: string;
  category: Category;
  location: string;
  imageUrl: string;
  camera: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-como',
    headline: 'Timeless Stories Through Light & Emotion',
    subhead: 'Fine art destination weddings & quiet cinematic romance',
    category: 'weddings',
    location: 'Villa Balbiano, Lake Como',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=90&w=2000',
    camera: 'Leica M11-P · 50mm f/0.95',
  },
  {
    id: 'hero-editorial',
    headline: 'Haute Couture & Sculptural Form',
    subhead: 'Architectural shadows, tactile textiles & editorial vision',
    category: 'editorial',
    location: 'Atelier Valenti, Milan',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=90&w=2000',
    camera: 'Hasselblad X2D 100C · 80mm f/1.9',
  },
  {
    id: 'hero-santorini',
    headline: 'Poetic Dawn Over Volcanic Horizons',
    subhead: 'Intimate pre-wedding narratives suspended between sky and sea',
    category: 'pre-wedding',
    location: 'Oia Caldera, Santorini',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=90&w=2000',
    camera: 'Sony A1 · 35mm f/1.4 GM',
  },
  {
    id: 'hero-highlands',
    headline: 'The Wild Majesty of Ancient Valleys',
    subhead: 'Unscripted elopements framed by tempestuous Scottish winds',
    category: 'weddings',
    location: 'Glen Coe, Scottish Highlands',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=90&w=2000',
    camera: 'Fujifilm GFX 100 II · 110mm f/2',
  },
];

interface HeroSectionProps {
  onSelectCategory: (cat: Category) => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectCategory,
  onOpenBooking,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleQuickFilter = (cat: Category) => {
    onSelectCategory(cat);
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Slides with crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.headline}
              className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
            />
            {/* Cinematic vignettes & gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/35 to-[#0A0A0B]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/85 via-transparent to-[#0A0A0B]/50" />
            {/* Film grain / subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col justify-between h-full pt-32 pb-12">
        {/* Top Status Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-stone-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-300">
              Booking 2026/2027 Calendar
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[11px] text-[#D4AF37]">Lake Como · Paris · Kyoto</span>
          </motion.div>

          {/* Slide metadata pill */}
          <div className="hidden md:flex items-center gap-4 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {currentSlide.location}
            </span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-[11px] text-stone-400">
              {currentSlide.camera}
            </span>
          </div>
        </div>

        {/* Center Headline & Statement */}
        <div className="my-auto max-w-3xl pt-8">
          <motion.div
            key={currentSlide.id + '-meta'}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                Sudipto Mukherjee · Fine Art & Cinema
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08]">
              {currentSlide.headline}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed">
              {currentSlide.subhead}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="primary"
                onClick={onOpenBooking}
              >
                Inquire For Your Date
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => {
                  const elem = document.getElementById('portfolio');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Selected Works
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Quick Filter Tabs & Slide Controls */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Quick Filter Specialty Jumps */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[11px] uppercase tracking-widest text-stone-500 mr-1 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#D4AF37]" /> Explore:
            </span>
            <button
              onClick={() => handleQuickFilter('weddings')}
              className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D4AF37]/50 text-stone-300 hover:text-white transition-all duration-200"
            >
              Weddings
            </button>
            <button
              onClick={() => handleQuickFilter('pre-wedding')}
              className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D4AF37]/50 text-stone-300 hover:text-white transition-all duration-200"
            >
              Pre-Wedding
            </button>
            <button
              onClick={() => handleQuickFilter('editorial')}
              className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D4AF37]/50 text-stone-300 hover:text-white transition-all duration-200"
            >
              Editorial & Fashion
            </button>
            <button
              onClick={() => handleQuickFilter('events')}
              className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D4AF37]/50 text-stone-300 hover:text-white transition-all duration-200"
            >
              Private Galas
            </button>
          </div>

          {/* Carousel Progress & Controls */}
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 text-stone-400 hover:text-white transition-colors"
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              aria-label="Toggle auto slideshow"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-[#D4AF37]'
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Scroll Down Hint */}
            <a
              href="#portfolio"
              className="hidden lg:flex items-center gap-1.5 pl-4 border-l border-white/10 text-[11px] uppercase tracking-wider text-stone-400 hover:text-[#D4AF37] transition-colors"
            >
              <span>Scroll</span>
              <ArrowDown className="w-3 h-3 animate-bounce text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
