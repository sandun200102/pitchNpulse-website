import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <>
      {/* LARGE CORNER LOGO - Hidden on small tablets to prevent overlap */}
      <div className="fixed -top-[25px] -left-[15px] z-[70] pointer-events-none hidden lg:block">
        <img 
          src="/Music-logo.png" 
          alt="Pitch & Pulse Logo" 
          className="pointer-events-auto h-[clamp(150px,12vw+30px,250px)] w-auto transition-transform hover:scale-105 duration-500"
        />
      </div>

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/90 border-b border-orange-500/20 px-4 md:px-8 py-1 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative min-h-[60px]">
          
          {/* BRANDING SECTION 
              - mobile: absolute center
              - tablet (md): static, moderate padding
              - desktop (lg): high padding for large logo
          */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group cursor-pointer 
                       absolute left-1/2 -translate-x-1/2 
                       md:static md:translate-x-0 
                       md:pl-10 lg:pl-[240px] 
                       z-20"
          >
            {/* Small Logo Icon - Visible on Mobile and Tablet */}
            <div className="relative lg:hidden">
              <img 
                src="/Music-logo.png" 
                alt="Logo" 
                className="h-10 w-10 rounded-full border border-orange-400/30 object-cover" 
              />
              <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-sm"></div>
            </div>
            
            <div className="flex flex-col text-left">
              <h1 className="text-xl lg:text-3xl font-serif font-bold tracking-tight leading-none whitespace-nowrap">
                Pitch & <span className="text-orange-500">Pulse</span>
              </h1>
              <span className="text-[9px] lg:text-[11px] tracking-[0.4em] font-black text-stone-400 uppercase mt-1">
                Academy
              </span>
            </div>
          </Link>
          
          {/* DESKTOP MENU - Hidden on iPad-sized screens (md) and shown only on LG (large laptops) */}
          <div className="hidden lg:flex items-center lg:gap-8 font-medium ml-auto">
            {navLinks.map((link) => (
              link.isHash ? (
                <HashLink 
                  smooth 
                  key={link.name} 
                  to={link.path} 
                  className="text-stone-300 hover:text-orange-400 transition-colors duration-300 text-sm uppercase tracking-widest whitespace-nowrap"
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-stone-300 hover:text-orange-400 transition-colors duration-300 text-sm uppercase tracking-widest whitespace-nowrap"
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <Link to="/classes" className="ml-2">
              <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-2.5 rounded-full font-bold text-base hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 whitespace-nowrap">
                View Classes
              </button>
            </Link>
          </div>

          {/* MOBILE/TABLET TOGGLE - Now visible on iPad Mini (md) */}
          <button 
            className="lg:hidden text-orange-500 p-2 z-30 ml-auto" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>

        {/* SCROLL PROGRESS BAR */}
        <div 
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }} 
        />

        {/* MOBILE MENU OVERLAY */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/98 backdrop-blur-3xl border-b border-orange-500/30 p-10 flex flex-col gap-8 lg:hidden animate-in fade-in slide-in-from-top-5 duration-300">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="text-2xl font-serif font-bold text-stone-200 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/classes" onClick={() => setIsOpen(false)} className="mt-4">
              <button className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-4 rounded-xl font-bold text-xl shadow-lg active:scale-95 transition-all">
                View Classes
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}