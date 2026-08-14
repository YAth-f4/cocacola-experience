import React, { useState } from 'react';
import { ArrowUp, ArrowLeft, Send, Check, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      scrollToTop();
    }
  };

  return (
    <footer className="relative bg-[#111111] text-white pt-20 pb-12 overflow-hidden border-t border-[#E41E3F]/20">
      
      {/* Background Subtle Red Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E41E3F]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Footer Section: Newsletter & Floating Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-16">
          
          {/* Brand Intro & Newsletter */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="spencerian-font text-4xl sm:text-5xl font-bold text-[#E41E3F] tracking-tight">
                Coca-Cola
              </span>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                Official Showcase
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light leading-relaxed">
              Subscribe to Coca-Cola Taste Club for exclusive updates on limited edition drops, brand news, and secret taste formulations.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md pt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#E41E3F] focus:ring-2 focus:ring-[#E41E3F]/30"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#E41E3F] hover:bg-[#C8102E] text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
              >
                {isSubscribed ? <Check className="w-4 h-4 text-emerald-300" /> : <Send className="w-4 h-4" />}
                {isSubscribed ? 'Subscribed!' : 'Join'}
              </button>
            </form>
          </div>

          {/* User Requested Aesthetic Navigation Buttons: Red Scroll-Up & Black Back Button */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-4">
            
            {/* Black History Back Button */}
            <button
              onClick={handleGoBack}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-black hover:bg-slate-900 border border-white/20 text-white text-xs font-bold shadow-xl flex items-center justify-center gap-2 transition-all hover:border-white/40 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back Page</span>
            </button>

            {/* Signature Red Aesthetic Scroll-to-Top Button */}
            <button
              onClick={scrollToTop}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E41E3F] hover:bg-[#C8102E] text-white text-xs font-black shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <span>Scroll To Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>

          </div>

        </div>

        {/* Middle Footer Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-[#E41E3F]">Beverage Range</h4>
            <ul className="space-y-2 text-slate-400 font-normal">
              <li><a href="#products" className="hover:text-white transition-colors">Coca-Cola® Original Taste</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Diet Coke® Crisp</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Coca-Cola® Zero Sugar</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Vanilla Coke® Infusion</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Cherry Coke® Burst</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Starlight Creations</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-slate-200">Company & Heritage</h4>
            <ul className="space-y-2 text-slate-400 font-normal">
              <li><a href="#heritage" className="hover:text-white transition-colors">Our 1886 History</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">World Without Waste</a></li>
              <li><a href="#flavour-lab" className="hover:text-white transition-colors">Flavour Tasting Lab</a></li>
              <li><a href="#heritage" className="hover:text-white transition-colors">Contour Glass Patent</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-slate-200">Sustainability</h4>
            <ul className="space-y-2 text-slate-400 font-normal">
              <li><a href="#sustainability" className="hover:text-white transition-colors">100% Recyclable Goal</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Water Replenishment</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">PlantBottle Tech</a></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Net-Zero Climate</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-slate-200">Legal & Privacy</h4>
            <ul className="space-y-2 text-slate-400 font-normal">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutritional Disclosure</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 The Coca-Cola Company. All Rights Reserved. "Coca-Cola", "Diet Coke", "Real Magic", and the Contour Bottle are registered trademarks.</p>
          <div className="flex items-center gap-1 text-slate-400 font-medium">
            <span>Crafted with Real Magic</span>
            <Heart className="w-3.5 h-3.5 text-[#E41E3F] fill-[#E41E3F]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
