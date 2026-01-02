import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiViolin, GiPianoKeys, GiMicrophone } from 'react-icons/gi';
import { FaDrum, FaTimes } from 'react-icons/fa'; // Added FaTimes for closing

export default function Classes() {
  const [showVideo, setShowVideo] = useState(false);

  const instruments = [
    { 
      name: 'Tabla & Rhythm', 
      icon: FaDrum, 
      desc: 'Master traditional beats and complex rhythmic cycles from classical foundations.',
      path: '/classes/tabla' 
    },
    { 
      name: 'Violin Mastery', 
      icon: GiViolin, 
      desc: 'Explore the elegance of strings, from basic bowing to advanced concertos.',
      path: '/classes/violin'
    },
    { 
      name: 'Guitar Academy', 
      icon: GiPianoKeys, 
      desc: 'Master the strings with comprehensive training covering modern and classical theory.',
      path: '/classes/guitar' 
    },
    { 
      name: 'Vocal Coaching', 
      icon: GiMicrophone, 
      desc: 'Perfect your pitch and breath control across multiple musical genres.',
      path: '/classes/vocals' 
    },
  ];

  return (
    <div className="bg-stone-900 min-h-screen relative">
      {/* 1. Page Header */}
      <header className="py-20 px-6 text-center bg-gradient-to-b from-black to-stone-900">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
          Professional <span className="text-orange-500">Music Training</span>
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto text-lg">
          Bridging traditional rhythm with modern melody through expert-led sessions.
        </p>
      </header>

      {/* 2. Instrument Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instruments.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 hover:border-orange-500/50 hover:bg-stone-800/80 transition-all duration-500 cursor-default">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-500">
                <item.icon size={36} className="text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              
              <Link 
                to={item.path} 
                className="text-orange-500 font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-flex items-center gap-2"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-[3rem] bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-2xl shadow-orange-900/20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to start your journey?</h2>
          <p className="mb-8 opacity-90">Watch our 30-second intro to see how we teach.</p>
          
          {/* TRIGGER BUTTON */}
          <button 
            onClick={() => setShowVideo(true)}
            className="bg-white text-orange-600 px-10 py-4 rounded-full font-black text-lg hover:shadow-xl hover:scale-105 transition-all uppercase"
          >
            Play Intro Video
          </button>
        </div>
      </section>

      {/* 4. VIDEO MODAL OVERLAY */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
            {/* Close Button */}
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
            >
              <FaTimes size={24} />
            </button>

            {/* Video Player */}
            <video 
              autoPlay 
              controls 
              className="w-full h-full"
              src="vid1.mp4" // Replace with your actual video link
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Clicking outside the video also closes it */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setShowVideo(false)}
          ></div>
        </div>
      )}
    </div>
  );
}