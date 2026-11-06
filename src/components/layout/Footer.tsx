import React, { useState } from 'react';
import { ArrowUp, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070708] border-t border-white/10 text-stone-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Top Segment: Newsletter & Editorial Journal */}
        <div className="rounded-2xl bg-[#101012] border border-white/10 p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block mb-2">
              The Studio Gazette
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Receive Our Annual Print Lookbook & Travel Calendar
            </h3>
            <p className="text-xs text-stone-400 mt-2 font-light">
              Sent bi-monthly. Private destination travel dates, behind-the-scenes film darkroom techniques, and early date opening notices.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium bg-[#D4AF37]/10 px-4 py-3 rounded-lg border border-[#D4AF37]/30">
                <CheckCircle2 className="w-4 h-4" />
                <span>You have been subscribed to the private journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="bg-[#18181B] border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#D4AF37] flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#E5C378] text-[#0A0A0B] text-xs uppercase font-bold tracking-wider transition-colors flex-shrink-0"
                >
                  Join Journal
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Segment: 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/50 flex-shrink-0">
                <img
                  src="/images/sudipto-mukherjee.jpg"
                  alt="Sudipto Mukherjee"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.14em] text-white font-medium block leading-none">
                  SUDIPTO MUKHERJEE
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-medium mt-1 block">
                  Fine Art Photography & Visuals
                </span>
              </div>
            </a>
            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Documenting priceless human stories and timeless heirlooms for discerning couples, architectural commissions, and cultural celebrations worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-stone-300 hover:text-[#D4AF37] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-stone-300 hover:text-[#D4AF37] transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:atelier@aureliaphotography.com"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-stone-300 hover:text-[#D4AF37] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Studio Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Permanent Ateliers
            </h4>
            <div className="space-y-1">
              <p className="text-white font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> New York City
              </p>
              <p className="text-stone-400 pl-5">740 Broadway, NoHo Historic District</p>
              <p className="text-stone-400 pl-5">New York, NY 10003</p>
            </div>
            <div className="space-y-1 pt-2">
              <p className="text-white font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Milano
              </p>
              <p className="text-stone-400 pl-5">Via della Spiga, 14</p>
              <p className="text-stone-400 pl-5">20121 Milano MI, Italy</p>
            </div>
          </div>

          {/* Destinations (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Regular Destinations
            </h4>
            <ul className="space-y-1.5 text-stone-400 font-light">
              <li className="hover:text-white transition-colors">• Lake Como & Amalfi Coast, Italy</li>
              <li className="hover:text-white transition-colors">• Paris, Côte d'Azur & Provence, France</li>
              <li className="hover:text-white transition-colors">• Scottish Highlands & Cotswolds, UK</li>
              <li className="hover:text-white transition-colors">• Kyoto & Tokyo, Japan</li>
              <li className="hover:text-white transition-colors">• Aspen & Big Sur, United States</li>
            </ul>
          </div>

          {/* Direct Lines & Inquiries (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Concierge
            </h4>
            <p className="text-stone-400">
              Direct line:
              <a href="tel:+12125550198" className="text-white block hover:text-[#D4AF37] transition-colors mt-0.5">
                +1 (212) 555-0198
              </a>
            </p>
            <p className="text-stone-400">
              Private Telegram / WhatsApp:
              <span className="text-[#D4AF37] block mt-0.5">@aurelia_concierge</span>
            </p>
            <p className="text-[10px] text-stone-500 pt-2">
              All bookings secured by formal artistic engagement contract.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Sudipto Mukherjee Visual Studio. All rights reserved. Fine Art Photography & Cinema.</p>

          <div className="flex items-center gap-6">
            <a href="#portfolio" className="hover:text-stone-300 transition-colors">Portfolio Archive</a>
            <a href="#packages" className="hover:text-stone-300 transition-colors">Investment</a>
            <a href="#booking" className="hover:text-stone-300 transition-colors">Client Inquiry</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-[#D4AF37] transition-colors ml-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
