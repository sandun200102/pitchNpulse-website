import React, { useState, useEffect } from 'react';
import { PiMicrophoneStageFill } from "react-icons/pi";
import { MdMonitorHeart } from "react-icons/md";
import { RiShakeHandsLine } from "react-icons/ri";

export default function AboutMe() {
  // 1. Array of your three images
  const images = [
    "pro1.jpeg", 
    "pro2.jpeg", 
    "pro3.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const emailAddress = "pitchpulseacademy@gmail.com";

  // 2. Timer for the automatic loop (changes every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero / Bio Section */}
      <section id="about" className="py-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image side with Loop Logic */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange-500 rounded-[2rem] -z-10"></div>
            
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/5] bg-stone-100">
              {images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Aravinda A. Gunasekara - Slide ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                    ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                    grayscale hover:grayscale-0`}
                />
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="w-full md:w-1/2">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Founder & Lead Music Instructor</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4 mb-6 leading-tight">
              Aravinda A. Gunasekara
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              Aravinda is a graduate-qualified music teacher dedicated to nurturing talent through structured, creative, and practical learning. He holds a <strong>Bachelor of Performing Arts (Degree)</strong> from the University of the Visual and Performing Arts, Colombo.
            </p>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              As a <strong>Sangeeth Visharad</strong> in Violin, Tabla, and Vocal from the <strong>Bhatkhande Sangit Vidyapith, Lucknow, India</strong>, Aravinda brings over 15 years of experience.<br></br> You can reach him directly at <a href={`mailto:${emailAddress}`} className="text-orange-600 hover:underline font-medium">{emailAddress}</a>.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-6 border-y border-stone-100">
              <div>
                <h4 className="text-4xl font-bold text-orange-600">15+</h4>
                <p className="text-stone-500 font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-orange-600">5000+</h4>
                <p className="text-stone-500 font-medium">Students Taught</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Academy Mission & Expertise */}
      <section className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6 text-orange-500">The Academy</h3>
              <p className="text-stone-300 leading-relaxed mb-6">
                Based in <strong>Western Australia</strong>, Pitch & Pulse Academy is a modern music academy dedicated to delivering high-quality education. We bridge traditional artistry with contemporary teaching techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-orange-500">✔</div>
                  <p className="text-stone-400"><span className="text-white font-semibold">Contact:</span> <a href={`mailto:${emailAddress}`} className="hover:text-orange-400 transition-colors">{emailAddress}</a></p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-orange-500">✔</div>
                  <p className="text-stone-400"><span className="text-white font-semibold">Flexibility:</span> Professional online and in-person classes across Australia.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-orange-500">✔</div>
                  <p className="text-stone-400"><span className="text-white font-semibold">Structure:</span> Individual and group lessons for beginners to advanced students.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700">
              <h4 className="text-xl font-bold mb-6 text-orange-400">Professional Expertise</h4>
              <ul className="space-y-6">
                <li>
                  <h5 className="font-bold text-white">Vocal Training</h5>
                  <p className="text-sm text-stone-400">Focusing on melodic soul, emotional delivery, and ear training.</p>
                </li>
                <li>
                  <h5 className="font-bold text-white">Rhythm & Percussion (Tabla)</h5>
                  <p className="text-sm text-stone-400">Mastering complex timing cycles and the heartbeat of rhythm.</p>
                </li>
                <li>
                  <h5 className="font-bold text-white">Instrumental (Violin & Harmonium)</h5>
                  <p className="text-sm text-stone-400">Classical foundations combined with contemporary expression.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Performance & Qualifications Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Real-World Growth</h3>
            <p className="text-stone-500 mt-4">We prepare you for the stage and beyond.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-100 rounded-2xl overflow-hidden bg-white shadow-sm">
  
            {/* Card 1 */}
            <div className="group flex flex-col items-center text-center p-10 transition-colors duration-300 hover:bg-stone-50">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 text-3xl mb-6 transition-transform duration-500 group-hover:scale-110">
                <MdMonitorHeart />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">Exams & Mentoring</h4>
              <p className="text-stone-600 text-[15px] leading-relaxed max-w-[280px]">
                Dedicated guidance for <strong className="text-stone-900">Visharad examinations</strong>, following structured syllabi with personalized mentoring.
              </p>
            </div>

            {/* Card 2 - The Centerpiece */}
            <div className="group flex flex-col items-center text-center p-10 bg-stone-50/50 border-y md:border-y-0 md:border-x border-stone-100 transition-colors duration-300 hover:bg-stone-50">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 text-3xl mb-6 transition-transform duration-500 group-hover:scale-110">
                <PiMicrophoneStageFill />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">Stage Experience</h4>
              <p className="text-stone-600 text-[15px] leading-relaxed max-w-[280px]">
                Preparation for music competitions, school performances, and stage shows to build real-world confidence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col items-center text-center p-10 transition-colors duration-300 hover:bg-stone-50">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-stone-100 text-stone-900 text-3xl mb-6 transition-transform duration-500 group-hover:scale-110">
                <RiShakeHandsLine />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4">Supportive Environment</h4>
              <p className="text-stone-600 text-[15px] leading-relaxed max-w-[280px]">
                Every student grows at their own pace in an encouraging space designed to inspire a lifelong love for music.
              </p>
            </div>

          </div>

          {/* Final Quote/CTA */}
          <div className="mt-20 text-center bg-orange-50 p-12 rounded-[3rem]">
          <p className="text-2xl font-serif italic text-stone-800 max-w-3xl mx-auto">
            "Our goal is to inspire confidence and creativity while delivering a practical musical foundation for every student."
          </p>
          
          {/* Updated Link Below */}
          <a 
            href={`mailto:${emailAddress}?subject=Inquiry about Music Lessons&body=Hi Aravinda, I would like to learn more about...`}
            className="mt-8 inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors"
          >
            Begin Your Musical Journey
          </a>

          <p className="mt-4 text-stone-500 text-sm font-medium">{emailAddress}</p>
        </div>
        </div>
      </section>
    </div>
  );
}