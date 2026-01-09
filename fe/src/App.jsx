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
import { GiMusicalNotes } from "react-icons/gi";


// Page Imports
import Tabla from './pages/Tabla';
import Guitar from './pages/Guitar';
import Vocal from './pages/Vocal';
import Violin from './pages/Violin';
import ChatBot from './components/ChatBot';
import CornerLogo from './components/CornerLogo';
import Banner from './components/Banner';
import ErrorPage from './pages/ErrorPage';
import { Link } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import { useEffect } from 'react';
import Socials from './pages/Socials';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner size="lg" color="text-indigo-500" />
      </div>
    );}

  return (
    <div className="relative bg-white min-h-screen font-sans selection:bg-amber-200 overflow-x-hidden">
      
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
                <header className="relative px-6 pt-48 md:pt-10 pb-24 max-w-7xl mx-auto text-center">
                  
                  {/* ADS ONLY ON HOME & MOVES WITH SCROLL */}
                  <SideAdSlider />

                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 text-amber-900 text-[13px] font-bold tracking-wider uppercase shadow-sm animate-fade-in-down">
  
                    {/* Icon with a subtle bounce or pulse to draw the eye */}
                    <span className="text-amber-600 animate-pulse">
                      <GiMusicalNotes size={16} />
                    </span>

                    <span className="leading-none">
                      Now enrolling for 2026
                    </span>
                    
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
                    <p className="text-stone-600 text-lg md:text-xl max-w-2xl leading-relaxed bg-stone-50/40 rounded-lg mb-10
                        mx-auto text-center 
                        min-[1301px]:ml-auto min-[1301px]:text-left
                        max-[1500px]:mr-[200px] 
                        max-md:mx-auto max-md:mr-0 max-md:ml-0">
                        Professional vocal and instrumental music training in Sri Lankan light and folk music and North Indian classical music, for students of all ages.
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
                      <video autoPlay controls className="w-full h-full" src="/vid_n4.mp4">
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setShowVideo(false)}></div>
                  </div>
                )}

                
                <section id="social" className="relative bg-amber-50 backdrop-blur-xl py-32 px-6 border-y border-stone-200/60 overflow-hidden">
                  {/* Decorative Background Element */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-100/50 via-transparent to-transparent -z-10" />
                  
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
                        Join the <span className="text-stone-500">Community</span>
                      </h2>
                      <div className="h-1 w-20 bg-stone-900 mx-auto mt-4 mb-4 rounded-full" />
                      <p className="text-stone-500 text-lg mt-2 font-medium max-w-md mx-auto leading-relaxed">
                        Get free daily tips and student performance updates delivered to your feed.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                      {/* Cards go here */}
                        <SocialCard icon={FaInstagram} label="Instagram" sub="Quick Tips" iconColor="text-[#E4405F]" hoverBg="bg-[#E4405F]" link="https://www.instagram.com/pitch_pulse_academy?igsh=MWwzeGd6b29hYTBoMA%3D%3D&utm_source=qr" />
                        <SocialCard icon={FaYoutube} label="YouTube" sub="Full Lessons" iconColor="text-[#FF0000]" hoverBg="bg-[#FF0000]" link="https://www.youtube.com/@PitchPulseAcademy" />
                        <SocialCard icon={FaTiktok} label="TikTok" sub="Short Clips" iconColor="text-[#000000]" hoverBg="bg-[#000000]" link="https://www.tiktok.com/@pitch.pulse.acade?_r=1&_t=ZS-92ptSxai3jW" />
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
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/social" element={<Socials />} />
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