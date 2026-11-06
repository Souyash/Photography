import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { CLIENT_REVIEWS, PRESS_FEATURES, INSTAGRAM_POSTS } from '../../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const currentReview = CLIENT_REVIEWS[currentReviewIndex];

  const handlePrev = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + CLIENT_REVIEWS.length) % CLIENT_REVIEWS.length);
  };

  const handleNext = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % CLIENT_REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#0E0E10] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Press Badges Bar */}
        <div className="mb-20 pb-12 border-b border-white/10">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-8 font-semibold">
            Recognized & Featured In Global Publications
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {PRESS_FEATURES.map((press) => (
              <div
                key={press.name}
                className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
              >
                <div className="font-serif text-lg tracking-widest text-stone-300 font-semibold">
                  {press.name}
                </div>
                <div className="text-[9px] text-stone-500 uppercase tracking-wider mt-1">
                  {press.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>Client Kind Words</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal tracking-tight">
            Loved By Couples Worldwide
          </h2>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative max-w-4xl mx-auto mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-gradient-to-br from-[#16161A] via-[#121214] to-[#16161A] border border-white/10 p-8 sm:p-12 shadow-2xl relative"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Couple / Feature Thumbnail */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D4AF37]/40 shadow-xl">
                  <img
                    src={currentReview.thumbnailUrl}
                    alt={currentReview.clientNames}
                    className="w-full h-full object-cover"
                  />
                  {currentReview.publication && (
                    <div className="absolute inset-x-0 bottom-0 bg-[#D4AF37] text-[#0A0A0B] text-[8px] font-bold text-center py-0.5 uppercase tracking-tighter">
                      Vogue
                    </div>
                  )}
                </div>

                {/* Review Content */}
                <div className="space-y-4 flex-1 text-center sm:text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-[#D4AF37]">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#D4AF37]/30 mx-auto sm:mx-0" />

                  <p className="font-serif italic text-xl sm:text-2xl text-stone-100 leading-relaxed">
                    "{currentReview.quote}"
                  </p>

                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                    {currentReview.fullReview}
                  </p>

                  {/* Client Bio */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-lg text-white font-medium">
                        {currentReview.clientNames}
                      </h4>
                      <p className="text-xs text-stone-400">
                        {currentReview.eventType} · <span className="text-[#D4AF37]">{currentReview.location}</span>
                      </p>
                    </div>

                    <span className="text-[11px] font-mono text-stone-500">
                      {currentReview.eventDate}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Nav Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-stone-300 hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-stone-500">
              {currentReviewIndex + 1} of {CLIENT_REVIEWS.length}
            </span>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-stone-300 hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live-style Curated Instagram Grid Integration */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#D4AF37]" /> @aureliastudiophoto
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mt-1">
                From the Studio Journal
              </h3>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-stone-300 hover:text-[#D4AF37] transition-colors"
            >
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 6-Photo Curated Square Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-lg overflow-hidden bg-[#121214] border border-white/10 hover:border-[#D4AF37]/50 transition-all block"
              >
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay with likes and comment count */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                  <div className="flex items-center justify-end">
                    <InstagramIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-xs text-white font-medium">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                        {post.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3 text-stone-300" />
                        {post.comments}
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-300 line-clamp-2 font-light">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
