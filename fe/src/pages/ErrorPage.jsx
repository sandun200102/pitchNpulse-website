import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Visual Error Icon */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-24 h-24 text-amber-600 animate-bounce" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
      </div>

      {/* Message Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <button 
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
        >
          Go back home
        </button>
      </div>

      {/* Subtle Background Elements */}
      <div className="mt-12 text-gray-400 text-sm italic">
        Error Code: <span className="font-mono">NS_NOT_FOUND</span>
      </div>
    </div>
  );
};

export default ErrorPage;