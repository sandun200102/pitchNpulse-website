import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Icon Imports
import { FaInstagram, FaYoutube, FaFacebookF, FaTimes, FaTiktok } from 'react-icons/fa';

// Component Imports
import Navbar from './components/Navbar';
import SocialCard from './components/SocialCard';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import WhatsAppButton from './components/WhatsAppButton';
import MusicFlying from './components/MusicFlying';
import BackgroundLogo from './components/BackgroundLogo';
import AboutMe from './components/AboutMe';
import Classes from './components/Classes';
import BackToTop from './components/BackToTop';
import SideAdSlider from './components/SideAdSlider';

// Page Imports
import Tabla from './pages/Tabla';
import Guitar from './pages/Guitar';
import Vocal from './pages/Vocal';
import Violin from './pages/Violin';
import ChatBot from './components/ChatBot';

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative bg-stone-50 min-h-screen font-sans selection:bg-amber-200 overflow-x-hidden">
      
      {/* LAYER 1: Background Elements (Persistent) */}
      <BackgroundLogo />
      <MusicFlying />

      {/* LAYER 2: Main Layout */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* HOME PAGE */}
            <Route path="/" element={
              <>
                {/* IMPORTANT: 'relative' class here ensures the Slider 
                   stays pinned to this specific header while scrolling.
                */}
                <header className="relative px-6 pt-2 pb-24 max-w-7xl mx-auto text-center">
                  
                  {/* ADS ONLY ON HOME & MOVES WITH SCROLL */}
                  <SideAdSlider />

                  <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-100/80 backdrop-blur-sm text-amber-800 text-sm font-bold tracking-wide animate-fade-in border border-amber-200">
                    🎶 Now enrolling for 2026 Semester
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-[1.1] mb-6 drop-shadow-sm">
                    Master the Art of <br />
                    <span className="italic text-amber-600">Musical Expression</span>
                  </h1>

                  {/* PREMIUM SIGNATURE SECTION */}
                  <div className="flex justify-center my-1">
                    <div className="relative inline-flex flex-col items-center">
                      <div className="relative leading-tight px-2">
                        <span className="text-lg md:text-3xl font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] bg-[length:200%_auto] bg-clip-text text-transparent animate-gold-run drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                          K.R.S.Madhuwantha
                        </span>
                      </div>
                      <div className="relative w-full h-[1.5px] mt-1.5 overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] bg-[length:200%_auto] animate-gold-run opacity-80" />
                      </div>
                      <span className="mt-1 text-[8px] md:text-[10px] tracking-[0.4em] text-stone-400 font-medium uppercase italic">
                        Musician • Educator
                      </span>
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed bg-stone-50/40 backdrop-blur-[2px] rounded-lg">
                      Personalized music coaching for piano, guitar, and theory. 
                      Available for local sessions and global online classes.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => setShowVideo(true)} 
                        className="px-10 py-5 bg-stone-900 text-white rounded-2xl font-bold text-lg hover:bg-amber-700 transition-all shadow-xl active:scale-95"
                      >
                        See Introduction
                      </button>
                      <a href="#socials" className="px-10 py-5 bg-white/80 backdrop-blur-md border border-stone-200 text-stone-900 rounded-2xl font-bold text-lg hover:bg-white transition-all flex items-center justify-center shadow-sm">
                        View My Work
                      </a>
                    </div>
                  </div>
                </header>

                {/* Video Modal Section */}
                {showVideo && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
                      <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full">
                        <FaTimes size={24} />
                      </button>
                      <video autoPlay controls className="w-full h-full" src="/vid1.mp4">
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setShowVideo(false)}></div>
                  </div>
                )}

                {/* Social Hub Section */}
                <section id="socials" className="bg-white/60 backdrop-blur-md py-24 px-6 border-y border-stone-200/50">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl font-serif font-bold text-stone-900">Follow My Channel</h2>
                      <p className="text-stone-400 mt-2 font-medium">Get free daily tips and student performance updates</p>
                    </div>
                    
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">                      <SocialCard icon={FaInstagram} label="Instagram" sub="Quick Tips" iconColor="text-[#E4405F]" hoverBg="bg-[#E4405F]" link="https://instagram.com" />
                      <SocialCard icon={FaYoutube} label="YouTube" sub="Full Lessons" iconColor="text-[#FF0000]" hoverBg="bg-[#FF0000]" link="https://youtube.com" />
                      <SocialCard  icon={FaTiktok} label="TikTok" sub="Short Clips" iconColor="text-[#000000]" hoverBg="bg-[#000000]" link="https://tiktok.com" 
      />
                      <SocialCard icon={FaFacebookF} label="Facebook" sub="Community" iconColor="text-[#1877F2]" hoverBg="bg-[#1877F2]" link="https://facebook.com" />
                    </div>
                  </div>
                </section>

                <VideoSection />
                <Testimonials />
              </>
            } />

            {/* DEDICATED ROUTES */}
            <Route path="/about" element={<AboutMe />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/classes/tabla" element={<Tabla />} />
            <Route path="/classes/violin" element={<Violin />} />
            <Route path="/classes/piano" element={<Guitar/>} />
            <Route path="/classes/vocals" element={<Vocal />} />
          </Routes>
        </main>

        <footer className="bg-stone-900 text-stone-500 py-20 px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-white font-serif text-2xl mb-4 italic">"Where words fail, music speaks."</h3>
            <div className="h-1 w-12 bg-amber-600 mx-auto mb-8 rounded-full" />
            <p className="text-xs">© 2026 Pitch & Pulse Academy. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <WhatsAppButton />
      <ChatBot />
      <BackToTop />
    </div>
  );
}

export default App;