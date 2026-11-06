import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Sparkles, CheckCircle2, Calendar, MapPin, 
  Users, Mail, Phone, User, MessageSquare, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BookingFormData, InvestmentPackage } from '../../types';
import { INVESTMENT_PACKAGES } from '../../data/packagesData';

interface BookingSectionProps {
  initialPackage?: InvestmentPackage | null;
  initialEstimatedTotal?: number;
  initialNotes?: string;
  initialLocation?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialPackage,
  initialEstimatedTotal,
  initialNotes = '',
  initialLocation = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    location: initialLocation || '',
    selectedPackage: initialPackage ? initialPackage.name : 'The Grand Celebration',
    guestCount: '80 - 150 guests',
    budgetRange: '$5,000 - $10,000',
    vision: initialNotes || '',
    referral: 'Instagram',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync props if initialPackage or location updates
  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        selectedPackage: initialPackage.name,
      }));
    }
    if (initialLocation) {
      setFormData((prev) => ({
        ...prev,
        location: initialLocation,
      }));
    }
    if (initialNotes) {
      setFormData((prev) => ({
        ...prev,
        vision: prev.vision ? `${prev.vision}\n${initialNotes}` : initialNotes,
      }));
    }
  }, [initialPackage, initialLocation, initialNotes]);

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp is required for fast inquiry response';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Event Location / City is required';
    }
    if (!formData.vision.trim() || formData.vision.length < 15) {
      newErrors.vision = 'Please tell us a little about your vision (at least 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury API booking dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory champagne golden confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F3E5AB', '#FFFFFF', '#997E25'],
        });
      } catch {
        // Fallback gracefully
      }
    }, 1200);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#0A0A0B] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>Connect & Reserve</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight mb-4">
            Begin Your Visual Legacy
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            We limit our calendar to 20 master commissions annually to give every client uncompromising devotion. Share your date, destination, and story below.
          </p>
        </div>

        {/* Confirmation Screen or Form */}
        <div className="bg-[#121214] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient corner highlights */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="py-12 text-center max-w-xl mx-auto space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    Inquiry Transmitted Successfully
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                    Thank You, {formData.fullName.split(' ')[0]}
                  </h3>
                  <p className="text-stone-300 text-sm font-light leading-relaxed">
                    We have received your vision for your <strong className="text-white">{formData.eventType}</strong> in <strong className="text-white">{formData.location}</strong>.
                  </p>
                </div>

                {/* Reservation Summary Box */}
                <div className="bg-black/50 border border-white/10 rounded-xl p-5 text-left text-xs font-mono space-y-2 text-stone-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-stone-500">Contact:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-stone-500">Target Date:</span>
                    <span className="text-[#D4AF37]">{formData.eventDate || 'Flexible / To Be Confirmed'}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-stone-500">Desired Collection:</span>
                    <span>{formData.selectedPackage}</span>
                  </div>
                  {initialEstimatedTotal && (
                    <div className="flex justify-between pt-1 text-sm font-bold text-white">
                      <span className="text-stone-400">Estimated Scope:</span>
                      <span className="text-[#D4AF37]">${initialEstimatedTotal.toLocaleString()} USD</span>
                    </div>
                  )}
                </div>

                {/* Timeline Next Steps */}
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-stone-400 text-left space-y-2">
                  <p className="font-medium text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> What Happens Next:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-stone-400 font-light">
                    <li>Personal review by Sudipto Mukherjee within 24 hours to confirm date exclusivity.</li>
                    <li>You will receive a personalized digital lookbook and moodboard treatment.</li>
                    <li>Invitation to a private 20-minute video or studio champagne consultation.</li>
                  </ol>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-stone-400 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Submit another inquiry or update details
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* Pre-selected package callout banner */}
                {initialPackage && (
                  <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-white">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <span>
                        Inquiring for: <strong className="text-[#D4AF37]">{formData.selectedPackage}</strong>
                      </span>
                    </div>
                    {initialEstimatedTotal && (
                      <span className="font-mono font-semibold text-[#D4AF37]">
                        ${initialEstimatedTotal.toLocaleString()} USD Est.
                      </span>
                    )}
                  </div>
                )}

                {/* Row 1: Name, Email, Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#D4AF37]" /> Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Julian & Eleanor Vance"
                      className={`w-full bg-[#18181B] border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#D4AF37]" /> Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@domain.com"
                      className={`w-full bg-[#18181B] border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full bg-[#18181B] border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Event Type, Date, Location */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#18181B] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Wedding">Wedding Celebration</option>
                      <option value="Pre-Wedding">Pre-Wedding / Engagement</option>
                      <option value="Elopement">Intimate Elopement</option>
                      <option value="Editorial">Editorial / Fashion Campaign</option>
                      <option value="Corporate">Corporate / Private Gala</option>
                      <option value="Portrait">Fine Art Portrait Commission</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> Target Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-[#18181B] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37] transition-colors [color-scheme:dark]"
                    />
                  </div>

                  {/* Location / Venue */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Venue / Destination *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Villa Balbiano, Lake Como"
                      className={`w-full bg-[#18181B] border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors ${
                        errors.location ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.location && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Package, Scope / Guests, Referral */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Selected Package */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      Desired Collection
                    </label>
                    <select
                      name="selectedPackage"
                      value={formData.selectedPackage}
                      onChange={handleChange}
                      className="w-full bg-[#18181B] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      {INVESTMENT_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.name}>
                          {pkg.name} (${pkg.price.toLocaleString()} USD)
                        </option>
                      ))}
                      <option value="Custom Bespoke Scope">Custom Bespoke Scope</option>
                    </select>
                  </div>

                  {/* Estimated Guests */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Estimated Guests / Scope
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full bg-[#18181B] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Intimate (Under 40 guests)">Intimate (Under 40 guests)</option>
                      <option value="40 - 80 guests">40 - 80 guests</option>
                      <option value="80 - 150 guests">80 - 150 guests</option>
                      <option value="150 - 300 guests">150 - 300 guests</option>
                      <option value="300+ guests / Multi-day gala">300+ guests / Multi-day gala</option>
                      <option value="Not applicable (Editorial / Portrait)">Not applicable (Editorial)</option>
                    </select>
                  </div>

                  {/* Referral Source */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      How Did You Discover Us?
                    </label>
                    <select
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full bg-[#18181B] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Instagram">Instagram (@aureliastudiophoto)</option>
                      <option value="Vogue / Editorial Press">Vogue / Press Feature</option>
                      <option value="Wedding Planner Recommendation">Wedding Planner Recommendation</option>
                      <option value="Friend / Family Referral">Friend / Family Referral</option>
                      <option value="Google / Online Search">Google Search</option>
                      <option value="Pinterest">Pinterest Moodboard</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Vision & Notes */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-stone-300 font-medium flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" /> Tell Us About Your Vision & Story *
                  </label>
                  <textarea
                    rows={4}
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    placeholder="Describe your atmosphere, color scheme, special cultural rituals, aesthetic inspirations, or any specific questions..."
                    className={`w-full bg-[#18181B] border rounded-lg px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none transition-colors leading-relaxed ${
                      errors.vision ? 'border-rose-500' : 'border-white/10 focus:border-[#D4AF37]'
                    }`}
                  />
                  {errors.vision && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.vision}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-stone-500 font-light text-center sm:text-left">
                    Direct reply guaranteed within 24 hours. Privacy & NDAs honored for private clients.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto py-4 px-8 rounded-full bg-[#D4AF37] hover:bg-[#E5C378] text-[#0A0A0B] text-xs uppercase font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-3.5 w-3.5 border-2 border-black border-t-transparent rounded-full" />
                        Transmitting Inquiry...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send Booking Inquiry</span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
