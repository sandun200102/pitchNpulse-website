import React, { useState, useEffect } from 'react';

const ProfessionalVerticalBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed top-[10px] right-8 z-50 hidden md:block
        transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.2,1)]
        ${show ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
    >
      <div className="relative w-64 lg:w-72 h-[450px] lg:h-[550px] overflow-hidden rounded-2xl shadow-2xl group border border-white/10">
        
        {/* Full Background Image */}
        <img 
          src="banner.jpeg" 
          alt="Premium Background"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Gradient Overlay (Legibility Layer) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Close Button */}
        <button 
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-1.5 rounded-full transition-all border border-white/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Minimized Content Section */}
        <div className="absolute bottom-0 left-0 w-full p-8 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-100/80">Exclusive Access</span>
          </div>

          <h3 className="text-2xl font-light leading-tight tracking-tight">
            The <span className="font-bold text-white">Future</span> <br/> of Design.
          </h3>

          <div className="mt-8 transform transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <button className="w-full bg-white text-black text-xs font-bold py-4 rounded-full hover:bg-gray-100 transition-colors shadow-xl uppercase tracking-widest">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalVerticalBanner;