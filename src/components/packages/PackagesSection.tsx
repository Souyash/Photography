import React, { useState } from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { INVESTMENT_PACKAGES, PACKAGE_ADDONS } from '../../data/packagesData';
import { InvestmentPackage } from '../../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: InvestmentPackage, totalWithAddons?: number) => void;
}

interface CurrencyOption {
  code: string;
  symbol: string;
  rate: number;
}

const CURRENCIES: CurrencyOption[] = [
  { code: 'USD', symbol: '$', rate: 1.0 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'INR', symbol: '₹', rate: 86.5 },
  { code: 'CAD', symbol: 'CA$', rate: 1.38 },
];

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
}) => {
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
  const [activePackageId, setActivePackageId] = useState<string>('gold-full-day');
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption>(CURRENCIES[0]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const activePackage = INVESTMENT_PACKAGES.find((p) => p.id === activePackageId) || INVESTMENT_PACKAGES[1];

  // Calculate total price with add-ons for the active package
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = PACKAGE_ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const calculatedTotal = activePackage.price + addonsTotal;

  const formatPrice = (amountUsd: number) => {
    const converted = Math.round(amountUsd * selectedCurrency.rate);
    return `${selectedCurrency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="packages" className="py-24 sm:py-32 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>Investment & Collections</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight mb-4">
            Heirloom Photography Collections
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed mb-6">
            Transparent investment for priceless memories. All collections include white-glove curation, personal printing rights, and museum-grade color calibration.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#141417] border border-white/10">
            <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 px-2.5">
              Currency:
            </span>
            {CURRENCIES.map((curr) => (
              <button
                key={curr.code}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  selectedCurrency.code === curr.code
                    ? 'bg-[#D4AF37] text-[#0A0A0B] font-bold shadow-md'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {curr.code} ({curr.symbol})
              </button>
            ))}
          </div>
        </div>

        {/* Tiered Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INVESTMENT_PACKAGES.map((pkg) => {
            const isFeatured = pkg.featured;
            const isSelected = activePackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                onClick={() => setActivePackageId(pkg.id)}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1C1C20] to-[#121214] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.15)] transform lg:-translate-y-2'
                    : 'bg-[#121214] border border-white/10 hover:border-white/25 hover:bg-[#151518]'
                } ${isSelected && !isFeatured ? 'ring-1 ring-[#D4AF37]/50' : ''}`}
              >
                {/* Popular badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#D4AF37] text-[#0A0A0B] text-[10px] uppercase font-bold tracking-widest shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                    {pkg.tier}
                  </div>
                  <h3 className="font-serif text-2xl text-white font-medium mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-stone-400 mb-6 font-light">
                    {pkg.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="font-serif text-4xl text-white font-normal">
                      {formatPrice(pkg.price)}
                    </span>
                    <span className="text-xs text-stone-500 ml-2">{selectedCurrency.code} / Complete</span>
                    <div className="mt-2 text-[11px] text-[#D4AF37] font-medium bg-[#D4AF37]/10 px-2.5 py-1 rounded-md inline-block">
                      {pkg.highlight}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold block">
                      Deliverables Included:
                    </span>
                    {pkg.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300 font-light leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPackage(pkg, calculatedTotal);
                    }}
                    className={`w-full py-3 px-4 rounded-lg text-xs uppercase font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#D4AF37] hover:bg-[#E5C378] text-[#0A0A0B] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                        : 'bg-white/5 hover:bg-white/15 text-stone-200 border border-white/10'
                    }`}
                  >
                    <span>Inquire for {pkg.tier}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Add-ons & Live Estimator */}
        <div className="rounded-2xl bg-gradient-to-r from-[#141417] via-[#16161A] to-[#141417] border border-white/10 p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Bespoke Customizations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Curate Your Shoot With Tailored Add-Ons
              </h3>
              <p className="text-xs text-stone-400 mt-1 max-w-xl">
                Selected for: <strong className="text-white">{activePackage.name} (${activePackage.price.toLocaleString()})</strong>. Select options below to calculate your estimated investment.
              </p>
            </div>

            {/* Total Price Box */}
            <div className="bg-black/40 border border-[#D4AF37]/30 rounded-xl p-5 text-right flex items-center gap-6 self-stretch sm:self-auto justify-between sm:justify-end">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                  Estimated Total Investment ({selectedCurrency.code})
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-[#D4AF37] font-medium">
                  {formatPrice(calculatedTotal)}
                </span>
              </div>

              <button
                onClick={() => onSelectPackage(activePackage, calculatedTotal)}
                className="py-3 px-5 rounded-lg bg-[#D4AF37] hover:bg-[#E5C378] text-[#0A0A0B] text-xs uppercase font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2"
              >
                <span>Reserve Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Add-on Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {PACKAGE_ADDONS.map((addon) => {
              const isSelected = selectedAddonIds.includes(addon.id);

              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white'
                      : 'bg-[#18181B]/50 hover:bg-[#18181B] border-white/5 hover:border-white/15 text-stone-300'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-xs text-white">
                        {addon.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 font-light leading-snug">
                      {addon.description}
                    </p>
                    <span className="text-xs font-mono text-[#D4AF37] block pt-1">
                      +${addon.price} USD
                    </span>
                  </div>

                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border transition-colors ${
                      isSelected
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0A0A0B]'
                        : 'border-white/20 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Security & Vault Guarantee */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-stone-400 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Includes 10-Year Cloud Archive Guarantee & Loss Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-stone-500" />
              <span>Need a custom multi-destination quote? We accommodate international flights & bespoke visas.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
