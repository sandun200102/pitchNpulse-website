import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Spinner */}
      <svg className="animate-spin w-16 h-16" viewBox="0 0 50 50">
        <circle
          className="animate-[dash_1.5s_ease-in-out_infinite] stroke-amber-600"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      {/* Animated Text */}
      <div className="text-amber-600 font-medium text-lg">
        Loading
        <span className="dot-animation">.</span>
        <span className="dot-animation delay-200">.</span>
        <span className="dot-animation delay-400">.</span>
      </div>

      <style jsx>{`
        @keyframes dash {
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }

        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }

        .dot-animation {
          animation: blink 1.4s infinite both;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;