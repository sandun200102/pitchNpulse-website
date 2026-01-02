import React from 'react';

const CornerLogo = () => {
  return (
    <div className="fixed top-6 right-6 z-[60] pointer-events-none md:pointer-events-auto">
      <div className="group relative flex items-center justify-center">
        {/* Glow Effect / Backdrop */}
        <div className="absolute inset-0 bg-amber-200/20 blur-xl rounded-full group-hover:bg-amber-400/30 transition-all duration-500" />
        
        {/* Logo Container */}
        <div className="relative bg-white/40 backdrop-blur-md border border-white/40 p-2 md:p-3 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <img 
            src="Music-logo.jpeg" // Ensure your logo is in the public folder
            alt="Pitch & Pulse Logo" 
            className="h-20 w-20 md:h-14 md:w-14 object-contain"
          />
          
          {/* Subtle Decorative Ring */}
          <div className="absolute -inset-1 border border-amber-500/10 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default CornerLogo;