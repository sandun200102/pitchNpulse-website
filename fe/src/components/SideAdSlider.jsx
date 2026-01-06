import React, { useState, useEffect } from 'react';

const ads = [
  { 
    id: 1, 
    src: 'v.jpg', 
    title: 'Precision & Grace', 
    sub: 'Violin Masterclass',
    accent: '#60a5fa' 
  },
  { 
    id: 2, 
    src: 't.jpg', 
    title: 'The Heart of Taal', 
    sub: 'Tabla Fundamentals',
    accent: '#f97316' 
  },
  { 
    id: 3, 
    src: 'h.jpg', 
    title: 'Spiritual Chords', 
    sub: 'Harmonium Lessons',
    accent: '#fbbf24' 
  },
  { 
    id: 4, 
    src: 'm.jpg', 
    title: 'Unleash Your Range', 
    sub: 'Vocal Performance',
    accent: '#f472b6' 
  },
];

const SideAdSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Manual close state
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Scroll visibility state

  // Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Auto-slide Timer
  useEffect(() => {
    if (!isVisible || isPaused || isScrolled) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === ads.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isVisible, isPaused, isScrolled]);

  // If user manually closed the ad
  if (!isVisible) return null;

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`fixed top-[70px] right-4 z-50 hidden lg:block transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'opacity-0 translate-x-10 pointer-events-none' 
          : 'opacity-100 translate-x-0 pointer-events-auto'
      }`}
    >
      {/* Header Label */}
      <div className="flex items-center justify-between mb-3 group px-1">
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-3 bg-orange-500 transition-all group-hover:w-6"></span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-bold">Featured</span>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="text-stone-400 hover:text-white hover:bg-red-500/20 rounded-full p-1 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Main Card Container */}
      <div className="relative h-[380px] w-60 xl:w-64 xl:h-[450px] 2xl:w-72 2xl:h-[500px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-stone-950 border border-white/10">
        {ads.map((ad, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={ad.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Image with Ken Burns effect */}
              <img 
                src={ad.src} 
                alt={ad.title} 
                className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-linear ${
                  isActive ? 'scale-110 translate-y-[-2%]' : 'scale-100 translate-y-0'
                }`} 
              />
              
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
              
              {/* Staggered Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className={`text-orange-400 text-[10px] font-black tracking-[.25em] uppercase mb-2 transition-all duration-700 delay-300 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {ad.sub}
                </p>
                <h4 className={`text-white text-xl xl:text-2xl font-bold leading-[1.1] transition-all duration-700 delay-500 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {ad.title}
                </h4>
                
                {/* Visual Progress Bar */}
                <div className={`mt-6 h-[2px] bg-white/20 w-0 transition-all duration-1000 delay-700 ${isActive ? 'w-full' : 'w-0'}`}>
                  <div className={`h-full bg-orange-500 transition-all duration-[6000ms] linear ${isActive && !isPaused && !isScrolled ? 'w-full' : 'w-0'}`} />
                </div>
              </div>
            </div>
          );
        })}

        {/* Counter Overlay */}
        <div className="absolute top-4 left-4 z-20 px-2 py-1 rounded-md bg-black/40 backdrop-blur-md text-[9px] text-white font-mono border border-white/10 tracking-widest">
          {String(currentIndex + 1).padStart(2, '0')} / {String(ads.length).padStart(2, '0')}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-5 justify-center">
        {ads.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-stone-700 hover:bg-stone-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SideAdSlider;