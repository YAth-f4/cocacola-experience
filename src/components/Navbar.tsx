import React, { useState, useEffect } from 'react';
import { Search, Sparkles, Menu, X, RotateCcw, CupSoda } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onReplayIntro: () => void;
  onOpenFlavourLab: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  onReplayIntro,
  onOpenFlavourLab,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'Flavour Lab', href: '#flavour-lab', isHighlight: true },
    { name: 'Heritage', href: '#heritage' },
    { name: 'Sustainability', href: '#sustainability' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F5]/90 backdrop-blur-md shadow-md shadow-red-950/5 py-3 border-b border-[#E41E3F]/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="group flex items-center gap-2 text-left focus:outline-none"
            >
              <span className="spencerian-font text-3xl sm:text-4xl font-bold text-[#E41E3F] tracking-tight group-hover:scale-105 transition-transform duration-200 drop-shadow-sm">
                Coca-Cola
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-[#E41E3F]/10 text-[#E41E3F] px-2 py-0.5 rounded-full border border-[#E41E3F]/20">
                Official Showcase
              </span>
            </a>

            {/* Replay Intro Button */}
            <button
              onClick={onReplayIntro}
              title="Replay Brand Intro Animation"
              className="p-1.5 rounded-full hover:bg-[#E41E3F]/10 text-slate-500 hover:text-[#E41E3F] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  link.isHighlight
                    ? 'bg-gradient-to-r from-[#E41E3F] to-rose-600 text-white px-3.5 py-1.5 rounded-full shadow-sm hover:shadow-red-500/20 hover:scale-105'
                    : 'text-slate-700 hover:text-[#E41E3F]'
                }`}
              >
                {link.isHighlight && <CupSoda className="w-3.5 h-3.5" />}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Tools: Search Bar & Filter Shortcut */}
          <div className="flex items-center gap-3">
            
            {/* Search Input Bar */}
            <div className="relative flex items-center w-40 sm:w-56">
              <Search className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Coke, flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-white/80 border border-slate-200 rounded-full focus:outline-none focus:border-[#E41E3F] focus:ring-2 focus:ring-[#E41E3F]/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Flavour Lab Button (Mobile/Tablet) */}
            <button
              onClick={onOpenFlavourLab}
              className="lg:hidden p-2 rounded-full bg-[#E41E3F] text-white shadow-sm hover:bg-[#C8102E]"
              title="Open Flavour Lab"
            >
              <CupSoda className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F5] border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  link.isHighlight
                    ? 'bg-[#E41E3F] text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{link.name}</span>
                {link.isHighlight && <Sparkles className="w-4 h-4" />}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Taste Experience © 2026</span>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="text-[#E41E3F] font-bold underline"
              >
                Replay Intro Animation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
