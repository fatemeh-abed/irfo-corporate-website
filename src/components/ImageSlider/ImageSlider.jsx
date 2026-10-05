import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ImageSlider — reusable carousel component.
 *
 * Features:
 *   - Auto-play with pause on hover
 *   - Previous/next controls
 *   - Dot indicators
 *   - Smooth transitions
 *   - Lazy-loads non-first slides
 *   - Responsive
 *
 * @param {{ slides: Array, autoPlay?: boolean, interval?: number }} props
 */
export default function ImageSlider({ slides, autoPlay = true, interval = 6000 }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused || slides.length <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, isPaused, next, interval, slides.length]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === current
              ? 'scale-100 opacity-100'
              : 'pointer-events-none scale-105 opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/55 to-charcoal-950/30" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-irfo">
          <div key={current} className="max-w-2xl">
            {slides[current].eyebrow && (
              <p className="mb-4 animate-fade-up text-sm font-bold uppercase tracking-[0.3em] text-irfo-yellow-400">
                {slides[current].eyebrow}
              </p>
            )}
            <h2
              className="animate-fade-up text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              {slides[current].title}
            </h2>
            {slides[current].subtitle && (
              <p
                className="mt-4 animate-fade-up text-base text-white/80 sm:text-lg"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                {slides[current].subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-8 bg-irfo-yellow-400'
                    : 'w-3 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
