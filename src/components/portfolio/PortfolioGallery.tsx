import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MapPin, Camera, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PortfolioItem, Category } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolioData';
import { OptimizedImage } from '../common/OptimizedImage';

interface PortfolioGalleryProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenLightbox,
}) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'pre-wedding', label: 'Pre-Wedding & Couples' },
    { id: 'editorial', label: 'Editorial & Fashion' },
    { id: 'events', label: 'Corporate & Galas' },
  ];

  // Filter items based on category & active tag
  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesTag = !activeTag || item.tags.includes(activeTag);
      return matchesCategory && matchesTag;
    });
  }, [selectedCategory, activeTag]);

  // Extract all unique tags for the currently selected category
  const availableTags = useMemo(() => {
    const items =
      selectedCategory === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((i) => i.category === selectedCategory);
    const tags = new Set<string>();
    items.forEach((item) => item.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).slice(0, 7);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative bg-[#0A0A0B] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
              Curated Visual Archives
            </h2>
          </div>

          <p className="text-stone-400 text-sm max-w-md font-light leading-relaxed">
            Every frame is captured on medium format and high-resolution prime sensors, calibrated to preserve authentic intimacy, texture, and natural luminescence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? PORTFOLIO_ITEMS.length
                  : PORTFOLIO_ITEMS.filter((i) => i.category === cat.id).length;

              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setActiveTag(null);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 font-medium ${
                    isActive
                      ? 'text-[#0A0A0B] bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {cat.label}
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? 'bg-black/20 text-[#0A0A0B]'
                          : 'bg-white/10 text-stone-400'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-tag filter pills */}
          {availableTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-[11px] text-stone-500 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3 text-[#D4AF37]" /> Filter:
              </span>
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${
                    activeTag === tag
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50'
                      : 'text-stone-400 hover:text-stone-200 bg-white/[0.03] hover:bg-white/[0.07]'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Masonry Layout with Framer Motion */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group relative break-inside-avoid overflow-hidden rounded-lg bg-[#121214] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
                onClick={() => onOpenLightbox(item)}
              >
                {/* Image Component with Progressive Loading */}
                <OptimizedImage
                  src={item.imageUrl}
                  lowResSrc={item.thumbnailUrl}
                  alt={item.title}
                  aspectRatio={item.aspectRatio}
                  className="w-full"
                  imgClassName="group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Always visible subtle bottom badge on mobile */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  {item.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                      <Sparkles className="w-2.5 h-2.5" /> Featured
                    </span>
                  )}
                </div>

                {/* Full Hover Reveal Overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between text-xs text-[#D4AF37] font-medium tracking-wider uppercase mb-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                      <span className="font-mono text-[10px] text-stone-400">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-300 line-clamp-2 mb-3 font-light">
                      {item.story}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-stone-400 font-mono">
                      <span className="flex items-center gap-1 text-stone-300">
                        <Camera className="w-3 h-3 text-[#D4AF37]" />
                        {item.specs.camera.split(' ')[0]} · {item.specs.lens.split(' ')[0]}
                      </span>

                      <span className="flex items-center gap-1 text-[#D4AF37] group-hover:underline">
                        <span>Inspect Frame</span>
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if filtering yields no results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#121214] rounded-xl border border-white/5 p-8">
            <p className="font-serif text-2xl text-stone-400">
              No photographs found in this specific tag.
            </p>
            <p className="text-xs text-stone-500 mt-2">
              Try clearing tag filters or selecting another category.
            </p>
            <button
              onClick={() => {
                setActiveTag(null);
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs uppercase tracking-wider bg-[#D4AF37] text-black font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

