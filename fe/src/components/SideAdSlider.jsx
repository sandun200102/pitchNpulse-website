import React, { useState, useEffect } from 'react';

const ads = [
  { id: 1, src: 'v.jpg', title: '2026 Enrollment', sub: 'Hurry Up' },
  { id: 2, src: 't.jpg', title: 'Thabla Workshop', sub: 'Hurry Up' },
  { id: 3, src: 'h.jpg', title: 'Harmonium Coaching', sub: 'Find Your way' },
  { id: 4, src: 'm.jpg', title: 'Vocal Coaching', sub: 'Find Your Voice' },
];

const SideAdSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === ads.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={`
      /* Positioning Logic */
      absolute z-40 animate-in fade-in slide-in-from-right-10
      
      /* Small Screen (Hide) */
      hidden 
      
      /* Vertical Position: 36px from top */
      lg:block lg:top-[36px]
      
      /* Horizontal Position: 0px from the right edge. 
         This moves it exactly to the wall of the container. 
      */
      lg:right-0 lg:w-56
      xl:right-0 xl:w-64
      2xl:right-0 2xl:w-72
    `}>
      
      {/* Header Label */}
      <div className="flex items-center justify-between mb-0 group cursor-default">
        <div className="flex items-center gap-2">
          <span className="h-[1px] w-4 bg-orange-500/50 transition-all group-hover:w-8 group-hover:bg-orange-500"></span>
          <span className="text-[8px] xl:text-[9px] uppercase tracking-[0.3em] text-stone-400 font-semibold">Curated</span>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="text-stone-500 hover:text-orange-500 transition-colors p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Main Card Container */}
      <div className="relative h-[320px] xl:h-[400px] 2xl:h-[480px] w-full overflow-hidden rounded-xl shadow-2xl bg-stone-900 border border-white/5">
        {ads.map((ad, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={ad.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
              }`}
            >
              <img 
                src={ad.src} 
                alt={ad.title} 
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ${isActive ? 'scale-110' : 'scale-100'}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className={`text-orange-400 text-[8px] xl:text-[9px] font-bold tracking-widest uppercase mb-1 transition-all duration-700 delay-300 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {ad.sub}
                </p>
                <h4 className={`text-white text-base xl:text-lg font-serif font-bold leading-tight transition-all duration-700 delay-500 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {ad.title}
                </h4>
              </div>
            </div>
          );
        })}

        {/* Counter */}
        <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[8px] text-white/70 font-mono border border-white/10">
          {currentIndex + 1} / {ads.length}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-2 mt-4 justify-center">
        {ads.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-6 bg-orange-500' : 'w-2 bg-stone-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SideAdSlider;