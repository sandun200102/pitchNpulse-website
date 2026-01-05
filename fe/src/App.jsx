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
import CornerLogo from './components/CornerLogo';
import Banner from './components/Banner';
import { Link } from 'react-router-dom';

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative bg-stone-50 min-h-screen font-sans selection:bg-amber-200 overflow-x-hidden">
      
      {/* LAYER 1: Background Elements (Persistent) */}
      {/* <CornerLogo /> */}
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
                {/* MOBILE PADDING: 'pt-80' pushes text down to make room for the logo at the top.
                   DESKTOP PADDING: 'md:pt-10' restores the original spacing.
                */}
                <header className="relative px-6 pt-45 md:pt-10 pb-24 max-w-7xl mx-auto text-center">
                  
                  {/* ADS ONLY ON HOME & MOVES WITH SCROLL */}
                  <SideAdSlider />

                  <div className="inline-block px-4 py-1.5  mb-6 rounded-full bg-amber-100/80 backdrop-blur-sm text-amber-800 text-sm font-bold tracking-wide animate-fade-in border border-amber-200">
                    🎶 Now enrolling for 2026
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-600 leading-[1.1] mb-1 drop-shadow-sm">
                    Where   <br />
                    <span className="italic text-amber-600">Pitch Meets Rhythm</span>
                  </h1>

                  {/* PREMIUM SIGNATURE SECTION */}
                  <div className="flex justify-center my-8">
                    <div className="relative inline-flex flex-col items-center">
                      <div className="relative leading-tight px-2">
                        <span className="text-lg md:text-3xl font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] bg-[length:200%_auto] bg-clip-text text-transparent animate-gold-run drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                          Aravinda A. Gunasekara 
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
                      Professional vocal and instrumental music training in Sri Lankan light and folk music and Indian classical music, for students of all ages.

                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => setShowVideo(true)} 
                        className="px-10 py-5 bg-stone-900 text-white rounded-2xl font-bold text-lg hover:bg-amber-700 transition-all shadow-xl active:scale-95"
                      >
                        See Introduction
                      </button>
                      <Link to="/videos" className="inline-block">
                      <button className="group relative px-10 py-5 bg-amber-700 border border-stone-200 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-stone-900 active:scale-[0.98]">
                        
                        {/* Background Slide Layer */}
                        <div className="absolute inset-0 w-0 bg-stone-900 transition-all duration-[450px] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full" />
                        
                        {/* Button Text */}
                        <span className="relative flex items-center gap-2 transition-colors duration-[450px] ease-in-out group-hover:text-white">
                          View My Work
                          <svg 
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>

                      </button>
                    </Link>
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
                      <video autoPlay controls className="w-full h-full" src="/vid_n2.mp4">
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
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
                      <SocialCard icon={FaInstagram} label="Instagram" sub="Quick Tips" iconColor="text-[#E4405F]" hoverBg="bg-[#E4405F]" link="https://www.instagram.com/pitch_pulse_academy?igsh=MWwzeGd6b29hYTBoMA%3D%3D&utm_source=qr" />
                      <SocialCard icon={FaYoutube} label="YouTube" sub="Full Lessons" iconColor="text-[#FF0000]" hoverBg="bg-[#FF0000]" link="https://youtube.com" />
                      <SocialCard icon={FaTiktok} label="TikTok" sub="Short Clips" iconColor="text-[#000000]" hoverBg="bg-[#000000]" link="https://tiktok.com" />
                      <SocialCard icon={FaFacebookF} label="Facebook" sub="Community" iconColor="text-[#1877F2]" hoverBg="bg-[#1877F2]" link="https://www.facebook.com/share/1DKb8HHsGU/?mibextid=wwXIfr" />
                    </div>
                  </div>
                </section>

                
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
            <Route path="/videos" element={<VideoSection />} />
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