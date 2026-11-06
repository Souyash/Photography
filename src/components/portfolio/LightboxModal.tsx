import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronLeft, ChevronRight, MapPin, Camera, 
  Info, Sparkles, Calendar, Tag
} from 'lucide-react';
import { PortfolioItem } from '../../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onInquireItem: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
  onInquireItem,
}) => {
  const [showDetails, setShowDetails] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectNext();
      } else if (e.key === 'ArrowLeft') {
        onSelectPrev();
      } else if (e.key.toLowerCase() === 'i') {
        setShowDetails((prev) => !prev);
      }
    },
    [onClose, onSelectNext, onSelectPrev]
  );

  useEffect(() => {
    if (!item) return;
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      onSelectNext();
    } else if (diff < -50) {
      onSelectPrev();
    }
    setTouchStart(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span className="font-mono text-stone-300">
              {currentIndex + 1} / {items.length}
            </span>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <span className="hidden sm:inline-block text-[#D4AF37] uppercase tracking-widest text-[11px]">
              {item.category.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`p-2.5 rounded-full border transition-colors ${
                showDetails
                  ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10'
                  : 'border-white/10 text-stone-400 hover:text-white hover:border-white/20'
              }`}
              title="Toggle Photo Details (Press 'I')"
              aria-label="Toggle details drawer"
            >
              <Info className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full border border-white/10 text-stone-400 hover:text-white hover:border-white/20 transition-colors"
              title="Close (ESC)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 pt-16 sm:pt-20">
          {/* Main Image Display */}
          <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative max-w-full max-h-[82vh] flex items-center justify-center select-none"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-h-[82vh] max-w-[92vw] lg:max-w-[70vw] object-contain rounded-sm shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectPrev();
              }}
              className="absolute left-4 p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/80 hover:text-white transition-all backdrop-blur-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectNext();
              }}
              className="absolute right-4 p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/80 hover:text-white transition-all backdrop-blur-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Photo Details Drawer (Collapsible) */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-[380px] lg:h-[82vh] flex-shrink-0 bg-[#121214]/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col justify-between overflow-y-auto mt-4 lg:mt-0"
              >
                <div className="space-y-6">
                  {/* Title & Location */}
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium uppercase tracking-widest mb-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-white font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1 flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-stone-500" /> Captured: {item.year} · Client: {item.client}
                    </p>
                  </div>

                  {/* Story summary */}
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-[11px] uppercase tracking-wider text-stone-500 mb-2 font-medium">
                      Project Narrative
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed font-light">
                      {item.story}
                    </p>
                  </div>

                  {/* Camera & Lens Technical Specs */}
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="text-[11px] uppercase tracking-wider text-stone-500 mb-3 font-medium flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-[#D4AF37]" /> Camera & Optics Specs
                    </h4>
                    <div className="space-y-2 bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-[11px]">
                      <div className="flex justify-between text-stone-300">
                        <span className="text-stone-500">Body:</span>
                        <span>{item.specs.camera}</span>
                      </div>
                      <div className="flex justify-between text-stone-300">
                        <span className="text-stone-500">Lens:</span>
                        <span>{item.specs.lens}</span>
                      </div>
                      <div className="flex justify-between text-stone-300">
                        <span className="text-stone-500">Exposure:</span>
                        <span className="text-[#D4AF37]">{item.specs.settings}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-stone-400 border border-white/5"
                      >
                        <Tag className="w-2.5 h-2.5 text-stone-500" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action for this Shoot */}
                <div className="pt-6 border-t border-white/10 mt-6">
                  <button
                    onClick={() => {
                      onInquireItem(item);
                      onClose();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#E5C378] text-[#0A0A0B] text-xs uppercase font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    <Sparkles className="w-4 h-4 text-[#0A0A0B]" />
                    Inquire For Similar Commission
                  </button>
                  <p className="text-[10px] text-center text-stone-500 mt-2">
                    Pre-fills our booking inquiry with this aesthetic & location
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-2 left-6 text-[11px] text-stone-500 hidden md:block">
          Keyboard: <kbd className="px-1 py-0.5 rounded bg-white/10 text-stone-300">←</kbd> / <kbd className="px-1 py-0.5 rounded bg-white/10 text-stone-300">→</kbd> to browse · <kbd className="px-1 py-0.5 rounded bg-white/10 text-stone-300">ESC</kbd> to exit · <kbd className="px-1 py-0.5 rounded bg-white/10 text-stone-300">I</kbd> for specs
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
