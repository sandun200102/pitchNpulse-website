import React from 'react';
import { 
  HiCheckCircle, HiLocationMarker, HiClock, HiAcademicCap, 
  HiSparkles, HiBookOpen, HiUsers, HiLightningBolt, 
  HiHeart, HiPhone, HiVideoCamera, HiUserGroup,
  HiArrowNarrowRight, HiCalendar, HiMusicNote, HiMail
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const freePlan = {
    name: "Starter",
    price: "Free",
    period: "Trial Session",
    desc: "Test your interest and meet your instructor with a no-obligation trial. We work around your schedule.",
    logistics: [
      { icon: <HiUserGroup />, text: "Individual / Group" },
      { icon: <HiClock />, text: "1h Sessions" },
      { icon: <HiCalendar />, text: "Flexible Timing" }
    ],
    features: [
      "30 Minute Private Session",
      "Instrument Consultation",
      "Goal Setting Assessment",
      "Beginners & Kids Welcome",
      "Flexible Class Timings"
    ],
    button: "Book Free Trial"
  };

  const whyChooseUs = [
    {
      title: "Experienced Instruction",
      desc: "Qualified instructor with a strong academic and practical music background.",
      icon: <HiSparkles className="text-orange-500" size={20} />
    },
    {
      title: "Structured Syllabus",
      desc: "Theory and practical learning ensuring steady progress.",
      icon: <HiBookOpen className="text-orange-500" size={20} />
    },
    {
      title: "Performance Focus",
      desc: "Strong focus on rhythm and pitch, building skilled musicians.",
      icon: <HiLightningBolt className="text-orange-500" size={20} />
    },
    {
      title: "Supportive Environment",
      desc: "Friendly atmosphere that encourages creativity and growth.",
      icon: <HiHeart className="text-orange-500" size={20} />
    }
  ];

  return (
    <div className="bg-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-xs">Join Pitch Pulse Academy</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-3">Start Your <span className="text-orange-500">Music Journey</span></h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        
        {/* LEFT: Starter Pack Card */}
        <div className="lg:sticky lg:top-10 py-12 px-10 rounded-[3rem] bg-stone-900 border-2 border-orange-500 text-white shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[620px]">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold tracking-tight text-orange-500 mb-2">{freePlan.name} Pack</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-7xl font-black tracking-tighter">{freePlan.price}</span>
              <span className="text-lg text-stone-400 font-medium">/{freePlan.period}</span>
            </div>

            <p className="text-lg mb-8 text-stone-300 leading-relaxed">
              {freePlan.desc}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {freePlan.logistics.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold bg-stone-800 border border-stone-700 px-3 py-2 rounded-xl text-orange-400 uppercase tracking-wider">
                  {item.icon} {item.text}
                </div>
              ))}
            </div>

            <ul className="space-y-4 mb-10">
              {freePlan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-base font-medium text-stone-200">
                  <HiCheckCircle className={`shrink-0 ${feature.includes("Flexible") ? "text-orange-400 scale-125" : "text-orange-400"}`} size={22} />
                  <span className={feature.includes("Flexible") ? "text-orange-400 font-bold" : ""}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link to="https://wa.me/61466680198" className="relative z-10">
            <button className="group w-full py-5 rounded-2xl font-black bg-orange-500 hover:bg-orange-600 transition-all active:scale-95 text-xl flex items-center justify-center gap-3 shadow-lg shadow-orange-900/40">
              {freePlan.button}
              <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* RIGHT: Format & Why Choose Us */}
        <div className="flex flex-col space-y-8">
          <section className="bg-stone-50 p-8 rounded-[2.5rem] border border-stone-100">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Class Format</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex items-center gap-4">
                <div className="text-orange-500"><HiClock size={24}/></div>
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Duration</p>
                  <p className="text-stone-900 font-bold">1h Sessions</p>
                </div>
              </div>
              <div className="bg-orange-500 p-5 rounded-2xl shadow-md border border-orange-400 flex items-center gap-4">
                <div className="text-white"><HiCalendar size={24}/></div>
                <div>
                  <p className="text-[10px] font-bold text-orange-100 uppercase tracking-widest">Availability</p>
                  <p className="text-white font-bold">Flexible Timings</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-4 italic text-center">Individual and group classes available with timings to suit busy schedules.</p>
          </section>

          <section className="px-4">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">Why Choose Us</h3>
            <div className="space-y-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-stone-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-stone-900 mb-1">{item.title}</h4>
                    <p className="text-stone-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Academy Perks */}
          <div className="p-8 rounded-[2.5rem] bg-stone-900 text-white relative overflow-hidden shadow-lg border border-stone-800">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <HiMusicNote size={80} />
             </div>
             <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-orange-400">
               <HiAcademicCap /> Academy Perks
             </h4>
             <p className="text-stone-400 text-sm leading-relaxed">
               Ongoing students gain exclusive access to our <span className="text-white font-bold">dedicated progress portal</span> and future <span className="text-white font-bold">performance opportunities</span> to showcase their talent.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-stone-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          
          <a href="https://www.google.com/maps/search/Canning+Vale+WA+6155" target="_blank" rel="noreferrer" className="bg-stone-50 p-6 rounded-3xl flex items-center gap-4 hover:bg-stone-100 transition-colors">
            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm"><HiLocationMarker size={24}/></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Location</p>
              <p className="text-stone-900 font-bold text-sm leading-tight">Canning Vale WA, 6155</p>
            </div>
          </a>

          

          <a href="mailto:pitchpulseacademy@gmail.com" className="bg-stone-50 p-6 rounded-3xl flex items-center gap-4 hover:bg-stone-100 transition-colors overflow-hidden">
            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm"><HiMail size={24}/></div>
            <div className="overflow-hidden">
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Email</p>
              <p className="text-stone-900 font-bold text-[13px] leading-tight truncate">pitchpulseacademy@gmail.com</p>
            </div>
          </a>

          <div className="bg-orange-50 p-6 rounded-3xl flex items-center gap-4 border border-orange-100">
            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm"><HiClock size={24}/></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-600">Class Times</p>
              <p className="text-orange-700 font-bold text-sm leading-tight">Flexible Timings</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}