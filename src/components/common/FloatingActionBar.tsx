import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUp, Volume2, VolumeX, MessageCircle } from 'lucide-react';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
  ambientSoundActive: boolean;
  onToggleSound: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  onOpenBooking,
  ambientSoundActive,
  onToggleSound,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#121214]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
        >
          {/* Quick WhatsApp Concierge */}
          <a
            href="https://wa.me/12125550198?text=Hello%20Sudipto,%20I%20would%20like%20to%20inquire%20about%20photography%20availability%20for%20our%20upcoming%20event."
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="p-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all flex items-center justify-center"
            aria-label="Direct WhatsApp Concierge"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Ambient Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={ambientSoundActive ? 'Mute ambient studio sound' : 'Turn on ambient sound'}
            className="p-2.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle sound"
          >
            {ambientSoundActive ? (
              <Volume2 className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Quick Book CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#E5C378] text-[#0A0A0B] text-xs uppercase font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0A0A0B]" />
            <span>Check Availability</span>
          </button>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="p-2.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
