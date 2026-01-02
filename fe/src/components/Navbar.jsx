import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Logic to calculate scroll percentage
  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(percentage);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', isHash: false },
    { name: 'About Me', path: '/about', isHash: false },
    { name: 'Socials', path: '/#socials', isHash: true },
    { name: 'Pricing', path: '/pricing', isHash: false },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/90 border-b border-orange-500/20 px-6 py-3 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* BRANDING SECTION */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <img 
              src="/Music-logo.jpeg" 
              alt="Logo" 
              className="h-12 w-12 rounded-full border border-orange-400/30 object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-sm group-hover:blur-md transition-all"></div>
          </div>
          
          <div className="flex flex-col text-left">
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tight leading-none">
              Pitch & <span className="text-orange-500">Pulse</span>
            </h1>
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] font-black text-stone-400 uppercase">
              Academy
            </span>
          </div>
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link) => (
            link.isHash ? (
              <HashLink 
                smooth 
                key={link.name} 
                to={link.path} 
                className="text-stone-300 hover:text-orange-400 transition-colors duration-300 text-sm uppercase tracking-widest"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-stone-300 hover:text-orange-400 transition-colors duration-300 text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            )
          ))}
          
          <Link to="/classes">
            <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-7 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
              View Classes
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-orange-500 p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
        </button>
      </div>

      {/* --- SCROLL PROGRESS BAR --- */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-orange-500/30 p-8 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            link.isHash ? (
              <HashLink 
                smooth 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="text-xl font-serif font-bold text-stone-200"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="text-xl font-serif font-bold text-stone-200"
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* Mobile View Classes Button */}
          <div className="pt-4 border-t border-white/10">
            <Link to="/classes" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white px-7 py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all">
                View Classes
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}