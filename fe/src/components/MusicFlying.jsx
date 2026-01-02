import React, { useEffect, useState } from 'react';

const MusicFlying = () => {
  const [notes, setNotes] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  // Music notation symbols
  const symbols = ['♪', '♫', '♬', '♩', '∮', '♭'];

  useEffect(() => {
    // Generate 20 random notes
    const newNotes = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100, // Random horizontal start (0-100%)
      delay: Math.random() * 2, // Random start delay
      duration: 3 + Math.random() * 4, // Random flight speed
      size: 20 + Math.random() * 40, // Random font size
    }));
    
    setNotes(newNotes);

    // Hide the component after animations finish (approx 7 seconds)
    const timer = setTimeout(() => setIsVisible(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {notes.map((note) => (
        <span
          key={note.id}
          className="absolute bottom-[-10%] text-orange-500/40 animate-fly-up"
          style={{
            left: `${note.left}%`,
            fontSize: `${note.size}px`,
            animationDelay: `${note.delay}s`,
            animationDuration: `${note.duration}s`,
          }}
        >
          {note.symbol}
        </span>
      ))}
    </div>
  );
};

export default MusicFlying;