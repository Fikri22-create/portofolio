import { useState, useCallback, useEffect } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

const ImageSlider = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const hasMultiple = total > 1;

  const goTo = useCallback((index) => {
    setCurrent(index);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  }, [total]);

  useEffect(() => {
    if (current >= total) setCurrent(0);
  }, [current, total]);

  if (!hasMultiple) {
    return (
      <div className="relative w-full h-full">
        <img
          src={images[0]}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group/slider">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <img
                src={src}
                alt={`${title} - ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {current > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-7 sm:h-7 rounded-full grid place-items-center transition-all duration-300 z-10 sm:opacity-0 sm:group-hover/slider:opacity-100"
          style={{
            background: 'rgba(8,9,13,0.7)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#f1f2f4',
          }}
          aria-label="Previous image"
        >
          <HiOutlineChevronLeft className="text-sm" />
        </button>
      )}

      {current < total - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-7 sm:h-7 rounded-full grid place-items-center transition-all duration-300 z-10 sm:opacity-0 sm:group-hover/slider:opacity-100"
          style={{
            background: 'rgba(8,9,13,0.7)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#f1f2f4',
          }}
          aria-label="Next image"
        >
          <HiOutlineChevronRight className="text-sm" />
        </button>
      )}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background: i === current ? '#6366f1' : 'rgba(255,255,255,0.4)',
              boxShadow: i === current ? '0 0 8px rgba(99,102,241,0.6)' : 'none',
              transform: i === current ? 'scale(1.2)' : 'scale(1)',
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
