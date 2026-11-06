import React from 'react';
import { Film, Compass, Award, Eye } from 'lucide-react';

export const AboutSection: React.FC = () => {
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
                src="/images/sudipto-mukherjee.jpg"
                alt="Sudipto Mukherjee, Lead Photographer & Principal Visual Artist"
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: '50% 18%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  Founder & Principal Director
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1">
                  Sudipto Mukherjee
                </h4>
                <p className="text-xs text-stone-300 font-light mt-0.5">
                  Lead Photographer · Wedding, Editorial & Fine Art Storyteller
                </p>
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
              Hello, I am <strong>Sudipto Mukherjee</strong>. Driven by an obsession with organic luminescence, human emotion, and timeless color harmony, I approach every wedding and commission as a living cinematic canvas.
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
