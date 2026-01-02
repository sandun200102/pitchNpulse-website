import React, { useState, useEffect } from 'react';

const ads = [
  { id: 1, src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800', title: '2026 Enrollment', sub: 'Limited Piano Slots' },
  { id: 2, src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800', title: 'Guitar Workshop', sub: 'Master the Fretboard' },
  { id: 3, src: 'vocal.png', title: 'Vocal Coaching', sub: 'Find Your Voice' },
];

const SideAdSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State to handle visibility

  useEffect(() => {
    if (!isVisible) return; // Stop timer if hidden

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === ads.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isVisible]);

  // Don't render anything if the user closed the slider
  if (!isVisible) return null;

  return (
    <div className="absolute top-2 -right-26 z-40 hidden xl:block w-72 transition-all duration-500 animate-in fade-in slide-in-from-right-4">
      {/* Header Label */}
      <div className="flex items-center justify-between mb-6 group cursor-default">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-6 bg-amber-500/50 transition-all group-hover:w-10 group-hover:bg-amber-500"></span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-semibold italic">Curated</span>
        </div>
        
        {/* Subtle Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="text-stone-400 hover:text-amber-600 transition-colors p-1"
          aria-label="Close advertisement"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Main Card Container */}
      <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-stone-50 border border-stone-200/50">
        {ads.map((ad, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={ad.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                isActive 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-105 z-0'
              }`}
            >
              <img 
                src={ad.src} 
                alt={ad.title} 
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ${isActive ? 'scale-110' : 'scale-100'}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-20">
                <p className={`text-amber-400 text-[10px] font-bold tracking-[0.25em] uppercase mb-2 transition-all duration-700 delay-300 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {ad.sub}
                </p>
                <h4 className={`text-white text-xl font-medium tracking-tight leading-tight transition-all duration-700 delay-500 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {ad.title}
                </h4>
              </div>
            </div>
          );
        })}

        {/* Counter */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] text-white/80 font-mono">
          0{currentIndex + 1} / 0{ads.length}
        </div>
      </div>

      {/* Progress Bars */}
      <div className="flex gap-1.5 mt-5 justify-start px-1">
        {ads.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className="group relative h-4 w-8 flex items-center"
          >
            <div className={`h-[2px] w-full transition-all duration-500 ${i === currentIndex ? 'bg-amber-600' : 'bg-stone-200 group-hover:bg-stone-300'}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideAdSlider;