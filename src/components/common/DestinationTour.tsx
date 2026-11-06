import React from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface TourStop {
  id: string;
  region: string;
  country: string;
  dates: string;
  status: 'Open Dates' | 'Limited Availability' | 'Fully Booked';
  notes: string;
  flag: string;
}

const TOUR_STOPS: TourStop[] = [
  {
    id: 'como-may',
    region: 'Lake Como & Venice',
    country: 'Italy',
    dates: 'May 12 – June 04, 2026',
    status: 'Limited Availability',
    notes: 'Spring lakefront villas & Riva boat sessions. Travel fees fully covered.',
    flag: '🇮🇹',
  },
  {
    id: 'paris-june',
    region: 'Paris & Côte d’Azur',
    country: 'France',
    dates: 'June 18 – July 08, 2026',
    status: 'Open Dates',
    notes: 'Haute Couture fashion week & private Provence lavender estates.',
    flag: '🇫🇷',
  },
  {
    id: 'scotland-aug',
    region: 'Scottish Highlands & Skye',
    country: 'United Kingdom',
    dates: 'August 10 – August 28, 2026',
    status: 'Open Dates',
    notes: 'Glen Coe & cliffside elopements. Analog medium format film included.',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  },
  {
    id: 'amalfi-sept',
    region: 'Amalfi Coast & Capri',
    country: 'Italy',
    dates: 'September 08 – October 02, 2026',
    status: 'Limited Availability',
    notes: 'Golden September twilight above Positano and Ravello terraces.',
    flag: '🇮🇹',
  },
  {
    id: 'kyoto-nov',
    region: 'Kyoto & Tokyo',
    country: 'Japan',
    dates: 'November 05 – November 25, 2026',
    status: 'Open Dates',
    notes: 'Autumn maple foliage & temple ceremonies. Special night street editorial.',
    flag: '🇯🇵',
  },
  {
    id: 'st-moritz-jan',
    region: 'St. Moritz & Zermatt',
    country: 'Switzerland',
    dates: 'January 14 – February 05, 2027',
    status: 'Open Dates',
    notes: 'Alpine winter elopements, helicopter glacier landings & chalet galas.',
    flag: '🇨🇭',
  },
];

interface DestinationTourProps {
  onSelectTourStop: (stop: TourStop) => void;
}

export const DestinationTour: React.FC<DestinationTourProps> = ({
  onSelectTourStop,
}) => {
  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>Worldwide Travel Tour</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight">
              2026 / 2027 Destination Itinerary
            </h2>
          </div>

          <p className="text-stone-400 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Booking during our scheduled destination residency waives international flight and accommodation logistics. Select a destination below to reserve.
          </p>
        </div>

        {/* Tour Stops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOUR_STOPS.map((stop) => {
            const isLimited = stop.status === 'Limited Availability';

            return (
              <div
                key={stop.id}
                onClick={() => onSelectTourStop(stop)}
                className="group p-6 rounded-2xl bg-[#121214] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#161619] transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-2xl relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-2xl">{stop.flag}</span>
                    <span
                      className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isLimited
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      }`}
                    >
                      {stop.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-medium group-hover:text-[#D4AF37] transition-colors mb-1">
                    {stop.region}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-mono mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{stop.dates}</span>
                  </div>

                  <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
                    {stop.notes}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-stone-300 group-hover:text-white">
                  <span className="flex items-center gap-1.5 text-stone-400">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> {stop.country}
                  </span>
                  <span className="flex items-center gap-1 text-[#D4AF37] font-semibold uppercase tracking-wider text-[11px] group-hover:translate-x-1 transition-transform">
                    <span>Reserve Date</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Route Notice */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-white/[0.02] to-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
            <p>
              Your destination not on the calendar? We accommodate private island charters, wilderness treks, and private estates worldwide.
            </p>
          </div>
          <a
            href="#booking"
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Inquire for Custom Route
          </a>
        </div>
      </div>
    </section>
  );
};

