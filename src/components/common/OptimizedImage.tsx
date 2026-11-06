import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  lowResSrc?: string;
  alt: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'video' | 'custom';
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  onClick?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  lowResSrc,
  alt,
  aspectRatio = 'landscape',
  className = '',
  imgClassName = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset loaded state if src changes
    setIsLoaded(false);
    setHasError(false);

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  const aspectClass = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/10]',
    square: 'aspect-square',
    video: 'aspect-video',
    custom: '',
  }[aspectRatio];

  // Generate responsive srcSet for Unsplash images if applicable
  const getSrcSet = (url: string) => {
    if (url.includes('images.unsplash.com')) {
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?auto=format&fit=crop&q=80&w=480 480w,
              ${baseUrl}?auto=format&fit=crop&q=80&w=800 800w,
              ${baseUrl}?auto=format&fit=crop&q=80&w=1200 1200w,
              ${baseUrl}?auto=format&fit=crop&q=85&w=1600 1600w`;
    }
    return undefined;
  };

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#121214] ${aspectClass} ${className}`}
    >
      {/* Shimmer loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#161619] overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer-sweep" />
          {lowResSrc && (
            <img
              src={lowResSrc}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover filter blur-xl scale-110 opacity-60"
            />
          )}
        </div>
      )}

      {/* Main progressive image */}
      {!hasError ? (
        <img
          src={src}
          srcSet={getSrcSet(src)}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-105 blur-sm'
          } ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#121214] text-stone-500 text-xs">
          <span>Image preview unavailable</span>
        </div>
      )}
    </div>
  );
};

