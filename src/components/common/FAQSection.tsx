import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'Booking & Timeline' | 'Destination & Travel' | 'Deliverables & Art';
}

const FAQS: FAQItem[] = [
  {
    category: 'Booking & Timeline',
    question: 'How far in advance should we reserve our date with Sudipto Mukherjee?',
    answer: 'Because Sudipto personally photographs every commissioned wedding and limits his annual calendar to 20 master celebrations, most couples reserve 9 to 18 months in advance. For destination dates (Lake Como, Paris, Kyoto, Highlands), we recommend inquiring as early as possible to coordinate travel residencies.',
  },
  {
    category: 'Deliverables & Art',
    question: 'How quickly will we see our wedding photographs?',
    answer: 'We provide an expedited 48-Hour "First Look" highlight gallery consisting of 25 to 40 fully retouched master photographs so you can share the news immediately with family, guests, and editorial press. Your complete curated archive (500–1,000+ images) is delivered within 4 to 6 weeks, each photo color-calibrated to our signature archival film standard.',
  },
  {
    category: 'Destination & Travel',
    question: 'How are destination flights and travel logistics handled?',
    answer: 'We operate seamless, all-inclusive travel logistics. If your wedding takes place during one of our scheduled destination residencies on the Tour Itinerary, international flights are already covered! For custom worldwide locations, we quote a flat, transparent travel retainer covering direct flights, lodging, and local transit with zero surprise surcharges.',
  },
  {
    category: 'Booking & Timeline',
    question: 'What is Sudipto’s approach during the wedding day?',
    answer: 'Sudipto combines unobtrusive documentary photojournalism with refined editorial direction. During ceremonies, prayers, and heartfelt speeches, he blends into the background using silent electronic shutters to let genuine emotion flow uninterrupted. During couple portrait sessions, he provides relaxed, natural prompts rather than stiff poses, harnessing the most flattering natural light.',
  },
  {
    category: 'Deliverables & Art',
    question: 'Do we receive full personal printing and high-resolution rights?',
    answer: 'Yes, unconditionally. Every package includes full personal reproduction and printing rights without watermarks. You receive both full-resolution 300 DPI master files for large-scale prints and optimized web-ready files for social sharing, alongside 10 years of private cloud vault backup.',
  },
  {
    category: 'Deliverables & Art',
    question: 'Can we customize our heirloom physical album and cover materials?',
    answer: 'Absolutely. Every heirloom album included in Collections II and III is custom-designed alongside Sudipto. You select your cover textile (Tuscan full-grain leather, French velvet, or Belgian linen), cover debossing (24k gold foil, blind deboss, or monogram), and approve the digital spread layout before it is hand-bound by master bookbinders in Italy.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Booking & Timeline', 'Destination & Travel', 'Deliverables & Art'];

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === 'All' || faq.category === activeCategory
  );

  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>Client Clarity</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight mb-4">
            Frequently Inquired Details
          </h2>

          <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
            Everything you need to know about commissioning Sudipto Mukherjee for your wedding, editorial campaign, or international celebration.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-[#0A0A0B] font-semibold shadow-md'
                  : 'bg-white/5 text-stone-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141417] border-[#D4AF37]/50 shadow-xl'
                    : 'bg-[#121214] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-white font-normal leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#D4AF37] text-[#0A0A0B] rotate-180'
                        : 'bg-white/5 text-stone-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[10px] uppercase font-mono text-[#D4AF37] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-white/[0.02] to-white/[0.04] border border-white/5">
          <HelpCircle className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
          <p className="text-xs text-stone-300 font-light">
            Have a bespoke inquiry regarding multiple destinations, helicopter transfers, or private security NDAs?
          </p>
          <a
            href="#booking"
            className="inline-block mt-3 text-xs uppercase tracking-widest text-[#D4AF37] hover:underline font-semibold"
          >
            Speak directly with Sudipto Mukherjee →
          </a>
        </div>
      </div>
    </section>
  );
};
