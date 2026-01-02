export default function SocialCard({ icon: Icon, label, sub, iconColor, hoverBg, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      className="group relative bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col items-center"
    >
      {/* Soft Glow Background on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${hoverBg}`} />
      
      {/* Icon Container */}
      <div className="relative z-10 p-5 rounded-2xl mb-4 bg-stone-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
        {/* Actual Brand Color applied to the Icon */}
        <Icon size={36} className={`${iconColor} transition-all duration-500`} />
      </div>

      <div className="relative z-10 text-center">
        <h4 className="font-bold text-lg text-stone-900 tracking-tight group-hover:text-stone-700">{label}</h4>
        <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">{sub}</p>
      </div>

      {/* Modern Bottom Indicator */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 group-hover:w-20 rounded-t-full transition-all duration-500 ${hoverBg}`} />
    </a>
  );
}