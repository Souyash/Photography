import React, { useState } from 'react';
import { Film, Compass, Award, Eye, Camera, Sliders, Mic } from 'lucide-react';

interface ArtistView {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  roleTag: string;
  caption: string;
  image: string;
  position: string;
}

export const AboutSection: React.FC = () => {
  const artistViews: ArtistView[] = [
    {
      id: 'camera',
      title: 'Cinematography',
      icon: Camera,
      roleTag: 'Founder & Principal Director',
      caption: 'Lead Cinematographer · Master Lens & Visual Storytelling',
      image: '/images/sabyasachi-banerjee-camera.jpg',
      position: '65% 25%',
    },
    {
      id: 'console',
      title: 'Live Direction',
      icon: Sliders,
      roleTag: 'Broadcast & Production Director',
      caption: 'Live Vision Mixing · Multi-Cam Switching & Technical Artistry',
      image: '/images/sabyasachi-banerjee-console.jpg',
      position: '55% 22%',
    },
    {
      id: 'studio',
      title: 'Studio Sound',
      icon: Mic,
      roleTag: 'Acoustic Craft & Narration',
      caption: 'Studio Audio · Heirloom Vows & Pristine Narrative Sound',
      image: '/images/sabyasachi-banerjee-studio.jpg',
      position: '50% 18%',
    },
  ];

  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const activeView = artistViews[activeViewIndex];

  const pillars = [
    {
      icon: Eye,
      title: 'Cinematic Naturalism',
      description: 'We believe real emotional intimacy cannot be staged. We choreograph light and perspective around genuine, uninhibited human connection.',
    },
    {
      icon: Film,
      title: 'Analog & Medium Format',
      description: 'Alongside modern 100MP digital sensors, we carry vintage Leica rangefinders and 120mm Kodak Portra film for an irreproducible organic soul.',
    },
    {
      icon: Compass,
      title: 'Global Destination Literacy',
      description: 'Having documented celebrations across 18 countries, our logistics team handles remote locations, light changes, and cultural protocols seamlessly.',
    },
    {
      icon: Award,
      title: 'Archival Fine Art Standards',
      description: 'Every deliverable image undergoes 40-step color grading calibrated for museum-grade Hahnemühle rag paper and handcrafted Italian leather albums.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Grid: Lead Artist Statement & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Portrait / Studio Vignette (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/5] sm:aspect-[3/4] max-h-[620px] w-full bg-[#121214]">
              <img
                key={activeView.id}
                src={activeView.image}
                alt={`Sabyasachi Banerjee - ${activeView.title}`}
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-all duration-700 animate-fadeIn"
                style={{ objectPosition: activeView.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* View Switcher Pills */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
                  {artistViews.map((view, idx) => {
                    const Icon = view.icon;
                    const isActive = idx === activeViewIndex;
                    return (
                      <button
                        key={view.id}
                        onClick={() => setActiveViewIndex(idx)}
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono tracking-wider transition-all duration-200 ${
                          isActive
                            ? 'bg-[#D4AF37] text-black font-semibold shadow-sm'
                            : 'text-stone-300 hover:text-white hover:bg-white/10'
                        }`}
                        title={view.caption}
                      >
                        <Icon className="w-3 h-3" />
                        <span className="hidden sm:inline">{view.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Bottom Caption & Bio Tag */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  {activeView.roleTag}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1">
                  Sabyasachi Banerjee
                </h4>
                <p className="text-xs text-stone-300 font-light mt-0.5">
                  {activeView.caption}
                </p>

                {/* Thumbnail dots/bar indicator */}
                <div className="flex items-center gap-1.5 mt-3">
                  {artistViews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveViewIndex(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === activeViewIndex ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-5 -right-5 hidden sm:block p-4 rounded-xl bg-[#121214] border border-[#D4AF37]/30 shadow-xl backdrop-blur-md z-10">
              <span className="text-2xl font-serif text-[#D4AF37] font-semibold">10+</span>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                Years of Visual Storytelling
              </span>
            </div>
          </div>

          {/* Statement & Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>The Artist's Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              "We don't merely capture how your celebration looked. We preserve how it felt."
            </h2>

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Hello, I am <strong>Sabyasachi Banerjee</strong>. Driven by an obsession with organic luminescence, human emotion, and timeless color harmony, I approach every wedding and commission as a living cinematic canvas.
            </p>

            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
              Whether framing intimate vows at dusk, quiet exchanges between families, or high-energy celebrations under the stars, my philosophy avoids stiff, fabricated poses. Instead, I move with quiet intention—blending documentary observation with fine-art portraiture so your memories remain as vivid fifty years from today as they were the moment they unfolded.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="font-serif text-3xl text-white font-medium">420+</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block mt-1">
                  Weddings Documented
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-white font-medium">18</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block mt-1">
                  Countries Traveled
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-[#D4AF37] font-medium">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block mt-1">
                  5-Star Client Rating
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-white font-medium">20</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block mt-1">
                  Annual Commissions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-[#121214] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 group shadow-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-white font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
