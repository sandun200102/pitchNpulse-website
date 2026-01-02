import React from 'react';

export default function AboutMe() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Main Bio Section */}
      <section id="about" className="py-20px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image side with decorative border */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-500 rounded-[2rem] -z-10"></div>
            <img 
              src="musician.png" 
              alt="Instructor at Pitch & Pulse" 
              className="rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5]"
            />
          </div>

          {/* Text side */}
          <div className="w-full md:w-1/2">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">The Story Behind the Sound</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4 mb-6 leading-tight">
              Connecting Tradition with <span className="italic">Modern Expression</span>
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              At <strong>Pitch & Pulse Academy</strong>, we believe music is a universal language. My journey started with classical training, but my passion led me to explore the rhythmic complexity of traditional instruments and the soul of modern vocals.
            </p>
            <div className="grid grid-cols-2 gap-8 py-6 border-y border-stone-100">
              <div>
                <h4 className="text-4xl font-bold text-orange-600">12+</h4>
                <p className="text-stone-500 font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-orange-600">500+</h4>
                <p className="text-stone-500 font-medium">Students Taught</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section (The "Pitch" and "Pulse") */}
      <section className="bg-stone-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-white rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif font-bold text-orange-600 mb-4">The Pitch</h3>
            <p className="text-stone-600 leading-relaxed">
              Focusing on the melodic soul—Violin, Piano, and Vocals. We dive deep into ear training, scales, and the emotional delivery of notes to ensure your music "speaks" to the listener.
            </p>
          </div>
          <div className="p-10 bg-white rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif font-bold text-orange-600 mb-4">The Pulse</h3>
            <p className="text-stone-600 leading-relaxed">
              Focusing on the heartbeat—Tabla and Rhythm. We master the timing and complex cycles that provide the foundation for every masterpiece, ensuring you never miss a beat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}