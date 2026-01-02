import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function VideoPlayer({ videoUrl, thumbnail, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-12 px-6">
      <div className="relative group rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-stone-800">
        
        {/* The Video Element */}
        <video
          ref={videoRef}
          className="w-full aspect-video cursor-pointer"
          poster={thumbnail}
          onClick={togglePlay}
          src={videoUrl}
        />

        {/* Custom Overlay (visible when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-500">
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <FaPlay size={30} className="ml-1" />
            </button>
            <h3 className="mt-4 text-xl font-bold text-white tracking-wide uppercase">Watch Lesson Preview</h3>
          </div>
        )}

        {/* Pause Button (Shows briefly on hover when playing) */}
        {isPlaying && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={togglePlay} 
              className="bg-stone-900/80 p-3 rounded-full text-orange-500 border border-orange-500/50"
            >
              <FaPause size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Video Details Section */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{title || "Masterclass Preview"}</h2>
          <p className="text-stone-400">Led by Senior Instructors</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-stone-800 text-stone-400 text-xs rounded-full border border-stone-700">4K Quality</span>
          <span className="px-3 py-1 bg-stone-800 text-stone-400 text-xs rounded-full border border-stone-700">CC</span>
        </div>
      </div>
    </div>
  );
}