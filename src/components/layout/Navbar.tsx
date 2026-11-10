import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenClientPortal: () => void;
  ambientSoundActive: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenClientPortal,
  ambientSoundActive,
  onToggleSound,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Sabyasachi', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Stories', href: '#stories' },
    { label: 'Packages', href: '#packages' },
    { label: 'Kind Words', href: '#reviews' },
    { label: 'Inquire', href: '#booking' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brandmark */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-md flex-shrink-0 group-hover:border-[#D4AF37] transition-colors">
              <img
                src="/images/sabyasachi-banerjee.jpg"
                alt="Subha Artha Production House"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-lg sm:text-xl tracking-[0.12em] text-[#F4F4F6] font-medium group-hover:text-[#D4AF37] transition-colors duration-300 leading-none">
                SUBHA ARTHA
              </span>
              <span className="text-[8px] uppercase tracking-[0.24em] text-[#D4AF37] font-sans font-medium pl-0.5 mt-1">
                Production House
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-white transition-colors duration-200 py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Client Portal Preview Trigger */}
            <button
              onClick={onOpenClientPortal}
              title="Preview Private Client Gallery Vault"
              className="text-xs uppercase tracking-wider text-stone-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all bg-white/[0.02]"
            >
              Client Suite Demo
            </button>

            {/* Ambient Audio Toggle */}
            <button
              onClick={onToggleSound}
              title={ambientSoundActive ? 'Mute ambient shutter ambiance' : 'Play ambient audio'}
              className="p-2.5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 text-stone-400 hover:text-[#D4AF37] transition-all duration-200 bg-white/[0.02]"
              aria-label="Toggle ambient sound"
            >
              {ambientSoundActive ? (
                <Volume2 className="w-4 h-4 animate-pulse text-[#D4AF37]" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Inquire CTA Button */}
            <MagneticButton
              variant="primary"
              onClick={onOpenBooking}
              className="!py-2.5 !px-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0A0A0B]" />
              <span>Book a Session</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleSound}
              className="p-2 rounded-full border border-white/10 text-stone-400 hover:text-[#D4AF37]"
              aria-label="Toggle ambient sound"
            >
              {ambientSoundActive ? (
                <Volume2 className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-stone-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#0A0A0B]/98 backdrop-blur-2xl pt-28 px-8 flex flex-col justify-between pb-12 sm:hidden border-b border-white/10"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl text-stone-200 hover:text-[#D4AF37] flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500" />
                </motion.a>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="text-xs text-stone-400">
                <p>Currently accepting commissions for</p>
                <p className="text-[#D4AF37] font-medium mt-0.5">2026/2027 Global Destinations</p>
              </div>

              <MagneticButton
                variant="primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full !py-4"
              >
                Book a Session / Check Dates
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
