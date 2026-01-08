import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <svg className="animate-spin w-16 h-16" viewBox="0 0 50 50">
        <circle
          className="stroke-amber-600"
          style={{ animation: 'dash 1.5s ease-in-out infinite' }}
          cx="25" cy="25" r="20" fill="none" strokeWidth="5" strokeLinecap="round"
        />
      </svg>

      <div className="text-amber-600 font-medium text-lg">
        Loading
        <span className="dot-animation">.</span>
        <span className="dot-animation [animation-delay:0.2s]">.</span>
        <span className="dot-animation [animation-delay:0.4s]">.</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;