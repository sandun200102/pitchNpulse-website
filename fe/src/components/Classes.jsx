import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiViolin, GiPianoKeys, GiMicrophone } from 'react-icons/gi';
import { FaDrum, FaTimes, FaMusic, FaChevronRight, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

export default function Classes() {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // WhatsApp Configuration
  const PHONE_NUMBER = "94761625663"; // Sri Lanka country code + number

  const getWhatsAppLink = (instrument) => {
    const baseMsg = `Hello! I'm interested in booking a trial lesson for ${instrument}. Could you please provide more details?`;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(baseMsg)}`;
  };

  const syllabusData = {
    'Tabla & Rhythm': {
      beginner: {
        obj: "To introduce students to the fundamentals of tabla playing and basic rhythm concepts.",
        content: ["Introduction to tabla (dayan and bayan)", "Proper hand positioning and posture", "Basic tabla bols (basic notes)", "Fundamental rhythm patterns", "Simple light lessons and exercises", "Basic taals (introductory rhythms)", "Timing and tempo control", "Practice with simple light compositions"]
      },
      intermediate: {
        obj: "To develop rhythmic understanding and introduce classical music elements along with Sri Lankan light music patterns.",
        content: ["Revision and strengthening of basic bols", "Introduction to Indian classical music concepts", "Intermediate taals and rhythmic structures", "Variations and simple compositions", "Practice of Sri Lankan light music rhythm patterns", "Accompaniment techniques for songs", "Tempo control and rhythmic clarity", "Basic performance practice"]
      },
      advanced: {
        obj: "To achieve mastery in tabla performance, including solo playing, accompaniment, and light music applications.",
        content: ["Advanced bols and complex rhythmic patterns", "Solo tabla compositions and improvisation", "Techniques for accompaniment (vocal and instrumental)", "Advanced taals and layakari (rhythmic variations)", "Playing for Sri Lankan light music and fusion styles", "Stage performance techniques", "Confidence building and musical expression", "Tabla tuning"]
      }
    },
    'Violin Mastery': {
      beginner: {
        obj: "To build a strong foundation in violin playing through basic techniques and simple musical pieces.",
        content: ["Introduction to the violin and its parts", "Proper posture and bow hold", "Basic fingering techniques", "Open string exercises", "Simple scales and rhythm patterns", "Beginner-level exercises", "Easy beginner songs", "Introduction to basic music notation"]
      },
      intermediate: {
        obj: "To develop technical skills and introduce students to classical music concepts and raga-based understanding.",
        content: ["Revision and strengthening of basic techniques", "Introduction to classical music concepts", "Basic raga knowledge and structure", "Scales and fingering in different positions", "Bowing techniques and rhythm control", "Practice of selected Sri Lankan light music", "Introduction to light songs and simple compositions", "Basic performance practice"]
      },
      advanced: {
        obj: "To achieve advanced technical proficiency and deeper understanding of classical and traditional music styles.",
        content: ["Advanced bowing and fingering techniques", "Higher-position playing and speed control", "Advanced raga knowledge and improvisation", "Indian classical music compositions", "Sri Lankan light music and folk music pieces", "Advanced songs and complex compositions", "Expression, ornamentation, and musical phrasing", "Stage performance and confidence building"]
      }
    },
    'Harmonium': {
      beginner: {
        obj: "To introduce students to the harmonium and build a strong foundation in basic handling, notes, and simple melodies.",
        content: ["Introduction to the harmonium and its parts", "Proper handling of the bellows", "Basic posture and hand coordination", "Introduction to musical notes (swara)", "Basic fingering techniques", "Simple scales and exercises", "Beginner-level songs and melodies", "Basic rhythm awareness"]
      },
      intermediate: {
        obj: "To develop fingering techniques and introduce accompaniment skills and light music performance.",
        content: ["Strengthening of fingering patterns", "Scale practice with different tempos", "Introduction to accompaniment techniques", "Playing for vocals and other instruments", "Chord and harmony basics", "Light music playing techniques", "Practice of selected light songs", "Rhythm coordination and expression"]
      },
      advanced: {
        obj: "To achieve advanced performance skills with in-depth raga knowledge and classical music application.",
        content: ["Advanced fingering and speed control", "Playing with advanced ragas", "Raga-based improvisation and elaboration", "Indian classical music compositions", "Accompaniment for classical performances", "Sri Lankan light music performance", "Musical expression, phrasing, and dynamics", "Stage performance and confidence building"]
      }
    },
    'Vocal Training': {
      beginner: {
        obj: "To introduce students to basic vocal techniques and build confidence in singing simple songs.",
        content: ["Breathing techniques for singing", "Introduction to musical notes (swara)", "Basic pitch and tone recognition", "Vocal exercises for beginners", "Singing simple beginner songs", "Developing basic rhythm and timing"]
      },
      intermediate: {
        obj: "To improve vocal range, control, and introduce foundational exercises in raga-based music and light songs.",
        content: ["Identification of vocal ranges (swaraparasaya)", "Exercises to strengthen vocal control and accuracy", "Introduction to raga-based music (ragadhari sangeetha)", "Practice of simple raga exercises", "Singing Sri Lankan light music and simple songs", "Expression and voice modulation techniques"]
      },
      advanced: {
        obj: "To develop mastery in vocal performance, advanced raga exercises, and diverse singing styles.",
        content: ["Advanced swara exercises for vocal agility and control", "In-depth understanding of raga-based compositions", "Mastery of Indian classical music techniques", "Performance of Sri Lankan light music and folk songs", "Improvisation and ornamentation (alankara)", "Stage performance and expression", "Developing versatility across multiple singing styles"]
      }
    }
  };

  const courses = [
    { name: 'Tabla & Rhythm', icon: FaDrum, desc: 'Master traditional beats and complex rhythmic cycles from classical foundations.', path: '/classes/tabla', levels: 'Beg - Adv', age: 'All Ages', format: 'Online / In-person' },
    { name: 'Vocal Training', icon: GiMicrophone, desc: 'Perfect your pitch and breath control across multiple musical genres.', path: '/classes/vocals', levels: 'Beg - Adv', age: 'Kids / Teens / Adults', format: 'Online / In-person' },
    { name: 'Harmonium', icon: GiPianoKeys, desc: 'Learn the soul of devotional music through melody and hand-pumped bellows.', path: '/classes/harmonium', levels: 'Beg - Int', age: 'All Ages', format: 'In-person' },
    { name: 'Violin Mastery', icon: GiViolin, desc: 'Explore the elegance of strings, from basic bowing to advanced concertos.', path: '/classes/violin', levels: 'Beg - Adv', age: 'Kids / Teens / Adults', format: 'Online / In-person' }
  ];

  return (
    <div className="bg-stone-900 min-h-screen relative font-sans text-stone-200">
      
      {/* 1. Page Header */}
      <header className="py-24 px-6 text-center bg-gradient-to-b from-black to-stone-900">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Courses & <span className="text-orange-500">Programs</span>
        </h1>
        <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
          From foundational basics to professional mastery. Choose your path and start your musical journey today.
        </p>
      </header>

      {/* 2. Course Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-stone-800/40 border border-stone-700/50 hover:border-orange-500/50 hover:bg-stone-800/80 transition-all duration-500 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-all duration-500">
                  <course.icon size={28} className="text-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{course.name}</h3>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed mb-8 flex-grow">{course.desc}</p>

              <div className="grid grid-cols-3 gap-2 mb-8 border-t border-stone-700/50 pt-6">
                <div className="text-center"><p className="text-[10px] text-orange-500 uppercase font-bold">Levels</p><p className="text-xs text-stone-300">{course.levels}</p></div>
                <div className="text-center border-x border-stone-700/50"><p className="text-[10px] text-orange-500 uppercase font-bold">Students</p><p className="text-xs text-stone-300">{course.age}</p></div>
                <div className="text-center"><p className="text-[10px] text-orange-500 uppercase font-bold">Format</p><p className="text-xs text-stone-300">{course.format}</p></div>
              </div>
              
              <button 
                onClick={() => setSelectedCourse(course.name)}
                className="w-full text-center bg-orange-500 text-white py-4 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all shadow-lg"
              >
                View Syllabus & Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Syllabus Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-stone-900 rounded-[2rem] overflow-hidden border border-stone-700 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-800 flex justify-between items-center bg-stone-800/50">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white">{selectedCourse}</h2>
                <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">Complete Curriculum</p>
              </div>
              <button onClick={() => setSelectedCourse(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-stone-400 hover:text-white">
                <FaTimes size={28} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-6 md:p-10 space-y-12">
              {['beginner', 'intermediate', 'advanced'].map((level) => (
                <div key={level} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase">{level}</span>
                    <div className="h-px bg-stone-700 flex-grow"></div>
                  </div>
                  <h4 className="text-lg text-stone-300 mb-2 italic">Objective: {syllabusData[selectedCourse][level].obj}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {syllabusData[selectedCourse][level].content.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-stone-400 group">
                        <FaCheckCircle className="mt-1 text-orange-500/50 group-hover:text-orange-500 shrink-0" size={14} />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer with Dynamic WhatsApp Link */}
            <div className="p-8 border-t border-stone-800 bg-black/50 text-center">
              <a 
                href={getWhatsAppLink(selectedCourse)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#128C7E] transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                <FaWhatsapp size={24} />
                BOOK A TRIAL FOR {selectedCourse.toUpperCase()}
              </a>
              <p className="text-stone-500 text-xs mt-4 uppercase tracking-widest">
                Fastest Response via WhatsApp
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bottom CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-orange-600 to-amber-600 text-white shadow-2xl">
          <h2 className="text-4xl font-serif font-bold mb-4">Unsure where to start?</h2>
          <p className="mb-10 text-orange-100 max-w-xl mx-auto">Watch our studio tour to see our teaching methods and facility in action.</p>
          <button onClick={() => setShowVideo(true)} className="bg-white text-orange-600 px-12 py-4 rounded-full font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-tighter">
            Play Studio Intro
          </button>
        </div>
      </section>

      {/* 5. Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
            <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors">
              <FaTimes size={24} />
            </button>
            <video autoPlay controls className="w-full h-full" src="vid1.mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}