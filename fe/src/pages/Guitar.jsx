import React from 'react';
import { Link } from 'react-router-dom';
import { FaGuitar } from 'react-icons/fa';

export default function Guitar() {
  const levels = [
    { 
      level: 'Beginner', 
      focus: 'Open Chords, Basic Strumming, Tuning & Posture', 
      duration: '3 Months' 
    },
    { 
      level: 'Intermediate', 
      focus: 'Barre Chords, Pentatonic Scales, Fingerpicking', 
      duration: '6 Months' 
    },
    { 
      level: 'Advanced', 
      focus: 'Music Theory, Solo Improvisation, Advanced Techniques', 
      duration: 'Ongoing' 
    }
  ];

  return (
    <div className="bg-stone-900 min-h-screen text-white">
      {/* Header Section */}
      <header className="py-20 px-6 bg-gradient-to-b from-stone-800 to-stone-900 text-center">
        <FaGuitar size={80} className="text-orange-500 mx-auto mb-6" />
        <h1 className="text-5xl font-serif font-bold mb-4">Guitar Academy</h1>
        <p className="text-stone-400 max-w-xl mx-auto">
          Explore the versatility of strings, from soulful acoustic melodies to high-energy electric riffs.
        </p>
      </header>

      {/* Curriculum Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">
          Course Curriculum
        </h2>
        
        <div className="space-y-4">
          {levels.map((item, i) => (
            <div 
              key={i} 
              className="bg-stone-800/50 p-6 rounded-2xl flex justify-between items-center border border-stone-700/30 hover:border-orange-500/30 transition-all"
            >
              <div>
                <h3 className="text-orange-500 font-bold text-xl">{item.level}</h3>
                <p className="text-stone-300 mt-1">{item.focus}</p>
              </div>
              <div className="text-right">
                <span className="text-stone-500 text-sm block uppercase tracking-widest">Duration</span>
                <span className="text-stone-200 font-medium">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Back */}
        <Link 
          to="/classes" 
          className="inline-flex items-center gap-2 mt-12 text-stone-400 hover:text-orange-500 transition-colors font-medium"
        >
          <span>←</span> Back to All Classes
        </Link>
      </section>

    </div>
  );
}