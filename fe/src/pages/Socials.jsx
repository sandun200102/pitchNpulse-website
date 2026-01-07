import React from 'react';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { GiMusicalNotes } from "react-icons/gi";
import SocialCard from '../components/SocialCard';

const Socials = () => {
  const socialLinks = [
    {
      icon: FaInstagram,
      label: "Instagram",
      sub: "Daily Practice Tips",
      iconColor: "text-[#E4405F]",
      hoverBg: "bg-[#E4405F]",
      link: "https://www.instagram.com/pitch_pulse_academy"
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      sub: "Recitals & Lessons",
      iconColor: "text-[#FF0000]",
      hoverBg: "bg-[#FF0000]",
      link: "https://www.youtube.com/@PitchPulseAcademy"
    },
    {
      icon: FaTiktok,
      label: "TikTok",
      sub: "Short Musical Clips",
      iconColor: "text-black",
      hoverBg: "bg-black",
      link: "https://www.tiktok.com/@pitch.pulse.acade"
    },
    {
      icon: FaFacebookF,
      label: "Facebook",
      sub: "Student Community",
      iconColor: "text-[#1877F2]",
      hoverBg: "bg-[#1877F2]",
      link: "https://www.facebook.com/share/1DKb8HHsGU/"
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen pt-10 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-amber-50/50 to-transparent -z-10" />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-6 shadow-sm">
            <GiMusicalNotes size={32} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Connect with <span className="italic text-amber-600">Pitch & Pulse</span>
          </h1>
          
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SocialCard {...social} />
            </div>
          ))}
        </div>

        {/* Direct Contact Section */}
        <div className="bg-white border border-stone-100 rounded-3xl p-8 shadow-sm">
          <h3 className="text-stone-900 font-bold text-xl mb-6">Direct Inquiries</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/yournumber" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:opacity-90 transition-all active:scale-95"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <a 
              href="mailto:contact@pitchpulse.com" 
              className="flex items-center justify-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all active:scale-95"
            >
              <FaEnvelope size={20} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;