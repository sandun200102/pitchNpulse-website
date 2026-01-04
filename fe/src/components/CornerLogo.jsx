import React from 'react';

const CornerLogo = () => {
  const containerStyle = {
    position: 'fixed',
    top: '-30px',
    left: '-20px',
    zIndex: 60,
    pointerEvents: 'none',
  };

  const imageStyle = {
    display: 'block',
    backgroundColor: 'transparent',
    pointerEvents: 'auto',
    
    /* SCALING LOGIC:
       - Max height: 240px
       - Min height: 140px
       - Scales smoothly between 1440px and 768px screen width
    */
    height: 'clamp(140px, 12vw + 20px, 240px)',
    width: 'auto',
    transition: 'height 0.1s linear', 
  };

  return (
    <>
      <style>
        {`
          /* Smoothly hide when it hits mobile width */
          @media (max-width: 768px) {
            .corner-logo-wrap {
              display: none !important;
            }
          }

          /* Optional: Subtle fade if the screen is very short (height-wise) */
          @media (max-height: 500px) {
            .corner-logo-wrap {
              opacity: 0.5;
            }
          }
        `}
      </style>
      
      <div style={containerStyle} className="corner-logo-wrap">
        <img 
          src="Music-logo.png" 
          alt="Pitch & Pulse Logo" 
          style={imageStyle}
        />
      </div>
    </>
  );
};

export default CornerLogo;