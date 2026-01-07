import React, { useState, useEffect } from 'react';

const BackgroundLogo = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check window width to toggle positioning
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    // Set initial value and add listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    zIndex: 0,
    overflow: 'hidden',
    opacity: 0.9,

  };

  const imageStyle = {
    position: 'absolute',
    transition: 'all 0.3s ease', // Smooth movement between views
    // Responsive Logic:
    top: isMobile ? '2%' : '14%',
    left: isMobile ? '50%' : '-7%',
    transform: isMobile ? 'translateX(-50%) rotate(0deg)' : 'rotate(0deg)',
    width: isMobile ? '300px' : '650px',
  
  };

  return (
    <div style={containerStyle}>
      <img 
        src="/new.jpg" 
        alt="Pitch and Pulse Background" 
        style={imageStyle}
        onError={(e) => console.error("Logo image failed to load.")}
      />
    </div>
  );
};

export default BackgroundLogo;