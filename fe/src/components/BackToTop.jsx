import React, { useState, useEffect } from 'react';
import { HiChevronUp } from 'react-icons/hi';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if user scrolls down 500px (roughly halfway on mobile)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-36 right-6 z-50 p-4 bg-orange-600 text-white rounded-full shadow-2xl hover:bg-orange-700 hover:-translate-y-2 transition-all duration-300 animate-in fade-in zoom-in group"
          aria-label="Back to top"
        >
          <HiChevronUp size={24} className="group-hover:scale-125 transition-transform" />
          
          {/* Tooltip for desktop */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-stone-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest pointer-events-none">
            Back to Top
          </span>
        </button>
      )}
    </>
  );
}