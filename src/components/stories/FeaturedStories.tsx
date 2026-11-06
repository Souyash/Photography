import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, MapPin, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { FEATURED_STORIES } from '../../data/storiesData';
import { OptimizedImage } from '../common/OptimizedImage';

interface FeaturedStoriesProps {
  onInquireStory: (storyTitle: string, location: string) => void;
}

export const FeaturedStories: React.FC<FeaturedStoriesProps> = ({
  onInquireStory,
}) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeStory = FEATURED_STORIES[activeStoryIndex];
  const activeImage = activeStory.galleryImages[activeImageIndex] || activeStory.galleryImages[0];

  return (
    <section id="stories" className="py-24 sm:py-32 bg-[#0E0E10] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>Narrative Spreads</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
              Flagship Case Studies
            </h2>
          </div>

          {/* Story Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {FEATURED_STORIES.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => {
                  setActiveStoryIndex(idx);
                  setActiveImageIndex(0);
                }}
                className={`px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 ${
                  idx === activeStoryIndex
                    ? 'bg-[#18181B] border border-[#D4AF37] text-[#D4AF37] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                    : 'bg-transparent text-stone-400 hover:text-white border border-white/5'
                }`}
              >
                <span>{story.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-side Split Editorial Spread */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Left Column: Editorial Write-up & Narrative (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-stone-400">
                  <span className="flex items-center gap-1.5 text-[#D4AF37]">
                    <MapPin className="w-3.5 h-3.5" /> {activeStory.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {activeStory.date}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  {activeStory.title}
                </h3>
                <p className="text-sm font-sans uppercase tracking-[0.15em] text-stone-400">
                  {activeStory.subtitle}
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative p-6 rounded-xl bg-[#141417] border-l-2 border-[#D4AF37] border-y border-r border-white/5 shadow-xl">
                <Quote className="w-6 h-6 text-[#D4AF37]/40 mb-2" />
                <p className="font-serif italic text-base sm:text-lg text-stone-200 leading-relaxed">
                  "{activeStory.quote}"
                </p>
                <p className="text-xs font-mono text-[#D4AF37] mt-3 uppercase tracking-wider">
                  — {activeStory.quoteAuthor}
                </p>
              </div>

              {/* Editorial Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {activeStory.narrative.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Chromatic Palette Swatches */}
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 block mb-2 font-medium">
                  Shoot Color Palette
                </span>
                <div className="flex items-center gap-2">
                  {activeStory.palette.map((color, i) => (
                    <div
                      key={i}
                      className="group relative w-8 h-8 rounded-full border border-white/20 transition-transform hover:scale-110 shadow-md"
                      style={{ backgroundColor: color }}
                    >
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[9px] font-mono text-stone-400 bg-black/90 px-1 py-0.5 rounded transition-opacity">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquire CTA */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onInquireStory(activeStory.title, activeStory.location)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#F3E5AB] transition-colors group"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Commission a Similar Narrative</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Curated Photo Sequence (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Primary Large Featured Frame */}
              <div className="relative rounded-xl overflow-hidden bg-[#141417] border border-white/10 shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage.url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <OptimizedImage
                      src={activeImage.url}
                      alt={activeImage.caption}
                      aspectRatio="landscape"
                      className="w-full max-h-[520px]"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Caption bar */}
                <div className="p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent absolute bottom-0 left-0 right-0">
                  <p className="text-xs text-stone-300 font-light italic">
                    "{activeImage.caption}"
                  </p>
                </div>
              </div>

              {/* Thumbnail Strip for the Active Story */}
              <div className="grid grid-cols-4 gap-3">
                {activeStory.galleryImages.map((img, idx) => (
                  <button
                    key={img.url}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      idx === activeImageIndex
                        ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

