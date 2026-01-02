import React, { useState, useEffect } from 'react';

const CornerLogo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // NEW: Logic to hide the component on mobile
  if (isMobile) {
    return null;
  }

  const containerStyle = {
    position: 'fixed',
    top: '-40px',
    left: '-25px',
    zIndex: 60,
    pointerEvents: 'none',
    backgroundColor: 'transparent',
  };

  const imageStyle = {
    display: 'block',
    height: '240px', 
    width: 'auto',
    backgroundColor: 'transparent',
    pointerEvents: 'auto',
    border: 'none',
    outline: 'none',
  };

  return (
    <div style={containerStyle}>
      <img 
        src="Music-logo.png" 
        alt="Pitch & Pulse Logo" 
        style={imageStyle}
      />
    </div>
  );
};

export default CornerLogo;