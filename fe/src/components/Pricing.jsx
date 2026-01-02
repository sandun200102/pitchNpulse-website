import React from 'react';
import { HiCheckCircle, HiLocationMarker, HiClock } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Trial Session",
      desc: "Perfect for beginners to test their interest and meet the instructor.",
      location: "Studio or Online", // Added location
      timing: "Flexible Scheduling", // Added timing
      features: ["30 Minute Session", "Instrument Consultation", "Goal Setting", "No Commitment"],
      button: "Book Free Trial",
      highlight: false
    },
    {
      name: "Standard",
      price: "$180",
      period: "per month",
      desc: "Our most popular choice for consistent weekly progress.",
      location: "Studio, Home, or Online",
      timing: "Fixed Weekly Slot",
      features: ["4 x 1 Hour Lessons", "Custom Practice Plans", "Theory Worksheets", "WhatsApp Support"],
      button: "Enroll Now",
      highlight: true
    },
    {
      name: "Professional",
      price: "$320",
      period: "per month",
      desc: "Accelerated learning for dedicated students and performers.",
      location: "Studio, Home, or Online",
      timing: "Priority Slots",
      features: ["8 x 1 Hour Lessons", "Performance Prep", "Recording Support", "Priority Scheduling"],
      button: "Go Pro",
      highlight: false
    }
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Invest in your talent</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-4">Lesson <span className="text-orange-500">Packages</span></h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl flex flex-col ${
              plan.highlight 
                ? "bg-stone-900 border-orange-500 scale-105 z-10 text-white shadow-orange-900/20" 
                : "bg-stone-50 border-stone-100 text-stone-900"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-black">{plan.price}</span>
              <span className={`text-sm ${plan.highlight ? "text-stone-400" : "text-stone-500"}`}>/{plan.period}</span>
            </div>

            {/* NEW: Location and Timing Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className={`flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-1 rounded-md ${plan.highlight ? "bg-stone-800 text-orange-400" : "bg-white text-stone-600 border border-stone-200"}`}>
                <HiLocationMarker /> {plan.location}
              </div>
              <div className={`flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-1 rounded-md ${plan.highlight ? "bg-stone-800 text-orange-400" : "bg-white text-stone-600 border border-stone-200"}`}>
                <HiClock /> {plan.timing}
              </div>
            </div>

            <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? "text-stone-300" : "text-stone-500"}`}>
              {plan.desc}
            </p>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                  <HiCheckCircle className={plan.highlight ? "text-orange-400" : "text-orange-500"} size={20} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link to="https://wa.me/yournumber">
              <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                plan.highlight 
                  ? "bg-orange-500 hover:bg-orange-600 text-white" 
                  : "bg-stone-900 hover:bg-stone-800 text-white"
              }`}>
                {plan.button}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* NEW: Scheduling/Location Footer */}
      <div className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl bg-stone-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold text-stone-900">Where do lessons take place?</h4>
          <p className="text-sm text-stone-500">Main Studio: 123 Music Ave, Downtown. <br/> We also offer in-home lessons within a 10-mile radius.</p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold text-stone-900">Current Availability</h4>
          <p className="text-sm text-stone-500">Mon–Fri: 3:00 PM – 9:00 PM<br/>Sat: 9:00 AM – 4:00 PM</p>
        </div>
      </div>
    </div>
  );
}