import { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { PortfolioGallery } from './components/portfolio/PortfolioGallery';
import { LightboxModal } from './components/portfolio/LightboxModal';
import { FeaturedStories } from './components/stories/FeaturedStories';
import { BeforeAfterSlider } from './components/common/BeforeAfterSlider';
import { PackagesSection } from './components/packages/PackagesSection';
import { DestinationTour } from './components/common/DestinationTour';
import { AlbumExperience } from './components/common/AlbumExperience';
import { AboutSection } from './components/about/AboutSection';
import { GearToolkit } from './components/common/GearToolkit';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { FAQSection } from './components/common/FAQSection';
import { BookingSection } from './components/booking/BookingSection';
import { ClientPortalDemoModal } from './components/common/ClientPortalDemoModal';
import { FloatingActionBar } from './components/common/FloatingActionBar';
import { Footer } from './components/layout/Footer';
import { Category, PortfolioItem, InvestmentPackage } from './types';
import { PORTFOLIO_ITEMS } from './data/portfolioData';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<InvestmentPackage | null>(null);
  const [estimatedTotal, setEstimatedTotal] = useState<number | undefined>(undefined);
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [bookingLocation, setBookingLocation] = useState<string>('');
  const [ambientSoundActive, setAmbientSoundActive] = useState<boolean>(false);
  const [clientPortalOpen, setClientPortalOpen] = useState<boolean>(false);

  // Audio Context Ref for luxury ambient sound synthesis
  const audioContextRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  // Handle ambient sound toggle using Web Audio API (gentle vinyl/film grain warmth)
  const toggleAmbientSound = () => {
    if (ambientSoundActive) {
      if (audioContextRef.current) {
        audioContextRef.current.suspend();
      }
      setAmbientSoundActive(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioContextRef.current) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;

          // Create subtle pink/warm noise for film projector ambiance
          const bufferSize = ctx.sampleRate * 2;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            output[i] = (b0 + b1 + b2) * 0.015; // Very subtle volume
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(450, ctx.currentTime);

          const gainNode = ctx.createGain();
          gainNode.gain.setValueAtTime(0.04, ctx.currentTime);

          whiteNoise.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(ctx.destination);

          whiteNoise.start();
          noiseNodeRef.current = whiteNoise;
        } else {
          audioContextRef.current.resume();
        }
        setAmbientSoundActive(true);
      } catch (err) {
        console.warn('Web Audio Ambient not supported or permission denied', err);
      }
    }
  };

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handleOpenBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: InvestmentPackage, total?: number) => {
    setSelectedPackage(pkg);
    setEstimatedTotal(total);
    handleOpenBooking();
  };

  const handleInquireFromLightbox = (item: PortfolioItem) => {
    setBookingNotes(`Inquiry inspired by portfolio piece: "${item.title}" (${item.category}). Desired aesthetic: ${item.tags.join(', ')}.`);
    setBookingLocation(item.location);
    handleOpenBooking();
  };

  const handleInquireFromStory = (storyTitle: string, location: string) => {
    setBookingNotes(`Inspired by flagship case study: "${storyTitle}".`);
    setBookingLocation(location);
    handleOpenBooking();
  };

  const handleSelectTourStop = (stop: { region: string; country: string; dates: string }) => {
    setBookingLocation(`${stop.region}, ${stop.country}`);
    setBookingNotes(`Inquiring for the ${stop.region} tour residency (${stop.dates}) with travel logistics included.`);
    handleOpenBooking();
  };

  // Lightbox carousel next/prev
  const filteredPortfolioList =
    selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === selectedCategory);

  const handleNextLightbox = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredPortfolioList.findIndex((i) => i.id === activeLightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredPortfolioList.length;
    setActiveLightboxItem(filteredPortfolioList[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!activeLightboxItem) return;
    const currentIndex = filteredPortfolioList.findIndex((i) => i.id === activeLightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredPortfolioList.length) % filteredPortfolioList.length;
    setActiveLightboxItem(filteredPortfolioList[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F4F6] selection:bg-[#D4AF37]/30 selection:text-white relative">
      {/* Navigation & Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenClientPortal={() => setClientPortalOpen(true)}
        ambientSoundActive={ambientSoundActive}
        onToggleSound={toggleAmbientSound}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Studio Philosophy & Artist Bio (Sabyasachi Banerjee) */}
        <AboutSection />

        {/* Filterable Portfolio Gallery */}
        <PortfolioGallery
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* Featured Stories / Case Studies */}
        <FeaturedStories onInquireStory={handleInquireFromStory} />

        {/* Before/After Retouching & Color Grading Alchemy */}
        <BeforeAfterSlider />

        {/* Services & Investment Packages */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* Destination Tour Itinerary */}
        <DestinationTour onSelectTourStop={handleSelectTourStop} />

        {/* Physical Artifacts & Bespoke Heirloom Albums */}
        <AlbumExperience />

        {/* Sabyasachi's Optical Toolkit */}
        <GearToolkit />

        {/* Client Reviews & Social Proof */}
        <ReviewsSection />

        {/* Frequently Inquired Details */}
        <FAQSection />

        {/* Inquiry & Booking System */}
        <BookingSection
          initialPackage={selectedPackage}
          initialEstimatedTotal={estimatedTotal}
          initialNotes={bookingNotes}
          initialLocation={bookingLocation}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredPortfolioList}
        onClose={() => setActiveLightboxItem(null)}
        onSelectNext={handleNextLightbox}
        onSelectPrev={handlePrevLightbox}
        onInquireItem={handleInquireFromLightbox}
      />

      {/* Client Portal Preview Demo Modal */}
      <ClientPortalDemoModal
        isOpen={clientPortalOpen}
        onClose={() => setClientPortalOpen(false)}
      />

      {/* Floating Action Concierge Bar */}
      <FloatingActionBar
        onOpenBooking={handleOpenBooking}
        ambientSoundActive={ambientSoundActive}
        onToggleSound={toggleAmbientSound}
      />
    </div>
  );
}

export default App;
