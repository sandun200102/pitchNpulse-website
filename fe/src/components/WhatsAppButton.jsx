import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  // CONFIGURATION
  const countryCode = "61"; // Australia country code
  const localNumber = "466680198"; // Your number without the leading '0'
  const fullNumber = countryCode + localNumber;
  const message = encodeURIComponent("Hello! I'm interested in your music lessons.");

  // whatsapp:// is better for forcing the app to open on mobile
  const mobileUrl = `whatsapp://send?phone=${fullNumber}&text=${message}`;
  
  // https://wa.me/ is the universal standard (works on Desktop/Web too)
  const webUrl = `https://wa.me/${fullNumber}?text=${message}`;

  return (
    <a 
      href={webUrl} // wa.me is safest as a default; most mobile browsers auto-redirect to the app
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-1 right-1 z-[100] flex flex-col items-center group"
    >
      {/* Dynamic Label */}
      <span className="mb-2 bg-white text-[#075E54] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-stone-100 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        Chat with us
      </span>
      
      {/* Official WhatsApp Color Button */}
      <div className="bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-all duration-300 relative">
        <FaWhatsapp size={20} />
        <span className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" />
      </div>
    </a>
  );
}