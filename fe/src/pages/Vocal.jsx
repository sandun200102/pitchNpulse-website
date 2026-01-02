import React from 'react';
import { Link } from 'react-router-dom';
import { GiMicrophone } from 'react-icons/gi';

export default function Vocal() {
  const levels = [
    { level: 'Beginner', focus: 'Breath Control, Pitch Matching', duration: '2 Months' },
    { level: 'Intermediate', focus: 'Dynamics, Vocal Agility, Ear Training', duration: '5 Months' },
    { level: 'Advanced', focus: 'Performance Psychology & Genre Mastery', duration: 'Ongoing' }
  ];

  return (
    <div className="bg-stone-900 min-h-screen text-white">
      <header className="py-20 px-6 bg-gradient-to-b from-stone-800 to-stone-900 text-center">
        <GiMicrophone size={80} className="text-orange-500 mx-auto mb-6" />
        <h1 className="text-5xl font-serif font-bold mb-4">Vocal Coaching</h1>
        <p className="text-stone-400 max-w-xl mx-auto">Unlock your true voice with modern techniques and classical discipline.</p>
      </header>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-orange-500 pl-4">Course Curriculum</h2>
        <div className="space-y-4">
          {levels.map((item, i) => (
            <div key={i} className="bg-stone-800/50 p-6 rounded-2xl flex justify-between items-center">
              <div>
                <h3 className="text-orange-500 font-bold">{item.level}</h3>
                <p className="text-stone-300">{item.focus}</p>
              </div>
              <span className="text-stone-500 text-sm">{item.duration}</span>
            </div>
          ))}
        </div>
        <Link to="/classes" className="inline-block mt-12 text-stone-400 hover:text-white transition-colors">← Back to All Classes</Link>
      </section>
    </div>
  );
}