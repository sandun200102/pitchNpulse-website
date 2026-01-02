import React from 'react';

const BackgroundLogo = () => {
  return (
    // We use z-0 and ensure the parent has a background to prevent the logo from vanishing
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <img 
        src="/musician.png" 
        alt="Pitch and Pulse Background" 
        className="absolute left-[-12%] top-1/4 w-[500px] md:w-[800px] opacity-[0.8]  brightness-150 rotate-[-10deg] top-1.5"
        onError={(e) => console.error("Logo image failed to load. Check if Music-logo.jpeg is in the public folder.")}
      />
    </div>
  );
};

export default BackgroundLogo;